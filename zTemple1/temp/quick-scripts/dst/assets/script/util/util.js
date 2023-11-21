
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ee53zg89FOcYf4i7SNaR6G', 'util');
// script/util/util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = /** @class */ (function () {
    function util() {
        var _this = this;
        /**
         * 深拷贝
        */
        this.copyObj = function (obj) {
            if (obj === void 0) { obj = {}; }
            var newobj = null;
            //判断是否需要继续进行递归
            if (typeof (obj) == 'object' && obj !== null) {
                newobj = obj instanceof Array ? [] : {}; //进行下一层递归克隆
                for (var i in obj) {
                    newobj[i] = _this.copyObj(obj[i]);
                } //如果不是对象直接赋值
            }
            else {
                newobj = obj;
            }
            ;
            return newobj;
        };
    }
    /** 获取两个数间的随机值(包括min max) */
    util.prototype.getRandom = function (min, max) {
        if (min == -1 || max == -1)
            return;
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    /**随机生成数组 */
    util.prototype.getRandArray = function (min, max, length) {
        var NumberArray = [];
        for (var i = 0; i < length; i++) {
            NumberArray.push(this.getRandom(min, max));
        }
        return NumberArray;
    };
    /**
     * 随机获取数组中指定数量元素
     * @param list 提供数据的数组
     * @param itemNum 获取元素数量(当需要元素不重复时此值大于数组长度会打乱返回整个数组)
     * @param isRepetition 返回元素是否允许重复
    */
    util.prototype.getRandomListItme = function (list, itemNum, isRepetition) {
        var _this = this;
        if (isRepetition === void 0) { isRepetition = false; }
        var copyList = this.copyObj(list);
        var randomList = [];
        list.splice;
        if (isRepetition) {
            for (var i = 0; i < itemNum; i++) {
                randomList.push(copyList[this.getRandom(0, copyList.length - 1)]);
            }
        }
        else {
            var getItem_1 = function () {
                if (copyList.length == 0) {
                    return;
                }
                var item = copyList.splice(_this.getRandom(0, copyList.length - 1), 1)[0];
                randomList.push(item);
                if (--itemNum > 0) {
                    getItem_1();
                }
            };
            getItem_1();
        }
        return randomList;
    };
    /**
    * 网格裁切纹理
   */
    util.prototype.gridCutSpriteFrame = function (sf, rowNum, colNum) {
        var sp = sf.getTexture();
        var picWidth = sp.width / colNum;
        var picHeight = sp.height / rowNum;
        var sfList = [];
        for (var i = 0; i < rowNum; i++) {
            sfList.push([]);
            for (var j = 0; j < colNum; j++) {
                var cutPic = new cc.SpriteFrame(sp);
                cutPic.setRect(new cc.Rect(j * picWidth, i * picHeight, picWidth, picHeight));
                sfList[i].push(cutPic);
            }
        }
        return sfList;
    };
    util.instance = new util();
    return util;
}());
exports.default = util.instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFx1dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUFBLGlCQXlGQztRQXZFRzs7VUFFRTtRQUNGLFlBQU8sR0FBRyxVQUFDLEdBQVE7WUFBUixvQkFBQSxFQUFBLFFBQVE7WUFDZixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbEIsY0FBYztZQUNkLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUMxQyxNQUFNLEdBQUcsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBZ0IsV0FBVztnQkFDbkUsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7b0JBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ25DLENBQWdCLFlBQVk7YUFDaEM7aUJBQUs7Z0JBQ0YsTUFBTSxHQUFHLEdBQUcsQ0FBQTthQUNmO1lBQUEsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQTtJQXVETCxDQUFDO0lBdEZHLDRCQUE0QjtJQUNyQix3QkFBUyxHQUFoQixVQUFpQixHQUFHLEVBQUUsR0FBRztRQUNyQixJQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUEsWUFBWTtJQUNaLDJCQUFZLEdBQVosVUFBYSxHQUFVLEVBQUMsR0FBVSxFQUFDLE1B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QztDQXpGRCxBQXlGQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIHV0aWx7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZSA9IG5ldyB1dGlsKCk7XG5cbiAgICAvKiog6I635Y+W5Lik5Liq5pWw6Ze055qE6ZqP5py65YC8KOWMheaLrG1pbiBtYXgpICovXG4gICAgcHVibGljIGdldFJhbmRvbShtaW4sIG1heCkge1xuICAgICAgICBpZihtaW4gPT0gLTEgfHwgbWF4ID09IC0xKSByZXR1cm47XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgIH1cblxuICAgICAvKirpmo/mnLrnlJ/miJDmlbDnu4QgKi9cbiAgICAgZ2V0UmFuZEFycmF5KG1pbjpudW1iZXIsbWF4Om51bWJlcixsZW5ndGg6bnVtYmVyKTpBcnJheTxudW1iZXI+e1xuICAgICAgICBsZXQgTnVtYmVyQXJyYXk6QXJyYXk8bnVtYmVyPiA9IFtdXG4gICAgICAgIGZvcihsZXQgaT0wO2k8bGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBOdW1iZXJBcnJheS5wdXNoKHRoaXMuZ2V0UmFuZG9tKG1pbixtYXgpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOdW1iZXJBcnJheVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3seaLt+i0nVxuICAgICovXG4gICAgY29weU9iaiA9IChvYmogPSB7fSkgPT4geyAgICAgICAgICAgIC8v5Y+Y6YeP5YWI572u56m6XG4gICAgICAgIGxldCBuZXdvYmogPSBudWxsOyAgXG5cbiAgICAgICAgLy/liKTmlq3mmK/lkKbpnIDopoHnu6fnu63ov5vooYzpgJLlvZJcbiAgICAgICAgaWYgKHR5cGVvZiAob2JqKSA9PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5ld29iaiA9IG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fTsgICAgICAgICAgICAgICAgLy/ov5vooYzkuIvkuIDlsYLpgJLlvZLlhYvpmoZcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgbmV3b2JqW2ldID0gdGhpcy5jb3B5T2JqKG9ialtpXSlcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgLy/lpoLmnpzkuI3mmK/lr7nosaHnm7TmjqXotYvlgLxcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgbmV3b2JqID0gb2JqXG4gICAgICAgIH07ICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdvYmo7ICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmaj+acuuiOt+WPluaVsOe7hOS4reaMh+WumuaVsOmHj+WFg+e0oFxuICAgICAqIEBwYXJhbSBsaXN0IOaPkOS+m+aVsOaNrueahOaVsOe7hFxuICAgICAqIEBwYXJhbSBpdGVtTnVtIOiOt+WPluWFg+e0oOaVsOmHjyjlvZPpnIDopoHlhYPntKDkuI3ph43lpI3ml7bmraTlgLzlpKfkuo7mlbDnu4Tplb/luqbkvJrmiZPkubHov5Tlm57mlbTkuKrmlbDnu4QpXG4gICAgICogQHBhcmFtIGlzUmVwZXRpdGlvbiDov5Tlm57lhYPntKDmmK/lkKblhYHorrjph43lpI1cbiAgICAqL1xuICAgIHB1YmxpYyBnZXRSYW5kb21MaXN0SXRtZShsaXN0OiBBcnJheTxhbnk+LCBpdGVtTnVtOiBudW1iZXIsIGlzUmVwZXRpdGlvbjogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBjb3B5TGlzdCA9IHRoaXMuY29weU9iaihsaXN0KTtcbiAgICAgICAgbGV0IHJhbmRvbUxpc3QgPSBbXTtcblxuICAgICAgICBsaXN0LnNwbGljZVxuXG4gICAgICAgIGlmKGlzUmVwZXRpdGlvbikge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaXRlbU51bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmFuZG9tTGlzdC5wdXNoKGNvcHlMaXN0W3RoaXMuZ2V0UmFuZG9tKDAsIGNvcHlMaXN0Lmxlbmd0aC0xKV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZ2V0SXRlbSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihjb3B5TGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY29weUxpc3Quc3BsaWNlKHRoaXMuZ2V0UmFuZG9tKDAsIGNvcHlMaXN0Lmxlbmd0aC0xKSwgMSlbMF07XG5cbiAgICAgICAgICAgICAgICByYW5kb21MaXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgaWYoLS1pdGVtTnVtID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRJdGVtKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRJdGVtKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmFuZG9tTGlzdDtcbiAgICB9XG4gICAgIC8qKlxuwqAgwqAgwqAqIOe9keagvOijgeWIh+e6ueeQhlxuwqAgwqAgKi9cbiAgICBncmlkQ3V0U3ByaXRlRnJhbWUoc2Y6IGNjLlNwcml0ZUZyYW1lLCByb3dOdW06IG51bWJlciwgY29sTnVtOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHNwID0gc2YuZ2V0VGV4dHVyZSgpO1xuICAgICAgICBsZXQgcGljV2lkdGggPSBzcC53aWR0aC9jb2xOdW07XG4gICAgICAgIGxldCBwaWNIZWlnaHQgPSBzcC5oZWlnaHQvcm93TnVtO1xuICAgICAgICBsZXQgc2ZMaXN0OiBBcnJheTxBcnJheTxjYy5TcHJpdGVGcmFtZT4+ID0gW107XG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJvd051bTsgaSsrKSB7XG4gICAgICAgICAgICBzZkxpc3QucHVzaChbXSk7XG4gICAgICAgICAgICBmb3IobGV0IGo6IG51bWJlciA9IDA7IGogPCBjb2xOdW07IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXRQaWMgPSBuZXcgY2MuU3ByaXRlRnJhbWUoc3ApO1xuICAgICAgICAgICAgICAgIGN1dFBpYy5zZXRSZWN0KG5ldyBjYy5SZWN0KGogKiBwaWNXaWR0aCwgaSpwaWNIZWlnaHQsIHBpY1dpZHRoLCBwaWNIZWlnaHQpKTtcbiAgICAgICAgICAgICAgICBzZkxpc3RbaV0ucHVzaChjdXRQaWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZkxpc3Q7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCB1dGlsLmluc3RhbmNlOyJdfQ==