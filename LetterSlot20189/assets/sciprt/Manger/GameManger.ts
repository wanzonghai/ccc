// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Configuration from '../Data/Configuration';
import GameData from '../Data/GameData';
import { Friut, GameStatus } from '../util/define';

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    laoding: cc.Node = null;
    @property(cc.Node)
    goldLayout: cc.Node = null;

    @property(cc.Node)
    bottomLayout: cc.Node = null;

    @property(cc.Node)
    iconLayout: cc.Node = null;

    @property(cc.Node)
    result: cc.Node = null;

    @property([cc.SpriteFrame])
    resultImg: cc.SpriteFrame[] = [];

    @property(cc.Node)
    winScore: cc.Node = null;

    speed: number = Configuration.speed;

    resTime: number = Configuration.resTime;

    //圈数
    turns: number = Configuration.truns;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {}

    start() {
        this.scheduleOnce(() => {
            this.laoding.active = false;
        }, 1.5);
        this.initIconLayout();
        this.renewGold();
    }

    /**重置结果 */
    initIconLayout() {
        this.iconLayout.children.forEach((e) => {
            e.children[0].active = false;
        });
    }

    /**更新金币 */
    renewGold() {
        this.goldLayout.getChildByName('betLabel').getComponent(cc.Label).string = GameData.GoldNum + '';
    }

    /**更新下注金额 */
    renewBetNum() {
        this.bottomLayout.getChildByName('betBoder').children[2].getComponent(cc.Label).string = GameData.betNum + '';
    }

    /**减少下注金额 */
    reduceBet() {
        if (GameData.gameStatus != GameStatus.Stop) return;
        GameData.betNum -= 100;
        if (GameData.betNum <= 100) {
            GameData.betNum = 100;
        }
        this.renewBetNum();
    }

    /**增加下注金额 */
    addBet() {
        if (GameData.gameStatus != GameStatus.Stop) return;
        GameData.betNum += 100;
        if (GameData.betNum > 10000) {
            GameData.betNum = 10000;
        }
        this.renewBetNum();
    }

    /**选择下注水果 */
    selectBetFruit(event: cc.Event) {
        if (GameData.gameStatus != GameStatus.Stop) return;
        this.clearBetBorder();
        let targetNode: cc.Node = event.target;
        targetNode.children[0].active = true;
        switch (targetNode.name) {
            case 'Ultimate':
                GameData.selectFriut = Friut.Ultimate;
                break;
            case 'ChineseKnot':
                GameData.selectFriut = Friut.ChineseKnot;
                break;
            case 'A':
                GameData.selectFriut = Friut.A;
                break;
            case 'Ten':
                GameData.selectFriut = Friut.Ten;
                break;
            case 'Q':
                GameData.selectFriut = Friut.Q;
                break;
            case 'J':
                GameData.selectFriut = Friut.J;
                break;
            case 'K':
                GameData.selectFriut = Friut.K;
                break;
        }
    }

    /**清空下注水果border */
    clearBetBorder() {
        this.bottomLayout.getChildByName('Res').children.forEach((v) => {
            v.children[0].active = false;
        });
    }

    /**开始游戏 */
    playGame() {
        if (GameData.gameStatus != GameStatus.Stop) return;

        if (GameData.GoldNum < GameData.betNum) {
            console.log('金钱不够！');
            return;
        }

        let randomNumber = (max: number, min: number = 0): number => Math.floor(Math.random() * (max - min + 1) + min);
        let randomVal: number = randomNumber(0, 11);
        if (Configuration.resIndex != -1) {
            randomVal = Configuration.resIndex;
        }
        // console.log("中奖结果是",randomVal);
        switch (randomVal) {
            case 0:
            case 8:
                GameData.ResFriut = Friut.Ultimate;
                break;
            case 1:
            case 7:
                GameData.ResFriut = Friut.ChineseKnot;
                break;
            case 2:
            case 10:
                GameData.ResFriut = Friut.A;
                break;
            case 3:
            case 9:
                GameData.ResFriut = Friut.Ten;
                break;
            case 4:
                GameData.ResFriut = Friut.J;
                break;
            case 5:
                GameData.ResFriut = Friut.Q;
                break;
            default:
                GameData.ResFriut = Friut.K;
                break;
        }
        // console.log("中奖类型",GameData.ResFriut);
        GameData.GoldNum -= GameData.betNum;
        this.renewGold();
        this.playAnit(randomVal + this.iconLayout.children.length * this.turns);
        GameData.gameStatus = GameStatus.Start;
    }
    playAnit(runNum: number) {
        //先转两圈
        // console.log( GameData.betIndex,runNum);
        if (GameData.betIndex < this.iconLayout.children.length) {
            if (GameData.betIndex < runNum) {
                cc.tween(this.iconLayout.children[GameData.betIndex])
                    .call(() => {
                        this.iconLayout.children[GameData.betIndex].children[0].active = true;
                    })
                    .to(0.05, { scale: 1.1 })
                    .delay(this.speed)
                    .to(0.05, { scale: 1 })
                    .call(() => {
                        this.initIconLayout();
                        GameData.betIndex += 1;
                        this.playAnit(runNum);
                    })
                    .start();
            } else {
                cc.tween(this.iconLayout.children[GameData.betIndex])
                    .call(() => {
                        this.iconLayout.children[GameData.betIndex].children[0].active = true;
                    })
                    .delay(0.1)
                    .call(() => {
                        this.iconLayout.children[GameData.betIndex].children[0].active = false;
                    })
                    .delay(0.1)
                    .call(() => {
                        this.iconLayout.children[GameData.betIndex].children[0].active = true;
                    })
                    .delay(0.1)
                    .call(() => {
                        this.iconLayout.children[GameData.betIndex].children[0].active = true;
                    })
                    .delay(0.1)
                    .call(() => {
                        this.iconLayout.children[GameData.betIndex].children[0].active = false;
                    })
                    .delay(0.1)
                    .call(() => {
                        this.iconLayout.children[GameData.betIndex].children[0].active = true;
                        this.showRes();
                    })
                    .start();
            }
        } else {
            GameData.betIndex -= this.iconLayout.children.length;
            runNum -= this.iconLayout.children.length;
            this.playAnit(runNum);
        }
    }

    /**展示结果 */
    showRes() {
        if (GameData.selectFriut == GameData.ResFriut) {
            console.log('win!');
            /**配置游戏分数差值 */
            GameData.winScord = Configuration.getScordArray[GameData.ResFriut];
            GameData.GoldNum += GameData.winScord;
            this.winScore.getComponent(cc.Label).string = GameData.winScord + '';
            this.winScore.active = true;
            this.renewGold();
            this.result.getComponent(cc.Sprite).spriteFrame = this.resultImg[0];
            this.result.active = true;
            cc.tween(this.result)
                .to(this.resTime, { scale: 0.6 })
                .to(this.resTime, { scale: 0.5 })
                .call(() => {
                    GameData.gameStatus = GameStatus.Stop;
                    this.result.active = false;
                })
                .start();
        } else {
            console.log('lose!');
            this.result.getComponent(cc.Sprite).spriteFrame = this.resultImg[1];
            this.result.active = true;
            GameData.winScord = 0;
            this.winScore.getComponent(cc.Label).string = GameData.winScord + '';
            this.winScore.active = true;
            cc.tween(this.result)
                .to(this.resTime, { scale: 0.6 })
                .to(this.resTime, { scale: 0.5 })
                .call(() => {
                    GameData.gameStatus = GameStatus.Stop;
                    this.result.active = false;
                })
                .start();
        }
    }

    // update (dt) {}
}
