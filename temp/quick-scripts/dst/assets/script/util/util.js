
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
     * 缓动更新事件
     * @param time 缓动运动时间
     * @param updateFunc 每帧调用的事件会传入百分比
    */
    util.prototype.tweenUpdate = function (time, updateFunc) {
        var startObj = { num: 0 };
        var endObj = { num: 100 };
        var tween = cc.tween(startObj)
            .to(time, endObj, { progress: function (start, end, current, ratio) {
                updateFunc(ratio);
                return 1;
            } })
            .start();
        return tween;
    };
    /**
     * 网格裁切纹理
     * @param sf 需要裁切的纹理
     * @param rowNum 网格行数
     * @param colNum 网格列数
     * @param space 格子获取纹理的间隙
    */
    util.prototype.gridCutSpriteFrame = function (sf, rowNum, colNum, space) {
        if (space === void 0) { space = 0; }
        var sp = sf.getTexture();
        var picWidth = sp.width / colNum;
        var picHeight = sp.height / rowNum;
        var sfList = [];
        for (var i = 0; i < rowNum; i++) {
            sfList.push([]);
            for (var j = 0; j < colNum; j++) {
                var cutPic = new cc.SpriteFrame(sp);
                cutPic.setRect(new cc.Rect(j * picWidth + j * space, i * picHeight + i * space, picWidth - space, picHeight - space));
                sfList[i].push(cutPic);
            }
        }
        return sfList;
    };
    /* 判断一个点是否在目标节点内
     * @param node 目标节点
     * @param point 目标点位置(世界坐标)
    */
    util.prototype.checkPointExistNode = function (node, point) {
        var width = node.width;
        var height = node.height;
        var nodePos = node.convertToWorldSpaceAR(cc.v2(0, 0)).clone();
        var topPos = cc.v3(nodePos.x, nodePos.y + height / 2);
        var bottomPos = cc.v3(nodePos.x, nodePos.y - height / 2);
        var leftPos = cc.v3(nodePos.x - width / 2, nodePos.y);
        var rightPos = cc.v3(nodePos.x + width / 2, nodePos.y);
        if (point.x >= leftPos.x && point.x <= rightPos.x && point.y >= bottomPos.y && point.y <= topPos.y) {
            return node;
        }
        return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFx1dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUFBLGlCQTJJQztRQXpIRzs7VUFFRTtRQUNGLFlBQU8sR0FBRyxVQUFDLEdBQVE7WUFBUixvQkFBQSxFQUFBLFFBQVE7WUFDZixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbEIsY0FBYztZQUNkLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUMxQyxNQUFNLEdBQUcsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBZ0IsV0FBVztnQkFDbkUsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7b0JBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ25DLENBQWdCLFlBQVk7YUFDaEM7aUJBQUs7Z0JBQ0YsTUFBTSxHQUFHLEdBQUcsQ0FBQTthQUNmO1lBQUEsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQTtJQXlHTCxDQUFDO0lBeElHLDRCQUE0QjtJQUNyQix3QkFBUyxHQUFoQixVQUFpQixHQUFHLEVBQUUsR0FBRztRQUNyQixJQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUEsWUFBWTtJQUNaLDJCQUFZLEdBQVosVUFBYSxHQUFVLEVBQUMsR0FBVSxFQUFDLE1B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QUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyRCxJQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRTtZQUMvRixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQXhJc0IsYUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUEwSWpELFdBQUM7Q0EzSUQsQUEySUMsSUFBQTtBQUNELGtCQUFlLElBQUksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyB1dGlse1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2UgPSBuZXcgdXRpbCgpO1xuXG4gICAgLyoqIOiOt+WPluS4pOS4quaVsOmXtOeahOmaj+acuuWAvCjljIXmi6xtaW4gbWF4KSAqL1xuICAgIHB1YmxpYyBnZXRSYW5kb20obWluLCBtYXgpIHtcbiAgICAgICAgaWYobWluID09IC0xIHx8IG1heCA9PSAtMSkgcmV0dXJuO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9XG5cbiAgICAgLyoq6ZqP5py655Sf5oiQ5pWw57uEICovXG4gICAgIGdldFJhbmRBcnJheShtaW46bnVtYmVyLG1heDpudW1iZXIsbGVuZ3RoOm51bWJlcik6QXJyYXk8bnVtYmVyPntcbiAgICAgICAgbGV0IE51bWJlckFycmF5OkFycmF5PG51bWJlcj4gPSBbXVxuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspe1xuICAgICAgICAgICAgTnVtYmVyQXJyYXkucHVzaCh0aGlzLmdldFJhbmRvbShtaW4sbWF4KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyQXJyYXlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7Hmi7fotJ1cbiAgICAqL1xuICAgIGNvcHlPYmogPSAob2JqID0ge30pID0+IHsgICAgICAgICAgICAvL+WPmOmHj+WFiOe9ruepulxuICAgICAgICBsZXQgbmV3b2JqID0gbnVsbDsgIFxuXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6ZyA6KaB57un57ut6L+b6KGM6YCS5b2SXG4gICAgICAgIGlmICh0eXBlb2YgKG9iaikgPT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdvYmogPSBvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge307ICAgICAgICAgICAgICAgIC8v6L+b6KGM5LiL5LiA5bGC6YCS5b2S5YWL6ZqGXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICAgICAgICAgIG5ld29ialtpXSA9IHRoaXMuY29weU9iaihvYmpbaV0pXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgIC8v5aaC5p6c5LiN5piv5a+56LGh55u05o6l6LWL5YC8XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIG5ld29iaiA9IG9ialxuICAgICAgICB9OyAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3b2JqOyAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpmo/mnLrojrflj5bmlbDnu4TkuK3mjIflrprmlbDph4/lhYPntKBcbiAgICAgKiBAcGFyYW0gbGlzdCDmj5DkvpvmlbDmja7nmoTmlbDnu4RcbiAgICAgKiBAcGFyYW0gaXRlbU51bSDojrflj5blhYPntKDmlbDph48o5b2T6ZyA6KaB5YWD57Sg5LiN6YeN5aSN5pe25q2k5YC85aSn5LqO5pWw57uE6ZW/5bqm5Lya5omT5Lmx6L+U5Zue5pW05Liq5pWw57uEKVxuICAgICAqIEBwYXJhbSBpc1JlcGV0aXRpb24g6L+U5Zue5YWD57Sg5piv5ZCm5YWB6K646YeN5aSNXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0UmFuZG9tTGlzdEl0bWUobGlzdDogQXJyYXk8YW55PiwgaXRlbU51bTogbnVtYmVyLCBpc1JlcGV0aXRpb246IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgY29weUxpc3QgPSB0aGlzLmNvcHlPYmoobGlzdCk7XG4gICAgICAgIGxldCByYW5kb21MaXN0ID0gW107XG5cbiAgICAgICAgbGlzdC5zcGxpY2VcblxuICAgICAgICBpZihpc1JlcGV0aXRpb24pIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1OdW07IGkrKykge1xuICAgICAgICAgICAgICAgIHJhbmRvbUxpc3QucHVzaChjb3B5TGlzdFt0aGlzLmdldFJhbmRvbSgwLCBjb3B5TGlzdC5sZW5ndGgtMSldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGdldEl0ZW0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY29weUxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNvcHlMaXN0LnNwbGljZSh0aGlzLmdldFJhbmRvbSgwLCBjb3B5TGlzdC5sZW5ndGgtMSksIDEpWzBdO1xuXG4gICAgICAgICAgICAgICAgcmFuZG9tTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmKC0taXRlbU51bSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0SXRlbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0SXRlbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJhbmRvbUxpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57yT5Yqo5pu05paw5LqL5Lu2XG4gICAgICogQHBhcmFtIHRpbWUg57yT5Yqo6L+Q5Yqo5pe26Ze0XG4gICAgICogQHBhcmFtIHVwZGF0ZUZ1bmMg5q+P5bin6LCD55So55qE5LqL5Lu25Lya5Lyg5YWl55m+5YiG5q+UXG4gICAgKi9cbiAgICB0d2VlblVwZGF0ZSh0aW1lOiBudW1iZXIsIHVwZGF0ZUZ1bmM6IEZ1bmN0aW9uKTogY2MuVHdlZW4ge1xuICAgICAgICBsZXQgc3RhcnRPYmogPSB7bnVtOiAwfTtcbiAgICAgICAgbGV0IGVuZE9iaiA9IHtudW06IDEwMH07XG5cbiAgICAgICAgbGV0IHR3ZWVuID0gY2MudHdlZW4oc3RhcnRPYmopXG4gICAgICAgICAgICAudG8odGltZSwgZW5kT2JqLCB7cHJvZ3Jlc3M6IChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgY3VycmVudDogbnVtYmVyLCByYXRpbzogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jKHJhdGlvKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICByZXR1cm4gdHdlZW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog572R5qC86KOB5YiH57q555CGXG4gICAgICogQHBhcmFtIHNmIOmcgOimgeijgeWIh+eahOe6ueeQhlxuICAgICAqIEBwYXJhbSByb3dOdW0g572R5qC86KGM5pWwXG4gICAgICogQHBhcmFtIGNvbE51bSDnvZHmoLzliJfmlbBcbiAgICAgKiBAcGFyYW0gc3BhY2Ug5qC85a2Q6I635Y+W57q555CG55qE6Ze06ZqZXG4gICAgKi9cbiAgICBncmlkQ3V0U3ByaXRlRnJhbWUoc2Y6IGNjLlNwcml0ZUZyYW1lLCByb3dOdW06IG51bWJlciwgY29sTnVtOiBudW1iZXIsIHNwYWNlOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgc3AgPSBzZi5nZXRUZXh0dXJlKCk7XG4gICAgICAgIGxldCBwaWNXaWR0aCA9IHNwLndpZHRoL2NvbE51bTtcbiAgICAgICAgbGV0IHBpY0hlaWdodCA9IHNwLmhlaWdodC9yb3dOdW07XG4gICAgICAgIGxldCBzZkxpc3Q6IEFycmF5PEFycmF5PGNjLlNwcml0ZUZyYW1lPj4gPSBbXTtcblxuICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCByb3dOdW07IGkrKykge1xuICAgICAgICAgICAgc2ZMaXN0LnB1c2goW10pO1xuICAgICAgICAgICAgZm9yKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgY29sTnVtOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3V0UGljID0gbmV3IGNjLlNwcml0ZUZyYW1lKHNwKTtcblxuICAgICAgICAgICAgICAgIGN1dFBpYy5zZXRSZWN0KG5ldyBjYy5SZWN0KGogKiBwaWNXaWR0aCArIGoqc3BhY2UsIGkqcGljSGVpZ2h0ICsgaSpzcGFjZSwgcGljV2lkdGgtc3BhY2UsIHBpY0hlaWdodC1zcGFjZSkpO1xuICAgICAgICAgICAgICAgIHNmTGlzdFtpXS5wdXNoKGN1dFBpYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2ZMaXN0O1xuICAgIH1cblxuICAgIFxuICAgIC8qIOWIpOaWreS4gOS4queCueaYr+WQpuWcqOebruagh+iKgueCueWGhVxuICAgICAqIEBwYXJhbSBub2RlIOebruagh+iKgueCuVxuICAgICAqIEBwYXJhbSBwb2ludCDnm67moIfngrnkvY3nva4o5LiW55WM5Z2Q5qCHKVxuICAgICovXG4gICAgY2hlY2tQb2ludEV4aXN0Tm9kZShub2RlOiBjYy5Ob2RlLCBwb2ludDogY2MuVmVjMiB8IGNjLlZlYzMpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gbm9kZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IG5vZGUuaGVpZ2h0O1xuICAgICAgICBsZXQgbm9kZVBvcyA9IG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKS5jbG9uZSgpO1xuICAgICAgICBsZXQgdG9wUG9zID0gY2MudjMobm9kZVBvcy54LCBub2RlUG9zLnkgKyBoZWlnaHQvMik7XG4gICAgICAgIGxldCBib3R0b21Qb3MgPSBjYy52Myhub2RlUG9zLngsIG5vZGVQb3MueSAtIGhlaWdodC8yKTtcbiAgICAgICAgbGV0IGxlZnRQb3MgPSBjYy52Myhub2RlUG9zLnggLSB3aWR0aC8yLCBub2RlUG9zLnkpO1xuICAgICAgICBsZXQgcmlnaHRQb3MgPSBjYy52Myhub2RlUG9zLnggKyB3aWR0aC8yLCBub2RlUG9zLnkpO1xuXG4gICAgICAgIGlmKHBvaW50LnggPj0gbGVmdFBvcy54ICYmIHBvaW50LnggPD0gcmlnaHRQb3MueCAmJiBwb2ludC55ID49IGJvdHRvbVBvcy55ICYmIHBvaW50LnkgPD0gdG9wUG9zLnkpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCB1dGlsLmluc3RhbmNlOyJdfQ==