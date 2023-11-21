"use strict";
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