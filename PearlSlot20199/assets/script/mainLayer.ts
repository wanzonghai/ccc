import { _decorator, Component, Node, EventTouch, director, Animation, animation, Label, Game, AudioSource, find } from 'cc';
import GameDataManager from './GameDataManager';
import slotManager from './slotManager';
const { ccclass, property } = _decorator;

@ccclass('mainLayer')
export class mainLayer extends Component {

    @property({type: Node, tooltip: "规则展示节点"})
    helpNode: Node = null;

    @property({type: Node, tooltip: "用户余额展示"})
    userCoinNode: Node = null;

    @property({type: slotManager, tooltip: "用户余额展示"})
    slotManager: slotManager = null;

    start() {
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
                this.stopGame();
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
        find("Canvas").getComponent(AudioSource).playOneShot(this.slotManager.audios[2])
        director.loadScene("loginLayer");
    }

    /**
     * 打开帮助界面
    */
    openHelpLayer() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.slotManager.audios[2])
        this.helpNode.active = true;

        this.helpNode.getComponent(Animation).play("helpOpen");
    }

    /**
     * 关闭帮助界面
    */
    closeHelpLayer() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.slotManager.audios[2])
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
        find("Canvas").getComponent(AudioSource).playOneShot(this.slotManager.audios[2])
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
        find("Canvas").getComponent(AudioSource).playOneShot(this.slotManager.audios[2])
        if(GameDataManager.curGameIsRun) return;
        this.updatePlayBtnState(true);
        GameDataManager.curGameIsRun = true;
        this.slotManager.startRun();
    }

    /**
     * 停止游戏
    */
    stopGame() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.slotManager.audios[2])
        if(!GameDataManager.curGameIsRun) return;
        GameDataManager.curGameIsRun = false;
        this.slotManager.showGameEnd();
    }

    /**
     * 更新按钮节点展示
    */
    updatePlayBtnState(isShowStop: boolean) {
        this.node.getChildByName("playBtn").active = !isShowStop;
        this.node.getChildByName("stopBtn").active = isShowStop;
    }

    /**
     * 更新用户余额
    */
    updateUserCoin() {
        this.userCoinNode.getComponent(Label).string = GameDataManager.curUserCoin + "";
    }
}


