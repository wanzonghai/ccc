import DataManager from "./DataManager";
import ItemNode from "./ItemNode";
import Util from "./util/Util";
import loaderManager from "./util/loaderManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {

    @property({type: cc.Node, tooltip: "放置元素的layout"})
    itemParentNode: cc.Node = null

    @property({type: cc.Node, tooltip: "棋子展示节点"})
    showItemParent: cc.Node = null

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

    @property({type:[cc.SpriteFrame],tooltip:"纹理资源"})
    itmeSpriteFrame:cc.SpriteFrame[] = []

    @property([cc.AudioClip])
    clipArray:cc.AudioClip[] = []

    /** 元素宽高 */
    private itemSize: cc.Size = cc.size(165, 165);

    /** 元素缩放 */
    itemScale: number = 1;

    /** 元素间距X */
    itemIntervalX: number = 8;

    /** 元素间距Y */
    itemIntervalY: number = 0;

    /** 元素行数 */
    rowNum: number = 6;

    /** 元素列数 */
    colNum: number = 6;

    /** 元素类别数量 */
    itemTypeNum: number = 6;

    /** 元素存在数量 */
    chessNum: number = 8;

    public index:number = 0

    public iconPf:cc.Prefab = null

     /**加载卡片 */
    async loadCard(){
        this.iconPf =  await loaderManager.getRes("icon","prefab",cc.Prefab)
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
        this.creatorItemNode();
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
            case "btnReset":
                this.resetItem();
                break;
        }
        cc.audioEngine.playEffect(this.clipArray[0],false)
    }


    /** 开始游戏 */
    playGame(){
        cc.audioEngine.playEffect(this.clipArray[0],false)
        if(DataManager.curGameIsRun) return
        DataManager.curGameIsRun = true;

        this.startTimer();
        this.initItmeData();
    }

    /** 重新打乱游戏 */
    resetItem() {
        cc.audioEngine.playEffect(this.clipArray[0],false)
        if(!DataManager.curGameIsRun) return;

        this.initItmeData();
    }

    //

    /**
     * 开始倒计时
    */
    startTimer() {
        DataManager.timerFunc = () => {
            DataManager.indexTime--;
            if(DataManager.indexTime <= 0) {
                cc.audioEngine.playEffect(this.clipArray[1],false)
                this.showResult(false);
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
        }else{
            cc.audioEngine.playEffect(this.clipArray[2],false)
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
        DataManager.index = 64
        this.resetSceneCellNode();
        this.resultNode.active = false;
        DataManager.curGameIsRun = false;
        DataManager.curWinNum = 0;
        DataManager.indexTime = DataManager.startTime
        this.timerNode.getComponent(cc.ProgressBar).progress = 1
       
        // DataManager.selectPorkerArray[0] = -1
    }

    /**
     * 重置场景中元素节点
    */
    resetSceneCellNode() {
        this.itemParentNode.children.forEach((e,index)=>{
            e["isExist"] = false
        })
        this.showItemParent.children.forEach((e,index) => {
            e["useIndex"] = null;
            e["isHide"] = false;
            e.active = false;
        });

    }

    /**
     * 关闭提示展示
    */
    hideTipNode() {
        this.tipNode.active = false;
    }

    /**
     * 初始化item节点
    */
    creatorItemNode() {
        for(let i: number = 0; i < this.rowNum * this.colNum; i++) {
            let itemNode = new cc.Node();
            itemNode.addComponent(cc.Sprite);
            let row = Math.floor(i / this.colNum);
            let col = i % this.colNum;
            let itemWidth = this.itemSize.width * this.itemScale;
            let itemHeight = this.itemSize.height * this.itemScale;

            itemNode.scale = this.itemScale;
            itemNode["curIndex"] = i;
            this.itemParentNode.addChild(itemNode);
            itemNode.width = this.itemSize.width;
            itemNode.height = this.itemSize.height;
            itemNode.position = cc.v3(itemWidth / 2 + col * itemWidth + col * this.itemIntervalX, itemHeight / 2 + (this.colNum - row-1) * itemHeight + (this.colNum - row-1) * this.itemIntervalY);
            itemNode.on(cc.Node.EventType.TOUCH_END, () => {
                if(!DataManager.curSelectChess) return;
                let hideNode = this.isChessMovePosLegal(DataManager.curSelectChess["useIndex"], itemNode["curIndex"]);
                if(hideNode) {
                    let targetPos = cc.v3(itemNode.x, itemNode.y);
                    let showChessNum = 0;

                    this.itemParentNode.children[DataManager.curSelectChess["useIndex"]]["isExist"] = false;
                    DataManager.curSelectChess["useIndex"] = itemNode["curIndex"];
                    itemNode["isExist"] = true;
                    this.showItemParent.children.forEach(element => {
                        if(element["useIndex"] == hideNode["curIndex"]) {
                            hideNode["isExist"] = false;
                            element["useIndex"] = null;
                            element["isHide"] = true;
                            cc.tween(element)
                                .to(0.2, {scale: 0.7, opacity: 0})
                                .call(() => {
                                    element.active = false;
                                    element.scale = 1;
                                    element.opacity = 255;
                                })
                                .start();
                        }
                    });

                    this.showItemParent.children.forEach(element => {
                        if(!element["isHide"] ) {
                            showChessNum++;
                        }
                    });
                    DataManager.curSelectChess.zIndex = 10;
                    
                    cc.tween(DataManager.curSelectChess)
                        .to(0.2, {position: targetPos})
                        .to(0.1, {scale: 1})
                        .call(() => {
                            DataManager.curSelectChess.zIndex = 1;
                            DataManager.curSelectChess = null;

                            if(showChessNum <= 1) {
                                this.showResult(true);
                                DataManager.curWinNum += 10; 
                                DataManager.curScord += 10; 
                            }
                        })
                        .start();
                }
            })
        }

        for(let i: number = 0; i < this.chessNum; i++) {
            let itemNode = new cc.Node();
            itemNode.addComponent(cc.Sprite);

            this.showItemParent.addChild(itemNode);
            itemNode["curIndex"] = i;
            itemNode.on(cc.Node.EventType.TOUCH_END, () => {   
                if(DataManager.curSelectChess && DataManager.curSelectChess["curIndex"] == itemNode["curIndex"]) { // 取消当前棋子选中
                    cc.tween(itemNode)
                        .to(0.1, {scale: 0.9})
                        .to(0.1, {scale: 1})
                        .start();
                    DataManager.curSelectChess = null;
                    return;
                }      

                this.showItemParent.children.forEach(item => {
                    item.scale = 1;
                });
                DataManager.curSelectChess = itemNode;
                cc.tween(DataManager.curSelectChess)
                    .to(0.1, {scale: 0.9})
                    .to(0.1, {scale: 1.1})
                    .start();
            })
        }
    }

    /**
     * 判断当前棋子目标位置合法性
    */
    isChessMovePosLegal(curIndex, moveIndex) {
        let curRow = Math.floor(curIndex / this.colNum);
        let curCol = curIndex % this.colNum;
        let moveRow = Math.floor(moveIndex / this.colNum);
        let moveCol = moveIndex % this.colNum;

        if(curRow == moveRow) { // 同行
            let leftNode = curCol == 0 ? null : this.itemParentNode.children[curRow*this.colNum+curCol - 1];
            let rightNode = curCol == this.colNum-1 ? null : this.itemParentNode.children[curRow*this.colNum+curCol + 1];

            if(leftNode && moveCol == curCol - 2 && leftNode["isExist"] && !this.itemParentNode.children[moveIndex]["isExist"]) { // 左侧
                return leftNode;
            }

            if(rightNode && moveCol == curCol + 2 && rightNode["isExist"] && !this.itemParentNode.children[moveIndex]["isExist"]) { // 右侧
                return rightNode;
            }
        }

        if(curCol == moveCol) { // 同列
            let topNode = curRow == 0 ? null : this.itemParentNode.children[(curRow-1)*this.colNum+curCol];
            let bottomNode = curRow == this.rowNum-1 ? null : this.itemParentNode.children[(curRow+1)*this.colNum+curCol];

            if(topNode && moveRow == curRow - 2 && topNode["isExist"] && !this.itemParentNode.children[moveIndex]["isExist"]) { // 上面
                return topNode;
            }

            if(bottomNode && moveRow == curRow + 2 && bottomNode["isExist"] && !this.itemParentNode.children[moveIndex]["isExist"]) { // 下面
                return bottomNode;
            }
        }

        return false;
    }

    /**
     * 设置item数据
    */
    initItmeData() {
        this.resetSceneCellNode();
        let useItemIndexList = [];
        let curChessNum = 0;

        for(let i: number = 0; i < this.rowNum * this.colNum; i++) {
            let isInitChess = Util.getRandomInt(0, 1);

            if(isInitChess == 1 && curChessNum < this.chessNum) {
                curChessNum++;
                useItemIndexList.push(i);
            }
        }

        for(let i: number = 0; i < useItemIndexList.length; i++) {
            let posItem = this.itemParentNode.children[useItemIndexList[i]];

            posItem["isExist"] = true;
            this.showItemParent.children[i]["useIndex"] = useItemIndexList[i];
            this.showItemParent.children[i].active = true;
            this.showItemParent.children[i].position = cc.v3(posItem.x, posItem.y);
            this.showItemParent.children[i].getComponent(cc.Sprite).spriteFrame = this.itmeSpriteFrame[0];
        }
    }


}
