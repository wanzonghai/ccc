"use strict";
cc._RF.push(module, '4dcb5zaxNBCjpdOCCrYs2fV', 'playLayer');
// script/playLayer.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("./DataManager");
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.miniShowNode = null;
        _this.puzzleLayout = null;
        _this.aniSprite = null;
        _this.touchLayer = null;
        _this.MaxSpriteFrameList = [];
        /** 切好的拼图纹理 */
        _this.MinSpriteFrameList = [];
        /** 行数 */
        _this.rowNum = 4;
        /** 列数 */
        _this.colNum = 4;
        /** 当前使用拼图序号 */
        _this.curUsePuzzleIndex = 1;
        /** 当前使用的拼图纹理数组 */
        _this.curUsePuzzleSpriteFrame = [];
        /** 元素间隔 */
        _this.itemInterval = 0;
        /** 当前选取的元素 */
        _this.curSelectItem = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var curStage = DataManager_1.default.stageRanks[DataManager_1.default.curGameStage];
        this.rowNum = this.colNum = curStage;
        this.aniSprite.parent.setPosition(this.puzzleLayout.position.clone());
        this.initPuzzleSpriteFrame();
        this.initPuzzleNode();
        this.bindingPuzzleMoveEvent();
        this.testMesh();
    };
    /**
     * 初始化拼图纹理
    */
    NewClass.prototype.initPuzzleSpriteFrame = function () {
        var _this = this;
        this.MaxSpriteFrameList.forEach(function (maxSpriteFrame) {
            _this.MinSpriteFrameList.push(util_1.default.gridCutSpriteFrame(maxSpriteFrame, _this.rowNum, _this.colNum, _this.itemInterval));
        });
        this.curUsePuzzleSpriteFrame = this.MinSpriteFrameList[this.curUsePuzzleIndex];
    };
    /**
     * 初始化拼图节点
    */
    NewClass.prototype.initPuzzleNode = function () {
        var _this = this;
        var spriteFrameSize = this.getPuzzleSpriteFrameByIndex(0).getRect().size;
        this.puzzleLayout.getComponent(cc.Layout).spacingX = this.itemInterval;
        this.puzzleLayout.getComponent(cc.Layout).spacingY = this.itemInterval;
        this.aniSprite.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        this.aniSprite.setContentSize(util_1.default.copyObj(spriteFrameSize));
        for (var i = 0; i < this.rowNum * this.colNum; i++) {
            var puzzleNode = new cc.Node();
            var puzzleSprite = puzzleNode.addComponent(cc.Sprite);
            puzzleSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            puzzleNode["index"] = i;
            puzzleNode.setContentSize(util_1.default.copyObj(spriteFrameSize));
            this.puzzleLayout.addChild(puzzleNode);
        }
        this.scheduleOnce(function () {
            _this.puzzleLayout.getComponent(cc.Layout).enabled = false;
        });
    };
    /**
     * 绑定拼图拖拽事件
    */
    NewClass.prototype.bindingPuzzleMoveEvent = function () {
        var _this = this;
        var endCall = function (e) {
            if (!_this.touchLayer["existItme"])
                return;
            var palceNode = _this.checkPlaceAllow(_this.aniSprite.convertToWorldSpaceAR(cc.v2(0, 0)).clone());
            _this.touchLayer["existItme"] = false;
            if (palceNode) { // 放置成功
                DataManager_1.default.gameLayerScr.node.getComponent(cc.AudioSource).clip = DataManager_1.default.gameLayerScr.audioResList[9];
                DataManager_1.default.gameLayerScr.node.getComponent(cc.AudioSource).play();
                _this.curSelectItem.active = true;
                _this.curSelectItem["curPuzzleSpriteIndex"] = palceNode["curPuzzleSpriteIndex"];
                _this.curSelectItem.getComponent(cc.Sprite).spriteFrame = _this.getPuzzleSpriteFrameByIndex(palceNode["curPuzzleSpriteIndex"]);
                palceNode["curPuzzleSpriteIndex"] = _this.aniSprite["curPuzzleSpriteIndex"];
                palceNode.getComponent(cc.Sprite).spriteFrame = _this.getPuzzleSpriteFrameByIndex(_this.aniSprite["curPuzzleSpriteIndex"]);
                _this.aniSprite.active = false;
                if (_this.checkIsWin()) {
                    DataManager_1.default.gameLayerScr.showResult(true);
                    console.log("胜利");
                }
            }
            else {
                _this.aniSprite.active = false;
                _this.curSelectItem.active = true;
            }
        };
        this.touchLayer.on(cc.Node.EventType.TOUCH_START, function (e) {
            var puzzleNode = _this.getPuzzleNodeByWorldPos(e.getLocation());
            if (puzzleNode) { // 当前世界坐标上有元素
                DataManager_1.default.gameLayerScr.node.getComponent(cc.AudioSource).clip = DataManager_1.default.gameLayerScr.audioResList[9];
                DataManager_1.default.gameLayerScr.node.getComponent(cc.AudioSource).play();
                cc.Tween.stopAllByTarget(_this.aniSprite);
                _this.aniSprite.scale = 1.1;
                _this.curSelectItem = puzzleNode;
                _this.aniSprite["curPuzzleSpriteIndex"] = puzzleNode["curPuzzleSpriteIndex"];
                _this.touchLayer["existItme"] = true;
                puzzleNode.active = false;
                _this.aniSprite.setPosition(puzzleNode.position.clone());
                _this.aniSprite.active = true;
                _this.aniSprite.getComponent(cc.Sprite).spriteFrame = _this.getPuzzleSpriteFrameByIndex(puzzleNode["curPuzzleSpriteIndex"]);
                cc.tween(_this.aniSprite)
                    .to(0.05, { scale: 1.2 })
                    .to(0.05, { scale: 1 })
                    .to(0.05, { scale: 1.1 })
                    .start();
            }
        });
        this.touchLayer.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            if (_this.touchLayer["existItme"]) {
                var delay = e.getDelta();
                _this.aniSprite.setPosition(delay.add(cc.v2(_this.aniSprite.x, _this.aniSprite.y)));
            }
        });
        this.touchLayer.on(cc.Node.EventType.TOUCH_END, endCall);
        this.touchLayer.on(cc.Node.EventType.TOUCH_CANCEL, endCall);
    };
    /**
     * 生成随机放置拼图
    */
    NewClass.prototype.createRandomPuzzle = function () {
        var _this = this;
        this.curUsePuzzleIndex = util_1.default.getRandom(0, this.MaxSpriteFrameList.length - 1);
        this.initPuzzleSpriteFrame();
        var indexList = [];
        for (var i = 0; i < this.rowNum * this.colNum; i++) {
            indexList.push(i);
        }
        indexList = util_1.default.getRandomListItme(indexList, indexList.length);
        this.puzzleLayout.children.forEach(function (puzzleNode, i) {
            var puzzleSprite = puzzleNode.getComponent(cc.Sprite);
            var spriteIndex = indexList[i];
            puzzleNode["curPuzzleSpriteIndex"] = spriteIndex;
            puzzleSprite.spriteFrame = _this.getPuzzleSpriteFrameByIndex(spriteIndex);
        });
        this.miniShowNode.getComponent(cc.Sprite).spriteFrame = this.MaxSpriteFrameList[this.curUsePuzzleIndex];
    };
    /**
     * 根据index获得当前数组中纹理
    */
    NewClass.prototype.getPuzzleSpriteFrameByIndex = function (index) {
        var col = index % this.colNum;
        var row = Math.floor(index / this.colNum);
        return this.curUsePuzzleSpriteFrame[row][col];
    };
    /**
     * 检测是否放置在item上
    */
    NewClass.prototype.checkPlaceAllow = function (worldPos) {
        var placeNode = null;
        this.puzzleLayout.children.forEach(function (puzzleNode) {
            if (placeNode)
                return;
            placeNode = util_1.default.checkPointExistNode(puzzleNode, worldPos);
        });
        return placeNode;
    };
    /**
     * 获取世界坐标上拼图
    */
    NewClass.prototype.getPuzzleNodeByWorldPos = function (worldPos) {
        var placeNode = null;
        this.puzzleLayout.children.forEach(function (puzzleNode) {
            if (placeNode)
                return;
            placeNode = util_1.default.checkPointExistNode(puzzleNode, worldPos);
        });
        return placeNode;
    };
    /**
     * 检测胜利
    */
    NewClass.prototype.checkIsWin = function () {
        var isWin = true;
        this.puzzleLayout.children.forEach(function (puzzleNode) {
            if (puzzleNode["curPuzzleSpriteIndex"] != puzzleNode["index"]) {
                isWin = false;
            }
        });
        return isWin;
    };
    /**
     * 测试mesh
    */
    NewClass.prototype.testMesh = function () {
        var sp = this.miniShowNode.getComponent(cc.Sprite);
        // @ts-ignore
        sp.spriteFrame.vertices = {
            x: [0, 100, 100],
            y: [0, 0, 100],
            nu: [0, 1, 1],
            nv: [0, 0, 1],
            triangles: [0, 1, 2],
        };
        // @ts-ignore
        sp.setVertsDirty();
    };
    __decorate([
        property({ type: cc.Node, tooltip: "小图展示" })
    ], NewClass.prototype, "miniShowNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "拼图容器" })
    ], NewClass.prototype, "puzzleLayout", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "动画展示精灵" })
    ], NewClass.prototype, "aniSprite", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "触摸事件接收节点" })
    ], NewClass.prototype, "touchLayer", void 0);
    __decorate([
        property({ type: [cc.SpriteFrame], tooltip: "拼图原图纹理" })
    ], NewClass.prototype, "MaxSpriteFrameList", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();