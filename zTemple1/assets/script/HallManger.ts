// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import DataManager from './DataManager';
import { EventId } from './util/define';
import EventMgr from './util/event/EventMgr';
import util from './util/util';

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property({ type: [cc.AudioClip], tooltip: '音效数组' })
    audioResList: cc.AudioClip[] = [];

    @property({ type: cc.Node, tooltip: '游戏提示页面' })
    tipNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '音效按钮节点' })
    soundBtn: cc.Node = null;

    @property({ type: cc.Node, tooltip: '用户信息' })
    userInfo: cc.Node = null;

    @property({ type: cc.Node, tooltip: 'icon节点' })
    contentLayout: cc.Node = null;

    @property({ type: cc.Node, tooltip: '排行榜节点' })
    phbNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '兑换奖励框' })
    PromoPage: cc.Node = null;

    @property({ type: cc.Node, tooltip: '排行榜页面' })
    chartsPage: cc.Node = null;

    start() {
        this.upadtaUserInfo();
        this.updateUserNum();
        this.listeBtnAni();
        this.creatRandUserInfo();
    }
    protected onEnable(): void {
        DataManager.adGoogleInterstitialAdHandle();
        this.scheduleOnce(() => {
            this.schedule(() => {
                if (!DataManager.IsCheckAdjust_status) return;
                if (DataManager.Adjust_status !== '' && DataManager.Adjust_status.toLowerCase() !== 'organic') {
                    // 字符串不为空且不为 "organic" 或 "Organic"，执行你的操作
                    DataManager.adAnalyseAjustHandle();
                    DataManager.IsCheckAdjust_status = false;
                    this.unscheduleAllCallbacks();
                }
            }, 1.5);
        }, 3);
    }

    /**
     * 游戏内按钮绑定事件
     */
    btnEvent(event: cc.Event) {
        let name = event.target.name;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        switch (name) {
            case 'btnStartGame':
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene('game');
                break;
            case 'icon1':
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene('game');
                break;
            case 'backBtn':
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene('a_startGame');
                break;
            case 'tipBtn':
                this.openTipNode();
                break;
            case 'closeTipBtn':
                this.hideTipNode();
                break;
            case 'soundBtn':
                this.openOrCloseSound();
                break;
            case 'shareBtn':
                this.shareFn();
                break;
            case 'adBtn':
                DataManager.adGoogleRewardedVideoAdHandle();
                break;
            case 'closePromoBtn':
                this.closePromo();
                break;
            case 'closeChartsBtn':
                this.closeChart();
                break;
        }
    }

    /**绑定按钮动画 */
    listeBtnAni() {
        this.contentLayout.children.forEach((e) => {
            e.on(cc.Node.EventType.TOUCH_END, () => {
                cc.tween(e).to(0.2, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
            });
        });
    }

    /**打开提示 */
    openTipNode() {
        this.tipNode.getChildByName('rule').scale = 0.8;
        this.tipNode.active = true;
        cc.tween(this.tipNode.getChildByName('rule')).to(0.2, { scale: 1 }).start();
    }

    /**
     * 关闭提示展示
     */
    hideTipNode() {
        cc.tween(this.tipNode.getChildByName('rule'))
            .to(0.2, { scale: 0.5 })
            .call(() => {
                this.tipNode.active = false;
                this.tipNode.getChildByName('rule').scale = 1;
            })
            .start();
    }

    /**关闭兑换奖励框 */
    closePromo() {
        this.PromoPage.active = false;
        let rule = this.PromoPage.getChildByName('rule');
        rule.getChildByName('EditBox').getComponent(cc.EditBox).string = '';
    }

    closeChart() {
        this.chartsPage.active = false;
    }

    /**打开兑换奖励框 */
    openPromo() {
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        this.PromoPage.getChildByName('rule').scale = 1.2;
        this.PromoPage.active = true;
        cc.tween(this.PromoPage.getChildByName('rule')).to(0.2, { scale: 1 }).start();
    }

    /**打开兑换奖励框 */
    openCharts() {
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        this.chartsPage.getChildByName('rule').scale = 1.2;
        this.chartsPage.active = true;
        cc.tween(this.chartsPage.getChildByName('rule')).to(0.2, { scale: 1 }).start();
    }

    /**
     * 开启或关闭音效
     */
    openOrCloseSound() {
        if (DataManager.curSoundIsClose) {
            this.soundBtn.children[0].color = cc.color(170, 170, 170, 255);
            this.soundBtn.children[1].active = true;
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        } else {
            this.soundBtn.children[0].color = cc.color(255, 255, 255, 255);
            this.soundBtn.children[1].active = false;
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        DataManager.curSoundIsClose = !DataManager.curSoundIsClose;
    }

    /**更新用户信息 */
    upadtaUserInfo() {
        this.userInfo.getChildByName('userID').getComponent(cc.Label).string = 'ID:' + DataManager.userId;
        this.userInfo.getChildByName('scoreLaberl').getComponent(cc.Label).string = '' + DataManager.curWinNum;
    }
    /**更新用户房间人数 */
    updateUserNum() {
        let array = util.getRandArray(100, 5000, this.contentLayout.children.length);
        this.contentLayout.children.forEach((e, index) => {
            let node_num: cc.Node = e.getChildByName('num');
            let label_num = node_num?.getComponent(cc.Label);
            if (!label_num) return;
            label_num.string = array[index] + '';
        });
    }
    /**用户排行榜 */
    creatRandUserInfo() {
        let newUserId: string = '';
        for (let j = 1; j <= 5; j++) {
            for (let i = 0; i < DataManager.userId.length; i++) {
                newUserId += util.getRandom(1, 9);
            }
            let userId = this.phbNode.children[j].getChildByName('userID');
            userId.getComponent(cc.Label).string = 'ID:' + newUserId;
            newUserId = '';
        }
    }

    /**分享事件 */
    shareFn() {}

    // update(dt) {

    // }
}
