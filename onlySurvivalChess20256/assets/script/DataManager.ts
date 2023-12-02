import GameLayer from "./GameLayer";

class DataManager {
    public static readonly instance = new DataManager();

    /** 当前是否游戏运行中 */
    curGameIsRun: boolean = false;

    /** 当前选中棋子 */
    curSelectChess: cc.Node = null;

    /**当前的分数 */
    public _curScord:number = 0;

    /** 当前局赢分 */
    public curWinNum: number = 0;

    public get curScord() {
        return this._curScord;
    }

    public set curScord(num) {
       this._curScord = num;
       if(this.gameLayerScr) {
        this.gameLayerScr.updateUserCoin();
       }
    }

    /** gameLayer脚本 */
    gameLayerScr: GameLayer = null;

    /**初始时间 */
    startTime:number = 150;          

    /**当前时间 */
    _indexTime:number = 150;

    public get indexTime() {
        return this._indexTime;
    }

    public set indexTime(num) {
       this._indexTime = num;
       if(this.gameLayerScr) {
        this.gameLayerScr.updateTimerUi();
        if(num == this.startTime) { // 重新设置事件重置定时器
            this.gameLayerScr.unschedule(this.timerFunc);
        }
       }
    }

    /**当前游戏是否Layout布局 */
    _isLayout:boolean = true;

    public get isLayout():boolean{
        return this._isLayout
    }

    public set isLayout(Layout:boolean){
        this._isLayout = Layout
        // this.gameLayerScr.updataLayout()
    }

    /** 定时器运行方法 */
    timerFunc = null;

    /**当前选择的扑克牌 */
    selectPorkerArray:Array<number> = [-1,-1];

    /**旋转方向 */
    rotationArray:Array<number> = [0,90,180,270]

    /**正确方向 */
    rightArray:Array<number> = [0,90,90,0]

    index:number = 64

}

export default DataManager.instance;