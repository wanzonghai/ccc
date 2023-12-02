// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, SpriteFrame, size, Size, Sprite, Node, v3, Label, find, tween, v2, Tween, Animation, AudioClip, AudioSource } from "cc";
import GameDataManager from "./GameDataManager";
import DataManager from "./GameDataManager";
import { mainLayer } from "./mainLayer";
import util from "./util";

const {ccclass, property} = _decorator;

@ccclass
export default class slotManager extends Component {

    @property({type: [SpriteFrame], tooltip: "元素纹理"})
    itemSpriteFrameList: SpriteFrame[] = [];

    @property({type: Node, tooltip: "结果展示节点"})
    winNode: Node = null;

    @property({type: Node, tooltip: "当前局赢钱节点"})
    curWinNumNode: Node = null;

    @property({type: Node, tooltip: "提示文本展示节点"})
    tipTextNode: Node = null;

    @property({type: [AudioClip], tooltip: "元素纹理"})
    audios: AudioClip[] = [];

    @property({type: Node, tooltip: "胜利line"})
    winLine: Node = null;

    // @property({type: Node, tooltip: "当前局赢赏展示节点"})
    // curWinNumNode: Node = null;

    /** 界面管理脚本 */
    mainLayer: mainLayer = null;

    /** 列节点集合 */
    lineList: Node[] = [];

    /** 元素节点集合 */
    itemList: Node[] = [];

    /** 结束的item节点 */
    endItemList: Node[] = [];

    /** 当前需要展示的元素Id */
    curItemId = [];

    /** 列节点内元素数量 */
    lineItemNum: number = 3;

    /** 元素大小 */
    itemSize: Size = size(0, 0);

    /** 元素顶部出现位置(距列节点距离) */
    itemStartPos: number = 0;

    /** 元素底部目标位置(距列节点距离) */
    itemEndPos: number = 0;

    /** 元素间距 */
    itemInterval: number = 0;

    /** 元素id */
    itemType = {
        item1: 1,
        item2: 2,
        item3: 3,
        item4: 4,
        item5: 5,
    }

    /** 结束圈数 */
    endCylesNum = 10;

    /** 当前移动结束节点数 */
    curCylesNum = 0;

    /** 当前中奖数据 */
    curWinData = [];

    /** 当前中奖元素id */
    curWinItemId: number = 0;

    /** 中奖提示文本 */
    winTipText: string[] = [
        "I want some sea turtle",
        "I want some shell",
        "I want some conch",
        "I want some coral",
        "I want some Treasure Chest",
    ]

    onLoad() {
        this.mainLayer = find("Canvas/mainLayer").getComponent(mainLayer);
        this.initLineNodeList();
        this.initData();

        this.getResultList();
        this.creatorItmeNode();
    }

    /**
     * 初始化列节点数组
    */
    private initLineNodeList() {
        let lineNode = this.node;

        for(let i: number = 0; i < this.itemSpriteFrameList.length; i++) {
            this.itemSpriteFrameList[i].width > this.itemSize.width && (this.itemSize.width = this.itemSpriteFrameList[i].width)
            this.itemSpriteFrameList[i].height > this.itemSize.height && (this.itemSize.height = this.itemSpriteFrameList[i].height)
        }
        for(let i: number = 0; i < lineNode.children.length; i++) {
            this.lineList.push(lineNode.children[i]);

        }

    }

    /**
     * 初始化数据
    */
    private initData() {
        this.itemStartPos = (this.itemSize.height + this.itemInterval) * (this.lineItemNum+1)/2;
        this.itemEndPos = -((this.itemSize.height + this.itemInterval) * (this.lineItemNum+1)/2);
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
                let itemNode = new Node();
                let itmeSprite = itemNode.addComponent(Sprite);

                lineNode.addChild(itemNode);
                itemNode.position = v3(itemNode.position.x, yPos);
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
        this.curWinItemId = this.getRandomItem();
        this.tipTextNode.getComponent(Sprite).spriteFrame = this.itemSpriteFrameList[this.curWinItemId-1];
        tween(this.tipTextNode)
            .to(0.3,{scale:v3(1,1,1)})
            .to(0.1,{scale:v3(0.8,0.8,1)})
            .to(0.2,{scale:v3(1,1,1)})
            .to(0.05,{scale:v3(0.8,0.8,1)})
            .start()
        
        console.log("数据：", this.curItemId);
        // this.curItemId.forEach(e=>{
        //     e[2] = this.curWinItemId
        // })
        console.log("中奖Icon：", this.curWinItemId);
        this.isWin();
    }

