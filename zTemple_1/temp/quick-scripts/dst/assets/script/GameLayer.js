
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
        _this.audioResList = [];
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
        // this.loadCard()
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
                    DataManager_1.default.adAnalyseAjustHandle();
                }
                else {
                    DataManager_1.default.adGoogleOpenAdHandle();
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
                DataManager_1.default.adGoogleInterstitialAdHandle();
                this.playGame();
                break;
            case 'btnReturn':
                DataManager_1.default.adGoogleInterstitialAdHandle();
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('a_startGame');
                break;
            case 'btNextGame':
            case 'btStartOver':
                DataManager_1.default.adGoogleInterstitialAdHandle();
                this.hideResultNode();
                break;
            case 'btExit':
                DataManager_1.default.adGoogleInterstitialAdHandle();
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene('a_startGame');
                break;
            case 'tipBtn':
                DataManager_1.default.adGoogleInterstitialAdHandle();
                this.openTipNode();
                break;
            case 'adsBtn':
                DataManager_1.default.adGoogleRewardedVideoAdHandle();
                break;
            case 'closeTipBtn':
                DataManager_1.default.adGoogleInterstitialAdHandle();
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
        this.creatLaber();
        for (var i = 0; i < randomList.length; i++) {
            this.creatFish(i, randomList[i], this.gzPos.children[i]);
        }
    };
    GameLayer.prototype.creatFish = function (index, randoList, Node) {
        var _this = this;
        Node.getComponent(cc.Sprite).spriteFrame = this.itemResList[randoList];
        Node.on(cc.Node.EventType.TOUCH_END, function () {
            console.log('当前点击的', randoList, DataManager_1.default.tipNum);
            if (randoList == DataManager_1.default.tipNum) {
                /**消除成功 */
                _this.unschedule(_this.callTimer);
                _this.creatLaber();
                DataManager_1.default._curScord += 100;
                _this.updataCoin();
                var index_1 = util_1.default.getRandom(0, 15);
                randoList = index_1;
                Node.getComponent(cc.Sprite).spriteFrame = _this.itemResList[randoList];
            }
        });
    };
    /**创建文字 */
    GameLayer.prototype.creatLaber = function () {
        var _this = this;
        cc.tween(this.gamePos.children[0])
            .to(0.1, { scale: 1.5 })
            .to(0.2, { scale: 1 })
            .call(function () {
            var num = util_1.default.getRandom(0, 15);
            _this.gamePos.children[0].getComponent(cc.Sprite).spriteFrame = _this.itemResList[num];
            DataManager_1.default.tipNum = num;
        })
            .start();
        this.callTimer = function () {
            var num = util_1.default.getRandom(0, 15);
            _this.gamePos.children[0].getComponent(cc.Sprite).spriteFrame = _this.itemResList[num];
            DataManager_1.default.tipNum = num;
        };
        this.schedule(this.callTimer, 3);
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
                    _this.showResult(true);
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
        // this.keyNode.getComponent(cc.Label).string = DataManager.keyNum + ''
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
        this.gzPos.children.forEach(function (e) {
            e.off(cc.Node.EventType.TOUCH_END);
        });
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLHVDQUFrQztBQUNsQyx3Q0FBdUQ7QUFDdkQsa0RBQTZDO0FBQzdDLHNEQUFpRDtBQUNqRCxvQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUEwYkM7UUF4YkcsaUJBQVcsR0FBcUIsRUFBRSxDQUFDO1FBR25DLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsa0JBQVksR0FBbUIsRUFBRSxDQUFDO1FBRTNCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVqQixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUluQixhQUFhO1FBQ2IseUJBQW1CLEdBQXlCLEVBQUUsQ0FBQztRQUUvQyxjQUFjO1FBQ2QsMEJBQW9CLEdBQWtCLEVBQUUsQ0FBQztRQUV6QyxVQUFJLEdBQWtCLEVBQUUsQ0FBQzs7SUF5WTdCLENBQUM7SUF4WUcsV0FBVztJQUNMLDRCQUFRLEdBQWQ7Ozs7Ozt3QkFDSSxLQUFBLElBQUksQ0FBQTt3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LENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztpREFDcEI7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0RBQ3BCO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDOytDQUN0QjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzsrQ0FDdEI7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7OENBQ3ZCO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDOzRDQUN2QjtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs4Q0FDckI7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzttREFDRDtJQWhDakIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBiN0I7SUFBRCxnQkFBQztDQTFiRCxBQTBiQyxDQTFic0MsRUFBRSxDQUFDLFNBQVMsR0EwYmxEO2tCQTFib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuL0RhdGFNYW5hZ2VyJztcclxuaW1wb3J0IEdhbWVXaGVlbCBmcm9tICcuL0dhbWVXaGVlbCc7XHJcbmltcG9ydCBJdGVtTm9kZSBmcm9tICcuL0l0ZW1Ob2RlJztcclxuaW1wb3J0IHsgRGlyZWN0aW9uVHlwZSwgRXZlbnRJZCB9IGZyb20gJy4vdXRpbC9kZWZpbmUnO1xyXG5pbXBvcnQgRXZlbnRNZ3IgZnJvbSAnLi91dGlsL2V2ZW50L0V2ZW50TWdyJztcclxuaW1wb3J0IGxvYWRlck1hbmFnZXIgZnJvbSAnLi91dGlsL2xvYWRlck1hbmFnZXInO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwvdXRpbCc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0sIHRvb2x0aXA6ICflhYPntKDnurnnkIYnIH0pXHJcbiAgICBpdGVtUmVzTGlzdDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfnlKjmiLfkvZnpop3oioLngrknIH0pXHJcbiAgICB1c2VyQ29pbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfmuLjmiI/mj5DnpLrpobXpnaInIH0pXHJcbiAgICB0aXBOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP57uT5p6c6IqC54K5JyB9KVxyXG4gICAgcmVzdWx0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+WAkuiuoeaXtuiKgueCuScgfSlcclxuICAgIHRpbWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+mfs+aViOaMiemSruiKgueCuScgfSlcclxuICAgIHNvdW5kQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn6Z+z5pWI5oyJ6ZKu6IqC54K5JyB9KVxyXG4gICAgbXVzaWNCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICflvIDlp4vmuLjmiI/oioLngrknIH0pXHJcbiAgICBwbGF5QnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP5qC85a2QJyB9KVxyXG4gICAgZ3pQb3M6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICfmuLjmiI/moLzlrZAnIH0pXHJcbiAgICBnYW1lUG9zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQXVkaW9DbGlwXSB9KVxyXG4gICAgYXVkaW9SZXNMaXN0OiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBpY29uUGY6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY29sTnVtID0gNDtcclxuICAgIHByaXZhdGUgcm93TnVtID0gNDtcclxuXHJcbiAgICBwcml2YXRlIGNhbGxUaW1lcjtcclxuXHJcbiAgICAvKiog5bey57uY5Yi257q/5pWw57uEICovXHJcbiAgICBhbHJlYWR5RHJhd0xpbmVMaXN0OiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xyXG5cclxuICAgIC8qKiDlvZPliY3nu5jliLbnur/mlbDnu4QgKi9cclxuICAgIGN1ckRyYXdMaW5lSXRtZUluZGV4OiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG4gICAgbGlzdDogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgLyoq5Yqg6L296aKE5Yi25L2TICovXHJcbiAgICBhc3luYyBsb2FkQ2FyZCgpIHtcclxuICAgICAgICB0aGlzLmljb25QZiA9IGF3YWl0IGxvYWRlck1hbmFnZXIuZ2V0UmVzKCdpdGVtJywgJ3ByZWZhYicsIGNjLlByZWZhYik7XHJcbiAgICAgICAgaWYgKHRoaXMuaWNvblBmKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfpooTliLbkvZPliqDovb3miJDlip/vvIEnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpO1xyXG4gICAgICAgIC8vIHRoaXMubG9hZENhcmQoKVxyXG4gICAgICAgIC8vIHRoaXMubGlzdGVyRXZlbnQoKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuQWRqdXN0X3N0YXR1cyA9PSAnJykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLkFkanVzdF9zdGF0dXMudG9Mb3dlckNhc2UoKSAhPT0gJ29yZ2FuaWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5a2X56ym5Liy5LiN5Li656m65LiU5LiN5Li6IFwib3JnYW5pY1wiIOaIliBcIk9yZ2FuaWNcIu+8jOaJp+ihjOS9oOeahOaTjeS9nFxyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkQW5hbHlzZUFqdXN0SGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkR29vZ2xlT3BlbkFkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgfSwgMS41KTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgLy/nu5Hlrprkuovku7ZcclxuICAgIGxpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIEV2ZW50TWdyLkluc3RhbmNlLlJlZ2lzdGVyKEV2ZW50SWQuUmVzdWx0LCB0aGlzLnNob3dSZXN1bHQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF6Zmk5LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIGNsZWF0RXZlbnQoKSB7XHJcbiAgICAgICAgRXZlbnRNZ3IuSW5zdGFuY2UuT2ZmKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+WGheaMiemSrue7keWumuS6i+S7tlxyXG4gICAgICovXHJcbiAgICBidG5FdmVudChldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0blN0YXJ0R2FtZSc6XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5hZEdvb2dsZUludGVyc3RpdGlhbEFkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRuUmV0dXJuJzpcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkR29vZ2xlSW50ZXJzdGl0aWFsQWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdhX3N0YXJ0R2FtZScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0TmV4dEdhbWUnOlxyXG4gICAgICAgICAgICBjYXNlICdidFN0YXJ0T3Zlcic6XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5hZEdvb2dsZUludGVyc3RpdGlhbEFkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRFeGl0JzpcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkR29vZ2xlSW50ZXJzdGl0aWFsQWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdhX3N0YXJ0R2FtZScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RpcEJ0bic6XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5hZEdvb2dsZUludGVyc3RpdGlhbEFkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5UaXBOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYWRzQnRuJzpcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmFkR29vZ2xlUmV3YXJkZWRWaWRlb0FkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2xvc2VUaXBCdG4nOlxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuYWRHb29nbGVJbnRlcnN0aXRpYWxBZEhhbmRsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlVGlwTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0blNvdW5kJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk9yQ2xvc2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ211c2ljQnRuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk9yQ2xvc2VCRygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlvIDlp4vmuLjmiI8gKi9cclxuICAgIHBsYXlHYW1lKCkge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4pIHJldHVybjtcclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4gPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyDorqHml7blmahcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgICAgICAvL+makOiXj+a4uOaIj+aMiemSrlxyXG4gICAgICAgIC8vIHRoaXMucGxheUJ0bi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFsyXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgLy/muLjmiI/pgLvovpFcclxuICAgICAgICBsZXQgbnVtQXJyYXkgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNV07XHJcbiAgICAgICAgbGV0IHJhbmRvbUxpc3QgPSB1dGlsLmdldFJhbmRvbUxpc3RJdG1lKG51bUFycmF5LCAyMCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHJhbmRvbUxpc3Q7XHJcbiAgICAgICAgLy8gZm9yKGxldCBpPTA7aTxyYW5kb21MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNyZWF0TGFiZXIoaSxyYW5kb21MaXN0W2ldKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmNyZWF0TGFiZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdEZpc2goaSwgcmFuZG9tTGlzdFtpXSwgdGhpcy5nelBvcy5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRGaXNoKGluZGV4OiBudW1iZXIsIHJhbmRvTGlzdDogbnVtYmVyLCBOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaXRlbVJlc0xpc3RbcmFuZG9MaXN0XTtcclxuICAgICAgICBOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5b2T5YmN54K55Ye755qEJywgcmFuZG9MaXN0LCBEYXRhTWFuYWdlci50aXBOdW0pO1xyXG4gICAgICAgICAgICBpZiAocmFuZG9MaXN0ID09IERhdGFNYW5hZ2VyLnRpcE51bSkge1xyXG4gICAgICAgICAgICAgICAgLyoq5raI6Zmk5oiQ5YqfICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jYWxsVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdExhYmVyKCk7XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5fY3VyU2NvcmQgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGFDb2luKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB1dGlsLmdldFJhbmRvbSgwLCAxNSk7XHJcbiAgICAgICAgICAgICAgICByYW5kb0xpc3QgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW1SZXNMaXN0W3JhbmRvTGlzdF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKuWIm+W7uuaWh+WtlyAqL1xyXG4gICAgY3JlYXRMYWJlcigpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWVQb3MuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IDEuNSB9KVxyXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSB1dGlsLmdldFJhbmRvbSgwLCAxNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQb3MuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW1SZXNMaXN0W251bV07XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci50aXBOdW0gPSBudW07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuY2FsbFRpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gdXRpbC5nZXRSYW5kb20oMCwgMTUpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQb3MuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW1SZXNMaXN0W251bV07XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLnRpcE51bSA9IG51bTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jYWxsVGltZXIsIDMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKue7keWumua7keWKqOS6i+S7tiAqL1xyXG4gICAgbGlzdFRvdWNoRXZlbnQoVG91Y2hOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgVG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgVG91Y2hOb2RlWydzdGFydFBvcyddID0gY2MudjIoZXZlbnQuZ2V0TG9jYXRpb24oKS54LCBldmVudC5nZXRMb2NhdGlvbigpLnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3RhdFBvcyA9IFRvdWNoTm9kZVsnc3RhcnRQb3MnXTtcclxuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKGV2ZW50LmdldExvY2F0aW9uKCkueCwgZXZlbnQuZ2V0TG9jYXRpb24oKS55KTtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuaXNEaXJlY3Rpb24oc3RhdFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Ub3VjaE1vdmUoVG91Y2hOb2RlLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56e75Yqo5LqL5Lu2ICovXHJcbiAgICBUb3VjaE1vdmUodGFnZXQ6IGNjLk5vZGUsIGRpcmVjdGlvbjogRGlyZWN0aW9uVHlwZSkge1xyXG4gICAgICAgIGxldCBpdGVtSW5kZXggPSB0YWdldC5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JbmRleDtcclxuICAgICAgICBsZXQgbW92ZUlkID0gaXRlbUluZGV4O1xyXG4gICAgICAgIGxldCBvdGhlck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLl9jdXJTY29yZCArPSAxO1xyXG4gICAgICAgIHRoaXMudXBkYXRhQ29pbigpO1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uVHlwZS5Ub3A6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5LiKJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUluZGV4IC0gdGhpcy5jb2xOdW0gPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVJZCA9IGl0ZW1JbmRleCAtIHRoaXMuY29sTnVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uVHlwZS5Cb3R0b206XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5LiLJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUluZGV4ICsgdGhpcy5jb2xOdW0gPD0gdGhpcy5nelBvcy5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlSWQgPSBpdGVtSW5kZXggKyB0aGlzLmNvbE51bTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvblR5cGUuTGVmdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflt6YnKTtcclxuICAgICAgICAgICAgICAgIGlmICgoaXRlbUluZGV4ICUgdGhpcy5jb2xOdW0pIC0gMSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZUlkID0gaXRlbUluZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvblR5cGUuUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Y+zJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGl0ZW1JbmRleCAlIHRoaXMuY29sTnVtKSArIDEgPD0gdGhpcy5jb2xOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlSWQgPSBpdGVtSW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVBvcy5jaGlsZHJlbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUluZGV4ID09IG1vdmVJZCkge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJOb2RlID0gZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAob3RoZXJOb2RlKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRhZ2V0KS50bygwLjIsIHsgcG9zaXRpb246IHRoaXMuZ3pQb3MuY2hpbGRyZW5bbW92ZUlkXS5wb3NpdGlvbiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2VlbihvdGhlck5vZGUpLnRvKDAuMiwgeyBwb3NpdGlvbjogdGhpcy5nelBvcy5jaGlsZHJlbltpdGVtSW5kZXhdLnBvc2l0aW9uIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhZ2V0LmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUluZGV4ID0gbW92ZUlkO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJOb2RlLmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhZ2V0SWQgPSB1dGlsLmNvcHlPYmoodGFnZXQuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSWQpO1xyXG4gICAgICAgICAgICAgICAgdGFnZXQuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSWQgPSBvdGhlck5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSWQ7XHJcbiAgICAgICAgICAgICAgICBvdGhlck5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pdGVtSWQgPSB0YWdldElkO1xyXG4gICAgICAgICAgICAgICAgbGV0IEFSUiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUG9zLmNoaWxkcmVuLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBUlIucHVzaChlLmdldENvbXBvbmVudChJdGVtTm9kZSkuaXRlbUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pu05paw5a6e6ZmF57G75Z6LICovXHJcbiAgICB1cGRhdGFJbmRleCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZVBvcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBvcy5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoSXRlbU5vZGUpLml0ZW1JbmRleCA9PSBpKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat5pa55ZCRICovXHJcbiAgICBpc0RpcmVjdGlvbihzdGFydFBvczogY2MuVmVjMiwgZW5kUG9zOiBjYy5WZWMyKTogRGlyZWN0aW9uVHlwZSB7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogRGlyZWN0aW9uVHlwZSA9IERpcmVjdGlvblR5cGUuTGVmdDtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IE1hdGguYWJzKGVuZFBvcy54IC0gc3RhcnRQb3MueCk7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSBNYXRoLmFicyhlbmRQb3MueSAtIHN0YXJ0UG9zLnkpO1xyXG4gICAgICAgIGlmIChvZmZzZXRYID49IG9mZnNldFkpIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gZW5kUG9zLnggPiBzdGFydFBvcy54ID8gRGlyZWN0aW9uVHlwZS5SaWdodCA6IERpcmVjdGlvblR5cGUuTGVmdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBlbmRQb3MueSA+IHN0YXJ0UG9zLnkgPyBEaXJlY3Rpb25UeXBlLlRvcCA6IERpcmVjdGlvblR5cGUuQm90dG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5b2T5YmN5LiW55WM5Z2Q5qCH5LiK55qEaXRlbVxyXG4gICAgICovXHJcbiAgICBnZXRDdXJXb3JsZFBvc0l0ZW0oY3VyUG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgbGV0IHJldHVybkl0ZW0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBvcy5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtV29ybGRQb3MgPSBpdGVtLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIGxldCBzaXplID0gaXRlbS5nZXRDb250ZW50U2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1clBvcy54ID4gaXRlbVdvcmxkUG9zLnggLSBzaXplLndpZHRoICYmIGN1clBvcy54IDwgaXRlbVdvcmxkUG9zLnggKyBzaXplLndpZHRoICYmIGN1clBvcy55ID4gaXRlbVdvcmxkUG9zLnkgLSBzaXplLmhlaWdodCAmJiBjdXJQb3MueSA8IGl0ZW1Xb3JsZFBvcy55ICsgc2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWcqOiKgueCueWGhVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWQr+aIluWFs+mXremfs+aViFxyXG4gICAgICovXHJcbiAgICBvcGVuT3JDbG9zZVNvdW5kKCkge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5jdXJTb3VuZEJHSXNDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNvbG9yID0gY2MuY29sb3IoMTcwLCAxNzAsIDE3MCwgMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyU291bmRCR0lzQ2xvc2UgPSAhRGF0YU1hbmFnZXIuY3VyU291bmRCR0lzQ2xvc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk9yQ2xvc2VCRygpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuY3VyU291bmRJc0Nsb3NlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNCdG4uY29sb3IgPSBjYy5jb2xvcigxNzAsIDE3MCwgMTcwLCAyNTUpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0J0bi5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSA9ICFEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+WAkuiuoeaXtlxyXG4gICAgICovXHJcbiAgICBzdGFydFRpbWVyKCkge1xyXG4gICAgICAgIGxldCBzcGVlZCA9IDAuMDE7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIudGltZXJGdW5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbmRleFRpbWUgLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbmRleFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZXN1bHRGbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyTm9kZS5nZXRDaGlsZEJ5TmFtZSgndGltZVRleHQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IE1hdGguZmxvb3IoRGF0YU1hbmFnZXIuaW5kZXhUaW1lKSArICdzJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoRGF0YU1hbmFnZXIudGltZXJGdW5jLCBzcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlgJLorqHml7ZcclxuICAgICAqL1xyXG4gICAgdXBkYXRlVGltZXJVaSgpIHtcclxuICAgICAgICBjYy5maW5kKCdiYXJCZy9iYXInLCB0aGlzLnRpbWVyTm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gRGF0YU1hbmFnZXIuaW5kZXhUaW1lIC8gRGF0YU1hbmFnZXIuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMudGltZXJOb2RlLmdldENoaWxkQnlOYW1lKCd0aW1lVGV4dCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gTWF0aC5jZWlsKERhdGFNYW5hZ2VyLmluZGV4VGltZSkgKyAncyc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRhQ29pbigpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJDb2luKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAvLyB0aGlzLmtleU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBEYXRhTWFuYWdlci5rZXlOdW0gKyAnJ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5L2Z6aKdXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVVzZXJDb2luKCkge1xyXG4gICAgICAgIGxldCBsYWJsZU5vZGUgPSB0aGlzLnVzZXJDb2luTm9kZS5nZXRDaGlsZEJ5TmFtZSgnY29pbkxhYmxlJyk7XHJcbiAgICAgICAgY2MudHdlZW4obGFibGVOb2RlKS50bygwLjEsIHsgc2NhbGU6IDEuMSB9KS50bygwLjEsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcclxuICAgICAgICBsYWJsZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnJyArIERhdGFNYW5hZ2VyLmN1clNjb3JkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIpOaWree7k+aenCAqL1xyXG4gICAgUmVzdWx0Rm4oKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLl9jdXJTY29yZCA+PSAxMDAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCh0cnVlKTtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuY3VyV2luTnVtICs9IDIwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmiZPlvIDmj5DnpLogKi9cclxuICAgIG9wZW5UaXBOb2RlKCkge1xyXG4gICAgICAgIHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpLnNjYWxlID0gMC44O1xyXG4gICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpKS50bygwLjIsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXreaPkOekuuWxleekulxyXG4gICAgICovXHJcbiAgICBoaWRlVGlwTm9kZSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3J1bGUnKSlcclxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMC41IH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZSgncnVsZScpLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsZXnpLrnu5PmnpxcclxuICAgICAqL1xyXG4gICAgc2hvd1Jlc3VsdChpc1dpbikge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZShEYXRhTWFuYWdlci50aW1lckZ1bmMpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMuZ3pQb3MuY2hpbGRyZW4uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluZGV4VGltZSA9IERhdGFNYW5hZ2VyLnN0YXJ0VGltZTtcclxuICAgICAgICBpZiAoaXNXaW4pIHtcclxuICAgICAgICAgICAgbGV0IHdpbk51bUxhYmxlID0gY2MuZmluZCgnd2luL3dpbk51bScsIHRoaXMucmVzdWx0Tm9kZSk7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1cldpbk51bSArPSAxMDA7XHJcbiAgICAgICAgICAgIHdpbk51bUxhYmxlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJycgKyBEYXRhTWFuYWdlci5jdXJXaW5OdW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFtpc1dpbiA/IDQgOiA1XTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgbGV0IHdpbk5vZGUgPSB0aGlzLnJlc3VsdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3dpbicpO1xyXG4gICAgICAgIGxldCBsb3NlTm9kZSA9IHRoaXMucmVzdWx0Tm9kZS5nZXRDaGlsZEJ5TmFtZSgnbG9zZScpO1xyXG4gICAgICAgIHdpbk5vZGUuYWN0aXZlID0gaXNXaW47XHJcbiAgICAgICAgbG9zZU5vZGUuYWN0aXZlID0gIWlzV2luO1xyXG4gICAgICAgIGxldCBjdXJBbmlOb2RlID0gaXNXaW4gPyB3aW5Ob2RlIDogbG9zZU5vZGU7XHJcbiAgICAgICAgdGhpcy5yZXN1bHROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY3VyQW5pTm9kZS5zY2FsZSA9IDAuNjtcclxuICAgICAgICBjdXJBbmlOb2RlLm9wYWNpdHkgPSAxMDA7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGN1ckFuaU5vZGUpLnRvKDAuMywgeyBzY2FsZTogMS4xLCBvcGFjaXR5OiAyNTUgfSkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl63nu5PmnpzlsZXnpLpcclxuICAgICAqL1xyXG4gICAgaGlkZVJlc3VsdE5vZGUoKSB7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyR2FtZUlzUnVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZXN1bHROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuX2N1clNjb3JkID0gMDtcclxuICAgICAgICBEYXRhTWFuYWdlci5faW5kZXhUaW1lID0gRGF0YU1hbmFnZXIuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVXNlckNvaW4oKTtcclxuICAgIH1cclxufVxyXG4iXX0=