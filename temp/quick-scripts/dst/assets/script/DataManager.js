
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        /** 当前中奖元素下标 */
        this.curWinItmeIndex = -1;
        /** gameLayer脚本 */
        this.gameLayerScr = null;
        /**初始时间 */
        this.startTime = 30;
        /**当前时间 */
        this._indexTime = 30;
        /** 定时器运行方法 */
        this.timerFunc = null;
        /**当前选择的扑克牌 */
        this.selectPorkerArray = [-1, -1];
        /** 是否开启音效 */
        this.isOpenEffectSound = true;
        /** 是否开启背景音乐 */
        this.isOpenBgSound = true;
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
    Object.defineProperty(DataManager.prototype, "indexTime", {
        get: function () {
            return this._indexTime;
        },
        set: function (num) {
            this._indexTime = num;
            if (this.gameLayerScr) {
                this.gameLayerScr.updateTimerUi();
                if (num == this.startTime) {
                    // 重新设置事件重置定时器
                    this.gameLayerScr.unschedule(this.timerFunc);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    DataManager.instance = new DataManager();
    return DataManager;
}());
exports.default = DataManager.instance;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQUE7UUFHSSxnQkFBZ0I7UUFDaEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsV0FBVztRQUNKLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFN0IsWUFBWTtRQUNMLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFhN0IsZUFBZTtRQUNmLG9CQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFN0Isa0JBQWtCO1FBQ2xCLGlCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLFVBQVU7UUFDVixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFVBQVU7UUFDVixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBaUJ4QixjQUFjO1FBQ2QsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixjQUFjO1FBQ2Qsc0JBQWlCLEdBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QyxhQUFhO1FBQ2Isc0JBQWlCLEdBQVksSUFBSSxDQUFDO1FBRWxDLGVBQWU7UUFDZixrQkFBYSxHQUFZLElBQUksQ0FBQztJQUVsQyxDQUFDO0lBbERHLHNCQUFXLGlDQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFvQixHQUFHO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN0QztRQUNMLENBQUM7OztPQVBBO0lBcUJELHNCQUFXLGtDQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFxQixHQUFHO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDdkIsY0FBYztvQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ2hEO2FBQ0o7UUFDTCxDQUFDOzs7T0FYQTtJQXBDc0Isb0JBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBNkR4RCxrQkFBQztDQTlERCxBQThEQyxJQUFBO0FBRUQsa0JBQWUsV0FBVyxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGF5ZXIgZnJvbSAnLi9HYW1lTGF5ZXInO1xyXG5pbXBvcnQgeyBKc2JGdW5UeXBlIH0gZnJvbSAnLi91dGlsL2RlZmluZSc7XHJcblxyXG5jbGFzcyBEYXRhTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlID0gbmV3IERhdGFNYW5hZ2VyKCk7XHJcblxyXG4gICAgLyoqIOW9k+WJjeaYr+WQpua4uOaIj+i/kOihjOS4rSAqL1xyXG4gICAgY3VyR2FtZUlzUnVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq5b2T5YmN55qE5YiG5pWwICovXHJcbiAgICBwdWJsaWMgX2N1clNjb3JkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKiDlvZPliY3lsYDotaLliIYgKi9cclxuICAgIHB1YmxpYyBjdXJXaW5OdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJTY29yZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VyU2NvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjdXJTY29yZChudW0pIHtcclxuICAgICAgICB0aGlzLl9jdXJTY29yZCA9IG51bTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lTGF5ZXJTY3IpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudXBkYXRlVXNlckNvaW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOW9k+WJjeS4reWlluWFg+e0oOS4i+aghyAqL1xyXG4gICAgY3VyV2luSXRtZUluZGV4OiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICAvKiogZ2FtZUxheWVy6ISa5pysICovXHJcbiAgICBnYW1lTGF5ZXJTY3I6IEdhbWVMYXllciA9IG51bGw7XHJcblxyXG4gICAgLyoq5Yid5aeL5pe26Ze0ICovXHJcbiAgICBzdGFydFRpbWU6IG51bWJlciA9IDMwO1xyXG5cclxuICAgIC8qKuW9k+WJjeaXtumXtCAqL1xyXG4gICAgX2luZGV4VGltZTogbnVtYmVyID0gMzA7XHJcblxyXG4gICAgcHVibGljIGdldCBpbmRleFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4VGltZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGluZGV4VGltZShudW0pIHtcclxuICAgICAgICB0aGlzLl9pbmRleFRpbWUgPSBudW07XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUxheWVyU2NyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxheWVyU2NyLnVwZGF0ZVRpbWVyVWkoKTtcclxuICAgICAgICAgICAgaWYgKG51bSA9PSB0aGlzLnN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgLy8g6YeN5paw6K6+572u5LqL5Lu26YeN572u5a6a5pe25ZmoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVMYXllclNjci51bnNjaGVkdWxlKHRoaXMudGltZXJGdW5jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5a6a5pe25Zmo6L+Q6KGM5pa55rOVICovXHJcbiAgICB0aW1lckZ1bmMgPSBudWxsO1xyXG5cclxuICAgIC8qKuW9k+WJjemAieaLqeeahOaJkeWFi+eJjCAqL1xyXG4gICAgc2VsZWN0UG9ya2VyQXJyYXk6IEFycmF5PG51bWJlcj4gPSBbLTEsIC0xXTtcclxuXHJcbiAgICAvKiog5piv5ZCm5byA5ZCv6Z+z5pWIICovXHJcbiAgICBpc09wZW5FZmZlY3RTb3VuZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+iDjOaZr+mfs+S5kCAqL1xyXG4gICAgaXNPcGVuQmdTb3VuZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhTWFuYWdlci5pbnN0YW5jZTtcclxuIl19