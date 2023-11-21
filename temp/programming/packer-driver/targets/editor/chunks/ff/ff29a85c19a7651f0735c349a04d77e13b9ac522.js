System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, EveMgr, EEventRult, ELoginType, Appic, _class, _class2, _crd, ccclass, property, NativeJSBridgeIns;

  function _reportPossibleCrUseOfEveMgr(extras) {
    _reporterNs.report("EveMgr", "../manages/EveMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEEventRult(extras) {
    _reporterNs.report("EEventRult", "./enumes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfELoginType(extras) {
    _reporterNs.report("ELoginType", "./enumes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppic(extras) {
    _reporterNs.report("Appic", "./Appic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      error = _cc.error;
    }, function (_unresolved_2) {
      EveMgr = _unresolved_2.EveMgr;
    }, function (_unresolved_3) {
      EEventRult = _unresolved_3.EEventRult;
      ELoginType = _unresolved_3.ELoginType;
    }, function (_unresolved_4) {
      Appic = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a19d7p2dZHObjsyD1ufTmq", "NativeJSBridgeIns", undefined); // Learn TypeScript:
      //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
      // Learn Attribute:
      //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
      // Learn life-cycle callbacks:
      //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


      __checkObsolete__(['_decorator', 'error']);

      ({
        ccclass,
        property
      } = _decorator);
      NativeJSBridgeIns = ccclass(_class = (_class2 = class NativeJSBridgeIns {
        static getInatance() {
          if (this._instance == null) this._instance = new NativeJSBridgeIns();
          return this._instance;
        }

        activeStatue(_appActiveStatue) {
          error('TS Callback:' + _appActiveStatue);
          (_crd && EveMgr === void 0 ? (_reportPossibleCrUseOfEveMgr({
            error: Error()
          }), EveMgr) : EveMgr).event.emit((_crd && EEventRult === void 0 ? (_reportPossibleCrUseOfEEventRult({
            error: Error()
          }), EEventRult) : EEventRult).appActiveStatue, _appActiveStatue);
        }

        googleLoginRes(_strName, _strEmail, _strIdToken) {
          //lang?: string;
          error('TS Callback:' + _strName + _strEmail + _strIdToken);
          (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).gameMg.loginInfo.user.name = _strIdToken;
          (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).gameMg.loginInfo.user.loginData.id_token = _strIdToken;
          (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).gameMg.loginInfo.user.loginData.email = _strEmail || '';
          (_crd && EveMgr === void 0 ? (_reportPossibleCrUseOfEveMgr({
            error: Error()
          }), EveMgr) : EveMgr).event.emit((_crd && ELoginType === void 0 ? (_reportPossibleCrUseOfELoginType({
            error: Error()
          }), ELoginType) : ELoginType).Google);
        }

        facebookLoginRes(_strName, _strEmail, _strIdToken) {
          error('TS Callback:' + _strName + _strEmail + _strIdToken);
          (_crd && EveMgr === void 0 ? (_reportPossibleCrUseOfEveMgr({
            error: Error()
          }), EveMgr) : EveMgr).event.emit((_crd && ELoginType === void 0 ? (_reportPossibleCrUseOfELoginType({
            error: Error()
          }), ELoginType) : ELoginType).Facabook);
        } // /**设备品牌 设备imei1  设备序列号 设备系统*/
        // public getDeviceAllInfo(brand: string, imei: string, serial_number: string, system: string) {
        //     error('TS Callback:' + brand + imei + serial_number + system);
        //     Appic.SysMg.deviceInfo.brand = brand;
        //     Appic.SysMg.deviceInfo.imei1 = imei;
        //     Appic.SysMg.deviceInfo.serial_number = serial_number;
        //     Appic.SysMg.deviceInfo.system = system;
        //     Appic.MsgTipMg.show(Appic.SysMg.deviceInfo.imei1);
        //     EveMgr.event.emit(EventManager.deviceInfo);
        // }

        /**跳转第三方平台成功 */


        shareSuccess() {
          console.log('跳转第三方平台成功'); // Appic.PlayerMg.adShowEscalationEvent(4).then(() => {
          //     if (App.SysMg.inviteTypeShow == 2) {
          //         EventManager.event.emit(EventManager.shareSuccess);
          //     }
          // });

          (_crd && EveMgr === void 0 ? (_reportPossibleCrUseOfEveMgr({
            error: Error()
          }), EveMgr) : EveMgr).event.emit((_crd && EEventRult === void 0 ? (_reportPossibleCrUseOfEEventRult({
            error: Error()
          }), EEventRult) : EEventRult).shareSuccess);
        }
        /**安卓返回按钮 */


        onBackPressed() {
          console.log('按键返回');
          (_crd && EveMgr === void 0 ? (_reportPossibleCrUseOfEveMgr({
            error: Error()
          }), EveMgr) : EveMgr).event.emit((_crd && EEventRult === void 0 ? (_reportPossibleCrUseOfEEventRult({
            error: Error()
          }), EEventRult) : EEventRult).backPressed);
        } // public getPhoneInfo(androidId, lang) {
        //     error('TS Callback:' + androidId + lang);
        //     console.log('手机数据' + androidId + '::' + lang);
        //     App.SysMg.PhoneInfo.andirodId = androidId;
        //     App.SysMg.PhoneInfo.lang = lang;
        // }
        //facabook;
        // public static init() {
        //     if (sys.isBrowser) {
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


      }, _class2._instance = null, _class2.CallBackKey = 'nativeCallback', _class2._callBackPrefix = void 0, _class2._prevErr = '', _class2._hasInited = false, _class2.appActiveStatue = false, _class2)) || _class; //第一种方法 window.NativeJSBridgeIns.googleLoginRes

      window['NativeJSBridgeIns'] = NativeJSBridgeIns.getInatance(); //第二种方法
      // window.callAndroid = CallAndroid.getInatance();
      // declare interface Window{
      //     callAndroid:CallAndroid;
      // }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff29a85c19a7651f0735c349a04d77e13b9ac522.js.map