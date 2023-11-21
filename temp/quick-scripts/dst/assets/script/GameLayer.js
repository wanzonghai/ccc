
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GameLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fa5exMMXFKupMg6i92JxBn', 'GameLayer');
// script/GameLayer.ts

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
var playLayer_1 = require("./playLayer");
var define_1 = require("./util/define");
var EventMgr_1 = require("./util/event/EventMgr");
var loaderManager_1 = require("./util/loaderManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemResList = [];
        _this.userCoinNode = null;
        _this.tipNode = null;
        _this.resultNode = null;
        _this.timerNode = null;
        _this.soundBtn = null;
        _this.musicBtn = null;
        _this.playBtn = null;
        _this.playScr = null;
        _this.userScoreLabel = null;
        _this.timeLabel = null;
        _this.audioResList = [];
        _this.iconPf = null;
        _this.index = 0;
        return _this;
    }
    /**加载卡片 */
    GameLayer.prototype.loadCard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, loaderManager_1.default.getRes("item", "prefab", cc.Prefab)];
                    case 1:
                        _a.iconPf = _b.sent();
                        if (this.iconPf) {
                            console.log("预制体加载成功！");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GameLayer.prototype.start = function () {
        DataManager_1.default.gameLayerScr = this;
        this.playScr.node.scale = cc.winSize.height / 1080;
        this.updateUserCoin();
        this.updateTimerUi();
        this.loadCard();
        // this.listerEvent()
    };
    //绑定事件
    GameLayer.prototype.listerEvent = function () {
        EventMgr_1.default.Instance.Register(define_1.EventId.Result, this.showResult, this);
    };
    /**
     * 清除事件
     */
    GameLayer.prototype.cleatEvent = function () {
        EventMgr_1.default.Instance.Off();
    };
    /**
     * 游戏内按钮绑定事件
    */
    GameLayer.prototype.btnEvent = function (event) {
        var name = event.target.name;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        switch (name) {
            case "btnStartGame":
                this.playGame();
                break;
            case "btnReturn":
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene("hall");
                break;
            case "btNextGame":
            case "btStartOver":
                this.hideResultNode();
                break;
            case "btExit":
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene("hall");
                break;
            case "tipBtn":
                this.openTipNode();
                break;
            case "closeTipBtn":
                this.hideTipNode();
                break;
            case "btnSound":
                this.openOrCloseSound();
                break;
            case "musicBtn":
                this.openOrCloseBG();
                break;
        }
    };
    /** 开始游戏 */
    GameLayer.prototype.playGame = function () {
        if (DataManager_1.default.curGameIsRun)
            return;
        DataManager_1.default.curGameIsRun = true;
        cc.director.getCollisionManager().enabled = true;
        // 计时器
        this.startTimer();
        //隐藏游戏按钮
        // this.playBtn.active = false
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
        //游戏逻辑
        this.playScr.createRandomPuzzle();
    };
    /**
     * 开启或关闭音效
    */
    GameLayer.prototype.openOrCloseSound = function () {
        if (DataManager_1.default.curSoundBGIsClose) {
            this.soundBtn.color = cc.color(170, 170, 170, 255);
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.soundBtn.color = cc.color(255, 255, 255, 255);
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        DataManager_1.default.curSoundBGIsClose = !DataManager_1.default.curSoundBGIsClose;
    };
    GameLayer.prototype.openOrCloseBG = function () {
        if (DataManager_1.default.curSoundIsClose) {
            this.musicBtn.color = cc.color(170, 170, 170, 255);
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.musicBtn.color = cc.color(255, 255, 255, 255);
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 1;
        }
        DataManager_1.default.curSoundIsClose = !DataManager_1.default.curSoundIsClose;
    };
    /**
     * 开始倒计时
    */
    GameLayer.prototype.startTimer = function () {
        var _this = this;
        var speed = 0.01;
        DataManager_1.default.timerFunc = function () {
            DataManager_1.default.indexTime -= speed;
            if (DataManager_1.default.indexTime <= 0) {
                _this.ResultFn();
            }
            _this.updateTimerUi();
            _this.timeLabel.getComponent(cc.Label).string = "00:00:" + Math.floor(DataManager_1.default.indexTime);
        };
        this.schedule(DataManager_1.default.timerFunc, speed);
    };
    /**
     * 更新倒计时
    */
    GameLayer.prototype.updateTimerUi = function () {
        // cc.find("barBg/bar", this.timerNode).getComponent(cc.Sprite).fillRange = DataManager.indexTime / DataManager.startTime;
        this.timeLabel.getComponent(cc.Label).string = "00:00:" + Math.ceil(DataManager_1.default.indexTime);
    };
    GameLayer.prototype.updataCoin = function () {
        this.updateUserCoin();
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
    };
    /**
     * 更新余额
    */
    GameLayer.prototype.updateUserCoin = function () {
        cc.tween(this.userScoreLabel)
            .to(0.1, { scale: 1.1 })
            .to(0.1, { scale: 1 })
            .start();
        this.userScoreLabel.getComponent(cc.Label).string = "" + DataManager_1.default.curScord;
    };
    /**判断结果 */
    GameLayer.prototype.ResultFn = function () {
        if (DataManager_1.default._curScord >= 1000) {
            this.showResult(true);
        }
        else {
            this.showResult(false);
        }
    };
    /**打开提示 */
    GameLayer.prototype.openTipNode = function () {
        this.tipNode.getChildByName("rule").scale = 0.8;
        this.tipNode.active = true;
        cc.tween(this.tipNode.getChildByName("rule"))
            .to(0.2, { scale: 1 })
            .start();
    };
    /**
  * 关闭提示展示
 */
    GameLayer.prototype.hideTipNode = function () {
        var _this = this;
        cc.tween(this.tipNode.getChildByName("rule"))
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.tipNode.active = false;
            _this.tipNode.getChildByName("rule").scale = 1;
        })
            .start();
    };
    /**
     * 展示结果
    */
    GameLayer.prototype.showResult = function (isWin) {
        this.unschedule(DataManager_1.default.timerFunc);
        this.unscheduleAllCallbacks();
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
        if (isWin) {
            var winNumLable = cc.find("win/winNum", this.resultNode);
            DataManager_1.default.curWinNum += 100;
            winNumLable.getComponent(cc.Label).string = "" + DataManager_1.default.curWinNum;
        }
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[isWin ? 4 : 5];
        this.node.getComponent(cc.AudioSource).play();
        var winNode = this.resultNode.getChildByName("win");
        var loseNode = this.resultNode.getChildByName("lose");
        winNode.active = isWin;
        loseNode.active = !isWin;
        var curAniNode = isWin ? winNode : loseNode;
        this.resultNode.active = true;
        curAniNode.scale = 0.6;
        curAniNode.opacity = 100;
        cc.tween(curAniNode)
            .to(0.3, { scale: 1.1, opacity: 255 })
            .to(0.3, { scale: 1 })
            .start();
    };
    /**
     * 关闭结果展示
    */
    GameLayer.prototype.hideResultNode = function () {
        DataManager_1.default.curGameIsRun = false;
        this.resultNode.active = false;
        cc.director.getCollisionManager().enabled = false;
        DataManager_1.default._curScord = 0;
        DataManager_1.default._indexTime = DataManager_1.default.startTime;
        this.updateTimerUi();
        this.updateUserCoin();
    };
    __decorate([
        property({ type: [cc.SpriteFrame], tooltip: "元素纹理" })
    ], GameLayer.prototype, "itemResList", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "用户余额节点" })
    ], GameLayer.prototype, "userCoinNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏提示页面" })
    ], GameLayer.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏结果节点" })
    ], GameLayer.prototype, "resultNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "倒计时节点" })
    ], GameLayer.prototype, "timerNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "音效按钮节点" })
    ], GameLayer.prototype, "soundBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "音效按钮节点" })
    ], GameLayer.prototype, "musicBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "开始游戏节点" })
    ], GameLayer.prototype, "playBtn", void 0);
    __decorate([
        property({ type: playLayer_1.default, tooltip: "游戏逻辑控制脚本" })
    ], GameLayer.prototype, "playScr", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "玩家分数展示节点" })
    ], GameLayer.prototype, "userScoreLabel", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "剩余时间展示节点" })
    ], GameLayer.prototype, "timeLabel", void 0);
    __decorate([
        property({ type: [cc.AudioClip] })
    ], GameLayer.prototype, "audioResList", void 0);
    GameLayer = __decorate([
        ccclass
    ], GameLayer);
    return GameLayer;
}(cc.Component));
exports.default = GameLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBR3hDLHlDQUFvQztBQUNwQyx3Q0FBd0M7QUFDeEMsa0RBQTZDO0FBQzdDLHNEQUFpRDtBQUkzQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXFSQztRQWxSRyxpQkFBVyxHQUFxQixFQUFFLENBQUM7UUFHbkMsa0JBQVksR0FBWSxJQUFJLENBQUE7UUFHNUIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUd2QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUcxQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFHeEIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUd4QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBR3ZCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFHekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFtQixFQUFFLENBQUM7UUFFM0IsWUFBTSxHQUFhLElBQUksQ0FBQTtRQUV2QixXQUFLLEdBQVUsQ0FBQyxDQUFBOztJQTZPM0IsQ0FBQztJQTFPSSxVQUFVO0lBQ0osNEJBQVEsR0FBZDs7Ozs7O3dCQUNHLEtBQUEsSUFBSSxDQUFBO3dCQUFXLHFCQUFNLHVCQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBcEUsR0FBSyxNQUFNLEdBQUksU0FBcUQsQ0FBQTt3QkFDcEUsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFD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RUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUM7OENBQ3RCO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLG1CQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDOzhDQUN4QjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztxREFDaEI7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUM7Z0RBQ3JCO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUM7bURBQ0M7SUFwQ2pCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FxUjdCO0lBQUQsZ0JBQUM7Q0FyUkQsQUFxUkMsQ0FyUnNDLEVBQUUsQ0FBQyxTQUFTLEdBcVJsRDtrQkFyUm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVXaGVlbCBmcm9tIFwiLi9HYW1lV2hlZWxcIjtcclxuaW1wb3J0IEl0ZW1Ob2RlIGZyb20gXCIuL0l0ZW1Ob2RlXCI7XHJcbmltcG9ydCBwbGF5TGF5ZXIgZnJvbSBcIi4vcGxheUxheWVyXCI7XHJcbmltcG9ydCB7IEV2ZW50SWQgfSBmcm9tIFwiLi91dGlsL2RlZmluZVwiO1xyXG5pbXBvcnQgRXZlbnRNZ3IgZnJvbSBcIi4vdXRpbC9ldmVudC9FdmVudE1nclwiO1xyXG5pbXBvcnQgbG9hZGVyTWFuYWdlciBmcm9tIFwiLi91dGlsL2xvYWRlck1hbmFnZXJcIjtcclxuaW1wb3J0IHV0aWwgZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogW2NjLlNwcml0ZUZyYW1lXSwgdG9vbHRpcDogXCLlhYPntKDnurnnkIZcIn0pXHJcbiAgICBpdGVtUmVzTGlzdDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLnlKjmiLfkvZnpop3oioLngrlcIn0pXHJcbiAgICB1c2VyQ29pbk5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIua4uOaIj+aPkOekuumhtemdolwifSlcclxuICAgIHRpcE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIua4uOaIj+e7k+aenOiKgueCuVwifSlcclxuICAgIHJlc3VsdE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIuWAkuiuoeaXtuiKgueCuVwifSlcclxuICAgIHRpbWVyTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi6Z+z5pWI5oyJ6ZKu6IqC54K5XCJ9KVxyXG4gICAgc291bmRCdG46IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIumfs+aViOaMiemSruiKgueCuVwifSlcclxuICAgIG11c2ljQnRuOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLlvIDlp4vmuLjmiI/oioLngrlcIn0pXHJcbiAgICBwbGF5QnRuOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogcGxheUxheWVyLCB0b29sdGlwOiBcIua4uOaIj+mAu+i+keaOp+WItuiEmuacrFwifSlcclxuICAgIHBsYXlTY3I6IHBsYXlMYXllciA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi546p5a625YiG5pWw5bGV56S66IqC54K5XCJ9KVxyXG4gICAgdXNlclNjb3JlTGFiZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLliankvZnml7bpl7TlsZXnpLroioLngrlcIn0pXHJcbiAgICB0aW1lTGFiZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogW2NjLkF1ZGlvQ2xpcF19KVxyXG4gICAgYXVkaW9SZXNMaXN0OiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBpY29uUGY6Y2MuUHJlZmFiID0gbnVsbFxyXG5cclxuICAgIHB1YmxpYyBpbmRleDpudW1iZXIgPSAwXHJcblxyXG5cclxuICAgICAvKirliqDovb3ljaHniYcgKi9cclxuICAgICBhc3luYyBsb2FkQ2FyZCgpe1xyXG4gICAgICAgIHRoaXMuaWNvblBmID0gIGF3YWl0IGxvYWRlck1hbmFnZXIuZ2V0UmVzKFwiaXRlbVwiLFwicHJlZmFiXCIsY2MuUHJlZmFiKVxyXG4gICAgICAgIGlmKHRoaXMuaWNvblBmKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLpooTliLbkvZPliqDovb3miJDlip/vvIFcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7IFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmdhbWVMYXllclNjciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wbGF5U2NyLm5vZGUuc2NhbGUgPSBjYy53aW5TaXplLmhlaWdodCAvIDEwODA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpXHJcbiAgICAgICAgdGhpcy5sb2FkQ2FyZCgpXHJcbiAgICAgICAgLy8gdGhpcy5saXN0ZXJFdmVudCgpXHJcbiAgICB9XHJcbiAgICAvL+e7keWumuS6i+S7tlxyXG4gICAgbGlzdGVyRXZlbnQoKXtcclxuICAgICAgICBFdmVudE1nci5JbnN0YW5jZS5SZWdpc3RlcihFdmVudElkLlJlc3VsdCx0aGlzLnNob3dSZXN1bHQsdGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBjbGVhdEV2ZW50KCl7XHJcbiAgICAgICAgRXZlbnRNZ3IuSW5zdGFuY2UuT2ZmKClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5YaF5oyJ6ZKu57uR5a6a5LqL5Lu2XHJcbiAgICAqL1xyXG4gICAgYnRuRXZlbnQoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIHN3aXRjaChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5TdGFydEdhbWVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUdhbWUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuUmV0dXJuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWF0RXZlbnQoKVxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaGFsbFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnROZXh0R2FtZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYnRTdGFydE92ZXJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRFeGl0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWF0RXZlbnQoKVxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaGFsbFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGlwQnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5UaXBOb2RlKClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VUaXBCdG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRpcE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk9yQ2xvc2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtdXNpY0J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuT3JDbG9zZUJHKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOW8gOWni+a4uOaIjyAqL1xyXG4gICAgcGxheUdhbWUoKXtcclxuICAgICAgICBpZihEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4pIHJldHVyblxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1biA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIOiuoeaXtuWZqFxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgIC8v6ZqQ6JeP5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5QnRuLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAvL+a4uOaIj+mAu+i+kVxyXG4gICAgICAgIHRoaXMucGxheVNjci5jcmVhdGVSYW5kb21QdXp6bGUoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiBcclxuICAgIC8qKlxyXG4gICAgICog5byA5ZCv5oiW5YWz6Zet6Z+z5pWIXHJcbiAgICAqL1xyXG4gICAgb3Blbk9yQ2xvc2VTb3VuZCgpIHtcclxuICAgICAgICBpZihEYXRhTWFuYWdlci5jdXJTb3VuZEJHSXNDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNvbG9yID0gY2MuY29sb3IoMTcwLCAxNzAsIDE3MCwgMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyU291bmRCR0lzQ2xvc2UgPSAhRGF0YU1hbmFnZXIuY3VyU291bmRCR0lzQ2xvc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk9yQ2xvc2VCRygpIHtcclxuICAgICAgICBpZihEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0J0bi5jb2xvciA9IGNjLmNvbG9yKDE3MCwgMTcwLCAxNzAsIDI1NSk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNCdG4uY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSA9ICFEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+WAkuiuoeaXtlxyXG4gICAgKi9cclxuICAgIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgbGV0IHNwZWVkID0gMC4wMTtcclxuICAgICAgICBEYXRhTWFuYWdlci50aW1lckZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluZGV4VGltZSAtPSBzcGVlZDtcclxuICAgICAgICAgICAgaWYoRGF0YU1hbmFnZXIuaW5kZXhUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVzdWx0Rm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyVWkoKVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMDA6MDA6XCIrTWF0aC5mbG9vcihEYXRhTWFuYWdlci5pbmRleFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKERhdGFNYW5hZ2VyLnRpbWVyRnVuYywgc3BlZWQpO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWAkuiuoeaXtlxyXG4gICAgKi9cclxuICAgIHVwZGF0ZVRpbWVyVWkoKSB7XHJcbiAgICAgICAgLy8gY2MuZmluZChcImJhckJnL2JhclwiLCB0aGlzLnRpbWVyTm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gRGF0YU1hbmFnZXIuaW5kZXhUaW1lIC8gRGF0YU1hbmFnZXIuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMudGltZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIwMDowMDpcIitNYXRoLmNlaWwoRGF0YU1hbmFnZXIuaW5kZXhUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGFDb2luKCl7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOS9meminVxyXG4gICAgKi9cclxuICAgIHVwZGF0ZVVzZXJDb2luKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudXNlclNjb3JlTGFiZWwpXHJcbiAgICAgICAgICAgIC50bygwLjEsIHtzY2FsZTogMS4xfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwge3NjYWxlOiAxfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy51c2VyU2NvcmVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBEYXRhTWFuYWdlci5jdXJTY29yZDtcclxuICAgIH1cclxuXHJcbiAgICAvKirliKTmlq3nu5PmnpwgKi9cclxuICAgIFJlc3VsdEZuKCl7XHJcbiAgICAgICAgaWYoRGF0YU1hbmFnZXIuX2N1clNjb3JkID49IDEwMDApe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQodHJ1ZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgLyoq5omT5byA5o+Q56S6ICovXHJcbiAgICAgb3BlblRpcE5vZGUoKXtcclxuICAgICAgICB0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJydWxlXCIpLnNjYWxlID0gMC44O1xyXG4gICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikpXHJcbiAgICAgICAgLnRvKDAuMiwge3NjYWxlOiAxfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAgICAvKipcclxuICAgICAqIOWFs+mXreaPkOekuuWxleekulxyXG4gICAgKi9cclxuICAgICAgIGhpZGVUaXBOb2RlKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHtzY2FsZTogMC41fSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bGV56S657uT5p6cXHJcbiAgICAqL1xyXG4gICAgc2hvd1Jlc3VsdChpc1dpbikge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZShEYXRhTWFuYWdlci50aW1lckZ1bmMpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcblxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluZGV4VGltZSA9IERhdGFNYW5hZ2VyLnN0YXJ0VGltZTtcclxuICAgICAgICBpZihpc1dpbikge1xyXG4gICAgICAgICAgICBsZXQgd2luTnVtTGFibGUgPSBjYy5maW5kKFwid2luL3dpbk51bVwiLCB0aGlzLnJlc3VsdE5vZGUpO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5jdXJXaW5OdW0gKz0gMTAwO1xyXG4gICAgICAgICAgICB3aW5OdW1MYWJsZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBEYXRhTWFuYWdlci5jdXJXaW5OdW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbaXNXaW4gPyA0IDogNV07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG5cclxuICAgICAgICBsZXQgd2luTm9kZSA9IHRoaXMucmVzdWx0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIndpblwiKTtcclxuICAgICAgICBsZXQgbG9zZU5vZGUgPSB0aGlzLnJlc3VsdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsb3NlXCIpO1xyXG5cclxuICAgICAgICB3aW5Ob2RlLmFjdGl2ZSA9IGlzV2luO1xyXG4gICAgICAgIGxvc2VOb2RlLmFjdGl2ZSA9ICFpc1dpbjtcclxuICAgICAgICBsZXQgY3VyQW5pTm9kZSA9IGlzV2luID8gd2luTm9kZSA6IGxvc2VOb2RlO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3VsdE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY3VyQW5pTm9kZS5zY2FsZSA9IDAuNjtcclxuICAgICAgICBjdXJBbmlOb2RlLm9wYWNpdHkgPSAxMDA7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGN1ckFuaU5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjMsIHtzY2FsZTogMS4xLCBvcGFjaXR5OiAyNTV9KVxyXG4gICAgICAgICAgICAudG8oMC4zLCB7c2NhbGU6IDF9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXree7k+aenOWxleekulxyXG4gICAgKi9cclxuICAgIGhpZGVSZXN1bHROb2RlKCkge1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLl9jdXJTY29yZCA9IDA7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuX2luZGV4VGltZSA9IERhdGFNYW5hZ2VyLnN0YXJ0VGltZVxyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpXHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=