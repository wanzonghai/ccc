// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html



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
  
    public onBackPressed() {
        console.log('按键返回');
        EventManager.event.emit(EventManager.onBackHandel);
    }

    // public getPhoneInfo(androidId, lang) {
    //     cc.error('TS Callback:' + androidId + lang);
    //     console.log('手机数据' + androidId + '::' + lang);
    //     App.SysMg.PhoneInfo.andirodId = androidId;
    //     App.SysMg.PhoneInfo.lang = lang;
    // }

    //facabook;
    // public static init() {
    //     if (cc.sys.isBrowser) {
    //         return;
    //     }
    //     if (this._hasInited) {
    //         return;
    //     }
    //     this._hasInited = true;
    //     window[this.CallBackKey] = {}; //回调函数集合
    //     this._callBackPrefix = 'window.' + this.CallBackKey + '.';
    //     //捕获异常
    //     if (cc.sys.isNative) {
    //         window['__errorHandler'] = function (file: any, line: any, error: any, stack: any) {
    //             if (this._prevErr != error + line) {
    //                 stack = String(stack);
    //                 console.log('========== GOT JS/TS ERROR ==========');
    //                 console.log('file:' + file, 'line:' + line, 'error:' + error);
    //                 console.log(stack);
    //                 this._prevErr = error + line;
    //             }
    //         };
    //     }
    // }
    // 登陆fb   Native.loginFacebook((ret:any)=>{cc.log(ret)},"(%s)")
}
//第一种方法 window.NativeJSBridgeIns.googleLoginRes
window['NativeJSBridgeIns'] = NativeJSBridgeIns.getInatance();
//第二种方法
// window.callAndroid = CallAndroid.getInatance();
// declare interface Window{
//     callAndroid:CallAndroid;
// }
