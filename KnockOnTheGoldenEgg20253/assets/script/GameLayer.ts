import DataManager from "./DataManager";
import GenNode from "./GenNode";
import hitNode from "./hitNode";
import Util from "./util/Util";
import { EventId } from "./util/define";
import EventMgr from "./util/event/EventMgr";
import loaderManager from "./util/loaderManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {

    public static instance = new GameLayer();

    @property({type: cc.Node, tooltip: "放置元素的layout"})
    itemParentNode: cc.Node = null

    @property({type: cc.Node, tooltip: "放置元素的layout"})
    createParentNode: cc.Node = null

    @property({type: cc.Node, tooltip: "用户余额节点"})
    userCoinNode: cc.Node = null

    @property({type: cc.Node, tooltip: "游戏结果节点"})
    resultNode: cc.Node = null

    @property({type: cc.Node, tooltip: "游戏提示节点"})
    tipNode: cc.Node = null
    
    @property({type: cc.Node, tooltip: "倒计时节点"})
    timerNode: cc.Node = null

    @property([cc.AudioClip])
    clipArray:cc.AudioClip[] = []

    @property([cc.SpriteFrame])
    cardSpArray:cc.SpriteFrame[] = []

    @property(cc.Node)
    hitNode:cc.Node = null

    /** 元素宽高 */
    private itemSize: cc.Size = cc.size(360, 150);

    /** 元素总量 */
    itemNum: number = 12;

    /** 元素类别数量 */
    itemTypeNum: number = 6;

    public index:number = 0

    public iconPf:cc.Prefab = null

     /**加载egg */
    async loadEgg(){
        this.iconPf =  await loaderManager.getRes("egg","prefab",cc.Prefab)
        if(this.iconPf){
            console.log("预制体加载成功！");
        }
    }

    start () { 
        DataManager.gameLayerScr = this;
        DataManager.curWinNum = 0;
        this.updateUserCoin();
        this.updateTimerUi()
        this.loadEgg()
        EventMgr.Instance.Register(EventId.desty,this.closeTimer,this)
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
                cc.director.loadScene("UI");
                DataManager.curGameIsRun = false;
                this.hideResultNode()
                break;
            case "btNextGame":
            case "btStartOver":
                this.hideResultNode();
                break;
            case "btExit":
                cc.director.loadScene("UI");
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
        cc.audioEngine.playEffect(this.clipArray[1],false)
    }


    /** 开始游戏 */
    playGame(){
        if(DataManager.curGameIsRun) return
        DataManager.curGameIsRun = true;
        cc.audioEngine.playEffect(this.clipArray[0],false)
        //可以的锤子
        this.hitNode.getComponent(hitNode).onCanMove()
        //开启动态生成鸡蛋
        this.schedule(()=>{
            this.playEggCreat()
        },Util.getRandomInt(0.5,1))
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true
        this.startTimer();
       
    }

    playEggCreat(){
        let ranType = Util.getRandomInt(1,2)
        let pos:cc.Vec3 = this.itemParentNode.children[Util.getRandomInt(0,8)].position
        let icon = cc.instantiate(this.iconPf)
        icon.getComponent(GenNode).init(ranType)
        icon.setParent(this.createParentNode)
        icon.setPosition(pos)
        // this.scheduleOnce(this.destroyNode,Util.getRandomInt(2,3))
    }

    /**关闭定时器 */
    closeTimer(){
        this.unschedule(this.destroyNode)
    }

    /**销毁节点 */
    destroyNode(iconNode:cc.Node){
        this.unschedule(this.destroyNode)
        iconNode.destroy()
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
        this.unscheduleAllCallbacks()
        if(DataManager.curScord >=200){
            this.showResult(true)
        }else{
            this.showResult(false)
        }
    }

    /**
     * 展示结果
    */
    showResult(isWin:boolean) {
        this.unschedule(DataManager.timerFunc);
       
        DataManager.indexTime = DataManager.startTime;
        // DataManager.isLayout = true
        if(isWin) {
            let winNumLable = cc.find("win/winNum", this.resultNode);
            winNumLable.getComponent(cc.Label).string = "" + DataManager.curWinNum;
            cc.audioEngine.playEffect(this.clipArray[3],false)
            DataManager.curScord += 100
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
        this.createParentNode.children.forEach(e=>{
            e.destroy()
        })
        this.hitNode.off(cc.Node.EventType.TOUCH_MOVE)
        this.hitNode.off(cc.Node.EventType.TOUCH_END)
        this.hitNode.off(cc.Node.EventType.TOUCH_CANCEL)

        cc.director.getPhysicsManager().enabled = false;
        cc.director.getCollisionManager().enabled = false
        // this.itemParentNode.removeAllChildren();
        //解除按钮绑定
        // if(DataManager.curGameIsRun != false){
        //      //清空老虎icon
        // this.itemParentNode.children[DataManager.selectPorkerArray[0]].getComponent(cc.Sprite).spriteFrame = this.tigherSp[0]
        // }
        this.resultNode.active = false;
        DataManager.curGameIsRun = false;
        DataManager.curWinNum = 0;
        DataManager.curScord = 0
        DataManager.indexTime = DataManager.startTime
        // this.timerNode.getComponent(cc.ProgressBar).progress = 1
       
        // DataManager.selectPorkerArray[0] = -1
    }

    /**
     * 关闭提示展示
    */
    hideTipNode() {
        this.tipNode.active = false;
    }
}

