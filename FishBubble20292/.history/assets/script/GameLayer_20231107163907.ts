import DataManager from './DataManager';
import GameWheel from './GameWheel';
import ItemNode from './ItemNode';
import { DirectionType, EventId } from './util/define';
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

    @property({ type: cc.Node, tooltip: '游戏格子' })
    gzPos: cc.Node = null;

    @property({ type: cc.Node, tooltip: '游戏格子' })
    gamePos: cc.Node = null;

    @property({ type: [cc.AudioClip] })
    audioResList: cc.AudioClip[] = [];

    public iconPf: cc.Prefab = null;

    public index: number = 0;

    private colNum = 4;
    private rowNum = 4;

    private callTimer;

    /** 已绘制线数组 */
    alreadyDrawLineList: Array<Array<number>> = [];

    /** 当前绘制线数组 */
    curDrawLineItmeIndex: Array<number> = [];

    list: Array<number> = [];
    /**加载预制体 */
    async loadCard() {
        this.iconPf = await loaderManager.getRes('item', 'prefab', cc.Prefab);
        if (this.iconPf) {
            console.log('预制体加载成功！');
        }
    }

    start() {
        this.updateUserCoin();
        this.updateTimerUi();
        // this.loadCard()
        // this.listerEvent()
    }
    protected onEnable(): void {
        if(DataManager.Adjust_status !== ''){
            
            return;
        }
        this.scheduleOnce(() => {
            this.schedule(() => {
                if (DataManager.Adjust_status == '') return;
                if (DataManager.Adjust_status.toLowerCase() !== 'organic') {
                    // 字符串不为空且不为 "organic" 或 "Organic"，执行你的操作
                    DataManager.adAnalyseAjustHandle();
                } else {
                    DataManager.adGoogleOpenAdHandle();
                }
                this.unscheduleAllCallbacks();
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
                cc.director.loadScene('a_startGame');
                break;
            case 'btNextGame':
            case 'btStartOver':
                DataManager.adGoogleInterstitialAdHandle();
                this.hideResultNode();
                break;
            case 'btExit':
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('a_startGame');
                break;
            case 'tipBtn':
                DataManager.adGoogleInterstitialAdHandle();
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
        // cc.director.getCollisionManager().enabled = true;
        // 计时器
        this.startTimer();
        //隐藏游戏按钮
        // this.playBtn.active = false
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
        //游戏逻辑
        let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        let randomList = util.getRandomListItme(numArray, 20, false);
        this.list = randomList;
        // for(let i=0;i<randomList.length;i++){
        //     this.creatLaber(i,randomList[i])
        // }
        this.creatLaber();
        for (let i = 0; i < randomList.length; i++) {
            this.creatFish(i, randomList[i], this.gzPos.children[i]);
        }
    }
    creatFish(index: number, randoList: number, Node: cc.Node) {
        Node.getComponent(cc.Sprite).spriteFrame = this.itemResList[randoList];
        Node.on(cc.Node.EventType.TOUCH_END, () => {
            console.log('当前点击的', randoList, DataManager.tipNum);
            if (randoList == DataManager.tipNum) {
                /**消除成功 */
                this.unschedule(this.callTimer);
                this.creatLaber();
                DataManager._curScord += 100;
                this.updataCoin();
                let index = util.getRandom(0, 15);
                randoList = index;
                Node.getComponent(cc.Sprite).spriteFrame = this.itemResList[randoList];
            }
        });
    }
    /**创建文字 */
    creatLaber() {
        cc.tween(this.gamePos.children[0])
            .to(0.1, { scale: 1.5 })
            .to(0.2, { scale: 1 })
            .call(() => {
                let num = util.getRandom(0, 15);
                this.gamePos.children[0].getComponent(cc.Sprite).spriteFrame = this.itemResList[num];
                DataManager.tipNum = num;
            })
            .start();
        this.callTimer = () => {
            let num = util.getRandom(0, 15);
            this.gamePos.children[0].getComponent(cc.Sprite).spriteFrame = this.itemResList[num];
            DataManager.tipNum = num;
        };
        this.schedule(this.callTimer, 3);
    }

    /**绑定滑动事件 */
    listTouchEvent(TouchNode: cc.Node) {
        TouchNode.on(cc.Node.EventType.TOUCH_START, (event) => {
            TouchNode['startPos'] = cc.v2(event.getLocation().x, event.getLocation().y);
        });
        TouchNode.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            let statPos = TouchNode['startPos'];
            let endPos = cc.v2(event.getLocation().x, event.getLocation().y);
            let direction = this.isDirection(statPos, endPos);
            if (direction) {
                this.TouchMove(TouchNode, direction);
            }
        });
    }

    /**移动事件 */
    TouchMove(taget: cc.Node, direction: DirectionType) {
        let itemIndex = taget.getComponent(ItemNode).itemIndex;
        let moveId = itemIndex;
        let otherNode: cc.Node = null;
        DataManager._curScord += 1;
        this.updataCoin();
        switch (direction) {
            case DirectionType.Top:
                console.log('上');
                if (itemIndex - this.colNum >= 0) {
                    moveId = itemIndex - this.colNum;
                }
                break;
            case DirectionType.Bottom:
                console.log('下');
                if (itemIndex + this.colNum <= this.gzPos.children.length) {
                    moveId = itemIndex + this.colNum;
                }
                break;
            case DirectionType.Left:
                console.log('左');
                if ((itemIndex % this.colNum) - 1 >= 0) {
                    moveId = itemIndex - 1;
                }
                break;
            case DirectionType.Right:
                console.log('右');
                if ((itemIndex % this.colNum) + 1 <= this.colNum) {
                    moveId = itemIndex + 1;
                }
                break;
        }
        this.gamePos.children.forEach((e) => {
            if (e.getComponent(ItemNode).itemIndex == moveId) {
                otherNode = e;
            }
        });

        if (otherNode) {
            cc.tween(taget).to(0.2, { position: this.gzPos.children[moveId].position }).start();
            cc.tween(otherNode).to(0.2, { position: this.gzPos.children[itemIndex].position }).start();
            this.scheduleOnce(() => {
                taget.getComponent(ItemNode).itemIndex = moveId;
                otherNode.getComponent(ItemNode).itemIndex = itemIndex;
                let tagetId = util.copyObj(taget.getComponent(ItemNode).itemId);
                taget.getComponent(ItemNode).itemId = otherNode.getComponent(ItemNode).itemId;
                otherNode.getComponent(ItemNode).itemId = tagetId;
                let ARR = [];
                this.gamePos.children.forEach((e, i) => {
                    ARR.push(e.getComponent(ItemNode).itemId);
                    this.showResult(true);
                });
            }, 0.3);
        }
    }

    /**更新实际类型 */
    updataIndex() {
        for (let i = 0; i < this.gamePos.children.length - 1; i++) {
            if (this.gamePos.children[i].getComponent(ItemNode).itemIndex == i) {
            }
        }
    }

    /**判断方向 */
    isDirection(startPos: cc.Vec2, endPos: cc.Vec2): DirectionType {
        let direction: DirectionType = DirectionType.Left;
        let offsetX = Math.abs(endPos.x - startPos.x);
        let offsetY = Math.abs(endPos.y - startPos.y);
        if (offsetX >= offsetY) {
            direction = endPos.x > startPos.x ? DirectionType.Right : DirectionType.Left;
        } else {
            direction = endPos.y > startPos.y ? DirectionType.Top : DirectionType.Bottom;
        }
        return direction;
    }

    /**
     * 获取当前世界坐标上的item
     */
    getCurWorldPosItem(curPos: cc.Vec2) {
        let returnItem = null;
        this.gamePos.children.forEach((item) => {
            let itemWorldPos = item.convertToWorldSpaceAR(cc.v2(0, 0));
            let size = item.getContentSize();

            if (curPos.x > itemWorldPos.x - size.width && curPos.x < itemWorldPos.x + size.width && curPos.y > itemWorldPos.y - size.height && curPos.y < itemWorldPos.y + size.height) {
                // 在节点内
                returnItem = item;
            }
        });
        return returnItem;
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
            this.timerNode.getChildByName('timeText').getComponent(cc.Label).string = Math.floor(DataManager.indexTime) + 's';
        };
        this.schedule(DataManager.timerFunc, speed);
    }

    /**
     * 更新倒计时
     */
    updateTimerUi() {
        cc.find('barBg/bar', this.timerNode).getComponent(cc.Sprite).fillRange = DataManager.indexTime / DataManager.startTime;
        this.timerNode.getChildByName('timeText').getComponent(cc.Label).string = Math.ceil(DataManager.indexTime) + 's';
    }

    updataCoin() {
        this.updateUserCoin();
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
        // this.keyNode.getComponent(cc.Label).string = DataManager.keyNum + ''
    }

    /**
     * 更新余额
     */
    updateUserCoin() {
        let lableNode = this.userCoinNode.getChildByName('coinLable');
        cc.tween(lableNode).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
        lableNode.getComponent(cc.Label).string = '' + DataManager.curScord;
    }

    /**判断结果 */
    ResultFn() {
        if (DataManager._curScord >= 1000) {
            this.showResult(true);
            DataManager.curWinNum += 200;
        } else {
            this.showResult(false);
        }
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
        this.gzPos.children.forEach((e) => {
            e.off(cc.Node.EventType.TOUCH_END);
        });
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
