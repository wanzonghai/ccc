
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
        /** 当前是否播放音效 */
        this.curSoundIsClose = true;
        /** 当前是否播放音效 */
        this.curSoundBGIsClose = true;
        /** 当前是否游戏运行中 */
        this.curGameIsRun = false;
        /**用户ID */
        this.userId = '10086';
        /**当前的分数 */
        this._curScord = 0;
        /** 当前局赢分 */
        this.curWinNum = 0;
        /**转盘结果 */
        this.randRes = -1;
        /**当前转盘状态 */
        this.canClick = true;
        /**钥匙数量 */
        this.keyNum = 0;
        /** 元素小三动画是否播放中 */
        this.itemHideAniIsPlay = false;
        /** 当前中奖元素下标 */
        this.curWinItmeIndex = -1;
        /** 当前中奖数据 */
        this.curWinData = [];
        /** gameLayer脚本 */
        this.gameLayerScr = null;
        /**初始时间 */
        this.startTime = 30;
        /**当前时间 */
        this._indexTime = 30;
        /** 定时器运行方法 */
        this.timerFunc = null;
        //放置数量
        this.putNum = 0;
        /**默认数字数组 */
        this.DefArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        /**玩家数组 */
        this.PlayerArray = [];
        /**玩家数组 */
        this.cpuArray = [];
        this.cpuTgNum = 0;
        this.Adjust_status = '';
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
    /**
     *  1、Google Ad  Rewarded
     *  2、Google Ad  InterstitialA
     *  3、Google Ad  OpenAd
     *  4、adjustDecision
     */
    DataManager.prototype.nativeJsbFun = function (type) {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod('nbsmgfoku/lkjjrhpumn/dklcmdlc/AppActivity', type, '()V');
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQUE7UUFHSSxlQUFlO1FBQ2Ysb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBZTtRQUNmLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxnQkFBZ0I7UUFDaEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsVUFBVTtRQUNWLFdBQU0sR0FBVyxPQUFPLENBQUM7UUFFekIsV0FBVztRQUNKLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFN0IsWUFBWTtRQUNMLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFN0IsVUFBVTtRQUNILFlBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQztRQUU1QixZQUFZO1FBQ0wsYUFBUSxHQUFZLElBQUksQ0FBQztRQUVoQyxVQUFVO1FBQ0gsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUUxQixrQkFBa0I7UUFDbEIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBYW5DLGVBQWU7UUFDZixvQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBRTdCLGFBQWE7UUFDYixlQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUUvQixrQkFBa0I7UUFDbEIsaUJBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsVUFBVTtRQUNWLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsVUFBVTtRQUNWLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFpQnhCLGNBQWM7UUFDZCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLE1BQU07UUFDTixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLFlBQVk7UUFDWixhQUFRLEdBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3RSxVQUFVO1FBQ1YsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBRWhDLFVBQVU7UUFDVixhQUFRLEdBQWtCLEVBQUUsQ0FBQztRQUU3QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRWQsa0JBQWEsR0FBVyxFQUFFLENBQUM7SUFldEMsQ0FBQztJQXpFRyxzQkFBVyxpQ0FBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBb0IsR0FBRztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdEM7UUFDTCxDQUFDOzs7T0FQQTtJQXdCRCxzQkFBVyxrQ0FBUzthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBcUIsR0FBRztZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2xDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ3ZCLGNBQWM7b0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNoRDthQUNKO1FBQ0wsQ0FBQzs7O09BWEE7SUFnQ0Q7Ozs7O09BS0c7SUFDSSxrQ0FBWSxHQUFuQixVQUFvQixJQUFnQjtRQUNoQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzdGO1NBQ0o7SUFDTCxDQUFDO0lBeEdzQixvQkFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUF5R3hELGtCQUFDO0NBMUdELEFBMEdDLElBQUE7QUFFRCxrQkFBZSxXQUFXLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVMYXllciBmcm9tICcuL0dhbWVMYXllcic7XHJcbmltcG9ydCB7IEpzYkZ1blR5cGUgfSBmcm9tICcuL3V0aWwvZGVmaW5lJztcclxuXHJcbmNsYXNzIERhdGFNYW5hZ2VyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2UgPSBuZXcgRGF0YU1hbmFnZXIoKTtcclxuXHJcbiAgICAvKiog5b2T5YmN5piv5ZCm5pKt5pS+6Z+z5pWIICovXHJcbiAgICBjdXJTb3VuZElzQ2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiDlvZPliY3mmK/lkKbmkq3mlL7pn7PmlYggKi9cclxuICAgIGN1clNvdW5kQkdJc0Nsb3NlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKiog5b2T5YmN5piv5ZCm5ri45oiP6L+Q6KGM5LitICovXHJcbiAgICBjdXJHYW1lSXNSdW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKirnlKjmiLdJRCAqL1xyXG4gICAgdXNlcklkOiBzdHJpbmcgPSAnMTAwODYnO1xyXG5cclxuICAgIC8qKuW9k+WJjeeahOWIhuaVsCAqL1xyXG4gICAgcHVibGljIF9jdXJTY29yZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKiog5b2T5YmN5bGA6LWi5YiGICovXHJcbiAgICBwdWJsaWMgY3VyV2luTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKui9rOebmOe7k+aenCAqL1xyXG4gICAgcHVibGljIHJhbmRSZXM6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIC8qKuW9k+WJjei9rOebmOeKtuaAgSAqL1xyXG4gICAgcHVibGljIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKirpkqXljJnmlbDph48gKi9cclxuICAgIHB1YmxpYyBrZXlOdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqIOWFg+e0oOWwj+S4ieWKqOeUu+aYr+WQpuaSreaUvuS4rSAqL1xyXG4gICAgaXRlbUhpZGVBbmlJc1BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGN1clNjb3JkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJTY29yZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGN1clNjb3JkKG51bSkge1xyXG4gICAgICAgIHRoaXMuX2N1clNjb3JkID0gbnVtO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVMYXllclNjcikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVMYXllclNjci51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5b2T5YmN5Lit5aWW5YWD57Sg5LiL5qCHICovXHJcbiAgICBjdXJXaW5JdG1lSW5kZXg6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIC8qKiDlvZPliY3kuK3lpZbmlbDmja4gKi9cclxuICAgIGN1cldpbkRhdGE6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHJcbiAgICAvKiogZ2FtZUxheWVy6ISa5pysICovXHJcbiAgICBnYW1lTGF5ZXJTY3I6IEdhbWVMYXllciA9IG51bGw7XHJcblxyXG4gICAgLyoq5Yid5aeL5pe26Ze0ICovXHJcbiAgICBzdGFydFRpbWU6IG51bWJlciA9IDMwO1xyXG5cclxuICAgIC8qKuW9k+WJjeaXtumXtCAqL1xyXG4gICAgX2luZGV4VGltZTogbnVtYmVyID0gMzA7XHJcblxyXG4gICAgcHVibGljIGdldCBpbmRleFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4VGltZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGluZGV4VGltZShudW0pIHtcclxuICAgICAgICB0aGlzLl9pbmRleFRpbWUgPSBudW07XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUxheWVyU2NyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxheWVyU2NyLnVwZGF0ZVRpbWVyVWkoKTtcclxuICAgICAgICAgICAgaWYgKG51bSA9PSB0aGlzLnN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgLy8g6YeN5paw6K6+572u5LqL5Lu26YeN572u5a6a5pe25ZmoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVMYXllclNjci51bnNjaGVkdWxlKHRoaXMudGltZXJGdW5jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5a6a5pe25Zmo6L+Q6KGM5pa55rOVICovXHJcbiAgICB0aW1lckZ1bmMgPSBudWxsO1xyXG5cclxuICAgIC8v5pS+572u5pWw6YePXHJcbiAgICBwdXROdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq6buY6K6k5pWw5a2X5pWw57uEICovXHJcbiAgICBEZWZBcnJheTogQXJyYXk8bnVtYmVyPiA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTRdO1xyXG5cclxuICAgIC8qKueOqeWutuaVsOe7hCAqL1xyXG4gICAgUGxheWVyQXJyYXk6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHJcbiAgICAvKirnjqnlrrbmlbDnu4QgKi9cclxuICAgIGNwdUFycmF5OiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG4gICAgY3B1VGdOdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIEFkanVzdF9zdGF0dXM6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogIDHjgIFHb29nbGUgQWQgIFJld2FyZGVkXHJcbiAgICAgKiAgMuOAgUdvb2dsZSBBZCAgSW50ZXJzdGl0aWFsQVxyXG4gICAgICogIDPjgIFHb29nbGUgQWQgIE9wZW5BZFxyXG4gICAgICogIDTjgIFhZGp1c3REZWNpc2lvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmF0aXZlSnNiRnVuKHR5cGU6IEpzYkZ1blR5cGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoJ25ic21nZm9rdS9sa2pqcmhwdW1uL2RrbGNtZGxjL0FwcEFjdGl2aXR5JywgdHlwZSwgJygpVicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhTWFuYWdlci5pbnN0YW5jZTtcclxuIl19