    /**
     * 判断当前是否中奖
    */
    isWin() {
        let curWinRowList = [];
        this.curItemId.forEach(element => {
            curWinRowList.push(element[2])
        });
        this.curWinData = [];
        // for(let i: number = 1; i < this.lineItemNum + 1; i++) { // 遍历第一列数据
        //     let firstItemId = this.curItemId[0][i];
        //     let curItemNum = 1;
        //     let posList = [v2(0, i)];

        //     for(let j: number = 1; j < this.curItemId.length; j++) {
        //         let lineData = this.curItemId[j];
        //         let isUseItem = false;
        //         let pos = v2(j, 0);

        //         lineData.forEach((itemId, index) => {
        //             if(itemId == firstItemId && index > 0) {
        //                 isUseItem = true;
        //                 pos.y = index;
        //             }
        //         });

        //         if(curItemNum == j && isUseItem) { // 之前是连续的中奖并且这一列有对应元素
        //             curItemNum++;
        //             posList.push(pos);
        //         }
        //     }

        //     if(curItemNum >= 3) { // 连续超过3个
        //         curWinRowList.push({
        //             id: firstItemId,
        //             winNum: curItemNum
        //         });
        //         this.curWinData.push({
        //             id: firstItemId,
        //             winNum: curItemNum,
        //             pos: posList
        //         })
        //     }

        // }

        // if(curWinRowList.length > 0) {
        //     for(let i: number = 0; i < curWinRowList.length; i++) {
        //         let winObj = curWinRowList[i];

        //         if(winObj == this.curWinItemId) {
        //             GameDataManager.curWinNum += DataManager.betList[DataManager.curBetIndex] * DataManager.itemMult[winObj.id];
        //         }
        //     }
        //     DataManager.curUserCoin += DataManager.curWinNum;
        // }
        curWinRowList.every((e)=>{
            if(e == this.curWinItemId){
                DataManager.curWinNum +=100
            }
        })
        // if(curWinRowList.every((e)=>{
        //     e == this.curWinItemId
        // })){
        //     console.log("游戏失败",curWinRowList);
            
        // }else{
        //     console.log("游戏成功！",curWinRowList);
           
            
        // }
        // console.log("中奖数据：", this.curWinData);
    }
    

