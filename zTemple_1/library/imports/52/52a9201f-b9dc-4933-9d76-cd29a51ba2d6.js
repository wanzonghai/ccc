"use strict";
cc._RF.push(module, '52a92AfudxJM512zSmlG6LW', 'define');
// script/util/define.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionType = exports.EventId = exports.ItemType = void 0;
/**宝石类型 */
var ItemType;
(function (ItemType) {
    ItemType[ItemType["None"] = 0] = "None";
    ItemType[ItemType["Bulle"] = 1] = "Bulle";
    ItemType[ItemType["Yellow"] = 2] = "Yellow";
    ItemType[ItemType["Perpour"] = 3] = "Perpour";
    ItemType[ItemType["Pinck"] = 4] = "Pinck";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var EventId;
(function (EventId) {
    EventId[EventId["Invalid"] = 0] = "Invalid";
    EventId[EventId["desty"] = 1] = "desty";
})(EventId = exports.EventId || (exports.EventId = {}));
/** 方向类型 */
var DirectionType;
(function (DirectionType) {
    DirectionType[DirectionType["Top"] = 1] = "Top";
    DirectionType[DirectionType["Bottom"] = 2] = "Bottom";
    DirectionType[DirectionType["Left"] = 3] = "Left";
    DirectionType[DirectionType["Right"] = 4] = "Right";
})(DirectionType = exports.DirectionType || (exports.DirectionType = {}));

cc._RF.pop();