import DataManager from './DataManager';
import ItemNode from './ItemNode';
import { JsbFunType } from './util/define';
import util from './util/util';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {
    @property({ type: cc.Node, tooltip: '左侧layer' })
    LLayer: cc.Node = null;

    @property({ type: cc.Node, tooltip: '右侧layer' })
    RLayer: cc.Node = null;

    @property({ type: cc.Node, tooltip: '用户余额节点' })
    userCoinNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '游戏结果节点' })
    resultNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '游戏提示节点' })
    tipNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: '倒计时节点' })
    timerNode: cc.Node = null;

    @property({ type: cc.Prefab, tooltip: '元素预制体' })
    itemPrefab: cc.Prefab = null;

    @property({ type: [cc.AudioClip], tooltip: '音效' })
    audios: cc.AudioClip[] = [];

    /** 元素宽高 */
    private itemSize: cc.Size = cc.size(162, 154);

    /** 元素总量 */
    itemNum: number = 20;

    /** 元素类别数量 */
    itemTypeNum: number = 21;

    /** 遮罩长度 */
    maskLength: number = 0;

    public index: number = 0;

    start() {
        this.maskLength = cc.find('barBg/mask', this.timerNode).width;
        DataManager.curGameIsRun = false;
        DataManager.gameLayerScr = this;
        DataManager.curWinNum = 0;
        this.updateUserCoin();
        this.updateSoundBtnState();
        DataManager.indexTime = DataManager.startTime;
    }

    protected onEnable(): void {
        this.scheduleOnce(() => {
            this.schedule(() => {
                if (DataManager.Adjust_status == '') return;
                if (DataManager.Adjust_status.toLowerCase() !== 'organic') {
                    // 字符串不为空且不为 "organic" 或 "Organic"，执行你的操作
                    DataManager.nativeJsbFun(JsbFunType.AdjustDecision);
                } else {
                    DataManager.nativeJsbFun(JsbFunType.ShowOpenAd);
                }
                this.unscheduleAllCallbacks();
            }, 1.5);
        }, 0.5);
    }
    /**
     * 游戏内按钮绑定事件
     */
    btnEvent(event: cc.Event) {
        let name = event.target.name;

        this.playSound(0);
        switch (name) {
            case 'btnStartGame':
                DataManager.nativeJsbFun(JsbFunType.ShowInterstitialAd);
                this.playGame();
                break;
            case 'btnReturn':
                DataManager.nativeJsbFun(JsbFunType.ShowInterstitialAd);
                cc.director.loadScene('startGame');
                break;
            case 'btNextGame':
            case 'btStartOver':
                DataManager.nativeJsbFun(JsbFunType.ShowInterstitialAd);
                this.hideResultNode();
                break;
            case 'btExit':
                DataManager.nativeJsbFun(JsbFunType.ShowInterstitialAd);
                cc.director.loadScene('startGame');
                break;
            case 'btnHelp':
                DataManager.nativeJsbFun(JsbFunType.ShowInterstitialAd);
                this.tipNode.active = true;
                break;
            case 'btnCloseHelp':
                this.hideTipNode();
            case 'btnBgSound':
                DataManager.isOpenBgSound = !DataManager.isOpenBgSound;
                cc.find('Canvas').getComponent(cc.AudioSource).volume = DataManager.isOpenBgSound ? 1 : 0;
                this.updateSoundBtnState();
                break;
            case 'btnEffectSound':
                DataManager.isOpenEffectSound = !DataManager.isOpenEffectSound;
                this.updateSoundBtnState();
                break;
        }
    }

    playSound(index) {
        if (!DataManager.isOpenEffectSound) return;

        this.node.getComponent(cc.AudioSource).clip = this.audios[index];
        this.node.getComponent(cc.AudioSource).play();
    }

    /**
     * 更新音效按钮状态
     */
    updateSoundBtnState() {
        let color1 = cc.color(179, 179, 179, 255);
        let color2 = cc.color(255, 255, 255, 255);

        cc.find('Canvas/gameLayer/topNode/btnBgSound').color = (DataManager.isOpenBgSound ? color2 : color1).clone();
        cc.find('Canvas/gameLayer/topNode/btnEffectSound').color = (DataManager.isOpenEffectSound ? color2 : color1).clone();
    }

    /** 开始游戏 */
    playGame() {
        if (DataManager.curGameIsRun) return;
        DataManager.curGameIsRun = true;

        this.playSound(0);
        this.initItemNode();
        this.startTimer();
    }

    /**
     * 初始化游戏节点
     */
    initItemNode() {
        let dataList1 = this.getStartGameData();
        let dataList2 = this.changeGameData(dataList1);

        this.addItemByData(this.LLayer.getChildByName('itemParent'), dataList1);
        this.addItemByData(this.RLayer.getChildByName('itemParent'), dataList2);

        this.RLayer.getChildByName('itemParent').children.forEach((node, i) =>
            node.on(cc.Node.EventType.TOUCH_END, () => {
                if (i == DataManager.curWinItmeIndex) {
                    DataManager.curScord += 100;
                    this.playSound(4);
                    cc.tween(node)
                        .to(0.7, { scale: 0.7, opacity: 0 })
                        .call(() => {
                            this.showResult(true);
                        })
                        .start();
                } else {
                    this.playSound(3);
                    cc.tween(node).to(0.1, { rotation: 10 }).to(0.1, { rotation: -10 }).to(0.1, { rotation: 0 }).start();
                    console.log('选错了');
                }
            })
        );
    }

    /**
     * 根据数据给节点添加元素
     */
    addItemByData(node, data) {
        for (let i: number = 0; i < data.length; i++) {
            let itemNode = cc.instantiate(this.itemPrefab);

            itemNode.getComponent(ItemNode).init(data[i].toString(), this.itemSize);
            node.addChild(itemNode);
        }
    }

    /**
     * 获取初始游戏数据
     */
    getStartGameData() {
        let gameData = [];

        for (let i: number = 0; i < this.itemNum; i++) {
            let itemId = util.getRandom(1, this.itemTypeNum);
            gameData.push(itemId);
        }

        return gameData;
    }

    /**
     * 根据数据修改一个值并返回
     */
    changeGameData(gameDataList) {
        let newDataList = [];
        let changeIndex = util.getRandom(0, gameDataList.length - 1);
        let curItemId = gameDataList[changeIndex];
        let getId = () => {
            let id = util.getRandom(1, this.itemTypeNum);
            if (id == curItemId) {
                id = getId();
            }

            return id;
        };
        let changeId = getId();

        for (let i: number = 0; i < gameDataList.length; i++) {
            if (i == changeIndex) {
                newDataList.push(changeId);
            } else {
                newDataList.push(gameDataList[i]);
            }
        }

        DataManager.curWinItmeIndex = changeIndex;

        return newDataList;
    }

    /**
     * 重置游戏节点
     */
    resetGameNode() {
        this.LLayer.getChildByName('itemParent').removeAllChildren();
        this.RLayer.getChildByName('itemParent').removeAllChildren();
        DataManager.curWinItmeIndex = -1;
    }

    /**
     * 开始倒计时
     */
    startTimer() {
        let speed = 0.01;

        DataManager.timerFunc = () => {
            DataManager.indexTime -= speed;
            if (DataManager.indexTime <= 0) {
                this.showResult(false);
            }
        };
        this.schedule(DataManager.timerFunc, speed);
    }

    /**
     * 更新倒计时
     */
    updateTimerUi() {
        cc.find('barBg/mask', this.timerNode).width = (DataManager.indexTime / DataManager.startTime) * this.maskLength;
        this.timerNode.getChildByName('timeText').getComponent(cc.Label).string = '00:' + Math.ceil(DataManager.indexTime);
    }

    /**
     * 更新余额
     */
    updateUserCoin() {
        let lableNode = this.userCoinNode.getChildByName('coinLable');

        cc.tween(lableNode).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
        lableNode.getComponent(cc.Label).string = '' + DataManager.curScord;
    }

    /**
     * 展示结果
     */
    showResult(isWin) {
        this.playSound(isWin ? 2 : 1);
        this.unschedule(DataManager.timerFunc);
        DataManager.indexTime = DataManager.startTime;
        this.resetGameNode();
        DataManager.curWinNum += 100;
        if (isWin) {
            let winNumLable = cc.find('win/winNum', this.resultNode);

            winNumLable.getComponent(cc.Label).string = '' + DataManager.curWinNum;
        }

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
        cc.find('barBg/mask', this.timerNode).width = this.maskLength;
        DataManager.curGameIsRun = false;
        this.resultNode.active = false;
        DataManager.curWinNum = 0;
    }

    /**
     * 关闭提示展示
     */
    hideTipNode() {
        cc.tween(this.tipNode.getChildByName('helpText'))
            .to(0.2, { scale: 0.5 })
            .call(() => {
                this.tipNode.active = false;
                this.tipNode.getChildByName('helpText').scale = 1;
            })
            .start();
    }
}
