import { _decorator, Component, Node } from 'cc';
import { mainLayer } from './mainLayer';

class GameDataManager {
    public static readonly instance = new GameDataManager;

    /** gameLayer脚本 */
    gameLayerScript: mainLayer = null;

    /** 当前音效是否关闭 */
    curSoundIsClose: boolean = true;

    /** 当前游戏状态 */
    curGameIsRun: boolean = false;

    /** 当前是否棋子移动中 */
    itemIsRun: boolean = false;

    /** 当前分数 */
    curUserCoin: number = 100000;

    /** 倒计时最大时间 */
    timerMaxNum: number = 30;

    /** 当前时间 */
    curTimeNum: number = 30;

    /** 当前定时器方法 */
    curTimeFunc = null;

    /** 当前局赢钱数 */
    curWinNum: number = 0;
    
    /** 元素对应中奖倍数 */
    itemMult = {
        "1": 2,
        "2": 4,
        "3": 6,
        "4": 8,
        "5": 10,
        "6": 12,
    }

    /** 押注数组 */
    betList = [1, 2, 4, 8, 16, 32, 64];

    /** 当前押注下标 */
    curBetIndex: number = 0;
}

export default GameDataManager.instance;