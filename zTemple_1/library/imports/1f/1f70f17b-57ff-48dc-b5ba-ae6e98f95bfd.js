"use strict";
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
        this.startTime = 30;
        /**当前时间 */
        this._indexTime = 30;
        /** 定时器运行方法 */
        this.timerFunc = null;
        //放置数量
        this.tipNum = -1;
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
     * Google Ad
     */
    DataManager.prototype.adGoogleRewardedVideoAdHandle = function () {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod('voxavv/lqtzfckmz/fbcbjfeip/AppActivity', 'showRewardedVideo', '()V');
            }
        }
    };
    DataManager.prototype.adGoogleInterstitialAdHandle = function () {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod('voxavv/lqtzfckmz/fbcbjfeip/AppActivity', 'showInterstitialAd', '()V');
            }
        }
    };
    DataManager.prototype.adGoogleOpenAdHandle = function () {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod('voxavv/lqtzfckmz/fbcbjfeip/AppActivity', 'showOpenAd', '()V');
            }
        }
    };
    DataManager.prototype.adAnalyseAjustHandle = function () {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                jsb.reflection.callStaticMethod('voxavv/lqtzfckmz/fbcbjfeip/AppActivity', 'analyseAjust', '()V');
            }
        }
    };
    DataManager.instance = new DataManager();
    return DataManager;
}());
exports.default = DataManager.instance;

cc._RF.pop();