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
var ItemNode_1 = require("./ItemNode");
var define_1 = require("./util/define");
var EventMgr_1 = require("./util/event/EventMgr");
var loaderManager_1 = require("./util/loaderManager");
var util_1 = require("./util/util");
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
        _this.gzPos = null;
        _this.gamePos = null;
        _this.playDrawShowNode = null;
        _this.lineShowNode = null;
        _this.keyNode = null;
        _this.audioResList = [];
        /** 上一次绘制的格子 */
        _this.lastDrawCell = null;
        _this.iconPf = null;
        _this.index = 0;
        _this.colNum = 4;
        _this.rowNum = 4;
        /** 已绘制线数组 */
        _this.alreadyDrawLineList = [];
        /** 当前绘制线数组 */
        _this.curDrawLineItmeIndex = [];
        _this.list = [];
        return _this;
    }
    /**加载预制体 */
    GameLayer.prototype.loadCard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, loaderManager_1.default.getRes('item', 'prefab', cc.Prefab)];
                    case 1:
                        _a.iconPf = _b.sent();
                        if (this.iconPf) {
                            console.log('预制体加载成功！');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GameLayer.prototype.start = function () {
        this.updateUserCoin();
        this.updateTimerUi();
        this.loadCard();
        // this.listerEvent()
    };
    GameLayer.prototype.onEnable = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.schedule(function () {
                if (DataManager_1.default.Adjust_status == '')
                    return;
                if (DataManager_1.default.Adjust_status.toLowerCase() !== 'organic') {
                    // 字符串不为空且不为 "organic" 或 "Organic"，执行你的操作
                    DataManager_1.default.nativeJsbFun(define_1.JsbFunType.AdjustDecision);
                }
                else {
                    DataManager_1.default.nativeJsbFun(define_1.JsbFunType.ShowOpenAd);
                }
                _this.unscheduleAllCallbacks();
            }, 1.5);
        }, 0.5);
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
            case 'btnStartGame':
                DataManager_1.default.nativeJsbFun(define_1.JsbFunType.ShowInterstitialAd);
                this.playGame();
                break;
            case 'btnReturn':
                DataManager_1.default.nativeJsbFun(define_1.JsbFunType.ShowInterstitialAd);
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('a_startGame');
                break;
            case 'btNextGame':
            case 'btStartOver':
                DataManager_1.default.nativeJsbFun(define_1.JsbFunType.ShowInterstitialAd);
                this.hideResultNode();
                break;
            case 'btExit':
                DataManager_1.default.nativeJsbFun(define_1.JsbFunType.ShowInterstitialAd);
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('a_startGame');
                break;
            case 'tipBtn':
                DataManager_1.default.nativeJsbFun(define_1.JsbFunType.ShowInterstitialAd);
                this.openTipNode();
                break;
            case 'btnAds':
                DataManager_1.default.nativeJsbFun(define_1.JsbFunType.ShowRewardedVideoAd);
                break;
            case 'closeTipBtn':
                this.hideTipNode();
                break;
            case 'btnSound':
                this.openOrCloseSound();
                break;
            case 'musicBtn':
                this.openOrCloseBG();
                break;
        }
    };
    /** 开始游戏 */
    GameLayer.prototype.playGame = function () {
        if (DataManager_1.default.curGameIsRun)
            return;
        DataManager_1.default.curGameIsRun = true;
        // cc.director.getCollisionManager().enabled = true;
        // 计时器
        this.startTimer();
        //隐藏游戏按钮
        // this.playBtn.active = false
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
        //游戏逻辑
        var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        var randomList = util_1.default.getRandomListItme(numArray, 20, false);
        this.list = randomList;
        // for(let i=0;i<randomList.length;i++){
        //     this.creatLaber(i,randomList[i])
        // }
        for (var i = 0; i < randomList.length; i++) {
            this.creatLaber(i, randomList[i]);
        }
        console.log('初始', this.list);
    };
    /**创建文字 */
    GameLayer.prototype.creatLaber = function (index, val) {
        var labeNode = cc.instantiate(this.iconPf);
        labeNode.setParent(this.gamePos);
        labeNode.getComponent(ItemNode_1.default).init(val, index);
        labeNode.setPosition(this.gzPos.children[index].position);
        if (val == 0) {
            this.listTouchEvent(labeNode);
        }
    };
    /**绑定滑动事件 */
    GameLayer.prototype.listTouchEvent = function (TouchNode) {
        var _this = this;
        TouchNode.on(cc.Node.EventType.TOUCH_START, function (event) {
            TouchNode['startPos'] = cc.v2(event.getLocation().x, event.getLocation().y);
        });
        TouchNode.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            var statPos = TouchNode['startPos'];
            var endPos = cc.v2(event.getLocation().x, event.getLocation().y);
            var direction = _this.isDirection(statPos, endPos);
            if (direction) {
                _this.TouchMove(TouchNode, direction);
            }
        });
    };
    /**移动事件 */
    GameLayer.prototype.TouchMove = function (taget, direction) {
        var _this = this;
        var itemIndex = taget.getComponent(ItemNode_1.default).itemIndex;
        var moveId = itemIndex;
        var otherNode = null;
        DataManager_1.default._curScord += 1;
        this.updataCoin();
        switch (direction) {
            case define_1.DirectionType.Top:
                console.log('上');
                if (itemIndex - this.colNum >= 0) {
                    moveId = itemIndex - this.colNum;
                }
                break;
            case define_1.DirectionType.Bottom:
                console.log('下');
                if (itemIndex + this.colNum <= this.gzPos.children.length) {
                    moveId = itemIndex + this.colNum;
                }
                break;
            case define_1.DirectionType.Left:
                console.log('左');
                if ((itemIndex % this.colNum) - 1 >= 0) {
                    moveId = itemIndex - 1;
                }
                break;
            case define_1.DirectionType.Right:
                console.log('右');
                if ((itemIndex % this.colNum) + 1 <= this.colNum) {
                    moveId = itemIndex + 1;
                }
                break;
        }
        this.gamePos.children.forEach(function (e) {
            if (e.getComponent(ItemNode_1.default).itemIndex == moveId) {
                otherNode = e;
            }
        });
        if (otherNode) {
            cc.tween(taget).to(0.2, { position: this.gzPos.children[moveId].position }).start();
            cc.tween(otherNode).to(0.2, { position: this.gzPos.children[itemIndex].position }).start();
            this.scheduleOnce(function () {
                taget.getComponent(ItemNode_1.default).itemIndex = moveId;
                otherNode.getComponent(ItemNode_1.default).itemIndex = itemIndex;
                var tagetId = util_1.default.copyObj(taget.getComponent(ItemNode_1.default).itemId);
                taget.getComponent(ItemNode_1.default).itemId = otherNode.getComponent(ItemNode_1.default).itemId;
                otherNode.getComponent(ItemNode_1.default).itemId = tagetId;
                var ARR = [];
                _this.gamePos.children.forEach(function (e, i) {
                    ARR.push(e.getComponent(ItemNode_1.default).itemId);
                    if (ARR == DataManager_1.default.DefArray) {
                        _this.showResult(true);
                    }
                });
            }, 0.3);
        }
    };
    /**更新实际类型 */
    GameLayer.prototype.updataIndex = function () {
        for (var i = 0; i < this.gamePos.children.length - 1; i++) {
            if (this.gamePos.children[i].getComponent(ItemNode_1.default).itemIndex == i) {
            }
        }
    };
    /**判断方向 */
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
    /**
     * 获取当前世界坐标上的item
     */
    GameLayer.prototype.getCurWorldPosItem = function (curPos) {
        var returnItem = null;
        this.gamePos.children.forEach(function (item) {
            var itemWorldPos = item.convertToWorldSpaceAR(cc.v2(0, 0));
            var size = item.getContentSize();
            if (curPos.x > itemWorldPos.x - size.width && curPos.x < itemWorldPos.x + size.width && curPos.y > itemWorldPos.y - size.height && curPos.y < itemWorldPos.y + size.height) {
                // 在节点内
                returnItem = item;
            }
        });
        return returnItem;
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
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.musicBtn.color = cc.color(255, 255, 255, 255);
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 1;
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
                _this.showResult(false);
            }
            _this.updateTimerUi();
            _this.timerNode.getChildByName('timeText').getComponent(cc.Label).string = Math.floor(DataManager_1.default.indexTime) + 's';
        };
        this.schedule(DataManager_1.default.timerFunc, speed);
    };
    /**
     * 更新倒计时
     */
    GameLayer.prototype.updateTimerUi = function () {
        cc.find('barBg/bar', this.timerNode).getComponent(cc.Sprite).fillRange = DataManager_1.default.indexTime / DataManager_1.default.startTime;
        this.timerNode.getChildByName('timeText').getComponent(cc.Label).string = Math.ceil(DataManager_1.default.indexTime) + 's';
    };
    GameLayer.prototype.updataCoin = function () {
        this.updateUserCoin();
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
        this.keyNode.getComponent(cc.Label).string = DataManager_1.default.keyNum + '';
    };
    /**
     * 更新余额
     */
    GameLayer.prototype.updateUserCoin = function () {
        var lableNode = this.userCoinNode.getChildByName('coinLable');
        cc.tween(lableNode).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
        lableNode.getComponent(cc.Label).string = '' + DataManager_1.default.curScord;
    };
    /**判断结果 */
    GameLayer.prototype.ResultFn = function () {
        if (DataManager_1.default._curScord >= 1000) {
            this.showResult(true);
            DataManager_1.default.curWinNum += 200;
        }
        else {
            this.showResult(false);
        }
    };
    /**打开提示 */
    GameLayer.prototype.openTipNode = function () {
        this.tipNode.getChildByName('rule').scale = 0.8;
        this.tipNode.active = true;
        cc.tween(this.tipNode.getChildByName('rule')).to(0.2, { scale: 1 }).start();
    };
    /**
     * 关闭提示展示
     */
    GameLayer.prototype.hideTipNode = function () {
        var _this = this;
        cc.tween(this.tipNode.getChildByName('rule'))
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.tipNode.active = false;
            _this.tipNode.getChildByName('rule').scale = 1;
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
        this.gamePos.removeAllChildren();
        if (isWin) {
            var winNumLable = cc.find('win/winNum', this.resultNode);
            DataManager_1.default.curWinNum += 100;
            winNumLable.getComponent(cc.Label).string = '' + DataManager_1.default.curWinNum;
        }
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[isWin ? 4 : 5];
        this.node.getComponent(cc.AudioSource).play();
        var winNode = this.resultNode.getChildByName('win');
        var loseNode = this.resultNode.getChildByName('lose');
        winNode.active = isWin;
        loseNode.active = !isWin;
        var curAniNode = isWin ? winNode : loseNode;
        this.resultNode.active = true;
        curAniNode.scale = 0.6;
        curAniNode.opacity = 100;
        cc.tween(curAniNode).to(0.3, { scale: 1.1, opacity: 255 }).to(0.3, { scale: 1 }).start();
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
        property({ type: [cc.SpriteFrame], tooltip: '元素纹理' })
    ], GameLayer.prototype, "itemResList", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '用户余额节点' })
    ], GameLayer.prototype, "userCoinNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏提示页面' })
    ], GameLayer.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏结果节点' })
    ], GameLayer.prototype, "resultNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '倒计时节点' })
    ], GameLayer.prototype, "timerNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '音效按钮节点' })
    ], GameLayer.prototype, "soundBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '音效按钮节点' })
    ], GameLayer.prototype, "musicBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '开始游戏节点' })
    ], GameLayer.prototype, "playBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏格子' })
    ], GameLayer.prototype, "gzPos", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏格子' })
    ], GameLayer.prototype, "gamePos", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '玩家绘制展示节点' })
    ], GameLayer.prototype, "playDrawShowNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '线展示节点' })
    ], GameLayer.prototype, "lineShowNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '线展示节点' })
    ], GameLayer.prototype, "keyNode", void 0);
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