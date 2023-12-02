import { _decorator, Component, Node } from 'cc';
import { mainLayer } from './mainLayer';

class GameDataManager {
    public static readonly instance = new GameDataManager;

    /** gameLayer脚本 */
    mainLayerScript: mainLayer = null;

    /** 是否暂停中 */
    isPause: boolean = false;

    /** 当前音效是否关闭 */
    curSoundIsClose: boolean = true;

    /** 当前游戏状态 */
    curGameIsRun: boolean = false;

    /** 是否允许消除 */
    isAllowClear: boolean = true;

    /** 当前是否棋子移动中 */
    itemIsRun: boolean = false;

    /** 当前分数 */
    curUserCoin: number = 0;

    /** 倒计时最大时间 */
    timerMaxNum: number = 90;

    /** 当前时间 */
    curTimeNum: number = 90;

    /** 当前定时器方法 */
    curTimeFunc = null;

    /** 当前局赢钱数 */
    curWinNum: number = 0;

    /** 胜利分数 */
    targetWinNum: number = 8000;
    
    /** 元素对应中奖倍数 */
    itemMult = {
        "1": 2,
        "2": 4,
        "3": 6,
        "4": 8,
        "5": 10,
        "6": 12,
    }

    /** 当前心数 */
    curHeartNum: number = 3;

    /** 初始心数 */
    startHeartNum: number = 3;

    /** 押注数组 */
    betList = [1, 2, 4, 8, 16, 32, 64];

    /** 当前押注下标 */
    curBetIndex: number = 0;
}

export default GameDataManager.instance;