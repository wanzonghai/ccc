
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/DataManager');
require('./assets/script/GameLayer');
require('./assets/script/GameWheel');
require('./assets/script/HallManger');
require('./assets/script/ItemNode');
require('./assets/script/JumpStr');
require('./assets/script/StartGameLayer');
require('./assets/script/util/NativeJSBridgeIns');
require('./assets/script/util/define');
require('./assets/script/util/event/Event');
require('./assets/script/util/event/EventMgr');
require('./assets/script/util/loaderManager');
require('./assets/script/util/util');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GameWheel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18a0cX5k81IMrDI6b1T6Rlf', 'GameWheel');
// script/GameWheel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AREA_COUNT_LIST = exports.WHEEL_TYPES = void 0;
var define_1 = require("./util/define");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 转盘上每个节点对应角度集合
*/
var AREA_ANGEL_LIST = [14.35, 45, 22.5];
/**
 * 转盘类型
 * MINI 小转盘
 * MEDIUM 中转盘
 * MAX 大转盘
*/
exports.WHEEL_TYPES = {
    MINI: 0,
    MEDIUM: 1,
    MAX: 2,
};
/**
 * 转盘上节点数量集合
*/
exports.AREA_COUNT_LIST = [25, 8, 16];
var GameWheel = /** @class */ (function (_super) {
    __extends(GameWheel, _super);
    function GameWheel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheelNodes = [];
        _this.lightNode = null;
        _this.accelerated = 0;
        _this.deceleration = 0;
        _this.maxRangeSpeed = 0;
        /**
         * 当前转盘类型
        */
        _this._curWheelType = exports.WHEEL_TYPES.MINI;
        _this._range = 0;
        _this._currentRotationSpeed = 0;
        _this._targetRotation = 0;
        _this._totalPrize = 0;
        _this._resultId = 0;
        _this._lotteryId = 0;
        _this._interval = 0;
        /**
         * WheelState.Stand:静止 WheelState.Acelerara:加速 WheelState.Desacelerar:减速
        */
        _this._currentState = define_1.WheelState.Stand;
        _this._mixRotation = 0;
        // LIFE-CYCLE CALLBACKS:
        _this._wheelConfig = [];
        _this._maxTargetNode = null;
        _this._isPlayEndSound = false;
        /** 结束回调 */
        _this.endCall = null;
        return _this;
    }
    GameWheel.prototype.onLoad = function () {
        this.resetAngle();
        // this.lightNode.active = false;
    };
    GameWheel.prototype.updateWheelConfig = function (wheelConfig) {
        var _this = this;
        // if (this.getRunning()) return;
        this.resetWheel();
        if (this._wheelConfig.length > 0) {
            return;
        }
        this._wheelConfig = [];
        var wheelData;
        wheelConfig.forEach(function (v) {
            wheelData = {};
            if (v.value >= 0) {
                wheelData.type = define_1.WheelType.BetLv;
                wheelData.num = v.value / 100;
            }
            else {
                wheelData.type = define_1.WheelType.Spin;
                wheelData.num = Math.abs(v.value) / 100;
            }
            _this._wheelConfig.push(wheelData);
        });
        this.init();
    };
    GameWheel.prototype.init = function () {
        // this.playZoomInAnimation();
        this.initWheel();
    };
    /**
     * 初始化轮盘数据
     */
    GameWheel.prototype.initWheel = function () {
        var wheelChilds = this.wheelNodes[this._curWheelType].children;
        var maxBetlv = 0;
        if (this.wheelNodes[this._curWheelType]) {
            for (var i = 0; i < exports.AREA_COUNT_LIST[this._curWheelType]; i++) {
                // let child = wheelChilds[i];
                // let label = cc.find("label", child);
                if (this._wheelConfig[i].type == define_1.WheelType.BetLv) {
                    // label.getComponent(cc.Label).string = "x" + this._wheelConfig[i].num;
                    if (this._wheelConfig[i].num > maxBetlv) { //找到倍率最大的目标节点
                        maxBetlv = this._wheelConfig[i].num;
                        this._maxTargetNode = wheelChilds[i];
                    }
                }
                else if (this._wheelConfig[i].type == define_1.WheelType.Spin) {
                    // label.getComponent(cc.Label).string = "Spin " + this._wheelConfig[i].num;
                }
            }
        }
        this.resetAngle();
    };
    /**
     * 初始化转盘属性
     */
    GameWheel.prototype.initProperties = function () {
        // 旋转角度范围
        this._range = 360;
        // 当前旋转速度
        this._currentRotationSpeed = 0;
        // 最小层转盘有一个假的图片这
        this._totalPrize = this.wheelNodes[this._curWheelType].children.length;
        this._resultId = this._totalPrize + 1 - this._resultId;
        // 时间间隔
        this._interval = 0.02;
        this.accelerated = 360 * 6;
        this.deceleration = -360 * 2;
        this.maxRangeSpeed = 360 * 4;
        this._isPlayEndSound = false;
    };
    /**
     * 开始滚动
    */
    GameWheel.prototype.runGame = function (index, endCall) {
        this.endCall = endCall;
        // this.lightNode.active = false;
        // this._curWheelType = 1;
        this._resultId = index;
        this._lotteryId = index;
        console.log("中奖id =" + this._resultId);
        this.initProperties();
        this.run();
    };
    /**
     * 结束滚动重置位置
    */
    GameWheel.prototype.resetWheel = function () {
        this.unschedule(this.updateRotation);
        this._currentRotationSpeed = 0; //当前速度设置为 0rad/s
        this._currentState = define_1.WheelState.Stand;
    };
    /**
     * 展示当前层转盘滚动结果
    */
    GameWheel.prototype.showWheelEnd = function () {
        this.unschedule(this.updateRotation);
        this._currentRotationSpeed = 0; //当前速度设置为 0rad/s
        this._currentState = define_1.WheelState.Stand;
        this.wheelNodes[this._curWheelType].angle = this._lotteryId * AREA_ANGEL_LIST[this._curWheelType];
        // 滚动结束
        // this.lightNode.active = true;
        this.endCall && this.endCall();
        console.log("滚动结束");
    };
    GameWheel.prototype.run = function () {
        if (!this.getRunning()) {
            this._currentState = define_1.WheelState.Acelerara;
            this.schedule(this.updateRotation, this._interval);
        }
        else {
            console.log("转盘已经开始转动...");
        }
    };
    GameWheel.prototype.stop = function () {
        this.resetWheel();
        // this.lightNode.active = true;
        this.endCall && this.endCall();
    };
    /**
     * 获取从最大加速度减速到停止的总角度
     *  */
    GameWheel.prototype.onVirtualCompute = function () {
        var virtualRotationAngle = 0;
        var rotationSpeed = this.maxRangeSpeed;
        while (rotationSpeed > 0) {
            virtualRotationAngle += this._interval * rotationSpeed; // 获取减速度到停止时候的总旋转角度
            rotationSpeed += this._interval * this.deceleration; // 每帧旋转的速度
        }
        return virtualRotationAngle;
    };
    /**
     * 获取开始减速的时机 角度
     * @param targetRotation 从初始位置（加速度或者减速度都是360度整的所以直接从编辑器里的初始位置）旋转到目标模块位置的角度
     * */
    GameWheel.prototype.onGetValue = function (targetRotation) {
        var temp = targetRotation - this.onVirtualCompute();
        if (temp > 0) {
            while (temp >= 360) {
                temp -= this._range;
            }
        }
        else {
            while (temp < 0) {
                temp += this._range;
            }
        }
        return temp;
    };
    /**
     * 转动检测
     */
    GameWheel.prototype.detectionAngle = function () {
        // console.log("角度检测中,寻找合适减速时机...")
        // 目标旋转角度
        var _zeroRotation = this._range - AREA_ANGEL_LIST[this._curWheelType] * (2 + this._curWheelType);
        this._targetRotation = _zeroRotation - (exports.AREA_COUNT_LIST[this._curWheelType] - this._resultId) * AREA_ANGEL_LIST[this._curWheelType];
        this._targetRotation = this._targetRotation;
        var tempRotation = this.onGetValue(this._targetRotation);
        this.wheelNodes[this._curWheelType].angle = -tempRotation;
        this._currentState = define_1.WheelState.Desacelerar;
    };
    /**
     * 每一帧回调
     * @param {*}
     */
    GameWheel.prototype.updateRotation = function () {
        console.log("update curState= " + this._currentState);
        switch (this._currentState) {
            case 0:
                break;
            case 1:
                {
                    // 旋转完成开始停止
                    if (this._currentRotationSpeed >= this.maxRangeSpeed) {
                        this._currentRotationSpeed = this.maxRangeSpeed;
                        this.detectionAngle();
                    }
                    else {
                        // 是加速度的同时也是初始速度
                        this._currentRotationSpeed += this.accelerated * this._interval;
                    }
                }
                break;
            case 2:
                {
                    if (this._currentRotationSpeed <= 0) {
                        this._currentRotationSpeed = 0; //当前速度设置为 0rad/s
                        this._currentState = define_1.WheelState.Stand;
                        this.stop();
                    }
                    else {
                        if (this.maxRangeSpeed / this._currentRotationSpeed >= 1) {
                        }
                        if (this.maxRangeSpeed / this._currentRotationSpeed >= 3) {
                            // this.pointSpine.timeScale = 1;
                        }
                        if (this.maxRangeSpeed / this._currentRotationSpeed >= 5) {
                            // this.pointSpine.timeScale = 0.5;
                        }
                        if (this._currentRotationSpeed <= 50) {
                            var mod = Math.floor(Math.abs(this.wheelNodes[this._curWheelType].angle / 360));
                            this._mixRotation = (mod * 360 + this._targetRotation) - Math.abs(this.wheelNodes[this._curWheelType].angle);
                            this.stop();
                            return;
                        }
                        this._currentRotationSpeed += this.deceleration * this._interval;
                        // console.log("TTTTT this._currentRotationSpeed = " + this._currentRotationSpeed + " rarotion = " + this.wheelNodes[this._curWheelType].angle + " targetAngle =" + this._targetRotation);
                    }
                }
                break;
            default:
                {
                    this.stop();
                }
                break;
        }
        // cc.log("当前旋转速度 : ", this._currentRotationSpeed);
        var tempRotationSpeed = this._currentRotationSpeed * this._interval;
        // cc.log("TTTTT 当前转盘转动速度" + tempRotationSpeed + "°/" + this._interval + "s");
        this.wheelNodes[this._curWheelType].angle -= tempRotationSpeed;
        // this.virtualWheel.angle = this.wheelNodes[this._curWheelType].angle;
    };
    //获取两个数间的随机值
    GameWheel.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    GameWheel.prototype.getRandomIndex = function (l) {
        if (l <= 0)
            return 0;
        return Math.round(Math.random() * l);
    };
    /**
     * 转盘是否正在滚动
     * @returns
     */
    GameWheel.prototype.getRunning = function () {
        return this._currentState > define_1.WheelState.Stand;
    };
    GameWheel.prototype.getTargetNode = function () {
        var target = this.wheelNodes[this._curWheelType].children[0];
        if (target) {
            return target;
        }
    };
    GameWheel.prototype.resetAngle = function () {
        this.wheelNodes[this._curWheelType].angle = 0; // 第一个转盘初始位置不同
    };
    GameWheel.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], GameWheel.prototype, "wheelNodes", void 0);
    __decorate([
        property({ type: cc.Node })
    ], GameWheel.prototype, "lightNode", void 0);
    __decorate([
        property({ displayName: "加速度", tooltip: "加速度值,每秒速度增加几度,°/s²" })
    ], GameWheel.prototype, "accelerated", void 0);
    __decorate([
        property({ displayName: "减速度", tooltip: "加速度值,每秒速度减少几度,°/s²" })
    ], GameWheel.prototype, "deceleration", void 0);
    __decorate([
        property({ displayName: "最大速度", tooltip: "每秒速度减少几度,°/s" })
    ], GameWheel.prototype, "maxRangeSpeed", void 0);
    GameWheel = __decorate([
        ccclass
    ], GameWheel);
    return GameWheel;
}(cc.Component));
exports.default = GameWheel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lV2hlZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLHdDQUEwRTtBQUtwRSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQzs7RUFFRTtBQUNGLElBQU0sZUFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUUxQzs7Ozs7RUFLRTtBQUNXLFFBQUEsV0FBVyxHQUFHO0lBQ3ZCLElBQUksRUFBRSxDQUFDO0lBQ1AsTUFBTSxFQUFFLENBQUM7SUFDVCxHQUFHLEVBQUUsQ0FBQztDQUNULENBQUM7QUFFRjs7RUFFRTtBQUNXLFFBQUEsZUFBZSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUkzQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW1UQztRQWpURyxnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUczQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBR3pCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRzFCOztVQUVFO1FBQ00sbUJBQWEsR0FBRyxtQkFBVyxDQUFDLElBQUksQ0FBQztRQUNqQyxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsMkJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxnQkFBVSxHQUFHLENBQUMsQ0FB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UztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7Z0RBQ0E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxDQUFDO2tEQUN4QztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLENBQUM7bURBQ3ZDO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUM7b0RBQ2pDO0lBZFQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW1UN0I7SUFBRCxnQkFBQztDQW5URCxBQW1UQyxDQW5Uc0MsRUFBRSxDQUFDLFNBQVMsR0FtVGxEO2tCQW5Ub0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFdmVudElkLCBXaGVlbERhdGEsIFdoZWVsU3RhdGUsIFdoZWVsVHlwZSB9IGZyb20gXCIuL3V0aWwvZGVmaW5lXCI7XHJcbmltcG9ydCBFdmVudE1nciBmcm9tIFwiLi91dGlsL2V2ZW50L0V2ZW50TWdyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOi9rOebmOS4iuavj+S4quiKgueCueWvueW6lOinkuW6pumbhuWQiFxyXG4qL1xyXG5jb25zdCBBUkVBX0FOR0VMX0xJU1QgPSBbMTQuMzUsIDQ1LCAyMi41XTtcclxuXHJcbi8qKlxyXG4gKiDovaznm5jnsbvlnotcclxuICogTUlOSSDlsI/ovaznm5hcclxuICogTUVESVVNIOS4rei9rOebmFxyXG4gKiBNQVgg5aSn6L2s55uYXHJcbiovXHJcbmV4cG9ydCBjb25zdCBXSEVFTF9UWVBFUyA9IHtcclxuICAgIE1JTkk6IDAsXHJcbiAgICBNRURJVU06IDEsXHJcbiAgICBNQVg6IDIsXHJcbn07XHJcblxyXG4vKipcclxuICog6L2s55uY5LiK6IqC54K55pWw6YeP6ZuG5ZCIXHJcbiovXHJcbmV4cG9ydCBjb25zdCBBUkVBX0NPVU5UX0xJU1QgPSBbMjUsIDgsIDE2XTtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV2hlZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3aGVlbE5vZGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGV9KVxyXG4gICAgbGlnaHROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLliqDpgJ/luqZcIiwgdG9vbHRpcDogXCLliqDpgJ/luqblgLws5q+P56eS6YCf5bqm5aKe5Yqg5Yeg5bqmLMKwL3PCslwiIH0pXHJcbiAgICBhY2NlbGVyYXRlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLlh4/pgJ/luqZcIiwgdG9vbHRpcDogXCLliqDpgJ/luqblgLws5q+P56eS6YCf5bqm5YeP5bCR5Yeg5bqmLMKwL3PCslwiIH0pXHJcbiAgICBkZWNlbGVyYXRpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5pyA5aSn6YCf5bqmXCIsIHRvb2x0aXA6IFwi5q+P56eS6YCf5bqm5YeP5bCR5Yeg5bqmLMKwL3NcIiB9KVxyXG4gICAgbWF4UmFuZ2VTcGVlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN6L2s55uY57G75Z6LXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBfY3VyV2hlZWxUeXBlID0gV0hFRUxfVFlQRVMuTUlOSTtcclxuICAgIHByaXZhdGUgX3JhbmdlID0gMDtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRSb3RhdGlvblNwZWVkID0gMDtcclxuICAgIHByaXZhdGUgX3RhcmdldFJvdGF0aW9uID0gMDtcclxuICAgIHByaXZhdGUgX3RvdGFsUHJpemUgPSAwO1xyXG4gICAgcHJpdmF0ZSBfcmVzdWx0SWQgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbG90dGVyeUlkID0gMDtcclxuICAgIHByaXZhdGUgX2ludGVydmFsID0gMDtcclxuICAgICAvKipcclxuICAgICAgKiBXaGVlbFN0YXRlLlN0YW5kOumdmeatoiBXaGVlbFN0YXRlLkFjZWxlcmFyYTrliqDpgJ8gV2hlZWxTdGF0ZS5EZXNhY2VsZXJhcjrlh4/pgJ8gXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2N1cnJlbnRTdGF0ZTogV2hlZWxTdGF0ZSA9IFdoZWVsU3RhdGUuU3RhbmQ7XHJcbiAgICBwcml2YXRlIF9taXhSb3RhdGlvbiA9IDA7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHByaXZhdGUgX3doZWVsQ29uZmlnOiBXaGVlbERhdGFbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfbWF4VGFyZ2V0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9pc1BsYXlFbmRTb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiDnu5PmnZ/lm57osIMgKi9cclxuICAgIGVuZENhbGwgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QW5nbGUoKTtcclxuICAgICAgICAvLyB0aGlzLmxpZ2h0Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlV2hlZWxDb25maWcod2hlZWxDb25maWc6IGFueSkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmdldFJ1bm5pbmcoKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVzZXRXaGVlbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLl93aGVlbENvbmZpZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd2hlZWxDb25maWcgPSBbXTtcclxuICAgICAgICBsZXQgd2hlZWxEYXRhOiBXaGVlbERhdGE7XHJcbiAgICAgICAgd2hlZWxDb25maWcuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgd2hlZWxEYXRhID0ge30gYXMgV2hlZWxEYXRhO1xyXG4gICAgICAgICAgICBpZiAodi52YWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB3aGVlbERhdGEudHlwZSA9IFdoZWVsVHlwZS5CZXRMdjtcclxuICAgICAgICAgICAgICAgIHdoZWVsRGF0YS5udW0gPSB2LnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2hlZWxEYXRhLnR5cGUgPSBXaGVlbFR5cGUuU3BpbjtcclxuICAgICAgICAgICAgICAgIHdoZWVsRGF0YS5udW0gPSBNYXRoLmFicyh2LnZhbHVlKSAvIDEwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl93aGVlbENvbmZpZy5wdXNoKHdoZWVsRGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5Wm9vbUluQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5pbml0V2hlZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlui9ruebmOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRXaGVlbCgpIHtcclxuICAgICAgICBsZXQgd2hlZWxDaGlsZHMgPSB0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5jaGlsZHJlbjtcclxuICAgICAgICBsZXQgbWF4QmV0bHYgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXSkgeyBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBUkVBX0NPVU5UX0xJU1RbdGhpcy5fY3VyV2hlZWxUeXBlXTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY2hpbGQgPSB3aGVlbENoaWxkc1tpXTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBsYWJlbCA9IGNjLmZpbmQoXCJsYWJlbFwiLCBjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fd2hlZWxDb25maWdbaV0udHlwZSA9PSBXaGVlbFR5cGUuQmV0THYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwieFwiICsgdGhpcy5fd2hlZWxDb25maWdbaV0ubnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl93aGVlbENvbmZpZ1tpXS5udW0gPiBtYXhCZXRsdikgeyAgICAgICAvL+aJvuWIsOWAjeeOh+acgOWkp+eahOebruagh+iKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhCZXRsdiA9IHRoaXMuX3doZWVsQ29uZmlnW2ldLm51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF4VGFyZ2V0Tm9kZSA9IHdoZWVsQ2hpbGRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fd2hlZWxDb25maWdbaV0udHlwZSA9PSBXaGVlbFR5cGUuU3Bpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJTcGluIFwiICsgdGhpcy5fd2hlZWxDb25maWdbaV0ubnVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXRBbmdsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW6L2s55uY5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdFByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgLy8g5peL6L2s6KeS5bqm6IyD5Zu0XHJcbiAgICAgICAgdGhpcy5fcmFuZ2UgPSAzNjA7XHJcbiAgICAgICAgLy8g5b2T5YmN5peL6L2s6YCf5bqmXHJcbiAgICAgICAgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgPSAwO1xyXG4gICAgICAgIC8vIOacgOWwj+Wxgui9rOebmOacieS4gOS4quWBh+eahOWbvueJh+i/mVxyXG4gICAgICAgIHRoaXMuX3RvdGFsUHJpemUgPSB0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fcmVzdWx0SWQgPSB0aGlzLl90b3RhbFByaXplICsgMSAtIHRoaXMuX3Jlc3VsdElkO1xyXG4gICAgICAgIC8vIOaXtumXtOmXtOmalFxyXG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gMC4wMjtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGVkID0gMzYwICogNjtcclxuICAgICAgICB0aGlzLmRlY2VsZXJhdGlvbiA9IC0zNjAgKiAyO1xyXG4gICAgICAgIHRoaXMubWF4UmFuZ2VTcGVlZCA9IDM2MCAqIDQ7XHJcbiAgICAgICAgdGhpcy5faXNQbGF5RW5kU291bmQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+a7muWKqFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBydW5HYW1lKGluZGV4OiBhbnksIGVuZENhbGwpIHtcclxuICAgICAgICB0aGlzLmVuZENhbGwgPSBlbmRDYWxsO1xyXG4gICAgICAgIC8vIHRoaXMubGlnaHROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuX2N1cldoZWVsVHlwZSA9IDE7XHJcbiAgICAgICAgdGhpcy5fcmVzdWx0SWQgPSBpbmRleDtcclxuICAgICAgICB0aGlzLl9sb3R0ZXJ5SWQgPSBpbmRleDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuS4reWllmlkID1cIiArIHRoaXMuX3Jlc3VsdElkKTtcclxuICAgICAgICB0aGlzLmluaXRQcm9wZXJ0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7k+adn+a7muWKqOmHjee9ruS9jee9rlxyXG4gICAgKi9cclxuICAgIHB1YmxpYyByZXNldFdoZWVsKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50Um90YXRpb25TcGVlZCA9IDA7IC8v5b2T5YmN6YCf5bqm6K6+572u5Li6IDByYWQvc1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFdoZWVsU3RhdGUuU3RhbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsZXnpLrlvZPliY3lsYLovaznm5jmu5rliqjnu5PmnpxcclxuICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1doZWVsRW5kKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50Um90YXRpb25TcGVlZCA9IDA7IC8v5b2T5YmN6YCf5bqm6K6+572u5Li6IDByYWQvc1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFdoZWVsU3RhdGUuU3RhbmQ7XHJcbiAgICAgICAgdGhpcy53aGVlbE5vZGVzW3RoaXMuX2N1cldoZWVsVHlwZV0uYW5nbGUgPSB0aGlzLl9sb3R0ZXJ5SWQgKiBBUkVBX0FOR0VMX0xJU1RbdGhpcy5fY3VyV2hlZWxUeXBlXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDmu5rliqjnu5PmnZ9cclxuICAgICAgICAvLyB0aGlzLmxpZ2h0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5kQ2FsbCAmJiB0aGlzLmVuZENhbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIua7muWKqOe7k+adn1wiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBydW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdldFJ1bm5pbmcoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50U3RhdGUgPSBXaGVlbFN0YXRlLkFjZWxlcmFyYTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVJvdGF0aW9uLCB0aGlzLl9pbnRlcnZhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLovaznm5jlt7Lnu4/lvIDlp4vovazliqguLi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0V2hlZWwoKTtcclxuICAgICAgICAvLyB0aGlzLmxpZ2h0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5kQ2FsbCAmJiB0aGlzLmVuZENhbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS7juacgOWkp+WKoOmAn+W6puWHj+mAn+WIsOWBnOatoueahOaAu+inkuW6plxyXG4gICAgICogICovIFxyXG4gICAgcHJpdmF0ZSBvblZpcnR1YWxDb21wdXRlKCkge1xyXG4gICAgICAgIHZhciB2aXJ0dWFsUm90YXRpb25BbmdsZSA9IDA7XHJcbiAgICAgICAgdmFyIHJvdGF0aW9uU3BlZWQgPSB0aGlzLm1heFJhbmdlU3BlZWQ7XHJcbiAgICAgICAgd2hpbGUgKHJvdGF0aW9uU3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHZpcnR1YWxSb3RhdGlvbkFuZ2xlICs9IHRoaXMuX2ludGVydmFsICogcm90YXRpb25TcGVlZDsgLy8g6I635Y+W5YeP6YCf5bqm5Yiw5YGc5q2i5pe25YCZ55qE5oC75peL6L2s6KeS5bqmXHJcbiAgICAgICAgICAgIHJvdGF0aW9uU3BlZWQgKz0gdGhpcy5faW50ZXJ2YWwgKiB0aGlzLmRlY2VsZXJhdGlvbjsgLy8g5q+P5bin5peL6L2s55qE6YCf5bqmXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2aXJ0dWFsUm90YXRpb25BbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW8gOWni+WHj+mAn+eahOaXtuacuiDop5LluqZcclxuICAgICAqIEBwYXJhbSB0YXJnZXRSb3RhdGlvbiDku47liJ3lp4vkvY3nva7vvIjliqDpgJ/luqbmiJbogIXlh4/pgJ/luqbpg73mmK8zNjDluqbmlbTnmoTmiYDku6Xnm7TmjqXku47nvJbovpHlmajph4znmoTliJ3lp4vkvY3nva7vvInml4vovazliLDnm67moIfmqKHlnZfkvY3nva7nmoTop5LluqZcclxuICAgICAqICovIFxyXG4gICAgcHJpdmF0ZSBvbkdldFZhbHVlKHRhcmdldFJvdGF0aW9uKSB7XHJcbiAgICAgICAgdmFyIHRlbXAgPSB0YXJnZXRSb3RhdGlvbiAtIHRoaXMub25WaXJ0dWFsQ29tcHV0ZSgpO1xyXG4gICAgICAgIGlmICh0ZW1wID4gMCkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGVtcCA+PSAzNjApIHtcclxuICAgICAgICAgICAgICAgIHRlbXAgLT0gdGhpcy5fcmFuZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aGlsZSAodGVtcCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRlbXAgKz0gdGhpcy5fcmFuZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovazliqjmo4DmtYtcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25BbmdsZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuinkuW6puajgOa1i+S4rSzlr7vmib7lkIjpgILlh4/pgJ/ml7bmnLouLi5cIilcclxuICAgICAgICAvLyDnm67moIfml4vovazop5LluqZcclxuICAgICAgICBsZXQgX3plcm9Sb3RhdGlvbiA9IHRoaXMuX3JhbmdlIC0gQVJFQV9BTkdFTF9MSVNUW3RoaXMuX2N1cldoZWVsVHlwZV0gKiAoMiArIHRoaXMuX2N1cldoZWVsVHlwZSk7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0Um90YXRpb24gPSBfemVyb1JvdGF0aW9uIC0gKEFSRUFfQ09VTlRfTElTVFt0aGlzLl9jdXJXaGVlbFR5cGVdIC0gdGhpcy5fcmVzdWx0SWQpICogQVJFQV9BTkdFTF9MSVNUW3RoaXMuX2N1cldoZWVsVHlwZV07XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0Um90YXRpb24gPSB0aGlzLl90YXJnZXRSb3RhdGlvbjtcclxuICAgICAgICB2YXIgdGVtcFJvdGF0aW9uID0gdGhpcy5vbkdldFZhbHVlKHRoaXMuX3RhcmdldFJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5hbmdsZSA9IC10ZW1wUm90YXRpb247XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gV2hlZWxTdGF0ZS5EZXNhY2VsZXJhcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOavj+S4gOW4p+Wbnuiwg1xyXG4gICAgICogQHBhcmFtIHsqfSAgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUm90YXRpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGUgY3VyU3RhdGU9IFwiICsgdGhpcy5fY3VycmVudFN0YXRlKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2N1cnJlbnRTdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaXi+i9rOWujOaIkOW8gOWni+WBnOatolxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50Um90YXRpb25TcGVlZCA+PSB0aGlzLm1heFJhbmdlU3BlZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgPSB0aGlzLm1heFJhbmdlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0aW9uQW5nbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmmK/liqDpgJ/luqbnmoTlkIzml7bkuZ/mmK/liJ3lp4vpgJ/luqZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgKz0gdGhpcy5hY2NlbGVyYXRlZCAqIHRoaXMuX2ludGVydmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRSb3RhdGlvblNwZWVkIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgPSAwOyAvL+W9k+WJjemAn+W6puiuvue9ruS4uiAwcmFkL3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gV2hlZWxTdGF0ZS5TdGFuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4UmFuZ2VTcGVlZCAvIHRoaXMuX2N1cnJlbnRSb3RhdGlvblNwZWVkID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXhSYW5nZVNwZWVkIC8gdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wb2ludFNwaW5lLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4UmFuZ2VTcGVlZCAvIHRoaXMuX2N1cnJlbnRSb3RhdGlvblNwZWVkID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucG9pbnRTcGluZS50aW1lU2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRSb3RhdGlvblNwZWVkIDw9IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5hbmdsZSAvIDM2MCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWl4Um90YXRpb24gPSAobW9kICogMzYwICsgdGhpcy5fdGFyZ2V0Um90YXRpb24pIC0gTWF0aC5hYnModGhpcy53aGVlbE5vZGVzW3RoaXMuX2N1cldoZWVsVHlwZV0uYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgKz0gdGhpcy5kZWNlbGVyYXRpb24gKiB0aGlzLl9pbnRlcnZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUVFRUVCB0aGlzLl9jdXJyZW50Um90YXRpb25TcGVlZCA9IFwiICsgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgKyBcIiByYXJvdGlvbiA9IFwiICsgdGhpcy53aGVlbE5vZGVzW3RoaXMuX2N1cldoZWVsVHlwZV0uYW5nbGUgKyBcIiB0YXJnZXRBbmdsZSA9XCIgKyB0aGlzLl90YXJnZXRSb3RhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MubG9nKFwi5b2T5YmN5peL6L2s6YCf5bqmIDogXCIsIHRoaXMuX2N1cnJlbnRSb3RhdGlvblNwZWVkKTtcclxuICAgICAgICB2YXIgdGVtcFJvdGF0aW9uU3BlZWQgPSB0aGlzLl9jdXJyZW50Um90YXRpb25TcGVlZCAqIHRoaXMuX2ludGVydmFsO1xyXG4gICAgICAgIC8vIGNjLmxvZyhcIlRUVFRUIOW9k+WJjei9rOebmOi9rOWKqOmAn+W6plwiICsgdGVtcFJvdGF0aW9uU3BlZWQgKyBcIsKwL1wiICsgdGhpcy5faW50ZXJ2YWwgKyBcInNcIik7XHJcbiAgICAgICAgdGhpcy53aGVlbE5vZGVzW3RoaXMuX2N1cldoZWVsVHlwZV0uYW5nbGUgLT0gdGVtcFJvdGF0aW9uU3BlZWQ7XHJcbiAgICAgICAgLy8gdGhpcy52aXJ0dWFsV2hlZWwuYW5nbGUgPSB0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5hbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluS4pOS4quaVsOmXtOeahOmaj+acuuWAvFxyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb20obWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbUluZGV4KGwpIHtcclxuICAgICAgICBpZiAobCA8PSAwKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovaznm5jmmK/lkKbmraPlnKjmu5rliqhcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UnVubmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFN0YXRlID4gV2hlZWxTdGF0ZS5TdGFuZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGFyZ2V0Tm9kZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy53aGVlbE5vZGVzW3RoaXMuX2N1cldoZWVsVHlwZV0uY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXRBbmdsZSgpIHtcclxuICAgICAgICB0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5hbmdsZSA9IDA7IC8vIOesrOS4gOS4qui9rOebmOWIneWni+S9jee9ruS4jeWQjFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/event/EventMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0344zMoipJG7vJVPYxiAp2', 'EventMgr');
// script/util/event/EventMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = require("./Event");
var EventMgr = /** @class */ (function () {
    function EventMgr() {
        this.eventMap = new Map();
    }
    Object.defineProperty(EventMgr, "Instance", {
        get: function () {
            if (this.instance == null) {
                this.instance = new EventMgr();
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    EventMgr.prototype.Register = function (eventId, callback, scope) {
        if (scope === void 0) { scope = null; }
        var event = new Event_1.default(eventId, callback, false, scope);
        this.setEvent(eventId, event);
    };
    EventMgr.prototype.Once = function (eventId, callback, scope) {
        if (scope === void 0) { scope = null; }
        var event = new Event_1.default(eventId, callback, true, scope);
        this.setEvent(eventId, event);
    };
    EventMgr.prototype.Off = function () {
        this.eventMap = new Map();
    };
    EventMgr.prototype.Emit = function (evId) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.eventMap.has(evId)) {
            return;
        }
        var evts = this.eventMap.get(evId);
        if (evts.length) {
            var newEvts = new Array();
            for (var i = 0; i < evts.length; i++) {
                var ev = evts[i];
                ev.Call.apply(ev, args);
                if (!ev.Once) {
                    newEvts.push(ev);
                }
            }
            this.eventMap.set(evId, newEvts);
        }
    };
    EventMgr.prototype.setEvent = function (eventId, event) {
        if (this.eventMap.has(eventId)) {
            var evts = this.eventMap.get(eventId);
            var finder = evts.findIndex(function (evt) { return evt.Equel(event); });
            if (finder == -1) {
                evts.push(event);
                this.eventMap.set(eventId, evts);
            }
            else {
                evts.splice(finder, 1);
                evts.push(event);
                this.eventMap.set(eventId, evts);
            }
        }
        else {
            var evts = new Array();
            evts.push(event);
            this.eventMap.set(eventId, evts);
        }
    };
    return EventMgr;
}());
exports.default = EventMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxldmVudFxcRXZlbnRNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpQ0FBNEI7QUFHNUI7SUFBQTtRQUNZLGFBQVEsR0FBK0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQTZEN0QsQ0FBQztJQTFERyxzQkFBa0Isb0JBQVE7YUFBMUI7WUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7YUFDbEM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFTSwyQkFBUSxHQUFmLFVBQWdCLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFlBQWlCO1FBQ25FLElBQUksS0FBSyxHQUFHLElBQUksZUFBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSx1QkFBSSxHQUFYLFVBQVksT0FBZ0IsRUFBRSxRQUFrQixFQUFFLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsWUFBaUI7UUFDL0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxlQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLHNCQUFHLEdBQVY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7SUFDN0IsQ0FBQztJQUVNLHVCQUFJLEdBQVgsVUFBWSxJQUFhO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7WUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsRUFBRSxDQUFDLElBQUksT0FBUCxFQUFFLEVBQVMsSUFBSSxFQUFFO2dCQUVqQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtvQkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNwQjthQUNKO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVPLDJCQUFRLEdBQWhCLFVBQWlCLE9BQWdCLEVBQUUsS0FBWTtRQUMzQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFDdkQsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDcEM7U0FDSjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQTtZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0E5REEsQUE4REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SWQgfSBmcm9tIFwiLi4vZGVmaW5lXCI7XHJcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50TWdyIHtcclxuICAgIHByaXZhdGUgZXZlbnRNYXA6IE1hcDxFdmVudElkLCBBcnJheTxFdmVudD4+ID0gbmV3IE1hcCgpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRXZlbnRNZ3I7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRXZlbnRNZ3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyKGV2ZW50SWQ6IEV2ZW50SWQsIGNhbGxiYWNrOiBGdW5jdGlvbiwgc2NvcGU6IGFueSA9IG51bGwpIHtcclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnRJZCwgY2FsbGJhY2ssIGZhbHNlLCBzY29wZSk7XHJcbiAgICAgICAgdGhpcy5zZXRFdmVudChldmVudElkLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE9uY2UoZXZlbnRJZDogRXZlbnRJZCwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBzY29wZTogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBFdmVudChldmVudElkLCBjYWxsYmFjaywgdHJ1ZSwgc2NvcGUpO1xyXG4gICAgICAgIHRoaXMuc2V0RXZlbnQoZXZlbnRJZCwgZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBPZmYoKXtcclxuICAgICAgICB0aGlzLmV2ZW50TWFwID0gbmV3IE1hcCgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEVtaXQoZXZJZDogRXZlbnRJZCwgLi4uYXJncykge1xyXG4gICAgICAgIGlmICghdGhpcy5ldmVudE1hcC5oYXMoZXZJZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZXZ0cyA9IHRoaXMuZXZlbnRNYXAuZ2V0KGV2SWQpO1xyXG4gICAgICAgIGlmIChldnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3RXZ0cyA9IG5ldyBBcnJheTxFdmVudD4oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IGV2dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBldiA9IGV2dHNbaV07XHJcbiAgICAgICAgICAgICAgICBldi5DYWxsKC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZXYuT25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0V2dHMucHVzaChldik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5zZXQoZXZJZCwgbmV3RXZ0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RXZlbnQoZXZlbnRJZDogRXZlbnRJZCwgZXZlbnQ6IEV2ZW50ICkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50TWFwLmhhcyhldmVudElkKSkge1xyXG4gICAgICAgICAgICBsZXQgZXZ0cyA9IHRoaXMuZXZlbnRNYXAuZ2V0KGV2ZW50SWQpO1xyXG4gICAgICAgICAgICBsZXQgZmluZGVyID0gZXZ0cy5maW5kSW5kZXgoKGV2dCkgPT4gZXZ0LkVxdWVsKGV2ZW50KSk7XHJcbiAgICAgICAgICAgIGlmIChmaW5kZXIgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGV2dHMucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFwLnNldChldmVudElkLCBldnRzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV2dHMuc3BsaWNlKGZpbmRlciwgMSk7XHJcbiAgICAgICAgICAgICAgICBldnRzLnB1c2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5zZXQoZXZlbnRJZCwgZXZ0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZXZ0cyA9IG5ldyBBcnJheSgpXHJcbiAgICAgICAgICAgIGV2dHMucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYXAuc2V0KGV2ZW50SWQsIGV2dHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/define.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52a92AfudxJM512zSmlG6LW', 'define');
// script/util/define.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WheelType = exports.WheelState = exports.EventId = exports.DirectionType = exports.ItemType = void 0;
/**扑克类型 */
var ItemType;
(function (ItemType) {
    ItemType[ItemType["Square"] = 0] = "Square";
    ItemType[ItemType["Plum"] = 1] = "Plum";
    ItemType[ItemType["Heart"] = 2] = "Heart";
    ItemType[ItemType["Spade"] = 3] = "Spade";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
/**方向 */
var DirectionType;
(function (DirectionType) {
    DirectionType[DirectionType["Top"] = 1] = "Top";
    DirectionType[DirectionType["Bottom"] = 2] = "Bottom";
    DirectionType[DirectionType["Left"] = 3] = "Left";
    DirectionType[DirectionType["Right"] = 4] = "Right";
})(DirectionType = exports.DirectionType || (exports.DirectionType = {}));
var EventId;
(function (EventId) {
    EventId[EventId["creatPorker"] = 0] = "creatPorker";
    EventId[EventId["RaningWheel"] = 1] = "RaningWheel";
    EventId[EventId["UpdataScord"] = 2] = "UpdataScord";
    EventId[EventId["RemberNum"] = 3] = "RemberNum";
    EventId[EventId["Result"] = 4] = "Result";
    EventId[EventId["adjust"] = 5] = "adjust";
})(EventId = exports.EventId || (exports.EventId = {}));
var WheelState;
(function (WheelState) {
    WheelState[WheelState["Stand"] = 0] = "Stand";
    WheelState[WheelState["Acelerara"] = 1] = "Acelerara";
    WheelState[WheelState["Desacelerar"] = 2] = "Desacelerar";
})(WheelState = exports.WheelState || (exports.WheelState = {}));
var WheelType;
(function (WheelType) {
    WheelType[WheelType["BetLv"] = 1] = "BetLv";
    WheelType[WheelType["Spin"] = 2] = "Spin";
})(WheelType = exports.WheelType || (exports.WheelType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxkZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVTtBQUNWLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNoQiwyQ0FBTSxDQUFBO0lBQ04sdUNBQUksQ0FBQTtJQUNKLHlDQUFLLENBQUE7SUFDTCx5Q0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBS25CO0FBRUQsUUFBUTtBQUNSLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQiwrQ0FBTyxDQUFBO0lBQ1AscURBQVUsQ0FBQTtJQUNWLGlEQUFRLENBQUE7SUFDUixtREFBUyxDQUFBO0FBQ2IsQ0FBQyxFQUxXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBS3hCO0FBRUQsSUFBWSxPQU9YO0FBUEQsV0FBWSxPQUFPO0lBQ2YsbURBQWUsQ0FBQTtJQUNmLG1EQUFXLENBQUE7SUFDWCxtREFBVyxDQUFBO0lBQ1gsK0NBQVMsQ0FBQTtJQUNULHlDQUFNLENBQUE7SUFDTix5Q0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQVBXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQU9sQjtBQUVELElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNsQiw2Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtJQUNiLHlEQUFlLENBQUE7QUFDbkIsQ0FBQyxFQUpXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBSXJCO0FBT0QsSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ2pCLDJDQUFTLENBQUE7SUFDVCx5Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKuaJkeWFi+exu+WeiyAqL1xyXG5leHBvcnQgZW51bSBJdGVtVHlwZXtcclxuICAgIFNxdWFyZSxcclxuICAgIFBsdW0sXHJcbiAgICBIZWFydCxcclxuICAgIFNwYWRlXHJcbn1cclxuXHJcbi8qKuaWueWQkSAqL1xyXG5leHBvcnQgZW51bSBEaXJlY3Rpb25UeXBlIHtcclxuICAgIFRvcCA9IDEsXHJcbiAgICBCb3R0b20gPSAyLFxyXG4gICAgTGVmdCA9IDMsXHJcbiAgICBSaWdodCA9IDQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEV2ZW50SWQge1xyXG4gICAgY3JlYXRQb3JrZXIgPSAwLFxyXG4gICAgUmFuaW5nV2hlZWwsXHJcbiAgICBVcGRhdGFTY29yZCxcclxuICAgIFJlbWJlck51bSxcclxuICAgIFJlc3VsdCxcclxuICAgIGFkanVzdFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBXaGVlbFN0YXRlIHtcclxuICAgIFN0YW5kID0gMCxcclxuICAgIEFjZWxlcmFyYSA9IDEsXHJcbiAgICBEZXNhY2VsZXJhciA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2hlZWxEYXRhIHtcclxuICAgIHR5cGU6IFdoZWVsVHlwZSxcclxuICAgIG51bTogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFdoZWVsVHlwZSB7XHJcbiAgICBCZXRMdiA9IDEsXHJcbiAgICBTcGluID0gMixcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/JumpStr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79f41Y4MNRPKK6EgrncSreh', 'JumpStr');
// script/JumpStr.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.str = "";
        _this.fontSize = 0;
        _this.aniTime = 0;
        // @property({type: cc.Color, tooltip: "描边颜色"})
        // oulineColor: cc.Color = cc.color(255,255,255);
        _this.oulineWidth = 1;
        _this.isOulin = true;
        _this.oulineColor = cc.color(255, 255, 255);
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        var Layout = this.node.addComponent(cc.Layout);
        Layout.type = cc.Layout.Type.HORIZONTAL;
        Layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        for (var i = 0; i < this.str.length; i++) {
            var str = this.str[i];
            var labelNode = new cc.Node();
            var label = labelNode.addComponent(cc.Label);
            if (this.isOulin) {
                var labelOutLine = labelNode.addComponent(cc.LabelOutline);
                labelOutLine.color = this.oulineColor;
                labelOutLine.width = this.oulineWidth;
            }
            label.lineHeight = this.fontSize;
            label.string = str;
            label.fontSize = this.fontSize;
            this.node.addChild(labelNode);
        }
        this.playStrJump();
        this.schedule(function () {
            _this.playStrJump();
        }, this.aniTime * this.str.length / 2 + 0.2);
    };
    NewClass.prototype.playStrJump = function () {
        var _this = this;
        var jumpTime = this.aniTime / 2;
        var strIndex = 0;
        var jumpStr = function (labelNode) {
            cc.tween(labelNode)
                .sequence(cc.tween().to(jumpTime, { y: _this.fontSize / 2 }), cc.tween().to(jumpTime / 4 * 3, { y: -_this.fontSize / 3 }), cc.tween().to(jumpTime / 4, { y: 0 }))
                // .repeatForever()
                .start();
            if (strIndex < _this.node.children.length - 1) { // 未到最后一个字符
                strIndex++;
                _this.scheduleOnce(function () {
                    jumpStr(_this.node.children[strIndex]);
                }, jumpTime / 2);
            }
        };
        jumpStr(this.node.children[strIndex]);
    };
    __decorate([
        property({ tooltip: "需要跳动的字符串" })
    ], NewClass.prototype, "str", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "字符大小" })
    ], NewClass.prototype, "fontSize", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "单个字符跳动时间" })
    ], NewClass.prototype, "aniTime", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "描边宽度" })
    ], NewClass.prototype, "oulineWidth", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxKdW1wU3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUZDO1FBOUVHLFNBQUcsR0FBVyxFQUFFLENBQUM7UUFHakIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLCtDQUErQztRQUMvQyxpREFBaUQ7UUFHakQsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFZixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDOztRQTZEckQsaUJBQWlCO0lBQ3JCLENBQUM7SUExREcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQUEsaUJBeUJDO1FBeEJHLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUVuRCxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUM7Z0JBQ1osSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzNELFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTtnQkFDckMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFBO2FBQ3hDO1lBQ0QsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ25CLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxPQUFPLEdBQUcsVUFBQyxTQUFrQjtZQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztpQkFDZCxRQUFRLENBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUM3QyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUNsRCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FDcEM7Z0JBQ0QsbUJBQW1CO2lCQUNsQixLQUFLLEVBQUUsQ0FBQztZQUdiLElBQUcsUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXO2dCQUNwRCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDLEVBQUUsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQyxDQUFBO1FBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFMUMsQ0FBQztJQTNFRDtRQURDLFFBQVEsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQzt5Q0FDZjtJQUdqQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQzs4Q0FDdkI7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUM7NkNBQzVCO0lBTXBCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDO2lEQUNwQjtJQWZQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRjVCO0lBQUQsZUFBQztDQWpGRCxBQWlGQyxDQWpGcUMsRUFBRSxDQUFDLFNBQVMsR0FpRmpEO2tCQWpGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dG9vbHRpcDogXCLpnIDopoHot7PliqjnmoTlrZfnrKbkuLJcIn0pXG4gICAgc3RyOiBTdHJpbmcgPSBcIlwiO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCLlrZfnrKblpKflsI9cIn0pXG4gICAgZm9udFNpemU6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIuWNleS4quWtl+espui3s+WKqOaXtumXtFwifSlcbiAgICBhbmlUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gQHByb3BlcnR5KHt0eXBlOiBjYy5Db2xvciwgdG9vbHRpcDogXCLmj4/ovrnpopzoibJcIn0pXG4gICAgLy8gb3VsaW5lQ29sb3I6IGNjLkNvbG9yID0gY2MuY29sb3IoMjU1LDI1NSwyNTUpO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCLmj4/ovrnlrr3luqZcIn0pXG4gICAgb3VsaW5lV2lkdGg6IG51bWJlciA9IDE7XG5cbiAgICBwcml2YXRlICBpc091bGluOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgb3VsaW5lQ29sb3I6Y2MuQ29sb3IgPSBjYy5jb2xvcigyNTUsMjU1LDI1NSk7XG5cblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IExheW91dCA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuTGF5b3V0KTtcblxuICAgICAgICBMYXlvdXQudHlwZSA9IGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw7XG4gICAgICAgIExheW91dC5yZXNpemVNb2RlID0gY2MuTGF5b3V0LlJlc2l6ZU1vZGUuQ09OVEFJTkVSO1xuXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8dGhpcy5zdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdHIgPSB0aGlzLnN0cltpXTtcbiAgICAgICAgICAgIGxldCBsYWJlbE5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbGFiZWxOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZih0aGlzLmlzT3VsaW4pe1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbE91dExpbmUgPSBsYWJlbE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XG4gICAgICAgICAgICAgICAgbGFiZWxPdXRMaW5lLmNvbG9yID0gdGhpcy5vdWxpbmVDb2xvclxuICAgICAgICAgICAgICAgIGxhYmVsT3V0TGluZS53aWR0aCA9IHRoaXMub3VsaW5lV2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gc3RyO1xuICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGxhYmVsTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYXlTdHJKdW1wKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5U3RySnVtcCgpO1xuICAgICAgICB9LCB0aGlzLmFuaVRpbWUqdGhpcy5zdHIubGVuZ3RoIC8gMiArIDAuMik7XG4gICAgfVxuXG4gICAgcGxheVN0ckp1bXAoKSB7XG4gICAgICAgIGxldCBqdW1wVGltZSA9IHRoaXMuYW5pVGltZS8yO1xuICAgICAgICBsZXQgc3RySW5kZXggPSAwO1xuICAgICAgICBsZXQganVtcFN0ciA9IChsYWJlbE5vZGU6IGNjLk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGxhYmVsTm9kZSlcbiAgICAgICAgICAgICAgICAuc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oanVtcFRpbWUsIHt5OiB0aGlzLmZvbnRTaXplLzJ9KSxcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50byhqdW1wVGltZS80KjMsIHt5OiAtdGhpcy5mb250U2l6ZS8zfSksXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oanVtcFRpbWUvNCwge3k6IDB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAvLyAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKHN0ckluZGV4IDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aC0xKSB7IC8vIOacquWIsOacgOWQjuS4gOS4quWtl+esplxuICAgICAgICAgICAgICAgIHN0ckluZGV4Kys7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBqdW1wU3RyKHRoaXMubm9kZS5jaGlsZHJlbltzdHJJbmRleF0pO1xuICAgICAgICAgICAgICAgIH0sIGp1bXBUaW1lLzIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAganVtcFN0cih0aGlzLm5vZGUuY2hpbGRyZW5bc3RySW5kZXhdKTtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/HallManger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aebc05iEkpIa6XeWy1zw3Ot', 'HallManger');
