
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/playLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwbGF5TGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsNkNBQXdDO0FBQ3hDLG9DQUErQjtBQUV6QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThQQztRQTNQRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLHdCQUFrQixHQUFxQixFQUFFLENBQUM7UUFFMUMsY0FBYztRQUNkLHdCQUFrQixHQUF3QyxFQUFFLENBQUM7UUFFN0QsU0FBUztRQUNULFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsU0FBUztRQUNULFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsZUFBZTtRQUNmLHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUU5QixrQkFBa0I7UUFDbEIsNkJBQXVCLEdBQWlDLEVBQUUsQ0FBQztRQUUzRCxXQUFXO1FBQ1gsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsY0FBYztRQUNkLG1CQUFhLEdBQVksSUFBSSxDQUFDOztRQXlOOUIsaUJBQWlCO0lBQ3JCLENBQUM7SUF4Tkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxRQUFRLEdBQUcscUJBQVcsQ0FBQyxVQUFVLENBQUMscUJBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdB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QyxDQUFDO2tEQUNkO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDO2tEQUNkO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDOytDQUNuQjtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztnREFDcEI7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDO3dEQUNaO0lBZnpCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4UDVCO0lBQUQsZUFBQztDQTlQRCxBQThQQyxDQTlQcUMsRUFBRSxDQUFDLFNBQVMsR0E4UGpEO2tCQTlQb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcbmltcG9ydCB1dGlsIGZyb20gXCIuL3V0aWwvdXRpbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLlsI/lm77lsZXnpLpcIn0pXG4gICAgbWluaVNob3dOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLmi7zlm77lrrnlmahcIn0pXG4gICAgcHV6emxlTGF5b3V0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLliqjnlLvlsZXnpLrnsr7ngbVcIn0pXG4gICAgYW5pU3ByaXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLop6bmkbjkuovku7bmjqXmlLboioLngrlcIn0pXG4gICAgdG91Y2hMYXllcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IFtjYy5TcHJpdGVGcmFtZV0sIHRvb2x0aXA6IFwi5ou85Zu+5Y6f5Zu+57q555CGXCJ9KVxuICAgIE1heFNwcml0ZUZyYW1lTGlzdDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgLyoqIOWIh+WlveeahOaLvOWbvue6ueeQhiAqL1xuICAgIE1pblNwcml0ZUZyYW1lTGlzdDogQXJyYXk8QXJyYXk8QXJyYXk8Y2MuU3ByaXRlRnJhbWU+Pj4gPSBbXTtcblxuICAgIC8qKiDooYzmlbAgKi9cbiAgICByb3dOdW06IG51bWJlciA9IDQ7XG5cbiAgICAvKiog5YiX5pWwICovXG4gICAgY29sTnVtOiBudW1iZXIgPSA0O1xuXG4gICAgLyoqIOW9k+WJjeS9v+eUqOaLvOWbvuW6j+WPtyAqL1xuICAgIGN1clVzZVB1enpsZUluZGV4OiBudW1iZXIgPSAxO1xuXG4gICAgLyoqIOW9k+WJjeS9v+eUqOeahOaLvOWbvue6ueeQhuaVsOe7hCAqL1xuICAgIGN1clVzZVB1enpsZVNwcml0ZUZyYW1lOiBBcnJheTxBcnJheTxjYy5TcHJpdGVGcmFtZT4+ID0gW107XG5cbiAgICAvKiog5YWD57Sg6Ze06ZqUICovXG4gICAgaXRlbUludGVydmFsOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIOW9k+WJjemAieWPlueahOWFg+e0oCAqL1xuICAgIGN1clNlbGVjdEl0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IGN1clN0YWdlID0gRGF0YU1hbmFnZXIuc3RhZ2VSYW5rc1tEYXRhTWFuYWdlci5jdXJHYW1lU3RhZ2VdO1xuXG4gICAgICAgIHRoaXMucm93TnVtID0gdGhpcy5jb2xOdW0gPSBjdXJTdGFnZTtcbiAgICAgICAgdGhpcy5hbmlTcHJpdGUucGFyZW50LnNldFBvc2l0aW9uKHRoaXMucHV6emxlTGF5b3V0LnBvc2l0aW9uLmNsb25lKCkpO1xuICAgICAgICB0aGlzLmluaXRQdXp6bGVTcHJpdGVGcmFtZSgpO1xuICAgICAgICB0aGlzLmluaXRQdXp6bGVOb2RlKCk7XG4gICAgICAgIHRoaXMuYmluZGluZ1B1enpsZU1vdmVFdmVudCgpO1xuICAgICAgICB0aGlzLnRlc3RNZXNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5ou85Zu+57q555CGXG4gICAgKi9cbiAgICBpbml0UHV6emxlU3ByaXRlRnJhbWUoKSB7XG4gICAgICAgIHRoaXMuTWF4U3ByaXRlRnJhbWVMaXN0LmZvckVhY2goKG1heFNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLk1pblNwcml0ZUZyYW1lTGlzdC5wdXNoKHV0aWwuZ3JpZEN1dFNwcml0ZUZyYW1lKG1heFNwcml0ZUZyYW1lLCB0aGlzLnJvd051bSwgdGhpcy5jb2xOdW0sIHRoaXMuaXRlbUludGVydmFsKSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jdXJVc2VQdXp6bGVTcHJpdGVGcmFtZSA9IHRoaXMuTWluU3ByaXRlRnJhbWVMaXN0W3RoaXMuY3VyVXNlUHV6emxlSW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaLvOWbvuiKgueCuVxuICAgICovXG4gICAgaW5pdFB1enpsZU5vZGUoKSB7XG4gICAgICAgIGxldCBzcHJpdGVGcmFtZVNpemU6IGNjLlNpemUgPSB0aGlzLmdldFB1enpsZVNwcml0ZUZyYW1lQnlJbmRleCgwKS5nZXRSZWN0KCkuc2l6ZTtcblxuICAgICAgICB0aGlzLnB1enpsZUxheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWCA9IHRoaXMuaXRlbUludGVydmFsO1xuICAgICAgICB0aGlzLnB1enpsZUxheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHRoaXMuaXRlbUludGVydmFsO1xuXG4gICAgICAgIHRoaXMuYW5pU3ByaXRlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgdGhpcy5hbmlTcHJpdGUuc2V0Q29udGVudFNpemUodXRpbC5jb3B5T2JqKHNwcml0ZUZyYW1lU2l6ZSkpO1xuXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMucm93TnVtICogdGhpcy5jb2xOdW07IGkrKykge1xuICAgICAgICAgICAgbGV0IHB1enpsZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgbGV0IHB1enpsZVNwcml0ZSA9IHB1enpsZU5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbiAgICAgICAgICAgIHB1enpsZVNwcml0ZS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgICAgICAgICBwdXp6bGVOb2RlW1wiaW5kZXhcIl0gPSBpO1xuICAgICAgICAgICAgcHV6emxlTm9kZS5zZXRDb250ZW50U2l6ZSh1dGlsLmNvcHlPYmooc3ByaXRlRnJhbWVTaXplKSk7XG4gICAgICAgICAgICB0aGlzLnB1enpsZUxheW91dC5hZGRDaGlsZChwdXp6bGVOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHV6emxlTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnu5Hlrprmi7zlm77mi5bmi73kuovku7ZcbiAgICAqL1xuICAgIGJpbmRpbmdQdXp6bGVNb3ZlRXZlbnQoKSB7XG4gICAgICAgIGxldCBlbmRDYWxsID0gKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnRvdWNoTGF5ZXJbXCJleGlzdEl0bWVcIl0pIHJldHVybjtcbiAgICAgICAgICAgIGxldCBwYWxjZU5vZGUgPSB0aGlzLmNoZWNrUGxhY2VBbGxvdyh0aGlzLmFuaVNwcml0ZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLmNsb25lKCkpO1xuXG4gICAgICAgICAgICB0aGlzLnRvdWNoTGF5ZXJbXCJleGlzdEl0bWVcIl0gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYocGFsY2VOb2RlKSB7IC8vIOaUvue9ruaIkOWKn1xuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmdhbWVMYXllclNjci5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IERhdGFNYW5hZ2VyLmdhbWVMYXllclNjci5hdWRpb1Jlc0xpc3RbOV07XG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuZ2FtZUxheWVyU2NyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTZWxlY3RJdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTZWxlY3RJdGVtW1wiY3VyUHV6emxlU3ByaXRlSW5kZXhcIl0gPSBwYWxjZU5vZGVbXCJjdXJQdXp6bGVTcHJpdGVJbmRleFwiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clNlbGVjdEl0ZW0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFB1enpsZVNwcml0ZUZyYW1lQnlJbmRleChwYWxjZU5vZGVbXCJjdXJQdXp6bGVTcHJpdGVJbmRleFwiXSk7XG4gICAgICAgICAgICAgICAgcGFsY2VOb2RlW1wiY3VyUHV6emxlU3ByaXRlSW5kZXhcIl0gPSB0aGlzLmFuaVNwcml0ZVtcImN1clB1enpsZVNwcml0ZUluZGV4XCJdO1xuICAgICAgICAgICAgICAgIHBhbGNlTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0UHV6emxlU3ByaXRlRnJhbWVCeUluZGV4KHRoaXMuYW5pU3ByaXRlW1wiY3VyUHV6emxlU3ByaXRlSW5kZXhcIl0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbmlTcHJpdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja0lzV2luKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuZ2FtZUxheWVyU2NyLnNob3dSZXN1bHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6IOc5YipXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmlTcHJpdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTZWxlY3RJdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG91Y2hMYXllci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAgICAgICAgIGxldCBwdXp6bGVOb2RlID0gdGhpcy5nZXRQdXp6bGVOb2RlQnlXb3JsZFBvcyhlLmdldExvY2F0aW9uKCkpO1xuXG4gICAgICAgICAgICBpZihwdXp6bGVOb2RlKSB7IC8vIOW9k+WJjeS4lueVjOWdkOagh+S4iuacieWFg+e0oFxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmdhbWVMYXllclNjci5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IERhdGFNYW5hZ2VyLmdhbWVMYXllclNjci5hdWRpb1Jlc0xpc3RbOV07XG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuZ2FtZUxheWVyU2NyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuYW5pU3ByaXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaVNwcml0ZS5zY2FsZSA9IDEuMTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clNlbGVjdEl0ZW0gPSBwdXp6bGVOb2RlO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pU3ByaXRlW1wiY3VyUHV6emxlU3ByaXRlSW5kZXhcIl0gPSBwdXp6bGVOb2RlW1wiY3VyUHV6emxlU3ByaXRlSW5kZXhcIl07XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaExheWVyW1wiZXhpc3RJdG1lXCJdID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHB1enpsZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmlTcHJpdGUuc2V0UG9zaXRpb24ocHV6emxlTm9kZS5wb3NpdGlvbi5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaVNwcml0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pU3ByaXRlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5nZXRQdXp6bGVTcHJpdGVGcmFtZUJ5SW5kZXgocHV6emxlTm9kZVtcImN1clB1enpsZVNwcml0ZUluZGV4XCJdKTtcblxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYW5pU3ByaXRlKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4wNSwge3NjYWxlOiAxLjJ9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4wNSwge3NjYWxlOiAxfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDUsIHtzY2FsZTogMS4xfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudG91Y2hMYXllci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy50b3VjaExheWVyW1wiZXhpc3RJdG1lXCJdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlbGF5ID0gZS5nZXREZWx0YSgpO1xuICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuYW5pU3ByaXRlLnNldFBvc2l0aW9uKGRlbGF5LmFkZChjYy52Mih0aGlzLmFuaVNwcml0ZS54LCB0aGlzLmFuaVNwcml0ZS55KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b3VjaExheWVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZW5kQ2FsbCk7XG4gICAgICAgIHRoaXMudG91Y2hMYXllci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGVuZENhbGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeUn+aIkOmaj+acuuaUvue9ruaLvOWbvlxuICAgICovXG4gICAgY3JlYXRlUmFuZG9tUHV6emxlKCkge1xuICAgICAgICB0aGlzLmN1clVzZVB1enpsZUluZGV4ID0gdXRpbC5nZXRSYW5kb20oMCwgdGhpcy5NYXhTcHJpdGVGcmFtZUxpc3QubGVuZ3RoLTEpO1xuICAgICAgICB0aGlzLmluaXRQdXp6bGVTcHJpdGVGcmFtZSgpO1xuICAgICAgICBsZXQgaW5kZXhMaXN0ID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5yb3dOdW0gKiB0aGlzLmNvbE51bTsgaSsrKSB7XG4gICAgICAgICAgICBpbmRleExpc3QucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4TGlzdCA9IHV0aWwuZ2V0UmFuZG9tTGlzdEl0bWUoaW5kZXhMaXN0LCBpbmRleExpc3QubGVuZ3RoKTtcblxuICAgICAgICB0aGlzLnB1enpsZUxheW91dC5jaGlsZHJlbi5mb3JFYWNoKChwdXp6bGVOb2RlLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHV6emxlU3ByaXRlID0gcHV6emxlTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGxldCBzcHJpdGVJbmRleCA9IGluZGV4TGlzdFtpXTtcblxuICAgICAgICAgICAgcHV6emxlTm9kZVtcImN1clB1enpsZVNwcml0ZUluZGV4XCJdID0gc3ByaXRlSW5kZXg7XG4gICAgICAgICAgICBwdXp6bGVTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFB1enpsZVNwcml0ZUZyYW1lQnlJbmRleChzcHJpdGVJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1pbmlTaG93Tm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuTWF4U3ByaXRlRnJhbWVMaXN0W3RoaXMuY3VyVXNlUHV6emxlSW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNrmluZGV46I635b6X5b2T5YmN5pWw57uE5Lit57q555CGXG4gICAgKi9cbiAgICBnZXRQdXp6bGVTcHJpdGVGcmFtZUJ5SW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgY29sID0gaW5kZXggJSB0aGlzLmNvbE51bTtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLmNvbE51bSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VyVXNlUHV6emxlU3ByaXRlRnJhbWVbcm93XVtjb2xdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOajgOa1i+aYr+WQpuaUvue9ruWcqGl0ZW3kuIpcbiAgICAqL1xuICAgIGNoZWNrUGxhY2VBbGxvdyh3b3JsZFBvczogY2MuVmVjMiB8IGNjLlZlYzMpOiBjYy5Ob2RlIHtcbiAgICAgICAgbGV0IHBsYWNlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5wdXp6bGVMYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCgocHV6emxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYocGxhY2VOb2RlKSByZXR1cm47XG4gICAgICAgICAgICBwbGFjZU5vZGUgPSB1dGlsLmNoZWNrUG9pbnRFeGlzdE5vZGUocHV6emxlTm9kZSwgd29ybGRQb3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGxhY2VOb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS4lueVjOWdkOagh+S4iuaLvOWbvlxuICAgICovXG4gICAgZ2V0UHV6emxlTm9kZUJ5V29ybGRQb3Mod29ybGRQb3M6IGNjLlZlYzIgfCBjYy5WZWMzKSB7XG4gICAgICAgIGxldCBwbGFjZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMucHV6emxlTGF5b3V0LmNoaWxkcmVuLmZvckVhY2goKHB1enpsZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmKHBsYWNlTm9kZSkgcmV0dXJuO1xuICAgICAgICAgICAgcGxhY2VOb2RlID0gdXRpbC5jaGVja1BvaW50RXhpc3ROb2RlKHB1enpsZU5vZGUsIHdvcmxkUG9zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBsYWNlTm9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmo4DmtYvog5zliKlcbiAgICAqL1xuICAgIGNoZWNrSXNXaW4oKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc1dpbiA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5wdXp6bGVMYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCgocHV6emxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYocHV6emxlTm9kZVtcImN1clB1enpsZVNwcml0ZUluZGV4XCJdICE9IHB1enpsZU5vZGVbXCJpbmRleFwiXSkge1xuICAgICAgICAgICAgICAgIGlzV2luID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpc1dpbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmtYvor5VtZXNoXG4gICAgKi9cbiAgICB0ZXN0TWVzaCgpIHtcbiAgICAgICAgbGV0IHNwID0gdGhpcy5taW5pU2hvd05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzcC5zcHJpdGVGcmFtZS52ZXJ0aWNlcyA9IHtcbiAgICAgICAgICAgIHg6IFswLCAxMDAsIDEwMF0sXG4gICAgICAgICAgICB5OiBbMCwgMCwgMTAwXSxcbiAgICAgICAgICAgIG51OiBbMCwgMSwgMV0sXG4gICAgICAgICAgICBudjogWzAsIDAsIDFdLCBcbiAgICAgICAgICAgIHRyaWFuZ2xlczogWzAsIDEsIDJdLFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNwLnNldFZlcnRzRGlydHkoKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19