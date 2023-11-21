
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/NativeJSBridgeIns.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b45f3VzBtO8pBsHbWEVS0t', 'NativeJSBridgeIns');
// script/util/NativeJSBridgeIns.ts

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
var DataManager_1 = require("../DataManager");
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
        console.log('TS Callback: ' + _refCount);
        if (_refCount !== '' && _refCount.toLowerCase() !== 'organic') {
            // 字符串不为空且不为 "organic" 或 "Organic"，执行你的操作
            DataManager_1.default.Adjust_status = _refCount;
            // EventMgr.Instance.Emit(EventId.adjust, _refCount);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxOYXRpdmVKU0JyaWRnZUlucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7O0FBRWxGLDhDQUF5QztBQUtuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBd0JBLENBQUM7MEJBeEJLLGlCQUFpQjtJQVdMLDZCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQWlCLEVBQUUsQ0FBQztRQUNyRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNNLHVDQUFXLEdBQWxCLFVBQW1CLFNBQWlCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBRXpDLElBQUksU0FBUyxLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQzNELHlDQUF5QztZQUN6QyxxQkFBVyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDdEMscURBQXFEO1NBQ3hEO0lBQ0wsQ0FBQzs7SUF0QmMsMkJBQVMsR0FBc0IsSUFBSSxDQUFDO0lBQ25ELGFBQWE7SUFDRSw2QkFBVyxHQUFXLGdCQUFnQixDQUFDO0lBR3ZDLDBCQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2QsNEJBQVUsR0FBRyxLQUFLLENBQUM7SUFFbkIsaUNBQWUsR0FBWSxLQUFLLENBQUM7SUFUOUMsaUJBQWlCO1FBRHRCLE9BQU87T0FDRixpQkFBaUIsQ0F3QnRCO0lBQUQsd0JBQUM7Q0F4QkQsQUF3QkMsSUFBQTtBQUNELCtDQUErQztBQUMvQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM5RCxPQUFPO0FBQ1Asa0RBQWtEO0FBQ2xELDRCQUE0QjtBQUM1QiwrQkFBK0I7QUFDL0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi4vRGF0YU1hbmFnZXInO1xuaW1wb3J0IHsgRXZlbnRJZCB9IGZyb20gJy4vZGVmaW5lJztcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50L0V2ZW50JztcbmltcG9ydCBFdmVudE1nciBmcm9tICcuL2V2ZW50L0V2ZW50TWdyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmNsYXNzIE5hdGl2ZUpTQnJpZGdlSW5zIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IE5hdGl2ZUpTQnJpZGdlSW5zID0gbnVsbDtcbiAgICAvLy8vL2ZhY2Vib29rXG4gICAgcHJpdmF0ZSBzdGF0aWMgQ2FsbEJhY2tLZXk6IHN0cmluZyA9ICduYXRpdmVDYWxsYmFjayc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2NhbGxCYWNrUHJlZml4OiBzdHJpbmc7IC8v5Zue6LCD6ZuG5ZCI5a2X56ym5YmN57yAXG5cbiAgICBwcml2YXRlIHN0YXRpYyBfcHJldkVyciA9ICcnO1xuICAgIHByaXZhdGUgc3RhdGljIF9oYXNJbml0ZWQgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc3RhdGljIGFwcEFjdGl2ZVN0YXR1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbmF0YW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHRoaXMuX2luc3RhbmNlID0gbmV3IE5hdGl2ZUpTQnJpZGdlSW5zKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG4gICAgcHVibGljIGFqdXN0U3RhdHVlKF9yZWZDb3VudDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUUyBDYWxsYmFjazogJyArIF9yZWZDb3VudCk7XG5cbiAgICAgICAgaWYgKF9yZWZDb3VudCAhPT0gJycgJiYgX3JlZkNvdW50LnRvTG93ZXJDYXNlKCkgIT09ICdvcmdhbmljJykge1xuICAgICAgICAgICAgLy8g5a2X56ym5Liy5LiN5Li656m65LiU5LiN5Li6IFwib3JnYW5pY1wiIOaIliBcIk9yZ2FuaWNcIu+8jOaJp+ihjOS9oOeahOaTjeS9nFxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuQWRqdXN0X3N0YXR1cyA9IF9yZWZDb3VudDtcbiAgICAgICAgICAgIC8vIEV2ZW50TWdyLkluc3RhbmNlLkVtaXQoRXZlbnRJZC5hZGp1c3QsIF9yZWZDb3VudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vL+esrOS4gOenjeaWueazlSB3aW5kb3cuTmF0aXZlSlNCcmlkZ2VJbnMuZ29vZ2xlTG9naW5SZXNcbndpbmRvd1snTmF0aXZlSlNCcmlkZ2VJbnMnXSA9IE5hdGl2ZUpTQnJpZGdlSW5zLmdldEluYXRhbmNlKCk7XG4vL+esrOS6jOenjeaWueazlVxuLy8gd2luZG93LmNhbGxBbmRyb2lkID0gQ2FsbEFuZHJvaWQuZ2V0SW5hdGFuY2UoKTtcbi8vIGRlY2xhcmUgaW50ZXJmYWNlIFdpbmRvd3tcbi8vICAgICBjYWxsQW5kcm9pZDpDYWxsQW5kcm9pZDtcbi8vIH1cbiJdfQ==