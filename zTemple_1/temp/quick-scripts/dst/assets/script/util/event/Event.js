
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxldmVudFxcRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQU9JLGVBQVksT0FBZ0IsRUFBRSxPQUFpQixFQUFFLElBQVksRUFBRSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFlBQWlCO1FBQzVFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELHNCQUFXLHVCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFTSxxQkFBSyxHQUFaLFVBQWEsS0FBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNwSSxDQUFDO0lBQ0wsWUFBQztBQUFELENBMUJBLEFBMEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudElkIH0gZnJvbSBcIi4uL2RlZmluZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50IHtcclxuICAgIHB1YmxpYyBFdmVudElkOiBFdmVudElkO1xyXG4gICAgcHVibGljIENhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIHB1YmxpYyBTY29wZTogYW55O1xyXG4gICAgcHVibGljIE9uY2U6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgUmVhbENhbGxCYWtjOiBGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihldmVudElkOiBFdmVudElkLCBjYWxsYmFrOiBGdW5jdGlvbiwgb25jZTpib29sZWFuLCBzY29wZTogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuRXZlbnRJZCA9IGV2ZW50SWQ7XHJcbiAgICAgICAgdGhpcy5DYWxsYmFjayA9IGNhbGxiYWs7XHJcbiAgICAgICAgdGhpcy5TY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIGlmIChzY29wZSAhPSBudWxsIHx8IHNjb3BlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLlJlYWxDYWxsQmFrYyA9IGNhbGxiYWsuYmluZChzY29wZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5SZWFsQ2FsbEJha2MgPSB0aGlzLkNhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLk9uY2UgPSBvbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgQ2FsbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5SZWFsQ2FsbEJha2M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEVxdWVsKG90aGVyOiBFdmVudCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkV2ZW50SWQgPT0gb3RoZXIuRXZlbnRJZCAmJiB0aGlzLkNhbGxiYWNrID09IG90aGVyLkNhbGxiYWNrICYmIHRoaXMuT25jZSA9PSBvdGhlci5PbmNlICYmIHRoaXMuU2NvcGUgPT0gb3RoZXIuU2NvcGU7XHJcbiAgICB9XHJcbn0iXX0=