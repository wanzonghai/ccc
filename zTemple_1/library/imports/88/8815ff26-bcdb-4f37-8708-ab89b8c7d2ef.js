"use strict";
cc._RF.push(module, '8815f8mvNtPN4cIq4m4x9Lv', 'Util');
// script/util/Util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    /**生成随机数 */
    Util.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    /**随机生成数组 */
    Util.prototype.getRandArray = function (min, max, length) {
        var NumberArray = [];
        for (var i = 0; i < length; i++) {
            NumberArray.push(this.getRandomInt(min, max));
        }
        return NumberArray;
    };
    //公共方法类
    Util.instance = new Util();
    return Util;
}());
exports.default = Util.instance;

cc._RF.pop();