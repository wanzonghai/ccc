"use strict";
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