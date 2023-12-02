// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import DataManager from './DataManager';
import slotManager from './slotManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {
    @property({ type: slotManager, tooltip: '滚轴管理脚本' })
    slotManager: slotManager = null;

    @property({ type: cc.Node, tooltip: '余额节点' })
    userCoinNode: cc.Node = null;
    @property({ type: cc.Node })
    startLayer: cc.Node = null;
    @property({ type: cc.Node })
    LoadLayer: cc.Node = null;
    @property({ type: cc.AudioClip })
    musicClip: cc.AudioClip = null;

    isPlay: boolean = true;
    current = null;
    onLoad() {
        this.startLayer.active = false;
        this.LoadLayer.active = true;
        this.node.active = false;
        this.scheduleOnce(() => {
            this.LoadLayer.active = false;
            this.startLayer.active = true;
        }, 1.5);
    }

    /**
     * 场景内按钮绑定事件
     */
    private btnEvent(even: cc.Event.EventTouch) {
        let node = even.target;

        switch (node.name) {
            case 'btnPlayer': // 开始游戏
                !DataManager.curGameIsRun && this.startGame();
                break;
            case 'btnStart': // 开始游戏
                this.startLayer.active = false;
                this.node.active = true;
                this.isPlay = true;
                this.audioEnginePlay(this.isPlay);
                break;
            case 'btnAdGoogle': //ad
                this.adGoogleHandle();
                break;
            case 'btnMuisc': //ad
                this.isPlay = !this.isPlay;
                this.audioEnginePlay(this.isPlay);
                break;
            case 'btnBack': //ad
                this.startLayer.active = true;
                this.node.active = false;
                DataManager.curGameIsRun = false;
                this.isPlay = false;
                this.audioEnginePlay(this.isPlay);
                break;
        }
    }

    /**
     * 开启或关闭音效
     */
    audioEnginePlay(isPlay: boolean) {
        isPlay ? this.playMusic() : this.pauseMusic();
    }
    playMusic() {
        // 播放音乐
        cc.audioEngine.play(this.musicClip, false, 1);
    }

    pauseMusic() {
        // 暂停音乐
        cc.audioEngine.pauseAll();
    }
    /**
     * 更新用户余额
     */
    updateUserCoin() {
        this.userCoinNode.getComponent(cc.Label).string = DataManager.curUserCoin + '';
    }

    /**
     * 开始游戏
     */
    startGame() {
        DataManager.curGameIsRun = true;
        this.slotManager.startRun();
    }

    /**
     * Google Ad
     */
    adGoogleHandle(): void {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod('cnaivp/vmsq/kies/zdsk/AppActivity', 'showRewardedVideo', '()V');
            }
        }
    }
}
