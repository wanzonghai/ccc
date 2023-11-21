
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