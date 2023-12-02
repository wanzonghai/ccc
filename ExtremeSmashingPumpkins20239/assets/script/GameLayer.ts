import DataManager from "./DataManager";
import ItemNode from "./ItemNode";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {

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

    @property({type: cc.Prefab, tooltip: "元素预制体"})
    itemPrefab: cc.Prefab = null

    @property({type:[cc.SpriteFrame],tooltip:"老虎icon图片"})
    tigherSp:cc.SpriteFrame[] = []

    @property({type: cc.Node, tooltip: "特效节点"})
    effectFloor: cc.Node = null

    /** 元素宽高 */
    private itemSize: cc.Size = cc.size(150, 150);

    /** 元素总量 */
    itemNum: number = 32;

    /** 元素类别数量 */
    itemTypeNum: number = 8;

    public index:number = 0

    

    start () { 
        DataManager.gameLayerScr = this;
        DataManager.curWinNum = 0;
        this.updateUserCoin();
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
    }


    /** 开始游戏 */
    playGame(){
        if(DataManager.curGameIsRun) return
        DataManager.curGameIsRun = true;

        // for(let i = 0; i < this.itemNum/2; i++){
        //     this.creatPoker()
        // }

        //打乱牌的顺序
        // for(let i = 0; i < this.itemNum; i++){
        //     this.randomPoker()
        // }
        this.randomTiger()
        this.listetPockerClick();
        // DataManager.isLayout = false
        // this.index = this.itemNum/2;
        this.startTimer();
    }

    /**随机生成点击数 */
    randomTiger(){
        DataManager.clickNumArr = [this.getRandomInt(10, 30), this.getRandomInt(10, 30), this.getRandomInt(10, 30)];
        //更新数
        this.renewClickNum()
    }
    /**更新点击数 */
    renewClickNum(){
        this.itemParentNode.children.forEach((e,index) =>{
            if(DataManager.clickNumArr[index] == -1){
                e.getChildByName("icon").getComponent(cc.Label).string = "∞"
            }else{
                e.getChildByName("icon").getComponent(cc.Label).string = DataManager.clickNumArr[index] + ""
            }   
            
        })
    }


    /**打乱顺序 */
    randomPoker(){
        let rand = this.getRandomInt(0,this.itemNum/2)
        let index = rand + 2
        if(index >= this.itemNum){
            index = 0
        }
        this.itemParentNode.insertChild(this.itemParentNode.children[rand],index)
    }

    /**生成随机数 */
    getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    /**生成扑克牌 */
    creatPoker(){
        let pokerNum = this.getRandomInt(1,this.itemTypeNum).toString();
        let porker1Node = cc.instantiate(this.itemPrefab)
        let porker2Node = cc.instantiate(this.itemPrefab)

        porker1Node.getComponent(ItemNode).init(pokerNum, this.itemSize)
        porker1Node.parent = this.itemParentNode

        porker2Node.getComponent(ItemNode).init(pokerNum, this.itemSize)
        porker2Node.parent = this.itemParentNode
        this.itemParentNode.getComponent(cc.Layout).updateLayout()
    }

    /**监听扑克点击 */
    listetPockerClick(){
        this.itemParentNode.children.forEach((e,index) =>{
            e.on(cc.Node.EventType.TOUCH_END,()=>{
                cc.tween(e)
                    .to(0.1, {scale: 1.1})
                    .to(0.1, {scale: 1})
                    .call(()=>{
                        if(DataManager.clickNumArr[index] >=1){
                            DataManager.clickNumArr[index] -=1
                            if(DataManager.clickNumArr.every(item => item == 0)){
                                this.showResult(true)
                            }
                        }else{
                            //游戏结束
                            this.showResult(false)
                        }
                        this.renewClickNum()
                    })
                    .start();
                console.log("当前点击的老虎",index)
            })
        })
    }

    /**结果判断 */
    result(){
        
        // console.log(DataManager.clickNumArr)
    }

    /**
     * 开始倒计时
    */
    startTimer() {
        DataManager.timerFunc = () => {
            DataManager.indexTime--;
            if(DataManager.indexTime <= 0) {
                this.showResult(false);
            }
        }
        this.schedule(DataManager.timerFunc, 1);
    }

    
    /**
     * 更新倒计时
    */
    updateTimerUi() {
        this.timerNode.getChildByName("timeText").getComponent(cc.Label).string = "TIME:00:" + DataManager.indexTime;
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
        if(DataManager.curGameIsRun != false){
        DataManager.clickNumArr = [-1,-1,-1]
        this.renewClickNum()
        this.itemParentNode.children.forEach(e=>{
            e.off(cc.Node.EventType.TOUCH_END)
        })
        this.resultNode.active = false;
        DataManager.curGameIsRun = false;
    }
}

    /**
     * 关闭提示展示
    */
    hideTipNode() {
        this.tipNode.active = false;
    }
}
