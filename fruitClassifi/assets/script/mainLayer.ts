import { _decorator, Component, Node, EventTouch, director, Animation, animation, Label, Game, AudioSource, find, AudioClip, v3, UITransform, SpriteFrame, Sprite, Tween } from 'cc';
import GameDataManager from './GameDataManager';
import { PlayManager } from './PlayManager';
const { ccclass, property } = _decorator;

@ccclass('mainLayer')
export class mainLayer extends Component {

    @property({type: Node, tooltip: "规则展示节点"})
    helpNode: Node = null;

    @property({type: Node, tooltip: "用户余额展示"})
    userCoinNode: Node = null;

    @property({type: Node, tooltip: "当前局赢钱展示"})
    curWinNumNode: Node = null;

    @property({type: Node, tooltip: "进度条遮罩"})
    progressMask: Node = null;

    @property({type: Node, tooltip: "结束展示节点"})
    winNode: Node = null;

    @property({type: Node, tooltip: "心展示节点节点"})
    heartShowNode: Node = null;

    @property({type: PlayManager, tooltip: "游玩区域控制脚本"})
    playManager: PlayManager = null;

    @property({type: [AudioClip], tooltip: "音效"}) // 胜利 失败 按钮 游戏开始 元素消除 图案选中
    audios: AudioClip[] = [];

    @property({type: [SpriteFrame], tooltip: "声音按钮纹理"})
    soundSprite: SpriteFrame[] = [];

    /** 进度条遮罩长度 */
    maskWidth: number = 0;

    start() {
        this.maskWidth = this.progressMask.getComponent(UITransform).width;
        GameDataManager.mainLayerScript = this;
        this.updateUserCoin();
    }

    update(deltaTime: number) {
        
    }

    /**
     * 场景内按钮事件绑定
    */
    btnEvent(event: EventTouch) {
        let name = event.target.name;

        switch(name) {
            case "playBtn":
                this.playGame();
                break;
            case "stopBtn":
                // this.pauseGame();
                break;
            case "returnBtn":
                this.exitGame();
                break;
            case "soundBtn":
                this.openOrCloseSound(event.target);
                break;
            case "helpBtn":
                this.openHelpLayer();
                break;
            case "closeHelpBtn":
                this.closeHelpLayer();
                break;
        }
    }

