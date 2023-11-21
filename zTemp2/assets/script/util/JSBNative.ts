import DataManager from '../DataManager';

const { ccclass, property } = cc._decorator;

@ccclass
class JSBNative {
    private static _instance: JSBNative = null;
    public static getInatance() {
        if (this._instance == null) this._instance = new JSBNative();
        return this._instance;
    }
    public ajustStatue(_refCount: string) {
        cc.log('TS Callback:' + _refCount);
        DataManager.Adjust_status = _refCount;
    }
}

window['JSBNative'] = JSBNative.getInatance();
