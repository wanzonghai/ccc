System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _class, _class2, _crd, ccclass, property, RedUtil;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "531fdcvQixCxI+0WZP1eYhF", "RedUtil", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RedUtil", RedUtil = ccclass(_class = (_class2 = class RedUtil {
        /**设置为单例模式
         * @returns {playerManager} 返回唯一实例
         */
        static get instance() {
          if (!this._instance) {
            this._instance = new RedUtil();
          }

          return this._instance;
        }
        /**商店item red */


        shopItemRed(statue = false) {
          return statue;
        }

      }, _class2._instance = null, _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=57583dbc96f792bb6297552be81928cfbe57e450.js.map