    /**
     * 退出游戏
    */
    exitGame() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[2])
        Tween.stopAll();
        GameDataManager.curGameIsRun = false;
        GameDataManager.curTimeNum = GameDataManager.timerMaxNum;
        director.loadScene("loginLayer");
    }

    /**
     * 打开帮助界面
    */
    openHelpLayer() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[2])
        this.helpNode.active = true;

        this.helpNode.getComponent(Animation).play("helpOpen");
    }

    /**
     * 关闭帮助界面
    */
    closeHelpLayer() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[2])
        this.helpNode.getComponent(Animation).play("helpClose");
        this.helpNode.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
            this.helpNode.getComponent(Animation).off(Animation.EventType.FINISHED);
            this.helpNode.active = false;
        })
    }

    /**
     * 开启或关闭音效
    */
    openOrCloseSound(btn) {
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[2])
        if(GameDataManager.curSoundIsClose) {
            find("Canvas").getComponent(AudioSource).volume = 0;
        } else {
            find("Canvas").getComponent(AudioSource).volume = 1;
        }

        btn.getComponent(Sprite).spriteFrame = this.soundSprite[GameDataManager.curSoundIsClose ? 1 : 0];
        GameDataManager.curSoundIsClose = !GameDataManager.curSoundIsClose;
    }

    /**
     * 开始游戏
    */
    playGame() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[2])
        if(GameDataManager.curGameIsRun) return;
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[3])
        GameDataManager.curGameIsRun = true;
        this.playManager.startGame();
        this.startBar();
    }

    /**
     * 暂停游戏
    */
    // pauseGame() {
    //     find("Canvas").getComponent(AudioSource).playOneShot(this.audios[2])
    //     if(!GameDataManager.curGameIsRun) return;

    //     GameDataManager.isPause = !GameDataManager.isPause;
    //     if(GameDataManager.isPause) {
    //         this.playManager.pauseGame();
    //         this.unschedule(GameDataManager.curTimeFunc);
    //     } else {
    //         find("Canvas").getComponent(AudioSource).playOneShot(this.audios[3])
    //         this.startBar();
    //         this.playManager.recoverGaem();
    //     }
    // }

    /**
     * 更新用户余额
    */
    updateUserCoin() {
        this.userCoinNode.getComponent(Label).string = GameDataManager.curUserCoin + "";
    }

    /**
     * 更新当前局赢钱
    */
    updateCurWinNum() {
        this.curWinNumNode.getComponent(Label).string = GameDataManager.curWinNum > 0 ? GameDataManager.curWinNum + "" : "";
    }

    /**
     * 减心数
    */
    reduceHeart() {
        GameDataManager.curHeartNum --;

        this.updateHeart();
        if(GameDataManager.curHeartNum <= 0) {
            this.showEnd();
        }
    }

    /**
     * 更新心数展示
    */
    updateHeart() {
        this.heartShowNode.children.forEach((child, i) => {
            if(i < GameDataManager.curHeartNum) {
                child.active = true;
            } else {
                child.active = false;
            }
        })
    }

    
    /**
     * 展示结束弹框
    */
     showEnd() {

        let isWin = this.playManager.checkWin();
        let mask = this.winNode.getChildByName("mask");
        let winSpriteNode = this.winNode.getChildByName("win");
        let loseSpriteNode = this.winNode.getChildByName("lose");
        let aniNode = isWin ? winSpriteNode : loseSpriteNode;
        let aniNmae = isWin ? "winNodeOpen" : "loseNodeOpen";

        isWin ? find("Canvas").getComponent(AudioSource).playOneShot(this.audios[0]) : find("Canvas").getComponent(AudioSource).playOneShot(this.audios[1]);
        this.unschedule(GameDataManager.curTimeFunc);
        GameDataManager.curTimeNum = GameDataManager.timerMaxNum;
        this.updateProgress();

        this.winNode.active = true;
        winSpriteNode.active = isWin;
        loseSpriteNode.active = !isWin;

        find("Canvas").getComponent(AudioSource).playOneShot(isWin ? this.audios[0] : this.audios[1])
        aniNode.getComponent(Animation).play(aniNmae);
        aniNode.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
            aniNode.getComponent(Animation).off(Animation.EventType.FINISHED);
            this.updateUserCoin();
            this.updateCurWinNum();
            mask.on(Node.EventType.TOUCH_START, this.closeWinLayer);
            this.scheduleOnce(this.closeWinLayer, 2);
        })
    }

    /**
     * 关闭结束弹框
    */
    closeWinLayer() {
        this.winNode.getChildByName("mask").off(Node.EventType.TOUCH_START);
        this.unschedule(this.closeWinLayer);

        this.playManager.stopItmeCreator();
        this.playManager.bottomNode.removeAllChildren();
        GameDataManager.curWinNum = 0;
        GameDataManager.curHeartNum = GameDataManager.startHeartNum;
        this.winNode.active = false;
        GameDataManager.curGameIsRun = false;
        this.updateHeart();
    }

    /**
     * 开始进度条
    */
    startBar() {
        let speed = 0.01;

        GameDataManager.curTimeFunc = () => {
            GameDataManager.curTimeNum -= speed;
            if(GameDataManager.curTimeNum <= 0) {
                GameDataManager.curTimeNum = GameDataManager.timerMaxNum;
                this.unschedule(GameDataManager.curTimeFunc);
                GameDataManager.mainLayerScript.showEnd();
                console.log("失败");
                this.playManager.resetItemParentPos();
            }
            this.updateProgress();
        }

        this.schedule(GameDataManager.curTimeFunc, speed);
    }

    /**
     * 更新进度条
    */
    updateProgress() {
        this.progressMask.getComponent(UITransform).width = this.maskWidth * (GameDataManager.curTimeNum / GameDataManager.timerMaxNum)
    }
}


