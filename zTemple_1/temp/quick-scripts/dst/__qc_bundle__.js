
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
require('./assets/script/NativeJSBridgeIns');
require('./assets/script/StartGameLayer');
require('./assets/script/recordsItem');
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
var recordsItem_1 = require("./recordsItem");
var loaderManager_1 = require("./util/loaderManager");
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
        _this.PromoPage = null;
        _this.chartsPage = null;
        _this.chartsLayout = null;
        _this.iconPf = null;
        return _this;
        // update (dt) {}
    }
    /**加载预制体 */
    NewClass.prototype.loadCard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, loaderManager_1.default.getRes("recordsItem", "prefab", cc.Prefab)];
                    case 1:
                        _a.iconPf = _b.sent();
                        if (this.iconPf) {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NewClass.prototype.start = function () {
        this.loadCard();
        this.upadtaUserInfo();
        this.updateUserNum();
        this.listeBtnAni();
    };
    /**加载排行榜 */
    NewClass.prototype.lodingRecord = function () {
        for (var i = 1; i <= 8; i++) {
            this.instantNode(i);
        }
        this.chartsLayout.getComponent(cc.Layout).updateLayout();
    };
    NewClass.prototype.instantNode = function (index) {
        var itemNode = cc.instantiate(this.iconPf);
        this.chartsLayout.addChild(itemNode);
        itemNode.setPosition(0, 0);
        itemNode.getComponent(recordsItem_1.default).init(index);
    };
    /**
     * 游戏内按钮绑定事件
    */
    NewClass.prototype.btnEvent = function (event) {
        var name = event.target.name;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        switch (name) {
            case "btnStartGame":
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene("game");
                break;
            case "icon1":
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene("game");
                break;
            case "backBtn":
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene("a_startGame");
                break;
            case "tipBtn":
                this.openTipNode();
                break;
            case "closeTipBtn":
                this.hideTipNode();
                break;
            case "soundBtn":
                this.openOrCloseSound();
                break;
            case "shareBtn":
                this.shareFn();
                break;
            case "closePromoBtn":
                this.closePromo();
                break;
            case "closeChartsBtn":
                this.closeChart();
                break;
        }
    };
    /**绑定按钮动画 */
    NewClass.prototype.listeBtnAni = function () {
        this.contentLayout.children.forEach(function (e) {
            e.on(cc.Node.EventType.TOUCH_END, function () {
                cc.tween(e)
                    .to(0.2, { scale: 1.1 })
                    .to(0.1, { scale: 1 })
                    .start();
            });
        });
    };
    /**打开提示 */
    NewClass.prototype.openTipNode = function () {
        this.tipNode.getChildByName("rule").scale = 0.8;
        this.tipNode.active = true;
        cc.tween(this.tipNode.getChildByName("rule"))
            .to(0.2, { scale: 1 })
            .start();
    };
    /**
    * 关闭提示展示
   */
    NewClass.prototype.hideTipNode = function () {
        var _this = this;
        cc.tween(this.tipNode.getChildByName("rule"))
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.tipNode.active = false;
            _this.tipNode.getChildByName("rule").scale = 1;
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
        this.PromoPage.getChildByName("rule").scale = 1.2;
        this.PromoPage.active = true;
        cc.tween(this.PromoPage.getChildByName("rule"))
            .to(0.2, { scale: 1 })
            .start();
    };
    /**打开兑换奖励框 */
    NewClass.prototype.openCharts = function () {
        this.lodingRecord();
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        this.chartsPage.getChildByName("rule").scale = 1.2;
        this.chartsPage.active = true;
        cc.tween(this.chartsPage.getChildByName("rule"))
            .to(0.2, { scale: 1 })
            .start();
    };
    /**
  * 开启或关闭音效
 */
    NewClass.prototype.openOrCloseSound = function () {
        if (DataManager_1.default.curSoundIsClose) {
            this.soundBtn.children[0].color = cc.color(170, 170, 170, 255);
            this.soundBtn.children[1].active = true;
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.soundBtn.children[0].color = cc.color(255, 255, 255, 255);
            this.soundBtn.children[1].active = false;
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        DataManager_1.default.curSoundIsClose = !DataManager_1.default.curSoundIsClose;
    };
    /**更新用户信息 */
    NewClass.prototype.upadtaUserInfo = function () {
        this.userInfo.getChildByName("userID").getComponent(cc.Label).string = "ID:" + DataManager_1.default.userId;
        this.userInfo.getChildByName("scoreLaberl").getComponent(cc.Label).string = "" + DataManager_1.default.curWinNum;
    };
    /**更新用户房间人数 */
    NewClass.prototype.updateUserNum = function () {
        var array = util_1.default.getRandArray(100, 5000, this.contentLayout.children.length);
        this.contentLayout.children.forEach(function (e, index) {
            e.getChildByName("num").getComponent(cc.Label).string = array[index] + '';
        });
    };
    /**分享事件 */
    NewClass.prototype.shareFn = function () {
    };
    __decorate([
        property({ type: [cc.AudioClip], tooltip: "音效数组" })
    ], NewClass.prototype, "audioResList", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏提示页面" })
    ], NewClass.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "音效按钮节点" })
    ], NewClass.prototype, "soundBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "用户信息" })
    ], NewClass.prototype, "userInfo", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "icon节点" })
    ], NewClass.prototype, "contentLayout", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "兑换奖励框" })
    ], NewClass.prototype, "PromoPage", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "排行榜页面" })
    ], NewClass.prototype, "chartsPage", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "排行榜Layout" })
    ], NewClass.prototype, "chartsLayout", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxIYWxsTWFuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDZDQUF3QztBQUV4Qyw2Q0FBdUM7QUFDdkMsc0RBQWlEO0FBQ2pELG9DQUErQjtBQUV6QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdOQztRQTdNRyxrQkFBWSxHQUFtQixFQUFFLENBQUM7UUFHbEMsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUd2QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBR3hCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFHeEIsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFHN0IsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUcxQixrQkFBWSxHQUFZLElBQUksQ0FBQTtRQUVyQixZQUFNLEdBQWEsSUFBSSxDQUFBOztRQXFMOUIsaUJBQWlCO0lBQ3JCLENBQUM7SUFuTEksV0FBVztJQUNMLDJCQUFRLEdBQWQ7Ozs7Ozt3QkFDRyxLQUFBLElBQUksQ0FBQTt3QkFBVyxxQkFBTSx1QkFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQTNFLEdBQUssTUFBTSxHQUFJLFNBQTRELENBQUE7d0JBQzNFLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQzt5QkFFZDs7Ozs7S0FDSjtJQUdELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxF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QUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3ZDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ3hDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QscUJBQVcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxxQkFBVyxDQUFDLGVBQWUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsWUFBWTtJQUNaLGlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRSxLQUFLLEdBQUkscUJBQVcsQ0FBQyxNQUFNLENBQUE7UUFDakcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUUsRUFBRSxHQUFJLHFCQUFXLENBQUMsU0FBUyxDQUFBO0lBQzFHLENBQUM7SUFDRCxjQUFjO0lBQ2QsZ0NBQWEsR0FBYjtRQUNJLElBQUksS0FBSyxHQUFHLGNBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMxRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUMsS0FBSztZQUN4QyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDN0UsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsVUFBVTtJQUNWLDBCQUFPLEdBQVA7SUFFQSxDQUFDO0lBMU1EO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztrREFDZjtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQzs2Q0FDdEI7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUM7OENBQ3JCO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDOzhDQUNuQjtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQzttREFDaEI7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7K0NBQ25CO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2dEQUNsQjtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQztrREFDcEI7SUF4QlgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdONUI7SUFBRCxlQUFDO0NBaE5ELEFBZ05DLENBaE5xQyxFQUFFLENBQUMsU0FBUyxHQWdOakQ7a0JBaE5vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IEl0ZW1Ob2RlIGZyb20gXCIuL0l0ZW1Ob2RlXCI7XG5pbXBvcnQgcmVjb3JkSXRlbSBmcm9tIFwiLi9yZWNvcmRzSXRlbVwiO1xuaW1wb3J0IGxvYWRlck1hbmFnZXIgZnJvbSBcIi4vdXRpbC9sb2FkZXJNYW5hZ2VyXCI7XG5pbXBvcnQgdXRpbCBmcm9tIFwiLi91dGlsL3V0aWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQXVkaW9DbGlwXSx0b29sdGlwOlwi6Z+z5pWI5pWw57uEXCJ9KVxuICAgIGF1ZGlvUmVzTGlzdDogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLmuLjmiI/mj5DnpLrpobXpnaJcIn0pXG4gICAgdGlwTm9kZTogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLpn7PmlYjmjInpkq7oioLngrlcIn0pXG4gICAgc291bmRCdG46IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi55So5oi35L+h5oGvXCJ9KVxuICAgIHVzZXJJbmZvOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcImljb27oioLngrlcIn0pXG4gICAgY29udGVudExheW91dDogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLlhZHmjaLlpZblirHmoYZcIn0pXG4gICAgUHJvbW9QYWdlOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIuaOkuihjOamnOmhtemdolwifSlcbiAgICBjaGFydHNQYWdlOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIuaOkuihjOamnExheW91dFwifSlcbiAgICBjaGFydHNMYXlvdXQ6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBwdWJsaWMgaWNvblBmOmNjLlByZWZhYiA9IG51bGxcblxuICAgIFxuICAgICAvKirliqDovb3pooTliLbkvZMgKi9cbiAgICAgYXN5bmMgbG9hZENhcmQoKXtcbiAgICAgICAgdGhpcy5pY29uUGYgPSAgYXdhaXQgbG9hZGVyTWFuYWdlci5nZXRSZXMoXCJyZWNvcmRzSXRlbVwiLFwicHJlZmFiXCIsY2MuUHJlZmFiKVxuICAgICAgICBpZih0aGlzLmljb25QZil7XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubG9hZENhcmQoKVxuICAgICAgICB0aGlzLnVwYWR0YVVzZXJJbmZvKClcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyTnVtKClcbiAgICAgICAgdGhpcy5saXN0ZUJ0bkFuaSgpXG4gICAgfVxuXG4gICAgLyoq5Yqg6L295o6S6KGM5qacICovXG4gICAgbG9kaW5nUmVjb3JkKCl7XG4gICAgICAgIGZvcihsZXQgaT0xO2k8PTg7aSsrKXtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFudE5vZGUoaSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYXJ0c0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKVxuICAgIH1cbiAgICBpbnN0YW50Tm9kZShpbmRleDpudW1iZXIpe1xuICAgICAgICBsZXQgaXRlbU5vZGU6Y2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvblBmKVxuICAgICAgICB0aGlzLmNoYXJ0c0xheW91dC5hZGRDaGlsZChpdGVtTm9kZSlcbiAgICAgICAgaXRlbU5vZGUuc2V0UG9zaXRpb24oMCwwKVxuICAgICAgICBpdGVtTm9kZS5nZXRDb21wb25lbnQocmVjb3JkSXRlbSkuaW5pdChpbmRleClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/lhoXmjInpkq7nu5Hlrprkuovku7ZcbiAgICAqL1xuICAgIGJ0bkV2ZW50KGV2ZW50OiBjYy5FdmVudCkge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgICAgc3dpdGNoKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidG5TdGFydEdhbWVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMV07XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaWNvbjFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMV07XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFja0J0blwiOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYV9zdGFydEdhbWVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGlwQnRuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuVGlwTm9kZSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VUaXBCdG5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVUaXBOb2RlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic291bmRCdG5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5PckNsb3NlU291bmQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaGFyZUJ0blwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVGbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNsb3NlUHJvbW9CdG5cIjogXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVByb21vKClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNsb3NlQ2hhcnRzQnRuXCI6IFxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VDaGFydCgpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKue7keWumuaMiemSruWKqOeUuyAqL1xuICAgIGxpc3RlQnRuQW5pKCl7XG4gICAgICAgIHRoaXMuY29udGVudExheW91dC5jaGlsZHJlbi5mb3JFYWNoKGU9PntcbiAgICAgICAgICAgIGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCgpPT57XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMix7c2NhbGU6MS4xfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSx7c2NhbGU6MX0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKuaJk+W8gOaPkOekuiAqL1xuICAgIG9wZW5UaXBOb2RlKCl7XG4gICAgICAgIHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikuc2NhbGUgPSAwLjg7XG4gICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJydWxlXCIpKVxuICAgICAgICAudG8oMC4yLCB7c2NhbGU6IDF9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAgLyoqXG4gICAgICog5YWz6Zet5o+Q56S65bGV56S6XG4gICAgKi9cbiAgICAgaGlkZVRpcE5vZGUoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikpXG4gICAgICAgICAgICAudG8oMC4yLCB7c2NhbGU6IDAuNX0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikuc2NhbGUgPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIC8qKuWFs+mXreWFkeaNouWlluWKseahhiAqL1xuICAgIGNsb3NlUHJvbW8oKXtcbiAgICAgICAgdGhpcy5Qcm9tb1BhZ2UuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgbGV0IHJ1bGUgPSB0aGlzLlByb21vUGFnZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpXG4gICAgICAgIHJ1bGUuZ2V0Q2hpbGRCeU5hbWUoJ0VkaXRCb3gnKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nID0gJydcbiAgICB9XG5cbiAgICBjbG9zZUNoYXJ0KCl7XG4gICAgICAgIHRoaXMuY2hhcnRzUGFnZS5hY3RpdmUgPSBmYWxzZVxuICAgIH1cblxuICAgICAvKirmiZPlvIDlhZHmjaLlpZblirHmoYYgKi9cbiAgICAgb3BlblByb21vKCl7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICB0aGlzLlByb21vUGFnZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikuc2NhbGUgPSAxLjI7XG4gICAgICAgIHRoaXMuUHJvbW9QYWdlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuUHJvbW9QYWdlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKSlcbiAgICAgICAgLnRvKDAuMiwge3NjYWxlOiAxfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgIC8qKuaJk+W8gOWFkeaNouWlluWKseahhiAqL1xuICAgICBvcGVuQ2hhcnRzKCl7XG4gICAgICAgIHRoaXMubG9kaW5nUmVjb3JkKClcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgIHRoaXMuY2hhcnRzUGFnZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikuc2NhbGUgPSAxLjI7XG4gICAgICAgIHRoaXMuY2hhcnRzUGFnZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXJ0c1BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJydWxlXCIpKVxuICAgICAgICAudG8oMC4yLCB7c2NhbGU6IDF9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAgICAvKipcbiAgICAgKiDlvIDlkK/miJblhbPpl63pn7PmlYhcbiAgICAqL1xuICAgICAgIG9wZW5PckNsb3NlU291bmQoKSB7XG4gICAgICAgIGlmKERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJ0bi5jaGlsZHJlblswXS5jb2xvciA9IGNjLmNvbG9yKDE3MCwgMTcwLCAxNzAsIDI1NSk7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRCdG4uY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJ0bi5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDE7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSA9ICFEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2U7XG4gICAgfVxuXG4gICAgLyoq5pu05paw55So5oi35L+h5oGvICovXG4gICAgdXBhZHRhVXNlckluZm8oKXtcbiAgICAgICAgdGhpcy51c2VySW5mby5nZXRDaGlsZEJ5TmFtZShcInVzZXJJRFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XCJJRDpcIiArICBEYXRhTWFuYWdlci51c2VySWRcbiAgICAgICAgdGhpcy51c2VySW5mby5nZXRDaGlsZEJ5TmFtZShcInNjb3JlTGFiZXJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cIlwiICsgIERhdGFNYW5hZ2VyLmN1cldpbk51bVxuICAgIH1cbiAgICAvKirmm7TmlrDnlKjmiLfmiL/pl7TkurrmlbAgKi9cbiAgICB1cGRhdGVVc2VyTnVtKCl7XG4gICAgICAgIGxldCBhcnJheSA9IHV0aWwuZ2V0UmFuZEFycmF5KDEwMCw1MDAwLHRoaXMuY29udGVudExheW91dC5jaGlsZHJlbi5sZW5ndGgpXG4gICAgICAgIHRoaXMuY29udGVudExheW91dC5jaGlsZHJlbi5mb3JFYWNoKChlLGluZGV4KSA9PntcbiAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhcnJheVtpbmRleF0gKyAnJ1xuICAgICAgICB9KVxuICAgIH1cbiAgIFxuICAgIC8qKuWIhuS6q+S6i+S7tiAqL1xuICAgIHNoYXJlRm4oKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemNode = /** @class */ (function (_super) {
    __extends(ItemNode, _super);
    function ItemNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imgSp = null;
        /**类型 */
        _this.itemId = 0;
        /**当前节点位置 */
        _this.itemIndex = -1;
        return _this;
    }
    ItemNode.prototype.start = function () {
    };
    /**初始化 */
    ItemNode.prototype.init = function (num, posIndex) {
        this.itemId = num;
        this.itemIndex = posIndex;
        if (num == 0) {
            this.imgSp.string = '';
        }
        else {
            this.imgSp.string = num + '';
        }
    };
    __decorate([
        property(cc.Label)
    ], ItemNode.prototype, "imgSp", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxJdGVtTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlDQztRQTlCRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBSXRCLFFBQVE7UUFDRCxZQUFNLEdBQVUsQ0FBQyxDQUFBO1FBRXhCLFlBQVk7UUFDTCxlQUFTLEdBQVUsQ0FBQyxDQUFDLENBQUE7O0lBc0JoQyxDQUFDO0lBbkJHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsU0FBUztJQUNGLHVCQUFJLEdBQVgsVUFBWSxHQUFXLEVBQUMsUUFBZTtRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtRQUN6QixJQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUM7WUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBSSxFQUFFLENBQUE7U0FDMUI7YUFBSTtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUE7U0FDL0I7SUFJTCxDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0c7SUFITCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUM1QjtJQUFELGVBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBaUNqRDtrQkFqQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgdXRpbCBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGltZ1NwOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgXHJcblxyXG4gICAgLyoq57G75Z6LICovXHJcbiAgICBwdWJsaWMgaXRlbUlkOm51bWJlciA9IDBcclxuXHJcbiAgICAvKirlvZPliY3oioLngrnkvY3nva4gKi9cclxuICAgIHB1YmxpYyBpdGVtSW5kZXg6bnVtYmVyID0gLTFcclxuICAgXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5Yid5aeL5YyWICovXHJcbiAgICBwdWJsaWMgaW5pdChudW06IG51bWJlcixwb3NJbmRleDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXRlbUlkID0gbnVtO1xyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gcG9zSW5kZXhcclxuICAgICAgICBpZihudW0gPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nU3Auc3RyaW5nID0gICcnXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nU3Auc3RyaW5nID0gbnVtICsgJydcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG59XHJcbiJdfQ==
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
    /**
     * 缓动更新事件
     * @param time 缓动运动时间
     * @param updateFunc 每帧调用的事件会传入百分比
    */
    util.prototype.tweenUpdate = function (time, updateFunc) {
        var startObj = { num: 0 };
        var endObj = { num: 100 };
        var tw = cc.tween(startObj)
            .to(time, endObj, { progress: function (start, end, current, ratio) {
                updateFunc(ratio);
                return;
            } });
        tw.start();
        return tw;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFx1dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUFBLGlCQTBHQztRQXhGRzs7VUFFRTtRQUNGLFlBQU8sR0FBRyxVQUFDLEdBQVE7WUFBUixvQkFBQSxFQUFBLFFBQVE7WUFDZixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbEIsY0FBYztZQUNkLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUMxQyxNQUFNLEdBQUcsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBZ0IsV0FBVztnQkFDbkUsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7b0JBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ25DLENBQWdCLFlBQVk7YUFDaEM7aUJBQUs7Z0JBQ0YsTUFBTSxHQUFHLEdBQUcsQ0FBQTthQUNmO1lBQUEsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQTtJQXdFTCxDQUFDO0lBdkdHLDRCQUE0QjtJQUNyQix3QkFBUyxHQUFoQixVQUFpQixHQUFHLEVBQUUsR0FBRztRQUNyQixJQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUEsWUFBWTtJQUNaLDJCQUFZLEdBQVosVUFBYSxHQUFVLEVBQUMsR0FBVSxFQUFDLE1B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b0I7UUFDMUMsSUFBSSxRQUFRLEdBQUcsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDeEIsSUFBSSxNQUFNLEdBQUcsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUM7UUFDeEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdEIsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsVUFBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLE9BQWUsRUFBRSxLQUFhO2dCQUNwRixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xCLE9BQU07WUFDVixDQUFDLEVBQUMsQ0FBQyxDQUFBO1FBQ0gsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUE7SUFDakIsQ0FBQztJQXZHc0IsYUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUF5R2pELFdBQUM7Q0ExR0QsQUEwR0MsSUFBQTtBQUNELGtCQUFlLElBQUksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyB1dGlse1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2UgPSBuZXcgdXRpbCgpO1xuXG4gICAgLyoqIOiOt+WPluS4pOS4quaVsOmXtOeahOmaj+acuuWAvCjljIXmi6xtaW4gbWF4KSAqL1xuICAgIHB1YmxpYyBnZXRSYW5kb20obWluLCBtYXgpIHtcbiAgICAgICAgaWYobWluID09IC0xIHx8IG1heCA9PSAtMSkgcmV0dXJuO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9XG5cbiAgICAgLyoq6ZqP5py655Sf5oiQ5pWw57uEICovXG4gICAgIGdldFJhbmRBcnJheShtaW46bnVtYmVyLG1heDpudW1iZXIsbGVuZ3RoOm51bWJlcik6QXJyYXk8bnVtYmVyPntcbiAgICAgICAgbGV0IE51bWJlckFycmF5OkFycmF5PG51bWJlcj4gPSBbXVxuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspe1xuICAgICAgICAgICAgTnVtYmVyQXJyYXkucHVzaCh0aGlzLmdldFJhbmRvbShtaW4sbWF4KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyQXJyYXlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7Hmi7fotJ1cbiAgICAqL1xuICAgIGNvcHlPYmogPSAob2JqID0ge30pID0+IHsgICAgICAgICAgICAvL+WPmOmHj+WFiOe9ruepulxuICAgICAgICBsZXQgbmV3b2JqID0gbnVsbDsgIFxuXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6ZyA6KaB57un57ut6L+b6KGM6YCS5b2SXG4gICAgICAgIGlmICh0eXBlb2YgKG9iaikgPT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdvYmogPSBvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge307ICAgICAgICAgICAgICAgIC8v6L+b6KGM5LiL5LiA5bGC6YCS5b2S5YWL6ZqGXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICAgICAgICAgIG5ld29ialtpXSA9IHRoaXMuY29weU9iaihvYmpbaV0pXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgIC8v5aaC5p6c5LiN5piv5a+56LGh55u05o6l6LWL5YC8XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIG5ld29iaiA9IG9ialxuICAgICAgICB9OyAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3b2JqOyAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpmo/mnLrojrflj5bmlbDnu4TkuK3mjIflrprmlbDph4/lhYPntKBcbiAgICAgKiBAcGFyYW0gbGlzdCDmj5DkvpvmlbDmja7nmoTmlbDnu4RcbiAgICAgKiBAcGFyYW0gaXRlbU51bSDojrflj5blhYPntKDmlbDph48o5b2T6ZyA6KaB5YWD57Sg5LiN6YeN5aSN5pe25q2k5YC85aSn5LqO5pWw57uE6ZW/5bqm5Lya5omT5Lmx6L+U5Zue5pW05Liq5pWw57uEKVxuICAgICAqIEBwYXJhbSBpc1JlcGV0aXRpb24g6L+U5Zue5YWD57Sg5piv5ZCm5YWB6K646YeN5aSNXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0UmFuZG9tTGlzdEl0bWUobGlzdDogQXJyYXk8YW55PiwgaXRlbU51bTogbnVtYmVyLCBpc1JlcGV0aXRpb246IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgY29weUxpc3QgPSB0aGlzLmNvcHlPYmoobGlzdCk7XG4gICAgICAgIGxldCByYW5kb21MaXN0ID0gW107XG5cbiAgICAgICAgbGlzdC5zcGxpY2VcblxuICAgICAgICBpZihpc1JlcGV0aXRpb24pIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1OdW07IGkrKykge1xuICAgICAgICAgICAgICAgIHJhbmRvbUxpc3QucHVzaChjb3B5TGlzdFt0aGlzLmdldFJhbmRvbSgwLCBjb3B5TGlzdC5sZW5ndGgtMSldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGdldEl0ZW0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY29weUxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNvcHlMaXN0LnNwbGljZSh0aGlzLmdldFJhbmRvbSgwLCBjb3B5TGlzdC5sZW5ndGgtMSksIDEpWzBdO1xuXG4gICAgICAgICAgICAgICAgcmFuZG9tTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmKC0taXRlbU51bSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0SXRlbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0SXRlbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJhbmRvbUxpc3Q7XG4gICAgfVxuICAgICAvKipcbsKgIMKgIMKgKiDnvZHmoLzoo4HliIfnurnnkIZcbsKgIMKgICovXG4gICAgZ3JpZEN1dFNwcml0ZUZyYW1lKHNmOiBjYy5TcHJpdGVGcmFtZSwgcm93TnVtOiBudW1iZXIsIGNvbE51bTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzcCA9IHNmLmdldFRleHR1cmUoKTtcbiAgICAgICAgbGV0IHBpY1dpZHRoID0gc3Aud2lkdGgvY29sTnVtO1xuICAgICAgICBsZXQgcGljSGVpZ2h0ID0gc3AuaGVpZ2h0L3Jvd051bTtcbiAgICAgICAgbGV0IHNmTGlzdDogQXJyYXk8QXJyYXk8Y2MuU3ByaXRlRnJhbWU+PiA9IFtdO1xuICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCByb3dOdW07IGkrKykge1xuICAgICAgICAgICAgc2ZMaXN0LnB1c2goW10pO1xuICAgICAgICAgICAgZm9yKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgY29sTnVtOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3V0UGljID0gbmV3IGNjLlNwcml0ZUZyYW1lKHNwKTtcbiAgICAgICAgICAgICAgICBjdXRQaWMuc2V0UmVjdChuZXcgY2MuUmVjdChqICogcGljV2lkdGgsIGkqcGljSGVpZ2h0LCBwaWNXaWR0aCwgcGljSGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgc2ZMaXN0W2ldLnB1c2goY3V0UGljKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2ZMaXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe8k+WKqOabtOaWsOS6i+S7tlxuICAgICAqIEBwYXJhbSB0aW1lIOe8k+WKqOi/kOWKqOaXtumXtFxuICAgICAqIEBwYXJhbSB1cGRhdGVGdW5jIOavj+W4p+iwg+eUqOeahOS6i+S7tuS8muS8oOWFpeeZvuWIhuavlFxuICAgICovXG4gICAgdHdlZW5VcGRhdGUodGltZTogbnVtYmVyLCB1cGRhdGVGdW5jOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgc3RhcnRPYmogPSB7bnVtOiAwfTtcbiAgICAgICAgbGV0IGVuZE9iaiA9IHtudW06IDEwMH07XG4gICAgICAgIGxldCB0dyA9IGNjLnR3ZWVuKHN0YXJ0T2JqKVxuICAgICAgICAgICAgLnRvKHRpbWUsIGVuZE9iaiwge3Byb2dyZXNzOiAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYyhyYXRpbyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9fSlcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHdcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IHV0aWwuaW5zdGFuY2U7Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7UUFHSSxlQUFlO1FBQ2Ysb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBZTtRQUNmLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxnQkFBZ0I7UUFDaEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsVUFBVTtRQUNWLFdBQU0sR0FBVyxPQUFPLENBQUM7UUFFekIsV0FBVztRQUNKLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFN0IsWUFBWTtRQUNMLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFN0IsVUFBVTtRQUNILFlBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQztRQUU1QixZQUFZO1FBQ0wsYUFBUSxHQUFZLElBQUksQ0FBQztRQUVoQyxrQkFBa0I7UUFDbEIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBYW5DLGVBQWU7UUFDZixvQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBRTdCLGFBQWE7UUFDYixlQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUUvQixrQkFBa0I7UUFDbEIsaUJBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsVUFBVTtRQUNWLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsVUFBVTtRQUNWLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFpQnhCLGNBQWM7UUFDZCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLE1BQU07UUFDTixXQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFYixrQkFBYSxHQUFXLEVBQUUsQ0FBQztJQWlDdEMsQ0FBQztJQWhGRyxzQkFBVyxpQ0FBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBb0IsR0FBRztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdEM7UUFDTCxDQUFDOzs7T0FQQTtJQXdCRCxzQkFBVyxrQ0FBUzthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBcUIsR0FBRztZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2xDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ3ZCLGNBQWM7b0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNoRDthQUNKO1FBQ0wsQ0FBQzs7O09BWEE7SUFxQkQ7O09BRUc7SUFDSSxtREFBNkIsR0FBcEM7UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsd0NBQXdDLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDekc7U0FDSjtJQUNMLENBQUM7SUFDTSxrREFBNEIsR0FBbkM7UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsd0NBQXdDLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDMUc7U0FDSjtJQUNMLENBQUM7SUFDTSwwQ0FBb0IsR0FBM0I7UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsd0NBQXdDLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2xHO1NBQ0o7SUFDTCxDQUFDO0lBQ00sMENBQW9CLEdBQTNCO1FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNoQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHdDQUF3QyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNwRztTQUNKO0lBQ0wsQ0FBQztJQTVHc0Isb0JBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBNkd4RCxrQkFBQztDQTlHRCxBQThHQyxJQUFBO0FBRUQsa0JBQWUsV0FBVyxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGF5ZXIgZnJvbSAnLi9HYW1lTGF5ZXInO1xyXG5cclxuY2xhc3MgRGF0YU1hbmFnZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZSA9IG5ldyBEYXRhTWFuYWdlcigpO1xyXG5cclxuICAgIC8qKiDlvZPliY3mmK/lkKbmkq3mlL7pn7PmlYggKi9cclxuICAgIGN1clNvdW5kSXNDbG9zZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIOW9k+WJjeaYr+WQpuaSreaUvumfs+aViCAqL1xyXG4gICAgY3VyU291bmRCR0lzQ2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiDlvZPliY3mmK/lkKbmuLjmiI/ov5DooYzkuK0gKi9cclxuICAgIGN1ckdhbWVJc1J1bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKueUqOaIt0lEICovXHJcbiAgICB1c2VySWQ6IHN0cmluZyA9ICcxMDA4Nic7XHJcblxyXG4gICAgLyoq5b2T5YmN55qE5YiG5pWwICovXHJcbiAgICBwdWJsaWMgX2N1clNjb3JkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKiDlvZPliY3lsYDotaLliIYgKi9cclxuICAgIHB1YmxpYyBjdXJXaW5OdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq6L2s55uY57uT5p6cICovXHJcbiAgICBwdWJsaWMgcmFuZFJlczogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgLyoq5b2T5YmN6L2s55uY54q25oCBICovXHJcbiAgICBwdWJsaWMgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKiDlhYPntKDlsI/kuInliqjnlLvmmK/lkKbmkq3mlL7kuK0gKi9cclxuICAgIGl0ZW1IaWRlQW5pSXNQbGF5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJTY29yZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VyU2NvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjdXJTY29yZChudW0pIHtcclxuICAgICAgICB0aGlzLl9jdXJTY29yZCA9IG51bTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lTGF5ZXJTY3IpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudXBkYXRlVXNlckNvaW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOW9k+WJjeS4reWlluWFg+e0oOS4i+aghyAqL1xyXG4gICAgY3VyV2luSXRtZUluZGV4OiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICAvKiog5b2T5YmN5Lit5aWW5pWw5o2uICovXHJcbiAgICBjdXJXaW5EYXRhOiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG4gICAgLyoqIGdhbWVMYXllcuiEmuacrCAqL1xyXG4gICAgZ2FtZUxheWVyU2NyOiBHYW1lTGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKuWIneWni+aXtumXtCAqL1xyXG4gICAgc3RhcnRUaW1lOiBudW1iZXIgPSAzMDtcclxuXHJcbiAgICAvKirlvZPliY3ml7bpl7QgKi9cclxuICAgIF9pbmRleFRpbWU6IG51bWJlciA9IDMwO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaW5kZXhUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBpbmRleFRpbWUobnVtKSB7XHJcbiAgICAgICAgdGhpcy5faW5kZXhUaW1lID0gbnVtO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVMYXllclNjcikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVMYXllclNjci51cGRhdGVUaW1lclVpKCk7XHJcbiAgICAgICAgICAgIGlmIChudW0gPT0gdGhpcy5zdGFydFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIOmHjeaWsOiuvue9ruS6i+S7tumHjee9ruWumuaXtuWZqFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudW5zY2hlZHVsZSh0aGlzLnRpbWVyRnVuYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWumuaXtuWZqOi/kOihjOaWueazlSAqL1xyXG4gICAgdGltZXJGdW5jID0gbnVsbDtcclxuXHJcbiAgICAvL+aUvue9ruaVsOmHj1xyXG4gICAgdGlwTnVtOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBwdWJsaWMgQWRqdXN0X3N0YXR1czogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHb29nbGUgQWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkR29vZ2xlUmV3YXJkZWRWaWRlb0FkSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xyXG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCgndm94YXZ2L2xxdHpmY2ttei9mYmNiamZlaXAvQXBwQWN0aXZpdHknLCAnc2hvd1Jld2FyZGVkVmlkZW8nLCAnKClWJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRHb29nbGVJbnRlcnN0aXRpYWxBZEhhbmRsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoJ3ZveGF2di9scXR6ZmNrbXovZmJjYmpmZWlwL0FwcEFjdGl2aXR5JywgJ3Nob3dJbnRlcnN0aXRpYWxBZCcsICcoKVYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBhZEdvb2dsZU9wZW5BZEhhbmRsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoJ3ZveGF2di9scXR6ZmNrbXovZmJjYmpmZWlwL0FwcEFjdGl2aXR5JywgJ3Nob3dPcGVuQWQnLCAnKClWJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRBbmFseXNlQWp1c3RIYW5kbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKCd2b3hhdnYvbHF0emZja216L2ZiY2JqZmVpcC9BcHBBY3Rpdml0eScsICdhbmFseXNlQWp1c3QnLCAnKClWJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFNYW5hZ2VyLmluc3RhbmNlO1xyXG4iXX0=
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
            var rule = _this.page.getChildByName('rule2');
            cc.tween(rule).to(0.2, { scale: 1 }).start();
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
        var array = [0.01, 0.009, 0.009, 0.009, 0.009];
        var speed = 0.02;
        this.schedule(function () {
            pg.getComponent(cc.ProgressBar).progress += array[util_1.default.getRandom(0, array.length - 1)];
            if (pg.getComponent(cc.ProgressBar).progress >= 1) {
                pg.getComponent(cc.ProgressBar).progress = 1;
                _this.unscheduleAllCallbacks();
                cc.director.loadScene('game');
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
        var _this = this;
        var rule = this.page.getChildByName('rule2');
        cc.tween(rule)
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.page.active = false;
        })
            .start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTdGFydEdhbWVMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFDeEMsb0NBQStCO0FBRXpCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBMkdDO1FBekdHLGtCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUdsQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFbkIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUE4RnRDLENBQUM7SUE1RkcsOEJBQUssR0FBTDtRQUFBLGlCQTBCQztRQXpCRyxJQUFJLENBQUMscUJBQVcsQ0FBQyxlQUFlLEVBQUU7WUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxD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RyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRVMsa0NBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUF4R0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzt3REFDRDtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDUztJQVhWLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EyR2xDO0lBQUQscUJBQUM7Q0EzR0QsQUEyR0MsQ0EzRzJDLEVBQUUsQ0FBQyxTQUFTLEdBMkd2RDtrQkEzR29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbC91dGlsJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdGFydEdhbWVMYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQXVkaW9DbGlwXSB9KVxyXG4gICAgYXVkaW9SZXNMaXN0OiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hlY2tCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGFnZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2RpbmdQYWdlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzUG9saWN5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2UpIHtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoJ3RpdGxlJykub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgcnVsZSA9IHRoaXMucGFnZS5nZXRDaGlsZEJ5TmFtZSgncnVsZTInKTtcclxuICAgICAgICAgICAgY2MudHdlZW4ocnVsZSkudG8oMC4yLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qKueUn+aIkOeUqOaIt0lEICovXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLnVzZXJJZCA9PSAnMTAwODYnKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VySWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERhdGFNYW5hZ2VyLnVzZXJJZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmV3VXNlcklkICs9IHV0aWwuZ2V0UmFuZG9tKDAsIDkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLnVzZXJJZCA9IG5ld1VzZXJJZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9kaW5nUGFnZS5nZXRDaGlsZEJ5TmFtZSgncGcnKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hdXRvSW50b0dhbWUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXV0b0ludG9HYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9kaW5nUGFnZS5hY3RpdmUpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5pc1BvbGljeSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoU2NlbmUoKTtcclxuICAgICAgICB9LCA1KTtcclxuICAgIH1cclxuICAgIHN3aXRjaFNjZW5lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUG9saWN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFsyXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZGluZ1BhZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydExvZGluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaGVja0J0bilcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMuY2hlY2tCdG4ucG9zaXRpb24ueCwgdGhpcy5jaGVja0J0bi5wb3NpdGlvbi55ICsgNSwgMSkgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMuY2hlY2tCdG4ucG9zaXRpb24ueCwgdGhpcy5jaGVja0J0bi5wb3NpdGlvbi55IC0gNSwgMSkgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKuW8gOWQr+WKoOi9vemhtemdoiAqL1xyXG4gICAgc3RhcnRMb2RpbmcoKSB7XHJcbiAgICAgICAgbGV0IHBnID0gdGhpcy5sb2RpbmdQYWdlLmdldENoaWxkQnlOYW1lKCdwZycpO1xyXG4gICAgICAgIGxldCBhcnJheSA9IFswLjAxLCAwLjAwOSwgMC4wMDksIDAuMDA5LCAwLjAwOV07XHJcbiAgICAgICAgbGV0IHNwZWVkID0gMC4wMjtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgcGcuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcyArPSBhcnJheVt1dGlsLmdldFJhbmRvbSgwLCBhcnJheS5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgICAgIGlmIChwZy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHBnLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHNwZWVkKTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlKCkge1xyXG4gICAgICAgIGxldCBib3JkZXIgPSB0aGlzLmNoZWNrQnRuLmdldENoaWxkQnlOYW1lKCdib3JkZXInKTtcclxuICAgICAgICBib3JkZXIuY2hpbGRyZW5bMF0uYWN0aXZlID0gIWJvcmRlci5jaGlsZHJlblswXS5hY3RpdmU7XHJcbiAgICAgICAgdGhpcy5pc1BvbGljeSA9ICF0aGlzLmlzUG9saWN5O1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQYWdlKCkge1xyXG4gICAgICAgIGxldCBydWxlID0gdGhpcy5wYWdlLmdldENoaWxkQnlOYW1lKCdydWxlMicpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHJ1bGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDAuNSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNoZWNrQnRuLmdldENoaWxkQnlOYW1lKCd0aXRsZScpLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoJ2JvcmRlcicpLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxkZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVTtBQUNWLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNoQiwyQ0FBTSxDQUFBO0lBQ04sdUNBQUksQ0FBQTtJQUNKLHlDQUFLLENBQUE7SUFDTCx5Q0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBS25CO0FBRUQsUUFBUTtBQUNSLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQiwrQ0FBTyxDQUFBO0lBQ1AscURBQVUsQ0FBQTtJQUNWLGlEQUFRLENBQUE7SUFDUixtREFBUyxDQUFBO0FBQ2IsQ0FBQyxFQUxXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBS3hCO0FBRUQsSUFBWSxPQU1YO0FBTkQsV0FBWSxPQUFPO0lBQ2YsbURBQWUsQ0FBQTtJQUNmLG1EQUFXLENBQUE7SUFDWCxtREFBVyxDQUFBO0lBQ1gsK0NBQVMsQ0FBQTtJQUNULHlDQUFNLENBQUE7QUFDVixDQUFDLEVBTlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBTWxCO0FBRUQsSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ2xCLDZDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0lBQ2IseURBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFPRCxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDakIsMkNBQVMsQ0FBQTtJQUNULHlDQUFRLENBQUE7QUFDWixDQUFDLEVBSFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFHcEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoq5omR5YWL57G75Z6LICovXHJcbmV4cG9ydCBlbnVtIEl0ZW1UeXBle1xyXG4gICAgU3F1YXJlLFxyXG4gICAgUGx1bSxcclxuICAgIEhlYXJ0LFxyXG4gICAgU3BhZGVcclxufVxyXG5cclxuLyoq5pa55ZCRICovXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvblR5cGUge1xyXG4gICAgVG9wID0gMSxcclxuICAgIEJvdHRvbSA9IDIsXHJcbiAgICBMZWZ0ID0gMyxcclxuICAgIFJpZ2h0ID0gNCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXZlbnRJZCB7XHJcbiAgICBjcmVhdFBvcmtlciA9IDAsXHJcbiAgICBSYW5pbmdXaGVlbCxcclxuICAgIFVwZGF0YVNjb3JkLFxyXG4gICAgUmVtYmVyTnVtLFxyXG4gICAgUmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFdoZWVsU3RhdGUge1xyXG4gICAgU3RhbmQgPSAwLFxyXG4gICAgQWNlbGVyYXJhID0gMSxcclxuICAgIERlc2FjZWxlcmFyID0gMixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaGVlbERhdGEge1xyXG4gICAgdHlwZTogV2hlZWxUeXBlLFxyXG4gICAgbnVtOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gV2hlZWxUeXBlIHtcclxuICAgIEJldEx2ID0gMSxcclxuICAgIFNwaW4gPSAyLFxyXG59Il19
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
        _this.oulineColor = cc.color(0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxKdW1wU3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUZDO1FBOUVHLFNBQUcsR0FBVyxFQUFFLENBQUM7UUFHakIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLCtDQUErQztRQUMvQyxpREFBaUQ7UUFHakQsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFZixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDOztRQTZEL0MsaUJBQWlCO0lBQ3JCLENBQUM7SUExREcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQUEsaUJBeUJDO1FBeEJHLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUVuRCxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7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QUUsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUM7NkNBQzVCO0lBTXBCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDO2lEQUNwQjtJQWZQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRjVCO0lBQUQsZUFBQztDQWpGRCxBQWlGQyxDQWpGcUMsRUFBRSxDQUFDLFNBQVMsR0FpRmpEO2tCQWpGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dG9vbHRpcDogXCLpnIDopoHot7PliqjnmoTlrZfnrKbkuLJcIn0pXG4gICAgc3RyOiBTdHJpbmcgPSBcIlwiO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCLlrZfnrKblpKflsI9cIn0pXG4gICAgZm9udFNpemU6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIuWNleS4quWtl+espui3s+WKqOaXtumXtFwifSlcbiAgICBhbmlUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gQHByb3BlcnR5KHt0eXBlOiBjYy5Db2xvciwgdG9vbHRpcDogXCLmj4/ovrnpopzoibJcIn0pXG4gICAgLy8gb3VsaW5lQ29sb3I6IGNjLkNvbG9yID0gY2MuY29sb3IoMjU1LDI1NSwyNTUpO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCLmj4/ovrnlrr3luqZcIn0pXG4gICAgb3VsaW5lV2lkdGg6IG51bWJlciA9IDE7XG5cbiAgICBwcml2YXRlICBpc091bGluOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgb3VsaW5lQ29sb3I6Y2MuQ29sb3IgPSBjYy5jb2xvcigwLDAsMCk7XG5cblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IExheW91dCA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuTGF5b3V0KTtcblxuICAgICAgICBMYXlvdXQudHlwZSA9IGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw7XG4gICAgICAgIExheW91dC5yZXNpemVNb2RlID0gY2MuTGF5b3V0LlJlc2l6ZU1vZGUuQ09OVEFJTkVSO1xuXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8dGhpcy5zdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdHIgPSB0aGlzLnN0cltpXTtcbiAgICAgICAgICAgIGxldCBsYWJlbE5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbGFiZWxOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZih0aGlzLmlzT3VsaW4pe1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbE91dExpbmUgPSBsYWJlbE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XG4gICAgICAgICAgICAgICAgbGFiZWxPdXRMaW5lLmNvbG9yID0gdGhpcy5vdWxpbmVDb2xvclxuICAgICAgICAgICAgICAgIGxhYmVsT3V0TGluZS53aWR0aCA9IHRoaXMub3VsaW5lV2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gc3RyO1xuICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGxhYmVsTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYXlTdHJKdW1wKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5U3RySnVtcCgpO1xuICAgICAgICB9LCB0aGlzLmFuaVRpbWUqdGhpcy5zdHIubGVuZ3RoIC8gMiArIDAuMik7XG4gICAgfVxuXG4gICAgcGxheVN0ckp1bXAoKSB7XG4gICAgICAgIGxldCBqdW1wVGltZSA9IHRoaXMuYW5pVGltZS8yO1xuICAgICAgICBsZXQgc3RySW5kZXggPSAwO1xuICAgICAgICBsZXQganVtcFN0ciA9IChsYWJlbE5vZGU6IGNjLk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGxhYmVsTm9kZSlcbiAgICAgICAgICAgICAgICAuc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oanVtcFRpbWUsIHt5OiB0aGlzLmZvbnRTaXplLzJ9KSxcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50byhqdW1wVGltZS80KjMsIHt5OiAtdGhpcy5mb250U2l6ZS8zfSksXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oanVtcFRpbWUvNCwge3k6IDB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAvLyAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKHN0ckluZGV4IDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aC0xKSB7IC8vIOacquWIsOacgOWQjuS4gOS4quWtl+esplxuICAgICAgICAgICAgICAgIHN0ckluZGV4Kys7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBqdW1wU3RyKHRoaXMubm9kZS5jaGlsZHJlbltzdHJJbmRleF0pO1xuICAgICAgICAgICAgICAgIH0sIGp1bXBUaW1lLzIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAganVtcFN0cih0aGlzLm5vZGUuY2hpbGRyZW5bc3RySW5kZXhdKTtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
        _this.audioResList = [];
        _this.iconPf = null;
        _this.index = 0;
        _this.colNum = 4;
        _this.rowNum = 4;
        /** 已绘制线数组 */
        _this.alreadyDrawLineList = [];
        /** 当前绘制线数组 */
        _this.curDrawLineItmeIndex = [];
        _this.list = [];
        return _this;
    }
    /**加载预制体 */
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
        // this.loadCard()
        // this.listerEvent()
    };
    GameLayer.prototype.onEnable = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.schedule(function () {
                if (DataManager_1.default.Adjust_status == '')
                    return;
                if (DataManager_1.default.Adjust_status.toLowerCase() !== 'organic') {
                    // 字符串不为空且不为 "organic" 或 "Organic"，执行你的操作
                    DataManager_1.default.adAnalyseAjustHandle();
                }
                else {
                    DataManager_1.default.adGoogleOpenAdHandle();
                }
                _this.unscheduleAllCallbacks();
            }, 1.5);
        }, 0.5);
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
                DataManager_1.default.adGoogleInterstitialAdHandle();
                this.playGame();
                break;
            case 'btnReturn':
                DataManager_1.default.adGoogleInterstitialAdHandle();
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('a_startGame');
                break;
            case 'btNextGame':
            case 'btStartOver':
                DataManager_1.default.adGoogleInterstitialAdHandle();
                this.hideResultNode();
                break;
            case 'btExit':
                DataManager_1.default.adGoogleInterstitialAdHandle();
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('a_startGame');
                break;
            case 'tipBtn':
                DataManager_1.default.adGoogleInterstitialAdHandle();
                this.openTipNode();
                break;
            case 'adsBtn':
                DataManager_1.default.adGoogleRewardedVideoAdHandle();
                break;
            case 'closeTipBtn':
                DataManager_1.default.adGoogleInterstitialAdHandle();
                this.hideTipNode();
                break;
            case 'btnSound':
                this.openOrCloseSound();
                break;
            case 'musicBtn':
                this.openOrCloseBG();
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
        var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        var randomList = util_1.default.getRandomListItme(numArray, 20, false);
        this.list = randomList;
        // for(let i=0;i<randomList.length;i++){
        //     this.creatLaber(i,randomList[i])
        // }
        this.creatLaber();
        for (var i = 0; i < randomList.length; i++) {
            this.creatFish(i, randomList[i], this.gzPos.children[i]);
        }
    };
    GameLayer.prototype.creatFish = function (index, randoList, Node) {
        var _this = this;
        Node.getComponent(cc.Sprite).spriteFrame = this.itemResList[randoList];
        Node.on(cc.Node.EventType.TOUCH_END, function () {
            console.log('当前点击的', randoList, DataManager_1.default.tipNum);
            if (randoList == DataManager_1.default.tipNum) {
                /**消除成功 */
                _this.unschedule(_this.callTimer);
                _this.creatLaber();
                DataManager_1.default._curScord += 100;
                _this.updataCoin();
                var index_1 = util_1.default.getRandom(0, 15);
                randoList = index_1;
                Node.getComponent(cc.Sprite).spriteFrame = _this.itemResList[randoList];
            }
        });
    };
    /**创建文字 */
    GameLayer.prototype.creatLaber = function () {
        var _this = this;
        cc.tween(this.gamePos.children[0])
            .to(0.1, { scale: 1.5 })
            .to(0.2, { scale: 1 })
            .call(function () {
            var num = util_1.default.getRandom(0, 15);
            _this.gamePos.children[0].getComponent(cc.Sprite).spriteFrame = _this.itemResList[num];
            DataManager_1.default.tipNum = num;
        })
            .start();
        this.callTimer = function () {
            var num = util_1.default.getRandom(0, 15);
            _this.gamePos.children[0].getComponent(cc.Sprite).spriteFrame = _this.itemResList[num];
            DataManager_1.default.tipNum = num;
        };
        this.schedule(this.callTimer, 3);
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
        var _this = this;
        var itemIndex = taget.getComponent(ItemNode_1.default).itemIndex;
        var moveId = itemIndex;
        var otherNode = null;
        DataManager_1.default._curScord += 1;
        this.updataCoin();
        switch (direction) {
            case define_1.DirectionType.Top:
                console.log('上');
                if (itemIndex - this.colNum >= 0) {
                    moveId = itemIndex - this.colNum;
                }
                break;
            case define_1.DirectionType.Bottom:
                console.log('下');
                if (itemIndex + this.colNum <= this.gzPos.children.length) {
                    moveId = itemIndex + this.colNum;
                }
                break;
            case define_1.DirectionType.Left:
                console.log('左');
                if ((itemIndex % this.colNum) - 1 >= 0) {
                    moveId = itemIndex - 1;
                }
                break;
            case define_1.DirectionType.Right:
                console.log('右');
                if ((itemIndex % this.colNum) + 1 <= this.colNum) {
                    moveId = itemIndex + 1;
                }
                break;
        }
        this.gamePos.children.forEach(function (e) {
            if (e.getComponent(ItemNode_1.default).itemIndex == moveId) {
                otherNode = e;
            }
        });
        if (otherNode) {
            cc.tween(taget).to(0.2, { position: this.gzPos.children[moveId].position }).start();
            cc.tween(otherNode).to(0.2, { position: this.gzPos.children[itemIndex].position }).start();
            this.scheduleOnce(function () {
                taget.getComponent(ItemNode_1.default).itemIndex = moveId;
                otherNode.getComponent(ItemNode_1.default).itemIndex = itemIndex;
                var tagetId = util_1.default.copyObj(taget.getComponent(ItemNode_1.default).itemId);
                taget.getComponent(ItemNode_1.default).itemId = otherNode.getComponent(ItemNode_1.default).itemId;
                otherNode.getComponent(ItemNode_1.default).itemId = tagetId;
                var ARR = [];
                _this.gamePos.children.forEach(function (e, i) {
                    ARR.push(e.getComponent(ItemNode_1.default).itemId);
                    _this.showResult(true);
                });
            }, 0.3);
        }
    };
    /**更新实际类型 */
    GameLayer.prototype.updataIndex = function () {
        for (var i = 0; i < this.gamePos.children.length - 1; i++) {
            if (this.gamePos.children[i].getComponent(ItemNode_1.default).itemIndex == i) {
            }
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
        // this.keyNode.getComponent(cc.Label).string = DataManager.keyNum + ''
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
        if (DataManager_1.default._curScord >= 1000) {
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
        this.gzPos.children.forEach(function (e) {
            e.off(cc.Node.EventType.TOUCH_END);
        });
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLHVDQUFrQztBQUNsQyx3Q0FBdUQ7QUFDdkQsa0RBQTZDO0FBQzdDLHNEQUFpRDtBQUNqRCxvQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUEwYkM7UUF4YkcsaUJBQVcsR0FBcUIsRUFBRSxDQUFDO1FBR25DLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsa0JBQVksR0FBbUIsRUFBRSxDQUFDO1FBRTNCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVqQixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUluQixhQUFhO1FBQ2IseUJBQW1CLEdBQXlCLEVBQUUsQ0FBQztRQUUvQyxjQUFjO1FBQ2QsMEJBQW9CLEdBQWtCLEVBQUUsQ0FBQztRQUV6QyxVQUFJLEdBQWtCLEVBQUUsQ0FBQzs7SUF5WTdCLENBQUM7SUF4WUcsV0FBVztJQUNMLDRCQUFRLEdBQWQ7Ozs7Ozt3QkFDSSxLQUFBLElBQUksQ0FBQTt3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LENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztpREFDcEI7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0RBQ3BCO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDOytDQUN0QjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzsrQ0FDdEI7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7OENBQ3ZCO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDOzRDQUN2QjtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs4Q0FDckI7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzttREFDRDtJQWhDakIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBiN0I7SUFBRCxnQkFBQztDQTFiRCxBQTBiQyxDQTFic0MsRUFBRSxDQUFDLFNBQVMsR0EwYmxEO2tCQTFib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuL0RhdGFNYW5hZ2VyJztcclxuaW1wb3J0IEdhbWVXaGVlbCBmcm9tICcuL0dhbWVXaGVlbCc7XHJcbmltcG9ydCBJdGVtTm9kZSBmcm9tICcuL0l0ZW1Ob2RlJztcclxuaW1wb3J0IHsgRGlyZWN0aW9uVHlwZSwgRXZlbnRJZCB9IGZyb20gJy4vdXRpbC9kZWZpbmUnO1xyXG5pbXBvcnQgRXZlbnRNZ3IgZnJvbSAnLi91dGlsL2V2ZW50L0V2ZW50TWdyJztcclxuaW1wb3J0IGxvYWRlck1hbmFnZXIgZnJvbSAnLi91dGlsL2xvYWRlck1hbmFnZXInO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwvdXRpbCc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0sIHRvb2x0aXA6ICflhYPntKDnurnnkIYnIH0pXHJcbiAgICBpdGVtUmVzTGlzdDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfnlKjmiLfkvZnpop3oioLngrknIH0pXHJcbiAgICB1c2VyQ29pbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfmuLjmiI/mj5DnpLrpobXpnaInIH0pXHJcbiAgICB0aXBOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP57uT5p6c6IqC54K5JyB9KVxyXG4gICAgcmVzdWx0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+WAkuiuoeaXtuiKgueCuScgfSlcclxuICAgIHRpbWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+mfs+aViOaMiemSruiKgueCuScgfSlcclxuICAgIHNvdW5kQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn6Z+z5pWI5oyJ6ZKu6IqC54K5JyB9KVxyXG4gICAgbXVzaWNCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICflvIDlp4vmuLjmiI/oioLngrknIH0pXHJcbiAgICBwbGF5QnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP5qC85a2QJyB9KVxyXG4gICAgZ3pQb3M6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfmuLjmiI/moLzlrZAnIH0pXHJcbiAgICBnYW1lUG9zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQXVkaW9DbGlwXSB9KVxyXG4gICAgYXVkaW9SZXNMaXN0OiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBpY29uUGY6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY29sTnVtID0gNDtcclxuICAgIHByaXZhdGUgcm93TnVtID0gNDtcclxuXHJcbiAgICBwcml2YXRlIGNhbGxUaW1lcjtcclxuXHJcbiAgICAvKiog5bey57uY5Yi257q/5pWw57uEICovXHJcbiAgICBhbHJlYWR5RHJhd0xpbmVMaXN0OiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xyXG5cclxuICAgIC8qKiDlvZPliY3nu5jliLbnur/mlbDnu4QgKi9cclxuICAgIGN1ckRyYXdMaW5lSXRtZUluZGV4OiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG4gICAgbGlzdDogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgLyoq5Yqg6L296aKE5Yi25L2TICovXHJcbiAgICBhc3luYyBsb2FkQ2FyZCgpIHtcclxuICAgICAgICB0aGlzLmljb25QZiA9IGF3YWl0IGxvYWRlck1hbmFnZXIuZ2V0UmVzKCdpdGVtJywgJ3ByZWZhYicsIGNjLlByZWZhYik7XHJcbiAgICAgICAgaWYgKHRoaXMuaWNvblBmKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfpooTliLbkvZPliqDovb3miJDlip/vvIEnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpO1xyXG4gICAgICAgIC8vIHRoaXMubG9hZENhcmQoKVxyXG4gICAgICAgIC8vIHRoaXMubGlzdGVyRXZlbnQoKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuQWRqdXN0X3N0YXR1cyA9PSAnJykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLkFkanVzdF9zdGF0dXMudG9Mb3dlckNhc2UoKSAhPT0gJ29yZ2FuaWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5a2X56ym5Liy5LiN5Li656m65LiU5LiN5Li6IFwib3JnYW5pY1wiIOaIliBcIk9yZ2FuaWNcIu+8jOaJp+ihjOS9oOeahOaTjeS9nFxyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkQW5hbHlzZUFqdXN0SGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkR29vZ2xlT3BlbkFkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgfSwgMS41KTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgLy/nu5Hlrprkuovku7ZcclxuICAgIGxpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIEV2ZW50TWdyLkluc3RhbmNlLlJlZ2lzdGVyKEV2ZW50SWQuUmVzdWx0LCB0aGlzLnNob3dSZXN1bHQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF6Zmk5LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIGNsZWF0RXZlbnQoKSB7XHJcbiAgICAgICAgRXZlbnRNZ3IuSW5zdGFuY2UuT2ZmKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+WGheaMiemSrue7keWumuS6i+S7tlxyXG4gICAgICovXHJcbiAgICBidG5FdmVudChldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0blN0YXJ0R2FtZSc6XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5hZEdvb2dsZUludGVyc3RpdGlhbEFkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRuUmV0dXJuJzpcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkR29vZ2xlSW50ZXJzdGl0aWFsQWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdhX3N0YXJ0R2FtZScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0TmV4dEdhbWUnOlxyXG4gICAgICAgICAgICBjYXNlICdidFN0YXJ0T3Zlcic6XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5hZEdvb2dsZUludGVyc3RpdGlhbEFkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRFeGl0JzpcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkR29vZ2xlSW50ZXJzdGl0aWFsQWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdhX3N0YXJ0R2FtZScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RpcEJ0bic6XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5hZEdvb2dsZUludGVyc3RpdGlhbEFkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5UaXBOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYWRzQnRuJzpcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkR29vZ2xlUmV3YXJkZWRWaWRlb0FkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2xvc2VUaXBCdG4nOlxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuYWRHb29nbGVJbnRlcnN0aXRpYWxBZEhhbmRsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlVGlwTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0blNvdW5kJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk9yQ2xvc2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ211c2ljQnRuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk9yQ2xvc2VCRygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlvIDlp4vmuLjmiI8gKi9cclxuICAgIHBsYXlHYW1lKCkge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4pIHJldHVybjtcclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4gPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyDorqHml7blmahcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgICAgICAvL+makOiXj+a4uOaIj+aMiemSrlxyXG4gICAgICAgIC8vIHRoaXMucGxheUJ0bi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFsyXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgLy/muLjmiI/pgLvovpFcclxuICAgICAgICBsZXQgbnVtQXJyYXkgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNV07XHJcbiAgICAgICAgbGV0IHJhbmRvbUxpc3QgPSB1dGlsLmdldFJhbmRvbUxpc3RJdG1lKG51bUFycmF5LCAyMCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHJhbmRvbUxpc3Q7XHJcbiAgICAgICAgLy8gZm9yKGxldCBpPTA7aTxyYW5kb21MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNyZWF0TGFiZXIoaSxyYW5kb21MaXN0W2ldKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmNyZWF0TGFiZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdEZpc2goaSwgcmFuZG9tTGlzdFtpXSwgdGhpcy5nelBvcy5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRGaXNoKGluZGV4OiBudW1iZXIsIHJhbmRvTGlzdDogbnVtYmVyLCBOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaXRlbVJlc0xpc3RbcmFuZG9MaXN0XTtcclxuICAgICAgICBOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5b2T5YmN54K55Ye755qEJywgcmFuZG9MaXN0LCBEYXRhTWFuYWdlci50aXBOdW0pO1xyXG4gICAgICAgICAgICBpZiAocmFuZG9MaXN0ID09IERhdGFNYW5hZ2VyLnRpcE51bSkge1xyXG4gICAgICAgICAgICAgICAgLyoq5raI6Zmk5oiQ5YqfICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jYWxsVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdExhYmVyKCk7XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5fY3VyU2NvcmQgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGFDb2luKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB1dGlsLmdldFJhbmRvbSgwLCAxNSk7XHJcbiAgICAgICAgICAgICAgICByYW5kb0xpc3QgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW1SZXNMaXN0W3JhbmRvTGlzdF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKuWIm+W7uuaWh+WtlyAqL1xyXG4gICAgY3JlYXRMYWJlcigpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWVQb3MuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IDEuNSB9KVxyXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSB1dGlsLmdldFJhbmRvbSgwLCAxNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQb3MuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW1SZXNMaXN0W251bV07XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci50aXBOdW0gPSBudW07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuY2FsbFRpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gdXRpbC5nZXRSYW5kb20oMCwgMTUpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQb3MuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW1SZXNMaXN0W251bV07XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLnRpcE51bSA9IG51bTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jYWxsVGltZXIsIDMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKue7keWumua7keWKqOS6i+S7tiAqL1xyXG4gICAgbGlzdFRvdWNoRXZlbnQoVG91Y2hOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgVG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgVG91Y2hOb2RlWydzdGFydFBvcyddID0gY2MudjIoZXZlbnQuZ2V0TG9jYXRpb24oKS54LCBldmVudC5nZXRMb2NhdGlvbigpLnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3RhdFBvcyA9IFRvdWNoTm9kZVsnc3RhcnRQb3MnXTtcclxuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKGV2ZW50LmdldExvY2F0aW9uKCkueCwgZXZlbnQuZ2V0TG9jYXRpb24oKS55KTtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuaXNEaXJlY3Rpb24oc3RhdFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Ub3VjaE1vdmUoVG91Y2hOb2RlLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56e75Yqo5LqL5Lu2ICovXHJcbiAgICBUb3VjaE1vdmUodGFnZXQ6IGNjLk5vZGUsIGRpcmVjdGlvbjogRGlyZWN0aW9uVHlwZSkge1xyXG4gICAgICAgIGxldCBpdGVtSW5kZXggPSB0YWdldC5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JbmRleDtcclxuICAgICAgICBsZXQgbW92ZUlkID0gaXRlbUluZGV4O1xyXG4gICAgICAgIGxldCBvdGhlck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLl9jdXJTY29yZCArPSAxO1xyXG4gICAgICAgIHRoaXMudXBkYXRhQ29pbigpO1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uVHlwZS5Ub3A6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5LiKJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUluZGV4IC0gdGhpcy5jb2xOdW0gPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVJZCA9IGl0ZW1JbmRleCAtIHRoaXMuY29sTnVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uVHlwZS5Cb3R0b206XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5LiLJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUluZGV4ICsgdGhpcy5jb2xOdW0gPD0gdGhpcy5nelBvcy5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlSWQgPSBpdGVtSW5kZXggKyB0aGlzLmNvbE51bTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvblR5cGUuTGVmdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflt6YnKTtcclxuICAgICAgICAgICAgICAgIGlmICgoaXRlbUluZGV4ICUgdGhpcy5jb2xOdW0pIC0gMSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZUlkID0gaXRlbUluZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvblR5cGUuUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Y+zJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGl0ZW1JbmRleCAlIHRoaXMuY29sTnVtKSArIDEgPD0gdGhpcy5jb2xOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlSWQgPSBpdGVtSW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBvcy5jaGlsZHJlbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUluZGV4ID09IG1vdmVJZCkge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJOb2RlID0gZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAob3RoZXJOb2RlKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRhZ2V0KS50bygwLjIsIHsgcG9zaXRpb246IHRoaXMuZ3pQb3MuY2hpbGRyZW5bbW92ZUlkXS5wb3NpdGlvbiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2VlbihvdGhlck5vZGUpLnRvKDAuMiwgeyBwb3NpdGlvbjogdGhpcy5nelBvcy5jaGlsZHJlbltpdGVtSW5kZXhdLnBvc2l0aW9uIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhZ2V0LmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUluZGV4ID0gbW92ZUlkO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJOb2RlLmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhZ2V0SWQgPSB1dGlsLmNvcHlPYmoodGFnZXQuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSWQpO1xyXG4gICAgICAgICAgICAgICAgdGFnZXQuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSWQgPSBvdGhlck5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSWQ7XHJcbiAgICAgICAgICAgICAgICBvdGhlck5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSWQgPSB0YWdldElkO1xyXG4gICAgICAgICAgICAgICAgbGV0IEFSUiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUG9zLmNoaWxkcmVuLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBUlIucHVzaChlLmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pu05paw5a6e6ZmF57G75Z6LICovXHJcbiAgICB1cGRhdGFJbmRleCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZVBvcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBvcy5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JbmRleCA9PSBpKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat5pa55ZCRICovXHJcbiAgICBpc0RpcmVjdGlvbihzdGFydFBvczogY2MuVmVjMiwgZW5kUG9zOiBjYy5WZWMyKTogRGlyZWN0aW9uVHlwZSB7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogRGlyZWN0aW9uVHlwZSA9IERpcmVjdGlvblR5cGUuTGVmdDtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IE1hdGguYWJzKGVuZFBvcy54IC0gc3RhcnRQb3MueCk7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSBNYXRoLmFicyhlbmRQb3MueSAtIHN0YXJ0UG9zLnkpO1xyXG4gICAgICAgIGlmIChvZmZzZXRYID49IG9mZnNldFkpIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gZW5kUG9zLnggPiBzdGFydFBvcy54ID8gRGlyZWN0aW9uVHlwZS5SaWdodCA6IERpcmVjdGlvblR5cGUuTGVmdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBlbmRQb3MueSA+IHN0YXJ0UG9zLnkgPyBEaXJlY3Rpb25UeXBlLlRvcCA6IERpcmVjdGlvblR5cGUuQm90dG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5b2T5YmN5LiW55WM5Z2Q5qCH5LiK55qEaXRlbVxyXG4gICAgICovXHJcbiAgICBnZXRDdXJXb3JsZFBvc0l0ZW0oY3VyUG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgbGV0IHJldHVybkl0ZW0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBvcy5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtV29ybGRQb3MgPSBpdGVtLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIGxldCBzaXplID0gaXRlbS5nZXRDb250ZW50U2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1clBvcy54ID4gaXRlbVdvcmxkUG9zLnggLSBzaXplLndpZHRoICYmIGN1clBvcy54IDwgaXRlbVdvcmxkUG9zLnggKyBzaXplLndpZHRoICYmIGN1clBvcy55ID4gaXRlbVdvcmxkUG9zLnkgLSBzaXplLmhlaWdodCAmJiBjdXJQb3MueSA8IGl0ZW1Xb3JsZFBvcy55ICsgc2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWcqOiKgueCueWGhVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWQr+aIluWFs+mXremfs+aViFxyXG4gICAgICovXHJcbiAgICBvcGVuT3JDbG9zZVNvdW5kKCkge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5jdXJTb3VuZEJHSXNDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNvbG9yID0gY2MuY29sb3IoMTcwLCAxNzAsIDE3MCwgMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyU291bmRCR0lzQ2xvc2UgPSAhRGF0YU1hbmFnZXIuY3VyU291bmRCR0lzQ2xvc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk9yQ2xvc2VCRygpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuY3VyU291bmRJc0Nsb3NlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNCdG4uY29sb3IgPSBjYy5jb2xvcigxNzAsIDE3MCwgMTcwLCAyNTUpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0J0bi5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSA9ICFEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+WAkuiuoeaXtlxyXG4gICAgICovXHJcbiAgICBzdGFydFRpbWVyKCkge1xyXG4gICAgICAgIGxldCBzcGVlZCA9IDAuMDE7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIudGltZXJGdW5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbmRleFRpbWUgLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbmRleFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZXN1bHRGbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyTm9kZS5nZXRDaGlsZEJ5TmFtZSgndGltZVRleHQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IE1hdGguZmxvb3IoRGF0YU1hbmFnZXIuaW5kZXhUaW1lKSArICdzJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoRGF0YU1hbmFnZXIudGltZXJGdW5jLCBzcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlgJLorqHml7ZcclxuICAgICAqL1xyXG4gICAgdXBkYXRlVGltZXJVaSgpIHtcclxuICAgICAgICBjYy5maW5kKCdiYXJCZy9iYXInLCB0aGlzLnRpbWVyTm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gRGF0YU1hbmFnZXIuaW5kZXhUaW1lIC8gRGF0YU1hbmFnZXIuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMudGltZXJOb2RlLmdldENoaWxkQnlOYW1lKCd0aW1lVGV4dCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gTWF0aC5jZWlsKERhdGFNYW5hZ2VyLmluZGV4VGltZSkgKyAncyc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRhQ29pbigpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJDb2luKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAvLyB0aGlzLmtleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBEYXRhTWFuYWdlci5rZXlOdW0gKyAnJ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5L2Z6aKdXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVVzZXJDb2luKCkge1xyXG4gICAgICAgIGxldCBsYWJsZU5vZGUgPSB0aGlzLnVzZXJDb2luTm9kZS5nZXRDaGlsZEJ5TmFtZSgnY29pbkxhYmxlJyk7XHJcbiAgICAgICAgY2MudHdlZW4obGFibGVOb2RlKS50bygwLjEsIHsgc2NhbGU6IDEuMSB9KS50bygwLjEsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcclxuICAgICAgICBsYWJsZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnJyArIERhdGFNYW5hZ2VyLmN1clNjb3JkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIpOaWree7k+aenCAqL1xyXG4gICAgUmVzdWx0Rm4oKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLl9jdXJTY29yZCA+PSAxMDAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCh0cnVlKTtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuY3VyV2luTnVtICs9IDIwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmiZPlvIDmj5DnpLogKi9cclxuICAgIG9wZW5UaXBOb2RlKCkge1xyXG4gICAgICAgIHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpLnNjYWxlID0gMC44O1xyXG4gICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpKS50bygwLjIsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXreaPkOekuuWxleekulxyXG4gICAgICovXHJcbiAgICBoaWRlVGlwTm9kZSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3J1bGUnKSlcclxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMC41IH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsZXnpLrnu5PmnpxcclxuICAgICAqL1xyXG4gICAgc2hvd1Jlc3VsdChpc1dpbikge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZShEYXRhTWFuYWdlci50aW1lckZ1bmMpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMuZ3pQb3MuY2hpbGRyZW4uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluZGV4VGltZSA9IERhdGFNYW5hZ2VyLnN0YXJ0VGltZTtcclxuICAgICAgICBpZiAoaXNXaW4pIHtcclxuICAgICAgICAgICAgbGV0IHdpbk51bUxhYmxlID0gY2MuZmluZCgnd2luL3dpbk51bScsIHRoaXMucmVzdWx0Tm9kZSk7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1cldpbk51bSArPSAxMDA7XHJcbiAgICAgICAgICAgIHdpbk51bUxhYmxlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJycgKyBEYXRhTWFuYWdlci5jdXJXaW5OdW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFtpc1dpbiA/IDQgOiA1XTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgbGV0IHdpbk5vZGUgPSB0aGlzLnJlc3VsdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3dpbicpO1xyXG4gICAgICAgIGxldCBsb3NlTm9kZSA9IHRoaXMucmVzdWx0Tm9kZS5nZXRDaGlsZEJ5TmFtZSgnbG9zZScpO1xyXG4gICAgICAgIHdpbk5vZGUuYWN0aXZlID0gaXNXaW47XHJcbiAgICAgICAgbG9zZU5vZGUuYWN0aXZlID0gIWlzV2luO1xyXG4gICAgICAgIGxldCBjdXJBbmlOb2RlID0gaXNXaW4gPyB3aW5Ob2RlIDogbG9zZU5vZGU7XHJcbiAgICAgICAgdGhpcy5yZXN1bHROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY3VyQW5pTm9kZS5zY2FsZSA9IDAuNjtcclxuICAgICAgICBjdXJBbmlOb2RlLm9wYWNpdHkgPSAxMDA7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGN1ckFuaU5vZGUpLnRvKDAuMywgeyBzY2FsZTogMS4xLCBvcGFjaXR5OiAyNTUgfSkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl63nu5PmnpzlsZXnpLpcclxuICAgICAqL1xyXG4gICAgaGlkZVJlc3VsdE5vZGUoKSB7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyR2FtZUlzUnVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZXN1bHROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuX2N1clNjb3JkID0gMDtcclxuICAgICAgICBEYXRhTWFuYWdlci5faW5kZXhUaW1lID0gRGF0YU1hbmFnZXIuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVXNlckNvaW4oKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/recordsItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a448MnHPxEzbcjTuFPPutO', 'recordsItem');
// script/recordsItem.ts

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
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var recordItem = /** @class */ (function (_super) {
    __extends(recordItem, _super);
    function recordItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topSp = null;
        _this.topLabel = null;
        _this.userName = null;
        _this.goldNum = null;
        _this.imgSpArr = [];
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.TipuserName = ['Thor', 'FireKing', 'ShadowAssassin', 'WildWolf', 'GalaxyPrincess', 'EyeOfTheStorm', 'Magician', 'MysteriousSword', 'AngelWings', 'FrostHeart', 'DragonSoul', 'Starlight', 'GhostHunter', 'SoulSong', 'Ares', 'SnowflakeDance', 'MarsExplorer', 'DreamTrip', 'Sniper', 'RocketMan'];
        return _this;
        // update (dt) {}
    }
    recordItem.prototype.start = function () {
    };
    /**初始化 */
    recordItem.prototype.init = function (index) {
        if (index <= 3) {
            this.topSp.active = true;
            this.topLabel.active = false;
            this.topSp.getComponent(cc.Sprite).spriteFrame = this.imgSpArr[index - 1];
        }
        else {
            this.topSp.active = false;
            this.topLabel.active = true;
            this.topLabel.getComponent(cc.Label).string = index + '';
        }
        var name = this.TipuserName[util_1.default.getRandom(0, this.TipuserName.length - 1)];
        this.userName.getComponent(cc.Label).string = name;
        this.goldNum.getComponent(cc.Label).string = 99999 - (index * 100) + '';
    };
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "topSp", void 0);
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "topLabel", void 0);
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "userName", void 0);
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "goldNum", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], recordItem.prototype, "imgSpArr", void 0);
    recordItem = __decorate([
        ccclass
    ], recordItem);
    return recordItem;
}(cc.Component));
exports.default = recordItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyZWNvcmRzSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixvQ0FBK0I7QUFFekIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUEyQ0M7UUF4Q0csV0FBSyxHQUFXLElBQUksQ0FBQztRQUdyQixjQUFRLEdBQVcsSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQW9CLEVBQUUsQ0FBQTtRQUU5Qix3QkFBd0I7UUFFeEIsZUFBZTtRQUVQLGlCQUFXLEdBQUcsQ0FBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsQ0FBQTs7UUFxQnZSLGlCQUFpQjtJQUNyQixDQUFDO0lBcEJHLDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsU0FBUztJQUNULHlCQUFJLEdBQUosVUFBSyxLQUFZO1FBQ2IsSUFBRyxLQUFLLElBQUcsQ0FBQyxFQUFDO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFFLEtBQUssQ0FBQTtZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQzVFO2FBQUk7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQTtTQUMzRDtRQUNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDekUsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dEQUNHO0lBZmIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTJDOUI7SUFBRCxpQkFBQztDQTNDRCxBQTJDQyxDQTNDdUMsRUFBRSxDQUFDLFNBQVMsR0EyQ25EO2tCQTNDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgdXRpbCBmcm9tIFwiLi91dGlsL3V0aWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWNvcmRJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRvcFNwOmNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdG9wTGFiZWw6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1c2VyTmFtZTpjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdvbGROdW06Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpbWdTcEFycjpjYy5TcHJpdGVGcmFtZVtdID0gW11cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBwcml2YXRlIFRpcHVzZXJOYW1lID0gWydUaG9yJywnRmlyZUtpbmcnLCdTaGFkb3dBc3Nhc3NpbicsJ1dpbGRXb2xmJywnR2FsYXh5UHJpbmNlc3MnLCdFeWVPZlRoZVN0b3JtJywnTWFnaWNpYW4nLCdNeXN0ZXJpb3VzU3dvcmQnLCdBbmdlbFdpbmdzJywnRnJvc3RIZWFydCcsJ0RyYWdvblNvdWwnLCdTdGFybGlnaHQnLCdHaG9zdEh1bnRlcicsJ1NvdWxTb25nJywnQXJlcycsJ1Nub3dmbGFrZURhbmNlJywnTWFyc0V4cGxvcmVyJywnRHJlYW1UcmlwJywnU25pcGVyJywnUm9ja2V0TWFuJ11cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICAvKirliJ3lp4vljJYgKi9cbiAgICBpbml0KGluZGV4Om51bWJlcil7XG4gICAgICAgIGlmKGluZGV4IDw9Myl7XG4gICAgICAgICAgICB0aGlzLnRvcFNwLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMudG9wTGFiZWwuYWN0aXZlID1mYWxzZVxuICAgICAgICAgICAgdGhpcy50b3BTcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaW1nU3BBcnJbaW5kZXggLSAxXVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMudG9wU3AuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMudG9wTGFiZWwuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy50b3BMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGluZGV4ICsgJydcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuVGlwdXNlck5hbWVbdXRpbC5nZXRSYW5kb20oMCx0aGlzLlRpcHVzZXJOYW1lLmxlbmd0aCAtMSldXG4gICAgICAgIHRoaXMudXNlck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBuYW1lXG4gICAgICAgIHRoaXMuZ29sZE51bS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IDk5OTk5IC0gKGluZGV4KjEwMCkgKyAnJ1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/NativeJSBridgeIns.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '857c7pzTTlII4ckhD5SouyK', 'NativeJSBridgeIns');
// script/NativeJSBridgeIns.ts

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
var DataManager_1 = require("./DataManager");
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
        cc.log("TS Callback:" + _refCount);
        DataManager_1.default.Adjust_status = _refCount;
        // if (_refCount !== '' && _refCount.toLowerCase() !== 'organic') {
        //     // 字符串不为空且不为 "organic" 或 "Organic"，执行你的操作
        //     DataManager.Adjust_status = _refCount;
        //     // EventMgr.Instance.Emit(EventId.adjust, _refCount);
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxOYXRpdmVKU0JyaWRnZUlucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7O0FBRWxGLDZDQUF3QztBQUVsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBd0JBLENBQUM7MEJBeEJLLGlCQUFpQjtJQVdMLDZCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQWlCLEVBQUUsQ0FBQztRQUNyRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNNLHVDQUFXLEdBQWxCLFVBQW1CLFNBQWlCO1FBQ2hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLHFCQUFXLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUN0QyxtRUFBbUU7UUFDbkUsZ0RBQWdEO1FBQ2hELDZDQUE2QztRQUM3Qyw0REFBNEQ7UUFDNUQsSUFBSTtJQUNSLENBQUM7O0lBdEJjLDJCQUFTLEdBQXNCLElBQUksQ0FBQztJQUNuRCxhQUFhO0lBQ0UsNkJBQVcsR0FBVyxnQkFBZ0IsQ0FBQztJQUd2QywwQkFBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLDRCQUFVLEdBQUcsS0FBSyxDQUFDO0lBRW5CLGlDQUFlLEdBQVksS0FBSyxDQUFDO0lBVDlDLGlCQUFpQjtRQUR0QixPQUFPO09BQ0YsaUJBQWlCLENBd0J0QjtJQUFELHdCQUFDO0NBeEJELEFBd0JDLElBQUE7QUFDRCwrQ0FBK0M7QUFDL0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDOUQsT0FBTztBQUNQLGtEQUFrRDtBQUNsRCw0QkFBNEI7QUFDNUIsK0JBQStCO0FBQy9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gJy4vRGF0YU1hbmFnZXInO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuY2xhc3MgTmF0aXZlSlNCcmlkZ2VJbnMge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTmF0aXZlSlNCcmlkZ2VJbnMgPSBudWxsO1xuICAgIC8vLy8vZmFjZWJvb2tcbiAgICBwcml2YXRlIHN0YXRpYyBDYWxsQmFja0tleTogc3RyaW5nID0gJ25hdGl2ZUNhbGxiYWNrJztcbiAgICBwcml2YXRlIHN0YXRpYyBfY2FsbEJhY2tQcmVmaXg6IHN0cmluZzsgLy/lm57osIPpm4blkIjlrZfnrKbliY3nvIBcblxuICAgIHByaXZhdGUgc3RhdGljIF9wcmV2RXJyID0gJyc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2hhc0luaXRlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXBwQWN0aXZlU3RhdHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluYXRhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkgdGhpcy5faW5zdGFuY2UgPSBuZXcgTmF0aXZlSlNCcmlkZ2VJbnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgICBwdWJsaWMgYWp1c3RTdGF0dWUoX3JlZkNvdW50OiBzdHJpbmcpIHtcbiAgICAgICAgY2MubG9nKFwiVFMgQ2FsbGJhY2s6XCIrIF9yZWZDb3VudCk7XG4gICAgICAgIERhdGFNYW5hZ2VyLkFkanVzdF9zdGF0dXMgPSBfcmVmQ291bnQ7XG4gICAgICAgIC8vIGlmIChfcmVmQ291bnQgIT09ICcnICYmIF9yZWZDb3VudC50b0xvd2VyQ2FzZSgpICE9PSAnb3JnYW5pYycpIHtcbiAgICAgICAgLy8gICAgIC8vIOWtl+espuS4suS4jeS4uuepuuS4lOS4jeS4uiBcIm9yZ2FuaWNcIiDmiJYgXCJPcmdhbmljXCLvvIzmiafooYzkvaDnmoTmk43kvZxcbiAgICAgICAgLy8gICAgIERhdGFNYW5hZ2VyLkFkanVzdF9zdGF0dXMgPSBfcmVmQ291bnQ7XG4gICAgICAgIC8vICAgICAvLyBFdmVudE1nci5JbnN0YW5jZS5FbWl0KEV2ZW50SWQuYWRqdXN0LCBfcmVmQ291bnQpO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuLy/nrKzkuIDnp43mlrnms5Ugd2luZG93Lk5hdGl2ZUpTQnJpZGdlSW5zLmdvb2dsZUxvZ2luUmVzXG53aW5kb3dbJ05hdGl2ZUpTQnJpZGdlSW5zJ10gPSBOYXRpdmVKU0JyaWRnZUlucy5nZXRJbmF0YW5jZSgpO1xuLy/nrKzkuoznp43mlrnms5Vcbi8vIHdpbmRvdy5jYWxsQW5kcm9pZCA9IENhbGxBbmRyb2lkLmdldEluYXRhbmNlKCk7XG4vLyBkZWNsYXJlIGludGVyZmFjZSBXaW5kb3d7XG4vLyAgICAgY2FsbEFuZHJvaWQ6Q2FsbEFuZHJvaWQ7XG4vLyB9XG4iXX0=
//------QC-SOURCE-SPLIT------