    /**
     * 随机获取元素
    */
    private getRandomItem() {
        return util.getRandom(this.itemType.item1, this.itemType.item5);
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

                itemNode.position = v3(itemNode.position.x, yPos);
                itemNode.getComponent(Sprite).spriteFrame = this.itemSpriteFrameList[lineData[j] - 1];
                yPos -= (this.itemSize.height + this.itemInterval);
            };
        }

        this.scheduleOnce(this.showEnd, 1);
    }

    /**
     * 更新当前局赢钱
    */
    updateCurWinNum() {
        this.curWinNumNode.getComponent(Label).string = DataManager.curWinNum > 0 ? DataManager.curWinNum + "" : "";
    }


    /**
     * 开始滚动
    */
    startRun() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[3])
        DataManager.curWinNum = 0;
        this.curCylesNum = 0;
        this.stopWinItemAni();
        this.updateCurWinNum();
        // DataManager.curWinNum - 1 <= 0 ? DataManager.curWinNum = 0 : DataManager.curWinNum --;

        DataManager.curUserCoin -= DataManager.betList[DataManager.curBetIndex];
        this.mainLayer.updateUserCoin();
        this.getResultList();
        this.schedule(this.runFunc, 0.001);
    }

    /**
     * 展示游戏结果
    */
    showGameEnd() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[4])
        this.mainLayer.updatePlayBtnState(false);
        this.unschedule(this.runFunc);
        this.runEndResetNodePos();
        let delayTime = 0.2;
        let aniNum = 0;
        for(let i: number = 0; i < this.lineList.length; i++) {
            let lineNode = this.lineList[i];

            lineNode.children.forEach(itemNode => {
                aniNum++;
                tween(itemNode)
                    // .delay(i*delayTime)
                    .by(0.3, {scale: v3(0.1, 0.1)})
                    .by(0.3, {scale: v3(-0.2, -0.2)})
                    .by(0.1, {scale: v3(0.1, 0.1)})
                    .call(() => {
                        if(--aniNum == 0) {
                            this.playWinItem();
                        }
                    })
                    .start();
            })
        }
    }

    /**
     * 展示结果
    */
    showEnd() {

        let mask = this.winNode.getChildByName("mask");
        let winSpriteNode = this.winNode.getChildByName("win");
        let loseSpriteNode = this.winNode.getChildByName("lose");
        let aniNode = DataManager.curWinNum > 0 ? winSpriteNode : loseSpriteNode;
        let aniNmae = DataManager.curWinNum > 0 ? "winNodeOpen" : "loseNodeOpen";

        this.winNode.active = true;
        winSpriteNode.active = DataManager.curWinNum > 0;
        loseSpriteNode.active = DataManager.curWinNum <= 0;

        find("Canvas").getComponent(AudioSource).playOneShot(DataManager.curWinNum > 0 ? this.audios[0] : this.audios[1])
        aniNode.getComponent(Animation).play(aniNmae);
        aniNode.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
            aniNode.getComponent(Animation).off(Animation.EventType.FINISHED);
            this.mainLayer.updateUserCoin();
            this.updateCurWinNum();
            mask.on(Node.EventType.TOUCH_START, this.closeWinLayer);
            this.scheduleOnce(this.closeWinLayer, 2);
        })
    }

    closeWinLayer() {
        this.winNode.getChildByName("mask").off(Node.EventType.TOUCH_START);
        this.unschedule(this.closeWinLayer);
        this.winNode.active = false;
        DataManager.curGameIsRun = false;
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

                itemNode.position = v3(itemNode.position.x, itemNode.position.y - 50);
                if(itemNode.position.y <= this.itemEndPos) { // 超出位置
                    itemNode.position = v3(itemNode.position.x, this.itemStartPos - (this.itemEndPos - itemNode.position.y));
                    itemNode.getComponent(Sprite).spriteFrame = this.itemSpriteFrameList[this.getRandomItem() - 1];
                    if(i == 1) this.curCylesNum++;
                }
            }
        }

        if(this.curCylesNum / this.lineItemNum >= this.endCylesNum && isRunEnd) { // 正常滚动结束进入结束滚动阶段
            isRunEnd = false;
            this.showGameEnd();
        }
    }

    /**
     * 播放中奖元素
    */
    playWinItem() {
        this.curWinData.forEach(winData => {
            winData.pos.forEach(pos => {
                let winItem = this.lineList[pos.x].children[pos.y];
    
                tween(winItem)
                    .sequence(
                        tween(winItem).by(0.3, {scale: v3(0.1, 0.1)}),
                        tween(winItem).by(0.3, {scale: v3(-0.2, -0.2)}),
                        tween(winItem).by(0.1, {scale: v3(0.1, 0.1)})
                    )
                    .repeatForever()
                    .start();

            });
        })
    }

    /**
     * 停止中奖元素播放
    */
    stopWinItemAni() {
        this.curWinData.forEach(winData => {
            winData.pos.forEach(pos => {
                let winItem = this.lineList[pos.x].children[pos.y];
    
                Tween.stopAllByTarget(winItem);
            });  
        })
    }
}
