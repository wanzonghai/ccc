
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
        /** 元素小三动画是否播放中 */
        this.itemHideAniIsPlay = false;
        /** 当前中奖元素下标 */
        this.curWinItmeIndex = -1;
        /** 当前中奖数据 */
        this.curWinData = [];
        /** gameLayer脚本 */
        this.gameLayerScr = null;
        /**初始时间 */
        this.startTime = 60;
        /**当前时间 */
        this._indexTime = 60;
        /** 定时器运行方法 */
        this.timerFunc = null;
        //放置数量
        this.putNum = 0;
        /**默认数字数组 */
        this.DefArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        /**玩家数组 */
        this.PlayerArray = [];
        /**玩家数组 */
        this.cpuArray = [];
        /**玩家糖果数量 */
        this.playerTgNum = 0;
        this.cpuTgNum = 0;
        this.Adjust_status = '';
        this.IsCheckAdjust_status = true;
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
     * Google Ad
     */
    DataManager.prototype.adGoogleRewardedVideoAdHandle = function () {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod('gbxjitpfuo/okmjwlsmg/tjmnpgbhw/AppActivity', 'showRewardedVideo', '()V');
            }
        }
    };
    DataManager.prototype.adGoogleInterstitialAdHandle = function () {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod('gbxjitpfuo/okmjwlsmg/tjmnpgbhw/AppActivity', 'showInterstitialAd', '()V');
            }
        }
    };
    DataManager.prototype.adAnalyseAjustHandle = function () {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod('gbxjitpfuo/okmjwlsmg/tjmnpgbhw/AppActivity', 'analyseAjust', '()V');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7UUFHSSxlQUFlO1FBQ2Ysb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBZTtRQUNmLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxnQkFBZ0I7UUFDaEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsVUFBVTtRQUNWLFdBQU0sR0FBVyxPQUFPLENBQUM7UUFFekIsV0FBVztRQUNKLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFN0IsWUFBWTtRQUNMLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFN0IsVUFBVTtRQUNILFlBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQztRQUU1QixZQUFZO1FBQ0wsYUFBUSxHQUFZLElBQUksQ0FBQztRQUVoQyxrQkFBa0I7UUFDbEIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBYW5DLGVBQWU7UUFDZixvQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBRTdCLGFBQWE7UUFDYixlQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUUvQixrQkFBa0I7UUFDbEIsaUJBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsVUFBVTtRQUNWLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsVUFBVTtRQUNWLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFpQnhCLGNBQWM7UUFDZCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLE1BQU07UUFDTixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLFlBQVk7UUFDWixhQUFRLEdBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdEgsVUFBVTtRQUNWLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUVoQyxVQUFVO1FBQ1YsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFFN0IsWUFBWTtRQUNaLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFZCxrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQix5QkFBb0IsR0FBWSxJQUFJLENBQUM7SUF5QmhELENBQUM7SUF2Rkcsc0JBQVcsaUNBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQW9CLEdBQUc7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3RDO1FBQ0wsQ0FBQzs7O09BUEE7SUF3QkQsc0JBQVcsa0NBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQXFCLEdBQUc7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUN2QixjQUFjO29CQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDaEQ7YUFDSjtRQUNMLENBQUM7OztPQVhBO0lBbUNEOztPQUVHO0lBQ0ksbURBQTZCLEdBQXBDO1FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNoQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLDRDQUE0QyxFQUFFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzdHO1NBQ0o7SUFDTCxDQUFDO0lBQ00sa0RBQTRCLEdBQW5DO1FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNoQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLDRDQUE0QyxFQUFFLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzlHO1NBQ0o7SUFDTCxDQUFDO0lBQ00sMENBQW9CLEdBQTNCO1FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNoQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLDRDQUE0QyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN4RztTQUNKO0lBQ0wsQ0FBQztJQW5Ic0Isb0JBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBb0h4RCxrQkFBQztDQXJIRCxBQXFIQyxJQUFBO0FBRUQsa0JBQWUsV0FBVyxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGF5ZXIgZnJvbSAnLi9HYW1lTGF5ZXInO1xyXG5cclxuY2xhc3MgRGF0YU1hbmFnZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZSA9IG5ldyBEYXRhTWFuYWdlcigpO1xyXG5cclxuICAgIC8qKiDlvZPliY3mmK/lkKbmkq3mlL7pn7PmlYggKi9cclxuICAgIGN1clNvdW5kSXNDbG9zZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIOW9k+WJjeaYr+WQpuaSreaUvumfs+aViCAqL1xyXG4gICAgY3VyU291bmRCR0lzQ2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiDlvZPliY3mmK/lkKbmuLjmiI/ov5DooYzkuK0gKi9cclxuICAgIGN1ckdhbWVJc1J1bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKueUqOaIt0lEICovXHJcbiAgICB1c2VySWQ6IHN0cmluZyA9ICcxMDA4Nic7XHJcblxyXG4gICAgLyoq5b2T5YmN55qE5YiG5pWwICovXHJcbiAgICBwdWJsaWMgX2N1clNjb3JkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKiDlvZPliY3lsYDotaLliIYgKi9cclxuICAgIHB1YmxpYyBjdXJXaW5OdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq6L2s55uY57uT5p6cICovXHJcbiAgICBwdWJsaWMgcmFuZFJlczogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgLyoq5b2T5YmN6L2s55uY54q25oCBICovXHJcbiAgICBwdWJsaWMgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiDlhYPntKDlsI/kuInliqjnlLvmmK/lkKbmkq3mlL7kuK0gKi9cclxuICAgIGl0ZW1IaWRlQW5pSXNQbGF5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJTY29yZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VyU2NvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjdXJTY29yZChudW0pIHtcclxuICAgICAgICB0aGlzLl9jdXJTY29yZCA9IG51bTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lTGF5ZXJTY3IpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudXBkYXRlVXNlckNvaW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOW9k+WJjeS4reWlluWFg+e0oOS4i+aghyAqL1xyXG4gICAgY3VyV2luSXRtZUluZGV4OiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICAvKiog5b2T5YmN5Lit5aWW5pWw5o2uICovXHJcbiAgICBjdXJXaW5EYXRhOiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG4gICAgLyoqIGdhbWVMYXllcuiEmuacrCAqL1xyXG4gICAgZ2FtZUxheWVyU2NyOiBHYW1lTGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKuWIneWni+aXtumXtCAqL1xyXG4gICAgc3RhcnRUaW1lOiBudW1iZXIgPSA2MDtcclxuXHJcbiAgICAvKirlvZPliY3ml7bpl7QgKi9cclxuICAgIF9pbmRleFRpbWU6IG51bWJlciA9IDYwO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaW5kZXhUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBpbmRleFRpbWUobnVtKSB7XHJcbiAgICAgICAgdGhpcy5faW5kZXhUaW1lID0gbnVtO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVMYXllclNjcikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVMYXllclNjci51cGRhdGVUaW1lclVpKCk7XHJcbiAgICAgICAgICAgIGlmIChudW0gPT0gdGhpcy5zdGFydFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIOmHjeaWsOiuvue9ruS6i+S7tumHjee9ruWumuaXtuWZqFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudW5zY2hlZHVsZSh0aGlzLnRpbWVyRnVuYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWumuaXtuWZqOi/kOihjOaWueazlSAqL1xyXG4gICAgdGltZXJGdW5jID0gbnVsbDtcclxuXHJcbiAgICAvL+aUvue9ruaVsOmHj1xyXG4gICAgcHV0TnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKum7mOiupOaVsOWtl+aVsOe7hCAqL1xyXG4gICAgRGVmQXJyYXk6IEFycmF5PG51bWJlcj4gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjVdO1xyXG5cclxuICAgIC8qKueOqeWutuaVsOe7hCAqL1xyXG4gICAgUGxheWVyQXJyYXk6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHJcbiAgICAvKirnjqnlrrbmlbDnu4QgKi9cclxuICAgIGNwdUFycmF5OiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG4gICAgLyoq546p5a6257OW5p6c5pWw6YePICovXHJcbiAgICBwbGF5ZXJUZ051bTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjcHVUZ051bTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgQWRqdXN0X3N0YXR1czogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgSXNDaGVja0FkanVzdF9zdGF0dXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHb29nbGUgQWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkR29vZ2xlUmV3YXJkZWRWaWRlb0FkSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xyXG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCgnZ2J4aml0cGZ1by9va21qd2xzbWcvdGptbnBnYmh3L0FwcEFjdGl2aXR5JywgJ3Nob3dSZXdhcmRlZFZpZGVvJywgJygpVicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGFkR29vZ2xlSW50ZXJzdGl0aWFsQWRIYW5kbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKCdnYnhqaXRwZnVvL29rbWp3bHNtZy90am1ucGdiaHcvQXBwQWN0aXZpdHknLCAnc2hvd0ludGVyc3RpdGlhbEFkJywgJygpVicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGFkQW5hbHlzZUFqdXN0SGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xyXG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCgnZ2J4aml0cGZ1by9va21qd2xzbWcvdGptbnBnYmh3L0FwcEFjdGl2aXR5JywgJ2FuYWx5c2VBanVzdCcsICcoKVYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YU1hbmFnZXIuaW5zdGFuY2U7XHJcbiJdfQ==