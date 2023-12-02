import { _decorator, Animation, color, Color, Component, Label, Node, Sprite, tween, v3, Vec3 } from 'cc';
import util from '../../script/util';
const { ccclass, property } = _decorator;

@ccclass('CardObj')
export class CardObj {
    numberId: number = -1;
    flowerId: number = -1;

    constructor(numberId: number, flowerId: number) {
        this.numberId = numberId;
        this.flowerId = flowerId;
    }
}

/** 牌动画类型 */
export enum cardAniType {
    turnOpen = "turnOpen", // 卡牌翻开
    turnClose = "turncClose", // 开牌盖上
}

@ccclass('card')
export class card extends Component {

    @property({type: Node, tooltip: "牌面背景节点"})
    bgNode: Node = null;

    @property({type: Node, tooltip: "牌背景节点"})
    backBgNode: Node = null;

    @property({type: Node, tooltip: "大花色节点"})
    maxFlowerNode: Node = null;

    @property({type: Node, tooltip: "小花色节点"})
    miniFlowerNode: Node = null;

    @property({type: Node, tooltip: "数字展示节点"})
    numNode: Node = null;

    @property({type: Node, tooltip: "锁展示节点"})
    lockNode: Node = null;

    @property({type: Node, tooltip: "钥匙展示节点"})
    keyNode: Node = null;

    /** 当前数据 */
    cardData: CardObj = null;

    /** 当前展示状态 */
    curState: boolean = false;

    /** 正常状态数字字号 */
    normaleNumberSize: number = 140;

    /** 数字 10 字号 */
    normaleNumberSize1: number = 90;

    /** 数字 W 字号 */
    normaleNumberSize2: number = 60;

    /** 字体颜色 */
    fontColor: Array<Color> = [
        color(254, 239, 98), // 蓝
        color(254, 239, 98), // 红
        color(255, 255, 255, 255), // 白
    ];


    start() {
        this.maxFlowerNode["startPos"] = this.maxFlowerNode.position.clone();
    }
 
    /**
     * 初始化节点
     * @param cardData 牌数据
     * @param isBack 是否展示背面
    */
    initCard(cardData: CardObj, isBack: boolean = false) {
        this.curState = !isBack;
        if(!isBack || cardData) {
            this.cardData = util.copyObj(cardData);
    
            this.udpateFlowerNode();
            this.updateNumberNode();
        }

        this.bgNode.active = !isBack;
        this.backBgNode.active = isBack;
    }

    /**
     * 重置节点
    */
    resetNode() {
        this.bgNode.active = true;
        this.backBgNode.active = true;
        this.backBgNode.scale = v3(1, 1, 1)
        this.curState = false;
        this.cardData = null;
        this.node.getComponent(Sprite).color = color(255, 255, 255, 255);
    }

    /**
     * 更新花色图片
    */
    udpateFlowerNode() {
        let flowerId = this.cardData.flowerId;
        let flowerColor = this.fontColor[1].clone(); // 红桃方块
        let flowerStr1 = flowerId + ""; // 大花色
        let flowerStr2 = flowerId + ""; // 小花色
        let offset = v3(0, 0);
        let startPos = this.maxFlowerNode["startPos"];
        if(!startPos) {
            this.maxFlowerNode["startPos"] = this.maxFlowerNode.position.clone();
            startPos = this.maxFlowerNode.position.clone();
        }

        if(flowerId == 1 || flowerId == 3) { // 黑桃梅花
            flowerColor = this.fontColor[0].clone();
        } else if(flowerId == 5) { // 王
            flowerColor = this.fontColor[2].clone();
            offset.y += 5;
            flowerStr2 = "";     
        }

        this.maxFlowerNode.position = offset.add(startPos);

        this.maxFlowerNode.getComponent(Label).string = flowerStr1;
        this.maxFlowerNode.getComponent(Label).color = flowerColor.clone();
        this.miniFlowerNode.getComponent(Label).string = flowerStr2;
        this.miniFlowerNode.getComponent(Label).color = flowerColor.clone();
    }

    /**
     * 更新数字图片
    */
    updateNumberNode() {
        let numberId = this.cardData.numberId;
        let flowerId = this.cardData.flowerId;
        let numberColor = this.fontColor[1].clone(); // 红桃 方块 王
        let numberStr = numberId + "";
        let fontSize = this.normaleNumberSize;

        if(flowerId == 1 || flowerId == 3) { // 黑桃 梅花
            numberColor = this.fontColor[0].clone();
        }
        switch(numberId) {
            case 10:
                fontSize = this.normaleNumberSize1;
                break;
            case 11:
                numberStr = "J";
                break;
            case 12:
                numberStr = "Q";
                break;
            case 13:
                numberStr = "K";
                break;
            case 14:
                numberStr = "A";
                break;
            case 15:
                numberStr = "W";
                fontSize = this.normaleNumberSize2;
                break;
        }

        this.numNode.getComponent(Label).fontSize = fontSize;
        this.numNode.getComponent(Label).string = numberStr;
        this.numNode.getComponent(Label).color = numberColor.clone();
    }

    /**
     * 播放动画
     * @param aniType 动画类型
     * @param aniEndCall 动画播放完成回调
    */
    showAni(aniType: cardAniType, aniEndCall?: Function) {
        let ani = this.node.getComponent(Animation);

        this.curState = aniType == cardAniType.turnOpen;
        ani.play(aniType);
        ani.on(Animation.EventType.FINISHED, () => {
            ani.off(Animation.EventType.FINISHED);
            aniEndCall && aniEndCall();
        });
    }

    /**
     * 展示锁图片
    */
    showLock() {
        this.lockNode.active = true;
    }

    /**
     * 隐藏锁图片
    */
    hideLock(endCall?: Function) {
        util.tweenUpdate(0.3, (ratio) => {
            // let curScale = 0.6 * ratio;
            // this.lockNode.scale = v3(curScale, curScale, curScale);
            this.lockNode.getComponent(Sprite).color = color(255, 255, 255, 255 - 255 * ratio);

            if(ratio == 1) {
                endCall && endCall();
                this.lockNode.active = false;
            }
        })
    }

    /**
     * 展示钥匙图片
    */
    showKey() {
        this.keyNode.active = true; 
    }

    /**
     * 隐藏钥匙图片
    */
    hideKey() {
        this.keyNode.active = false;
    }

    update(deltaTime: number) {
        
    }
}


