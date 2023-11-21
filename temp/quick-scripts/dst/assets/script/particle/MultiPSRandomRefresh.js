
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/particle/MultiPSRandomRefresh.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14000242AlJorHT88YDvvfa', 'MultiPSRandomRefresh');
// script/particle/MultiPSRandomRefresh.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 实现功能：多重（也可以只有一个）粒子节点，动态替换图集中精灵贴图，并且随机起始贴图。
 * 使用方式：将组件挂载在粒子节点的直接父节点上
 */
var MultiPSRandomRefresh = /** @class */ (function (_super) {
    __extends(MultiPSRandomRefresh, _super);
    function MultiPSRandomRefresh() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.aniFps = 15;
        /**ParticleSystem节点数量 */
        _this.psNodeNum = 5;
        _this.emissionRate = 10;
        /**粒子系统贴图当前下标集合 */
        _this.psIndexArray = [];
        /**粒子发射器节点集合 */
        _this.psArray = [];
        /**图集序列总帧数 */
        _this.count = 0;
        /**图集序列帧集合 */
        _this.spriteArray = [];
        return _this;
    }
    MultiPSRandomRefresh.prototype.onLoad = function () {
        if (!this.atlas)
            return;
        this.createrParticleSystem();
    };
    /**
     * 初始化当前节点下粒子发射器
    */
    MultiPSRandomRefresh.prototype.createrParticleSystem = function () {
        this.psArray = this.node.getComponentsInChildren(cc.ParticleSystem);
        this.spriteArray = this.atlas.getSpriteFrames();
        this.count = this.spriteArray.length;
        var startIdx = Math.round(Math.random() * this.count);
        this.psIndexArray.push(startIdx);
        while (this.psArray.length < this.psNodeNum) {
            // for (let index = 0; index < this.psNodeNum - 1; index++) {
            var cln = cc.instantiate(this.psArray[0].node);
            cln.parent = this.psArray[0].node.parent;
            var startIdx_1 = Math.round(Math.random() * this.count);
            this.psIndexArray.push(startIdx_1);
            this.psArray.push(cln.getComponent(cc.ParticleSystem));
        }
    };
    /**
     * 设置每秒发射粒子数目
    */
    MultiPSRandomRefresh.prototype.seEmissionRate = function (num) {
        this.emissionRate = num;
        this.psNodeNum = num / 2;
        this.resetParticleSystem();
    };
    /**
     * 重新生成ParticleSystem节点数量
    */
    MultiPSRandomRefresh.prototype.resetParticleSystem = function () {
        if (this.psArray.length > 1) { // 节点下粒子发射器数量大于1时清除多余的
            for (var i = 1; i < this.psArray.length; i++) {
                this.psArray[i].node.removeFromParent();
            }
            this.psArray.length = 1;
            this.psIndexArray.length = 1;
        }
        this.createrParticleSystem();
    };
    /**
     * 开始播放粒子
    */
    MultiPSRandomRefresh.prototype.playParticle = function () {
        this.schedule(this.refreshSprite, 1 / this.aniFps, cc.macro.REPEAT_FOREVER);
    };
    /**
     * 停止播放粒子
    */
    MultiPSRandomRefresh.prototype.stopParticle = function () {
        this.unschedule(this.refreshSprite);
    };
    MultiPSRandomRefresh.prototype.onEnable = function () {
        this.playParticle();
    };
    MultiPSRandomRefresh.prototype.onDisable = function () {
        this.stopParticle();
    };
    /**
     * 替换粒子贴图
    */
    MultiPSRandomRefresh.prototype.refreshSprite = function () {
        for (var index = 0; index < this.psArray.length; index++) {
            var element = this.psArray[index];
            if (this.psIndexArray[index] >= this.count)
                this.psIndexArray[index] = 0;
            element.spriteFrame = this.spriteArray[this.psIndexArray[index]];
            element.emissionRate = this.emissionRate;
            element.autoRemoveOnFinish = false;
            this.psIndexArray[index]++;
        }
    };
    __decorate([
        property({ type: cc.SpriteAtlas, tooltip: "图集资源" })
    ], MultiPSRandomRefresh.prototype, "atlas", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "每秒替换粒子贴图多少次" })
    ], MultiPSRandomRefresh.prototype, "aniFps", void 0);
    __decorate([
        property({ tooltip: "ParticleSystem节点总数量" })
    ], MultiPSRandomRefresh.prototype, "psNodeNum", void 0);
    __decorate([
        property({ tooltip: "单粒子节点每秒发射粒子数目" })
    ], MultiPSRandomRefresh.prototype, "emissionRate", void 0);
    MultiPSRandomRefresh = __decorate([
        ccclass
    ], MultiPSRandomRefresh);
    return MultiPSRandomRefresh;
}(cc.Component));
exports.default = MultiPSRandomRefresh;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwYXJ0aWNsZVxcTXVsdGlQU1JhbmRvbVJlZnJlc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUM7OztHQUdHO0FBRUg7SUFBa0Qsd0NBQVk7SUFBOUQ7UUFBQSxxRUE4R0M7UUExR1csV0FBSyxHQUFtQixJQUFJLENBQUM7UUFFN0IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUM1Qix3QkFBd0I7UUFFaEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUVsQyxrQkFBa0I7UUFDVixrQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUNwQyxlQUFlO1FBQ1AsYUFBTyxHQUF3QixFQUFFLENBQUM7UUFDMUMsYUFBYTtRQUNMLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDbEIsYUFBYTtRQUNMLGlCQUFXLEdBQXFCLEVBQUUsQ0FBQzs7SUF5Ri9DLENBQUM7SUF4RmEscUNBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBRXhCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7TUFFRTtJQUNGLG9EQUFxQixHQUFyQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFFckMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUss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QUNqQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN6QyxPQUFPLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUF6R0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7dURBQ2Y7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLENBQUM7d0RBQzNCO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUM7MkRBQ2Y7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUM7OERBQ0w7SUFaakIsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0E4R3hDO0lBQUQsMkJBQUM7Q0E5R0QsQUE4R0MsQ0E5R2lELEVBQUUsQ0FBQyxTQUFTLEdBOEc3RDtrQkE5R29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLyoqXHJcbiAqIOWunueOsOWKn+iDve+8muWkmumHje+8iOS5n+WPr+S7peWPquacieS4gOS4qu+8ieeykuWtkOiKgueCue+8jOWKqOaAgeabv+aNouWbvumbhuS4reeyvueBtei0tOWbvu+8jOW5tuS4lOmaj+acuui1t+Wni+i0tOWbvuOAglxyXG4gKiDkvb/nlKjmlrnlvI/vvJrlsIbnu4Tku7bmjILovb3lnKjnspLlrZDoioLngrnnmoTnm7TmjqXniLboioLngrnkuIpcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpUFNSYW5kb21SZWZyZXNoIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlQXRsYXMsIHRvb2x0aXA6IFwi5Zu+6ZuG6LWE5rqQXCIgfSlcclxuICAgIHByaXZhdGUgYXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwi5q+P56eS5pu/5o2i57KS5a2Q6LS05Zu+5aSa5bCR5qyhXCIgfSlcclxuICAgIHByaXZhdGUgYW5pRnBzOiBudW1iZXIgPSAxNTtcclxuICAgIC8qKlBhcnRpY2xlU3lzdGVt6IqC54K55pWw6YePICovXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlBhcnRpY2xlU3lzdGVt6IqC54K55oC75pWw6YePXCIgfSlcclxuICAgIHByaXZhdGUgcHNOb2RlTnVtOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwi5Y2V57KS5a2Q6IqC54K55q+P56eS5Y+R5bCE57KS5a2Q5pWw55uuXCIgfSlcclxuICAgIHByaXZhdGUgZW1pc3Npb25SYXRlOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICAvKirnspLlrZDns7vnu5/otLTlm77lvZPliY3kuIvmoIfpm4blkIggKi9cclxuICAgIHByaXZhdGUgcHNJbmRleEFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgLyoq57KS5a2Q5Y+R5bCE5Zmo6IqC54K56ZuG5ZCIICovXHJcbiAgICBwcml2YXRlIHBzQXJyYXk6IGNjLlBhcnRpY2xlU3lzdGVtW10gPSBbXTtcclxuICAgIC8qKuWbvumbhuW6j+WIl+aAu+W4p+aVsCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudCA9IDA7XHJcbiAgICAvKirlm77pm4bluo/liJfluKfpm4blkIggKi9cclxuICAgIHByaXZhdGUgc3ByaXRlQXJyYXk6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmF0bGFzKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlclBhcnRpY2xlU3lzdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblvZPliY3oioLngrnkuIvnspLlrZDlj5HlsITlmahcclxuICAgICovXHJcbiAgICBjcmVhdGVyUGFydGljbGVTeXN0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5wc0FycmF5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICB0aGlzLnNwcml0ZUFycmF5ID0gdGhpcy5hdGxhcy5nZXRTcHJpdGVGcmFtZXMoKTtcclxuICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5zcHJpdGVBcnJheS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGxldCBzdGFydElkeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMuY291bnQpO1xyXG4gICAgICAgIHRoaXMucHNJbmRleEFycmF5LnB1c2goc3RhcnRJZHgpXHJcbiAgICAgICAgd2hpbGUgKHRoaXMucHNBcnJheS5sZW5ndGggPCB0aGlzLnBzTm9kZU51bSkge1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5wc05vZGVOdW0gLSAxOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjbG4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBzQXJyYXlbMF0ubm9kZSk7XHJcbiAgICAgICAgICAgIGNsbi5wYXJlbnQgPSB0aGlzLnBzQXJyYXlbMF0ubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGxldCBzdGFydElkeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMuY291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLnBzSW5kZXhBcnJheS5wdXNoKHN0YXJ0SWR4KTtcclxuICAgICAgICAgICAgdGhpcy5wc0FycmF5LnB1c2goY2xuLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mr4/np5Llj5HlsITnspLlrZDmlbDnm65cclxuICAgICovXHJcbiAgICBwdWJsaWMgc2VFbWlzc2lvblJhdGUobnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVtaXNzaW9uUmF0ZSA9IG51bTtcclxuICAgICAgICB0aGlzLnBzTm9kZU51bSA9IG51bSAvIDI7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRQYXJ0aWNsZVN5c3RlbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN5paw55Sf5oiQUGFydGljbGVTeXN0ZW3oioLngrnmlbDph49cclxuICAgICovXHJcbiAgICBwcml2YXRlIHJlc2V0UGFydGljbGVTeXN0ZW0oKSB7XHJcbiAgICAgICAgaWYodGhpcy5wc0FycmF5Lmxlbmd0aCA+IDEpIHsgLy8g6IqC54K55LiL57KS5a2Q5Y+R5bCE5Zmo5pWw6YeP5aSn5LqOMeaXtua4hemZpOWkmuS9meeahFxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDE7IGkgPCB0aGlzLnBzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHNBcnJheVtpXS5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBzQXJyYXkubGVuZ3RoID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wc0luZGV4QXJyYXkubGVuZ3RoID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlclBhcnRpY2xlU3lzdGVtKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5pKt5pS+57KS5a2QXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHBsYXlQYXJ0aWNsZSgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMucmVmcmVzaFNwcml0ZSwgMSAvIHRoaXMuYW5pRnBzLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmkq3mlL7nspLlrZBcclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RvcFBhcnRpY2xlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnJlZnJlc2hTcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXlQYXJ0aWNsZSgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3BQYXJ0aWNsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu/5o2i57KS5a2Q6LS05Zu+XHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWZyZXNoU3ByaXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnBzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBzQXJyYXlbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wc0luZGV4QXJyYXlbaW5kZXhdID49IHRoaXMuY291bnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBzSW5kZXhBcnJheVtpbmRleF0gPSAwO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVBcnJheVt0aGlzLnBzSW5kZXhBcnJheVtpbmRleF1dO1xyXG4gICAgICAgICAgICBlbGVtZW50LmVtaXNzaW9uUmF0ZSA9IHRoaXMuZW1pc3Npb25SYXRlO1xyXG4gICAgICAgICAgICBlbGVtZW50LmF1dG9SZW1vdmVPbkZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBzSW5kZXhBcnJheVtpbmRleF0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19