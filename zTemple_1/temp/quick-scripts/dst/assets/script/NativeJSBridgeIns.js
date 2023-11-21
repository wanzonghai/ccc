
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/NativeJSBridgeIns.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '857c7pzTTlII4ckhD5SouyK', 'NativeJSBridgeIns');
// script/NativeJSBridgeIns.ts

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
var NativeJSBridgeIns = /** @class */ (function () {
    function NativeJSBridgeIns() {
    }
    NativeJSBridgeIns_1 = NativeJSBridgeIns;
    NativeJSBridgeIns.getInatance = function () {
        if (this._instance == null)
            this._instance = new NativeJSBridgeIns_1();
        return this._instance;
    };
    NativeJSBridgeIns.prototype.ajustStatue = function (_refCount) {
        cc.log("TS Callback:" + _refCount);
        DataManager_1.default.Adjust_status = _refCount;
        // if (_refCount !== '' && _refCount.toLowerCase() !== 'organic') {
        //     // 字符串不为空且不为 "organic" 或 "Organic"，执行你的操作
        //     DataManager.Adjust_status = _refCount;
        //     // EventMgr.Instance.Emit(EventId.adjust, _refCount);
        // }
    };
    var NativeJSBridgeIns_1;
    NativeJSBridgeIns._instance = null;
    /////facebook
    NativeJSBridgeIns.CallBackKey = 'nativeCallback';
    NativeJSBridgeIns._prevErr = '';
    NativeJSBridgeIns._hasInited = false;
    NativeJSBridgeIns.appActiveStatue = false;
    NativeJSBridgeIns = NativeJSBridgeIns_1 = __decorate([
        ccclass
    ], NativeJSBridgeIns);
    return NativeJSBridgeIns;
}());
//第一种方法 window.NativeJSBridgeIns.googleLoginRes
window['NativeJSBridgeIns'] = NativeJSBridgeIns.getInatance();
//第二种方法
// window.callAndroid = CallAndroid.getInatance();
// declare interface Window{
//     callAndroid:CallAndroid;
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxOYXRpdmVKU0JyaWRnZUlucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7O0FBRWxGLDZDQUF3QztBQUVsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBd0JBLENBQUM7MEJBeEJLLGlCQUFpQjtJQVdMLDZCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQWlCLEVBQUUsQ0FBQztRQUNyRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNNLHVDQUFXLEdBQWxCLFVBQW1CLFNBQWlCO1FBQ2hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLHFCQUFXLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUN0QyxtRUFBbUU7UUFDbkUsZ0RBQWdEO1FBQ2hELDZDQUE2QztRQUM3Qyw0REFBNEQ7UUFDNUQsSUFBSTtJQUNSLENBQUM7O0lBdEJjLDJCQUFTLEdBQXNCLElBQUksQ0FBQztJQUNuRCxhQUFhO0lBQ0UsNkJBQVcsR0FBVyxnQkFBZ0IsQ0FBQztJQUd2QywwQkFBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLDRCQUFVLEdBQUcsS0FBSyxDQUFDO0lBRW5CLGlDQUFlLEdBQVksS0FBSyxDQUFDO0lBVDlDLGlCQUFpQjtRQUR0QixPQUFPO09BQ0YsaUJBQWlCLENBd0J0QjtJQUFELHdCQUFDO0NBeEJELEFBd0JDLElBQUE7QUFDRCwrQ0FBK0M7QUFDL0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDOUQsT0FBTztBQUNQLGtEQUFrRDtBQUNsRCw0QkFBNEI7QUFDNUIsK0JBQStCO0FBQy9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gJy4vRGF0YU1hbmFnZXInO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuY2xhc3MgTmF0aXZlSlNCcmlkZ2VJbnMge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTmF0aXZlSlNCcmlkZ2VJbnMgPSBudWxsO1xuICAgIC8vLy8vZmFjZWJvb2tcbiAgICBwcml2YXRlIHN0YXRpYyBDYWxsQmFja0tleTogc3RyaW5nID0gJ25hdGl2ZUNhbGxiYWNrJztcbiAgICBwcml2YXRlIHN0YXRpYyBfY2FsbEJhY2tQcmVmaXg6IHN0cmluZzsgLy/lm57osIPpm4blkIjlrZfnrKbliY3nvIBcblxuICAgIHByaXZhdGUgc3RhdGljIF9wcmV2RXJyID0gJyc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2hhc0luaXRlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXBwQWN0aXZlU3RhdHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluYXRhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkgdGhpcy5faW5zdGFuY2UgPSBuZXcgTmF0aXZlSlNCcmlkZ2VJbnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgICBwdWJsaWMgYWp1c3RTdGF0dWUoX3JlZkNvdW50OiBzdHJpbmcpIHtcbiAgICAgICAgY2MubG9nKFwiVFMgQ2FsbGJhY2s6XCIrIF9yZWZDb3VudCk7XG4gICAgICAgIERhdGFNYW5hZ2VyLkFkanVzdF9zdGF0dXMgPSBfcmVmQ291bnQ7XG4gICAgICAgIC8vIGlmIChfcmVmQ291bnQgIT09ICcnICYmIF9yZWZDb3VudC50b0xvd2VyQ2FzZSgpICE9PSAnb3JnYW5pYycpIHtcbiAgICAgICAgLy8gICAgIC8vIOWtl+espuS4suS4jeS4uuepuuS4lOS4jeS4uiBcIm9yZ2FuaWNcIiDmiJYgXCJPcmdhbmljXCLvvIzmiafooYzkvaDnmoTmk43kvZxcbiAgICAgICAgLy8gICAgIERhdGFNYW5hZ2VyLkFkanVzdF9zdGF0dXMgPSBfcmVmQ291bnQ7XG4gICAgICAgIC8vICAgICAvLyBFdmVudE1nci5JbnN0YW5jZS5FbWl0KEV2ZW50SWQuYWRqdXN0LCBfcmVmQ291bnQpO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuLy/nrKzkuIDnp43mlrnms5Ugd2luZG93Lk5hdGl2ZUpTQnJpZGdlSW5zLmdvb2dsZUxvZ2luUmVzXG53aW5kb3dbJ05hdGl2ZUpTQnJpZGdlSW5zJ10gPSBOYXRpdmVKU0JyaWRnZUlucy5nZXRJbmF0YW5jZSgpO1xuLy/nrKzkuoznp43mlrnms5Vcbi8vIHdpbmRvdy5jYWxsQW5kcm9pZCA9IENhbGxBbmRyb2lkLmdldEluYXRhbmNlKCk7XG4vLyBkZWNsYXJlIGludGVyZmFjZSBXaW5kb3d7XG4vLyAgICAgY2FsbEFuZHJvaWQ6Q2FsbEFuZHJvaWQ7XG4vLyB9XG4iXX0=