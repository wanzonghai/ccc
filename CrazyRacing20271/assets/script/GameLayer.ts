import DataManager from "./DataManager";
import obstacle from "./obstacleNode";
import Util from "./util/Util";
import { DirectionType, EventId } from "./util/define";
import EventMgr from "./util/event/EventMgr";
import loaderManager from "./util/loaderManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {

    public static instance = new GameLayer();


    @property([cc.AudioClip])
    clipArray:cc.AudioClip[] = []

    @property(cc.Node)
    ballNode:cc.Node = null

    @property(cc.Node)
    endNode:cc.Node = null

    @property(cc.Node)
    playBtn:cc.Node = null

    @property(cc.Node)
    gameContent:cc.Node = null

    @property({type: cc.Node, tooltip: "放置元素的layout"})
    itemParentNode: cc.Node = null

    @property({type: cc.Node, tooltip: "用户余额节点"})
    userCoinNode: cc.Node = null

    @property({type: cc.Node, tooltip: "游戏结果节点"})
    resultNode: cc.Node = null

    @property({type: cc.Node, tooltip: "游戏提示节点"})
    tipNode: cc.Node = null
    
    @property({type: cc.Node, tooltip: "倒计时节点"})
    timerNode: cc.Node = null

    /** 元素宽高 */
    private itemSize: cc.Size = cc.size(360, 150);

    /** 元素总量 */
    itemNum: number = 12;

    /** 元素类别数量 */
    itemTypeNum: number = 6;

    public index:number = 0

    public iconPf:cc.Prefab = null

    async loadCard(){
        this.iconPf =  await loaderManager.getRes("ball_type","prefab",cc.Prefab)
        if(this.iconPf){
            console.log("预制体加载成功！");
        }
    }
    start () { 
        DataManager.gameLayerScr = this;
        DataManager.curWinNum = 0;
        this.updateUserCoin();
        this.updateTimerUi()
        this.loadCard()
        this.listeEvent()
    }
    /**
     * 事件绑定
     */
    listeEvent(){
        EventMgr.Instance.Register(EventId.ResEvent,this.showResult,this)
    }

    /**
     * 游戏内按钮绑定事件
    */
    btnEvent(event: cc.Event) {
        let name = event.target.name;
        switch(name) {
            case "btnStartGame":
                this.playGame();
                break;
            case "btnReturn":
                cc.director.loadScene("startGame");
                DataManager.curGameIsRun = false;
                this.hideResultNode()
                break;
            case "btNextGame":
            case "btStartOver":
                this.hideResultNode();
                break;
            case "btExit":
                cc.director.loadScene("startGame");
                DataManager.curGameIsRun = false;
                this.hideResultNode()
                break;
            case "btnHelp":
                this.tipNode.active = true;
                break;
            case "btnCloseHelp":
                this.hideTipNode();
                break;
        }
        cc.audioEngine.playEffect(this.clipArray[0],false)
    }


    /** 开始游戏 */
    playGame(){
        if(DataManager.curGameIsRun) return
        cc.director.getCollisionManager().enabled = true;
        DataManager.curGameIsRun = true;
        this.playBtn.active = false
        cc.audioEngine.playEffect(this.clipArray[0],false)
        this.startTimer();
        this.listBall()
        this.endMove()
        //开启障碍
        this.createObstacle()
        this.schedule(()=>{
            this.createObstacle()
        },4)
       
        //创建游戏节点
        // this.creatGameNode()
        
    }
    createObstacle(){
        let obstacleNode:cc.Node = cc.instantiate(this.iconPf)
        obstacleNode.setParent(this.gameContent)
        obstacleNode.setPosition(0,639)
        obstacleNode.getComponent(obstacle).Moveing()
    }
    /**终点移动 */
    endMove(){
        cc.tween(this.endNode)
            .to(2,{position:cc.v3(0,-1500,0)})
            .start()
        cc.tween(this.endNode)
            .to(2,{scale:1.5})
            .start()
       
    }


    /**滑块移动方向 */
    movingBone(taget:cc.Node,direction:DirectionType){
        let moveindx:number
        switch(direction){
            case DirectionType.Top:
            console.log("上");
            return
            break;
            case DirectionType.Bottom:
            console.log("下");
            return
            break;
            case DirectionType.Left:
            if(DataManager.index == -1){
                moveindx = 1
            }else if(DataManager.index != 0){
                moveindx = DataManager.index - 1
            }else{
                moveindx = DataManager.index
            }
            console.log("左");
            break;
            case DirectionType.Right:
            if(DataManager.index == -1){
                moveindx = 2
            }else if(DataManager.index != 3){
                moveindx = DataManager.index + 1
            }else{
                moveindx = DataManager.index
            }
            console.log("右");
            break;
           
        }
        cc.tween(taget)
        .to(0.4,{position:this.itemParentNode.children[moveindx].position})
        .call(()=>{
            DataManager.index = moveindx
           
        })
        .start()
       
    }

     /**绑定足球滑动 */
     listBall(){
         this.ballNode.on(cc.Node.EventType.TOUCH_START,(event)=>{
             this.ballNode["startPos"] = cc.v2(event.getLocation().x, event.getLocation().y)
          })
          this.ballNode.on(cc.Node.EventType.TOUCH_CANCEL,(event)=>{
             let statPos = this.ballNode["startPos"]
             let endPos = cc.v2(event.getLocation().x,event.getLocation().y)
             let direction = this.isDirection(statPos,endPos)
              cc.audioEngine.playEffect(this.clipArray[1],false)
             if(direction){
                 this.movingBone(this.ballNode,direction)
             }
          })
     }

     /**取消绑定足球滑动 */
     offBallEvent(){
         this.ballNode.off(cc.Node.EventType.TOUCH_START)
         this.ballNode.off(cc.Node.EventType.TOUCH_CANCEL)
     }

    isDirection(startPos: cc.Vec2, endPos: cc.Vec2): DirectionType{
        let direction: DirectionType = DirectionType.Left;
        let offsetX = Math.abs(endPos.x - startPos.x);
        let offsetY = Math.abs(endPos.y - startPos.y);
        if(offsetX >= offsetY) {
            direction = endPos.x > startPos.x ? DirectionType.Right : DirectionType.Left;
        } else {
            direction = endPos.y > startPos.y ? DirectionType.Top : DirectionType.Bottom;
        }
        return direction;
    }
    /**停止生成障碍物 */
    clearTween(){
        this.unschedule(this.createObstacle)
        this.ballNode.stopAllActions()
        // 销毁预制体
        this.gameContent.children.forEach((e)=>{
            e.destroy()
        })
    }
    /**
     * 开始倒计时
    */
    startTimer() {
        DataManager.timerFunc = () => {
            DataManager.indexTime--;
            if(DataManager.indexTime <= 0) {
                cc.audioEngine.playEffect(this.clipArray[1],false)
                this.showResult(true)
            }
        }
        this.schedule(DataManager.timerFunc, 1);
    }

    
    /**
     * 更新倒计时
    */
    updateTimerUi() {
        this.timerNode.getChildByName("timeText").getComponent(cc.Label).string = "TIME:" + DataManager.indexTime;
        this.timerNode.getComponent(cc.ProgressBar).progress = DataManager.indexTime / DataManager.startTime
      
    }

    /**更新Layout布局 */
    updataLayout(){
        if(DataManager.isLayout){
            this.itemParentNode.getComponent(cc.Layout).type = cc.Layout.Type.GRID
        }else{
            this.itemParentNode.getComponent(cc.Layout).type = cc.Layout.Type.NONE
        }
    }

    /**
     * 更新余额
    */
    updateUserCoin() {
        let lableNode = this.userCoinNode.getChildByName("coinLable");
        cc.tween(lableNode)
            .to(0.1, {scale: 1.1})
            .to(0.1, {scale: 1})
            .start();
        lableNode.getComponent(cc.Label).string = "SCORE:" + DataManager.curScord;
    }

    /**结果判断 */
    showRes(){
        if(DataManager._curScord >=210){
            this.showResult(true)
        }else{
            // this.showResult(true)
            this.showResult(false)
        }
    }

    /**
     * 展示结果
    */
    showResult(isWin:boolean) {
        this.unschedule(DataManager.timerFunc);
        cc.director.getCollisionManager().enabled = false
        this.clearTween()
        if(isWin) {
            let winNumLable = cc.find("win/winNum", this.resultNode);
            winNumLable.getComponent(cc.Label).string = "" + DataManager.curWinNum;
            cc.audioEngine.playEffect(this.clipArray[3],false)
        }else{
            cc.audioEngine.playEffect(this.clipArray[4],false)
        }
        let winNode = this.resultNode.getChildByName("win");
        let loseNode = this.resultNode.getChildByName("lose");

        winNode.active = isWin;
        loseNode.active = !isWin;

        this.resultNode.active = true;
        

    }

    /**
     * 关闭结果展示
    */
    hideResultNode() {
        this.resultNode.active = false;
        DataManager.curGameIsRun = false;
        DataManager.curWinNum = 0;
        DataManager.indexTime = DataManager.startTime
        this.timerNode.getComponent(cc.ProgressBar).progress = 1
        this.offBallEvent()
        EventMgr.Instance.clearEvent()
    }

    /**
     * 关闭提示展示
    */
    hideTipNode() {
        this.tipNode.active = false;
    }
}

