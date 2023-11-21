
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/JSBNative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84ac7TSWZtLqrKen4Cir7Nk', 'JSBNative');
// script/JSBNative.ts

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
var JSBNative = /** @class */ (function () {
    function JSBNative() {
    }
    JSBNative_1 = JSBNative;
    JSBNative.getInatance = function () {
        if (this._instance == null)
            this._instance = new JSBNative_1();
        return this._instance;
    };
    JSBNative.prototype.ajustStatue = function (_refCount) {
        cc.log('TS Callback:' + _refCount);
        DataManager_1.default.Adjust_status = _refCount;
    };
    var JSBNative_1;
    JSBNative._instance = null;
    /////facebook
    JSBNative.CallBackKey = 'nativeCallback';
    JSBNative._prevErr = '';
    JSBNative._hasInited = false;
    JSBNative.appActiveStatue = false;
    JSBNative = JSBNative_1 = __decorate([
        ccclass
    ], JSBNative);
    return JSBNative;
}());
window['JSBNative'] = JSBNative.getInatance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxKU0JOYXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQW1CQSxDQUFDO2tCQW5CSyxTQUFTO0lBV0cscUJBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFTLEVBQUUsQ0FBQztRQUM3RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNNLCtCQUFXLEdBQWxCLFVBQW1CLFNBQWlCO1FBQ2hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLHFCQUFXLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMxQyxDQUFDOztJQWpCYyxtQkFBUyxHQUFjLElBQUksQ0FBQztJQUMzQyxhQUFhO0lBQ0UscUJBQVcsR0FBVyxnQkFBZ0IsQ0FBQztJQUd2QyxrQkFBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLG9CQUFVLEdBQUcsS0FBSyxDQUFDO0lBRW5CLHlCQUFlLEdBQVksS0FBSyxDQUFDO0lBVDlDLFNBQVM7UUFEZCxPQUFPO09BQ0YsU0FBUyxDQW1CZDtJQUFELGdCQUFDO0NBbkJELEFBbUJDLElBQUE7QUFFRCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuL0RhdGFNYW5hZ2VyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmNsYXNzIEpTQk5hdGl2ZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBKU0JOYXRpdmUgPSBudWxsO1xuICAgIC8vLy8vZmFjZWJvb2tcbiAgICBwcml2YXRlIHN0YXRpYyBDYWxsQmFja0tleTogc3RyaW5nID0gJ25hdGl2ZUNhbGxiYWNrJztcbiAgICBwcml2YXRlIHN0YXRpYyBfY2FsbEJhY2tQcmVmaXg6IHN0cmluZzsgLy/lm57osIPpm4blkIjlrZfnrKbliY3nvIBcblxuICAgIHByaXZhdGUgc3RhdGljIF9wcmV2RXJyID0gJyc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2hhc0luaXRlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXBwQWN0aXZlU3RhdHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluYXRhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkgdGhpcy5faW5zdGFuY2UgPSBuZXcgSlNCTmF0aXZlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG4gICAgcHVibGljIGFqdXN0U3RhdHVlKF9yZWZDb3VudDogc3RyaW5nKSB7XG4gICAgICAgIGNjLmxvZygnVFMgQ2FsbGJhY2s6JyArIF9yZWZDb3VudCk7XG4gICAgICAgIERhdGFNYW5hZ2VyLkFkanVzdF9zdGF0dXMgPSBfcmVmQ291bnQ7XG4gICAgfVxufVxuXG53aW5kb3dbJ0pTQk5hdGl2ZSddID0gSlNCTmF0aXZlLmdldEluYXRhbmNlKCk7XG4iXX0=