System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, find, ResolutionPolicy, view, director, sys, Appic, AudioMgr, EAudioType, ELoginResult, ELoginType, EveMgr, _dec, _class, _crd, ccclass, property, LoginScene;

  function _reportPossibleCrUseOfILoginInfo(extras) {
    _reporterNs.report("ILoginInfo", "../tools/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppic(extras) {
    _reporterNs.report("Appic", "../tools/Appic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../manages/AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEAudioType(extras) {
    _reporterNs.report("EAudioType", "../tools/enumes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfELoginResult(extras) {
    _reporterNs.report("ELoginResult", "../tools/enumes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfELoginType(extras) {
    _reporterNs.report("ELoginType", "../tools/enumes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEveMgr(extras) {
    _reporterNs.report("EveMgr", "../manages/EveMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      find = _cc.find;
      ResolutionPolicy = _cc.ResolutionPolicy;
      view = _cc.view;
      director = _cc.director;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Appic = _unresolved_2.default;
    }, function (_unresolved_3) {
      AudioMgr = _unresolved_3.AudioMgr;
    }, function (_unresolved_4) {
      EAudioType = _unresolved_4.EAudioType;
      ELoginResult = _unresolved_4.ELoginResult;
      ELoginType = _unresolved_4.ELoginType;
    }, function (_unresolved_5) {
      EveMgr = _unresolved_5.EveMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4f71NAwiVNzoLHVkIIT1hl", "LoginScene", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Canvas', 'Component', 'find', 'Node', 'ResolutionPolicy', 'Size', 'view', 'Event', 'director', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginScene", LoginScene = (_dec = ccclass('LoginScene'), _dec(_class = class LoginScene extends Component {
        constructor(...args) {
          super(...args);

          /**谷歌登录 */
          this.btn_google = null;

          /**邮箱登录 */
          this.btn_email = null;

          /**试玩登录 */
          this.btn_guest = null;
          this.isCanLogin = false;
          this.userData = {};
        }

        setFrameFit() {
          const designResolution = view.getDesignResolutionSize();
          const visibleSize = view.getVisibleSize(); // 屏幕可见区域
          // 场景适配

          if (visibleSize.width / visibleSize.height < designResolution.width / designResolution.height) {
            view.setDesignResolutionSize(designResolution.width, designResolution.height, ResolutionPolicy.FIXED_WIDTH);
          } else {
            view.setDesignResolutionSize(designResolution.width, designResolution.height, ResolutionPolicy.FIXED_HEIGHT);
          }
        }

        onLoad() {
          this.setFrameFit();
          this.initView();
        }

        initView() {
          var _find, _find2;

          this.btn_google = (_find = find('Canvas/layer_mid/btn_google')) == null ? void 0 : _find.getComponent(Button);
          this.btn_guest = (_find2 = find('Canvas/layer_mid/btn_guest')) == null ? void 0 : _find2.getComponent(Button);
        }

        initEvent() {
          this.btn_google && this.btn_google.node.on('click', this.onClickHandel, this);
          this.btn_guest && this.btn_guest.node.on('click', this.onClickHandel, this);
          (_crd && EveMgr === void 0 ? (_reportPossibleCrUseOfEveMgr({
            error: Error()
          }), EveMgr) : EveMgr).event.on((_crd && ELoginType === void 0 ? (_reportPossibleCrUseOfELoginType({
            error: Error()
          }), ELoginType) : ELoginType).Google, this.googleLoginPost, this);
          (_crd && EveMgr === void 0 ? (_reportPossibleCrUseOfEveMgr({
            error: Error()
          }), EveMgr) : EveMgr).event.on((_crd && ELoginResult === void 0 ? (_reportPossibleCrUseOfELoginResult({
            error: Error()
          }), ELoginResult) : ELoginResult).Success, this.loginResultHandel, this);
        }

        removeEvent() {
          this.btn_google && this.btn_google.node.off('click', this.onClickHandel, this);
          this.btn_guest && this.btn_guest.node.off('click', this.onClickHandel, this);
          (_crd && EveMgr === void 0 ? (_reportPossibleCrUseOfEveMgr({
            error: Error()
          }), EveMgr) : EveMgr).event.off((_crd && ELoginType === void 0 ? (_reportPossibleCrUseOfELoginType({
            error: Error()
          }), ELoginType) : ELoginType).Google, this.googleLoginPost, this);
          (_crd && EveMgr === void 0 ? (_reportPossibleCrUseOfEveMgr({
            error: Error()
          }), EveMgr) : EveMgr).event.off((_crd && ELoginResult === void 0 ? (_reportPossibleCrUseOfELoginResult({
            error: Error()
          }), ELoginResult) : ELoginResult).Success, this.loginResultHandel, this);
        }

        onEnable() {
          this.initEvent();
        }

        start() {
          (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).gameMg.init();
          this.loadRes();
          this.loadData();
        }

        onDisable() {
          this.removeEvent();
        }

        async loadRes() {
          director.preloadScene('Hall', () => {
            console.log('Hall scene preloaded');
            this.isCanLogin = true;
          });
        }

        async loadData() {
          this.isCanLogin = false;
          this.userData = JSON.parse(sys.localStorage.getItem('userData'));
          this.btn_guest.node.active = !(this.userData && this.userData.user.loginData.is_guest && this.userData.user.loginData.is_guest == 1);

          if (this.userData) {
            this.isCanLogin = true;
            (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
              error: Error()
            }), Appic) : Appic).gameMg.loginInfo = this.userData;

            if ((_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
              error: Error()
            }), Appic) : Appic).gameMg.loginInfo.user.loginData.id_token) {
              (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
                error: Error()
              }), Appic) : Appic).gameMg.loginSucess((_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
                error: Error()
              }), Appic) : Appic).gameMg.loginInfo);
            }
          }
        }

        update(deltaTime) {}

        onClickHandel(evet) {
          let targetName = evet.target.name;

          switch (targetName) {
            case 'btn_google':
              this._onGoogleLogin();

              break;

            case 'btn_guest':
              this._onGuestLogin();

              break;

            default:
              break;
          }
        }
        /**谷歌登录请求服务器 */


        _onGoogleLogin() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).GetInstance(_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).playOneShot((_crd && EAudioType === void 0 ? (_reportPossibleCrUseOfEAudioType({
            error: Error()
          }), EAudioType) : EAudioType).E_btnEff1);
          this.changeBtnStatue(false); // App.SysMg.showWaite();

          (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).gameMg.logInGoogle();
        }
        /**游客登录 */


        _onGuestLogin() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).GetInstance(_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).playOneShot((_crd && EAudioType === void 0 ? (_reportPossibleCrUseOfEAudioType({
            error: Error()
          }), EAudioType) : EAudioType).E_btnEff1);
          this.changeBtnStatue(false); // App.SysMg.showWaite();

          (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).gameMg.GuideHandel();
        }

        changeBtnStatue(btnStatue) {
          this.btn_google.interactable = btnStatue;
          this.btn_guest.interactable = btnStatue;
          this.scheduleOnce(() => {
            if (!btnStatue) {
              this.btn_google.interactable = !btnStatue;
              this.btn_guest.interactable = !btnStatue;
            }
          }, 1.5);
        }
        /**谷歌登录回调 */


        googleLoginPost(data) {
          (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).gameMg.loginSucess(data);
        }
        /*login success**/


        loginResultHandel() {
          (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).gameMg.getUserInfo().then(() => {
            this.loadScene();
          });
        }
        /**跳转场景 */


        loadScene() {
          // Appic.gameMg.hideWaite();
          // let waitimg: cc.Node = this.node.getChildByName(this.nodeName);
          // if (waitimg) {
          //     App.ResMg.putNode(waitimg);
          // }
          this.isCanLogin = true;
          director.loadScene('Hall');
        }

        onDestroy() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=97c47bf14dcdf0545d4f59f4e211508cdfbc09b2.js.map