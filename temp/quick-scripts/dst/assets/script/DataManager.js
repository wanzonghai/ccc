
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
        this.userId = "10086";
        /**当前的分数 */
        this._curScord = 0;
        /** 当前局赢分 */
        this.curWinNum = 0;
        /** gameLayer脚本 */
        this.gameLayerScr = null;
        /**初始时间 */
        this.startTime = 60;
        /**当前时间 */
        this._indexTime = 60;
        /** 定时器运行方法 */
        this.timerFunc = null;
        /** 当前游戏难度阶段 */
        this.curGameStage = 0;
        /** 阶段对应行列 */
        this.stageRanks = [
            5,
            6,
            7,
            8,
            9,
            10,
        ];
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
                if (num == this.startTime) { // 重新设置事件重置定时器
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7UUFHSSxlQUFlO1FBQ2Ysb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFFL0IsZUFBZTtRQUNmLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUVuQyxnQkFBZ0I7UUFDaEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsVUFBVTtRQUNWLFdBQU0sR0FBVSxPQUFPLENBQUE7UUFFdkIsV0FBVztRQUNKLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFFNUIsWUFBWTtRQUNMLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFhN0Isa0JBQWtCO1FBQ2xCLGlCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLFVBQVU7UUFDVixjQUFTLEdBQVUsRUFBRSxDQUFDO1FBRXRCLFVBQVU7UUFDVixlQUFVLEdBQVUsRUFBRSxDQUFDO1FBZ0J2QixjQUFjO1FBQ2QsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixlQUFlO1FBQ2YsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsYUFBYTtRQUNiLGVBQVUsR0FBa0I7WUFDeEIsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxFQUFFO1NBQ0wsQ0FBQTtJQUVMLENBQUM7SUFsREcsc0JBQVcsaUNBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQW9CLEdBQUc7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ25DO1FBQ0osQ0FBQzs7O09BUEE7SUFrQkQsc0JBQVcsa0NBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQXFCLEdBQUc7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNsQyxJQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsY0FBYztvQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNoRDthQUNEO1FBQ0osQ0FBQzs7O09BVkE7SUExQ3NCLG9CQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQXNFeEQsa0JBQUM7Q0F2RUQsQUF1RUMsSUFBQTtBQUVELGtCQUFlLFdBQVcsQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxheWVyIGZyb20gXCIuL0dhbWVMYXllclwiO1xyXG5cclxuY2xhc3MgRGF0YU1hbmFnZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZSA9IG5ldyBEYXRhTWFuYWdlcigpO1xyXG5cclxuICAgIC8qKiDlvZPliY3mmK/lkKbmkq3mlL7pn7PmlYggKi9cclxuICAgIGN1clNvdW5kSXNDbG9zZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgIC8qKiDlvZPliY3mmK/lkKbmkq3mlL7pn7PmlYggKi9cclxuICAgICBjdXJTb3VuZEJHSXNDbG9zZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIOW9k+WJjeaYr+WQpua4uOaIj+i/kOihjOS4rSAqL1xyXG4gICAgY3VyR2FtZUlzUnVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq55So5oi3SUQgKi9cclxuICAgIHVzZXJJZDpzdHJpbmcgPSBcIjEwMDg2XCJcclxuXHJcbiAgICAvKirlvZPliY3nmoTliIbmlbAgKi9cclxuICAgIHB1YmxpYyBfY3VyU2NvcmQ6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKiog5b2T5YmN5bGA6LWi5YiGICovXHJcbiAgICBwdWJsaWMgY3VyV2luTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY3VyU2NvcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clNjb3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY3VyU2NvcmQobnVtKSB7XHJcbiAgICAgICB0aGlzLl9jdXJTY29yZCA9IG51bTtcclxuICAgICAgIGlmKHRoaXMuZ2FtZUxheWVyU2NyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudXBkYXRlVXNlckNvaW4oKTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogZ2FtZUxheWVy6ISa5pysICovXHJcbiAgICBnYW1lTGF5ZXJTY3I6IEdhbWVMYXllciA9IG51bGw7XHJcblxyXG4gICAgLyoq5Yid5aeL5pe26Ze0ICovXHJcbiAgICBzdGFydFRpbWU6bnVtYmVyID0gNjA7ICAgICAgICAgIFxyXG5cclxuICAgIC8qKuW9k+WJjeaXtumXtCAqL1xyXG4gICAgX2luZGV4VGltZTpudW1iZXIgPSA2MDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGluZGV4VGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXhUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaW5kZXhUaW1lKG51bSkge1xyXG4gICAgICAgdGhpcy5faW5kZXhUaW1lID0gbnVtO1xyXG4gICAgICAgaWYodGhpcy5nYW1lTGF5ZXJTY3IpIHtcclxuICAgICAgICB0aGlzLmdhbWVMYXllclNjci51cGRhdGVUaW1lclVpKCk7XHJcbiAgICAgICAgaWYobnVtID09IHRoaXMuc3RhcnRUaW1lKSB7IC8vIOmHjeaWsOiuvue9ruS6i+S7tumHjee9ruWumuaXtuWZqFxyXG4gICAgICAgICAgICB0aGlzLmdhbWVMYXllclNjci51bnNjaGVkdWxlKHRoaXMudGltZXJGdW5jKTtcclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWumuaXtuWZqOi/kOihjOaWueazlSAqL1xyXG4gICAgdGltZXJGdW5jID0gbnVsbDtcclxuXHJcbiAgICAvKiog5b2T5YmN5ri45oiP6Zq+5bqm6Zi25q61ICovXHJcbiAgICBjdXJHYW1lU3RhZ2U6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqIOmYtuauteWvueW6lOihjOWIlyAqL1xyXG4gICAgc3RhZ2VSYW5rczogQXJyYXk8bnVtYmVyPiA9IFtcclxuICAgICAgICA1LFxyXG4gICAgICAgIDYsXHJcbiAgICAgICAgNyxcclxuICAgICAgICA4LFxyXG4gICAgICAgIDksXHJcbiAgICAgICAgMTAsXHJcbiAgICBdXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhTWFuYWdlci5pbnN0YW5jZTsiXX0=