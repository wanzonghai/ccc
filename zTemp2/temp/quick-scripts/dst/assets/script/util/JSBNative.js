
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/JSBNative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a3d73rwfzRGZ4UVhnbLYM5e', 'JSBNative');
// script/util/JSBNative.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("../DataManager");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxKU0JOYXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFFbkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQVVBLENBQUM7a0JBVkssU0FBUztJQUVHLHFCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBUyxFQUFFLENBQUM7UUFDN0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDTSwrQkFBVyxHQUFsQixVQUFtQixTQUFpQjtRQUNoQyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNuQyxxQkFBVyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQzs7SUFSYyxtQkFBUyxHQUFjLElBQUksQ0FBQztJQUR6QyxTQUFTO1FBRGQsT0FBTztPQUNGLFNBQVMsQ0FVZDtJQUFELGdCQUFDO0NBVkQsQUFVQyxJQUFBO0FBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuLi9EYXRhTWFuYWdlcic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuY2xhc3MgSlNCTmF0aXZlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogSlNCTmF0aXZlID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5hdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHRoaXMuX2luc3RhbmNlID0gbmV3IEpTQk5hdGl2ZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhanVzdFN0YXR1ZShfcmVmQ291bnQ6IHN0cmluZykge1xyXG4gICAgICAgIGNjLmxvZygnVFMgQ2FsbGJhY2s6JyArIF9yZWZDb3VudCk7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuQWRqdXN0X3N0YXR1cyA9IF9yZWZDb3VudDtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93WydKU0JOYXRpdmUnXSA9IEpTQk5hdGl2ZS5nZXRJbmF0YW5jZSgpO1xyXG4iXX0=