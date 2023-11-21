
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
    /**
     * 缓动更新事件
     * @param time 缓动运动时间
     * @param updateFunc 每帧调用的事件会传入百分比
    */
    util.prototype.tweenUpdate = function (time, updateFunc) {
        var startObj = { num: 0 };
        var endObj = { num: 100 };
        var tw = cc.tween(startObj)
            .to(time, endObj, { progress: function (start, end, current, ratio) {
                updateFunc(ratio);
                return;
            } });
        tw.start();
        return tw;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFx1dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUFBLGlCQTBHQztRQXhGRzs7VUFFRTtRQUNGLFlBQU8sR0FBRyxVQUFDLEdBQVE7WUFBUixvQkFBQSxFQUFBLFFBQVE7WUFDZixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbEIsY0FBYztZQUNkLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUMxQyxNQUFNLEdBQUcsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBZ0IsV0FBVztnQkFDbkUsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7b0JBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ25DLENBQWdCLFlBQVk7YUFDaEM7aUJBQUs7Z0JBQ0YsTUFBTSxHQUFHLEdBQUcsQ0FBQTthQUNmO1lBQUEsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQTtJQXdFTCxDQUFDO0lBdkdHLDRCQUE0QjtJQUNyQix3QkFBUyxHQUFoQixVQUFpQixHQUFHLEVBQUUsR0FBRztRQUNyQixJQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUEsWUFBWTtJQUNaLDJCQUFZLEdBQVosVUFBYSxHQUFVLEVBQUMsR0FBVSxFQUFDLE1B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b0I7UUFDMUMsSUFBSSxRQUFRLEdBQUcsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDeEIsSUFBSSxNQUFNLEdBQUcsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUM7UUFDeEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdEIsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsVUFBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLE9BQWUsRUFBRSxLQUFhO2dCQUNwRixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xCLE9BQU07WUFDVixDQUFDLEVBQUMsQ0FBQyxDQUFBO1FBQ0gsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUE7SUFDakIsQ0FBQztJQXZHc0IsYUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUF5R2pELFdBQUM7Q0ExR0QsQUEwR0MsSUFBQTtBQUNELGtCQUFlLElBQUksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyB1dGlse1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2UgPSBuZXcgdXRpbCgpO1xuXG4gICAgLyoqIOiOt+WPluS4pOS4quaVsOmXtOeahOmaj+acuuWAvCjljIXmi6xtaW4gbWF4KSAqL1xuICAgIHB1YmxpYyBnZXRSYW5kb20obWluLCBtYXgpIHtcbiAgICAgICAgaWYobWluID09IC0xIHx8IG1heCA9PSAtMSkgcmV0dXJuO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9XG5cbiAgICAgLyoq6ZqP5py655Sf5oiQ5pWw57uEICovXG4gICAgIGdldFJhbmRBcnJheShtaW46bnVtYmVyLG1heDpudW1iZXIsbGVuZ3RoOm51bWJlcik6QXJyYXk8bnVtYmVyPntcbiAgICAgICAgbGV0IE51bWJlckFycmF5OkFycmF5PG51bWJlcj4gPSBbXVxuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspe1xuICAgICAgICAgICAgTnVtYmVyQXJyYXkucHVzaCh0aGlzLmdldFJhbmRvbShtaW4sbWF4KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyQXJyYXlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7Hmi7fotJ1cbiAgICAqL1xuICAgIGNvcHlPYmogPSAob2JqID0ge30pID0+IHsgICAgICAgICAgICAvL+WPmOmHj+WFiOe9ruepulxuICAgICAgICBsZXQgbmV3b2JqID0gbnVsbDsgIFxuXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6ZyA6KaB57un57ut6L+b6KGM6YCS5b2SXG4gICAgICAgIGlmICh0eXBlb2YgKG9iaikgPT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdvYmogPSBvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge307ICAgICAgICAgICAgICAgIC8v6L+b6KGM5LiL5LiA5bGC6YCS5b2S5YWL6ZqGXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICAgICAgICAgIG5ld29ialtpXSA9IHRoaXMuY29weU9iaihvYmpbaV0pXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgIC8v5aaC5p6c5LiN5piv5a+56LGh55u05o6l6LWL5YC8XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIG5ld29iaiA9IG9ialxuICAgICAgICB9OyAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3b2JqOyAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpmo/mnLrojrflj5bmlbDnu4TkuK3mjIflrprmlbDph4/lhYPntKBcbiAgICAgKiBAcGFyYW0gbGlzdCDmj5DkvpvmlbDmja7nmoTmlbDnu4RcbiAgICAgKiBAcGFyYW0gaXRlbU51bSDojrflj5blhYPntKDmlbDph48o5b2T6ZyA6KaB5YWD57Sg5LiN6YeN5aSN5pe25q2k5YC85aSn5LqO5pWw57uE6ZW/5bqm5Lya5omT5Lmx6L+U5Zue5pW05Liq5pWw57uEKVxuICAgICAqIEBwYXJhbSBpc1JlcGV0aXRpb24g6L+U5Zue5YWD57Sg5piv5ZCm5YWB6K646YeN5aSNXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0UmFuZG9tTGlzdEl0bWUobGlzdDogQXJyYXk8YW55PiwgaXRlbU51bTogbnVtYmVyLCBpc1JlcGV0aXRpb246IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgY29weUxpc3QgPSB0aGlzLmNvcHlPYmoobGlzdCk7XG4gICAgICAgIGxldCByYW5kb21MaXN0ID0gW107XG5cbiAgICAgICAgbGlzdC5zcGxpY2VcblxuICAgICAgICBpZihpc1JlcGV0aXRpb24pIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1OdW07IGkrKykge1xuICAgICAgICAgICAgICAgIHJhbmRvbUxpc3QucHVzaChjb3B5TGlzdFt0aGlzLmdldFJhbmRvbSgwLCBjb3B5TGlzdC5sZW5ndGgtMSldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGdldEl0ZW0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY29weUxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNvcHlMaXN0LnNwbGljZSh0aGlzLmdldFJhbmRvbSgwLCBjb3B5TGlzdC5sZW5ndGgtMSksIDEpWzBdO1xuXG4gICAgICAgICAgICAgICAgcmFuZG9tTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmKC0taXRlbU51bSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0SXRlbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0SXRlbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJhbmRvbUxpc3Q7XG4gICAgfVxuICAgICAvKipcbsKgIMKgIMKgKiDnvZHmoLzoo4HliIfnurnnkIZcbsKgIMKgICovXG4gICAgZ3JpZEN1dFNwcml0ZUZyYW1lKHNmOiBjYy5TcHJpdGVGcmFtZSwgcm93TnVtOiBudW1iZXIsIGNvbE51bTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzcCA9IHNmLmdldFRleHR1cmUoKTtcbiAgICAgICAgbGV0IHBpY1dpZHRoID0gc3Aud2lkdGgvY29sTnVtO1xuICAgICAgICBsZXQgcGljSGVpZ2h0ID0gc3AuaGVpZ2h0L3Jvd051bTtcbiAgICAgICAgbGV0IHNmTGlzdDogQXJyYXk8QXJyYXk8Y2MuU3ByaXRlRnJhbWU+PiA9IFtdO1xuICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCByb3dOdW07IGkrKykge1xuICAgICAgICAgICAgc2ZMaXN0LnB1c2goW10pO1xuICAgICAgICAgICAgZm9yKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgY29sTnVtOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3V0UGljID0gbmV3IGNjLlNwcml0ZUZyYW1lKHNwKTtcbiAgICAgICAgICAgICAgICBjdXRQaWMuc2V0UmVjdChuZXcgY2MuUmVjdChqICogcGljV2lkdGgsIGkqcGljSGVpZ2h0LCBwaWNXaWR0aCwgcGljSGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgc2ZMaXN0W2ldLnB1c2goY3V0UGljKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2ZMaXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe8k+WKqOabtOaWsOS6i+S7tlxuICAgICAqIEBwYXJhbSB0aW1lIOe8k+WKqOi/kOWKqOaXtumXtFxuICAgICAqIEBwYXJhbSB1cGRhdGVGdW5jIOavj+W4p+iwg+eUqOeahOS6i+S7tuS8muS8oOWFpeeZvuWIhuavlFxuICAgICovXG4gICAgdHdlZW5VcGRhdGUodGltZTogbnVtYmVyLCB1cGRhdGVGdW5jOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgc3RhcnRPYmogPSB7bnVtOiAwfTtcbiAgICAgICAgbGV0IGVuZE9iaiA9IHtudW06IDEwMH07XG4gICAgICAgIGxldCB0dyA9IGNjLnR3ZWVuKHN0YXJ0T2JqKVxuICAgICAgICAgICAgLnRvKHRpbWUsIGVuZE9iaiwge3Byb2dyZXNzOiAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYyhyYXRpbyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9fSlcbiAgICAgICAgICAgIHR3LnN0YXJ0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHdcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IHV0aWwuaW5zdGFuY2U7Il19