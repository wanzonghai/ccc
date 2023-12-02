import { GameStatus } from "../util/define";


class GameData {
    public static readonly instance = new GameData();

    /**赢的分数 */
    public winScord:number = 0;

    /**初始时间 */
    startTime:number = 20           

    /**当前时间 */
    indexTime:number = 20

    /**游戏状态 */
    gameState:GameStatus = GameStatus.Over

    /**当前选择的扑克牌 */
    selectPorkerArray:Array<number> = [-1,-1]


}

export default GameData.instance;