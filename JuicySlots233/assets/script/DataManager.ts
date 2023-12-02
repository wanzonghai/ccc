class DataManager{
    public static readonly instance = new DataManager();

    /** 当前用户余额 */
    curUserCoin: number = 100000;

    /** 当前押注下标 */
    curBetIndex: number = 0;

    /** 当前游戏是否运行中 */
    curGameIsRun: boolean = false;

    /** 当前游戏赢钱数 */
    curGameWinCoinNum: number = 0;

    /** 元素对应中奖倍数 */
    itemMult = {
        "1": 2,
        "2": 4,
        "3": 6,
        "4": 8,
        "5": 10,
        "6": 15,
    }

    /** 押注数组 */
    betList = [1, 2, 4, 8, 16, 32, 64];

    /** 是否自动游戏中 */
    curIsAuto: boolean = false;

}
export default DataManager.instance;
