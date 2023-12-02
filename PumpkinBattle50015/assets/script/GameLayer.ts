import DataManager from "./DataManager";
import Util from "./util/Util";
import { DirectionType, EventId } from "./util/define";
import loaderManager from "./util/loaderManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {

    public static instance = new GameLayer();

    @property({type: cc.Node, tooltip: "放置元素的layout"})
    itemParentNode: cc.Node = null

    @property({type: cc.Node, tooltip: "用户余额节点"})
    userCoinNode: cc.Node = null

    @property({type:cc.Node,tooltip:"游戏节点"})
    itemNode:cc.Node = null

    @property({type: cc.Node, tooltip: "游戏结果节点"})
    resultNode: cc.Node = null

    @property({type: cc.Node, tooltip: "游戏提示节点"})
    tipNode: cc.Node = null
    
    @property({type: cc.Node, tooltip: "倒计时节点"})
    timerNode: cc.Node = null

    @property({type: [cc.SpriteFrame], tooltip: "元素纹理"})
    itemSpriteFrameList: cc.SpriteFrame[] = [];
    
    @property({type: cc.Node, tooltip: "元素父节点"})
    itemParent: cc.Node = null;

    @property(cc.Node)
    ballNode:cc.Node = null

    @property([cc.AudioClip])
    clipArray:cc.AudioClip[] = []

    /** 行数 */
    rowNum = 4;

    /** 列数 */
    colNum = 8;

    /** 元素大小 */
    itemSize: cc.Size = cc.size(0, 0);

    /** 元素缩放 */
    itemScale: number = 0.96;

    /** 元素间距X */
    itemIntervalX: number = 0;

    /** 元素间距Y */
    itemIntervalY: number = 0;

    // /** 元素宽高 */
    // private itemSize: cc.Size = cc.size(360, 150);

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

        //画格子
        for(let i: number = 0; i < this.itemSpriteFrameList.length; i++) {
            this.itemSpriteFrameList[i].getRect().width > this.itemSize.width && (this.itemSize.width = this.itemSpriteFrameList[i].getRect().width)
            this.itemSpriteFrameList[i].getRect().height > this.itemSize.height && (this.itemSize.height = this.itemSpriteFrameList[i].getRect().height)
        }
        this.itemParent["startPos"] = cc.v3(this.itemParent.position.x, this.itemParent.position.y);
        this.creatorItemNode();
    }

    /**
     * 创建item节点
    */
    creatorItemNode() {
        for(let i: number = 0; i < this.rowNum * this.colNum; i++) {
            let itemNode = new cc.Node();
            itemNode.addComponent(cc.Sprite);
            let row = Math.floor(i / this.colNum);
            let col = i % this.colNum;
            let itemWidth = this.itemSize.width * this.itemScale;
            let itemHeight = this.itemSize.height * this.itemScale;

            itemNode.scale = this.itemScale
            itemNode["curIndex"] = i;
            this.itemParent.addChild(itemNode);
            itemNode.position = cc.v3(itemWidth / 2 + col * itemWidth + col * this.itemIntervalX, itemHeight / 2 + (this.rowNum - row - 1) * itemHeight + (this.rowNum - row - 1) * this.itemIntervalY);
            itemNode["startPos"] = cc.v3(itemWidth / 2 + col * itemWidth + col * this.itemIntervalX, itemHeight / 2 + (this.rowNum - row - 1) * itemHeight + (this.rowNum - row - 1) * this.itemIntervalY);
          
        }

        this.initGameData();
    }

     /**
     * 初始化节点数据
    */
     initGameData() {
        let curId = 1;
        for(let i: number = 0; i < this.rowNum * this.colNum; i++) {
            let itemNode = this.itemParent.children[i];
            itemNode["itemId"] = curId;
            itemNode.getComponent(cc.Sprite).spriteFrame = this.itemSpriteFrameList[curId - 1];
            curId = curId == 1 ? 2 : 1;
        }
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
        //创建游戏节点
        // this.creatGameNode()
        console.log("this.itemNode",this.itemNode);
        this.listBall()
        //随机创建障碍物
        this.randObs() 
    }
    /**随机创建障碍物 */
    randObs(){
        DataManager.gamePos[0]  = Util.getRandomInt(1,30)
        DataManager.gamePos[1]  = Util.getRandomInt(1,30)
        DataManager.gamePos[2]  = Util.getRandomInt(1,30)
        DataManager.gamePos[3]  = Util.getRandomInt(1,30)
        DataManager.gamePos[4]  = Util.getRandomInt(1,30)
        DataManager.gamePos.forEach(e=>{
            this.itemParentNode.children[e].active = true
        })
        
    }
    /**绑定球事件 */
    listBall(){
        this.ballNode.on(cc.Node.EventType.TOUCH_START,(event)=>{
            this.ballNode["startPos"] = cc.v2(event.getLocation().x, event.getLocation().y)
         })
         this.ballNode.on(cc.Node.EventType.TOUCH_CANCEL,(event)=>{
            let statPos =  this.ballNode["startPos"]
            let endPos = cc.v2(event.getLocation().x,event.getLocation().y)
            let direction = this.isDirection(statPos,endPos)
             cc.audioEngine.playEffect(this.clipArray[1],false)
            if(direction){
                this.movingBone( this.ballNode,direction)
            }
         })
    }
    /**滑块移动方向 */
    movingBone(taget:cc.Node,direction:DirectionType){
        let moveindx:number
        // console.log("DataManager.index",DataManager.index);
        switch(direction){
            case DirectionType.Top:
                console.log("上");
                if(DataManager.index >= this.colNum){
                    moveindx = DataManager.index - this.colNum
                }
            break;
            case DirectionType.Bottom:
                console.log("下");
                if(DataManager.index <= this.rowNum * this.colNum){
                    moveindx = DataManager.index + this.colNum
                }
            break;
            case DirectionType.Left:
                console.log("左");
                if((DataManager.index) % this.colNum >= 0){
                    moveindx = DataManager.index - 1
                    if(moveindx < 0){
                        moveindx = 0
                    }
                }
            break;
            case DirectionType.Right:
                console.log("右");
                if((DataManager.index) % this.colNum < this.colNum - 1){
                    moveindx = DataManager.index + 1
                }
            break;
           
        }
        
        if(moveindx!=undefined && moveindx!=DataManager.gamePos[0] && moveindx!=DataManager.gamePos[1] && moveindx!=DataManager.gamePos[2] && moveindx!=DataManager.gamePos[3] && moveindx!=DataManager.gamePos[4]){
            cc.tween(taget)
            .to(0.3,{position:this.itemParentNode.children[moveindx].position})
            .call(()=>{
                DataManager.index= moveindx
                // console.log("DataManager.index",DataManager.index);
                if( DataManager.index == 31){
                    this.showResult(true)
                }
            })
            .start()
        }
        
        // cc.tween(taget)
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
    /**停止篮筐 */
    clearTween(){
        this.node.stopAllActions()
    }
    /**
     * 开始倒计时
    */
    startTimer() {
        DataManager.timerFunc = () => {
            DataManager.indexTime--;
            if(DataManager.indexTime <= 0) {
                cc.audioEngine.playEffect(this.clipArray[1],false)
                this.showResult(false)
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
        DataManager.gamePos = [0,0,0,0,0]
        DataManager.index = 0
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

