
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/Util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQW9CQSxDQUFDO0lBZkcsV0FBVztJQUNYLDJCQUFZLEdBQVosVUFBYSxHQUFXLEVBQUUsR0FBVztRQUNqQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMzRCxDQUFDO0lBRUgsWUFBWTtJQUNaLDJCQUFZLEdBQVosVUFBYSxHQUFVLEVBQUMsR0FBVSxFQUFDLE1BQWE7UUFDNUMsSUFBSSxXQUFXLEdBQWlCLEVBQUUsQ0FBQTtRQUNsQyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ3JCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtTQUMvQztRQUNELE9BQU8sV0FBVyxDQUFBO0lBQ3RCLENBQUM7SUFsQkQsT0FBTztJQUNnQixhQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQWtCakQsV0FBQztDQXBCRCxBQW9CQyxJQUFBO0FBRUQsa0JBQWUsSUFBSSxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBVdGlse1xuICAgIC8v5YWs5YWx5pa55rOV57G7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZSA9IG5ldyBVdGlsKCk7XG5cblxuICAgIC8qKueUn+aIkOmaj+acuuaVsCAqL1xuICAgIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICAgIH1cblxuICAgIC8qKumaj+acuueUn+aIkOaVsOe7hCAqL1xuICAgIGdldFJhbmRBcnJheShtaW46bnVtYmVyLG1heDpudW1iZXIsbGVuZ3RoOm51bWJlcik6QXJyYXk8bnVtYmVyPntcbiAgICAgICAgbGV0IE51bWJlckFycmF5OkFycmF5PG51bWJlcj4gPSBbXVxuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspe1xuICAgICAgICAgICAgTnVtYmVyQXJyYXkucHVzaCh0aGlzLmdldFJhbmRvbUludChtaW4sbWF4KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyQXJyYXlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWwuaW5zdGFuY2U7XG5cbiJdfQ==