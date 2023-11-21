"use strict";
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