"use strict";
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