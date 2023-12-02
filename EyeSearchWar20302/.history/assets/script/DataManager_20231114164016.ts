import GameLayer from './GameLayer';
import { JsbFunType } from './util/define';

class DataManager {
    public static readonly instance = new DataManager();

    /** 当前是否游戏运行中 */
    curGameIsRun: boolean = false;

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

    /** 当前中奖元素下标 */
    curWinItmeIndex: number = -1;

    /** gameLayer脚本 */
    gameLayerScr: GameLayer = null;

    /**初始时间 */
    startTime: number = 30;

    /**当前时间 */
    _indexTime: number = 30;

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

    /**当前选择的扑克牌 */
    selectPorkerArray: Array<number> = [-1, -1];

    /** 是否开启音效 */
    isOpenEffectSound: boolean = true;

    /** 是否开启背景音乐 */
    isOpenBgSound: boolean = true;


}

export default DataManager.instance;
