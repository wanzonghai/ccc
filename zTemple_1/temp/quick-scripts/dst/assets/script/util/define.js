
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxkZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVTtBQUNWLElBQVksUUFNWDtBQU5ELFdBQVksUUFBUTtJQUNoQix1Q0FBSSxDQUFBO0lBQ0oseUNBQUssQ0FBQTtJQUNMLDJDQUFNLENBQUE7SUFDTiw2Q0FBTyxDQUFBO0lBQ1AseUNBQUssQ0FBQTtBQUNULENBQUMsRUFOVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQU1uQjtBQUVELElBQVksT0FHWDtBQUhELFdBQVksT0FBTztJQUNmLDJDQUFPLENBQUE7SUFDUCx1Q0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUhXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUdsQjtBQUVELFdBQVc7QUFDWCxJQUFZLGFBS1g7QUFMRCxXQUFZLGFBQWE7SUFDckIsK0NBQU8sQ0FBQTtJQUNQLHFEQUFVLENBQUE7SUFDVixpREFBUSxDQUFBO0lBQ1IsbURBQVMsQ0FBQTtBQUNiLENBQUMsRUFMVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUt4QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKirlrp3nn7PnsbvlnosgKi9cclxuZXhwb3J0IGVudW0gSXRlbVR5cGV7XHJcbiAgICBOb25lLFxyXG4gICAgQnVsbGUsXHJcbiAgICBZZWxsb3csXHJcbiAgICBQZXJwb3VyLFxyXG4gICAgUGluY2tcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXZlbnRJZHtcclxuICAgIEludmFsaWQsXHJcbiAgICBkZXN0eVxyXG59XHJcblxyXG4vKiog5pa55ZCR57G75Z6LICovXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvblR5cGUge1xyXG4gICAgVG9wID0gMSxcclxuICAgIEJvdHRvbSA9IDIsXHJcbiAgICBMZWZ0ID0gMyxcclxuICAgIFJpZ2h0ID0gNCxcclxufSJdfQ==