System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, native, sys, Singleton, Appic, AudioMgr, ELoginResult, ELoginType, Until, EveMgr, GameMgr, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../bases/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppic(extras) {
    _reporterNs.report("Appic", "../tools/Appic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfILoginInfo(extras) {
    _reporterNs.report("ILoginInfo", "../tools/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "./AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfELoginResult(extras) {
    _reporterNs.report("ELoginResult", "../tools/enumes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfELoginType(extras) {
    _reporterNs.report("ELoginType", "../tools/enumes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUntil(extras) {
    _reporterNs.report("Until", "../tools/Until", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEveMgr(extras) {
    _reporterNs.report("EveMgr", "./EveMgr", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      native = _cc.native;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      Appic = _unresolved_3.default;
    }, function (_unresolved_4) {
      AudioMgr = _unresolved_4.AudioMgr;
    }, function (_unresolved_5) {
      ELoginResult = _unresolved_5.ELoginResult;
      ELoginType = _unresolved_5.ELoginType;
    }, function (_unresolved_6) {
      Until = _unresolved_6.Until;
    }, function (_unresolved_7) {
      EveMgr = _unresolved_7.EveMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "390cdOwI8JCO6Zx+yzq/FKn", "GameMgr", undefined);

      __checkObsolete__(['JsonAsset', 'director', 'native', 'sys']);

      _export("default", GameMgr = class GameMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);

          /**玩家登录时信息  */
          this.loginInfo = {};
        }

        init() {
          this.loginInfo = {};
          this.loginInfo.user = {};
          this.loginInfo.user.loginData = {};
          (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).DAM.init();
          (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).resMg.init();
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).GetInstance(_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).initAudioMgr('audio');
        } ///谷歌

        /**静默登录 */


        silentSignInGoogle() {
          if (sys.isNative) {
            if (sys.os == sys.OS.ANDROID) {
              native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'silentSignIn', '()V');
            } // else if (cc.sys.os == cc.sys.OS_IOS) {
            //     ret = jsb.reflection.callStaticMethod(Native.ApiIOS, 'loginGoogle:', this._callBackPrefix + cbKey);
            // }

          }
        }
        /** 意图登录 */


        logInGoogle() {
          return new Promise((resolve, reject) => {
            if (sys.isNative) {
              if (sys.os == sys.OS.ANDROID) {
                native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'logIn', '()V');
              } // else if (cc.sys.os == cc.sys.OS_IOS) {
              //     ret = jsb.reflection.callStaticMethod(Native.ApiIOS, 'loginGoogle:', this._callBackPrefix + cbKey);
              // }

            }
          });
        }
        /**游客登录 */


        GuideHandel() {
          var body = {};
          body.user = {};
          body.user.loginData = {};
          body.type = (_crd && ELoginType === void 0 ? (_reportPossibleCrUseOfELoginType({
            error: Error()
          }), ELoginType) : ELoginType).Guest; // if (!this.deviceInfo.serial_number) return;

          body.token = (_crd && Until === void 0 ? (_reportPossibleCrUseOfUntil({
            error: Error()
          }), Until) : Until).generateRandomString(8);
          body.user.loginData.id_token = (_crd && Until === void 0 ? (_reportPossibleCrUseOfUntil({
            error: Error()
          }), Until) : Until).generateRandomString(50);
          body.user.name = (_crd && Until === void 0 ? (_reportPossibleCrUseOfUntil({
            error: Error()
          }), Until) : Until).generateRandomName();
          body.user.id = (_crd && Until === void 0 ? (_reportPossibleCrUseOfUntil({
            error: Error()
          }), Until) : Until).generateRandomPlayerId();
          body.user.score = 1000; // body.device = this.deviceInfo;
          // var body = { option: loginType.test, phone: this.accountNumber };
          // let _strIdToken: string = this.idToken;

          this.loginSucess(body);
        }
        /**登录成功 开启socket检测  */


        loginSucess(data) {
          if (!data || !data.user) return;
          console.log('登录成功' + JSON.stringify(data));
          this.loginInfo.token = data.token;
          this.loginInfo.user = data.user;
          (_crd && EveMgr === void 0 ? (_reportPossibleCrUseOfEveMgr({
            error: Error()
          }), EveMgr) : EveMgr).event.emit((_crd && ELoginResult === void 0 ? (_reportPossibleCrUseOfELoginResult({
            error: Error()
          }), ELoginResult) : ELoginResult).Success);
        }

        getUserInfo() {
          return new Promise((resolve, reject) => {
            /**存入idtoken */
            this.wariteVerifyIdToken(this.loginInfo);
            resolve();
          });
        }

        wariteVerifyIdToken(data) {
          /**存入idtoken */
          if (!data) return;
          let userData = JSON.parse(sys.localStorage.getItem('userData'));
          userData = data;
          sys.localStorage.setItem('userData', JSON.stringify(userData));
          console.log('userData:' + userData);
        }
        /**Android 系统分享 */


        androidShare() {
          if (sys.isNative) {
            if (sys.os == sys.OS.ANDROID) {
              // App.MsgTipMg.show(languageManage.getString('tips_txt6'));
              native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'showShareView', '()V');
            } // else if (cc.sys.os == cc.sys.OS_IOS) {
            //     ret = jsb.reflection.callStaticMethod(Native.ApiIOS, 'loginGoogle:', this._callBackPrefix + cbKey);
            // }

          }
        } //登出Google


        logOutGoogle() {
          if (sys.isNative) {
            console.log('logOutGoogle!!!!');

            if (sys.os == sys.OS.ANDROID) {
              native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'logOutGoogle', '()V');
            } //  else if (cc.sys.os == cc.sys.OS_IOS) {
            //     jsb.reflection.callStaticMethod(Native.ApiIOS, 'logOutGoogle', null);
            // }

          }
        }
        /**退出登录 */


        backLogin() {
          return new Promise((resolve, reject) => {
            /// 退出登录
            if (this.loginInfo.type == 1) {
              this.logOutGoogle();
            }

            director.preloadScene('Login', () => {
              // 当我们需要删除时
              if (this.loginInfo.type != (_crd && ELoginType === void 0 ? (_reportPossibleCrUseOfELoginType({
                error: Error()
              }), ELoginType) : ELoginType).Google) {
                sys.localStorage.removeItem('userData');
                let data = {};
                data.user.loginData.is_guest = 1;
                this.wariteVerifyIdToken(data);
              } // Appic.resMg.destoryRes();


              (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                error: Error()
              }), AudioMgr) : AudioMgr).GetInstance(_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                error: Error()
              }), AudioMgr) : AudioMgr).stop();
              director.loadScene('Login');
              console.log('Login scene preloaded');
            });
          });
        }

        exitApp() {
          if (sys.isNative) {
            console.log('退出应用!!!!');

            if (sys.os == sys.OS.ANDROID) {
              native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'exitApp', '()V');
            } //  else if (cc.sys.os == cc.sys.OS_IOS) {
            //     jsb.reflection.callStaticMethod(Native.ApiIOS, 'logOutGoogle', null);
            // }

          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2189a1902ebad81842debe29191e39e28bf054e6.js.map