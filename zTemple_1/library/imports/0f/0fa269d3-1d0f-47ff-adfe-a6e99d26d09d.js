"use strict";
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