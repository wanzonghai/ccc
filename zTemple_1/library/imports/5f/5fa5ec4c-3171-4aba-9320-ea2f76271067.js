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
var Util_1 = require("./util/Util");
var define_1 = require("./util/define");
var loaderManager_1 = require("./util/loaderManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemParentNode = null;
        _this.userCoinNode = null;
        _this.itemNode = null;
        _this.resultNode = null;
        _this.tipNode = null;
        _this.timerNode = null;
        _this.itemSpriteFrameList = [];
        _this.itemParent = null;
        _this.ballNode = null;
        _this.clipArray = [];
        /** 行数 */
        _this.rowNum = 4;
        /** 列数 */
        _this.colNum = 8;
        /** 元素大小 */
        _this.itemSize = cc.size(0, 0);
        /** 元素缩放 */
        _this.itemScale = 0.96;
        /** 元素间距X */
        _this.itemIntervalX = 0;
        /** 元素间距Y */
        _this.itemIntervalY = 0;
        // /** 元素宽高 */
        // private itemSize: cc.Size = cc.size(360, 150);
        /** 元素总量 */
        _this.itemNum = 12;
        /** 元素类别数量 */
        _this.itemTypeNum = 6;
        _this.index = 0;
        _this.iconPf = null;
        return _this;
    }
    GameLayer_1 = GameLayer;
    /**加载卡片 */
    GameLayer.prototype.loadCard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, loaderManager_1.default.getRes("gen", "prefab", cc.Prefab)];
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
        DataManager_1.default.curWinNum = 0;
        this.updateUserCoin();
        this.updateTimerUi();
        //画格子
        for (var i = 0; i < this.itemSpriteFrameList.length; i++) {
            this.itemSpriteFrameList[i].getRect().width > this.itemSize.width && (this.itemSize.width = this.itemSpriteFrameList[i].getRect().width);
            this.itemSpriteFrameList[i].getRect().height > this.itemSize.height && (this.itemSize.height = this.itemSpriteFrameList[i].getRect().height);
        }
        this.itemParent["startPos"] = cc.v3(this.itemParent.position.x, this.itemParent.position.y);
        this.creatorItemNode();
    };
    /**
     * 创建item节点
    */
    GameLayer.prototype.creatorItemNode = function () {
        for (var i = 0; i < this.rowNum * this.colNum; i++) {
            var itemNode = new cc.Node();
            itemNode.addComponent(cc.Sprite);
            var row = Math.floor(i / this.colNum);
            var col = i % this.colNum;
            var itemWidth = this.itemSize.width * this.itemScale;
            var itemHeight = this.itemSize.height * this.itemScale;
            itemNode.scale = this.itemScale;
            itemNode["curIndex"] = i;
            this.itemParent.addChild(itemNode);
            itemNode.position = cc.v3(itemWidth / 2 + col * itemWidth + col * this.itemIntervalX, itemHeight / 2 + (this.rowNum - row - 1) * itemHeight + (this.rowNum - row - 1) * this.itemIntervalY);
            itemNode["startPos"] = cc.v3(itemWidth / 2 + col * itemWidth + col * this.itemIntervalX, itemHeight / 2 + (this.rowNum - row - 1) * itemHeight + (this.rowNum - row - 1) * this.itemIntervalY);
        }
        this.initGameData();
    };
    /**
    * 初始化节点数据
   */
    GameLayer.prototype.initGameData = function () {
        var curId = 1;
        for (var i = 0; i < this.rowNum * this.colNum; i++) {
            var itemNode = this.itemParent.children[i];
            itemNode["itemId"] = curId;
            itemNode.getComponent(cc.Sprite).spriteFrame = this.itemSpriteFrameList[curId - 1];
            curId = curId == 1 ? 2 : 1;
        }
    };
    /**
     * 游戏内按钮绑定事件
    */
    GameLayer.prototype.btnEvent = function (event) {
        var name = event.target.name;
        switch (name) {
            case "btnStartGame":
                this.playGame();
                break;
            case "btnReturn":
                cc.director.loadScene("startGame");
                DataManager_1.default.curGameIsRun = false;
                this.hideResultNode();
                break;
            case "btNextGame":
            case "btStartOver":
                this.hideResultNode();
                break;
            case "btExit":
                cc.director.loadScene("startGame");
                DataManager_1.default.curGameIsRun = false;
                this.hideResultNode();
                break;
            case "btnHelp":
                this.tipNode.active = true;
                break;
            case "btnCloseHelp":
                this.hideTipNode();
                break;
        }
        cc.audioEngine.playEffect(this.clipArray[0], false);
    };
    /** 开始游戏 */
    GameLayer.prototype.playGame = function () {
        if (DataManager_1.default.curGameIsRun)
            return;
        DataManager_1.default.curGameIsRun = true;
        cc.audioEngine.playEffect(this.clipArray[0], false);
        this.startTimer();
        //创建游戏节点
        // this.creatGameNode()
        console.log("this.itemNode", this.itemNode);
        this.listBall();
        //随机创建障碍物
        this.randObs();
    };
    /**随机创建障碍物 */
    GameLayer.prototype.randObs = function () {
        var _this = this;
        DataManager_1.default.gamePos[0] = Util_1.default.getRandomInt(1, 30);
        DataManager_1.default.gamePos[1] = Util_1.default.getRandomInt(1, 30);
        DataManager_1.default.gamePos[2] = Util_1.default.getRandomInt(1, 30);
        DataManager_1.default.gamePos[3] = Util_1.default.getRandomInt(1, 30);
        DataManager_1.default.gamePos[4] = Util_1.default.getRandomInt(1, 30);
        DataManager_1.default.gamePos.forEach(function (e) {
            _this.itemParentNode.children[e].active = true;
        });
    };
    /**绑定球事件 */
    GameLayer.prototype.listBall = function () {
        var _this = this;
        this.ballNode.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.ballNode["startPos"] = cc.v2(event.getLocation().x, event.getLocation().y);
        });
        this.ballNode.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            var statPos = _this.ballNode["startPos"];
            var endPos = cc.v2(event.getLocation().x, event.getLocation().y);
            var direction = _this.isDirection(statPos, endPos);
            cc.audioEngine.playEffect(_this.clipArray[1], false);
            if (direction) {
                _this.movingBone(_this.ballNode, direction);
            }
        });
    };
    /**滑块移动方向 */
    GameLayer.prototype.movingBone = function (taget, direction) {
        var _this = this;
        var moveindx;
        // console.log("DataManager.index",DataManager.index);
        switch (direction) {
            case define_1.DirectionType.Top:
                console.log("上");
                if (DataManager_1.default.index >= this.colNum) {
                    moveindx = DataManager_1.default.index - this.colNum;
                }
                break;
            case define_1.DirectionType.Bottom:
                console.log("下");
                if (DataManager_1.default.index <= this.rowNum * this.colNum) {
                    moveindx = DataManager_1.default.index + this.colNum;
                }
                break;
            case define_1.DirectionType.Left:
                console.log("左");
                if ((DataManager_1.default.index) % this.colNum >= 0) {
                    moveindx = DataManager_1.default.index - 1;
                    if (moveindx < 0) {
                        moveindx = 0;
                    }
                }
                break;
            case define_1.DirectionType.Right:
                console.log("右");
                if ((DataManager_1.default.index) % this.colNum < this.colNum - 1) {
                    moveindx = DataManager_1.default.index + 1;
                }
                break;
        }
        if (moveindx != undefined && moveindx != DataManager_1.default.gamePos[0] && moveindx != DataManager_1.default.gamePos[1] && moveindx != DataManager_1.default.gamePos[2] && moveindx != DataManager_1.default.gamePos[3] && moveindx != DataManager_1.default.gamePos[4]) {
            cc.tween(taget)
                .to(0.3, { position: this.itemParentNode.children[moveindx].position })
                .call(function () {
                DataManager_1.default.index = moveindx;
                // console.log("DataManager.index",DataManager.index);
                if (DataManager_1.default.index == 31) {
                    _this.showResult(true);
                }
            })
                .start();
        }
        // cc.tween(taget)
    };
    GameLayer.prototype.isDirection = function (startPos, endPos) {
        var direction = define_1.DirectionType.Left;
        var offsetX = Math.abs(endPos.x - startPos.x);
        var offsetY = Math.abs(endPos.y - startPos.y);
        if (offsetX >= offsetY) {
            direction = endPos.x > startPos.x ? define_1.DirectionType.Right : define_1.DirectionType.Left;
        }
        else {
            direction = endPos.y > startPos.y ? define_1.DirectionType.Top : define_1.DirectionType.Bottom;
        }
        return direction;
    };
    /**停止篮筐 */
    GameLayer.prototype.clearTween = function () {
        this.node.stopAllActions();
    };
    /**
     * 开始倒计时
    */
    GameLayer.prototype.startTimer = function () {
        var _this = this;
        DataManager_1.default.timerFunc = function () {
            DataManager_1.default.indexTime--;
            if (DataManager_1.default.indexTime <= 0) {
                cc.audioEngine.playEffect(_this.clipArray[1], false);
                _this.showResult(false);
            }
        };
        this.schedule(DataManager_1.default.timerFunc, 1);
    };
    /**
     * 更新倒计时
    */
    GameLayer.prototype.updateTimerUi = function () {
        this.timerNode.getChildByName("timeText").getComponent(cc.Label).string = "TIME:" + DataManager_1.default.indexTime;
        this.timerNode.getComponent(cc.ProgressBar).progress = DataManager_1.default.indexTime / DataManager_1.default.startTime;
    };
    /**更新Layout布局 */
    GameLayer.prototype.updataLayout = function () {
        if (DataManager_1.default.isLayout) {
            this.itemParentNode.getComponent(cc.Layout).type = cc.Layout.Type.GRID;
        }
        else {
            this.itemParentNode.getComponent(cc.Layout).type = cc.Layout.Type.NONE;
        }
    };
    /**
     * 更新余额
    */
    GameLayer.prototype.updateUserCoin = function () {
        var lableNode = this.userCoinNode.getChildByName("coinLable");
        cc.tween(lableNode)
            .to(0.1, { scale: 1.1 })
            .to(0.1, { scale: 1 })
            .start();
        lableNode.getComponent(cc.Label).string = "SCORE:" + DataManager_1.default.curScord;
    };
    /**结果判断 */
    GameLayer.prototype.showRes = function () {
        if (DataManager_1.default._curScord >= 210) {
            this.showResult(true);
        }
        else {
            // this.showResult(true)
            this.showResult(false);
        }
    };
    /**
     * 展示结果
    */
    GameLayer.prototype.showResult = function (isWin) {
        this.unschedule(DataManager_1.default.timerFunc);
        cc.director.getPhysicsManager().enabled = false;
        cc.director.getCollisionManager().enabled = false;
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
        if (isWin) {
            var winNumLable = cc.find("win/winNum", this.resultNode);
            winNumLable.getComponent(cc.Label).string = "" + DataManager_1.default.curWinNum;
            cc.audioEngine.playEffect(this.clipArray[3], false);
        }
        else {
            cc.audioEngine.playEffect(this.clipArray[4], false);
        }
        var winNode = this.resultNode.getChildByName("win");
        var loseNode = this.resultNode.getChildByName("lose");
        winNode.active = isWin;
        loseNode.active = !isWin;
        this.resultNode.active = true;
    };
    /**
     * 关闭结果展示
    */
    GameLayer.prototype.hideResultNode = function () {
        DataManager_1.default.gamePos = [0, 0, 0, 0, 0];
        DataManager_1.default.index = 0;
        this.resultNode.active = false;
        DataManager_1.default.curGameIsRun = false;
        DataManager_1.default.curWinNum = 0;
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
        this.timerNode.getComponent(cc.ProgressBar).progress = 1;
        cc.director.getPhysicsManager().enabled = false;
        cc.director.getCollisionManager().enabled = false;
        this.clearTween();
        // DataManager.selectPorkerArray[0] = -1
    };
    /**
     * 关闭提示展示
    */
    GameLayer.prototype.hideTipNode = function () {
        this.tipNode.active = false;
    };
    var GameLayer_1;
    GameLayer.instance = new GameLayer_1();
    __decorate([
        property({ type: cc.Node, tooltip: "放置元素的layout" })
    ], GameLayer.prototype, "itemParentNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "用户余额节点" })
    ], GameLayer.prototype, "userCoinNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏节点" })
    ], GameLayer.prototype, "itemNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏结果节点" })
    ], GameLayer.prototype, "resultNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏提示节点" })
    ], GameLayer.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "倒计时节点" })
    ], GameLayer.prototype, "timerNode", void 0);
    __decorate([
        property({ type: [cc.SpriteFrame], tooltip: "元素纹理" })
    ], GameLayer.prototype, "itemSpriteFrameList", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "元素父节点" })
    ], GameLayer.prototype, "itemParent", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "ballNode", void 0);
    __decorate([
        property([cc.AudioClip])
    ], GameLayer.prototype, "clipArray", void 0);
    GameLayer = GameLayer_1 = __decorate([
        ccclass
    ], GameLayer);
    return GameLayer;
}(cc.Component));
exports.default = GameLayer;

cc._RF.pop();