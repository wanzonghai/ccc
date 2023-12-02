import DataManager from "./DataManager";
import Card from "./card";
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
    ThiefNode:cc.Node = null

    @property(cc.Node)
    endNode:cc.Node = null

    @property(cc.Node)
    playBtn:cc.Node = null

    @property([cc.Node])
    policeArray:cc.Node[] = []

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
        this.iconPf =  await loaderManager.getRes("missile","prefab",cc.Prefab)
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
        this.creatCard()
        this.schedule(()=>{
            this.creatCard()
        },Util.getRandomInt(3,4))
        //监听障碍物
        this.listenObs()
        this.startTimer();
        
    }
    /**创建卡片 */
    creatCard(){
        let cardType:number = Util.getRandomInt(0,3)
        let cardNode = cc.instantiate(this.iconPf)
        cardNode.setParent(this.itemParentNode.children[cardType])
        cardNode.setPosition(0,632)
        cardNode.getComponent(Card).init(cardType)
    }
    movingPolice(){
       let time = 4.5
       let pos1 = this.generateRandomPoint(this.itemParentNode)
       let pos2 = this.generateRandomPoint(this.itemParentNode)
       let pos3 = this.generateRandomPoint(this.itemParentNode)
       let pos4 = this.generateRandomPoint(this.itemParentNode)
       let pos5 = this.generateRandomPoint(this.itemParentNode)
       cc.tween(this.policeArray[0])
            .call(()=>{
                this.policeArray[0].getComponent(cc.Animation).play('thift')
            })
            .to(time,{position:pos1})
            .start()
        cc.tween(this.policeArray[1])
            .call(()=>{
                this.policeArray[1].getComponent(cc.Animation).play('thift')
            })
            .to(time,{position:pos2})
            .start()
        cc.tween(this.policeArray[2])
            .call(()=>{
                this.policeArray[2].getComponent(cc.Animation).play('thift')
            })
            .to(time,{position:pos3})
            .start()
        cc.tween(this.policeArray[3])
            .call(()=>{
                this.policeArray[3].getComponent(cc.Animation).play('thift')
            })
            .to(time,{position:pos4})
            .start()
        cc.tween(this.policeArray[4])
            .call(()=>{
                this.policeArray[4].getComponent(cc.Animation).play('thift')
            })
            .to(time,{position:pos5})
            .start()
        
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

    
    public generateRandomPoint(node:cc.Node){
        let halfWidth = node.width/2 
        let halfHeight = node.height/2
        let x = Util.getRandomInt(node.position.x - halfWidth,node.position.x + halfWidth + 1)
        let y = Util.getRandomInt(node.position.y - halfHeight,node.position.y + halfHeight + 1)
        return cc.v3(x,y,0)
    }

    /**更改地刺方向 */
    changObs(obsName:string){
        this.endNode.children.forEach(e=>{
            e.active = false
        })
        if(obsName == "left"){
            DataManager.obsType = 0
            this.endNode.children[0].active = true
            this.endNode.children[2].active = true
            this.endNode.children[4].active = true
        }else{
            DataManager.obsType = 1
            this.endNode.children[1].active = true
            this.endNode.children[3].active = true
            this.endNode.children[5].active = true
        }
    }

    /**滑块移动方向 */
    movingBone(taget:cc.Node,direction:DirectionType){
        switch(direction){
            case DirectionType.Left:
                console.log("左");
                this.changObs("left")
            break;
            case DirectionType.Right:
                console.log("右");
                this.changObs("right")
            break;
        }
    
    }

     /**绑定滑动 */
     listenObs(){
         this.endNode.on(cc.Node.EventType.TOUCH_START,(event)=>{
             this.endNode["startPos"] = cc.v2(event.getLocation().x, event.getLocation().y)
          })
          this.endNode.on(cc.Node.EventType.TOUCH_CANCEL,(event)=>{
             let statPos = this.endNode["startPos"]
             let endPos = cc.v2(event.getLocation().x,event.getLocation().y)
             let direction = this.isDirection(statPos,endPos)
             cc.audioEngine.playEffect(this.clipArray[1],false)
             if(direction){
                 this.movingBone(this.endNode,direction)
             }
          })
     }

     /**取消绑定滑动 */
     offBallEvent(){
         this.endNode.off(cc.Node.EventType.TOUCH_START)
         this.endNode.off(cc.Node.EventType.TOUCH_CANCEL)
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
        this.unscheduleAllCallbacks();
        if(this.itemParentNode.children){
            this.itemParentNode.children.forEach(e=>{
                e.destroy()
            })
        }
        // this.unschedule(DataManager.timerFunc);
        cc.director.getCollisionManager().enabled = false
        // this.clearTween()
        
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
        DataManager.obsType = 0
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

