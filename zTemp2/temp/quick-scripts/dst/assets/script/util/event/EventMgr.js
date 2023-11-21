
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