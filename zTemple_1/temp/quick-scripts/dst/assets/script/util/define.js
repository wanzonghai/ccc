
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