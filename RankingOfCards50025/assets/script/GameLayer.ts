import DataManager from "./DataManager";
import ItemNode from "./ItemNode";
import { EventId } from "./util/define";
import EventMgr from "./util/event/EventMgr";
import loaderManager from "./util/loaderManager";
import util from "./util/util";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {

    @property({type: cc.Node, tooltip: "元素放置节点"})
    itemPlaceNode: cc.Node = null

    @property({type: [cc.SpriteFrame], tooltip: "元素纹理"})
    itemResList: cc.SpriteFrame[] = [];

    @property({type: cc.Node, tooltip: "用户余额节点"})
    userCoinNode: cc.Node = null

    @property({type: cc.Node, tooltip: "游戏结果节点"})
    resultNode: cc.Node = null

    @property({type: cc.Node, tooltip: "游戏提示节点"})
    tipNode: cc.Node = null
    
    @property({type: cc.Node, tooltip: "倒计时节点"})
    timerNode: cc.Node = null

    @property({type: cc.Node, tooltip: "可移动区域"})
    movingNode: cc.Node = null

    @property({type: cc.Node, tooltip: "发牌区域"})
    PorkerNode: cc.Node = null

    @property({type: cc.Node, tooltip: "音效按钮节点"})
    soundBtn: cc.Node = null

    @property({type: cc.Prefab, tooltip: "元素预制体"})
    itemPrefab: cc.Prefab = null

    @property({type: [cc.AudioClip]})
    audioResList: cc.AudioClip[] = [];

    public iconPf:cc.Prefab = null

    public index:number = 0
    

     /**加载卡片 */
     async loadCard(){
        this.iconPf =  await loaderManager.getRes("item","prefab",cc.Prefab)
        if(this.iconPf){
            console.log("预制体加载成功！");
            
        }
    }

    start () { 
        this.updateUserCoin();
        this.updateTimerUi()
        this.loadCard()
        this.listerEvent()
    }
    //绑定事件
    listerEvent(){
        EventMgr.Instance.Register(EventId.creatPorker,this.creatPorker,this)
        EventMgr.Instance.Register(EventId.ResultEvent,this.showResult,this)
    }
    //取消事件绑定
    offEvent(){
        EventMgr.Instance.Off()
    }
    /**
     * 游戏内按钮绑定事件
    */
    btnEvent(event: cc.Event) {
        let name = event.target.name;

        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        switch(name) {
            case "btnStartGame":
                this.playGame();
                break;
            case "btnReturn":
                this.hideResultNode();
                this.offEvent()
                cc.director.loadScene("startGame");
                break;
            case "btNextGame":
            case "btStartOver":
                this.hideResultNode();
                break;
            case "btExit":
                this.offEvent()
                this.hideResultNode();
                cc.director.loadScene("startGame");
                break;
            case "btnHelp":
                this.tipNode.active = true;
                break;
            case "btnCloseHelp":
                this.hideTipNode();
                break;
            case "btnSound":
                this.openOrCloseSound();
                break;
        }
    }

    /** 开始游戏 */
    playGame(){
        if(DataManager.curGameIsRun) return
        DataManager.curGameIsRun = true;
        cc.director.getCollisionManager().enabled = true;
        this.startTimer();
        for(let i=1;i<this.PorkerNode.children.length;i++){
             //创建扑克牌
             this.creatPorker(i)
        }
        cc.audioEngine.play(this.audioResList[6],false,1)
       
    }

    // //切换父元素
    // changParen(changeNode:cc.Node){
    //     changeNode.setParent(this.movingNode)
    // }

    creatPorker(Porkerindex:number){
        let porkerType = util.getRandom(0,3)
        let index = util.getRandom(0,DataManager.Porker[porkerType].length - 1)
        let porkerNode = cc.instantiate(this.iconPf)
        porkerNode.setParent(this.movingNode)
        porkerNode.position = this.PorkerNode.children[Porkerindex].position
        porkerNode.getComponent(ItemNode).init(index + 1,Porkerindex,porkerNode.position,porkerType + 1)
        DataManager.Porker[porkerType].splice(index,1)
        console.log("DataManager.Porker",DataManager.Porker);
        
        //绑定触摸事件
        this.listenTouch(porkerNode)
        
    }

    listenTouch(touch:cc.Node){
        touch.on(cc.Node.EventType.TOUCH_START,()=>{
            console.log("点击");
            touch.getComponent(ItemNode).isTouch = true
            this.touchFn(touch)
            cc.audioEngine.play(this.audioResList[8],false,1)
        })
        
        touch.on(cc.Node.EventType.TOUCH_END,()=>{
            console.log("取消点击");
            touch.getComponent(ItemNode).isTouch = true
            touch.position = touch.getComponent(ItemNode).InitPos
        })
    }

    touchFn(touch:cc.Node){
        touch.on(cc.Node.EventType.TOUCH_MOVE,(e)=>{
            touch.position = cc.v3(touch.position.x += e.getDelta().x,touch.position.y += e.getDelta().y,1)   
        })
    }

    
    /**
     * 开启或关闭音效
    */
    openOrCloseSound() {
        if(DataManager.curSoundIsClose) {
            this.soundBtn.color = cc.color(170, 170, 170, 255);

            cc.find("Canvas").getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        } else {
            this.soundBtn.color = cc.color(255, 255, 255, 255);

            cc.find("Canvas").getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }

        DataManager.curSoundIsClose = !DataManager.curSoundIsClose;
    }
    /**
     * 开始倒计时
    */
    startTimer() {
        let speed = 0.01;
        DataManager.timerFunc = () => {
            DataManager.indexTime -= speed;
            if(DataManager.indexTime <= 0) {
                this.showResult(false);
            }
            this.timerNode.getChildByName("timeText").getComponent(cc.Label).string = Math.floor(DataManager.indexTime) + "s";
        }
        this.schedule(DataManager.timerFunc, speed);
       
    }

    
    /**
     * 更新倒计时
    */
    updateTimerUi() {
        cc.find("barBg/bar", this.timerNode).getComponent(cc.Sprite).fillRange = DataManager.indexTime / DataManager.startTime;
        this.timerNode.getChildByName("timeText").getComponent(cc.Label).string = Math.ceil(DataManager.indexTime) + "s";
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
        lableNode.getComponent(cc.Label).string = "" + DataManager.curScord;
    }

    /**
     * 展示结果
    */
    showResult(isWin) {
        this.unschedule(DataManager.timerFunc);
        DataManager.indexTime = DataManager.startTime;
        if(isWin) {
            let winNumLable = cc.find("win/winNum", this.resultNode);
            DataManager.curScord += 100;
            DataManager.curWinNum += 100;
            winNumLable.getComponent(cc.Label).string = "" + DataManager.curWinNum;
        }

        
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[isWin ? 4 : 5];
        this.node.getComponent(cc.AudioSource).play();

        let winNode = this.resultNode.getChildByName("win");
        let loseNode = this.resultNode.getChildByName("lose");

        winNode.active = isWin;
        loseNode.active = !isWin;
        let curAniNode = isWin ? winNode : loseNode;

        this.resultNode.active = true;

        curAniNode.scale = 0.6;
        curAniNode.opacity = 100;

        cc.tween(curAniNode)
            .to(0.3, {scale: 1.1, opacity: 255})
            .to(0.3, {scale: 1})
            .start();

    }

    /**
     * 关闭结果展示
    */
    hideResultNode() {
        DataManager.curGameIsRun = false;
        this.resultNode.active = false;
        DataManager.curWinNum = 0;
        this.movingNode.removeAllChildren()
        DataManager._indexTime = DataManager.startTime
        this.updateTimerUi()
         /**扑克牌 */
        DataManager.putPorker = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
        DataManager.putNum = 0
        DataManager.Porker = [[1,2,3,4,5,6,7,8,9,10,11,12,13],[1,2,3,4,5,6,7,8,9,10,11,12,13],[1,2,3,4,5,6,7,8,9,10,11,12,13],[1,2,3,4,5,6,7,8,9,10,11,12,13]]
    }

    /**
     * 关闭提示展示
    */
    hideTipNode() {
        cc.tween(this.tipNode.getChildByName("helpText"))
            .to(0.2, {scale: 0.5})
            .call(() => {
                this.tipNode.active = false;
                this.tipNode.getChildByName("helpText").scale = 1;
            })
            .start();
    }
}

