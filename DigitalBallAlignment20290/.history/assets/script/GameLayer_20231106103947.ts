import DataManager from './DataManager';
import GameWheel from './GameWheel';
import ItemNode from './ItemNode';
import playLayer from './playLayer';
import { EventId } from './util/define';
import EventMgr from './util/event/EventMgr';
import loaderManager from './util/loaderManager';
import util from './util/util';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {
    @property({ type: [cc.SpriteFrame], tooltip: '元素纹理' })
    itemResList: cc.SpriteFrame[] = [];

    @property({ type: cc.Node, tooltip: '用户余额节点' })
    userCoinNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '游戏提示页面' })
    tipNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '游戏结果节点' })
    resultNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '倒计时节点' })
    timerNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '音效按钮节点' })
    soundBtn: cc.Node = null;

    @property({ type: cc.Node, tooltip: '音效按钮节点' })
    musicBtn: cc.Node = null;

    @property({ type: cc.Node, tooltip: '开始游戏节点' })
    playBtn: cc.Node = null;

    @property({ type: playLayer, tooltip: '游戏逻辑控制脚本' })
    playScr: playLayer = null;

    @property({ type: cc.Node, tooltip: '玩家分数展示节点' })
    userScoreLabel: cc.Node = null;

    @property({ type: cc.Node, tooltip: '剩余时间展示节点' })
    timeLabel: cc.Node = null;

    @property({ type: [cc.AudioClip] })
    audioResList: cc.AudioClip[] = [];

    public iconPf: cc.Prefab = null;

    public index: number = 0;

    /**加载卡片 */
    async loadCard() {
        this.iconPf = await loaderManager.getRes('item', 'prefab', cc.Prefab);
        if (this.iconPf) {
            console.log('预制体加载成功！');
        }
    }

    start() {
        DataManager.gameLayerScr = this;
        this.playScr.node.scale = cc.winSize.height / 1080;
        this.updateUserCoin();
        this.updateTimerUi();
        this.loadCard();
        // this.listerEvent()
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
    //绑定事件
    listerEvent() {
        EventMgr.Instance.Register(EventId.Result, this.showResult, this);
    }

    /**
     * 清除事件
     */
    cleatEvent() {
        EventMgr.Instance.Off();
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
                this.playGame();
                break;
            case 'btnReturn':
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('JP_startGame');
                break;
            case 'btNextGame':
            case 'btStartOver':
                this.hideResultNode();
                break;
            case 'btExit':
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('JP_startGame');
                break;
            case 'tipBtn':
                this.openTipNode();
                break;
            case 'adsBtn':
                DataManager.adGoogleRewardedVideoAdHandle();
                break;
            case 'closeTipBtn':
                this.hideTipNode();
                break;
            case 'btnSound':
                this.openOrCloseSound();
                break;
            case 'musicBtn':
                this.openOrCloseBG();
                break;
        }
    }

    /** 开始游戏 */
    playGame() {
        if (DataManager.curGameIsRun) return;
        DataManager.curGameIsRun = true;
        cc.director.getCollisionManager().enabled = true;
        // 计时器
        this.startTimer();
        //隐藏游戏按钮
        // this.playBtn.active = false
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
        //游戏逻辑
        // this.playScr.createRandomPuzzle();
    }

    /**
     * 开启或关闭音效
     */
    openOrCloseSound() {
        if (DataManager.curSoundBGIsClose) {
            this.soundBtn.color = cc.color(170, 170, 170, 255);
            this.node.getComponent(cc.AudioSource).volume = 0;
        } else {
            this.soundBtn.color = cc.color(255, 255, 255, 255);
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        DataManager.curSoundBGIsClose = !DataManager.curSoundBGIsClose;
    }

    openOrCloseBG() {
        if (DataManager.curSoundIsClose) {
            this.musicBtn.color = cc.color(170, 170, 170, 255);
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 0;
        } else {
            this.musicBtn.color = cc.color(255, 255, 255, 255);
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 1;
        }

        DataManager.curSoundIsClose = !DataManager.curSoundIsClose;
    }
    /**
     * 开始倒计时
     */
    startTimer() {
        let speed = 0.01;
        DataManager.timerFunc = () => {
            DataManager.indexTime -= speed;
            if (DataManager.indexTime <= 0) {
                this.ResultFn();
            }
            this.updateTimerUi();
            this.timeLabel.getComponent(cc.Label).string = Math.floor(DataManager.indexTime) + 's';
        };
        this.schedule(DataManager.timerFunc, speed);
    }

    /**
     * 更新倒计时
     */
    updateTimerUi() {
        cc.find('barBg/bar', this.timerNode).getComponent(cc.Sprite).fillRange = DataManager.indexTime / DataManager.startTime;
        this.timeLabel.getComponent(cc.Label).string = Math.ceil(DataManager.indexTime) + 's';
    }

    updataCoin() {
        this.updateUserCoin();
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
    }

    /**
     * 更新余额
     */
    updateUserCoin() {
        cc.tween(this.userScoreLabel).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
        this.userScoreLabel.getComponent(cc.Label).string = '' + DataManager.curScord;
    }

    /**判断结果 */
    ResultFn() {
        this.showResult(false);
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

    /**
     * 展示结果
     */
    showResult(isWin) {
        this.unschedule(DataManager.timerFunc);
        this.unscheduleAllCallbacks();

        DataManager.indexTime = DataManager.startTime;
        if (isWin) {
            let winNumLable = cc.find('win/winNum', this.resultNode);
            DataManager.curWinNum += 100;
            winNumLable.getComponent(cc.Label).string = '' + DataManager.curWinNum;
        }

        this.node.getComponent(cc.AudioSource).clip = this.audioResList[isWin ? 4 : 5];
        this.node.getComponent(cc.AudioSource).play();

        let winNode = this.resultNode.getChildByName('win');
        let loseNode = this.resultNode.getChildByName('lose');

        winNode.active = isWin;
        loseNode.active = !isWin;
        let curAniNode = isWin ? winNode : loseNode;

        this.resultNode.active = true;

        curAniNode.scale = 0.6;
        curAniNode.opacity = 100;

        cc.tween(curAniNode).to(0.3, { scale: 1.1, opacity: 255 }).to(0.3, { scale: 1 }).start();
    }

    /**
     * 关闭结果展示
     */
    hideResultNode() {
        DataManager.curGameIsRun = false;
        this.resultNode.active = false;
        cc.director.getCollisionManager().enabled = false;
        DataManager._curScord = 0;
        DataManager._indexTime = DataManager.startTime;
        this.updateTimerUi();
        this.updateUserCoin();
    }
}