// script/HallManger.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("./DataManager");
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioResList = [];
        _this.tipNode = null;
        _this.soundBtn = null;
        _this.userInfo = null;
        _this.contentLayout = null;
        _this.phbNode = null;
        _this.PromoPage = null;
        _this.chartsPage = null;
        return _this;
        // update(dt) {
        // }
    }
    NewClass.prototype.start = function () {
        this.upadtaUserInfo();
        this.updateUserNum();
        this.listeBtnAni();
        this.creatRandUserInfo();
    };
    NewClass.prototype.onEnable = function () {
        var _this = this;
        DataManager_1.default.adGoogleInterstitialAdHandle();
        this.scheduleOnce(function () {
            _this.schedule(function () {
                if (!DataManager_1.default.IsCheckAdjust_status)
                    return;
                if (DataManager_1.default.Adjust_status !== '' && DataManager_1.default.Adjust_status.toLowerCase() !== 'organic') {
                    // 字符串不为空且不为 "organic" 或 "Organic"，执行你的操作
                    DataManager_1.default.adAnalyseAjustHandle();
                    DataManager_1.default.IsCheckAdjust_status = false;
                    _this.unscheduleAllCallbacks();
                }
            }, 1.5);
        }, 3);
    };
    /**
     * 游戏内按钮绑定事件
     */
    NewClass.prototype.btnEvent = function (event) {
        var name = event.target.name;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        switch (name) {
            case 'btnStartGame':
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene('game');
                break;
            case 'icon1':
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene('game');
                break;
            case 'backBtn':
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene('a_startGame');
                break;
            case 'tipBtn':
                this.openTipNode();
                break;
            case 'closeTipBtn':
                this.hideTipNode();
                break;
            case 'soundBtn':
                this.openOrCloseSound();
                break;
            case 'shareBtn':
                this.shareFn();
                break;
            case 'adBtn':
                DataManager_1.default.adGoogleRewardedVideoAdHandle();
                break;
            case 'closePromoBtn':
                this.closePromo();
                break;
            case 'closeChartsBtn':
                this.closeChart();
                break;
        }
    };
    /**绑定按钮动画 */
    NewClass.prototype.listeBtnAni = function () {
        this.contentLayout.children.forEach(function (e) {
            e.on(cc.Node.EventType.TOUCH_END, function () {
                cc.tween(e).to(0.2, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
            });
        });
    };
    /**打开提示 */
    NewClass.prototype.openTipNode = function () {
        this.tipNode.getChildByName('rule').scale = 0.8;
        this.tipNode.active = true;
        cc.tween(this.tipNode.getChildByName('rule')).to(0.2, { scale: 1 }).start();
    };
    /**
     * 关闭提示展示
     */
    NewClass.prototype.hideTipNode = function () {
        var _this = this;
        cc.tween(this.tipNode.getChildByName('rule'))
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.tipNode.active = false;
            _this.tipNode.getChildByName('rule').scale = 1;
        })
            .start();
    };
    /**关闭兑换奖励框 */
    NewClass.prototype.closePromo = function () {
        this.PromoPage.active = false;
        var rule = this.PromoPage.getChildByName('rule');
        rule.getChildByName('EditBox').getComponent(cc.EditBox).string = '';
    };
    NewClass.prototype.closeChart = function () {
        this.chartsPage.active = false;
    };
    /**打开兑换奖励框 */
    NewClass.prototype.openPromo = function () {
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        this.PromoPage.getChildByName('rule').scale = 1.2;
        this.PromoPage.active = true;
        cc.tween(this.PromoPage.getChildByName('rule')).to(0.2, { scale: 1 }).start();
    };
    /**打开兑换奖励框 */
    NewClass.prototype.openCharts = function () {
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        this.chartsPage.getChildByName('rule').scale = 1.2;
        this.chartsPage.active = true;
        cc.tween(this.chartsPage.getChildByName('rule')).to(0.2, { scale: 1 }).start();
    };
    /**
     * 开启或关闭音效
     */
    NewClass.prototype.openOrCloseSound = function () {
        if (DataManager_1.default.curSoundIsClose) {
            this.soundBtn.children[0].color = cc.color(170, 170, 170, 255);
            this.soundBtn.children[1].active = true;
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.soundBtn.children[0].color = cc.color(255, 255, 255, 255);
            this.soundBtn.children[1].active = false;
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        DataManager_1.default.curSoundIsClose = !DataManager_1.default.curSoundIsClose;
    };
    /**更新用户信息 */
    NewClass.prototype.upadtaUserInfo = function () {
        this.userInfo.getChildByName('userID').getComponent(cc.Label).string = 'ID:' + DataManager_1.default.userId;
        this.userInfo.getChildByName('scoreLaberl').getComponent(cc.Label).string = '' + DataManager_1.default.curWinNum;
    };
    /**更新用户房间人数 */
    NewClass.prototype.updateUserNum = function () {
        var array = util_1.default.getRandArray(100, 5000, this.contentLayout.children.length);
        this.contentLayout.children.forEach(function (e, index) {
            var node_num = e.getChildByName('num');
            var label_num = node_num === null || node_num === void 0 ? void 0 : node_num.getComponent(cc.Label);
            if (!label_num)
                return;
            label_num.string = array[index] + '';
        });
    };
    /**用户排行榜 */
    NewClass.prototype.creatRandUserInfo = function () {
        var newUserId = '';
        for (var j = 1; j <= 5; j++) {
            for (var i = 0; i < DataManager_1.default.userId.length; i++) {
                newUserId += util_1.default.getRandom(1, 9);
            }
            var userId = this.phbNode.children[j].getChildByName('userID');
            userId.getComponent(cc.Label).string = 'ID:' + newUserId;
            newUserId = '';
        }
    };
    /**分享事件 */
    NewClass.prototype.shareFn = function () { };
    __decorate([
        property({ type: [cc.AudioClip], tooltip: '音效数组' })
    ], NewClass.prototype, "audioResList", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏提示页面' })
    ], NewClass.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '音效按钮节点' })
    ], NewClass.prototype, "soundBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '用户信息' })
    ], NewClass.prototype, "userInfo", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: 'icon节点' })
    ], NewClass.prototype, "contentLayout", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '排行榜节点' })
    ], NewClass.prototype, "phbNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '兑换奖励框' })
    ], NewClass.prototype, "PromoPage", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '排行榜页面' })
    ], NewClass.prototype, "chartsPage", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxIYWxsTWFuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDZDQUF3QztBQUd4QyxvQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyTUM7UUF6TUcsa0JBQVksR0FBbUIsRUFBRSxDQUFDO1FBR2xDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFZLElBQUksQ0FBQzs7UUFpTDNCLGVBQWU7UUFFZixJQUFJO0lBQ1IsQ0FBQztJQWxMRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNTLDJCQUFRLEdBQWxCO1FBQUEsaUJBYUM7UUFaRyxxQkFBVyxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLHFCQUFXLENBQUMsb0JBQW9CO29CQUFFLE9BQU87Z0JBQzlDLElBQUkscUJBQVcsQ0FB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QUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztrREFDbEI7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7NkNBQ3ZCO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDOzhDQUN0QjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs4Q0FDcEI7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7bURBQ2pCO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzZDQUN0QjtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzsrQ0FDcEI7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0RBQ25CO0lBdkJWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyTTVCO0lBQUQsZUFBQztDQTNNRCxBQTJNQyxDQTNNcUMsRUFBRSxDQUFDLFNBQVMsR0EyTWpEO2tCQTNNb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XG5pbXBvcnQgeyBFdmVudElkIH0gZnJvbSAnLi91dGlsL2RlZmluZSc7XG5pbXBvcnQgRXZlbnRNZ3IgZnJvbSAnLi91dGlsL2V2ZW50L0V2ZW50TWdyJztcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbC91dGlsJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQXVkaW9DbGlwXSwgdG9vbHRpcDogJ+mfs+aViOaVsOe7hCcgfSlcbiAgICBhdWRpb1Jlc0xpc3Q6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP5o+Q56S66aG16Z2iJyB9KVxuICAgIHRpcE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+mfs+aViOaMiemSruiKgueCuScgfSlcbiAgICBzb3VuZEJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn55So5oi35L+h5oGvJyB9KVxuICAgIHVzZXJJbmZvOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICdpY29u6IqC54K5JyB9KVxuICAgIGNvbnRlbnRMYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+aOkuihjOamnOiKgueCuScgfSlcbiAgICBwaGJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICflhZHmjaLlpZblirHmoYYnIH0pXG4gICAgUHJvbW9QYWdlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfmjpLooYzmppzpobXpnaInIH0pXG4gICAgY2hhcnRzUGFnZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy51cGFkdGFVc2VySW5mbygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJOdW0oKTtcbiAgICAgICAgdGhpcy5saXN0ZUJ0bkFuaSgpO1xuICAgICAgICB0aGlzLmNyZWF0UmFuZFVzZXJJbmZvKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgRGF0YU1hbmFnZXIuYWRHb29nbGVJbnRlcnN0aXRpYWxBZEhhbmRsZSgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIURhdGFNYW5hZ2VyLklzQ2hlY2tBZGp1c3Rfc3RhdHVzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLkFkanVzdF9zdGF0dXMgIT09ICcnICYmIERhdGFNYW5hZ2VyLkFkanVzdF9zdGF0dXMudG9Mb3dlckNhc2UoKSAhPT0gJ29yZ2FuaWMnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWtl+espuS4suS4jeS4uuepuuS4lOS4jeS4uiBcIm9yZ2FuaWNcIiDmiJYgXCJPcmdhbmljXCLvvIzmiafooYzkvaDnmoTmk43kvZxcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuYWRBbmFseXNlQWp1c3RIYW5kbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuSXNDaGVja0FkanVzdF9zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMS41KTtcbiAgICAgICAgfSwgMyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP5YaF5oyJ6ZKu57uR5a6a5LqL5Lu2XG4gICAgICovXG4gICAgYnRuRXZlbnQoZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2J0blN0YXJ0R2FtZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzFdO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ljb24xJzpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMV07XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYmFja0J0bic6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2Ffc3RhcnRHYW1lJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aXBCdG4nOlxuICAgICAgICAgICAgICAgIHRoaXMub3BlblRpcE5vZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3NlVGlwQnRuJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVUaXBOb2RlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzb3VuZEJ0bic6XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuT3JDbG9zZVNvdW5kKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzaGFyZUJ0bic6XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUZuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZEJ0bic6XG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuYWRHb29nbGVSZXdhcmRlZFZpZGVvQWRIYW5kbGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3NlUHJvbW9CdG4nOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQcm9tbygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xvc2VDaGFydHNCdG4nOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VDaGFydCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq57uR5a6a5oyJ6ZKu5Yqo55S7ICovXG4gICAgbGlzdGVCdG5BbmkoKSB7XG4gICAgICAgIHRoaXMuY29udGVudExheW91dC5jaGlsZHJlbi5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGUpLnRvKDAuMiwgeyBzY2FsZTogMS4xIH0pLnRvKDAuMSwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKuaJk+W8gOaPkOekuiAqL1xuICAgIG9wZW5UaXBOb2RlKCkge1xuICAgICAgICB0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3J1bGUnKS5zY2FsZSA9IDAuODtcbiAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpKS50bygwLjIsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhbPpl63mj5DnpLrlsZXnpLpcbiAgICAgKi9cbiAgICBoaWRlVGlwTm9kZSgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKCdydWxlJykpXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAwLjUgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKCdydWxlJykuc2NhbGUgPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIC8qKuWFs+mXreWFkeaNouWlluWKseahhiAqL1xuICAgIGNsb3NlUHJvbW8oKSB7XG4gICAgICAgIHRoaXMuUHJvbW9QYWdlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgcnVsZSA9IHRoaXMuUHJvbW9QYWdlLmdldENoaWxkQnlOYW1lKCdydWxlJyk7XG4gICAgICAgIHJ1bGUuZ2V0Q2hpbGRCeU5hbWUoJ0VkaXRCb3gnKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nID0gJyc7XG4gICAgfVxuXG4gICAgY2xvc2VDaGFydCgpIHtcbiAgICAgICAgdGhpcy5jaGFydHNQYWdlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKuaJk+W8gOWFkeaNouWlluWKseahhiAqL1xuICAgIG9wZW5Qcm9tbygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgIHRoaXMuUHJvbW9QYWdlLmdldENoaWxkQnlOYW1lKCdydWxlJykuc2NhbGUgPSAxLjI7XG4gICAgICAgIHRoaXMuUHJvbW9QYWdlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuUHJvbW9QYWdlLmdldENoaWxkQnlOYW1lKCdydWxlJykpLnRvKDAuMiwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIC8qKuaJk+W8gOWFkeaNouWlluWKseahhiAqL1xuICAgIG9wZW5DaGFydHMoKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICB0aGlzLmNoYXJ0c1BhZ2UuZ2V0Q2hpbGRCeU5hbWUoJ3J1bGUnKS5zY2FsZSA9IDEuMjtcbiAgICAgICAgdGhpcy5jaGFydHNQYWdlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhcnRzUGFnZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpKS50bygwLjIsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvIDlkK/miJblhbPpl63pn7PmlYhcbiAgICAgKi9cbiAgICBvcGVuT3JDbG9zZVNvdW5kKCkge1xuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuY3VyU291bmRJc0Nsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuY29sb3IoMTcwLCAxNzAsIDE3MCwgMjU1KTtcbiAgICAgICAgICAgIHRoaXMuc291bmRCdG4uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgIHRoaXMuc291bmRCdG4uY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDE7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSA9ICFEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2U7XG4gICAgfVxuXG4gICAgLyoq5pu05paw55So5oi35L+h5oGvICovXG4gICAgdXBhZHRhVXNlckluZm8oKSB7XG4gICAgICAgIHRoaXMudXNlckluZm8uZ2V0Q2hpbGRCeU5hbWUoJ3VzZXJJRCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ0lEOicgKyBEYXRhTWFuYWdlci51c2VySWQ7XG4gICAgICAgIHRoaXMudXNlckluZm8uZ2V0Q2hpbGRCeU5hbWUoJ3Njb3JlTGFiZXJsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnJyArIERhdGFNYW5hZ2VyLmN1cldpbk51bTtcbiAgICB9XG4gICAgLyoq5pu05paw55So5oi35oi/6Ze05Lq65pWwICovXG4gICAgdXBkYXRlVXNlck51bSgpIHtcbiAgICAgICAgbGV0IGFycmF5ID0gdXRpbC5nZXRSYW5kQXJyYXkoMTAwLCA1MDAwLCB0aGlzLmNvbnRlbnRMYXlvdXQuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5jb250ZW50TGF5b3V0LmNoaWxkcmVuLmZvckVhY2goKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZV9udW06IGNjLk5vZGUgPSBlLmdldENoaWxkQnlOYW1lKCdudW0nKTtcbiAgICAgICAgICAgIGxldCBsYWJlbF9udW0gPSBub2RlX251bT8uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICghbGFiZWxfbnVtKSByZXR1cm47XG4gICAgICAgICAgICBsYWJlbF9udW0uc3RyaW5nID0gYXJyYXlbaW5kZXhdICsgJyc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKirnlKjmiLfmjpLooYzmppwgKi9cbiAgICBjcmVhdFJhbmRVc2VySW5mbygpIHtcbiAgICAgICAgbGV0IG5ld1VzZXJJZDogc3RyaW5nID0gJyc7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDU7IGorKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBEYXRhTWFuYWdlci51c2VySWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXdVc2VySWQgKz0gdXRpbC5nZXRSYW5kb20oMSwgOSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdXNlcklkID0gdGhpcy5waGJOb2RlLmNoaWxkcmVuW2pdLmdldENoaWxkQnlOYW1lKCd1c2VySUQnKTtcbiAgICAgICAgICAgIHVzZXJJZC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICdJRDonICsgbmV3VXNlcklkO1xuICAgICAgICAgICAgbmV3VXNlcklkID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirliIbkuqvkuovku7YgKi9cbiAgICBzaGFyZUZuKCkge31cblxuICAgIC8vIHVwZGF0ZShkdCkge1xuXG4gICAgLy8gfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ItemNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1dde00z82lJAqrLsgVLephC', 'ItemNode');
