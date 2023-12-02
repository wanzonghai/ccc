import GameLayer from './GameLayer';
import { JsbFunType } from './util/define';

class DataManager {
    public static readonly instance = new DataManager();

    /** 当前是否播放音效 */
    curSoundIsClose: boolean = true;

    /** 当前是否播放音效 */
    curSoundBGIsClose: boolean = true;

    /** 当前是否游戏运行中 */
    curGameIsRun: boolean = false;

    /**用户ID */
    userId: string = '10086';

    /**当前的分数 */
    public _curScord: number = 0;

    /** 当前局赢分 */
    public curWinNum: number = 0;

    public get curScord() {
        return this._curScord;
    }

    public set curScord(num) {
        this._curScord = num;
        if (this.gameLayerScr) {
            this.gameLayerScr.updateUserCoin();
        }
    }

    /** gameLayer脚本 */
    gameLayerScr: GameLayer = null;

    /**初始时间 */
    startTime: number = 60;

    /**当前时间 */
    _indexTime: number = 60;

    public get indexTime() {
        return this._indexTime;
    }

    public set indexTime(num) {
        this._indexTime = num;
        if (this.gameLayerScr) {
            this.gameLayerScr.updateTimerUi();
            if (num == this.startTime) {
                // 重新设置事件重置定时器
                this.gameLayerScr.unschedule(this.timerFunc);
            }
        }
    }

    /** 定时器运行方法 */
    timerFunc = null;

    /** 当前游戏难度阶段 */
    curGameStage: number = 0;

    /** 阶段对应行列 */
    stageRanks: Array<number> = [5, 6, 7, 8, 9, 10];

    public Adjust_status: string = '';
    /**
     *  1、Google Ad  Rewarded
     *  2、Google Ad  InterstitialA
     *  3、Google Ad  OpenAd
     *  4、adjustDecision
     */
    public nativeJsbFun(type: JsbFunType): void {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod('yhovlfa/picstziuw/panmhabdu/AppActivity', type, '()V');
            }
        }
    }
}

export default DataManager.instance;
