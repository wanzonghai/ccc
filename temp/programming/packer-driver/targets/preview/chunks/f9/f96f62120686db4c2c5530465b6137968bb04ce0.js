System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, Label, ResolutionPolicy, Sprite, _decorator, find, view, director, ScrollView, instantiate, Prefab, UITransform, Appic, Until, _dec, _class, _crd, ccclass, property, HallScene;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfAppic(extras) {
    _reporterNs.report("Appic", "../tools/Appic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUntil(extras) {
    _reporterNs.report("Until", "../tools/Until", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "../tools/interface", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      ResolutionPolicy = _cc.ResolutionPolicy;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
      find = _cc.find;
      view = _cc.view;
      director = _cc.director;
      ScrollView = _cc.ScrollView;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Appic = _unresolved_2.default;
    }, function (_unresolved_3) {
      Until = _unresolved_3.Until;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66a2dUjy81FaJUUr2sgznQP", "HallScene", undefined);

      __checkObsolete__(['Node', 'Button', 'Component', 'Label', 'ResolutionPolicy', 'Sprite', '_decorator', 'find', 'view', 'Event', 'director', 'log', 'ScrollView', 'instantiate', 'Prefab', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", HallScene = (_dec = ccclass('HallScene'), _dec(_class = class HallScene extends Component {
        constructor() {
          super(...arguments);
          this.layer_mid = null;
          //**********m_avatar
          this.sprite_avatar = null;
          this.label_userName = null;
          this.label_userCoin = null;
          this.btn_recharge = null;
          //***************button
          this.btn_service = null;
          this.btn_set = null;
          this.btn_checkIn = null;
          this.btn_eMail = null;
          this.btn_share = null;
          this.itemScroll = null;
          this.userInfo = null;
        }

        // LIFE-CYCLE CALLBACKS:
        setFrameFit() {
          var designResolution = view.getDesignResolutionSize();
          var visibleSize = view.getVisibleSize(); // 屏幕可见区域
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
          var _find, _this$layer_mid$getCh, _this$layer_mid$getCh2, _find2, _this$layer_mid$getCh3, _this$layer_mid$getCh4, _this$layer_mid$getCh5, _this$layer_mid$getCh6, _this$layer_mid$getCh7, _this$layer_mid$getCh8;

          //**********m_avatar
          this.layer_mid = find('Canvas/layer_mid');
          this.sprite_avatar = (_find = find('m_avatar/bg/Mask/sprite_avatar', this.layer_mid)) == null ? void 0 : _find.getComponent(Sprite);
          this.label_userName = (_this$layer_mid$getCh = this.layer_mid.getChildByName('label_userName')) == null ? void 0 : _this$layer_mid$getCh.getComponent(Label);
          this.label_userCoin = (_this$layer_mid$getCh2 = this.layer_mid.getChildByName('label_userCoin')) == null ? void 0 : _this$layer_mid$getCh2.getComponent(Label);
          this.btn_recharge = (_find2 = find('m_avatar/bg/btn_recharge', this.layer_mid)) == null ? void 0 : _find2.getComponent(Button); //**********button

          this.btn_service = (_this$layer_mid$getCh3 = this.layer_mid.getChildByName('btn_service')) == null ? void 0 : _this$layer_mid$getCh3.getComponent(Button);
          this.btn_set = (_this$layer_mid$getCh4 = this.layer_mid.getChildByName('btn_set')) == null ? void 0 : _this$layer_mid$getCh4.getComponent(Button);
          this.btn_checkIn = (_this$layer_mid$getCh5 = this.layer_mid.getChildByName('btn_checkIn')) == null ? void 0 : _this$layer_mid$getCh5.getComponent(Button);
          this.btn_eMail = (_this$layer_mid$getCh6 = this.layer_mid.getChildByName('btn_eMail')) == null ? void 0 : _this$layer_mid$getCh6.getComponent(Button);
          this.btn_share = (_this$layer_mid$getCh7 = this.layer_mid.getChildByName('btn_share')) == null ? void 0 : _this$layer_mid$getCh7.getComponent(Button);
          this.itemScroll = (_this$layer_mid$getCh8 = this.layer_mid.getChildByName('ScrollView')) == null ? void 0 : _this$layer_mid$getCh8.getComponent(ScrollView);
        }

        onEnable() {
          this.initEvent();
          this.userInfo = (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).gameMg.loginInfo.user;
          this.updateUserCoin();
          this.updateView();
        }

        onDisable() {
          this.removeEvent();
        }

        start() {
          this.loadRes();
        }

        loadRes() {
          var _this = this;

          return _asyncToGenerator(function* () {
            director.preloadScene('Login', () => {
              console.log('Login scene preloaded');
            });
            (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
              error: Error()
            }), Appic) : Appic).DAM.load(_this.node, 'prefab/hall/ItemPass', Prefab, resPre => {
              var itemPassPre = resPre;

              for (var index = 0; index < 5; index++) {
                var itemPaa = instantiate(itemPassPre);
                _this.itemScroll.content.getComponent(UITransform).width += itemPaa.getComponent(UITransform).width;
                itemPaa.setParent(_this.itemScroll.content);
              }
            });
          })();
        }

        initEvent() {
          this.btn_recharge && this.btn_recharge.node.on('click', this.onClickHandel, this);
          this.btn_service && this.btn_service.node.on('click', this.onClickHandel, this);
          this.btn_set && this.btn_set.node.on('click', this.onClickHandel, this);
          this.btn_checkIn && this.btn_checkIn.node.on('click', this.onClickHandel, this);
          this.btn_eMail && this.btn_eMail.node.on('click', this.onClickHandel, this);
          this.btn_share && this.btn_share.node.on('click', this.onClickHandel, this);
        }

        removeEvent() {
          this.btn_recharge && this.btn_recharge.node.off('click', this.onClickHandel, this);
          this.btn_service && this.btn_service.node.off('click', this.onClickHandel, this);
          this.btn_set && this.btn_set.node.off('click', this.onClickHandel, this);
          this.btn_checkIn && this.btn_checkIn.node.off('click', this.onClickHandel, this);
          this.btn_eMail && this.btn_eMail.node.off('click', this.onClickHandel, this);
          this.btn_share && this.btn_share.node.off('click', this.onClickHandel, this);
        }

        update(deltaTime) {}

        updateView() {
          this.label_userName.string = (_crd && Until === void 0 ? (_reportPossibleCrUseOfUntil({
            error: Error()
          }), Until) : Until).climeUserName(this.userInfo.name, 8);
        }

        updateUserCoin() {
          this.label_userCoin.string = (_crd && Until === void 0 ? (_reportPossibleCrUseOfUntil({
            error: Error()
          }), Until) : Until).formatNumber3(this.userInfo.score.toString());
        }

        lateUpdate() {}

        onClickHandel(evet) {
          var targetName = evet.target.name;

          switch (targetName) {
            case 'btn_recharge':
              this._rechargeHandel();

              break;

            case 'btn_service':
              this._serviceHandel();

              break;

            case 'btn_set':
              this._setHandel();

              break;

            case 'btn_checkIn':
              this._checkInHandel();

              break;

            case 'btn_eMail':
              this._eMailHandel();

              break;

            case 'btn_share':
              this._shareHandel();

              break;

            default:
              break;
          }
        }
        /** recharge*/


        _rechargeHandel() {
          console.log('recharge');
        }
        /** service*/


        _serviceHandel() {
          console.log('service');
        }
        /** set*/


        _setHandel() {
          console.log('set');
          director.loadScene('Login');
        }
        /** checkIn*/


        _checkInHandel() {
          console.log('checkIn');
        }
        /** eMail*/


        _eMailHandel() {
          console.log('eMail');
        }
        /** share*/


        _shareHandel() {
          console.log('share');
          (_crd && Appic === void 0 ? (_reportPossibleCrUseOfAppic({
            error: Error()
          }), Appic) : Appic).gameMg.androidShare();
        }

        onDestroy() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f96f62120686db4c2c5530465b6137968bb04ce0.js.map