// script/ItemNode.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemNode = /** @class */ (function (_super) {
    __extends(ItemNode, _super);
    function ItemNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imgSp = null;
        _this.imgSpArr = [];
        //球类
        _this.itemId = 0;
        _this.movingTime = 0;
        _this.itemIndex = -1;
        return _this;
        // update (dt) {}
    }
    ItemNode.prototype.start = function () {
    };
    /**初始化 */
    ItemNode.prototype.init = function (num, i) {
        this.itemId = num;
        this.itemIndex = i;
        this.imgSp.spriteFrame = this.imgSpArr[num];
        // this.moving(fishZone,startNode)
    };
    ItemNode.prototype.moving = function (fishZone, startNode) {
        var _this = this;
        var time = util_1.default.getRandom(1, 3);
        var pos = this.generateRandomPoint(fishZone);
        var dir = 1;
        if (pos.x > this.node.x) {
            dir = -1;
        }
        else {
            dir = 1;
        }
        this.node.scaleX = dir;
        cc.tween(this.node)
            .to(time, { position: pos })
            .call(function () {
            _this.movingTime += 1;
            if (_this.movingTime < 3) {
                _this.moving(fishZone, startNode);
            }
            else {
                _this.GoingDestoy(startNode);
            }
        })
            .start();
    };
    ItemNode.prototype.GoingDestoy = function (ovingNode) {
        var _this = this;
        cc.tween(this.node)
            .to(1, { position: ovingNode.position })
            .call(function () {
            _this.node.destroy();
        })
            .start();
    };
    ItemNode.prototype.generateRandomPoint = function (node) {
        var halfWidth = node.width / 2;
        var halfHeight = node.height / 2;
        var x = util_1.default.getRandom(node.position.x - halfWidth, node.position.x + halfWidth + 1);
        var y = util_1.default.getRandom(node.position.y - halfHeight, node.position.y + halfHeight + 1);
        return cc.v3(x, y, 0);
    };
    __decorate([
        property(cc.Sprite)
    ], ItemNode.prototype, "imgSp", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ItemNode.prototype, "imgSpArr", void 0);
    ItemNode = __decorate([
        ccclass
    ], ItemNode);
    return ItemNode;
}(cc.Component));
exports.default = ItemNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxJdGVtTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRixvQ0FBK0I7QUFFekIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxRUM7UUFsRUcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQW9CLEVBQUUsQ0FBQTtRQUU5QixJQUFJO1FBQ0csWUFBTSxHQUFVLENBQUMsQ0FBQTtRQUVoQixnQkFBVSxHQUFVLENBQUMsQ0FBQTtRQUV0QixlQUFTLEdBQVUsQ0FBQyxDQUFDLENBQUE7O1FBdUQ1QixpQkFBaUI7SUFDckIsQ0FBQztJQXJERyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELFNBQVM7SUFDRix1QkFBSSxHQUFYLFVBQVksR0FBVyxFQUFDLENBQVE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQyxrQ0FBa0M7SUFDdEMsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxRQUFnQixFQUFDLFNBQWlCO1FBQXpDLGlCQXFCQztRQXBCRyxJQUFJLElBQUksR0FBRyxjQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtRQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDNUMsSUFBSSxHQUFHLEdBQVUsQ0FBQyxDQUFBO1FBQ2xCLElBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQztZQUNuQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDWDthQUFJO1lBQ0QsR0FBRyxHQUFHLENBQUMsQ0FBQTtTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO1FBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLENBQUM7YUFDdkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLFVBQVUsSUFBRyxDQUFDLENBQUE7WUFDbkIsSUFBRyxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBQztnQkFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUMsU0FBUyxDQUFDLENBQUE7YUFDbEM7aUJBQUk7Z0JBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUM5QjtRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFDRCw4QkFBVyxHQUFYLFVBQVksU0FBaUI7UUFBN0IsaUJBT0M7UUFORyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsUUFBUSxFQUFDLENBQUM7YUFDbkMsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN2QixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQTtJQUNaLENBQUM7SUFFTSxzQ0FBbUIsR0FBMUIsVUFBMkIsSUFBWTtRQUNuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQTtRQUM1QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsR0FBRyxjQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDbkYsSUFBSSxDQUFDLEdBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3JGLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUE3REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs4Q0FDRztJQU5iLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxRTVCO0lBQUQsZUFBQztDQXJFRCxBQXFFQyxDQXJFcUMsRUFBRSxDQUFDLFNBQVMsR0FxRWpEO2tCQXJFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFdmVudElkLCBJdGVtVHlwZSB9IGZyb20gXCIuL3V0aWwvZGVmaW5lXCI7XHJcbmltcG9ydCBFdmVudE1nciBmcm9tIFwiLi91dGlsL2V2ZW50L0V2ZW50TWdyXCI7XHJcbmltcG9ydCB1dGlsIGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtTm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGltZ1NwOmNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBpbWdTcEFycjpjYy5TcHJpdGVGcmFtZVtdID0gW11cclxuXHJcbiAgICAvL+eQg+exu1xyXG4gICAgcHVibGljIGl0ZW1JZDpudW1iZXIgPSAwXHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZpbmdUaW1lOm51bWJlciA9IDBcclxuXHJcbiAgICBwdWJsaWMgaXRlbUluZGV4Om51bWJlciA9IC0xXHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuWIneWni+WMliAqL1xyXG4gICAgcHVibGljIGluaXQobnVtOiBudW1iZXIsaTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXRlbUlkID0gbnVtO1xyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gaVxyXG4gICAgICAgIHRoaXMuaW1nU3Auc3ByaXRlRnJhbWUgPSB0aGlzLmltZ1NwQXJyW251bV1cclxuICAgICAgICAvLyB0aGlzLm1vdmluZyhmaXNoWm9uZSxzdGFydE5vZGUpXHJcbiAgICB9XHJcbiAgICBtb3ZpbmcoZmlzaFpvbmU6Y2MuTm9kZSxzdGFydE5vZGU6Y2MuTm9kZSl7XHJcbiAgICAgICAgbGV0IHRpbWUgPSB1dGlsLmdldFJhbmRvbSgxLDMpXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Qb2ludChmaXNoWm9uZSlcclxuICAgICAgICBsZXQgZGlyOm51bWJlciA9IDFcclxuICAgICAgICBpZihwb3MueCA+IHRoaXMubm9kZS54KXtcclxuICAgICAgICAgICAgZGlyID0gLTFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlyID0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gZGlyXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8odGltZSx7cG9zaXRpb246cG9zfSlcclxuICAgICAgICAgICAgLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVGltZSArPTFcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubW92aW5nVGltZSA8IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nKGZpc2hab25lLHN0YXJ0Tm9kZSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR29pbmdEZXN0b3koc3RhcnROb2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgR29pbmdEZXN0b3kob3ZpbmdOb2RlOmNjLk5vZGUpe1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAudG8oMSx7cG9zaXRpb246b3ZpbmdOb2RlLnBvc2l0aW9ufSlcclxuICAgICAgICAuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbVBvaW50KG5vZGU6Y2MuTm9kZSl7XHJcbiAgICAgICAgbGV0IGhhbGZXaWR0aCA9IG5vZGUud2lkdGgvMiBcclxuICAgICAgICBsZXQgaGFsZkhlaWdodCA9IG5vZGUuaGVpZ2h0LzJcclxuICAgICAgICBsZXQgeCA9IHV0aWwuZ2V0UmFuZG9tKG5vZGUucG9zaXRpb24ueCAtIGhhbGZXaWR0aCxub2RlLnBvc2l0aW9uLnggKyBoYWxmV2lkdGggKyAxKVxyXG4gICAgICAgIGxldCB5ID0gdXRpbC5nZXRSYW5kb20obm9kZS5wb3NpdGlvbi55IC0gaGFsZkhlaWdodCxub2RlLnBvc2l0aW9uLnkgKyBoYWxmSGVpZ2h0ICsgMSlcclxuICAgICAgICByZXR1cm4gY2MudjMoeCx5LDApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/loaderManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '228155LraxIVph/1ddSNR8t', 'loaderManager');
// script/util/loaderManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var loaderManager = /** @class */ (function () {
    function loaderManager() {
        /**
         * 已加载好资源
        */
        this.res = {};
        /**
         * ab包名
        */
        this.abBundleName = [
            "prefab",
        ];
    }
    /**
     * 获取资源
    */
    loaderManager.prototype.getRes = function (key, targetBundleNmae, type) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (key == "" || typeof key != "string") {
                            console.warn("非法KEY值!");
                        }
                        res = this.res[key];
                        if (!!res) return [3 /*break*/, 2];
                        console.warn("\u4F7F\u7528\u8D44\u6E90" + key + "\u672A\u52A0\u8F7D-\u73B0\u641C\u7D22\u8D44\u6E90\u52A0\u8F7D\u4E2D");
                        return [4 /*yield*/, this.loadRes(key, targetBundleNmae, type)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(res);
                            })];
                    case 2: return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 加载资源
    */
    loaderManager.prototype.loadRes = function (fileName, targetBundleNmae, type) {
        if (type === void 0) { type = cc.SpriteFrame; }
        return __awaiter(this, void 0, void 0, function () {
            var res, loadBundle, _i, _a, bundleName;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        res = null;
                        loadBundle = function (bundleName) {
                            return new Promise(function (resolve, reject) {
                                console.log("当前加载包名：", bundleName);
                                cc.assetManager.loadBundle(bundleName, function (err, ab) {
                                    if (err) {
                                        console.warn("\u5305\u540D" + bundleName + "\u52A0\u8F7D\u5931\u8D25");
                                        resolve();
                                        return;
                                    }
                                    var loadFileName = fileName;
                                    if (type == cc.SpriteFrame && cc.ENGINE_VERSION[0] == "3") { // 要加载纹理需要获取图片下的spiteFrame
                                        loadFileName += "/spriteFrame";
                                    }
                                    ab.load(loadFileName, type, function (err, assets) {
                                        if (err) {
                                            console.warn("\u5305\u540D" + bundleName + "\u76EE\u5F55\u4E0B\u6587\u4EF6" + fileName + "\u52A0\u8F7D\u5931\u8D25");
                                            resolve();
                                            return;
                                        }
                                        _this.res[fileName] = assets;
                                        console.log("\u52A0\u8F7D\u6210\u529F\u6587\u4EF6: " + fileName + " \u6210\u529F\u6240\u5728\u5305\u540D: " + bundleName);
                                        resolve();
                                        res = assets;
                                    });
                                    // 释放ab包, 不会释放从ab包里面加载好的资源;
                                    // assetManager.removeBundle(ab);
                                });
                            });
                        };
                        if (!targetBundleNmae) return [3 /*break*/, 2];
                        return [4 /*yield*/, loadBundle(targetBundleNmae)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        _i = 0, _a = this.abBundleName;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        bundleName = _a[_i];
                        if (res)
                            return [3 /*break*/, 6];
                        return [4 /*yield*/, loadBundle(bundleName)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, new Promise(function (resolve, reject) {
                            resolve(res);
                        })];
                }
            });
        });
    };
    loaderManager.instance = new loaderManager();
    return loaderManager;
}());
exports.default = loaderManager.instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxsb2FkZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUdJOztVQUVFO1FBQ00sUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUVqQjs7VUFFRTtRQUNNLGlCQUFZLEdBQUc7WUFDbkIsUUFBUTtTQUNYLENBQUE7SUEyRUwsQ0FBQztJQXpFRzs7TUFFRTtJQUNLLDhCQUFNLEdBQVosVUFBYSxHQUFHLEVBQUUsZ0JBQWlCLEVBQUUsSUFBSzs7Ozs7O3dCQUN2QyxJQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksT0FBTyxHQUFHLElBQUksUUFBUSxFQUFFOzRCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lCQUMzQjt3QkFFRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs2QkFFckIsQ0FBQyxHQUFHLEVBQUosd0JBQUk7d0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBTyxHQUFHLHdFQUFjLENBQUMsQ0FBQzt3QkFDakMscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEVBQUE7O3dCQUFyRCxHQUFHLEdBQUcsU0FBK0MsQ0FBQzt3QkFDdEQsc0JBQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTtnQ0FDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNqQixDQUFDLENBQUMsRUFBQTs0QkFHTixzQkFBTyxHQUFHLEVBQUM7Ozs7S0FDZDtJQUVEOztNQUVFO0lBQ1csK0JBQU8sR0FBcEIsVUFBcUIsUUFBUSxFQUFFLGdCQUFpQixFQUFFLElBQXFCO1FBQXJCLHFCQUFBLEVBQUEsT0FBTyxFQUFFLENBQUMsV0FBVzs7Ozs7Ozt3QkFDL0QsR0FBRyxHQUFHLElBQUksQ0FBQzt3QkFDWCxVQUFVLEdBQUcsVUFBQyxVQUFVOzRCQUN4QixPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0NBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dDQUNuQyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUMsVUFBQyxHQUFHLEVBQUUsRUFBMEI7b0NBQ2xFLElBQUcsR0FBRyxFQUFFO3dDQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQUssVUFBVSw2QkFBTSxDQUFDLENBQUM7d0NBQ3BDLE9BQU8sRUFBRSxDQUFDO3dDQUNWLE9BQU87cUNBQ1Y7b0NBRUQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDO29DQUM1QixJQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsMEJBQTBCO3dDQUNsRixZQUFZLElBQUksY0FBYyxDQUFBO3FDQUNqQztvQ0FFRCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTt3Q0FDckMsSUFBRyxHQUFHLEVBQUU7NENBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBSyxVQUFVLHNDQUFRLFFBQVEsNkJBQU0sQ0FBQyxDQUFDOzRDQUNwRCxPQUFPLEVBQUUsQ0FBQzs0Q0FDVixPQUFPO3lDQUNWO3dDQUNELEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO3dDQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUFXLFFBQVEsK0NBQVksVUFBWSxDQUFDLENBQUM7d0NBQ3pELE9BQU8sRUFBRSxDQUFDO3dDQUVWLEdBQUcsR0FBRyxNQUFNLENBQUM7b0NBQ2pCLENBQUMsQ0FBQyxDQUFBO29DQUVGLDJCQUEyQjtvQ0FDM0IsaUNBQWlDO2dDQUNyQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQTt3QkFDTixDQUFDLENBQUE7NkJBQ0UsZ0JBQWdCLEVBQWhCLHdCQUFnQjt3QkFDZixxQkFBTSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUM7Ozs4QkFFSSxFQUFqQixLQUFBLElBQUksQ0FBQyxZQUFZOzs7NkJBQWpCLENBQUEsY0FBaUIsQ0FBQTt3QkFBL0IsVUFBVTt3QkFDZCxJQUFHLEdBQUc7NEJBQUUsd0JBQU07d0JBQ2QscUJBQU0sVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBNUIsU0FBNEIsQ0FBQzs7O3dCQUZYLElBQWlCLENBQUE7OzRCQU0zQyxzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNOzRCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pCLENBQUMsQ0FBQyxFQUFDOzs7O0tBQ047SUFyRnNCLHNCQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQXVGMUQsb0JBQUM7Q0F4RkQsQUF3RkMsSUFBQTtBQUVELGtCQUFlLGFBQWEsQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNsYXNzIGxvYWRlck1hbmFnZXJ7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlID0gbmV3IGxvYWRlck1hbmFnZXIoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW3suWKoOi9veWlvei1hOa6kFxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgcmVzID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhYuWMheWQjVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgYWJCdW5kbGVOYW1lID0gW1xyXG4gICAgICAgIFwicHJlZmFiXCIsXHJcbiAgICBdXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5botYTmupBcclxuICAgICovXHJcbiAgICAgYXN5bmMgZ2V0UmVzKGtleSwgdGFyZ2V0QnVuZGxlTm1hZT8sIHR5cGU/KSB7XHJcbiAgICAgICAgaWYoa2V5ID09IFwiXCIgfHwgdHlwZW9mIGtleSAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIumdnuazlUtFWeWAvCFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5yZXNba2V5XTtcclxuXHJcbiAgICAgICAgaWYoIXJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYOS9v+eUqOi1hOa6kCR7a2V5feacquWKoOi9vS3njrDmkJzntKLotYTmupDliqDovb3kuK1gKTtcclxuICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5sb2FkUmVzKGtleSwgdGFyZ2V0QnVuZGxlTm1hZSwgdHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGxvYWRSZXMoZmlsZU5hbWUsIHRhcmdldEJ1bmRsZU5tYWU/LCB0eXBlID0gY2MuU3ByaXRlRnJhbWUpIHtcclxuICAgICAgICBsZXQgcmVzID0gbnVsbDtcclxuICAgICAgICBsZXQgbG9hZEJ1bmRsZSA9IChidW5kbGVOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeWKoOi9veWMheWQje+8mlwiLCBidW5kbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKGJ1bmRsZU5hbWUsKGVyciwgYWI6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYOWMheWQjSR7YnVuZGxlTmFtZX3liqDovb3lpLHotKVgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9hZEZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PSBjYy5TcHJpdGVGcmFtZSAmJiBjYy5FTkdJTkVfVkVSU0lPTlswXSA9PSBcIjNcIikgeyAvLyDopoHliqDovb3nurnnkIbpnIDopoHojrflj5blm77niYfkuIvnmoRzcGl0ZUZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRGaWxlTmFtZSArPSBcIi9zcHJpdGVGcmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhYi5sb2FkKGxvYWRGaWxlTmFtZSAsIHR5cGUsIChlcnIsIGFzc2V0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg5YyF5ZCNJHtidW5kbGVOYW1lfeebruW9leS4i+aWh+S7tiR7ZmlsZU5hbWV95Yqg6L295aSx6LSlYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNbZmlsZU5hbWVdID0gYXNzZXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5Yqg6L295oiQ5Yqf5paH5Lu2OiAke2ZpbGVOYW1lfSDmiJDlip/miYDlnKjljIXlkI06ICR7YnVuZGxlTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IGFzc2V0cztcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmHiuaUvmFi5YyFLCDkuI3kvJrph4rmlL7ku45hYuWMhemHjOmdouWKoOi9veWlveeahOi1hOa6kDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhc3NldE1hbmFnZXIucmVtb3ZlQnVuZGxlKGFiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0YXJnZXRCdW5kbGVObWFlKSB7IC8vIOiLpeS8oOWFpeWMheWQjeWImeS9v+eUqOWItuWumuWMheWQje+8jOS4jeS8oOWFpeWMheWQjeWImemBjeWOhuaJgOaciWFi5YyF5a+75om+5a+55bqU5ZCN5a2X6LWE5rqQXHJcbiAgICAgICAgICAgIGF3YWl0IGxvYWRCdW5kbGUodGFyZ2V0QnVuZGxlTm1hZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBidW5kbGVOYW1lIG9mIHRoaXMuYWJCdW5kbGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbG9hZEJ1bmRsZShidW5kbGVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZGVyTWFuYWdlci5pbnN0YW5jZTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/StartGameLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '186fdrcFDVArIKKXQH6Uufc', 'StartGameLayer');
// script/StartGameLayer.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("./DataManager");
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var startGameLayer = /** @class */ (function (_super) {
    __extends(startGameLayer, _super);
    function startGameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioResList = [];
        _this.checkBtn = null;
        _this.page = null;
        _this.lodingPage = null;
        _this.isPolicy = false;
        return _this;
    }
    startGameLayer.prototype.start = function () {
        var _this = this;
        if (!DataManager_1.default.curSoundIsClose) {
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        this.checkBtn.getChildByName('title').on(cc.Node.EventType.TOUCH_END, function () {
            _this.page.active = true;
            _this.node.getComponent(cc.AudioSource).clip = _this.audioResList[0];
            _this.node.getComponent(cc.AudioSource).play();
        });
        /**生成用户ID */
        if (DataManager_1.default.userId == '10086') {
            var newUserId = '';
            for (var i = 0; i < DataManager_1.default.userId.length; i++) {
                newUserId += util_1.default.getRandom(0, 9);
            }
            DataManager_1.default.userId = newUserId;
        }
        this.lodingPage.getChildByName('pg').getComponent(cc.ProgressBar).progress = 0;
    };
    startGameLayer.prototype.onEnable = function () {
        this.autoIntoGame();
    };
    startGameLayer.prototype.autoIntoGame = function () {
        var _this = this;
        this.scheduleOnce(function () {
            if (_this.lodingPage.active)
                return;
            _this.isPolicy = true;
            _this.switchScene();
        }, 5);
    };
    startGameLayer.prototype.switchScene = function () {
        if (this.isPolicy) {
            this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
            this.node.getComponent(cc.AudioSource).play();
            this.lodingPage.active = true;
            this.startLoding();
        }
        else {
            this.node.stopAllActions();
            this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
            this.node.getComponent(cc.AudioSource).play();
            cc.tween(this.checkBtn)
                .to(0.1, { position: cc.v3(this.checkBtn.position.x, this.checkBtn.position.y + 5, 1) })
                .to(0.1, { position: cc.v3(this.checkBtn.position.x, this.checkBtn.position.y - 5, 1) })
                .start();
        }
    };
    /**开启加载页面 */
    startGameLayer.prototype.startLoding = function () {
        var _this = this;
        var pg = this.lodingPage.getChildByName('pg');
        var speed = 0.02;
        this.schedule(function () {
            pg.getComponent(cc.ProgressBar).progress += speed;
            if (pg.getComponent(cc.ProgressBar).progress >= 1) {
                _this.unscheduleAllCallbacks();
                cc.director.loadScene('hall');
            }
        }, speed);
    };
    startGameLayer.prototype.onChange = function () {
        var border = this.checkBtn.getChildByName('border');
        border.children[0].active = !border.children[0].active;
        this.isPolicy = !this.isPolicy;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
    };
    startGameLayer.prototype.closePage = function () {
        this.page.active = false;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
    };
    startGameLayer.prototype.onDestroy = function () {
        this.checkBtn.getChildByName('title').off(cc.Node.EventType.TOUCH_END);
        this.checkBtn.getChildByName('border').off(cc.Node.EventType.TOUCH_END);
    };
    __decorate([
        property({ type: [cc.AudioClip] })
    ], startGameLayer.prototype, "audioResList", void 0);
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "checkBtn", void 0);
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "page", void 0);
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "lodingPage", void 0);
    startGameLayer = __decorate([
        ccclass
    ], startGameLayer);
    return startGameLayer;
}(cc.Component));
exports.default = startGameLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTdGFydEdhbWVMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFHeEMsb0NBQStCO0FBRXpCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBZ0dDO1FBOUZHLGtCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUdsQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFbkIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUFtRnRDLENBQUM7SUFqRkcsOEJBQUssR0FBTDtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLENBQUMscUJBQVcsQ0FBQyxlQUFlLEVBQUU7WUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxD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O0lBQUQscUJBQUM7Q0FoR0QsQUFnR0MsQ0FoRzJDLEVBQUUsQ0FBQyxTQUFTLEdBZ0d2RDtrQkFoR29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmltcG9ydCB7IEV2ZW50SWQgfSBmcm9tICcuL3V0aWwvZGVmaW5lJztcclxuaW1wb3J0IEV2ZW50TWdyIGZyb20gJy4vdXRpbC9ldmVudC9FdmVudE1ncic7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbC91dGlsJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdGFydEdhbWVMYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQXVkaW9DbGlwXSB9KVxyXG4gICAgYXVkaW9SZXNMaXN0OiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hlY2tCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGFnZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2RpbmdQYWdlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzUG9saWN5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2UpIHtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoJ3RpdGxlJykub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvKirnlJ/miJDnlKjmiLdJRCAqL1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci51c2VySWQgPT0gJzEwMDg2Jykge1xyXG4gICAgICAgICAgICBsZXQgbmV3VXNlcklkOiBzdHJpbmcgPSAnJztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBEYXRhTWFuYWdlci51c2VySWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld1VzZXJJZCArPSB1dGlsLmdldFJhbmRvbSgwLCA5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci51c2VySWQgPSBuZXdVc2VySWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZGluZ1BhZ2UuZ2V0Q2hpbGRCeU5hbWUoJ3BnJykuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcyA9IDA7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hdXRvSW50b0dhbWUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXV0b0ludG9HYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9kaW5nUGFnZS5hY3RpdmUpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5pc1BvbGljeSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoU2NlbmUoKTtcclxuICAgICAgICB9LCA1KTtcclxuICAgIH1cclxuICAgIHN3aXRjaFNjZW5lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUG9saWN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFsyXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZGluZ1BhZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydExvZGluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaGVja0J0bilcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMuY2hlY2tCdG4ucG9zaXRpb24ueCwgdGhpcy5jaGVja0J0bi5wb3NpdGlvbi55ICsgNSwgMSkgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMuY2hlY2tCdG4ucG9zaXRpb24ueCwgdGhpcy5jaGVja0J0bi5wb3NpdGlvbi55IC0gNSwgMSkgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKuW8gOWQr+WKoOi9vemhtemdoiAqL1xyXG4gICAgc3RhcnRMb2RpbmcoKSB7XHJcbiAgICAgICAgbGV0IHBnID0gdGhpcy5sb2RpbmdQYWdlLmdldENoaWxkQnlOYW1lKCdwZycpO1xyXG4gICAgICAgIGxldCBzcGVlZCA9IDAuMDI7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHBnLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmIChwZy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdoYWxsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBzcGVlZCk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZSgpIHtcclxuICAgICAgICBsZXQgYm9yZGVyID0gdGhpcy5jaGVja0J0bi5nZXRDaGlsZEJ5TmFtZSgnYm9yZGVyJyk7XHJcbiAgICAgICAgYm9yZGVyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9ICFib3JkZXIuY2hpbGRyZW5bMF0uYWN0aXZlO1xyXG4gICAgICAgIHRoaXMuaXNQb2xpY3kgPSAhdGhpcy5pc1BvbGljeTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlUGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoJ3RpdGxlJykub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0J0bi5nZXRDaGlsZEJ5TmFtZSgnYm9yZGVyJykub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ee53zg89FOcYf4i7SNaR6G', 'util');
// script/util/util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = /** @class */ (function () {
    function util() {
        var _this = this;
        /**
         * 深拷贝
        */
        this.copyObj = function (obj) {
            if (obj === void 0) { obj = {}; }
            var newobj = null;
            //判断是否需要继续进行递归
            if (typeof (obj) == 'object' && obj !== null) {
                newobj = obj instanceof Array ? [] : {}; //进行下一层递归克隆
                for (var i in obj) {
                    newobj[i] = _this.copyObj(obj[i]);
                } //如果不是对象直接赋值
            }
            else {
                newobj = obj;
            }
            ;
            return newobj;
        };
    }
    /** 获取两个数间的随机值(包括min max) */
    util.prototype.getRandom = function (min, max) {
        if (min == -1 || max == -1)
            return;
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    /**随机生成数组 */
    util.prototype.getRandArray = function (min, max, length) {
        var NumberArray = [];
        for (var i = 0; i < length; i++) {
            NumberArray.push(this.getRandom(min, max));
        }
        return NumberArray;
    };
    /**
     * 随机获取数组中指定数量元素
     * @param list 提供数据的数组
     * @param itemNum 获取元素数量(当需要元素不重复时此值大于数组长度会打乱返回整个数组)
     * @param isRepetition 返回元素是否允许重复
    */
    util.prototype.getRandomListItme = function (list, itemNum, isRepetition) {
        var _this = this;
        if (isRepetition === void 0) { isRepetition = false; }
        var copyList = this.copyObj(list);
        var randomList = [];
        list.splice;
        if (isRepetition) {
            for (var i = 0; i < itemNum; i++) {
                randomList.push(copyList[this.getRandom(0, copyList.length - 1)]);
            }
        }
        else {
            var getItem_1 = function () {
                if (copyList.length == 0) {
                    return;
                }
                var item = copyList.splice(_this.getRandom(0, copyList.length - 1), 1)[0];
                randomList.push(item);
                if (--itemNum > 0) {
                    getItem_1();
                }
            };
            getItem_1();
        }
        return randomList;
    };
    /**
    * 网格裁切纹理
   */
    util.prototype.gridCutSpriteFrame = function (sf, rowNum, colNum) {
        var sp = sf.getTexture();
        var picWidth = sp.width / colNum;
        var picHeight = sp.height / rowNum;
        var sfList = [];
        for (var i = 0; i < rowNum; i++) {
            sfList.push([]);
            for (var j = 0; j < colNum; j++) {
                var cutPic = new cc.SpriteFrame(sp);
                cutPic.setRect(new cc.Rect(j * picWidth, i * picHeight, picWidth, picHeight));
                sfList[i].push(cutPic);
            }
        }
        return sfList;
    };
    util.instance = new util();
    return util;
}());
exports.default = util.instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFx1dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUFBLGlCQXlGQztRQXZFRzs7VUFFRTtRQUNGLFlBQU8sR0FBRyxVQUFDLEdBQVE7WUFBUixvQkFBQSxFQUFBLFFBQVE7WUFDZixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbEIsY0FBYztZQUNkLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUMxQyxNQUFNLEdBQUcsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBZ0IsV0FBVztnQkFDbkUsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7b0JBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ25DLENBQWdCLFlBQVk7YUFDaEM7aUJBQUs7Z0JBQ0YsTUFBTSxHQUFHLEdBQUcsQ0FBQTthQUNmO1lBQUEsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQTtJQXVETCxDQUFDO0lBdEZHLDRCQUE0QjtJQUNyQix3QkFBUyxHQUFoQixVQUFpQixHQUFHLEVBQUUsR0FBRztRQUNyQixJQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUEsWUFBWTtJQUNaLDJCQUFZLEdBQVosVUFBYSxHQUFVLEVBQUMsR0FBVSxFQUFDLE1B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QztDQXpGRCxBQXlGQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIHV0aWx7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZSA9IG5ldyB1dGlsKCk7XG5cbiAgICAvKiog6I635Y+W5Lik5Liq5pWw6Ze055qE6ZqP5py65YC8KOWMheaLrG1pbiBtYXgpICovXG4gICAgcHVibGljIGdldFJhbmRvbShtaW4sIG1heCkge1xuICAgICAgICBpZihtaW4gPT0gLTEgfHwgbWF4ID09IC0xKSByZXR1cm47XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgIH1cblxuICAgICAvKirpmo/mnLrnlJ/miJDmlbDnu4QgKi9cbiAgICAgZ2V0UmFuZEFycmF5KG1pbjpudW1iZXIsbWF4Om51bWJlcixsZW5ndGg6bnVtYmVyKTpBcnJheTxudW1iZXI+e1xuICAgICAgICBsZXQgTnVtYmVyQXJyYXk6QXJyYXk8bnVtYmVyPiA9IFtdXG4gICAgICAgIGZvcihsZXQgaT0wO2k8bGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBOdW1iZXJBcnJheS5wdXNoKHRoaXMuZ2V0UmFuZG9tKG1pbixtYXgpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOdW1iZXJBcnJheVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3seaLt+i0nVxuICAgICovXG4gICAgY29weU9iaiA9IChvYmogPSB7fSkgPT4geyAgICAgICAgICAgIC8v5Y+Y6YeP5YWI572u56m6XG4gICAgICAgIGxldCBuZXdvYmogPSBudWxsOyAgXG5cbiAgICAgICAgLy/liKTmlq3mmK/lkKbpnIDopoHnu6fnu63ov5vooYzpgJLlvZJcbiAgICAgICAgaWYgKHR5cGVvZiAob2JqKSA9PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5ld29iaiA9IG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fTsgICAgICAgICAgICAgICAgLy/ov5vooYzkuIvkuIDlsYLpgJLlvZLlhYvpmoZcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgbmV3b2JqW2ldID0gdGhpcy5jb3B5T2JqKG9ialtpXSlcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgLy/lpoLmnpzkuI3mmK/lr7nosaHnm7TmjqXotYvlgLxcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgbmV3b2JqID0gb2JqXG4gICAgICAgIH07ICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdvYmo7ICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmaj+acuuiOt+WPluaVsOe7hOS4reaMh+WumuaVsOmHj+WFg+e0oFxuICAgICAqIEBwYXJhbSBsaXN0IOaPkOS+m+aVsOaNrueahOaVsOe7hFxuICAgICAqIEBwYXJhbSBpdGVtTnVtIOiOt+WPluWFg+e0oOaVsOmHjyjlvZPpnIDopoHlhYPntKDkuI3ph43lpI3ml7bmraTlgLzlpKfkuo7mlbDnu4Tplb/luqbkvJrmiZPkubHov5Tlm57mlbTkuKrmlbDnu4QpXG4gICAgICogQHBhcmFtIGlzUmVwZXRpdGlvbiDov5Tlm57lhYPntKDmmK/lkKblhYHorrjph43lpI1cbiAgICAqL1xuICAgIHB1YmxpYyBnZXRSYW5kb21MaXN0SXRtZShsaXN0OiBBcnJheTxhbnk+LCBpdGVtTnVtOiBudW1iZXIsIGlzUmVwZXRpdGlvbjogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBjb3B5TGlzdCA9IHRoaXMuY29weU9iaihsaXN0KTtcbiAgICAgICAgbGV0IHJhbmRvbUxpc3QgPSBbXTtcblxuICAgICAgICBsaXN0LnNwbGljZVxuXG4gICAgICAgIGlmKGlzUmVwZXRpdGlvbikge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaXRlbU51bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmFuZG9tTGlzdC5wdXNoKGNvcHlMaXN0W3RoaXMuZ2V0UmFuZG9tKDAsIGNvcHlMaXN0Lmxlbmd0aC0xKV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZ2V0SXRlbSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihjb3B5TGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY29weUxpc3Quc3BsaWNlKHRoaXMuZ2V0UmFuZG9tKDAsIGNvcHlMaXN0Lmxlbmd0aC0xKSwgMSlbMF07XG5cbiAgICAgICAgICAgICAgICByYW5kb21MaXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgaWYoLS1pdGVtTnVtID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRJdGVtKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRJdGVtKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmFuZG9tTGlzdDtcbiAgICB9XG4gICAgIC8qKlxuwqAgwqAgwqAqIOe9keagvOijgeWIh+e6ueeQhlxuwqAgwqAgKi9cbiAgICBncmlkQ3V0U3ByaXRlRnJhbWUoc2Y6IGNjLlNwcml0ZUZyYW1lLCByb3dOdW06IG51bWJlciwgY29sTnVtOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHNwID0gc2YuZ2V0VGV4dHVyZSgpO1xuICAgICAgICBsZXQgcGljV2lkdGggPSBzcC53aWR0aC9jb2xOdW07XG4gICAgICAgIGxldCBwaWNIZWlnaHQgPSBzcC5oZWlnaHQvcm93TnVtO1xuICAgICAgICBsZXQgc2ZMaXN0OiBBcnJheTxBcnJheTxjYy5TcHJpdGVGcmFtZT4+ID0gW107XG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJvd051bTsgaSsrKSB7XG4gICAgICAgICAgICBzZkxpc3QucHVzaChbXSk7XG4gICAgICAgICAgICBmb3IobGV0IGo6IG51bWJlciA9IDA7IGogPCBjb2xOdW07IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXRQaWMgPSBuZXcgY2MuU3ByaXRlRnJhbWUoc3ApO1xuICAgICAgICAgICAgICAgIGN1dFBpYy5zZXRSZWN0KG5ldyBjYy5SZWN0KGogKiBwaWNXaWR0aCwgaSpwaWNIZWlnaHQsIHBpY1dpZHRoLCBwaWNIZWlnaHQpKTtcbiAgICAgICAgICAgICAgICBzZkxpc3RbaV0ucHVzaChjdXRQaWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZkxpc3Q7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCB1dGlsLmluc3RhbmNlOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/NativeJSBridgeIns.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b45f3VzBtO8pBsHbWEVS0t', 'NativeJSBridgeIns');
// script/util/NativeJSBridgeIns.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("../DataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NativeJSBridgeIns = /** @class */ (function () {
    function NativeJSBridgeIns() {
    }
    NativeJSBridgeIns_1 = NativeJSBridgeIns;
    NativeJSBridgeIns.getInatance = function () {
        if (this._instance == null)
            this._instance = new NativeJSBridgeIns_1();
        return this._instance;
    };
    NativeJSBridgeIns.prototype.ajustStatue = function (_refCount) {
        console.log('TS Callback: ' + _refCount);
        if (_refCount !== '' && _refCount.toLowerCase() !== 'organic') {
            // 字符串不为空且不为 "organic" 或 "Organic"，执行你的操作
            DataManager_1.default.Adjust_status = _refCount;
            // EventMgr.Instance.Emit(EventId.adjust, _refCount);
        }
    };
    var NativeJSBridgeIns_1;
    NativeJSBridgeIns._instance = null;
    /////facebook
    NativeJSBridgeIns.CallBackKey = 'nativeCallback';
    NativeJSBridgeIns._prevErr = '';
    NativeJSBridgeIns._hasInited = false;
    NativeJSBridgeIns.appActiveStatue = false;
    NativeJSBridgeIns = NativeJSBridgeIns_1 = __decorate([
        ccclass
    ], NativeJSBridgeIns);
    return NativeJSBridgeIns;
}());
//第一种方法 window.NativeJSBridgeIns.googleLoginRes
window['NativeJSBridgeIns'] = NativeJSBridgeIns.getInatance();
//第二种方法
// window.callAndroid = CallAndroid.getInatance();
// declare interface Window{
//     callAndroid:CallAndroid;
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxOYXRpdmVKU0JyaWRnZUlucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7O0FBRWxGLDhDQUF5QztBQUtuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBd0JBLENBQUM7MEJBeEJLLGlCQUFpQjtJQVdMLDZCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQWlCLEVBQUUsQ0FBQztRQUNyRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNNLHVDQUFXLEdBQWxCLFVBQW1CLFNBQWlCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBRXpDLElBQUksU0FBUyxLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQzNELHlDQUF5QztZQUN6QyxxQkFBVyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDdEMscURBQXFEO1NBQ3hEO0lBQ0wsQ0FBQzs7SUF0QmMsMkJBQVMsR0FBc0IsSUFBSSxDQUFDO0lBQ25ELGFBQWE7SUFDRSw2QkFBVyxHQUFXLGdCQUFnQixDQUFDO0lBR3ZDLDBCQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2QsNEJBQVUsR0FBRyxLQUFLLENBQUM7SUFFbkIsaUNBQWUsR0FBWSxLQUFLLENBQUM7SUFUOUMsaUJBQWlCO1FBRHRCLE9BQU87T0FDRixpQkFBaUIsQ0F3QnRCO0lBQUQsd0JBQUM7Q0F4QkQsQUF3QkMsSUFBQTtBQUNELCtDQUErQztBQUMvQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM5RCxPQUFPO0FBQ1Asa0RBQWtEO0FBQ2xELDRCQUE0QjtBQUM1QiwrQkFBK0I7QUFDL0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi4vRGF0YU1hbmFnZXInO1xuaW1wb3J0IHsgRXZlbnRJZCB9IGZyb20gJy4vZGVmaW5lJztcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50L0V2ZW50JztcbmltcG9ydCBFdmVudE1nciBmcm9tICcuL2V2ZW50L0V2ZW50TWdyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmNsYXNzIE5hdGl2ZUpTQnJpZGdlSW5zIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IE5hdGl2ZUpTQnJpZGdlSW5zID0gbnVsbDtcbiAgICAvLy8vL2ZhY2Vib29rXG4gICAgcHJpdmF0ZSBzdGF0aWMgQ2FsbEJhY2tLZXk6IHN0cmluZyA9ICduYXRpdmVDYWxsYmFjayc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2NhbGxCYWNrUHJlZml4OiBzdHJpbmc7IC8v5Zue6LCD6ZuG5ZCI5a2X56ym5YmN57yAXG5cbiAgICBwcml2YXRlIHN0YXRpYyBfcHJldkVyciA9ICcnO1xuICAgIHByaXZhdGUgc3RhdGljIF9oYXNJbml0ZWQgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc3RhdGljIGFwcEFjdGl2ZVN0YXR1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbmF0YW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHRoaXMuX2luc3RhbmNlID0gbmV3IE5hdGl2ZUpTQnJpZGdlSW5zKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG4gICAgcHVibGljIGFqdXN0U3RhdHVlKF9yZWZDb3VudDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUUyBDYWxsYmFjazogJyArIF9yZWZDb3VudCk7XG5cbiAgICAgICAgaWYgKF9yZWZDb3VudCAhPT0gJycgJiYgX3JlZkNvdW50LnRvTG93ZXJDYXNlKCkgIT09ICdvcmdhbmljJykge1xuICAgICAgICAgICAgLy8g5a2X56ym5Liy5LiN5Li656m65LiU5LiN5Li6IFwib3JnYW5pY1wiIOaIliBcIk9yZ2FuaWNcIu+8jOaJp+ihjOS9oOeahOaTjeS9nFxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuQWRqdXN0X3N0YXR1cyA9IF9yZWZDb3VudDtcbiAgICAgICAgICAgIC8vIEV2ZW50TWdyLkluc3RhbmNlLkVtaXQoRXZlbnRJZC5hZGp1c3QsIF9yZWZDb3VudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vL+esrOS4gOenjeaWueazlSB3aW5kb3cuTmF0aXZlSlNCcmlkZ2VJbnMuZ29vZ2xlTG9naW5SZXNcbndpbmRvd1snTmF0aXZlSlNCcmlkZ2VJbnMnXSA9IE5hdGl2ZUpTQnJpZGdlSW5zLmdldEluYXRhbmNlKCk7XG4vL+esrOS6jOenjeaWueazlVxuLy8gd2luZG93LmNhbGxBbmRyb2lkID0gQ2FsbEFuZHJvaWQuZ2V0SW5hdGFuY2UoKTtcbi8vIGRlY2xhcmUgaW50ZXJmYWNlIFdpbmRvd3tcbi8vICAgICBjYWxsQW5kcm9pZDpDYWxsQW5kcm9pZDtcbi8vIH1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/event/Event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fa26nTHQ9H/63+pumdJtCd', 'Event');
// script/util/event/Event.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = /** @class */ (function () {
    function Event(eventId, callbak, once, scope) {
        if (scope === void 0) { scope = null; }
        this.EventId = eventId;
        this.Callback = callbak;
        this.Scope = scope;
        if (scope != null || scope != undefined) {
            this.RealCallBakc = callbak.bind(scope);
        }
        else {
            this.RealCallBakc = this.Callback;
        }
        this.Once = once;
    }
    Object.defineProperty(Event.prototype, "Call", {
        get: function () {
            return this.RealCallBakc;
        },
        enumerable: false,
        configurable: true
    });
    Event.prototype.Equel = function (other) {
        return this.EventId == other.EventId && this.Callback == other.Callback && this.Once == other.Once && this.Scope == other.Scope;
    };
    return Event;
}());
exports.default = Event;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxldmVudFxcRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtJQU9JLGVBQVksT0FBZ0IsRUFBRSxPQUFpQixFQUFFLElBQVksRUFBRSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFlBQWlCO1FBQzVFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELHNCQUFXLHVCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFTSxxQkFBSyxHQUFaLFVBQWEsS0FBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNwSSxDQUFDO0lBQ0wsWUFBQztBQUFELENBMUJBLEFBMEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudElkIH0gZnJvbSBcIi4uL2RlZmluZVwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCB7XHJcbiAgICBwdWJsaWMgRXZlbnRJZDogRXZlbnRJZDtcclxuICAgIHB1YmxpYyBDYWxsYmFjazogRnVuY3Rpb247XHJcbiAgICBwdWJsaWMgU2NvcGU6IGFueTtcclxuICAgIHB1YmxpYyBPbmNlOiBib29sZWFuO1xyXG4gICAgcHVibGljIFJlYWxDYWxsQmFrYzogRnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXZlbnRJZDogRXZlbnRJZCwgY2FsbGJhazogRnVuY3Rpb24sIG9uY2U6Ym9vbGVhbiwgc2NvcGU6IGFueSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLkV2ZW50SWQgPSBldmVudElkO1xyXG4gICAgICAgIHRoaXMuQ2FsbGJhY2sgPSBjYWxsYmFrO1xyXG4gICAgICAgIHRoaXMuU2NvcGUgPSBzY29wZTtcclxuICAgICAgICBpZiAoc2NvcGUgIT0gbnVsbCB8fCBzY29wZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5SZWFsQ2FsbEJha2MgPSBjYWxsYmFrLmJpbmQoc2NvcGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuUmVhbENhbGxCYWtjID0gdGhpcy5DYWxsYmFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5PbmNlID0gb25jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IENhbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuUmVhbENhbGxCYWtjO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBFcXVlbChvdGhlcjogRXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5FdmVudElkID09IG90aGVyLkV2ZW50SWQgJiYgdGhpcy5DYWxsYmFjayA9PSBvdGhlci5DYWxsYmFjayAmJiB0aGlzLk9uY2UgPT0gb3RoZXIuT25jZSAmJiB0aGlzLlNjb3BlID09IG90aGVyLlNjb3BlO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GameLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fa5exMMXFKupMg6i92JxBn', 'GameLayer');
// script/GameLayer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("./DataManager");
var ItemNode_1 = require("./ItemNode");
var define_1 = require("./util/define");
var EventMgr_1 = require("./util/event/EventMgr");
var loaderManager_1 = require("./util/loaderManager");
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemResList = [];
        _this.userCoinNode = null;
        _this.tipNode = null;
        _this.resultNode = null;
        _this.timerNode = null;
        _this.soundBtn = null;
        _this.musicBtn = null;
        _this.playBtn = null;
        _this.gzPos = null;
        _this.gamePos = null;
        _this.playDrawShowNode = null;
        _this.lineShowNode = null;
        _this.audioResList = [];
        /** 上一次绘制的格子 */
        _this.lastDrawCell = null;
        _this.iconPf = null;
        _this.index = 0;
        _this.colNum = 11;
        _this.rowNum = 5;
        /** 已绘制线数组 */
        _this.alreadyDrawLineList = [];
        /** 当前绘制线数组 */
        _this.curDrawLineItmeIndex = [];
        return _this;
    }
    /**加载卡片 */
    GameLayer.prototype.loadCard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, loaderManager_1.default.getRes('item', 'prefab', cc.Prefab)];
                    case 1:
                        _a.iconPf = _b.sent();
                        if (this.iconPf) {
                            console.log('预制体加载成功！');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GameLayer.prototype.start = function () {
        this.updateUserCoin();
        this.updateTimerUi();
        this.loadCard();
        // this.listerEvent()
        this.bindingDrawVisualEvent();
    };
    //绑定事件
    GameLayer.prototype.listerEvent = function () {
        EventMgr_1.default.Instance.Register(define_1.EventId.Result, this.showResult, this);
    };
    /**
     * 清除事件
     */
    GameLayer.prototype.cleatEvent = function () {
        EventMgr_1.default.Instance.Off();
    };
    /**
     * 游戏内按钮绑定事件
     */
    GameLayer.prototype.btnEvent = function (event) {
        var name = event.target.name;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        switch (name) {
            case 'btnStartGame':
                this.playGame();
                break;
            case 'btnReturn':
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('hall');
                break;
            case 'btNextGame':
            case 'btStartOver':
                this.hideResultNode();
                break;
            case 'btExit':
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('hall');
                break;
            case 'tipBtn':
                this.openTipNode();
                break;
            case 'closeTipBtn':
                this.hideTipNode();
                break;
            case 'btnSound':
                this.openOrCloseSound();
                break;
            case 'musicBtn':
                this.openOrCloseBG();
                break;
            case 'adsBtn':
                DataManager_1.default.adGoogleRewardedVideoAdHandle();
                break;
        }
    };
    /** 开始游戏 */
    GameLayer.prototype.playGame = function () {
        if (DataManager_1.default.curGameIsRun)
            return;
        DataManager_1.default.curGameIsRun = true;
        // cc.director.getCollisionManager().enabled = true;
        // 计时器
        this.startTimer();
        //隐藏游戏按钮
        // this.playBtn.active = false
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
        //游戏逻辑
        for (var i = 0; i < this.gzPos.children.length; i++) {
            this.creatBall(this.gzPos.children[i].position, i);
        }
    };
    /**创建预制体 */
    GameLayer.prototype.creatBall = function (pos, i) {
        var ballNode = cc.instantiate(this.iconPf);
        var index = util_1.default.getRandom(0, ballNode.getComponent(ItemNode_1.default).imgSpArr.length - 1);
        ballNode.getComponent(ItemNode_1.default).init(index, i);
        ballNode.setParent(this.gamePos);
        ballNode.setPosition(pos);
        // this.listTouchEvent(ballNode)
    };
    /**绑定滑动事件 */
    GameLayer.prototype.listTouchEvent = function (TouchNode) {
        var _this = this;
        TouchNode.on(cc.Node.EventType.TOUCH_START, function (event) {
            TouchNode['startPos'] = cc.v2(event.getLocation().x, event.getLocation().y);
        });
        TouchNode.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            var statPos = TouchNode['startPos'];
            var endPos = cc.v2(event.getLocation().x, event.getLocation().y);
            var direction = _this.isDirection(statPos, endPos);
            if (direction) {
                _this.TouchMove(TouchNode, direction);
            }
        });
    };
    /**移动事件 */
    GameLayer.prototype.TouchMove = function (taget, direction) {
        // console.log("taget",taget);
        switch (direction) {
            case define_1.DirectionType.Top:
                console.log('上');
                break;
            case define_1.DirectionType.Bottom:
                console.log('下');
                break;
            case define_1.DirectionType.Left:
                console.log('左');
                break;
            case define_1.DirectionType.Right:
                console.log('右');
                break;
        }
    };
    /**判断方向 */
    GameLayer.prototype.isDirection = function (startPos, endPos) {
        var direction = define_1.DirectionType.Left;
        var offsetX = Math.abs(endPos.x - startPos.x);
        var offsetY = Math.abs(endPos.y - startPos.y);
        if (offsetX >= offsetY) {
            direction = endPos.x > startPos.x ? define_1.DirectionType.Right : define_1.DirectionType.Left;
        }
        else {
            direction = endPos.y > startPos.y ? define_1.DirectionType.Top : define_1.DirectionType.Bottom;
        }
        return direction;
    };
    /**
     * 获取当前世界坐标上的item
     */
    GameLayer.prototype.getCurWorldPosItem = function (curPos) {
        var returnItem = null;
        this.gamePos.children.forEach(function (item) {
            var itemWorldPos = item.convertToWorldSpaceAR(cc.v2(0, 0));
            var size = item.getContentSize();
            if (curPos.x > itemWorldPos.x - size.width && curPos.x < itemWorldPos.x + size.width && curPos.y > itemWorldPos.y - size.height && curPos.y < itemWorldPos.y + size.height) {
                // 在节点内
                returnItem = item;
            }
        });
        return returnItem;
    };
    /**
     * 绘画展示区绑定事件
     */
    GameLayer.prototype.bindingDrawVisualEvent = function () {
        var _this = this;
        this.playDrawShowNode.on(cc.Node.EventType.TOUCH_START, function (even) {
            // if(DataManager.itemHideAniIsPlay || !DataManager.curGameIsRun) return;
            var curWorldItem = _this.getCurWorldPosItem(even.getLocation());
            if (curWorldItem != null) {
                _this.curDrawLineItmeIndex = [];
                _this.playDrawShowNode['isDraw'] = true;
                _this.lastDrawCell = curWorldItem;
                _this.curDrawLineItmeIndex.push(curWorldItem.getComponent(ItemNode_1.default).itemIndex);
            }
        });
        this.playDrawShowNode.on(cc.Node.EventType.TOUCH_MOVE, function (even) {
            if (!_this.playDrawShowNode['isDraw'])
                return;
            var curWorldPosItem = _this.getCurWorldPosItem(even.getLocation());
            _this.playDrawShowNode.getComponent(cc.Graphics).clear();
            if (curWorldPosItem && _this.curCellIsDraw(curWorldPosItem)) {
                _this.lastDrawCell['alreadyDraw'] = true;
                curWorldPosItem['alreadyDraw'] = true;
                _this.drawLine(curWorldPosItem.convertToWorldSpaceAR(cc.v3(0, 0, 0)));
                _this.lastDrawCell = curWorldPosItem;
                _this.curDrawLineItmeIndex.push(curWorldPosItem.getComponent(ItemNode_1.default).itemIndex);
            }
            _this.drawPlayVisualLine(even.getLocation());
        });
        this.playDrawShowNode.on(cc.Node.EventType.TOUCH_END, function (even) {
            if (!_this.playDrawShowNode['isDraw'])
                return;
            _this.playDrawShowNode['isDraw'] = false;
            _this.playDrawShowNode.getComponent(cc.Graphics).clear();
            _this.lineShowNode.getComponent(cc.Graphics).clear();
            if (_this.curDrawLineItmeIndex.length >= 2) {
                // 达到清除条件
                DataManager_1.default.itemHideAniIsPlay = true;
                var aniNum_1 = 0;
                var endCall_1 = function () {
                    DataManager_1.default.itemHideAniIsPlay = false;
                    _this.gamePos.children.forEach(function (item) {
                        if (item.opacity == 255) {
                            item['alreadyDraw'] = false;
                        }
                    });
                };
                var _loop_1 = function (i) {
                    var index = _this.curDrawLineItmeIndex[i];
                    var node = _this.gamePos.children[index];
                    aniNum_1 += 2;
                    cc.tween(node)
                        .to(0.2, { scale: 1.1 })
                        .call(function () {
                        if (--aniNum_1 == 0) {
                            endCall_1();
                            node.scale = 1;
                        }
                    })
                        .start();
                    cc.tween(node)
                        .to(0.2, { opacity: 0 })
                        .call(function () {
                        if (--aniNum_1 == 0) {
                            endCall_1();
                        }
                        var itemID = util_1.default.getRandom(0, node.getComponent(ItemNode_1.default).imgSpArr.length - 1);
                        node.getComponent(ItemNode_1.default).init(itemID, node.getComponent(ItemNode_1.default).itemIndex);
                        node.opacity = 255;
                        DataManager_1.default._curScord += 30;
                        _this.updataCoin();
                    })
                        .start();
                };
                for (var i = 0; i < _this.curDrawLineItmeIndex.length; i++) {
                    _loop_1(i);
                }
            }
            else {
                _this.gamePos.children.forEach(function (item) {
                    if (item.opacity == 255) {
                        item['alreadyDraw'] = false;
                    }
                });
            }
        });
    };
    /**
     * 绘制玩家可视线条
     */
    GameLayer.prototype.drawPlayVisualLine = function (endPos) {
        if (!this.lastDrawCell)
            return;
        var targetPos = cc.v3(0, 0, 0);
        var startPos = cc.v3(0, 0, 0);
        var graphics = this.playDrawShowNode.getComponent(cc.Graphics);
        startPos = this.playDrawShowNode.convertToNodeSpaceAR(this.lastDrawCell.convertToWorldSpaceAR(cc.v3(0, 0, 0)));
        targetPos = this.playDrawShowNode.convertToNodeSpaceAR(cc.v3(endPos.x, endPos.y));
        graphics.moveTo(startPos.x, startPos.y);
        graphics.lineTo(targetPos.x, targetPos.y);
        graphics.stroke();
    };
    /**
     * 当前格子是否可绘制
     */
    GameLayer.prototype.curCellIsDraw = function (curItem) {
        var lastItemId = this.lastDrawCell.getComponent(ItemNode_1.default).itemId;
        var curItemId = curItem.getComponent(ItemNode_1.default).itemId;
        if (lastItemId != curItemId || curItem['alreadyDraw'])
            return;
        var lastIndex = this.lastDrawCell.getComponent(ItemNode_1.default).itemIndex;
        var lastRow = Math.floor(lastIndex / this.colNum);
        var lastCol = lastIndex % this.colNum;
        var curIndex = curItem.getComponent(ItemNode_1.default).itemIndex;
        var curRow = Math.floor(curIndex / this.colNum);
        var curCol = curIndex % this.colNum;
        if (curRow == lastRow && (lastCol + 1 == curCol || lastCol - 1 == curCol)) {
            // 同行
            return true;
        }
        if (curCol == lastCol && (lastRow + 1 == curRow || lastRow - 1 == curRow)) {
            // 同列
            return true;
        }
        if (curRow == lastRow - 1 && curCol == lastCol + 1) {
            // 左上
            return true;
        }
        if (curRow == lastRow + 1 && curCol == lastCol + 1) {
            // 右上
            return true;
        }
        if (curRow == lastRow - 1 && curCol == lastCol - 1) {
            // 左下
            return true;
        }
        if (curRow == lastRow + 1 && curCol == lastCol - 1) {
            // 右下
            return true;
        }
        return false;
    };
    /**
     * 绘制结果可视线条
     */
    GameLayer.prototype.drawLine = function (endPos) {
        var targetPos = cc.v3(0, 0, 0);
        var startPos = cc.v3(0, 0, 0);
        var graphics = this.lineShowNode.getComponent(cc.Graphics);
        startPos = this.playDrawShowNode.convertToNodeSpaceAR(this.lastDrawCell.convertToWorldSpaceAR(cc.v3(0, 0, 0)));
        targetPos = this.lineShowNode.convertToNodeSpaceAR(endPos);
        graphics.moveTo(startPos.x, startPos.y);
        graphics.lineTo(targetPos.x, targetPos.y);
        graphics.stroke();
    };
    /**
     * 开启或关闭音效
     */
    GameLayer.prototype.openOrCloseSound = function () {
        if (DataManager_1.default.curSoundBGIsClose) {
            this.soundBtn.color = cc.color(170, 170, 170, 255);
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.soundBtn.color = cc.color(255, 255, 255, 255);
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        DataManager_1.default.curSoundBGIsClose = !DataManager_1.default.curSoundBGIsClose;
    };
    GameLayer.prototype.openOrCloseBG = function () {
        if (DataManager_1.default.curSoundIsClose) {
            this.musicBtn.color = cc.color(170, 170, 170, 255);
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.musicBtn.color = cc.color(255, 255, 255, 255);
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 1;
        }
        DataManager_1.default.curSoundIsClose = !DataManager_1.default.curSoundIsClose;
    };
    /**
     * 开始倒计时
     */
    GameLayer.prototype.startTimer = function () {
        var _this = this;
        var speed = 0.01;
        DataManager_1.default.timerFunc = function () {
            DataManager_1.default.indexTime -= speed;
            if (DataManager_1.default.indexTime <= 0) {
                _this.ResultFn();
            }
            _this.updateTimerUi();
            _this.timerNode.getChildByName('timeText').getComponent(cc.Label).string = Math.floor(DataManager_1.default.indexTime) + 's';
        };
        this.schedule(DataManager_1.default.timerFunc, speed);
    };
    /**
     * 更新倒计时
     */
    GameLayer.prototype.updateTimerUi = function () {
        cc.find('barBg/bar', this.timerNode).getComponent(cc.Sprite).fillRange = DataManager_1.default.indexTime / DataManager_1.default.startTime;
        this.timerNode.getChildByName('timeText').getComponent(cc.Label).string = Math.ceil(DataManager_1.default.indexTime) + 's';
    };
    GameLayer.prototype.updataCoin = function () {
        this.updateUserCoin();
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
    };
    /**
     * 更新余额
     */
    GameLayer.prototype.updateUserCoin = function () {
        var lableNode = this.userCoinNode.getChildByName('coinLable');
        cc.tween(lableNode).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
        lableNode.getComponent(cc.Label).string = '' + DataManager_1.default.curScord;
    };
    /**判断结果 */
    GameLayer.prototype.ResultFn = function () {
        if (DataManager_1.default._curScord >= 2000) {
            this.showResult(true);
            DataManager_1.default.curWinNum += 200;
        }
        else {
            this.showResult(false);
        }
    };
    /**打开提示 */
    GameLayer.prototype.openTipNode = function () {
        this.tipNode.getChildByName('rule').scale = 0.8;
        this.tipNode.active = true;
        cc.tween(this.tipNode.getChildByName('rule')).to(0.2, { scale: 1 }).start();
    };
    /**
     * 关闭提示展示
     */
    GameLayer.prototype.hideTipNode = function () {
        var _this = this;
        cc.tween(this.tipNode.getChildByName('rule'))
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.tipNode.active = false;
            _this.tipNode.getChildByName('rule').scale = 1;
        })
            .start();
    };
    /**
     * 展示结果
     */
    GameLayer.prototype.showResult = function (isWin) {
        this.unschedule(DataManager_1.default.timerFunc);
        this.unscheduleAllCallbacks();
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
        this.gamePos.removeAllChildren();
        if (isWin) {
            var winNumLable = cc.find('win/winNum', this.resultNode);
            DataManager_1.default.curWinNum += 100;
            winNumLable.getComponent(cc.Label).string = '' + DataManager_1.default.curWinNum;
        }
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[isWin ? 4 : 5];
        this.node.getComponent(cc.AudioSource).play();
        var winNode = this.resultNode.getChildByName('win');
        var loseNode = this.resultNode.getChildByName('lose');
        winNode.active = isWin;
        loseNode.active = !isWin;
        var curAniNode = isWin ? winNode : loseNode;
        this.resultNode.active = true;
        curAniNode.scale = 0.6;
        curAniNode.opacity = 100;
        cc.tween(curAniNode).to(0.3, { scale: 1.1, opacity: 255 }).to(0.3, { scale: 1 }).start();
    };
    /**
     * 关闭结果展示
     */
    GameLayer.prototype.hideResultNode = function () {
        DataManager_1.default.curGameIsRun = false;
        this.resultNode.active = false;
        cc.director.getCollisionManager().enabled = false;
        DataManager_1.default._curScord = 0;
        DataManager_1.default._indexTime = DataManager_1.default.startTime;
        this.updateTimerUi();
        this.updateUserCoin();
    };
    __decorate([
        property({ type: [cc.SpriteFrame], tooltip: '元素纹理' })
    ], GameLayer.prototype, "itemResList", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '用户余额节点' })
    ], GameLayer.prototype, "userCoinNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏提示页面' })
    ], GameLayer.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏结果节点' })
    ], GameLayer.prototype, "resultNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '倒计时节点' })
    ], GameLayer.prototype, "timerNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '音效按钮节点' })
    ], GameLayer.prototype, "soundBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '音效按钮节点' })
    ], GameLayer.prototype, "musicBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '开始游戏节点' })
    ], GameLayer.prototype, "playBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏格子' })
    ], GameLayer.prototype, "gzPos", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏格子' })
    ], GameLayer.prototype, "gamePos", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '玩家绘制展示节点' })
    ], GameLayer.prototype, "playDrawShowNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '线展示节点' })
    ], GameLayer.prototype, "lineShowNode", void 0);
    __decorate([
        property({ type: [cc.AudioClip] })
    ], GameLayer.prototype, "audioResList", void 0);
    GameLayer = __decorate([
        ccclass
    ], GameLayer);
    return GameLayer;
}(cc.Component));
exports.default = GameLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLHVDQUFrQztBQUNsQyx3Q0FBdUQ7QUFDdkQsa0RBQTZDO0FBQzdDLHNEQUFpRDtBQUNqRCxvQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFnZ0JDO1FBOWZHLGlCQUFXLEdBQXFCLEVBQUUsQ0FBQztRQUduQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFtQixFQUFFLENBQUM7UUFFbEMsZUFBZTtRQUNmLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVqQixZQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTSxHQUFHLENBQUMsQ0FBQztRQUVuQixhQUFhO1FBQ2IseUJBQW1CLEdBQXlCLEVBQUUsQ0FBQztRQUUvQyxjQUFjO1FBQ2QsMEJBQW9CLEdBQWtCLEVBQUUsQ0FBQzs7SUEwYzdDLENBQUM7SUF4Y0csVUFBVTtJQUNKLDRCQUFRLEdBQWQ7Ozs7Ozt3QkFDSSxLQUFBLElBQUksQ0FBQTt3QkFBVSxxQkFBTSx1QkFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQXJFLEdBQUssTUFBTSxHQUFHLFNBQXVELENBQUM7d0JBQ3RFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTs0QkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUMzQjs7Ozs7S0FDSjtJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU07SUFDTiwrQkFBVyxHQUFYO1FBQ0ksa0JBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsOEJBQVUsR0FBVjtRQUNJLGtCQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRDs7T0FFRztJQUNILDRCQUFRLEdBQVIsVUFBUyxLQUFlO1FBQ3BCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUMsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLGNBQWM7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixNQUFNO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssWUFBWSxDQUFDO1lBQ2xCLEtBQUssYUFBYTtnQkFDZCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3hCLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULHFCQUFXLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztnQkFDNUMsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELFdBQVc7SUFDWCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxxQkFBVyxDQUFDLFlBQVk7WUFBRSxPQUFPO1FBQ3JDLHFCQUFXLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNoQyxvREFBb0Q7UUFDcEQsTUFBTTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixRQUFRO1FBQ1IsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUMsTUFBTTtRQUVOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7SUFDTCxDQUFDO0lBRUQsV0FBVztJQUNYLDZCQUFTLEdBQVQsVUFBVSxHQUFZLEVBQUUsQ0FBUztRQUM3QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLEtBQUssR0FBRyxjQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25GLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixnQ0FBZ0M7SUFDcEMsQ0FBQztJQUVELFlBQVk7SUFDWixrQ0FBYyxHQUFkLFVBQWUsU0FBa0I7UUFBakMsaUJBWUM7UUFYRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7WUFDOUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEYsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFDLEtBQUs7WUFDL0MsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxTQUFTLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbEQsSUFBSSxTQUFTLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDeEM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxVQUFVO0lBQ1YsNkJBQVMsR0FBVCxVQUFVLEtBQWMsRUFBRSxTQUF3QjtRQUM5Qyw4QkFBOEI7UUFDOUIsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLHNCQUFhLENBQUMsR0FBRztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsTUFBTTtZQUNWLEtBQUssc0JBQWEsQ0FBQyxNQUFNO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyxzQkFBYSxDQUFDLElBQUk7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLHNCQUFhLENBQUMsS0FBSztnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELFVBQVU7SUFDViwrQkFBVyxHQUFYLFVBQVksUUFBaUIsRUFBRSxNQUFlO1FBQzFDLElBQUksU0FBUyxHQUFrQixzQkFBYSxDQUFDLElBQUksQ0FBQztRQUNsRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxPQUFPLElBQUksT0FBTyxFQUFFO1lBQ3BCLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxzQkFBYSxDQUFDLElBQUksQ0FBQztTQUNoRjthQUFNO1lBQ0gsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHNCQUFhLENBQUMsTUFBTSxDQUFDO1NBQ2hGO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsc0NBQWtCLEdBQWxCLFVBQW1CLE1BQWU7UUFDOUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDL0IsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRWpDLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hLLE9BQU87Z0JBQ1AsVUFBVSxHQUFHLElBQUksQ0FBQzthQUNyQjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMENBQXNCLEdBQXRCO1FBQUEsaUJBa0ZDO1FBakZHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsSUFBeUI7WUFDOUUseUVBQXlFO1lBQ3pFLElBQUksWUFBWSxHQUFZLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUN4RSxJQUFJLFlBQVksSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2pGO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFDLElBQXlCO1lBQzdFLElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUFFLE9BQU87WUFFN0MsSUFBSSxlQUFlLEdBQVksS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBRTNFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hELElBQUksZUFBZSxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ3hELEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUN4QyxlQUFlLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxLQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNwRjtZQUNELEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQUMsSUFBeUI7WUFDNUUsSUFBSSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7Z0JBQUUsT0FBTztZQUU3QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hELEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVwRCxJQUFJLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUN2QyxTQUFTO2dCQUVULHFCQUFXLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUNyQyxJQUFJLFFBQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxTQUFPLEdBQUc7b0JBQ1YscUJBQVcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7b0JBQ3RDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7d0JBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLEVBQUU7NEJBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUM7eUJBQy9CO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQzt3Q0FFTyxDQUFDO29CQUNOLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLFFBQU0sSUFBSSxDQUFDLENBQUM7b0JBQ1osRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7eUJBQ1QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQzt5QkFDdkIsSUFBSSxDQUFDO3dCQUNGLElBQUksRUFBRSxRQUFNLElBQUksQ0FBQyxFQUFFOzRCQUNmLFNBQU8sRUFBRSxDQUFDOzRCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3lCQUNsQjtvQkFDTCxDQUFDLENBQUM7eUJBQ0QsS0FBSyxFQUFFLENBQUM7b0JBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7eUJBQ1QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzt5QkFDdkIsSUFBSSxDQUFDO3dCQUNGLElBQUksRUFBRSxRQUFNLElBQUksQ0FBQyxFQUFFOzRCQUNmLFNBQU8sRUFBRSxDQUFDO3lCQUNiO3dCQUNELElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ2hGLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO3dCQUNuQixxQkFBVyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7d0JBQzVCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxDQUFDO3lCQUNELEtBQUssRUFBRSxDQUFDOztnQkF6QmpCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTs0QkFBeEQsQ0FBQztpQkEwQlQ7YUFDSjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO29CQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksR0FBRyxFQUFFO3dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO3FCQUMvQjtnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQ0FBa0IsR0FBbEIsVUFBbUIsTUFBTTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPO1FBRS9CLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0QsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0csU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBYSxHQUFiLFVBQWMsT0FBTztRQUNqQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2pFLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN0RCxJQUFJLFVBQVUsSUFBSSxTQUFTLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUFFLE9BQU87UUFFOUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLE1BQU0sR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVwQyxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLE1BQU0sSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZFLEtBQUs7WUFDTCxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxNQUFNLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRTtZQUN2RSxLQUFLO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksTUFBTSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksTUFBTSxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDaEQsS0FBSztZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLE1BQU0sSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE1BQU0sSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQ2hELEtBQUs7WUFDTCxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxNQUFNLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxNQUFNLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtZQUNoRCxLQUFLO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksTUFBTSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksTUFBTSxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDaEQsS0FBSztZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDSCw0QkFBUSxHQUFSLFVBQVMsTUFBTTtRQUNYLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9HLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxxQkFBVyxDQUFDLGlCQUFpQixFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDckQ7UUFDRCxxQkFBVyxDQUFDLGlCQUFpQixHQUFHLENBQUMscUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztJQUNuRSxDQUFDO0lBRUQsaUNBQWEsR0FBYjtRQUNJLElBQUkscUJBQVcsQ0FBQyxlQUFlLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUM3RDtRQUVELHFCQUFXLENBQUMsZUFBZSxHQUFHLENBQUMscUJBQVcsQ0FBQyxlQUFlLENBQUM7SUFDL0QsQ0FBQztJQUNEOztPQUVHO0lBQ0gsOEJBQVUsR0FBVjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHFCQUFXLENBQUMsU0FBUyxHQUFHO1lBQ3BCLHFCQUFXLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztZQUMvQixJQUFJLHFCQUFXLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdEgsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBYSxHQUFiO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLHFCQUFXLENBQUMsU0FBUyxHQUFHLHFCQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3ZILElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDckgsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQ0FBYyxHQUFkO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUQsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUM7SUFDeEUsQ0FBQztJQUVELFVBQVU7SUFDViw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxxQkFBVyxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixxQkFBVyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUM7U0FDaEM7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsVUFBVTtJQUNWLCtCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hGLENBQUM7SUFFRDs7T0FFRztJQUNILCtCQUFXLEdBQVg7UUFBQSxpQkFRQztRQVBHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUN2QixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDNUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDSCw4QkFBVSxHQUFWLFVBQVcsS0FBSztRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixxQkFBVyxDQUFDLFNBQVMsR0FBRyxxQkFBVyxDQUFDLFNBQVMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDakMsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekQscUJBQVcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDO1lBQzdCLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcscUJBQVcsQ0FBQyxTQUFTLENBQUM7U0FDMUU7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN2QixRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBRXpCLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdGLENBQUM7SUFFRDs7T0FFRztJQUNILGtDQUFjLEdBQWQ7UUFDSSxxQkFBVyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2xELHFCQUFXLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMxQixxQkFBVyxDQUFDLFVBQVUsR0FBRyxxQkFBVyxDQUFDLFNBQVMsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUE3ZkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO2tEQUNuQjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzttREFDbEI7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7OENBQ3ZCO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO2lEQUNwQjtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztnREFDcEI7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7K0NBQ3RCO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDOytDQUN0QjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzs4Q0FDdkI7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7NENBQ3ZCO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDOzhDQUNyQjtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQzt1REFDaEI7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7bURBQ2pCO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7bURBQ0Q7SUF0Q2pCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FnZ0I3QjtJQUFELGdCQUFDO0NBaGdCRCxBQWdnQkMsQ0FoZ0JzQyxFQUFFLENBQUMsU0FBUyxHQWdnQmxEO2tCQWhnQm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmltcG9ydCBHYW1lV2hlZWwgZnJvbSAnLi9HYW1lV2hlZWwnO1xyXG5pbXBvcnQgSXRlbU5vZGUgZnJvbSAnLi9JdGVtTm9kZSc7XHJcbmltcG9ydCB7IERpcmVjdGlvblR5cGUsIEV2ZW50SWQgfSBmcm9tICcuL3V0aWwvZGVmaW5lJztcclxuaW1wb3J0IEV2ZW50TWdyIGZyb20gJy4vdXRpbC9ldmVudC9FdmVudE1ncic7XHJcbmltcG9ydCBsb2FkZXJNYW5hZ2VyIGZyb20gJy4vdXRpbC9sb2FkZXJNYW5hZ2VyJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsL3V0aWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLCB0b29sdGlwOiAn5YWD57Sg57q555CGJyB9KVxyXG4gICAgaXRlbVJlc0xpc3Q6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn55So5oi35L2Z6aKd6IqC54K5JyB9KVxyXG4gICAgdXNlckNvaW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP5o+Q56S66aG16Z2iJyB9KVxyXG4gICAgdGlwTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+a4uOaIj+e7k+aenOiKgueCuScgfSlcclxuICAgIHJlc3VsdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICflgJLorqHml7boioLngrknIH0pXHJcbiAgICB0aW1lck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfpn7PmlYjmjInpkq7oioLngrknIH0pXHJcbiAgICBzb3VuZEJ0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+mfs+aViOaMiemSruiKgueCuScgfSlcclxuICAgIG11c2ljQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5byA5aeL5ri45oiP6IqC54K5JyB9KVxyXG4gICAgcGxheUJ0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+a4uOaIj+agvOWtkCcgfSlcclxuICAgIGd6UG9zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP5qC85a2QJyB9KVxyXG4gICAgZ2FtZVBvczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+eOqeWutue7mOWItuWxleekuuiKgueCuScgfSlcclxuICAgIHBsYXlEcmF3U2hvd05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfnur/lsZXnpLroioLngrknIH0pXHJcbiAgICBsaW5lU2hvd05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5BdWRpb0NsaXBdIH0pXHJcbiAgICBhdWRpb1Jlc0xpc3Q6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgLyoqIOS4iuS4gOasoee7mOWItueahOagvOWtkCAqL1xyXG4gICAgbGFzdERyYXdDZWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaWNvblBmOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNvbE51bSA9IDExO1xyXG4gICAgcHJpdmF0ZSByb3dOdW0gPSA1O1xyXG5cclxuICAgIC8qKiDlt7Lnu5jliLbnur/mlbDnu4QgKi9cclxuICAgIGFscmVhZHlEcmF3TGluZUxpc3Q6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XHJcblxyXG4gICAgLyoqIOW9k+WJjee7mOWItue6v+aVsOe7hCAqL1xyXG4gICAgY3VyRHJhd0xpbmVJdG1lSW5kZXg6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHJcbiAgICAvKirliqDovb3ljaHniYcgKi9cclxuICAgIGFzeW5jIGxvYWRDYXJkKCkge1xyXG4gICAgICAgIHRoaXMuaWNvblBmID0gYXdhaXQgbG9hZGVyTWFuYWdlci5nZXRSZXMoJ2l0ZW0nLCAncHJlZmFiJywgY2MuUHJlZmFiKTtcclxuICAgICAgICBpZiAodGhpcy5pY29uUGYpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+mihOWItuS9k+WKoOi9veaIkOWKn++8gScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJDb2luKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lclVpKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkQ2FyZCgpO1xyXG4gICAgICAgIC8vIHRoaXMubGlzdGVyRXZlbnQoKVxyXG4gICAgICAgIHRoaXMuYmluZGluZ0RyYXdWaXN1YWxFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v57uR5a6a5LqL5Lu2XHJcbiAgICBsaXN0ZXJFdmVudCgpIHtcclxuICAgICAgICBFdmVudE1nci5JbnN0YW5jZS5SZWdpc3RlcihFdmVudElkLlJlc3VsdCwgdGhpcy5zaG93UmVzdWx0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBjbGVhdEV2ZW50KCkge1xyXG4gICAgICAgIEV2ZW50TWdyLkluc3RhbmNlLk9mZigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/lhoXmjInpkq7nu5Hlrprkuovku7ZcclxuICAgICAqL1xyXG4gICAgYnRuRXZlbnQoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdidG5TdGFydEdhbWUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0blJldHVybic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWF0RXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaGFsbCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0TmV4dEdhbWUnOlxyXG4gICAgICAgICAgICBjYXNlICdidFN0YXJ0T3Zlcic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRFeGl0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdoYWxsJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndGlwQnRuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlblRpcE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjbG9zZVRpcEJ0bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVUaXBOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRuU291bmQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuT3JDbG9zZVNvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbXVzaWNCdG4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuT3JDbG9zZUJHKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYWRzQnRuJzpcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkR29vZ2xlUmV3YXJkZWRWaWRlb0FkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOW8gOWni+a4uOaIjyAqL1xyXG4gICAgcGxheUdhbWUoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1bikgcmV0dXJuO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1biA9IHRydWU7XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIOiuoeaXtuWZqFxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgIC8v6ZqQ6JeP5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5QnRuLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAvL+a4uOaIj+mAu+i+kVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3pQb3MuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdEJhbGwodGhpcy5nelBvcy5jaGlsZHJlbltpXS5wb3NpdGlvbiwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIm+W7uumihOWItuS9kyAqL1xyXG4gICAgY3JlYXRCYWxsKHBvczogY2MuVmVjMywgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGJhbGxOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pY29uUGYpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHV0aWwuZ2V0UmFuZG9tKDAsIGJhbGxOb2RlLmdldENvbXBvbmVudChJdGVtTm9kZSkuaW1nU3BBcnIubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgYmFsbE5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pbml0KGluZGV4LCBpKTtcclxuICAgICAgICBiYWxsTm9kZS5zZXRQYXJlbnQodGhpcy5nYW1lUG9zKTtcclxuICAgICAgICBiYWxsTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIC8vIHRoaXMubGlzdFRvdWNoRXZlbnQoYmFsbE5vZGUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoq57uR5a6a5ruR5Yqo5LqL5Lu2ICovXHJcbiAgICBsaXN0VG91Y2hFdmVudChUb3VjaE5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBUb3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBUb3VjaE5vZGVbJ3N0YXJ0UG9zJ10gPSBjYy52MihldmVudC5nZXRMb2NhdGlvbigpLngsIGV2ZW50LmdldExvY2F0aW9uKCkueSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgVG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0UG9zID0gVG91Y2hOb2RlWydzdGFydFBvcyddO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIoZXZlbnQuZ2V0TG9jYXRpb24oKS54LCBldmVudC5nZXRMb2NhdGlvbigpLnkpO1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5pc0RpcmVjdGlvbihzdGF0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoTW92ZShUb3VjaE5vZGUsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnp7vliqjkuovku7YgKi9cclxuICAgIFRvdWNoTW92ZSh0YWdldDogY2MuTm9kZSwgZGlyZWN0aW9uOiBEaXJlY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0YWdldFwiLHRhZ2V0KTtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvblR5cGUuVG9wOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+S4iicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uVHlwZS5Cb3R0b206XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5LiLJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb25UeXBlLkxlZnQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5bemJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb25UeXBlLlJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WPsycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIpOaWreaWueWQkSAqL1xyXG4gICAgaXNEaXJlY3Rpb24oc3RhcnRQb3M6IGNjLlZlYzIsIGVuZFBvczogY2MuVmVjMik6IERpcmVjdGlvblR5cGUge1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb246IERpcmVjdGlvblR5cGUgPSBEaXJlY3Rpb25UeXBlLkxlZnQ7XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSBNYXRoLmFicyhlbmRQb3MueCAtIHN0YXJ0UG9zLngpO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gTWF0aC5hYnMoZW5kUG9zLnkgLSBzdGFydFBvcy55KTtcclxuICAgICAgICBpZiAob2Zmc2V0WCA+PSBvZmZzZXRZKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGVuZFBvcy54ID4gc3RhcnRQb3MueCA/IERpcmVjdGlvblR5cGUuUmlnaHQgOiBEaXJlY3Rpb25UeXBlLkxlZnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gZW5kUG9zLnkgPiBzdGFydFBvcy55ID8gRGlyZWN0aW9uVHlwZS5Ub3AgOiBEaXJlY3Rpb25UeXBlLkJvdHRvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeS4lueVjOWdkOagh+S4iueahGl0ZW1cclxuICAgICAqL1xyXG4gICAgZ2V0Q3VyV29ybGRQb3NJdGVtKGN1clBvczogY2MuVmVjMikge1xyXG4gICAgICAgIGxldCByZXR1cm5JdGVtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdhbWVQb3MuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbVdvcmxkUG9zID0gaXRlbS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGl0ZW0uZ2V0Q29udGVudFNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJQb3MueCA+IGl0ZW1Xb3JsZFBvcy54IC0gc2l6ZS53aWR0aCAmJiBjdXJQb3MueCA8IGl0ZW1Xb3JsZFBvcy54ICsgc2l6ZS53aWR0aCAmJiBjdXJQb3MueSA+IGl0ZW1Xb3JsZFBvcy55IC0gc2l6ZS5oZWlnaHQgJiYgY3VyUG9zLnkgPCBpdGVtV29ybGRQb3MueSArIHNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlnKjoioLngrnlhoVcclxuICAgICAgICAgICAgICAgIHJldHVybkl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5jnlLvlsZXnpLrljLrnu5Hlrprkuovku7ZcclxuICAgICAqL1xyXG4gICAgYmluZGluZ0RyYXdWaXN1YWxFdmVudCgpIHtcclxuICAgICAgICB0aGlzLnBsYXlEcmF3U2hvd05vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVuOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmKERhdGFNYW5hZ2VyLml0ZW1IaWRlQW5pSXNQbGF5IHx8ICFEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4pIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGN1cldvcmxkSXRlbTogY2MuTm9kZSA9IHRoaXMuZ2V0Q3VyV29ybGRQb3NJdGVtKGV2ZW4uZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIGlmIChjdXJXb3JsZEl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJEcmF3TGluZUl0bWVJbmRleCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5RHJhd1Nob3dOb2RlWydpc0RyYXcnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REcmF3Q2VsbCA9IGN1cldvcmxkSXRlbTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyRHJhd0xpbmVJdG1lSW5kZXgucHVzaChjdXJXb3JsZEl0ZW0uZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wbGF5RHJhd1Nob3dOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVuOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5RHJhd1Nob3dOb2RlWydpc0RyYXcnXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cldvcmxkUG9zSXRlbTogY2MuTm9kZSA9IHRoaXMuZ2V0Q3VyV29ybGRQb3NJdGVtKGV2ZW4uZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsYXlEcmF3U2hvd05vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKS5jbGVhcigpO1xyXG4gICAgICAgICAgICBpZiAoY3VyV29ybGRQb3NJdGVtICYmIHRoaXMuY3VyQ2VsbElzRHJhdyhjdXJXb3JsZFBvc0l0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REcmF3Q2VsbFsnYWxyZWFkeURyYXcnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjdXJXb3JsZFBvc0l0ZW1bJ2FscmVhZHlEcmF3J10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TGluZShjdXJXb3JsZFBvc0l0ZW0uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REcmF3Q2VsbCA9IGN1cldvcmxkUG9zSXRlbTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyRHJhd0xpbmVJdG1lSW5kZXgucHVzaChjdXJXb3JsZFBvc0l0ZW0uZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BsYXlWaXN1YWxMaW5lKGV2ZW4uZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wbGF5RHJhd1Nob3dOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW46IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXlEcmF3U2hvd05vZGVbJ2lzRHJhdyddKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsYXlEcmF3U2hvd05vZGVbJ2lzRHJhdyddID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGxheURyYXdTaG93Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVNob3dOb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1ckRyYXdMaW5lSXRtZUluZGV4Lmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDovr7liLDmuIXpmaTmnaHku7ZcclxuXHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pdGVtSGlkZUFuaUlzUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pTnVtID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBlbmRDYWxsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLml0ZW1IaWRlQW5pSXNQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUG9zLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ub3BhY2l0eSA9PSAyNTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bJ2FscmVhZHlEcmF3J10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5jdXJEcmF3TGluZUl0bWVJbmRleC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuY3VyRHJhd0xpbmVJdG1lSW5kZXhbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdhbWVQb3MuY2hpbGRyZW5baW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU51bSArPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEuMSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLS1hbmlOdW0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZENhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtLWFuaU51bSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQ2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JRCA9IHV0aWwuZ2V0UmFuZG9tKDAsIG5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pbWdTcEFyci5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pbml0KGl0ZW1JRCwgbm9kZS5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5fY3VyU2NvcmQgKz0gMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0YUNvaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQb3MuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm9wYWNpdHkgPT0gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bJ2FscmVhZHlEcmF3J10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uY5Yi2546p5a625Y+v6KeG57q/5p2hXHJcbiAgICAgKi9cclxuICAgIGRyYXdQbGF5VmlzdWFsTGluZShlbmRQb3MpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGFzdERyYXdDZWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSBjYy52MygwLCAwLCAwKTtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52MygwLCAwLCAwKTtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSB0aGlzLnBsYXlEcmF3U2hvd05vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuXHJcbiAgICAgICAgc3RhcnRQb3MgPSB0aGlzLnBsYXlEcmF3U2hvd05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5sYXN0RHJhd0NlbGwuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKSk7XHJcbiAgICAgICAgdGFyZ2V0UG9zID0gdGhpcy5wbGF5RHJhd1Nob3dOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYzKGVuZFBvcy54LCBlbmRQb3MueSkpO1xyXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuICAgICAgICBncmFwaGljcy5saW5lVG8odGFyZ2V0UG9zLngsIHRhcmdldFBvcy55KTtcclxuICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeagvOWtkOaYr+WQpuWPr+e7mOWItlxyXG4gICAgICovXHJcbiAgICBjdXJDZWxsSXNEcmF3KGN1ckl0ZW0pIHtcclxuICAgICAgICBsZXQgbGFzdEl0ZW1JZCA9IHRoaXMubGFzdERyYXdDZWxsLmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUlkO1xyXG4gICAgICAgIGxldCBjdXJJdGVtSWQgPSBjdXJJdGVtLmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUlkO1xyXG4gICAgICAgIGlmIChsYXN0SXRlbUlkICE9IGN1ckl0ZW1JZCB8fCBjdXJJdGVtWydhbHJlYWR5RHJhdyddKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmxhc3REcmF3Q2VsbC5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JbmRleDtcclxuICAgICAgICBsZXQgbGFzdFJvdyA9IE1hdGguZmxvb3IobGFzdEluZGV4IC8gdGhpcy5jb2xOdW0pO1xyXG4gICAgICAgIGxldCBsYXN0Q29sID0gbGFzdEluZGV4ICUgdGhpcy5jb2xOdW07XHJcbiAgICAgICAgbGV0IGN1ckluZGV4ID0gY3VySXRlbS5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JbmRleDtcclxuICAgICAgICBsZXQgY3VyUm93ID0gTWF0aC5mbG9vcihjdXJJbmRleCAvIHRoaXMuY29sTnVtKTtcclxuICAgICAgICBsZXQgY3VyQ29sID0gY3VySW5kZXggJSB0aGlzLmNvbE51bTtcclxuXHJcbiAgICAgICAgaWYgKGN1clJvdyA9PSBsYXN0Um93ICYmIChsYXN0Q29sICsgMSA9PSBjdXJDb2wgfHwgbGFzdENvbCAtIDEgPT0gY3VyQ29sKSkge1xyXG4gICAgICAgICAgICAvLyDlkIzooYxcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJDb2wgPT0gbGFzdENvbCAmJiAobGFzdFJvdyArIDEgPT0gY3VyUm93IHx8IGxhc3RSb3cgLSAxID09IGN1clJvdykpIHtcclxuICAgICAgICAgICAgLy8g5ZCM5YiXXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VyUm93ID09IGxhc3RSb3cgLSAxICYmIGN1ckNvbCA9PSBsYXN0Q29sICsgMSkge1xyXG4gICAgICAgICAgICAvLyDlt6bkuIpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJSb3cgPT0gbGFzdFJvdyArIDEgJiYgY3VyQ29sID09IGxhc3RDb2wgKyAxKSB7XHJcbiAgICAgICAgICAgIC8vIOWPs+S4ilxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1clJvdyA9PSBsYXN0Um93IC0gMSAmJiBjdXJDb2wgPT0gbGFzdENvbCAtIDEpIHtcclxuICAgICAgICAgICAgLy8g5bem5LiLXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VyUm93ID09IGxhc3RSb3cgKyAxICYmIGN1ckNvbCA9PSBsYXN0Q29sIC0gMSkge1xyXG4gICAgICAgICAgICAvLyDlj7PkuItcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5jliLbnu5Pmnpzlj6/op4bnur/mnaFcclxuICAgICAqL1xyXG4gICAgZHJhd0xpbmUoZW5kUG9zKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IHRoaXMubGluZVNob3dOb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgc3RhcnRQb3MgPSB0aGlzLnBsYXlEcmF3U2hvd05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5sYXN0RHJhd0NlbGwuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKSk7XHJcbiAgICAgICAgdGFyZ2V0UG9zID0gdGhpcy5saW5lU2hvd05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZW5kUG9zKTtcclxuICAgICAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHRhcmdldFBvcy54LCB0YXJnZXRQb3MueSk7XHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlkK/miJblhbPpl63pn7PmlYhcclxuICAgICAqL1xyXG4gICAgb3Blbk9yQ2xvc2VTb3VuZCgpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuY3VyU291bmRCR0lzQ2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VuZEJ0bi5jb2xvciA9IGNjLmNvbG9yKDE3MCwgMTcwLCAxNzAsIDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VuZEJ0bi5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1clNvdW5kQkdJc0Nsb3NlID0gIURhdGFNYW5hZ2VyLmN1clNvdW5kQkdJc0Nsb3NlO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5PckNsb3NlQkcoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljQnRuLmNvbG9yID0gY2MuY29sb3IoMTcwLCAxNzAsIDE3MCwgMjU1KTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNCdG4uY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2UgPSAhRGF0YU1hbmFnZXIuY3VyU291bmRJc0Nsb3NlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4vlgJLorqHml7ZcclxuICAgICAqL1xyXG4gICAgc3RhcnRUaW1lcigpIHtcclxuICAgICAgICBsZXQgc3BlZWQgPSAwLjAxO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLnRpbWVyRnVuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5kZXhUaW1lIC09IHNwZWVkO1xyXG4gICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5kZXhUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVzdWx0Rm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyVWkoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lck5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RpbWVUZXh0JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBNYXRoLmZsb29yKERhdGFNYW5hZ2VyLmluZGV4VGltZSkgKyAncyc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKERhdGFNYW5hZ2VyLnRpbWVyRnVuYywgc3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5YCS6K6h5pe2XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVRpbWVyVWkoKSB7XHJcbiAgICAgICAgY2MuZmluZCgnYmFyQmcvYmFyJywgdGhpcy50aW1lck5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IERhdGFNYW5hZ2VyLmluZGV4VGltZSAvIERhdGFNYW5hZ2VyLnN0YXJ0VGltZTtcclxuICAgICAgICB0aGlzLnRpbWVyTm9kZS5nZXRDaGlsZEJ5TmFtZSgndGltZVRleHQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IE1hdGguY2VpbChEYXRhTWFuYWdlci5pbmRleFRpbWUpICsgJ3MnO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0YUNvaW4oKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFsyXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDkvZnpop1cclxuICAgICAqL1xyXG4gICAgdXBkYXRlVXNlckNvaW4oKSB7XHJcbiAgICAgICAgbGV0IGxhYmxlTm9kZSA9IHRoaXMudXNlckNvaW5Ob2RlLmdldENoaWxkQnlOYW1lKCdjb2luTGFibGUnKTtcclxuICAgICAgICBjYy50d2VlbihsYWJsZU5vZGUpLnRvKDAuMSwgeyBzY2FsZTogMS4xIH0pLnRvKDAuMSwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xyXG4gICAgICAgIGxhYmxlTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICcnICsgRGF0YU1hbmFnZXIuY3VyU2NvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat57uT5p6cICovXHJcbiAgICBSZXN1bHRGbigpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuX2N1clNjb3JkID49IDIwMDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KHRydWUpO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5jdXJXaW5OdW0gKz0gMjAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaJk+W8gOaPkOekuiAqL1xyXG4gICAgb3BlblRpcE5vZGUoKSB7XHJcbiAgICAgICAgdGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKCdydWxlJykuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKCdydWxlJykpLnRvKDAuMiwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5o+Q56S65bGV56S6XHJcbiAgICAgKi9cclxuICAgIGhpZGVUaXBOb2RlKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpKVxyXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAwLjUgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKCdydWxlJykuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWxleekuue7k+aenFxyXG4gICAgICovXHJcbiAgICBzaG93UmVzdWx0KGlzV2luKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKERhdGFNYW5hZ2VyLnRpbWVyRnVuYyk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5kZXhUaW1lID0gRGF0YU1hbmFnZXIuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBvcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmIChpc1dpbikge1xyXG4gICAgICAgICAgICBsZXQgd2luTnVtTGFibGUgPSBjYy5maW5kKCd3aW4vd2luTnVtJywgdGhpcy5yZXN1bHROb2RlKTtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuY3VyV2luTnVtICs9IDEwMDtcclxuICAgICAgICAgICAgd2luTnVtTGFibGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnJyArIERhdGFNYW5hZ2VyLmN1cldpbk51bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0W2lzV2luID8gNCA6IDVdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICBsZXQgd2luTm9kZSA9IHRoaXMucmVzdWx0Tm9kZS5nZXRDaGlsZEJ5TmFtZSgnd2luJyk7XHJcbiAgICAgICAgbGV0IGxvc2VOb2RlID0gdGhpcy5yZXN1bHROb2RlLmdldENoaWxkQnlOYW1lKCdsb3NlJyk7XHJcbiAgICAgICAgd2luTm9kZS5hY3RpdmUgPSBpc1dpbjtcclxuICAgICAgICBsb3NlTm9kZS5hY3RpdmUgPSAhaXNXaW47XHJcbiAgICAgICAgbGV0IGN1ckFuaU5vZGUgPSBpc1dpbiA/IHdpbk5vZGUgOiBsb3NlTm9kZTtcclxuICAgICAgICB0aGlzLnJlc3VsdE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjdXJBbmlOb2RlLnNjYWxlID0gMC42O1xyXG4gICAgICAgIGN1ckFuaU5vZGUub3BhY2l0eSA9IDEwMDtcclxuXHJcbiAgICAgICAgY2MudHdlZW4oY3VyQW5pTm9kZSkudG8oMC4zLCB7IHNjYWxlOiAxLjEsIG9wYWNpdHk6IDI1NSB9KS50bygwLjMsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXree7k+aenOWxleekulxyXG4gICAgICovXHJcbiAgICBoaWRlUmVzdWx0Tm9kZSgpIHtcclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3VsdE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBEYXRhTWFuYWdlci5fY3VyU2NvcmQgPSAwO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLl9pbmRleFRpbWUgPSBEYXRhTWFuYWdlci5zdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lclVpKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
