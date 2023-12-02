// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import DataManager from "./DataManager";
import slotManager from "./slotManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {

    @property({type: slotManager, tooltip: "滚轴管理脚本"})
    slotManager: slotManager = null;

    @property({type: cc.Node, tooltip: "余额节点"})
    userCoinNode: cc.Node = null;

    @property({type: cc.Node, tooltip: "押注额节点"})
    betCoinNode: cc.Node = null;

    onLoad() {

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
}
