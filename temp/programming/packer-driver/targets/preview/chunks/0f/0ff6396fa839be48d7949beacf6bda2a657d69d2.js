System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Singleton, _crd;

  _export("Singleton", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61a9bvjnNhN1okgINcHaZuu", "Singleton", undefined);

      //Singleton.ts
      _export("Singleton", Singleton = class Singleton {
        //资源管理者类的构造函数
        constructor() {}

        static GetInstance(c) {
          if (this.instance == null) {
            this.instance = new c();
          }

          return this.instance;
        }

        init() {
          console.dir(this);
        }

      });

      Singleton.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ff6396fa839be48d7949beacf6bda2a657d69d2.js.map