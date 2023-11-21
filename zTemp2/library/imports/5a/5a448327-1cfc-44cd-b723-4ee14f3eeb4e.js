"use strict";
cc._RF.push(module, '5a448MnHPxEzbcjTuFPPutO', 'recordsItem');
// script/recordsItem.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var recordItem = /** @class */ (function (_super) {
    __extends(recordItem, _super);
    function recordItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topSp = null;
        _this.topLabel = null;
        _this.userName = null;
        _this.goldNum = null;
        _this.imgSpArr = [];
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.TipuserName = ['Thor', 'FireKing', 'ShadowAssassin', 'WildWolf', 'GalaxyPrincess', 'EyeOfTheStorm', 'Magician', 'MysteriousSword', 'AngelWings', 'FrostHeart', 'DragonSoul', 'Starlight', 'GhostHunter', 'SoulSong', 'Ares', 'SnowflakeDance', 'MarsExplorer', 'DreamTrip', 'Sniper', 'RocketMan'];
        return _this;
        // update (dt) {}
    }
    recordItem.prototype.start = function () {
    };
    /**初始化 */
    recordItem.prototype.init = function (index) {
        if (index <= 3) {
            this.topSp.active = true;
            this.topLabel.active = false;
            this.topSp.getComponent(cc.Sprite).spriteFrame = this.imgSpArr[index - 1];
        }
        else {
            this.topSp.active = false;
            this.topLabel.active = true;
            this.topLabel.getComponent(cc.Label).string = index + '';
        }
        var name = this.TipuserName[util_1.default.getRandom(0, this.TipuserName.length - 1)];
        this.userName.getComponent(cc.Label).string = name;
        this.goldNum.getComponent(cc.Label).string = 99999 - (index * 100) + '';
    };
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "topSp", void 0);
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "topLabel", void 0);
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "userName", void 0);
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "goldNum", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], recordItem.prototype, "imgSpArr", void 0);
    recordItem = __decorate([
        ccclass
    ], recordItem);
    return recordItem;
}(cc.Component));
exports.default = recordItem;

cc._RF.pop();