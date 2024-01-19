import { Friut, GameStatus } from "../util/define";

class GameData {
    public static readonly instance = new GameData();

    public GoldNum:number = 10000
    public betNum:number = 100
    public betIndex:number = 0  //当前 iconIndex
    public gameStatus:GameStatus = GameStatus.Stop
    public selectFriut:Friut = 0
    public ResFriut:Friut = 0

    /**赢的分数 */
    public winScord:number = 0

}

export default GameData.instance;