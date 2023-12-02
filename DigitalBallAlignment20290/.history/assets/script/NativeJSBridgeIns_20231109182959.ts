// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DataManager from './DataManager';

const { ccclass, property } = cc._decorator;

@ccclass
class NativeJSBridgeIns {
    private static _instance: NativeJSBridgeIns = null;
    /////facebook
    private static CallBackKey: string = 'nativeCallback';
    private static _callBackPrefix: string; //回调集合字符前缀

    private static _prevErr = '';
    private static _hasInited = false;

    private static appActiveStatue: boolean = false;

    public static getInatance() {
        if (this._instance == null) this._instance = new NativeJSBridgeIns();
        return this._instance;
    }
    public ajustStatue(_refCount: string) {
        cc.log('TS Callback:' + _refCount);
        DataManager.Adjust_status = _refCount;
    }
}

window['JSBNative'] = JSBNative.getInatance();

