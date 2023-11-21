System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventTarget, EveMgr, _crd;

  _export("EveMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77537FbnEtE+ozsplKsUhAQ", "EveMgr", undefined);

      __checkObsolete__(['EventTarget']);

      _export("EveMgr", EveMgr = class EveMgr {});

      EveMgr.event = new EventTarget();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48ff8936cc036d12fc397f987a78e3b40f7d04b9.js.map