"use strict";
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