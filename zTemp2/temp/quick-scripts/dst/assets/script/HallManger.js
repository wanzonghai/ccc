
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/HallManger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxIYWxsTWFuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDZDQUF3QztBQUV4Qyw2Q0FBdUM7QUFDdkMsc0RBQWlEO0FBQ2pELG9DQUErQjtBQUV6QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdOQztRQTdNRyxrQkFBWSxHQUFtQixFQUFFLENBQUM7UUFHbEMsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUd2QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBR3hCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFHeEIsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFHN0IsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUcxQixrQkFBWSxHQUFZLElBQUksQ0FBQTtRQUVyQixZQUFNLEdBQWEsSUFBSSxDQUFBOztRQXFMOUIsaUJBQWlCO0lBQ3JCLENBQUM7SUFuTEksV0FBVztJQUNMLDJCQUFRLEdBQWQ7Ozs7Ozt3QkFDRyxLQUFBLElBQUksQ0FBQTt3QkFBVyxxQkFBTSx1QkFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQTNFLEdBQUssTUFBTSxHQUFJLFNBQTRELENBQUE7d0JBQzNFLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQzt5QkFFZDs7Ozs7S0FDSjtJQUdELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxF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QUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3ZDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ3hDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QscUJBQVcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxxQkFBVyxDQUFDLGVBQWUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsWUFBWTtJQUNaLGlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRSxLQUFLLEdBQUkscUJBQVcsQ0FBQyxNQUFNLENBQUE7UUFDakcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUUsRUFBRSxHQUFJLHFCQUFXLENBQUMsU0FBUyxDQUFBO0lBQzFHLENBQUM7SUFDRCxjQUFjO0lBQ2QsZ0NBQWEsR0FBYjtRQUNJLElBQUksS0FBSyxHQUFHLGNBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMxRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUMsS0FBSztZQUN4QyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDN0UsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsVUFBVTtJQUNWLDBCQUFPLEdBQVA7SUFFQSxDQUFDO0lBMU1EO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztrREFDZjtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQzs2Q0FDdEI7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUM7OENBQ3JCO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDOzhDQUNuQjtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQzttREFDaEI7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7K0NBQ25CO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2dEQUNsQjtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQztrREFDcEI7SUF4QlgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdONUI7SUFBRCxlQUFDO0NBaE5ELEFBZ05DLENBaE5xQyxFQUFFLENBQUMsU0FBUyxHQWdOakQ7a0JBaE5vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IEl0ZW1Ob2RlIGZyb20gXCIuL0l0ZW1Ob2RlXCI7XG5pbXBvcnQgcmVjb3JkSXRlbSBmcm9tIFwiLi9yZWNvcmRzSXRlbVwiO1xuaW1wb3J0IGxvYWRlck1hbmFnZXIgZnJvbSBcIi4vdXRpbC9sb2FkZXJNYW5hZ2VyXCI7XG5pbXBvcnQgdXRpbCBmcm9tIFwiLi91dGlsL3V0aWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQXVkaW9DbGlwXSx0b29sdGlwOlwi6Z+z5pWI5pWw57uEXCJ9KVxuICAgIGF1ZGlvUmVzTGlzdDogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLmuLjmiI/mj5DnpLrpobXpnaJcIn0pXG4gICAgdGlwTm9kZTogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLpn7PmlYjmjInpkq7oioLngrlcIn0pXG4gICAgc291bmRCdG46IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi55So5oi35L+h5oGvXCJ9KVxuICAgIHVzZXJJbmZvOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcImljb27oioLngrlcIn0pXG4gICAgY29udGVudExheW91dDogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLlhZHmjaLlpZblirHmoYZcIn0pXG4gICAgUHJvbW9QYWdlOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIuaOkuihjOamnOmhtemdolwifSlcbiAgICBjaGFydHNQYWdlOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIuaOkuihjOamnExheW91dFwifSlcbiAgICBjaGFydHNMYXlvdXQ6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBwdWJsaWMgaWNvblBmOmNjLlByZWZhYiA9IG51bGxcblxuICAgIFxuICAgICAvKirliqDovb3pooTliLbkvZMgKi9cbiAgICAgYXN5bmMgbG9hZENhcmQoKXtcbiAgICAgICAgdGhpcy5pY29uUGYgPSAgYXdhaXQgbG9hZGVyTWFuYWdlci5nZXRSZXMoXCJyZWNvcmRzSXRlbVwiLFwicHJlZmFiXCIsY2MuUHJlZmFiKVxuICAgICAgICBpZih0aGlzLmljb25QZil7XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubG9hZENhcmQoKVxuICAgICAgICB0aGlzLnVwYWR0YVVzZXJJbmZvKClcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyTnVtKClcbiAgICAgICAgdGhpcy5saXN0ZUJ0bkFuaSgpXG4gICAgfVxuXG4gICAgLyoq5Yqg6L295o6S6KGM5qacICovXG4gICAgbG9kaW5nUmVjb3JkKCl7XG4gICAgICAgIGZvcihsZXQgaT0xO2k8PTg7aSsrKXtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFudE5vZGUoaSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYXJ0c0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKVxuICAgIH1cbiAgICBpbnN0YW50Tm9kZShpbmRleDpudW1iZXIpe1xuICAgICAgICBsZXQgaXRlbU5vZGU6Y2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvblBmKVxuICAgICAgICB0aGlzLmNoYXJ0c0xheW91dC5hZGRDaGlsZChpdGVtTm9kZSlcbiAgICAgICAgaXRlbU5vZGUuc2V0UG9zaXRpb24oMCwwKVxuICAgICAgICBpdGVtTm9kZS5nZXRDb21wb25lbnQocmVjb3JkSXRlbSkuaW5pdChpbmRleClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/lhoXmjInpkq7nu5Hlrprkuovku7ZcbiAgICAqL1xuICAgIGJ0bkV2ZW50KGV2ZW50OiBjYy5FdmVudCkge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgICAgc3dpdGNoKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidG5TdGFydEdhbWVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMV07XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaWNvbjFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMV07XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFja0J0blwiOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYV9zdGFydEdhbWVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGlwQnRuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuVGlwTm9kZSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VUaXBCdG5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVUaXBOb2RlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic291bmRCdG5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5PckNsb3NlU291bmQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaGFyZUJ0blwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVGbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNsb3NlUHJvbW9CdG5cIjogXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVByb21vKClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNsb3NlQ2hhcnRzQnRuXCI6IFxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VDaGFydCgpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKue7keWumuaMiemSruWKqOeUuyAqL1xuICAgIGxpc3RlQnRuQW5pKCl7XG4gICAgICAgIHRoaXMuY29udGVudExheW91dC5jaGlsZHJlbi5mb3JFYWNoKGU9PntcbiAgICAgICAgICAgIGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCgpPT57XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMix7c2NhbGU6MS4xfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSx7c2NhbGU6MX0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKuaJk+W8gOaPkOekuiAqL1xuICAgIG9wZW5UaXBOb2RlKCl7XG4gICAgICAgIHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikuc2NhbGUgPSAwLjg7XG4gICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJydWxlXCIpKVxuICAgICAgICAudG8oMC4yLCB7c2NhbGU6IDF9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAgLyoqXG4gICAgICog5YWz6Zet5o+Q56S65bGV56S6XG4gICAgKi9cbiAgICAgaGlkZVRpcE5vZGUoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikpXG4gICAgICAgICAgICAudG8oMC4yLCB7c2NhbGU6IDAuNX0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikuc2NhbGUgPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIC8qKuWFs+mXreWFkeaNouWlluWKseahhiAqL1xuICAgIGNsb3NlUHJvbW8oKXtcbiAgICAgICAgdGhpcy5Qcm9tb1BhZ2UuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgbGV0IHJ1bGUgPSB0aGlzLlByb21vUGFnZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpXG4gICAgICAgIHJ1bGUuZ2V0Q2hpbGRCeU5hbWUoJ0VkaXRCb3gnKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nID0gJydcbiAgICB9XG5cbiAgICBjbG9zZUNoYXJ0KCl7XG4gICAgICAgIHRoaXMuY2hhcnRzUGFnZS5hY3RpdmUgPSBmYWxzZVxuICAgIH1cblxuICAgICAvKirmiZPlvIDlhZHmjaLlpZblirHmoYYgKi9cbiAgICAgb3BlblByb21vKCl7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICB0aGlzLlByb21vUGFnZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikuc2NhbGUgPSAxLjI7XG4gICAgICAgIHRoaXMuUHJvbW9QYWdlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuUHJvbW9QYWdlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKSlcbiAgICAgICAgLnRvKDAuMiwge3NjYWxlOiAxfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgIC8qKuaJk+W8gOWFkeaNouWlluWKseahhiAqL1xuICAgICBvcGVuQ2hhcnRzKCl7XG4gICAgICAgIHRoaXMubG9kaW5nUmVjb3JkKClcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgIHRoaXMuY2hhcnRzUGFnZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikuc2NhbGUgPSAxLjI7XG4gICAgICAgIHRoaXMuY2hhcnRzUGFnZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXJ0c1BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJydWxlXCIpKVxuICAgICAgICAudG8oMC4yLCB7c2NhbGU6IDF9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAgICAvKipcbiAgICAgKiDlvIDlkK/miJblhbPpl63pn7PmlYhcbiAgICAqL1xuICAgICAgIG9wZW5PckNsb3NlU291bmQoKSB7XG4gICAgICAgIGlmKERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJ0bi5jaGlsZHJlblswXS5jb2xvciA9IGNjLmNvbG9yKDE3MCwgMTcwLCAxNzAsIDI1NSk7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRCdG4uY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJ0bi5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDE7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSA9ICFEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2U7XG4gICAgfVxuXG4gICAgLyoq5pu05paw55So5oi35L+h5oGvICovXG4gICAgdXBhZHRhVXNlckluZm8oKXtcbiAgICAgICAgdGhpcy51c2VySW5mby5nZXRDaGlsZEJ5TmFtZShcInVzZXJJRFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XCJJRDpcIiArICBEYXRhTWFuYWdlci51c2VySWRcbiAgICAgICAgdGhpcy51c2VySW5mby5nZXRDaGlsZEJ5TmFtZShcInNjb3JlTGFiZXJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cIlwiICsgIERhdGFNYW5hZ2VyLmN1cldpbk51bVxuICAgIH1cbiAgICAvKirmm7TmlrDnlKjmiLfmiL/pl7TkurrmlbAgKi9cbiAgICB1cGRhdGVVc2VyTnVtKCl7XG4gICAgICAgIGxldCBhcnJheSA9IHV0aWwuZ2V0UmFuZEFycmF5KDEwMCw1MDAwLHRoaXMuY29udGVudExheW91dC5jaGlsZHJlbi5sZW5ndGgpXG4gICAgICAgIHRoaXMuY29udGVudExheW91dC5jaGlsZHJlbi5mb3JFYWNoKChlLGluZGV4KSA9PntcbiAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhcnJheVtpbmRleF0gKyAnJ1xuICAgICAgICB9KVxuICAgIH1cbiAgIFxuICAgIC8qKuWIhuS6q+S6i+S7tiAqL1xuICAgIHNoYXJlRm4oKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==