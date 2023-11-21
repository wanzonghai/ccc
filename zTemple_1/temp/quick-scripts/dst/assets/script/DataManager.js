
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7UUFHSSxnQkFBZ0I7UUFDaEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsV0FBVztRQUNKLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFFNUIsWUFBWTtRQUNMLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFxQjdCLGtCQUFrQjtRQUNsQixpQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixVQUFVO1FBQ1YsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUV0QixVQUFVO1FBQ1YsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQWdCdkIsb0JBQW9CO1FBQ3BCLGNBQVMsR0FBVyxJQUFJLENBQUM7UUFvQnpCLGNBQWM7UUFDZCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGFBQWE7UUFDYixvQkFBZSxHQUFVLENBQUMsQ0FBQyxDQUFBO1FBRTNCLFVBQUssR0FBVSxDQUFDLENBQUE7UUFFaEIsYUFBYTtRQUNiLGNBQVMsR0FBaUIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRXJELFVBQVU7UUFDVixZQUFPLEdBQWlCLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBRXZDLENBQUM7SUE3RUcsc0JBQVcsaUNBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQVVELFVBQW9CLEdBQUc7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ25DO1FBQ0osQ0FBQzs7O09BZkE7SUFFTSw4QkFBUSxHQUFmLFVBQWdCLEdBQUc7UUFDZixJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQTtRQUNyQixJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3hEO0lBQ0wsQ0FBQztJQWtCRCxzQkFBVyxrQ0FBUzthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBcUIsR0FBRztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2xDLElBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxjQUFjO29CQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ2hEO2FBQ0Q7UUFDSixDQUFDOzs7T0FWQTtJQWVELHNCQUFXLGlDQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7YUFFRCxVQUFvQixNQUFjO1lBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDcEMsQ0FBQzs7O09BTEE7SUFPTSxnQ0FBVSxHQUFqQixVQUFrQixHQUFHO1FBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFBO1FBQ2pCLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUM7WUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNyQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQXhFc0Isb0JBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBd0Z4RCxrQkFBQztDQXpGRCxBQXlGQyxJQUFBO0FBRUQsa0JBQWUsV0FBVyxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGF5ZXIgZnJvbSBcIi4vR2FtZUxheWVyXCI7XHJcblxyXG5jbGFzcyBEYXRhTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlID0gbmV3IERhdGFNYW5hZ2VyKCk7XHJcblxyXG4gICAgLyoqIOW9k+WJjeaYr+WQpua4uOaIj+i/kOihjOS4rSAqL1xyXG4gICAgY3VyR2FtZUlzUnVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq5b2T5YmN55qE5YiG5pWwICovXHJcbiAgICBwdWJsaWMgX2N1clNjb3JkOm51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqIOW9k+WJjeWxgOi1ouWIhiAqL1xyXG4gICAgcHVibGljIGN1cldpbk51bTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGN1clNjb3JkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJTY29yZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkU2NvcmQobnVtKXtcclxuICAgICAgICB0aGlzLl9jdXJTY29yZCArPSBudW1cclxuICAgICAgICBpZih0aGlzLmdhbWVMYXllclNjcikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVMYXllclNjci51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2FtZUxheWVyU2NyWzFdLGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGN1clNjb3JkKG51bSkge1xyXG4gICAgICAgdGhpcy5fY3VyU2NvcmQgPSBudW07XHJcbiAgICAgICBpZih0aGlzLmdhbWVMYXllclNjcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZUxheWVyU2NyLnVwZGF0ZVVzZXJDb2luKCk7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIGdhbWVMYXllcuiEmuacrCAqL1xyXG4gICAgZ2FtZUxheWVyU2NyOiBHYW1lTGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKuWIneWni+aXtumXtCAqL1xyXG4gICAgc3RhcnRUaW1lOm51bWJlciA9IDMwOyAgICAgICAgICBcclxuXHJcbiAgICAvKirlvZPliY3ml7bpl7QgKi9cclxuICAgIF9pbmRleFRpbWU6bnVtYmVyID0gMzA7XHJcblxyXG4gICAgcHVibGljIGdldCBpbmRleFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4VGltZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGluZGV4VGltZShudW0pIHtcclxuICAgICAgIHRoaXMuX2luZGV4VGltZSA9IG51bTtcclxuICAgICAgIGlmKHRoaXMuZ2FtZUxheWVyU2NyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudXBkYXRlVGltZXJVaSgpO1xyXG4gICAgICAgIGlmKG51bSA9PSB0aGlzLnN0YXJ0VGltZSkgeyAvLyDph43mlrDorr7nva7kuovku7bph43nva7lrprml7blmahcclxuICAgICAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudW5zY2hlZHVsZSh0aGlzLnRpbWVyRnVuYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuW9k+WJjea4uOaIj+aYr+WQpkxheW91dOW4g+WxgCAqL1xyXG4gICAgX2lzTGF5b3V0OmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNMYXlvdXQoKTpib29sZWFue1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xheW91dFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaXNMYXlvdXQoTGF5b3V0OmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuX2lzTGF5b3V0ID0gTGF5b3V0XHJcbiAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudXBkYXRhTGF5b3V0KClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdJbmRleChudW0pe1xyXG4gICAgICAgIHRoaXMuaW5kZXggKz0gbnVtXHJcbiAgICAgICAgaWYodGhpcy5pbmRleCA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3Iuc2hvd1Jlc3VsdCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZFNjb3JkKDEwMClcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2FtZUxheWVyU2NyLmNsaXBBcnJheVsyXSxmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICAvKiog5a6a5pe25Zmo6L+Q6KGM5pa55rOVICovXHJcbiAgICB0aW1lckZ1bmMgPSBudWxsO1xyXG5cclxuICAgIC8qKuS6pOaNouS9jee9ruezu+asuOS9hiAqL1xyXG4gICAgY2hhbmdlTm9kZUluZGV4Om51bWJlciA9IC0xXHJcblxyXG4gICAgaW5kZXg6bnVtYmVyID0gMFxyXG5cclxuICAgIC8qKuS9jee9rmluZGV4ICovXHJcbiAgICBnYW1lSW5kZXg6QXJyYXk8bnVtYmVyPiA9IFswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExXVxyXG4gICAgXHJcbiAgICAvKirkvY3nva7nu5PmnpwgKi9cclxuICAgIGdhbWVQb3M6QXJyYXk8bnVtYmVyPiA9IFswLDAsMCwwLDBdXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhTWFuYWdlci5pbnN0YW5jZTsiXX0=