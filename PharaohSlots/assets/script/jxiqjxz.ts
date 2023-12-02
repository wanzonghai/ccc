// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import DataManager from "./Kpqoxuzahwg";
import GameLayer from "./Liqkxuah";
import util from "./Loqoxjauw";

const {ccclass, property} = cc._decorator;

@ccclass
export default class slotManager extends cc.Component {

    @property({type: [cc.SpriteFrame], tooltip: "1"})
    itemSpriteFrameList: cc.SpriteFrame[] = [];

    @property({type: cc.Node, tooltip: "1"})
    winNode: cc.Node = null;
1
    @property({type: cc.Node, tooltip: "1"})
    curWinNumNode: cc.Node = null;

    /** 界面管理脚本 */
    gameLayer: GameLayer = null;

    /** 列节点集合 */
    lineList: cc.Node[] = [];

    /** 元素节点集合 */
    itemList: cc.Node[] = [];

    /** 结束的item节点 */
    endItemList: cc.Node[] = [];

    /** 当前需要展示的元素Id */
    curItemId = [];

    /** 列节点内元素数量 */
    lineItemNum: number = 3;

    /** 元素大小 */
    itemSize: cc.Size = cc.size(120, 120);

    /** 元素顶部出现位置(距列节点距离) */
    itemStartPos: number = 0;

    /** 元素底部目标位置(距列节点距离) */
    itemEndPos: number = 0;

    /** 元素间距 */
    itemInterval: number = 20;

    /** 元素id */
    itemType = {
        WATERMELON: 1, // 西瓜
        APPLE: 2, // 苹果
        LEMON: 3, // 柠檬
        CHERRY: 4, // 樱桃
        BELL: 5, // 铃铛
        BELL1: 6, // 铃铛
    }

    /** 结束圈数 */
    endCylesNum = 5;

    /** 当前移动结束节点数 */
    curCylesNum = 0;

    onLoad() {
        let lineH = 420 / 1334 * cc.winSize.height;
        if(lineH / 3 > this.itemSize.height) {
            this.itemInterval = lineH / 3 - this.itemSize.height;
        } else {
            this.itemSize.height = lineH / 3;
            this.itemInterval = 0;
        }
        this.lineList.forEach(node => node.height = lineH);

        this.gameLayer = this.node.getParent().getComponent(GameLayer);
        this.initLineNodeList();
        this.initData();

        this.getResultList();
        this.creatorItmeNode();
    }

    /**
     * 初始化列节点数组
    */
    private initLineNodeList() {
        let lineNode = this.node.getChildByName("lineNode");

        for(let i: number = 0; i < lineNode.children.length; i++) {
            this.lineList.push(lineNode.children[i]);

        }

    }

    /**
     * 初始化数据
    */
    private initData() {
        this.itemStartPos = (this.itemSize.height + this.itemInterval) * 2;
        this.itemEndPos = -((this.itemSize.height + this.itemInterval) * 2);
    }

    /**
     * 创建itme节点
    */
    public creatorItmeNode () {
        for(let i: number = 0; i < this.lineList.length; i++) {
            let lineData = this.curItemId[i];
            let lineNode = this.lineList[i];
            let yPos = this.itemStartPos;

            for(let j: number = 0; j < lineData.length; j++) {
                let itemNode = new cc.Node();
                let itmeSprite = itemNode.addComponent(cc.Sprite);

                lineNode.addChild(itemNode);
                itemNode.y = yPos;
                itmeSprite.spriteFrame = this.itemSpriteFrameList[lineData[j] - 1];
                yPos -= (this.itemSize.height + this.itemInterval);
            }
        }
    }

    /**
     * 获取结果数组
    */
    private getResultList() {
        let resultList = [];

        for(let i: number = 0; i < this.lineList.length; i++) {
            resultList[i] = [];
            for(let j: number = 0; j < this.lineItemNum+1; j++) {
                resultList[i].push(this.getRandomItem());
            }
        }

        this.curItemId = resultList;
        this.isWin();
        console.log("1", this.curItemId);
    }

