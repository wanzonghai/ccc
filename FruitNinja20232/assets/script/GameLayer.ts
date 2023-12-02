import DataManager from "./DataManager";
import ItemNode from "./ItemNode";
import uitl from "./util/uitl";


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
    private itemSize: cc.Size = cc.size(206, 272);

    /** 元素总量 */
    itemNum: number = 8;

    /** 元素类别数量 */
    itemTypeNum: number = 4;

    public index:number = 0

    public winLength:number = 0

    

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

        for(let i = 0; i < this.itemNum/2; i++){
            this.creatPoker()
        }
        for(let i=0;i<DataManager.frestArray.length;i++){
            this.cretIcon(i)
        }
        console.log(DataManager.frestArray)
        
        // this.randomTiger()
        this.listetPockerClick();
        // DataManager.isLayout = false
        this.index = this.itemNum/2;
        this.startTimer();
    }

    /**随机生成炸弹 */
    randomTiger(){
        let index = uitl.getRandomInt(0,this.itemParentNode.children.length - 1)
        DataManager.selectPorkerArray[0] = index
        //播放炸弹动画
        this.itemParentNode.children.forEach(e =>{
            cc.tween(e.getChildByName("boom"))
                .to(0.2,{position:cc.v3(0,268,1)})
                .to(0.1,{position:cc.v3(0,155,1)})
                .to(0.2,{position:cc.v3(0,220,1)})
                .to(0.2,{position:cc.v3(0,155,1)})
                .call(()=>{
                    e.getChildByName("boom").active = false
                    cc.tween(e)
                        .to(0.2,{scale:1.1})
                        .to(0.2,{scale:1})
                        .start()
                })
                .start()
        })
    }

    /**打乱顺序 */
    randomPoker(){
        let rand = uitl.getRandomInt(0,this.itemNum/2)
        let index = rand + 2
        if(index >= this.itemNum){
            index = 0
        }
        this.itemParentNode.insertChild(this.itemParentNode.children[rand],index)
    }

   

    /**生成扑克牌 */
    creatPoker(){
        let pokerNum = uitl.getRandomInt(1,this.itemTypeNum).toString();
        DataManager.frestArray.push(pokerNum + "_")
        let porker1Node = cc.instantiate(this.itemPrefab)
        // let porker2Node = cc.instantiate(this.itemPrefab)

        porker1Node.getComponent(ItemNode).init(pokerNum, this.itemSize)
        porker1Node.parent = this.itemParentNode

        // porker2Node.getComponent(ItemNode).init(pokerNum, this.itemSize)
        // porker2Node.parent = this.itemParentNode
        this.itemParentNode.getComponent(cc.Layout).updateLayout()
    }
    /**创建icon2 */
    cretIcon(index:number){
        let porker1Node = cc.instantiate(this.itemPrefab)
        porker1Node.getComponent(ItemNode).init(DataManager.frestArray[index], this.itemSize)
        porker1Node.parent = this.itemParentNode
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
                       if(DataManager.selectPorkerArray[0] == -1){
                            DataManager.selectPorkerArray[0] = index
                       }else{
                            DataManager.selectPorkerArray[1] = index
                            this.result()
                       }
                    })
                    .start();
                console.log("当前点击的老虎",index)
            })
        })
    }

    /**结果判断 */
    result(){
        let index1 = DataManager.selectPorkerArray[0]
        let index2 = DataManager.selectPorkerArray[1]
        let porker1:string = this.itemParentNode.children[index1].getComponent(ItemNode).pokerNum
        let porker2:string = this.itemParentNode.children[index2].getComponent(ItemNode).pokerNum
        console.log("porker1--------",porker1);
        console.log("porker2",porker2);
        if(porker1 + "_" == porker2){
            DataManager.curScord += 40
            DataManager.curWinNum += 40
            // this.renewScoce() // 刷新得分
            this.itemParentNode.children[index1].active = false
            this.itemParentNode.children[index2].active = false
            this.index -=1
        }else{
            DataManager.indexTime -= 5 
            // this.renewTimer() // 刷新进度条
        }
        DataManager.selectPorkerArray = [-1,-1]
        // this.itemParentNode.children[index1].getComponent(pokerContrl).showBorder(false)
        // this.itemParentNode.children[index2].getComponent(pokerContrl).showBorder(false)
        if(this.index <=0){
            this.showResult(true) // 展示结果
         }
        
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
            this.itemParentNode.width = 1172    
            this.itemParentNode.height = 598
            this.itemParentNode.setPosition(-500,0)
            this.itemParentNode.getComponent(cc.Layout).type = cc.Layout.Type.GRID
            
            // this.itemParentNode.getComponent(cc.Layout).paddingLeft = 100
            // this.itemParentNode.getComponent(cc.Layout).paddingTop = 20
            // this.itemParentNode.getComponent(cc.Layout).spacingX = 50
            // this.itemParentNode.getComponent(cc.Layout).spacingY = 40
            // this.itemParentNode.getComponent(cc.Layout).resizeMode = cc.Layout.ResizeMode.CONTAINER
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
        lableNode.getComponent(cc.Label).string = "" + DataManager.curScord;
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
        DataManager.frestArray = []
        this.itemParentNode.removeAllChildren();
        //解除按钮绑定
        if(DataManager.curGameIsRun != false){
        // this.itemParentNode.children.forEach(e=>{
        //     e.active = true
        //     e.getChildByName("boom").active = true
        //     e.off(cc.Node.EventType.TOUCH_END)
        // })
        // DataManager.isLayout = true
        this.resultNode.active = false;
        DataManager.curGameIsRun = false;
        DataManager.curWinNum = 0;
        this.winLength = 0
        // DataManager.selectPorkerArray[0] = -1
    }
}

    /**
     * 关闭提示展示
    */
    hideTipNode() {
        this.tipNode.active = false;
    }
}
