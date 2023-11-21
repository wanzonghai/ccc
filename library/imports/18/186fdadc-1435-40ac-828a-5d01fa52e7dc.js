"use strict";
cc._RF.push(module, '186fdrcFDVArIKKXQH6Uufc', 'StartGameLayer');
// script/StartGameLayer.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var DataManager_1 = require("./DataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var startGameLayer = /** @class */ (function (_super) {
    __extends(startGameLayer, _super);
    function startGameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkBtn = null;
        _this.page = null;
        _this.audios = [];
        _this.isPolicy = false;
        return _this;
    }
    startGameLayer.prototype.start = function () {
        if (!DataManager_1.default.isOpenBgSound) {
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 0;
        }
    };
    startGameLayer.prototype.onEnable = function () {
        this.autoIntoGame();
    };
    startGameLayer.prototype.autoIntoGame = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.isPolicy = true;
            _this.switchScene();
        }, 5);
    };
    startGameLayer.prototype.playSound = function (index) {
        if (!DataManager_1.default.isOpenEffectSound)
            return;
        this.node.getComponent(cc.AudioSource).clip = this.audios[index];
        this.node.getComponent(cc.AudioSource).play();
    };
    startGameLayer.prototype.onChange = function () {
        this.playSound(0);
        this.isPolicy = !this.isPolicy;
    };
    startGameLayer.prototype.showPage = function () {
        this.playSound(0);
        this.page.active = true;
        this.page.getComponent(cc.Animation).play();
    };
    startGameLayer.prototype.closePage = function () {
        this.playSound(0);
        this.page.active = false;
    };
    startGameLayer.prototype.switchScene = function () {
        var _this = this;
        if (this.isPolicy) {
            cc.director.loadScene('game');
        }
        else {
            this.playSound(1);
            cc.Tween.stopAllByTarget(this.checkBtn);
            this.checkBtn.scale = 1;
            cc.tween(this.checkBtn)
                .by(0.1, { scale: 0.1 })
                .by(0.1, { scale: -0.2 })
                .by(0.1, { scale: 0.1 })
                .call(function () {
                _this.showPage();
            })
                .start();
        }
    };
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "checkBtn", void 0);
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "page", void 0);
    __decorate([
        property({ type: [cc.AudioClip], tooltip: '音效' })
    ], startGameLayer.prototype, "audios", void 0);
    startGameLayer = __decorate([
        ccclass
    ], startGameLayer);
    return startGameLayer;
}(cc.Component));
exports.default = startGameLayer;

cc._RF.pop();