
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLHVDQUFrQztBQUNsQyx3Q0FBbUU7QUFDbkUsa0RBQTZDO0FBQzdDLHNEQUFpRDtBQUNqRCxvQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUEyYUM7UUF6YUcsaUJBQVcsR0FBcUIsRUFBRSxDQUFDO1FBR25DLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBR2pDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsa0JBQVksR0FBbUIsRUFBRSxDQUFDO1FBRWxDLGVBQWU7UUFDZixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFakIsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFFbkIsYUFBYTtRQUNiLHlCQUFtQixHQUF5QixFQUFFLENBQUM7UUFFL0MsY0FBYztRQUNk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SSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7bURBQ0Q7SUF6Q2pCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EyYTdCO0lBQUQsZ0JBQUM7Q0EzYUQsQUEyYUMsQ0EzYXNDLEVBQUUsQ0FBQyxTQUFTLEdBMmFsRDtrQkEzYW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmltcG9ydCBHYW1lV2hlZWwgZnJvbSAnLi9HYW1lV2hlZWwnO1xyXG5pbXBvcnQgSXRlbU5vZGUgZnJvbSAnLi9JdGVtTm9kZSc7XHJcbmltcG9ydCB7IERpcmVjdGlvblR5cGUsIEV2ZW50SWQsIEpzYkZ1blR5cGUgfSBmcm9tICcuL3V0aWwvZGVmaW5lJztcclxuaW1wb3J0IEV2ZW50TWdyIGZyb20gJy4vdXRpbC9ldmVudC9FdmVudE1ncic7XHJcbmltcG9ydCBsb2FkZXJNYW5hZ2VyIGZyb20gJy4vdXRpbC9sb2FkZXJNYW5hZ2VyJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsL3V0aWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLCB0b29sdGlwOiAn5YWD57Sg57q555CGJyB9KVxyXG4gICAgaXRlbVJlc0xpc3Q6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn55So5oi35L2Z6aKd6IqC54K5JyB9KVxyXG4gICAgdXNlckNvaW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP5o+Q56S66aG16Z2iJyB9KVxyXG4gICAgdGlwTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+a4uOaIj+e7k+aenOiKgueCuScgfSlcclxuICAgIHJlc3VsdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICflgJLorqHml7boioLngrknIH0pXHJcbiAgICB0aW1lck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfpn7PmlYjmjInpkq7oioLngrknIH0pXHJcbiAgICBzb3VuZEJ0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+mfs+aViOaMiemSruiKgueCuScgfSlcclxuICAgIG11c2ljQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5byA5aeL5ri45oiP6IqC54K5JyB9KVxyXG4gICAgcGxheUJ0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+a4uOaIj+agvOWtkCcgfSlcclxuICAgIGd6UG9zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP5qC85a2QJyB9KVxyXG4gICAgZ2FtZVBvczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+eOqeWutue7mOWItuWxleekuuiKgueCuScgfSlcclxuICAgIHBsYXlEcmF3U2hvd05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfnur/lsZXnpLroioLngrknIH0pXHJcbiAgICBsaW5lU2hvd05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfnur/lsZXnpLroioLngrknIH0pXHJcbiAgICBrZXlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQXVkaW9DbGlwXSB9KVxyXG4gICAgYXVkaW9SZXNMaXN0OiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIC8qKiDkuIrkuIDmrKHnu5jliLbnmoTmoLzlrZAgKi9cclxuICAgIGxhc3REcmF3Q2VsbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGljb25QZjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xOdW0gPSA0O1xyXG4gICAgcHJpdmF0ZSByb3dOdW0gPSA0O1xyXG5cclxuICAgIC8qKiDlt7Lnu5jliLbnur/mlbDnu4QgKi9cclxuICAgIGFscmVhZHlEcmF3TGluZUxpc3Q6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XHJcblxyXG4gICAgLyoqIOW9k+WJjee7mOWItue6v+aVsOe7hCAqL1xyXG4gICAgY3VyRHJhd0xpbmVJdG1lSW5kZXg6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHJcbiAgICBsaXN0OiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICAvKirliqDovb3pooTliLbkvZMgKi9cclxuICAgIGFzeW5jIGxvYWRDYXJkKCkge1xyXG4gICAgICAgIHRoaXMuaWNvblBmID0gYXdhaXQgbG9hZGVyTWFuYWdlci5nZXRSZXMoJ2l0ZW0nLCAncHJlZmFiJywgY2MuUHJlZmFiKTtcclxuICAgICAgICBpZiAodGhpcy5pY29uUGYpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+mihOWItuS9k+WKoOi9veaIkOWKn++8gScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJDb2luKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lclVpKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkQ2FyZCgpO1xyXG4gICAgICAgIC8vIHRoaXMubGlzdGVyRXZlbnQoKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuQWRqdXN0X3N0YXR1cyA9PSAnJykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLkFkanVzdF9zdGF0dXMudG9Mb3dlckNhc2UoKSAhPT0gJ29yZ2FuaWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5a2X56ym5Liy5LiN5Li656m65LiU5LiN5Li6IFwib3JnYW5pY1wiIOaIliBcIk9yZ2FuaWNcIu+8jOaJp+ihjOS9oOeahOaTjeS9nFxyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLm5hdGl2ZUpzYkZ1bihKc2JGdW5UeXBlLkFkanVzdERlY2lzaW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIubmF0aXZlSnNiRnVuKEpzYkZ1blR5cGUuU2hvd09wZW5BZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgfSwgMS41KTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgLy/nu5Hlrprkuovku7ZcclxuICAgIGxpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIEV2ZW50TWdyLkluc3RhbmNlLlJlZ2lzdGVyKEV2ZW50SWQuUmVzdWx0LCB0aGlzLnNob3dSZXN1bHQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF6Zmk5LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIGNsZWF0RXZlbnQoKSB7XHJcbiAgICAgICAgRXZlbnRNZ3IuSW5zdGFuY2UuT2ZmKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+WGheaMiemSrue7keWumuS6i+S7tlxyXG4gICAgICovXHJcbiAgICBidG5FdmVudChldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0blN0YXJ0R2FtZSc6XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5uYXRpdmVKc2JGdW4oSnNiRnVuVHlwZS5TaG93SW50ZXJzdGl0aWFsQWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0blJldHVybic6XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5uYXRpdmVKc2JGdW4oSnNiRnVuVHlwZS5TaG93SW50ZXJzdGl0aWFsQWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlUmVzdWx0Tm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhdEV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2Ffc3RhcnRHYW1lJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnROZXh0R2FtZSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0U3RhcnRPdmVyJzpcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLm5hdGl2ZUpzYkZ1bihKc2JGdW5UeXBlLlNob3dJbnRlcnN0aXRpYWxBZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRFeGl0JzpcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLm5hdGl2ZUpzYkZ1bihKc2JGdW5UeXBlLlNob3dJbnRlcnN0aXRpYWxBZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWF0RXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnYV9zdGFydEdhbWUnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0aXBCdG4nOlxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIubmF0aXZlSnNiRnVuKEpzYkZ1blR5cGUuU2hvd0ludGVyc3RpdGlhbEFkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlblRpcE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdidG5BZHMnOlxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIubmF0aXZlSnNiRnVuKEpzYkZ1blR5cGUuU2hvd1Jld2FyZGVkVmlkZW9BZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2xvc2VUaXBCdG4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlVGlwTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0blNvdW5kJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk9yQ2xvc2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ211c2ljQnRuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk9yQ2xvc2VCRygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlvIDlp4vmuLjmiI8gKi9cclxuICAgIHBsYXlHYW1lKCkge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4pIHJldHVybjtcclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4gPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyDorqHml7blmahcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgICAgICAvL+makOiXj+a4uOaIj+aMiemSrlxyXG4gICAgICAgIC8vIHRoaXMucGxheUJ0bi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFsyXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgLy/muLjmiI/pgLvovpFcclxuICAgICAgICBsZXQgbnVtQXJyYXkgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNV07XHJcbiAgICAgICAgbGV0IHJhbmRvbUxpc3QgPSB1dGlsLmdldFJhbmRvbUxpc3RJdG1lKG51bUFycmF5LCAyMCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHJhbmRvbUxpc3Q7XHJcbiAgICAgICAgLy8gZm9yKGxldCBpPTA7aTxyYW5kb21MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNyZWF0TGFiZXIoaSxyYW5kb21MaXN0W2ldKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdExhYmVyKGksIHJhbmRvbUxpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygn5Yid5aeLJywgdGhpcy5saXN0KTtcclxuICAgIH1cclxuICAgIC8qKuWIm+W7uuaWh+WtlyAqL1xyXG4gICAgY3JlYXRMYWJlcihpbmRleDogbnVtYmVyLCB2YWw6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBsYWJlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvblBmKTtcclxuICAgICAgICBsYWJlTm9kZS5zZXRQYXJlbnQodGhpcy5nYW1lUG9zKTtcclxuICAgICAgICBsYWJlTm9kZS5nZXRDb21wb25lbnQoSXRlbU5vZGUpLmluaXQodmFsLCBpbmRleCk7XHJcbiAgICAgICAgbGFiZU5vZGUuc2V0UG9zaXRpb24odGhpcy5nelBvcy5jaGlsZHJlbltpbmRleF0ucG9zaXRpb24pO1xyXG4gICAgICAgIGlmICh2YWwgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RUb3VjaEV2ZW50KGxhYmVOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq57uR5a6a5ruR5Yqo5LqL5Lu2ICovXHJcbiAgICBsaXN0VG91Y2hFdmVudChUb3VjaE5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBUb3VjaE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBUb3VjaE5vZGVbJ3N0YXJ0UG9zJ10gPSBjYy52MihldmVudC5nZXRMb2NhdGlvbigpLngsIGV2ZW50LmdldExvY2F0aW9uKCkueSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgVG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0UG9zID0gVG91Y2hOb2RlWydzdGFydFBvcyddO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIoZXZlbnQuZ2V0TG9jYXRpb24oKS54LCBldmVudC5nZXRMb2NhdGlvbigpLnkpO1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5pc0RpcmVjdGlvbihzdGF0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoTW92ZShUb3VjaE5vZGUsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnp7vliqjkuovku7YgKi9cclxuICAgIFRvdWNoTW92ZSh0YWdldDogY2MuTm9kZSwgZGlyZWN0aW9uOiBEaXJlY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1JbmRleCA9IHRhZ2V0LmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUluZGV4O1xyXG4gICAgICAgIGxldCBtb3ZlSWQgPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgbGV0IG90aGVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuX2N1clNjb3JkICs9IDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGFDb2luKCk7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb25UeXBlLlRvcDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuIonKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtSW5kZXggLSB0aGlzLmNvbE51bSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZUlkID0gaXRlbUluZGV4IC0gdGhpcy5jb2xOdW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb25UeXBlLkJvdHRvbTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuIsnKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtSW5kZXggKyB0aGlzLmNvbE51bSA8PSB0aGlzLmd6UG9zLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVJZCA9IGl0ZW1JbmRleCArIHRoaXMuY29sTnVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uVHlwZS5MZWZ0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W3picpO1xyXG4gICAgICAgICAgICAgICAgaWYgKChpdGVtSW5kZXggJSB0aGlzLmNvbE51bSkgLSAxID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlSWQgPSBpdGVtSW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uVHlwZS5SaWdodDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflj7MnKTtcclxuICAgICAgICAgICAgICAgIGlmICgoaXRlbUluZGV4ICUgdGhpcy5jb2xOdW0pICsgMSA8PSB0aGlzLmNvbE51bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVJZCA9IGl0ZW1JbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lUG9zLmNoaWxkcmVuLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSW5kZXggPT0gbW92ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBvdGhlck5vZGUgPSBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChvdGhlck5vZGUpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGFnZXQpLnRvKDAuMiwgeyBwb3NpdGlvbjogdGhpcy5nelBvcy5jaGlsZHJlblttb3ZlSWRdLnBvc2l0aW9uIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG90aGVyTm9kZSkudG8oMC4yLCB7IHBvc2l0aW9uOiB0aGlzLmd6UG9zLmNoaWxkcmVuW2l0ZW1JbmRleF0ucG9zaXRpb24gfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFnZXQuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSW5kZXggPSBtb3ZlSWQ7XHJcbiAgICAgICAgICAgICAgICBvdGhlck5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFnZXRJZCA9IHV0aWwuY29weU9iaih0YWdldC5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JZCk7XHJcbiAgICAgICAgICAgICAgICB0YWdldC5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JZCA9IG90aGVyTm9kZS5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JZDtcclxuICAgICAgICAgICAgICAgIG90aGVyTm9kZS5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JZCA9IHRhZ2V0SWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgQVJSID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQb3MuY2hpbGRyZW4uZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFSUi5wdXNoKGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChBUlIgPT0gRGF0YU1hbmFnZXIuRGVmQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmm7TmlrDlrp7pmYXnsbvlnosgKi9cclxuICAgIHVwZGF0YUluZGV4KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lUG9zLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lUG9zLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUluZGV4ID09IGkpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirliKTmlq3mlrnlkJEgKi9cclxuICAgIGlzRGlyZWN0aW9uKHN0YXJ0UG9zOiBjYy5WZWMyLCBlbmRQb3M6IGNjLlZlYzIpOiBEaXJlY3Rpb25UeXBlIHtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uOiBEaXJlY3Rpb25UeXBlID0gRGlyZWN0aW9uVHlwZS5MZWZ0O1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gTWF0aC5hYnMoZW5kUG9zLnggLSBzdGFydFBvcy54KTtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IE1hdGguYWJzKGVuZFBvcy55IC0gc3RhcnRQb3MueSk7XHJcbiAgICAgICAgaWYgKG9mZnNldFggPj0gb2Zmc2V0WSkge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBlbmRQb3MueCA+IHN0YXJ0UG9zLnggPyBEaXJlY3Rpb25UeXBlLlJpZ2h0IDogRGlyZWN0aW9uVHlwZS5MZWZ0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGVuZFBvcy55ID4gc3RhcnRQb3MueSA/IERpcmVjdGlvblR5cGUuVG9wIDogRGlyZWN0aW9uVHlwZS5Cb3R0b207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3kuJbnlYzlnZDmoIfkuIrnmoRpdGVtXHJcbiAgICAgKi9cclxuICAgIGdldEN1cldvcmxkUG9zSXRlbShjdXJQb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICBsZXQgcmV0dXJuSXRlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nYW1lUG9zLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Xb3JsZFBvcyA9IGl0ZW0uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBpdGVtLmdldENvbnRlbnRTaXplKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VyUG9zLnggPiBpdGVtV29ybGRQb3MueCAtIHNpemUud2lkdGggJiYgY3VyUG9zLnggPCBpdGVtV29ybGRQb3MueCArIHNpemUud2lkdGggJiYgY3VyUG9zLnkgPiBpdGVtV29ybGRQb3MueSAtIHNpemUuaGVpZ2h0ICYmIGN1clBvcy55IDwgaXRlbVdvcmxkUG9zLnkgKyBzaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy8g5Zyo6IqC54K55YaFXHJcbiAgICAgICAgICAgICAgICByZXR1cm5JdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5JdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5ZCv5oiW5YWz6Zet6Z+z5pWIXHJcbiAgICAgKi9cclxuICAgIG9wZW5PckNsb3NlU291bmQoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmN1clNvdW5kQkdJc0Nsb3NlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRCdG4uY29sb3IgPSBjYy5jb2xvcigxNzAsIDE3MCwgMTcwLCAyNTUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRCdG4uY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJTb3VuZEJHSXNDbG9zZSA9ICFEYXRhTWFuYWdlci5jdXJTb3VuZEJHSXNDbG9zZTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuT3JDbG9zZUJHKCkge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0J0bi5jb2xvciA9IGNjLmNvbG9yKDE3MCwgMTcwLCAxNzAsIDI1NSk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljQnRuLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyU291bmRJc0Nsb3NlID0gIURhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5YCS6K6h5pe2XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgbGV0IHNwZWVkID0gMC4wMTtcclxuICAgICAgICBEYXRhTWFuYWdlci50aW1lckZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluZGV4VGltZSAtPSBzcGVlZDtcclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluZGV4VGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyTm9kZS5nZXRDaGlsZEJ5TmFtZSgndGltZVRleHQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IE1hdGguZmxvb3IoRGF0YU1hbmFnZXIuaW5kZXhUaW1lKSArICdzJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoRGF0YU1hbmFnZXIudGltZXJGdW5jLCBzcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlgJLorqHml7ZcclxuICAgICAqL1xyXG4gICAgdXBkYXRlVGltZXJVaSgpIHtcclxuICAgICAgICBjYy5maW5kKCdiYXJCZy9iYXInLCB0aGlzLnRpbWVyTm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gRGF0YU1hbmFnZXIuaW5kZXhUaW1lIC8gRGF0YU1hbmFnZXIuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMudGltZXJOb2RlLmdldENoaWxkQnlOYW1lKCd0aW1lVGV4dCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gTWF0aC5jZWlsKERhdGFNYW5hZ2VyLmluZGV4VGltZSkgKyAncyc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRhQ29pbigpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJDb2luKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICB0aGlzLmtleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBEYXRhTWFuYWdlci5rZXlOdW0gKyAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOS9meminVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVVc2VyQ29pbigpIHtcclxuICAgICAgICBsZXQgbGFibGVOb2RlID0gdGhpcy51c2VyQ29pbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2NvaW5MYWJsZScpO1xyXG4gICAgICAgIGNjLnR3ZWVuKGxhYmxlTm9kZSkudG8oMC4xLCB7IHNjYWxlOiAxLjEgfSkudG8oMC4xLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgbGFibGVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJycgKyBEYXRhTWFuYWdlci5jdXJTY29yZDtcclxuICAgIH1cclxuXHJcbiAgICAvKirliKTmlq3nu5PmnpwgKi9cclxuICAgIFJlc3VsdEZuKCkge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5fY3VyU2NvcmQgPj0gMTAwMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1cldpbk51bSArPSAyMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5omT5byA5o+Q56S6ICovXHJcbiAgICBvcGVuVGlwTm9kZSgpIHtcclxuICAgICAgICB0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3J1bGUnKS5zY2FsZSA9IDAuODtcclxuICAgICAgICB0aGlzLnRpcE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3J1bGUnKSkudG8oMC4yLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl63mj5DnpLrlsZXnpLpcclxuICAgICAqL1xyXG4gICAgaGlkZVRpcE5vZGUoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKCdydWxlJykpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDAuNSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3J1bGUnKS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bGV56S657uT5p6cXHJcbiAgICAgKi9cclxuICAgIHNob3dSZXN1bHQoaXNXaW4pIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUoRGF0YU1hbmFnZXIudGltZXJGdW5jKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICBEYXRhTWFuYWdlci5pbmRleFRpbWUgPSBEYXRhTWFuYWdlci5zdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lUG9zLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYgKGlzV2luKSB7XHJcbiAgICAgICAgICAgIGxldCB3aW5OdW1MYWJsZSA9IGNjLmZpbmQoJ3dpbi93aW5OdW0nLCB0aGlzLnJlc3VsdE5vZGUpO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5jdXJXaW5OdW0gKz0gMTAwO1xyXG4gICAgICAgICAgICB3aW5OdW1MYWJsZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICcnICsgRGF0YU1hbmFnZXIuY3VyV2luTnVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbaXNXaW4gPyA0IDogNV07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIGxldCB3aW5Ob2RlID0gdGhpcy5yZXN1bHROb2RlLmdldENoaWxkQnlOYW1lKCd3aW4nKTtcclxuICAgICAgICBsZXQgbG9zZU5vZGUgPSB0aGlzLnJlc3VsdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xvc2UnKTtcclxuICAgICAgICB3aW5Ob2RlLmFjdGl2ZSA9IGlzV2luO1xyXG4gICAgICAgIGxvc2VOb2RlLmFjdGl2ZSA9ICFpc1dpbjtcclxuICAgICAgICBsZXQgY3VyQW5pTm9kZSA9IGlzV2luID8gd2luTm9kZSA6IGxvc2VOb2RlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGN1ckFuaU5vZGUuc2NhbGUgPSAwLjY7XHJcbiAgICAgICAgY3VyQW5pTm9kZS5vcGFjaXR5ID0gMTAwO1xyXG5cclxuICAgICAgICBjYy50d2VlbihjdXJBbmlOb2RlKS50bygwLjMsIHsgc2NhbGU6IDEuMSwgb3BhY2l0eTogMjU1IH0pLnRvKDAuMywgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet57uT5p6c5bGV56S6XHJcbiAgICAgKi9cclxuICAgIGhpZGVSZXN1bHROb2RlKCkge1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLl9jdXJTY29yZCA9IDA7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuX2luZGV4VGltZSA9IERhdGFNYW5hZ2VyLnN0YXJ0VGltZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyVWkoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJDb2luKCk7XHJcbiAgICB9XHJcbn1cclxuIl19