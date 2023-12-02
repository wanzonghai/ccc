import DataManager from './DataManager';
import BallNode from './GenNode';
import GenNode from './GenNode';
import ItemNode from './ItemNode';
import ioocnLayout from './iocnLayout';
import Util from './util/Util';
import { EventId } from './util/define';
import EventMgr from './util/event/EventMgr';
import loaderManager from './util/loaderManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {
    public static instance = new GameLayer();

    @property({ type: cc.Node, tooltip: '放置元素的layout' })
    itemParentNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '用户余额节点' })
    userCoinNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '游戏结果节点' })
    resultNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '游戏提示节点' })
    tipNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '倒计时节点' })
    timerNode: cc.Node = null;

    @property([cc.AudioClip])
    clipArray: cc.AudioClip[] = [];

    @property(cc.Node)
    playBtn: cc.Node = null;

    @property(cc.Button)
    btnGoogleAd: cc.Button = null;

    /** 元素宽高 */
    private itemSize: cc.Size = cc.size(360, 150);

    /** 元素总量 */
    itemNum: number = 12;

    /** 元素类别数量 */
    itemTypeNum: number = 6;

    public index: number = 0;

    public iconPf: cc.Prefab = null;

    /**加载卡片 */
    async loadBall() {
        this.iconPf = await loaderManager.getRes('ball', 'prefab', cc.Prefab);
        if (this.iconPf) {
            console.log('预制体加载成功！');
        }
    }

    start() {
        DataManager.gameLayerScr = this;
        DataManager.curWinNum = 0;
        this.updateUserCoin();
        this.updateTimerUi();
        this.loadBall();
    }
    protected onEnable(): void {
        EventMgr.Instance.Register(EventId.googleAdsEnd, () => {
            this.btnGoogleAd.interactable = true;
        });
        EventMgr.Instance.Register(EventId.googleAdsEnd, () => {
            this.btnGoogleAd.interactable = true;
        });
    }
    /**
     * 游戏内按钮绑定事件
     */
    btnEvent(event: cc.Event) {
        let name = event.target.name;
        switch (name) {
            case 'btnStartGame':
                this.playGame();
                break;
            case 'btnReturn':
                cc.director.loadScene('startGame');
                DataManager.curGameIsRun = false;
                this.hideResultNode();
                break;
            case 'btNextGame':
            case 'btStartOver':
                this.hideResultNode();
                break;
            case 'btExit':
                cc.director.loadScene('startGame');
                DataManager.curGameIsRun = false;
                this.hideResultNode();
                break;
            case 'btnHelp':
                this.tipNode.active = true;
                break;
            case 'btnGoogleAd':
                this.btnGoogleAd.interactable = true;
                this.googleAdsHandel();
                break;
            case 'btnCloseHelp':
                this.hideTipNode();
                break;
        }
        cc.audioEngine.playEffect(this.clipArray[1], false);
    }

    /** 开始游戏 */
    playGame() {
        if (DataManager.curGameIsRun) return;
        DataManager.curGameIsRun = true;
        cc.audioEngine.playEffect(this.clipArray[0], false);
        this.playBtn.active = false;
        this.startTimer();
        // 生成泡泡
        this.creatBall();
        DataManager.creatFunc = this.schedule(() => {
            let number = Util.getRandomInt(1, 2);
            for (let i = 0; i < number; i++) {
                this.creatBall();
            }
        }, 1);
    }
    creatBall() {
        let ballNode = cc.instantiate(this.iconPf);
        let ballIndex = Util.getRandomInt(0, 1);
        ballNode.getComponent(BallNode).init(ballIndex);
        ballNode.parent = this.itemParentNode;
        ballNode.position = this.generateRandomPoint(this.itemParentNode);
    }
    public generateRandomPoint(node: cc.Node) {
        let halfWidth = node.width / 2;
        let halfHeight = node.height / 2;
        let x = Util.getRandomInt(node.x - halfWidth, node.x + halfWidth + 1);
        let y = Util.getRandomInt(node.y - halfHeight, node.y + halfHeight + 1);
        return cc.v3(x, y, 0);
    }
    /**
     * 开始倒计时
     */
    startTimer() {
        DataManager.timerFunc = () => {
            DataManager.indexTime--;
            if (DataManager.indexTime <= 0) {
                cc.audioEngine.playEffect(this.clipArray[1], false);
                this.showRes();
            }
        };
        this.schedule(DataManager.timerFunc, 1);
    }

    /**
     * 更新倒计时
     */
    updateTimerUi() {
        this.timerNode.getChildByName('timeText').getComponent(cc.Label).string = 'TIME:' + DataManager.indexTime;
        this.timerNode.getComponent(cc.ProgressBar).progress = DataManager.indexTime / DataManager.startTime;
    }

    /**更新Layout布局 */
    updataLayout() {
        if (DataManager.isLayout) {
            this.itemParentNode.getComponent(cc.Layout).type = cc.Layout.Type.GRID;
        } else {
            this.itemParentNode.getComponent(cc.Layout).type = cc.Layout.Type.NONE;
        }
    }

    /**
     * 更新余额
     */
    updateUserCoin() {
        let lableNode = this.userCoinNode.getChildByName('coinLable');
        cc.tween(lableNode).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
        lableNode.getComponent(cc.Label).string = 'SCORE:' + DataManager.curScord;
    }

    /**结果判断 */
    showRes() {
        if (DataManager._curScord >= 500) {
            this.showResult(true);
        } else {
            this.showResult(false);
        }
    }

    /**
     * 展示结果
     */
    showResult(isWin: boolean) {
        this.unschedule(DataManager.timerFunc);
        this.unscheduleAllCallbacks();
        DataManager.indexTime = DataManager.startTime;
        if (isWin) {
            let winNumLable = cc.find('win/winNum', this.resultNode);
            winNumLable.getComponent(cc.Label).string = '' + DataManager.curWinNum;
            cc.audioEngine.playEffect(this.clipArray[3], false);
        } else {
            cc.audioEngine.playEffect(this.clipArray[4], false);
        }
        let winNode = this.resultNode.getChildByName('win');
        let loseNode = this.resultNode.getChildByName('lose');

        winNode.active = isWin;
        loseNode.active = !isWin;

        this.resultNode.active = true;
    }

    /**
     * 关闭结果展示
     */
    hideResultNode() {
        this.playBtn.active = true;
        this.itemParentNode.removeAllChildren();
        this.resultNode.active = false;
        DataManager.curGameIsRun = false;
        DataManager.curWinNum = 0;
        DataManager._curScord = 0;
        DataManager.indexTime = DataManager.startTime;
        this.timerNode.getComponent(cc.ProgressBar).progress = 1;
        this.updateUserCoin();
        // DataManager.selectPorkerArray[0] = -1
    }

    /**
     * 关闭提示展示
     */
    hideTipNode() {
        this.tipNode.active = false;
    }

    /**
     * Google Ad
     */
    googleAdsHandel(): void {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod('qyglphgk/dvejxli/efltewi/AppActivity', 'showRewardedVideo', '()V');
            }
        }
    }
}
