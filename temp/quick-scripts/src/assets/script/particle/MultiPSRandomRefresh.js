"use strict";
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