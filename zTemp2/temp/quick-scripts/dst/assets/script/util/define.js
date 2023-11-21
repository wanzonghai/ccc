
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
exports.JsbFunType = exports.WheelType = exports.WheelState = exports.EventId = exports.DirectionType = exports.ItemType = void 0;
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
var JsbFunType;
(function (JsbFunType) {
    JsbFunType["ShowRewardedVideoAd"] = "ShowRewardedVideoAd";
    JsbFunType["ShowInterstitialAd"] = "ShowInterstitialAd";
    JsbFunType["ShowOpenAd"] = "ShowOpenAd";
    JsbFunType["AdjustDecision"] = "AdjustDecision";
})(JsbFunType = exports.JsbFunType || (exports.JsbFunType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxkZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsVUFBVTtBQUNWLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNoQiwyQ0FBTSxDQUFBO0lBQ04sdUNBQUksQ0FBQTtJQUNKLHlDQUFLLENBQUE7SUFDTCx5Q0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBS25CO0FBRUQsUUFBUTtBQUNSLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQiwrQ0FBTyxDQUFBO0lBQ1AscURBQVUsQ0FBQTtJQUNWLGlEQUFRLENBQUE7SUFDUixtREFBUyxDQUFBO0FBQ2IsQ0FBQyxFQUxXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBS3hCO0FBRUQsSUFBWSxPQU1YO0FBTkQsV0FBWSxPQUFPO0lBQ2YsbURBQWUsQ0FBQTtJQUNmLG1EQUFXLENBQUE7SUFDWCxtREFBVyxDQUFBO0lBQ1gsK0NBQVMsQ0FBQTtJQUNULHlDQUFNLENBQUE7QUFDVixDQUFDLEVBTlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBTWxCO0FBRUQsSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ2xCLDZDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0lBQ2IseURBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFPRCxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDakIsMkNBQVMsQ0FBQTtJQUNULHlDQUFRLENBQUE7QUFDWixDQUFDLEVBSFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFHcEI7QUFFRCxJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDbEIseURBQTJDLENBQUE7SUFDM0MsdURBQXlDLENBQUE7SUFDekMsdUNBQXlCLENBQUE7SUFDekIsK0NBQWlDLENBQUE7QUFDckMsQ0FBQyxFQUxXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBS3JCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoq5omR5YWL57G75Z6LICovXHJcbmV4cG9ydCBlbnVtIEl0ZW1UeXBlIHtcclxuICAgIFNxdWFyZSxcclxuICAgIFBsdW0sXHJcbiAgICBIZWFydCxcclxuICAgIFNwYWRlLFxyXG59XHJcblxyXG4vKirmlrnlkJEgKi9cclxuZXhwb3J0IGVudW0gRGlyZWN0aW9uVHlwZSB7XHJcbiAgICBUb3AgPSAxLFxyXG4gICAgQm90dG9tID0gMixcclxuICAgIExlZnQgPSAzLFxyXG4gICAgUmlnaHQgPSA0LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBFdmVudElkIHtcclxuICAgIGNyZWF0UG9ya2VyID0gMCxcclxuICAgIFJhbmluZ1doZWVsLFxyXG4gICAgVXBkYXRhU2NvcmQsXHJcbiAgICBSZW1iZXJOdW0sXHJcbiAgICBSZXN1bHQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFdoZWVsU3RhdGUge1xyXG4gICAgU3RhbmQgPSAwLFxyXG4gICAgQWNlbGVyYXJhID0gMSxcclxuICAgIERlc2FjZWxlcmFyID0gMixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaGVlbERhdGEge1xyXG4gICAgdHlwZTogV2hlZWxUeXBlO1xyXG4gICAgbnVtOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFdoZWVsVHlwZSB7XHJcbiAgICBCZXRMdiA9IDEsXHJcbiAgICBTcGluID0gMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSnNiRnVuVHlwZSB7XHJcbiAgICBTaG93UmV3YXJkZWRWaWRlb0FkID0gJ1Nob3dSZXdhcmRlZFZpZGVvQWQnLFxyXG4gICAgU2hvd0ludGVyc3RpdGlhbEFkID0gJ1Nob3dJbnRlcnN0aXRpYWxBZCcsXHJcbiAgICBTaG93T3BlbkFkID0gJ1Nob3dPcGVuQWQnLFxyXG4gICAgQWRqdXN0RGVjaXNpb24gPSAnQWRqdXN0RGVjaXNpb24nLFxyXG59XHJcbiJdfQ==