System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EAudioType, ELoginType, ELoginResult, EEventRult;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20ac30CSgNDn4BQuBDD0fCK", "enumes", undefined);

      _export("EAudioType", EAudioType = /*#__PURE__*/function (EAudioType) {
        EAudioType["E_bg"] = "bgm";
        EAudioType["E_btnEff1"] = "btnEff1";
        return EAudioType;
      }({}));
      /**登录类型 */


      _export("ELoginType", ELoginType = /*#__PURE__*/function (ELoginType) {
        ELoginType[ELoginType["Google"] = 0] = "Google";
        ELoginType[ELoginType["Guest"] = 1] = "Guest";
        ELoginType[ELoginType["Email"] = 2] = "Email";
        ELoginType[ELoginType["IPhone"] = 3] = "IPhone";
        ELoginType[ELoginType["Facabook"] = 4] = "Facabook";
        return ELoginType;
      }({}));
      /**登录类型 */


      _export("ELoginResult", ELoginResult = /*#__PURE__*/function (ELoginResult) {
        ELoginResult[ELoginResult["Success"] = 0] = "Success";
        ELoginResult[ELoginResult["Fail"] = 1] = "Fail";
        return ELoginResult;
      }({}));
      /**登录类型 */


      _export("EEventRult", EEventRult = /*#__PURE__*/function (EEventRult) {
        EEventRult[EEventRult["appActiveStatue"] = 0] = "appActiveStatue";
        EEventRult[EEventRult["shareSuccess"] = 1] = "shareSuccess";
        EEventRult[EEventRult["backPressed"] = 2] = "backPressed";
        return EEventRult;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ef3ab5d2ead7c032ca0c01af984ee9b1236d386.js.map