    /**
     * 判断当前是否中奖
    */
    isWin() {
        let curWinRowList = [];

        for(let i: number = 1; i < this.lineItemNum + 1; i++) { // 遍历第一列数据
            let firstItemId = this.curItemId[0][i];
            let curItemNum = 1;

            for(let j: number = 1; j < this.curItemId.length; j++) {
                let lineData = this.curItemId[j];
                let isUseItem = false;

                lineData.forEach((itemId, index) => (itemId == firstItemId && index > 0) && (isUseItem = true));

                if(curItemNum == j && isUseItem) { // 之前是连续的中奖并且这一列有对应元素
                    curItemNum++;
                }
            }

            if(curItemNum >= 3) { // 连续超过3个
                curWinRowList.push({
                    id: firstItemId,
                    winNum: curItemNum
                });
            }

        }

        if(curWinRowList.length > 0) {
            for(let i: number = 0; i < curWinRowList.length; i++) {
                let winObj = curWinRowList[i];

                DataManager.curGameWinCoinNum += DataManager.betList[DataManager.curBetIndex] * DataManager.itemMult[winObj.id];
            }
            DataManager.curUserCoin += DataManager.curGameWinCoinNum;
        }

        console.log("1", curWinRowList);
    }
    

    /**
     * 随机获取元素
    */
    private getRandomItem() {
        return util.getRandom(this.itemType.WATERMELON, this.itemType.BELL1);
    }

    /**
     * 重置节点位置并赋值
    */
    runEndResetNodePos() {
        for(let i: number = 0; i < this.lineList.length; i++) {
            let lineNode = this.lineList[i];
            let lineData = this.curItemId[i];
            let yPos = this.itemStartPos;

            for(let j: number = 0; j < this.lineItemNum+1; j++) {
                let itemNode = lineNode.children[j];

                itemNode.y = yPos;
                itemNode.getComponent(cc.Sprite).spriteFrame = this.itemSpriteFrameList[lineData[j] - 1];
                yPos -= (this.itemSize.height + this.itemInterval);
            };
        }

        this.scheduleOnce(this.showEnd, 1);
    }

    /**
     * 更新当前局赢钱
    */
    updateCurWinNum() {
        this.curWinNumNode.getComponent(cc.Label).string = DataManager.curGameWinCoinNum > 0 ? DataManager.curGameWinCoinNum + "" : "";
    }


    /**
     * 开始滚动
    */
    startRun() {
        DataManager.curGameWinCoinNum = 0;
        this.curCylesNum = 0;
        this.updateCurWinNum();
        DataManager.curIsAuto && DataManager.curRunAutoNum++;
        // DataManager.curWinNum - 1 <= 0 ? DataManager.curWinNum = 0 : DataManager.curWinNum --;

        DataManager.curUserCoin -= DataManager.betList[DataManager.curBetIndex];
        this.gameLayer.updateUserCoin();
        this.getResultList();
        this.schedule(this.runFunc, 0.001);
    }

    /**
     * 展示结果
    */
    showEnd() {
        let mask = this.winNode.getChildByName("mask");
        let winSpriteNode = this.winNode.getChildByName("win");
        let loseSpriteNode = this.winNode.getChildByName("lose");
        let closeWinLayer = () => {
            mask.off(cc.Node.EventType.TOUCH_START);
            this.unschedule(closeWinLayer);

            this.winNode.active = false;
            if(DataManager.curIsAuto && DataManager.curRunAutoNum < 5) {
                this.startRun();
            } else {
                DataManager.curRunAutoNum = 0;
                DataManager.curIsAuto = false;
                DataManager.curGameIsRun = false;
            }
        }

        this.winNode.active = true;
        winSpriteNode.active = DataManager.curGameWinCoinNum > 0;
        loseSpriteNode.active = DataManager.curGameWinCoinNum <= 0;

        this.gameLayer.updateUserCoin();
        this.updateCurWinNum();

        mask.on(cc.Node.EventType.TOUCH_START, closeWinLayer);
        this.scheduleOnce(closeWinLayer, 2);
    }

    /**
     * 滚动方法
    */
    runFunc() {
        let isRunEnd = true;

        for(let i: number = 0; i < this.lineList.length; i++) {
            let lineNode = this.lineList[i];
            for(let j: number = 0; j < this.lineItemNum+1; j++) {
                let itemNode = lineNode.children[j];

                itemNode.y -= 70;
                if(itemNode.y <= this.itemEndPos) { // 超出位置
                    itemNode.y = this.itemStartPos - (this.itemEndPos - itemNode.y);
                    itemNode.getComponent(cc.Sprite).spriteFrame = this.itemSpriteFrameList[this.getRandomItem() - 1];
                    if(i == 1) this.curCylesNum++;
                }
            }
        }

        if(this.curCylesNum / this.lineItemNum >= this.endCylesNum && isRunEnd) { // 正常滚动结束进入结束滚动阶段
            isRunEnd = false;
            this.unschedule(this.runFunc);
            this.runEndResetNodePos();
        }
    }
}
