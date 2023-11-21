
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
        _this.audioResList = [];
        /** 上一次绘制的格子 */
        _this.lastDrawCell = null;
        _this.iconPf = null;
        _this.index = 0;
        _this.colNum = 11;
        _this.rowNum = 5;
        /** 已绘制线数组 */
        _this.alreadyDrawLineList = [];
        /** 当前绘制线数组 */
        _this.curDrawLineItmeIndex = [];
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
        this.bindingDrawVisualEvent();
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
                this.playGame();
                break;
            case 'btnReturn':
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('hall');
                break;
            case 'btNextGame':
            case 'btStartOver':
                this.hideResultNode();
                break;
            case 'btExit':
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('hall');
                break;
            case 'tipBtn':
                this.openTipNode();
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
            case 'adsBtn':
                DataManager_1.default.adGoogleRewardedVideoAdHandle();
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
        for (var i = 0; i < this.gzPos.children.length; i++) {
            this.creatBall(this.gzPos.children[i].position, i);
        }
    };
    /**创建预制体 */
    GameLayer.prototype.creatBall = function (pos, i) {
        var ballNode = cc.instantiate(this.iconPf);
        var index = util_1.default.getRandom(0, ballNode.getComponent(ItemNode_1.default).imgSpArr.length - 1);
        ballNode.getComponent(ItemNode_1.default).init(index, i);
        ballNode.setParent(this.gamePos);
        ballNode.setPosition(pos);
        // this.listTouchEvent(ballNode)
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
        // console.log("taget",taget);
        switch (direction) {
            case define_1.DirectionType.Top:
                console.log('上');
                break;
            case define_1.DirectionType.Bottom:
                console.log('下');
                break;
            case define_1.DirectionType.Left:
                console.log('左');
                break;
            case define_1.DirectionType.Right:
                console.log('右');
                break;
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
     * 绘画展示区绑定事件
     */
    GameLayer.prototype.bindingDrawVisualEvent = function () {
        var _this = this;
        this.playDrawShowNode.on(cc.Node.EventType.TOUCH_START, function (even) {
            // if(DataManager.itemHideAniIsPlay || !DataManager.curGameIsRun) return;
            var curWorldItem = _this.getCurWorldPosItem(even.getLocation());
            if (curWorldItem != null) {
                _this.curDrawLineItmeIndex = [];
                _this.playDrawShowNode['isDraw'] = true;
                _this.lastDrawCell = curWorldItem;
                _this.curDrawLineItmeIndex.push(curWorldItem.getComponent(ItemNode_1.default).itemIndex);
            }
        });
        this.playDrawShowNode.on(cc.Node.EventType.TOUCH_MOVE, function (even) {
            if (!_this.playDrawShowNode['isDraw'])
                return;
            var curWorldPosItem = _this.getCurWorldPosItem(even.getLocation());
            _this.playDrawShowNode.getComponent(cc.Graphics).clear();
            if (curWorldPosItem && _this.curCellIsDraw(curWorldPosItem)) {
                _this.lastDrawCell['alreadyDraw'] = true;
                curWorldPosItem['alreadyDraw'] = true;
                _this.drawLine(curWorldPosItem.convertToWorldSpaceAR(cc.v3(0, 0, 0)));
                _this.lastDrawCell = curWorldPosItem;
                _this.curDrawLineItmeIndex.push(curWorldPosItem.getComponent(ItemNode_1.default).itemIndex);
            }
            _this.drawPlayVisualLine(even.getLocation());
        });
        this.playDrawShowNode.on(cc.Node.EventType.TOUCH_END, function (even) {
            if (!_this.playDrawShowNode['isDraw'])
                return;
            _this.playDrawShowNode['isDraw'] = false;
            _this.playDrawShowNode.getComponent(cc.Graphics).clear();
            _this.lineShowNode.getComponent(cc.Graphics).clear();
            if (_this.curDrawLineItmeIndex.length >= 2) {
                // 达到清除条件
                DataManager_1.default.itemHideAniIsPlay = true;
                var aniNum_1 = 0;
                var endCall_1 = function () {
                    DataManager_1.default.itemHideAniIsPlay = false;
                    _this.gamePos.children.forEach(function (item) {
                        if (item.opacity == 255) {
                            item['alreadyDraw'] = false;
                        }
                    });
                };
                var _loop_1 = function (i) {
                    var index = _this.curDrawLineItmeIndex[i];
                    var node = _this.gamePos.children[index];
                    aniNum_1 += 2;
                    cc.tween(node)
                        .to(0.2, { scale: 1.1 })
                        .call(function () {
                        if (--aniNum_1 == 0) {
                            endCall_1();
                            node.scale = 1;
                        }
                    })
                        .start();
                    cc.tween(node)
                        .to(0.2, { opacity: 0 })
                        .call(function () {
                        if (--aniNum_1 == 0) {
                            endCall_1();
                        }
                        var itemID = util_1.default.getRandom(0, node.getComponent(ItemNode_1.default).imgSpArr.length - 1);
                        node.getComponent(ItemNode_1.default).init(itemID, node.getComponent(ItemNode_1.default).itemIndex);
                        node.opacity = 255;
                        DataManager_1.default._curScord += 30;
                        _this.updataCoin();
                    })
                        .start();
                };
                for (var i = 0; i < _this.curDrawLineItmeIndex.length; i++) {
                    _loop_1(i);
                }
            }
            else {
                _this.gamePos.children.forEach(function (item) {
                    if (item.opacity == 255) {
                        item['alreadyDraw'] = false;
                    }
                });
            }
        });
    };
    /**
     * 绘制玩家可视线条
     */
    GameLayer.prototype.drawPlayVisualLine = function (endPos) {
        if (!this.lastDrawCell)
            return;
        var targetPos = cc.v3(0, 0, 0);
        var startPos = cc.v3(0, 0, 0);
        var graphics = this.playDrawShowNode.getComponent(cc.Graphics);
        startPos = this.playDrawShowNode.convertToNodeSpaceAR(this.lastDrawCell.convertToWorldSpaceAR(cc.v3(0, 0, 0)));
        targetPos = this.playDrawShowNode.convertToNodeSpaceAR(cc.v3(endPos.x, endPos.y));
        graphics.moveTo(startPos.x, startPos.y);
        graphics.lineTo(targetPos.x, targetPos.y);
        graphics.stroke();
    };
    /**
     * 当前格子是否可绘制
     */
    GameLayer.prototype.curCellIsDraw = function (curItem) {
        var lastItemId = this.lastDrawCell.getComponent(ItemNode_1.default).itemId;
        var curItemId = curItem.getComponent(ItemNode_1.default).itemId;
        if (lastItemId != curItemId || curItem['alreadyDraw'])
            return;
        var lastIndex = this.lastDrawCell.getComponent(ItemNode_1.default).itemIndex;
        var lastRow = Math.floor(lastIndex / this.colNum);
        var lastCol = lastIndex % this.colNum;
        var curIndex = curItem.getComponent(ItemNode_1.default).itemIndex;
        var curRow = Math.floor(curIndex / this.colNum);
        var curCol = curIndex % this.colNum;
        if (curRow == lastRow && (lastCol + 1 == curCol || lastCol - 1 == curCol)) {
            // 同行
            return true;
        }
        if (curCol == lastCol && (lastRow + 1 == curRow || lastRow - 1 == curRow)) {
            // 同列
            return true;
        }
        if (curRow == lastRow - 1 && curCol == lastCol + 1) {
            // 左上
            return true;
        }
        if (curRow == lastRow + 1 && curCol == lastCol + 1) {
            // 右上
            return true;
        }
        if (curRow == lastRow - 1 && curCol == lastCol - 1) {
            // 左下
            return true;
        }
        if (curRow == lastRow + 1 && curCol == lastCol - 1) {
            // 右下
            return true;
        }
        return false;
    };
    /**
     * 绘制结果可视线条
     */
    GameLayer.prototype.drawLine = function (endPos) {
        var targetPos = cc.v3(0, 0, 0);
        var startPos = cc.v3(0, 0, 0);
        var graphics = this.lineShowNode.getComponent(cc.Graphics);
        startPos = this.playDrawShowNode.convertToNodeSpaceAR(this.lastDrawCell.convertToWorldSpaceAR(cc.v3(0, 0, 0)));
        targetPos = this.lineShowNode.convertToNodeSpaceAR(endPos);
        graphics.moveTo(startPos.x, startPos.y);
        graphics.lineTo(targetPos.x, targetPos.y);
        graphics.stroke();
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
                _this.ResultFn();
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
        if (DataManager_1.default._curScord >= 2000) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLHVDQUFrQztBQUNsQyx3Q0FBdUQ7QUFDdkQsa0RBQTZDO0FBQzdDLHNEQUFpRDtBQUNqRCxvQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFnZ0JDO1FBOWZHLGlCQUFXLEdBQXFCLEVBQUUsQ0FBQztRQUduQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFtQixFQUFFLENBQUM7UUFFbEMsZUFBZTtRQUNmLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVqQixZQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTSxHQUFHLENBQUMsQ0FBQztRQUVuQixhQUFhO1FBQ2IseUJBQW1CLEdBQXlCLEVBQUUsQ0FBQztRQUUvQyxjQUFjO1FBQ2QsMEJBQW9CLEdBQWtCLEVBQUUsQ0FBQzs7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Z0I3QjtJQUFELGdCQUFDO0NBaGdCRCxBQWdnQkMsQ0FoZ0JzQyxFQUFFLENBQUMsU0FBUyxHQWdnQmxEO2tCQWhnQm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmltcG9ydCBHYW1lV2hlZWwgZnJvbSAnLi9HYW1lV2hlZWwnO1xyXG5pbXBvcnQgSXRlbU5vZGUgZnJvbSAnLi9JdGVtTm9kZSc7XHJcbmltcG9ydCB7IERpcmVjdGlvblR5cGUsIEV2ZW50SWQgfSBmcm9tICcuL3V0aWwvZGVmaW5lJztcclxuaW1wb3J0IEV2ZW50TWdyIGZyb20gJy4vdXRpbC9ldmVudC9FdmVudE1ncic7XHJcbmltcG9ydCBsb2FkZXJNYW5hZ2VyIGZyb20gJy4vdXRpbC9sb2FkZXJNYW5hZ2VyJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsL3V0aWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLCB0b29sdGlwOiAn5YWD57Sg57q555CGJyB9KVxyXG4gICAgaXRlbVJlc0xpc3Q6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn55So5oi35L2Z6aKd6IqC54K5JyB9KVxyXG4gICAgdXNlckNvaW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP5o+Q56S66aG16Z2iJyB9KVxyXG4gICAgdGlwTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+a4uOaIj+e7k+aenOiKgueCuScgfSlcclxuICAgIHJlc3VsdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICflgJLorqHml7boioLngrknIH0pXHJcbiAgICB0aW1lck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfpn7PmlYjmjInpkq7oioLngrknIH0pXHJcbiAgICBzb3VuZEJ0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+mfs+aViOaMiemSruiKgueCuScgfSlcclxuICAgIG11c2ljQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5byA5aeL5ri45oiP6IqC54K5JyB9KVxyXG4gICAgcGxheUJ0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+a4uOaIj+agvOWtkCcgfSlcclxuICAgIGd6UG9zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP5qC85a2QJyB9KVxyXG4gICAgZ2FtZVBvczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+eOqeWutue7mOWItuWxleekuuiKgueCuScgfSlcclxuICAgIHBsYXlEcmF3U2hvd05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfnur/lsZXnpLroioLngrknIH0pXHJcbiAgICBsaW5lU2hvd05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5BdWRpb0NsaXBdIH0pXHJcbiAgICBhdWRpb1Jlc0xpc3Q6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgLyoqIOS4iuS4gOasoee7mOWItueahOagvOWtkCAqL1xyXG4gICAgbGFzdERyYXdDZWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaWNvblBmOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNvbE51bSA9IDExO1xyXG4gICAgcHJpdmF0ZSByb3dOdW0gPSA1O1xyXG5cclxuICAgIC8qKiDlt7Lnu5jliLbnur/mlbDnu4QgKi9cclxuICAgIGFscmVhZHlEcmF3TGluZUxpc3Q6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XHJcblxyXG4gICAgLyoqIOW9k+WJjee7mOWItue6v+aVsOe7hCAqL1xyXG4gICAgY3VyRHJhd0xpbmVJdG1lSW5kZXg6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHJcbiAgICAvKirliqDovb3ljaHniYcgKi9cclxuICAgIGFzeW5jIGxvYWRDYXJkKCkge1xyXG4gICAgICAgIHRoaXMuaWNvblBmID0gYXdhaXQgbG9hZGVyTWFuYWdlci5nZXRSZXMoJ2l0ZW0nLCAncHJlZmFiJywgY2MuUHJlZmFiKTtcclxuICAgICAgICBpZiAodGhpcy5pY29uUGYpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+mihOWItuS9k+WKoOi9veaIkOWKn++8gScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJDb2luKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lclVpKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkQ2FyZCgpO1xyXG4gICAgICAgIC8vIHRoaXMubGlzdGVyRXZlbnQoKVxyXG4gICAgICAgIHRoaXMuYmluZGluZ0RyYXdWaXN1YWxFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v57uR5a6a5LqL5Lu2XHJcbiAgICBsaXN0ZXJFdmVudCgpIHtcclxuICAgICAgICBFdmVudE1nci5JbnN0YW5jZS5SZWdpc3RlcihFdmVudElkLlJlc3VsdCwgdGhpcy5zaG93UmVzdWx0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBjbGVhdEV2ZW50KCkge1xyXG4gICAgICAgIEV2ZW50TWdyLkluc3RhbmNlLk9mZigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/lhoXmjInpkq7nu5Hlrprkuovku7ZcclxuICAgICAqL1xyXG4gICAgYnRuRXZlbnQoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdidG5TdGFydEdhbWUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0blJldHVybic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWF0RXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaGFsbCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0TmV4dEdhbWUnOlxyXG4gICAgICAgICAgICBjYXNlICdidFN0YXJ0T3Zlcic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRFeGl0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdoYWxsJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndGlwQnRuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlblRpcE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjbG9zZVRpcEJ0bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVUaXBOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRuU291bmQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuT3JDbG9zZVNvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbXVzaWNCdG4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuT3JDbG9zZUJHKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYWRzQnRuJzpcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkR29vZ2xlUmV3YXJkZWRWaWRlb0FkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOW8gOWni+a4uOaIjyAqL1xyXG4gICAgcGxheUdhbWUoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1bikgcmV0dXJuO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1biA9IHRydWU7XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIOiuoeaXtuWZqFxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgIC8v6ZqQ6JeP5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5QnRuLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAvL+a4uOaIj+mAu+i+kVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3pQb3MuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdEJhbGwodGhpcy5nelBvcy5jaGlsZHJlbltpXS5wb3NpdGlvbiwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIm+W7uumihOWItuS9kyAqL1xyXG4gICAgY3JlYXRCYWxsKHBvczogY2MuVmVjMywgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGJhbGxOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pY29uUGYpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHV0aWwuZ2V0UmFuZG9tKDAsIGJhbGxOb2RlLmdldENvbXBvbmVudChJdGVtTm9kZSkuaW1nU3BBcnIubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgYmFsbE5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pbml0KGluZGV4LCBpKTtcclxuICAgICAgICBiYWxsTm9kZS5zZXRQYXJlbnQodGhpcy5nYW1lUG9zKTtcclxuICAgICAgICBiYWxsTm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIC8vIHRoaXMubGlzdFRvdWNoRXZlbnQoYmFsbE5vZGUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoq57uR5a6a5ruR5Yqo5LqL5Lu2ICovXHJcbiAgICBsaXN0VG91Y2hFdmVudChUb3VjaE5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBUb3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBUb3VjaE5vZGVbJ3N0YXJ0UG9zJ10gPSBjYy52MihldmVudC5nZXRMb2NhdGlvbigpLngsIGV2ZW50LmdldExvY2F0aW9uKCkueSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgVG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0UG9zID0gVG91Y2hOb2RlWydzdGFydFBvcyddO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIoZXZlbnQuZ2V0TG9jYXRpb24oKS54LCBldmVudC5nZXRMb2NhdGlvbigpLnkpO1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5pc0RpcmVjdGlvbihzdGF0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoTW92ZShUb3VjaE5vZGUsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnp7vliqjkuovku7YgKi9cclxuICAgIFRvdWNoTW92ZSh0YWdldDogY2MuTm9kZSwgZGlyZWN0aW9uOiBEaXJlY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0YWdldFwiLHRhZ2V0KTtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvblR5cGUuVG9wOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+S4iicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uVHlwZS5Cb3R0b206XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5LiLJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb25UeXBlLkxlZnQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5bemJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb25UeXBlLlJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WPsycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIpOaWreaWueWQkSAqL1xyXG4gICAgaXNEaXJlY3Rpb24oc3RhcnRQb3M6IGNjLlZlYzIsIGVuZFBvczogY2MuVmVjMik6IERpcmVjdGlvblR5cGUge1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb246IERpcmVjdGlvblR5cGUgPSBEaXJlY3Rpb25UeXBlLkxlZnQ7XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSBNYXRoLmFicyhlbmRQb3MueCAtIHN0YXJ0UG9zLngpO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gTWF0aC5hYnMoZW5kUG9zLnkgLSBzdGFydFBvcy55KTtcclxuICAgICAgICBpZiAob2Zmc2V0WCA+PSBvZmZzZXRZKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGVuZFBvcy54ID4gc3RhcnRQb3MueCA/IERpcmVjdGlvblR5cGUuUmlnaHQgOiBEaXJlY3Rpb25UeXBlLkxlZnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gZW5kUG9zLnkgPiBzdGFydFBvcy55ID8gRGlyZWN0aW9uVHlwZS5Ub3AgOiBEaXJlY3Rpb25UeXBlLkJvdHRvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeS4lueVjOWdkOagh+S4iueahGl0ZW1cclxuICAgICAqL1xyXG4gICAgZ2V0Q3VyV29ybGRQb3NJdGVtKGN1clBvczogY2MuVmVjMikge1xyXG4gICAgICAgIGxldCByZXR1cm5JdGVtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdhbWVQb3MuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbVdvcmxkUG9zID0gaXRlbS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGl0ZW0uZ2V0Q29udGVudFNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJQb3MueCA+IGl0ZW1Xb3JsZFBvcy54IC0gc2l6ZS53aWR0aCAmJiBjdXJQb3MueCA8IGl0ZW1Xb3JsZFBvcy54ICsgc2l6ZS53aWR0aCAmJiBjdXJQb3MueSA+IGl0ZW1Xb3JsZFBvcy55IC0gc2l6ZS5oZWlnaHQgJiYgY3VyUG9zLnkgPCBpdGVtV29ybGRQb3MueSArIHNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlnKjoioLngrnlhoVcclxuICAgICAgICAgICAgICAgIHJldHVybkl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5jnlLvlsZXnpLrljLrnu5Hlrprkuovku7ZcclxuICAgICAqL1xyXG4gICAgYmluZGluZ0RyYXdWaXN1YWxFdmVudCgpIHtcclxuICAgICAgICB0aGlzLnBsYXlEcmF3U2hvd05vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVuOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmKERhdGFNYW5hZ2VyLml0ZW1IaWRlQW5pSXNQbGF5IHx8ICFEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4pIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGN1cldvcmxkSXRlbTogY2MuTm9kZSA9IHRoaXMuZ2V0Q3VyV29ybGRQb3NJdGVtKGV2ZW4uZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIGlmIChjdXJXb3JsZEl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJEcmF3TGluZUl0bWVJbmRleCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5RHJhd1Nob3dOb2RlWydpc0RyYXcnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REcmF3Q2VsbCA9IGN1cldvcmxkSXRlbTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyRHJhd0xpbmVJdG1lSW5kZXgucHVzaChjdXJXb3JsZEl0ZW0uZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wbGF5RHJhd1Nob3dOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVuOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5RHJhd1Nob3dOb2RlWydpc0RyYXcnXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cldvcmxkUG9zSXRlbTogY2MuTm9kZSA9IHRoaXMuZ2V0Q3VyV29ybGRQb3NJdGVtKGV2ZW4uZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsYXlEcmF3U2hvd05vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKS5jbGVhcigpO1xyXG4gICAgICAgICAgICBpZiAoY3VyV29ybGRQb3NJdGVtICYmIHRoaXMuY3VyQ2VsbElzRHJhdyhjdXJXb3JsZFBvc0l0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REcmF3Q2VsbFsnYWxyZWFkeURyYXcnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjdXJXb3JsZFBvc0l0ZW1bJ2FscmVhZHlEcmF3J10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TGluZShjdXJXb3JsZFBvc0l0ZW0uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REcmF3Q2VsbCA9IGN1cldvcmxkUG9zSXRlbTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyRHJhd0xpbmVJdG1lSW5kZXgucHVzaChjdXJXb3JsZFBvc0l0ZW0uZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BsYXlWaXN1YWxMaW5lKGV2ZW4uZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wbGF5RHJhd1Nob3dOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW46IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXlEcmF3U2hvd05vZGVbJ2lzRHJhdyddKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsYXlEcmF3U2hvd05vZGVbJ2lzRHJhdyddID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGxheURyYXdTaG93Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVNob3dOb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1ckRyYXdMaW5lSXRtZUluZGV4Lmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDovr7liLDmuIXpmaTmnaHku7ZcclxuXHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pdGVtSGlkZUFuaUlzUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pTnVtID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBlbmRDYWxsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLml0ZW1IaWRlQW5pSXNQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUG9zLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ub3BhY2l0eSA9PSAyNTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bJ2FscmVhZHlEcmF3J10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5jdXJEcmF3TGluZUl0bWVJbmRleC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuY3VyRHJhd0xpbmVJdG1lSW5kZXhbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdhbWVQb3MuY2hpbGRyZW5baW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU51bSArPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEuMSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLS1hbmlOdW0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZENhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtLWFuaU51bSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQ2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JRCA9IHV0aWwuZ2V0UmFuZG9tKDAsIG5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pbWdTcEFyci5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pbml0KGl0ZW1JRCwgbm9kZS5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5fY3VyU2NvcmQgKz0gMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0YUNvaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQb3MuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm9wYWNpdHkgPT0gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bJ2FscmVhZHlEcmF3J10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uY5Yi2546p5a625Y+v6KeG57q/5p2hXHJcbiAgICAgKi9cclxuICAgIGRyYXdQbGF5VmlzdWFsTGluZShlbmRQb3MpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGFzdERyYXdDZWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSBjYy52MygwLCAwLCAwKTtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52MygwLCAwLCAwKTtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSB0aGlzLnBsYXlEcmF3U2hvd05vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuXHJcbiAgICAgICAgc3RhcnRQb3MgPSB0aGlzLnBsYXlEcmF3U2hvd05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5sYXN0RHJhd0NlbGwuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKSk7XHJcbiAgICAgICAgdGFyZ2V0UG9zID0gdGhpcy5wbGF5RHJhd1Nob3dOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYzKGVuZFBvcy54LCBlbmRQb3MueSkpO1xyXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuICAgICAgICBncmFwaGljcy5saW5lVG8odGFyZ2V0UG9zLngsIHRhcmdldFBvcy55KTtcclxuICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeagvOWtkOaYr+WQpuWPr+e7mOWItlxyXG4gICAgICovXHJcbiAgICBjdXJDZWxsSXNEcmF3KGN1ckl0ZW0pIHtcclxuICAgICAgICBsZXQgbGFzdEl0ZW1JZCA9IHRoaXMubGFzdERyYXdDZWxsLmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUlkO1xyXG4gICAgICAgIGxldCBjdXJJdGVtSWQgPSBjdXJJdGVtLmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUlkO1xyXG4gICAgICAgIGlmIChsYXN0SXRlbUlkICE9IGN1ckl0ZW1JZCB8fCBjdXJJdGVtWydhbHJlYWR5RHJhdyddKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmxhc3REcmF3Q2VsbC5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JbmRleDtcclxuICAgICAgICBsZXQgbGFzdFJvdyA9IE1hdGguZmxvb3IobGFzdEluZGV4IC8gdGhpcy5jb2xOdW0pO1xyXG4gICAgICAgIGxldCBsYXN0Q29sID0gbGFzdEluZGV4ICUgdGhpcy5jb2xOdW07XHJcbiAgICAgICAgbGV0IGN1ckluZGV4ID0gY3VySXRlbS5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JbmRleDtcclxuICAgICAgICBsZXQgY3VyUm93ID0gTWF0aC5mbG9vcihjdXJJbmRleCAvIHRoaXMuY29sTnVtKTtcclxuICAgICAgICBsZXQgY3VyQ29sID0gY3VySW5kZXggJSB0aGlzLmNvbE51bTtcclxuXHJcbiAgICAgICAgaWYgKGN1clJvdyA9PSBsYXN0Um93ICYmIChsYXN0Q29sICsgMSA9PSBjdXJDb2wgfHwgbGFzdENvbCAtIDEgPT0gY3VyQ29sKSkge1xyXG4gICAgICAgICAgICAvLyDlkIzooYxcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJDb2wgPT0gbGFzdENvbCAmJiAobGFzdFJvdyArIDEgPT0gY3VyUm93IHx8IGxhc3RSb3cgLSAxID09IGN1clJvdykpIHtcclxuICAgICAgICAgICAgLy8g5ZCM5YiXXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VyUm93ID09IGxhc3RSb3cgLSAxICYmIGN1ckNvbCA9PSBsYXN0Q29sICsgMSkge1xyXG4gICAgICAgICAgICAvLyDlt6bkuIpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJSb3cgPT0gbGFzdFJvdyArIDEgJiYgY3VyQ29sID09IGxhc3RDb2wgKyAxKSB7XHJcbiAgICAgICAgICAgIC8vIOWPs+S4ilxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1clJvdyA9PSBsYXN0Um93IC0gMSAmJiBjdXJDb2wgPT0gbGFzdENvbCAtIDEpIHtcclxuICAgICAgICAgICAgLy8g5bem5LiLXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VyUm93ID09IGxhc3RSb3cgKyAxICYmIGN1ckNvbCA9PSBsYXN0Q29sIC0gMSkge1xyXG4gICAgICAgICAgICAvLyDlj7PkuItcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5jliLbnu5Pmnpzlj6/op4bnur/mnaFcclxuICAgICAqL1xyXG4gICAgZHJhd0xpbmUoZW5kUG9zKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IHRoaXMubGluZVNob3dOb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgc3RhcnRQb3MgPSB0aGlzLnBsYXlEcmF3U2hvd05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5sYXN0RHJhd0NlbGwuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKSk7XHJcbiAgICAgICAgdGFyZ2V0UG9zID0gdGhpcy5saW5lU2hvd05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZW5kUG9zKTtcclxuICAgICAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHRhcmdldFBvcy54LCB0YXJnZXRQb3MueSk7XHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlkK/miJblhbPpl63pn7PmlYhcclxuICAgICAqL1xyXG4gICAgb3Blbk9yQ2xvc2VTb3VuZCgpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuY3VyU291bmRCR0lzQ2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VuZEJ0bi5jb2xvciA9IGNjLmNvbG9yKDE3MCwgMTcwLCAxNzAsIDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VuZEJ0bi5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1clNvdW5kQkdJc0Nsb3NlID0gIURhdGFNYW5hZ2VyLmN1clNvdW5kQkdJc0Nsb3NlO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5PckNsb3NlQkcoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljQnRuLmNvbG9yID0gY2MuY29sb3IoMTcwLCAxNzAsIDE3MCwgMjU1KTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNCdG4uY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2UgPSAhRGF0YU1hbmFnZXIuY3VyU291bmRJc0Nsb3NlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4vlgJLorqHml7ZcclxuICAgICAqL1xyXG4gICAgc3RhcnRUaW1lcigpIHtcclxuICAgICAgICBsZXQgc3BlZWQgPSAwLjAxO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLnRpbWVyRnVuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5kZXhUaW1lIC09IHNwZWVkO1xyXG4gICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5kZXhUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVzdWx0Rm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyVWkoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lck5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RpbWVUZXh0JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBNYXRoLmZsb29yKERhdGFNYW5hZ2VyLmluZGV4VGltZSkgKyAncyc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKERhdGFNYW5hZ2VyLnRpbWVyRnVuYywgc3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5YCS6K6h5pe2XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVRpbWVyVWkoKSB7XHJcbiAgICAgICAgY2MuZmluZCgnYmFyQmcvYmFyJywgdGhpcy50aW1lck5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IERhdGFNYW5hZ2VyLmluZGV4VGltZSAvIERhdGFNYW5hZ2VyLnN0YXJ0VGltZTtcclxuICAgICAgICB0aGlzLnRpbWVyTm9kZS5nZXRDaGlsZEJ5TmFtZSgndGltZVRleHQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IE1hdGguY2VpbChEYXRhTWFuYWdlci5pbmRleFRpbWUpICsgJ3MnO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0YUNvaW4oKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFsyXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDkvZnpop1cclxuICAgICAqL1xyXG4gICAgdXBkYXRlVXNlckNvaW4oKSB7XHJcbiAgICAgICAgbGV0IGxhYmxlTm9kZSA9IHRoaXMudXNlckNvaW5Ob2RlLmdldENoaWxkQnlOYW1lKCdjb2luTGFibGUnKTtcclxuICAgICAgICBjYy50d2VlbihsYWJsZU5vZGUpLnRvKDAuMSwgeyBzY2FsZTogMS4xIH0pLnRvKDAuMSwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xyXG4gICAgICAgIGxhYmxlTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICcnICsgRGF0YU1hbmFnZXIuY3VyU2NvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat57uT5p6cICovXHJcbiAgICBSZXN1bHRGbigpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuX2N1clNjb3JkID49IDIwMDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KHRydWUpO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5jdXJXaW5OdW0gKz0gMjAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaJk+W8gOaPkOekuiAqL1xyXG4gICAgb3BlblRpcE5vZGUoKSB7XHJcbiAgICAgICAgdGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKCdydWxlJykuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKCdydWxlJykpLnRvKDAuMiwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5o+Q56S65bGV56S6XHJcbiAgICAgKi9cclxuICAgIGhpZGVUaXBOb2RlKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpKVxyXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAwLjUgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKCdydWxlJykuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWxleekuue7k+aenFxyXG4gICAgICovXHJcbiAgICBzaG93UmVzdWx0KGlzV2luKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKERhdGFNYW5hZ2VyLnRpbWVyRnVuYyk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5kZXhUaW1lID0gRGF0YU1hbmFnZXIuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBvcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmIChpc1dpbikge1xyXG4gICAgICAgICAgICBsZXQgd2luTnVtTGFibGUgPSBjYy5maW5kKCd3aW4vd2luTnVtJywgdGhpcy5yZXN1bHROb2RlKTtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuY3VyV2luTnVtICs9IDEwMDtcclxuICAgICAgICAgICAgd2luTnVtTGFibGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnJyArIERhdGFNYW5hZ2VyLmN1cldpbk51bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0W2lzV2luID8gNCA6IDVdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICBsZXQgd2luTm9kZSA9IHRoaXMucmVzdWx0Tm9kZS5nZXRDaGlsZEJ5TmFtZSgnd2luJyk7XHJcbiAgICAgICAgbGV0IGxvc2VOb2RlID0gdGhpcy5yZXN1bHROb2RlLmdldENoaWxkQnlOYW1lKCdsb3NlJyk7XHJcbiAgICAgICAgd2luTm9kZS5hY3RpdmUgPSBpc1dpbjtcclxuICAgICAgICBsb3NlTm9kZS5hY3RpdmUgPSAhaXNXaW47XHJcbiAgICAgICAgbGV0IGN1ckFuaU5vZGUgPSBpc1dpbiA/IHdpbk5vZGUgOiBsb3NlTm9kZTtcclxuICAgICAgICB0aGlzLnJlc3VsdE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjdXJBbmlOb2RlLnNjYWxlID0gMC42O1xyXG4gICAgICAgIGN1ckFuaU5vZGUub3BhY2l0eSA9IDEwMDtcclxuXHJcbiAgICAgICAgY2MudHdlZW4oY3VyQW5pTm9kZSkudG8oMC4zLCB7IHNjYWxlOiAxLjEsIG9wYWNpdHk6IDI1NSB9KS50bygwLjMsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXree7k+aenOWxleekulxyXG4gICAgICovXHJcbiAgICBoaWRlUmVzdWx0Tm9kZSgpIHtcclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3VsdE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBEYXRhTWFuYWdlci5fY3VyU2NvcmQgPSAwO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLl9pbmRleFRpbWUgPSBEYXRhTWFuYWdlci5zdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lclVpKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==