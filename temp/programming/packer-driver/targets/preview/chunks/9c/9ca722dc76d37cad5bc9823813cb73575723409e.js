System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DynamicAssetMgr, GameMgr, ResMgr, Appic, _crd;

  function _reportPossibleCrUseOfDynamicAssetMgr(extras) {
    _reporterNs.report("DynamicAssetMgr", "../manages/DynamicAssetMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMgr(extras) {
    _reporterNs.report("GameMgr", "../manages/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../manages/ResMgr", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DynamicAssetMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      GameMgr = _unresolved_3.default;
    }, function (_unresolved_4) {
      ResMgr = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2e46FoC/9Ps4gNkZQKfdOT", "Appic", undefined);

      _export("default", Appic = class Appic {});

      Appic.resMg = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
        error: Error()
      }), ResMgr) : ResMgr).GetInstance(_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
        error: Error()
      }), ResMgr) : ResMgr);
      Appic.DAM = (_crd && DynamicAssetMgr === void 0 ? (_reportPossibleCrUseOfDynamicAssetMgr({
        error: Error()
      }), DynamicAssetMgr) : DynamicAssetMgr).GetInstance(_crd && DynamicAssetMgr === void 0 ? (_reportPossibleCrUseOfDynamicAssetMgr({
        error: Error()
      }), DynamicAssetMgr) : DynamicAssetMgr);
      // public static poolMg = PoolMgr.GetInstance(PoolMgr);
      Appic.gameMg = (_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
        error: Error()
      }), GameMgr) : GameMgr).GetInstance(_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
        error: Error()
      }), GameMgr) : GameMgr);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ca722dc76d37cad5bc9823813cb73575723409e.js.map