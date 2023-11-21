"use strict";
cc._RF.push(module, '1f70fF7V/9I3LW6rm6Y+Vv9', 'DataManager');
// script/DataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager = /** @class */ (function () {
    function DataManager() {
        /** 当前是否游戏运行中 */
        this.curGameIsRun = false;
        /**当前的分数 */
        this._curScord = 0;
        /** 当前局赢分 */
        this.curWinNum = 0;
        /** gameLayer脚本 */
        this.gameLayerScr = null;
        /**初始时间 */
        this.startTime = 30;
        /**当前时间 */
        this._indexTime = 30;
        /**当前游戏是否Layout布局 */
        this._isLayout = true;
        /** 定时器运行方法 */
        this.timerFunc = null;
        /**交换位置系欸但 */
        this.changeNodeIndex = -1;
        this.index = 0;
        /**位置index */
        this.gameIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        /**位置结果 */
        this.gamePos = [0, 0, 0, 0, 0];
    }
    Object.defineProperty(DataManager.prototype, "curScord", {
        get: function () {
            return this._curScord;
        },
        set: function (num) {
            this._curScord = num;
            if (this.gameLayerScr) {
                this.gameLayerScr.updateUserCoin();
            }
        },
        enumerable: false,
        configurable: true
    });
    DataManager.prototype.addScord = function (num) {
        this._curScord += num;
        if (this.gameLayerScr) {
            this.gameLayerScr.updateUserCoin();
            cc.audioEngine.playEffect(this.gameLayerScr[1], false);
        }
    };
    Object.defineProperty(DataManager.prototype, "indexTime", {
        get: function () {
            return this._indexTime;
        },
        set: function (num) {
            this._indexTime = num;
            if (this.gameLayerScr) {
                this.gameLayerScr.updateTimerUi();
                if (num == this.startTime) { // 重新设置事件重置定时器
                    this.gameLayerScr.unschedule(this.timerFunc);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "isLayout", {
        get: function () {
            return this._isLayout;
        },
        set: function (Layout) {
            this._isLayout = Layout;
            this.gameLayerScr.updataLayout();
        },
        enumerable: false,
        configurable: true
    });
    DataManager.prototype.changIndex = function (num) {
        this.index += num;
        if (this.index == 0) {
            this.gameLayerScr.showResult(true);
        }
        this.addScord(100);
        cc.audioEngine.playEffect(this.gameLayerScr.clipArray[2], false);
    };
    DataManager.instance = new DataManager();
    return DataManager;
}());
exports.default = DataManager.instance;

cc._RF.pop();