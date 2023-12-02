import DataManager from "./DataManager";
import Util from "./util/Util";
import { EventId } from "./util/define";
import loaderManager from "./util/loaderManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {

    public static instance = new GameLayer();

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

    @property(cc.Node)  //篮筐
    ballBasket:cc.Node = null

    @property([cc.AudioClip])
    clipArray:cc.AudioClip[] = []

    @property(cc.Node)
    ball:cc.Node = null

    /** 元素宽高 */
    private itemSize: cc.Size = cc.size(360, 150);

    /** 元素总量 */
    itemNum: number = 12;

    /** 元素类别数量 */
    itemTypeNum: number = 6;

    public index:number = 0

    public iconPf:cc.Prefab = null

     /**加载卡片 */
    async loadCard(){
        this.iconPf =  await loaderManager.getRes("gen","prefab",cc.Prefab)
        if(this.iconPf){
            console.log("预制体加载成功！");
            
        }
    }

    start () { 
        DataManager.gameLayerScr = this;
        DataManager.curWinNum = 0;
        this.updateUserCoin();
        this.updateTimerUi()
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
        DataManager.curGameIsRun = true;
        cc.audioEngine.playEffect(this.clipArray[0],false)
        this.startTimer();
        this.moveBallBasket()
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true
        this.listenBall()

       
    }

    /**移动篮筐 */
    moveBallBasket(){
        let moveSpeed = 1.5
        let ballBasket = this.ballBasket.getChildByName("bg1")
        let ballBasket2 = this.ballBasket.getChildByName("bg2")
        cc.tween(this.ballBasket.getChildByName("bg1")).repeatForever(
            cc.tween()
                .to(moveSpeed,{position:cc.v3(280,ballBasket.position.y)})
                .to(moveSpeed,{position:cc.v3(0,ballBasket.position.y)})
                .to(moveSpeed,{position:cc.v3(-280,ballBasket.position.y)})
                .to(moveSpeed,{position:cc.v3(0,ballBasket.position.y)})
        )
        .start()
        cc.tween(this.ballBasket.getChildByName("bg2")).repeatForever(
            cc.tween()
                .to(moveSpeed,{position:cc.v3(280,ballBasket2.position.y)})
                .to(moveSpeed,{position:cc.v3(0,ballBasket2.position.y)})
                .to(moveSpeed,{position:cc.v3(-280,ballBasket2.position.y)})
                .to(moveSpeed,{position:cc.v3(0,ballBasket2.position.y)})
        )
        .start()
    }
    /**停止篮筐 */
    clearTween(){
        this.node.stopAllActions()
    }
    /**绑定篮球监听 */
    listenBall(){
        let content = new cc.Vec2(-248, 245)
        this.ball.on(cc.Node.EventType.TOUCH_END,()=>{
            console.log("发射后篮球");
            cc.tween(this.ball)
            .bezierTo(0.8,cc.v2(this.ball.position.x,this.ball.position.y),content,cc.v2(0,258))
            .call(()=>{
                this.ball.scale = 0.5
                this.ball.getComponent(cc.BoxCollider).enabled = true
                cc.tween(this.ball).to(0.5,{position:cc.v3(0,this.ball.position.y  - 1100,0)})
                .call(()=>{
                    this.ball.getComponent(cc.BoxCollider).enabled = false
                })
                .start()
            })
            .start()
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
                this.showRes()
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
        cc.director.getPhysicsManager().enabled = false;
        cc.director.getCollisionManager().enabled = false
        DataManager.indexTime = DataManager.startTime;
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
        // this.itemParentNode.removeAllChildren();
        //解除按钮绑定
        // if(DataManager.curGameIsRun != false){
        //      //清空老虎icon
        // this.itemParentNode.children[DataManager.selectPorkerArray[0]].getComponent(cc.Sprite).spriteFrame = this.tigherSp[0]
        // }
        DataManager.index = 12
        this.ball.off(cc.Node.EventType.TOUCH_END)
        DataManager._curScord = 0
        this.resultNode.active = false;
        DataManager.curGameIsRun = false;
        DataManager.curWinNum = 0;
        DataManager.indexTime = DataManager.startTime
        this.timerNode.getComponent(cc.ProgressBar).progress = 1
        cc.director.getPhysicsManager().enabled = false
        cc.director.getCollisionManager().enabled = false
        this.clearTween()
        // DataManager.selectPorkerArray[0] = -1
    }

    /**
     * 关闭提示展示
    */
    hideTipNode() {
        this.tipNode.active = false;
    }
}

