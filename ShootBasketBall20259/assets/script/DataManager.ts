import GameLayer from "./GameLayer";

class DataManager {
    public static readonly instance = new DataManager();

    /** 当前是否游戏运行中 */
    curGameIsRun: boolean = false;

    /**当前的分数 */
    public _curScord:number = 0;

    /** 当前局赢分 */
    public curWinNum: number = 0;

    public get curScord() {
        return this._curScord;
    }

    public addScord(num){
        this._curScord += num
        if(this.gameLayerScr) {
            this.gameLayerScr.updateUserCoin();
            cc.audioEngine.playEffect(this.gameLayerScr[1],false)
        }
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
    startTime:number = 30;          

    /**当前时间 */
    _indexTime:number = 30;

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
        this.gameLayerScr.updataLayout()
    }

    public changIndex(num){
        this.index += num
        if(this.index == 0){
            this.gameLayerScr.showResult(true)
        }
        this.addScord(100)
        cc.audioEngine.playEffect(this.gameLayerScr.clipArray[2],false)
    }

    /** 定时器运行方法 */
    timerFunc = null;

    /**交换位置系欸但 */
    changeNodeIndex:number = -1

    index:number = 12

}

export default DataManager.instance;