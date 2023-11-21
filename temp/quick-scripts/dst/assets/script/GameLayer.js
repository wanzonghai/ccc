
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHVDQUFrQztBQUVsQyxvQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFzU0M7UUFwU0csWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixZQUFNLEdBQW1CLEVBQUUsQ0FBQztRQUU1QixXQUFXO1FBQ0gsY0FBUSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLFdBQVc7UUFDWCxhQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGFBQWE7UUFDYixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixXQUFXO1FBQ1gsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFaEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFpUTdCLENBQUM7SUEvUEcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM5RCxxQkFBVyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDakMscUJBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLHFCQUFXLENBQUMsU0FBUyxHQUFHLENB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QUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2lEQUNuQjtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7NkNBQ3RCO0lBdkJYLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzUzdCO0lBQUQsZ0JBQUM7Q0F0U0QsQUFzU0MsQ0F0U3NDLEVBQUUsQ0FBQyxTQUFTLEdBc1NsRDtrQkF0U29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmltcG9ydCBJdGVtTm9kZSBmcm9tICcuL0l0ZW1Ob2RlJztcclxuaW1wb3J0IHsgSnNiRnVuVHlwZSB9IGZyb20gJy4vdXRpbC9kZWZpbmUnO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwvdXRpbCc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICflt6bkvqdsYXllcicgfSlcclxuICAgIExMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+WPs+S+p2xheWVyJyB9KVxyXG4gICAgUkxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn55So5oi35L2Z6aKd6IqC54K5JyB9KVxyXG4gICAgdXNlckNvaW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP57uT5p6c6IqC54K5JyB9KVxyXG4gICAgcmVzdWx0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+a4uOaIj+aPkOekuuiKgueCuScgfSlcclxuICAgIHRpcE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICflgJLorqHml7boioLngrknIH0pXHJcbiAgICB0aW1lck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlByZWZhYiwgdG9vbHRpcDogJ+WFg+e0oOmihOWItuS9kycgfSlcclxuICAgIGl0ZW1QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkF1ZGlvQ2xpcF0sIHRvb2x0aXA6ICfpn7PmlYgnIH0pXHJcbiAgICBhdWRpb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgLyoqIOWFg+e0oOWuvemrmCAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2l6ZTogY2MuU2l6ZSA9IGNjLnNpemUoMTYyLCAxNTQpO1xyXG5cclxuICAgIC8qKiDlhYPntKDmgLvph48gKi9cclxuICAgIGl0ZW1OdW06IG51bWJlciA9IDIwO1xyXG5cclxuICAgIC8qKiDlhYPntKDnsbvliKvmlbDph48gKi9cclxuICAgIGl0ZW1UeXBlTnVtOiBudW1iZXIgPSAyMTtcclxuXHJcbiAgICAvKiog6YGu572p6ZW/5bqmICovXHJcbiAgICBtYXNrTGVuZ3RoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm1hc2tMZW5ndGggPSBjYy5maW5kKCdiYXJCZy9tYXNrJywgdGhpcy50aW1lck5vZGUpLndpZHRoO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1biA9IGZhbHNlO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmdhbWVMYXllclNjciA9IHRoaXM7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyV2luTnVtID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJDb2luKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTb3VuZEJ0blN0YXRlKCk7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5kZXhUaW1lID0gRGF0YU1hbmFnZXIuc3RhcnRUaW1lO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/lhoXmjInpkq7nu5Hlrprkuovku7ZcclxuICAgICAqL1xyXG4gICAgYnRuRXZlbnQoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5U291bmQoMCk7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0blN0YXJ0R2FtZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRuUmV0dXJuJzpcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc3RhcnRHYW1lJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnROZXh0R2FtZSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0U3RhcnRPdmVyJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdidEV4aXQnOlxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdzdGFydEdhbWUnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdidG5IZWxwJzpcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0bkNsb3NlSGVscCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVUaXBOb2RlKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0bkJnU291bmQnOlxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaXNPcGVuQmdTb3VuZCA9ICFEYXRhTWFuYWdlci5pc09wZW5CZ1NvdW5kO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSBEYXRhTWFuYWdlci5pc09wZW5CZ1NvdW5kID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNvdW5kQnRuU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdidG5FZmZlY3RTb3VuZCc6XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pc09wZW5FZmZlY3RTb3VuZCA9ICFEYXRhTWFuYWdlci5pc09wZW5FZmZlY3RTb3VuZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU291bmRCdG5TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlTb3VuZChpbmRleCkge1xyXG4gICAgICAgIGlmICghRGF0YU1hbmFnZXIuaXNPcGVuRWZmZWN0U291bmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9zW2luZGV4XTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDpn7PmlYjmjInpkq7nirbmgIFcclxuICAgICAqL1xyXG4gICAgdXBkYXRlU291bmRCdG5TdGF0ZSgpIHtcclxuICAgICAgICBsZXQgY29sb3IxID0gY2MuY29sb3IoMTc5LCAxNzksIDE3OSwgMjU1KTtcclxuICAgICAgICBsZXQgY29sb3IyID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuXHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2dhbWVMYXllci90b3BOb2RlL2J0bkJnU291bmQnKS5jb2xvciA9IChEYXRhTWFuYWdlci5pc09wZW5CZ1NvdW5kID8gY29sb3IyIDogY29sb3IxKS5jbG9uZSgpO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9nYW1lTGF5ZXIvdG9wTm9kZS9idG5FZmZlY3RTb3VuZCcpLmNvbG9yID0gKERhdGFNYW5hZ2VyLmlzT3BlbkVmZmVjdFNvdW5kID8gY29sb3IyIDogY29sb3IxKS5jbG9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlvIDlp4vmuLjmiI8gKi9cclxuICAgIHBsYXlHYW1lKCkge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4pIHJldHVybjtcclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlTb3VuZCgwKTtcclxuICAgICAgICB0aGlzLmluaXRJdGVtTm9kZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5ri45oiP6IqC54K5XHJcbiAgICAgKi9cclxuICAgIGluaXRJdGVtTm9kZSgpIHtcclxuICAgICAgICBsZXQgZGF0YUxpc3QxID0gdGhpcy5nZXRTdGFydEdhbWVEYXRhKCk7XHJcbiAgICAgICAgbGV0IGRhdGFMaXN0MiA9IHRoaXMuY2hhbmdlR2FtZURhdGEoZGF0YUxpc3QxKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRJdGVtQnlEYXRhKHRoaXMuTExheWVyLmdldENoaWxkQnlOYW1lKCdpdGVtUGFyZW50JyksIGRhdGFMaXN0MSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtQnlEYXRhKHRoaXMuUkxheWVyLmdldENoaWxkQnlOYW1lKCdpdGVtUGFyZW50JyksIGRhdGFMaXN0Mik7XHJcblxyXG4gICAgICAgIHRoaXMuUkxheWVyLmdldENoaWxkQnlOYW1lKCdpdGVtUGFyZW50JykuY2hpbGRyZW4uZm9yRWFjaCgobm9kZSwgaSkgPT5cclxuICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IERhdGFNYW5hZ2VyLmN1cldpbkl0bWVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1clNjb3JkICs9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZCg0KTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC43LCB7IHNjYWxlOiAwLjcsIG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC4xLCB7IHJvdGF0aW9uOiAxMCB9KS50bygwLjEsIHsgcm90YXRpb246IC0xMCB9KS50bygwLjEsIHsgcm90YXRpb246IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6YCJ6ZSZ5LqGJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruaVsOaNrue7meiKgueCuea3u+WKoOWFg+e0oFxyXG4gICAgICovXHJcbiAgICBhZGRJdGVtQnlEYXRhKG5vZGUsIGRhdGEpIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgaXRlbU5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pbml0KGRhdGFbaV0udG9TdHJpbmcoKSwgdGhpcy5pdGVtU2l6ZSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWIneWni+a4uOaIj+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBnZXRTdGFydEdhbWVEYXRhKCkge1xyXG4gICAgICAgIGxldCBnYW1lRGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5pdGVtTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IHV0aWwuZ2V0UmFuZG9tKDEsIHRoaXMuaXRlbVR5cGVOdW0pO1xyXG4gICAgICAgICAgICBnYW1lRGF0YS5wdXNoKGl0ZW1JZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ2FtZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7mlbDmja7kv67mlLnkuIDkuKrlgLzlubbov5Tlm55cclxuICAgICAqL1xyXG4gICAgY2hhbmdlR2FtZURhdGEoZ2FtZURhdGFMaXN0KSB7XHJcbiAgICAgICAgbGV0IG5ld0RhdGFMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGNoYW5nZUluZGV4ID0gdXRpbC5nZXRSYW5kb20oMCwgZ2FtZURhdGFMaXN0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGxldCBjdXJJdGVtSWQgPSBnYW1lRGF0YUxpc3RbY2hhbmdlSW5kZXhdO1xyXG4gICAgICAgIGxldCBnZXRJZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gdXRpbC5nZXRSYW5kb20oMSwgdGhpcy5pdGVtVHlwZU51bSk7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBjdXJJdGVtSWQpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gZ2V0SWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGNoYW5nZUlkID0gZ2V0SWQoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGdhbWVEYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSBjaGFuZ2VJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YUxpc3QucHVzaChjaGFuZ2VJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhTGlzdC5wdXNoKGdhbWVEYXRhTGlzdFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1cldpbkl0bWVJbmRleCA9IGNoYW5nZUluZGV4O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3RGF0YUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43nva7muLjmiI/oioLngrlcclxuICAgICAqL1xyXG4gICAgcmVzZXRHYW1lTm9kZSgpIHtcclxuICAgICAgICB0aGlzLkxMYXllci5nZXRDaGlsZEJ5TmFtZSgnaXRlbVBhcmVudCcpLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5STGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoJ2l0ZW1QYXJlbnQnKS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1cldpbkl0bWVJbmRleCA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5YCS6K6h5pe2XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgbGV0IHNwZWVkID0gMC4wMTtcclxuXHJcbiAgICAgICAgRGF0YU1hbmFnZXIudGltZXJGdW5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbmRleFRpbWUgLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbmRleFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShEYXRhTWFuYWdlci50aW1lckZ1bmMsIHNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWAkuiuoeaXtlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVUaW1lclVpKCkge1xyXG4gICAgICAgIGNjLmZpbmQoJ2JhckJnL21hc2snLCB0aGlzLnRpbWVyTm9kZSkud2lkdGggPSAoRGF0YU1hbmFnZXIuaW5kZXhUaW1lIC8gRGF0YU1hbmFnZXIuc3RhcnRUaW1lKSAqIHRoaXMubWFza0xlbmd0aDtcclxuICAgICAgICB0aGlzLnRpbWVyTm9kZS5nZXRDaGlsZEJ5TmFtZSgndGltZVRleHQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICcwMDonICsgTWF0aC5jZWlsKERhdGFNYW5hZ2VyLmluZGV4VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDkvZnpop1cclxuICAgICAqL1xyXG4gICAgdXBkYXRlVXNlckNvaW4oKSB7XHJcbiAgICAgICAgbGV0IGxhYmxlTm9kZSA9IHRoaXMudXNlckNvaW5Ob2RlLmdldENoaWxkQnlOYW1lKCdjb2luTGFibGUnKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4obGFibGVOb2RlKS50bygwLjEsIHsgc2NhbGU6IDEuMSB9KS50bygwLjEsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcclxuICAgICAgICBsYWJsZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnJyArIERhdGFNYW5hZ2VyLmN1clNjb3JkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bGV56S657uT5p6cXHJcbiAgICAgKi9cclxuICAgIHNob3dSZXN1bHQoaXNXaW4pIHtcclxuICAgICAgICB0aGlzLnBsYXlTb3VuZChpc1dpbiA/IDIgOiAxKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUoRGF0YU1hbmFnZXIudGltZXJGdW5jKTtcclxuICAgICAgICBEYXRhTWFuYWdlci5pbmRleFRpbWUgPSBEYXRhTWFuYWdlci5zdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5yZXNldEdhbWVOb2RlKCk7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyV2luTnVtICs9IDEwMDtcclxuICAgICAgICBpZiAoaXNXaW4pIHtcclxuICAgICAgICAgICAgbGV0IHdpbk51bUxhYmxlID0gY2MuZmluZCgnd2luL3dpbk51bScsIHRoaXMucmVzdWx0Tm9kZSk7XHJcblxyXG4gICAgICAgICAgICB3aW5OdW1MYWJsZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICcnICsgRGF0YU1hbmFnZXIuY3VyV2luTnVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdpbk5vZGUgPSB0aGlzLnJlc3VsdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3dpbicpO1xyXG4gICAgICAgIGxldCBsb3NlTm9kZSA9IHRoaXMucmVzdWx0Tm9kZS5nZXRDaGlsZEJ5TmFtZSgnbG9zZScpO1xyXG5cclxuICAgICAgICB3aW5Ob2RlLmFjdGl2ZSA9IGlzV2luO1xyXG4gICAgICAgIGxvc2VOb2RlLmFjdGl2ZSA9ICFpc1dpbjtcclxuICAgICAgICBsZXQgY3VyQW5pTm9kZSA9IGlzV2luID8gd2luTm9kZSA6IGxvc2VOb2RlO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3VsdE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY3VyQW5pTm9kZS5zY2FsZSA9IDAuNjtcclxuICAgICAgICBjdXJBbmlOb2RlLm9wYWNpdHkgPSAxMDA7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGN1ckFuaU5vZGUpLnRvKDAuMywgeyBzY2FsZTogMS4xLCBvcGFjaXR5OiAyNTUgfSkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl63nu5PmnpzlsZXnpLpcclxuICAgICAqL1xyXG4gICAgaGlkZVJlc3VsdE5vZGUoKSB7XHJcbiAgICAgICAgY2MuZmluZCgnYmFyQmcvbWFzaycsIHRoaXMudGltZXJOb2RlKS53aWR0aCA9IHRoaXMubWFza0xlbmd0aDtcclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3VsdE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyV2luTnVtID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXreaPkOekuuWxleekulxyXG4gICAgICovXHJcbiAgICBoaWRlVGlwTm9kZSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hlbHBUZXh0JykpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDAuNSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hlbHBUZXh0Jykuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=