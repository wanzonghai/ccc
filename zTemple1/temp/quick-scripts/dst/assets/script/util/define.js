
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