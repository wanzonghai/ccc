"use strict";
cc._RF.push(module, 'aebc05iEkpIa6XeWy1zw3Ot', 'HallManger');
// script/HallManger.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("./DataManager");
var recordsItem_1 = require("./recordsItem");
var loaderManager_1 = require("./util/loaderManager");
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioResList = [];
        _this.tipNode = null;
        _this.soundBtn = null;
        _this.userInfo = null;
        _this.contentLayout = null;
        _this.PromoPage = null;
        _this.chartsPage = null;
        _this.chartsLayout = null;
        _this.iconPf = null;
        return _this;
        // update (dt) {}
    }
    /**加载预制体 */
    NewClass.prototype.loadCard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, loaderManager_1.default.getRes("recordsItem", "prefab", cc.Prefab)];
                    case 1:
                        _a.iconPf = _b.sent();
                        if (this.iconPf) {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NewClass.prototype.start = function () {
        this.loadCard();
        this.upadtaUserInfo();
        this.updateUserNum();
        this.listeBtnAni();
    };
    /**加载排行榜 */
    NewClass.prototype.lodingRecord = function () {
        for (var i = 1; i <= 8; i++) {
            this.instantNode(i);
        }
        this.chartsLayout.getComponent(cc.Layout).updateLayout();
    };
    NewClass.prototype.instantNode = function (index) {
        var itemNode = cc.instantiate(this.iconPf);
        this.chartsLayout.addChild(itemNode);
        itemNode.setPosition(0, 0);
        itemNode.getComponent(recordsItem_1.default).init(index);
    };
    /**
     * 游戏内按钮绑定事件
    */
    NewClass.prototype.btnEvent = function (event) {
        var name = event.target.name;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        switch (name) {
            case "btnStartGame":
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene("game");
                break;
            case "icon1":
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene("game");
                break;
            case "backBtn":
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene("a_startGame");
                break;
            case "tipBtn":
                this.openTipNode();
                break;
            case "closeTipBtn":
                this.hideTipNode();
                break;
            case "soundBtn":
                this.openOrCloseSound();
                break;
            case "shareBtn":
                this.shareFn();
                break;
            case "closePromoBtn":
                this.closePromo();
                break;
            case "closeChartsBtn":
                this.closeChart();
                break;
        }
    };
    /**绑定按钮动画 */
    NewClass.prototype.listeBtnAni = function () {
        this.contentLayout.children.forEach(function (e) {
            e.on(cc.Node.EventType.TOUCH_END, function () {
                cc.tween(e)
                    .to(0.2, { scale: 1.1 })
                    .to(0.1, { scale: 1 })
                    .start();
            });
        });
    };
    /**打开提示 */
    NewClass.prototype.openTipNode = function () {
        this.tipNode.getChildByName("rule").scale = 0.8;
        this.tipNode.active = true;
        cc.tween(this.tipNode.getChildByName("rule"))
            .to(0.2, { scale: 1 })
            .start();
    };
    /**
    * 关闭提示展示
   */
    NewClass.prototype.hideTipNode = function () {
        var _this = this;
        cc.tween(this.tipNode.getChildByName("rule"))
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.tipNode.active = false;
            _this.tipNode.getChildByName("rule").scale = 1;
        })
            .start();
    };
    /**关闭兑换奖励框 */
    NewClass.prototype.closePromo = function () {
        this.PromoPage.active = false;
        var rule = this.PromoPage.getChildByName('rule');
        rule.getChildByName('EditBox').getComponent(cc.EditBox).string = '';
    };
    NewClass.prototype.closeChart = function () {
        this.chartsPage.active = false;
    };
    /**打开兑换奖励框 */
    NewClass.prototype.openPromo = function () {
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        this.PromoPage.getChildByName("rule").scale = 1.2;
        this.PromoPage.active = true;
        cc.tween(this.PromoPage.getChildByName("rule"))
            .to(0.2, { scale: 1 })
            .start();
    };
    /**打开兑换奖励框 */
    NewClass.prototype.openCharts = function () {
        this.lodingRecord();
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        this.chartsPage.getChildByName("rule").scale = 1.2;
        this.chartsPage.active = true;
        cc.tween(this.chartsPage.getChildByName("rule"))
            .to(0.2, { scale: 1 })
            .start();
    };
    /**
  * 开启或关闭音效
 */
    NewClass.prototype.openOrCloseSound = function () {
        if (DataManager_1.default.curSoundIsClose) {
            this.soundBtn.children[0].color = cc.color(170, 170, 170, 255);
            this.soundBtn.children[1].active = true;
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.soundBtn.children[0].color = cc.color(255, 255, 255, 255);
            this.soundBtn.children[1].active = false;
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        DataManager_1.default.curSoundIsClose = !DataManager_1.default.curSoundIsClose;
    };
    /**更新用户信息 */
    NewClass.prototype.upadtaUserInfo = function () {
        this.userInfo.getChildByName("userID").getComponent(cc.Label).string = "ID:" + DataManager_1.default.userId;
        this.userInfo.getChildByName("scoreLaberl").getComponent(cc.Label).string = "" + DataManager_1.default.curWinNum;
    };
    /**更新用户房间人数 */
    NewClass.prototype.updateUserNum = function () {
        var array = util_1.default.getRandArray(100, 5000, this.contentLayout.children.length);
        this.contentLayout.children.forEach(function (e, index) {
            e.getChildByName("num").getComponent(cc.Label).string = array[index] + '';
        });
    };
    /**分享事件 */
    NewClass.prototype.shareFn = function () {
    };
    __decorate([
        property({ type: [cc.AudioClip], tooltip: "音效数组" })
    ], NewClass.prototype, "audioResList", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏提示页面" })
    ], NewClass.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "音效按钮节点" })
    ], NewClass.prototype, "soundBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "用户信息" })
    ], NewClass.prototype, "userInfo", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "icon节点" })
    ], NewClass.prototype, "contentLayout", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "兑换奖励框" })
    ], NewClass.prototype, "PromoPage", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "排行榜页面" })
    ], NewClass.prototype, "chartsPage", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "排行榜Layout" })
    ], NewClass.prototype, "chartsLayout", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();