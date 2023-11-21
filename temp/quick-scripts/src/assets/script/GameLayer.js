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
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("./DataManager");
var ItemNode_1 = require("./ItemNode");
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.LLayer = null;
        _this.RLayer = null;
        _this.userCoinNode = null;
        _this.resultNode = null;
        _this.tipNode = null;
        _this.timerNode = null;
        _this.itemPrefab = null;
        _this.audios = [];
        /** 元素宽高 */
        _this.itemSize = cc.size(162, 154);
        /** 元素总量 */
        _this.itemNum = 20;
        /** 元素类别数量 */
        _this.itemTypeNum = 21;
        /** 遮罩长度 */
        _this.maskLength = 0;
        _this.index = 0;
        return _this;
    }
    GameLayer.prototype.start = function () {
        this.maskLength = cc.find('barBg/mask', this.timerNode).width;
        DataManager_1.default.curGameIsRun = false;
        DataManager_1.default.gameLayerScr = this;
        DataManager_1.default.curWinNum = 0;
        this.updateUserCoin();
        this.updateSoundBtnState();
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
    };
    /**
     * 游戏内按钮绑定事件
     */
    GameLayer.prototype.btnEvent = function (event) {
        var name = event.target.name;
        this.playSound(0);
        switch (name) {
            case 'btnStartGame':
                this.playGame();
                break;
            case 'btnReturn':
                cc.director.loadScene('startGame');
                break;
            case 'btNextGame':
            case 'btStartOver':
                this.hideResultNode();
                break;
            case 'btExit':
                cc.director.loadScene('startGame');
                break;
            case 'btnHelp':
                this.tipNode.active = true;
                break;
            case 'btnCloseHelp':
                this.hideTipNode();
            case 'btnBgSound':
                DataManager_1.default.isOpenBgSound = !DataManager_1.default.isOpenBgSound;
                cc.find('Canvas').getComponent(cc.AudioSource).volume = DataManager_1.default.isOpenBgSound ? 1 : 0;
                this.updateSoundBtnState();
                break;
            case 'btnEffectSound':
                DataManager_1.default.isOpenEffectSound = !DataManager_1.default.isOpenEffectSound;
                this.updateSoundBtnState();
                break;
        }
    };
    GameLayer.prototype.playSound = function (index) {
        if (!DataManager_1.default.isOpenEffectSound)
            return;
        this.node.getComponent(cc.AudioSource).clip = this.audios[index];
        this.node.getComponent(cc.AudioSource).play();
    };
    /**
     * 更新音效按钮状态
     */
    GameLayer.prototype.updateSoundBtnState = function () {
        var color1 = cc.color(179, 179, 179, 255);
        var color2 = cc.color(255, 255, 255, 255);
        cc.find('Canvas/gameLayer/topNode/btnBgSound').color = (DataManager_1.default.isOpenBgSound ? color2 : color1).clone();
        cc.find('Canvas/gameLayer/topNode/btnEffectSound').color = (DataManager_1.default.isOpenEffectSound ? color2 : color1).clone();
    };
    /** 开始游戏 */
    GameLayer.prototype.playGame = function () {
        if (DataManager_1.default.curGameIsRun)
            return;
        DataManager_1.default.curGameIsRun = true;
        this.playSound(0);
        this.initItemNode();
        this.startTimer();
    };
    /**
     * 初始化游戏节点
     */
    GameLayer.prototype.initItemNode = function () {
        var _this = this;
        var dataList1 = this.getStartGameData();
        var dataList2 = this.changeGameData(dataList1);
        this.addItemByData(this.LLayer.getChildByName('itemParent'), dataList1);
        this.addItemByData(this.RLayer.getChildByName('itemParent'), dataList2);
        this.RLayer.getChildByName('itemParent').children.forEach(function (node, i) {
            return node.on(cc.Node.EventType.TOUCH_END, function () {
                if (i == DataManager_1.default.curWinItmeIndex) {
                    DataManager_1.default.curScord += 100;
                    _this.playSound(4);
                    cc.tween(node)
                        .to(0.7, { scale: 0.7, opacity: 0 })
                        .call(function () {
                        _this.showResult(true);
                    })
                        .start();
                }
                else {
                    _this.playSound(3);
                    cc.tween(node).to(0.1, { rotation: 10 }).to(0.1, { rotation: -10 }).to(0.1, { rotation: 0 }).start();
                    console.log('选错了');
                }
            });
        });
    };
    /**
     * 根据数据给节点添加元素
     */
    GameLayer.prototype.addItemByData = function (node, data) {
        for (var i = 0; i < data.length; i++) {
            var itemNode = cc.instantiate(this.itemPrefab);
            itemNode.getComponent(ItemNode_1.default).init(data[i].toString(), this.itemSize);
            node.addChild(itemNode);
        }
    };
    /**
     * 获取初始游戏数据
     */
    GameLayer.prototype.getStartGameData = function () {
        var gameData = [];
        for (var i = 0; i < this.itemNum; i++) {
            var itemId = util_1.default.getRandom(1, this.itemTypeNum);
            gameData.push(itemId);
        }
        return gameData;
    };
    /**
     * 根据数据修改一个值并返回
     */
    GameLayer.prototype.changeGameData = function (gameDataList) {
        var _this = this;
        var newDataList = [];
        var changeIndex = util_1.default.getRandom(0, gameDataList.length - 1);
        var curItemId = gameDataList[changeIndex];
        var getId = function () {
            var id = util_1.default.getRandom(1, _this.itemTypeNum);
            if (id == curItemId) {
                id = getId();
            }
            return id;
        };
        var changeId = getId();
        for (var i = 0; i < gameDataList.length; i++) {
            if (i == changeIndex) {
                newDataList.push(changeId);
            }
            else {
                newDataList.push(gameDataList[i]);
            }
        }
        DataManager_1.default.curWinItmeIndex = changeIndex;
        return newDataList;
    };
    /**
     * 重置游戏节点
     */
    GameLayer.prototype.resetGameNode = function () {
        this.LLayer.getChildByName('itemParent').removeAllChildren();
        this.RLayer.getChildByName('itemParent').removeAllChildren();
        DataManager_1.default.curWinItmeIndex = -1;
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
        };
        this.schedule(DataManager_1.default.timerFunc, speed);
    };
    /**
     * 更新倒计时
     */
    GameLayer.prototype.updateTimerUi = function () {
        cc.find('barBg/mask', this.timerNode).width = (DataManager_1.default.indexTime / DataManager_1.default.startTime) * this.maskLength;
        this.timerNode.getChildByName('timeText').getComponent(cc.Label).string = '00:' + Math.ceil(DataManager_1.default.indexTime);
    };
    /**
     * 更新余额
     */
    GameLayer.prototype.updateUserCoin = function () {
        var lableNode = this.userCoinNode.getChildByName('coinLable');
        cc.tween(lableNode).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
        lableNode.getComponent(cc.Label).string = '' + DataManager_1.default.curScord;
    };
    /**
     * 展示结果
     */
    GameLayer.prototype.showResult = function (isWin) {
        this.playSound(isWin ? 2 : 1);
        this.unschedule(DataManager_1.default.timerFunc);
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
        this.resetGameNode();
        DataManager_1.default.curWinNum += 100;
        if (isWin) {
            var winNumLable = cc.find('win/winNum', this.resultNode);
            winNumLable.getComponent(cc.Label).string = '' + DataManager_1.default.curWinNum;
        }
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
        cc.find('barBg/mask', this.timerNode).width = this.maskLength;
        DataManager_1.default.curGameIsRun = false;
        this.resultNode.active = false;
        DataManager_1.default.curWinNum = 0;
    };
    /**
     * 关闭提示展示
     */
    GameLayer.prototype.hideTipNode = function () {
        var _this = this;
        cc.tween(this.tipNode.getChildByName('helpText'))
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.tipNode.active = false;
            _this.tipNode.getChildByName('helpText').scale = 1;
        })
            .start();
    };
    __decorate([
        property({ type: cc.Node, tooltip: '左侧layer' })
    ], GameLayer.prototype, "LLayer", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '右侧layer' })
    ], GameLayer.prototype, "RLayer", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '用户余额节点' })
    ], GameLayer.prototype, "userCoinNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏结果节点' })
    ], GameLayer.prototype, "resultNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏提示节点' })
    ], GameLayer.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '倒计时节点' })
    ], GameLayer.prototype, "timerNode", void 0);
    __decorate([
        property({ type: cc.Prefab, tooltip: '元素预制体' })
    ], GameLayer.prototype, "itemPrefab", void 0);
    __decorate([
        property({ type: [cc.AudioClip], tooltip: '音效' })
    ], GameLayer.prototype, "audios", void 0);
    GameLayer = __decorate([
        ccclass
    ], GameLayer);
    return GameLayer;
}(cc.Component));
exports.default = GameLayer;

cc._RF.pop();