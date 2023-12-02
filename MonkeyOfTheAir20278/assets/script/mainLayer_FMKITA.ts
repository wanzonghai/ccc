import { _decorator, Component, Node, EventTouch, director, Animation, animation, Label, Game, AudioSource, find, AudioClip, v3, UITransform, tween } from 'cc';
import GameDataManager from './GameDataManager_FMKITA';
import { PlayManager } from './PlayManager_FMKITA';
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

    @property({type: PlayManager, tooltip: "游玩区域控制脚本"})
    playManager: PlayManager = null;

    @property({type: [AudioClip], tooltip: "元素纹理"}) // 胜利 失败 按钮 游戏开始 元素消除 图案选中
    audios: AudioClip[] = [];

    /** 进度条遮罩宽度 */
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
            case "returnBtn":
                this.exitGame();
                break;
            case "soundBtn":
                this.openOrCloseSound();
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
        GameDataManager.curUserCoin = 0;
        GameDataManager.curGameIsRun = false;
        GameDataManager.curTimeNum = GameDataManager.timerMaxNum;
        director.loadScene("loginLayer_FMKITA");
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
    openOrCloseSound() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[2])
        if(GameDataManager.curSoundIsClose) {
            find("Canvas").getComponent(AudioSource).volume = 0;
        } else {
            find("Canvas").getComponent(AudioSource).volume = 1;
        }

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
     * 更新用户余额
    */
    updateUserCoin() {
        tween(this.userCoinNode)
            .to(0.1, {scale: v3(1, 1, 1)})
            .to(0.1, {scale: v3(0.9, 0.9, 0.9)})
            .to(0.1, {scale: v3(1, 1, 1)})
            .start();
        this.userCoinNode.getComponent(Label).string = GameDataManager.curUserCoin + "";
    }

    /**
     * 更新当前局赢钱
    */
    updateCurWinNum() {
        this.curWinNumNode.getComponent(Label).string = GameDataManager.curWinNum > 0 ? GameDataManager.curWinNum + "" : "";
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

        if(isWin) {
            GameDataManager.curWinNum += 100;
            GameDataManager.curUserCoin += 100;
        }

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
            mask.on(Node.EventType.TOUCH_START, this.closeWinLayer.bind(this));
            this.scheduleOnce(this.closeWinLayer.bind(this), 2);
        })
    }

    /**
     * 关闭结束弹框
    */
    closeWinLayer() {
        GameDataManager.curGameIsRun = false;
        this.winNode.getChildByName("mask").off(Node.EventType.TOUCH_START);
        this.unschedule(this.closeWinLayer);

        GameDataManager.curWinNum = 0;
        this.updateUserCoin();
        this.winNode.active = false;
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
                this.playManager.resetItemParentPos();
                GameDataManager.mainLayerScript.showEnd();
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


