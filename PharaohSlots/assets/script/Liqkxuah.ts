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
import slotManager from "./jxiqjxz";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {

    @property({type: slotManager, tooltip: "1"})
    slotManager: slotManager = null;

    @property({type: cc.Node, tooltip: "1"})
    userCoinNode: cc.Node = null;

    @property({type: cc.Node, tooltip: "1"})
    betCoinNode: cc.Node = null;

    onLoad() {
        let slotNode = this.node.getChildByName("slotNode");
        let betNode = this.node.getChildByName("betNode");
        let btnPlayer = this.node.getChildByName("btnPlayer");
        let btnAuto = this.node.getChildByName("btnAuto");
        let userCoin = this.node.getChildByName("userCoin");

        DataManager.widthScale = cc.winSize.width / 750;

        (DataManager.widthScale > 1) && (DataManager.widthScale = 1);

        // slotNode.scale = DataManager.widthScale;
        btnPlayer.scale = DataManager.widthScale;
        btnAuto.scale = DataManager.widthScale;
        betNode.scale = DataManager.widthScale;

        this.scheduleOnce(() => {
            slotNode.getChildByName("lineNode").scale = slotNode.width / 705;
            userCoin.x = 0;
            btnAuto.x = 0;
            btnPlayer.x = btnAuto.x + btnAuto.width/2 + btnPlayer.width/2 + 10;
            betNode.x = btnAuto.x - btnAuto.width/2 - betNode.width/2;
        });
    }

    /**
     * 场景内按钮绑定事件
    */
    private btnEvent(even: cc.Event.EventTouch) {
        let node = even.target;

        switch(node.name) {
            case "btnPlayer": // 开始游戏
                !DataManager.curGameIsRun && this.startGame();
                break;
            case "btnAuto": // 开始自动游戏
                this.startAutoGame();
                break;
            case "btnMinus": // 减注
                !DataManager.curGameIsRun && this.minusBet();
                break;
            case "btnAdd": // 加注
                !DataManager.curGameIsRun && this.addBet();
                break;
        }
    }

    /**
     * 更新用户余额
    */
    updateUserCoin() {
        this.userCoinNode.getComponent(cc.Label).string = DataManager.curUserCoin + "";
    }

    /**
     * 更新投注金额
    */
    updateBetNum() {
        this.betCoinNode.getComponent(cc.Label).string = DataManager.betList[DataManager.curBetIndex] + "";
    }

    /**
     * 增加投注
    */
    addBet() {

        if(++DataManager.curBetIndex > DataManager.betList.length - 1) {
            DataManager.curBetIndex = DataManager.betList.length - 1;
        }

        this.updateBetNum();
    }

    clickBnqx(){
        cc.director.loadScene("hallLayer");
    }

    /**
     * 减少投注
    */
    minusBet() {

        if(--DataManager.curBetIndex < 0) {
            DataManager.curBetIndex = 0;
        }

        this.updateBetNum();
    }



    /**
     * 开始游戏
    */
    startGame() {
        DataManager.curGameIsRun = true;
        this.slotManager.startRun();
    }

    /**
     * 开始自动
    */
    startAutoGame() {
        if(DataManager.curIsAuto) {
            DataManager.curRunAutoNum = 0;
            DataManager.curIsAuto = false;
        } else if(!DataManager.curGameIsRun) {
            DataManager.curGameIsRun = true;
            DataManager.curIsAuto = true;
            this.slotManager.startRun();
        }
    }
}
