
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/StartGameLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '186fdrcFDVArIKKXQH6Uufc', 'StartGameLayer');
// script/StartGameLayer.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var startGameLayer = /** @class */ (function (_super) {
    __extends(startGameLayer, _super);
    function startGameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioResList = [];
        _this.checkBtn = null;
        _this.page = null;
        _this.lodingPage = null;
        _this.isPolicy = false;
        return _this;
    }
    startGameLayer.prototype.start = function () {
        var _this = this;
        if (!DataManager_1.default.curSoundIsClose) {
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        this.checkBtn.getChildByName('title').on(cc.Node.EventType.TOUCH_END, function () {
            _this.page.active = true;
            var rule = _this.page.getChildByName('rule2');
            cc.tween(rule).to(0.2, { scale: 1 }).start();
            _this.node.getComponent(cc.AudioSource).clip = _this.audioResList[0];
            _this.node.getComponent(cc.AudioSource).play();
        });
        /**生成用户ID */
        if (DataManager_1.default.userId == '10086') {
            var newUserId = '';
            for (var i = 0; i < DataManager_1.default.userId.length; i++) {
                newUserId += util_1.default.getRandom(0, 9);
            }
            DataManager_1.default.userId = newUserId;
        }
        this.lodingPage.getChildByName('pg').getComponent(cc.ProgressBar).progress = 0;
    };
    startGameLayer.prototype.onEnable = function () {
        this.autoIntoGame();
    };
    startGameLayer.prototype.autoIntoGame = function () {
        var _this = this;
        this.scheduleOnce(function () {
            if (_this.lodingPage.active)
                return;
            _this.isPolicy = true;
            _this.switchScene();
        }, 3);
    };
    startGameLayer.prototype.switchScene = function () {
        if (this.isPolicy) {
            this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
            this.node.getComponent(cc.AudioSource).play();
            this.lodingPage.active = true;
            this.startLoding();
        }
        else {
            this.node.stopAllActions();
            this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
            this.node.getComponent(cc.AudioSource).play();
            cc.tween(this.checkBtn)
                .to(0.1, { position: cc.v3(this.checkBtn.position.x, this.checkBtn.position.y + 5, 1) })
                .to(0.1, { position: cc.v3(this.checkBtn.position.x, this.checkBtn.position.y - 5, 1) })
                .start();
        }
    };
    /**开启加载页面 */
    startGameLayer.prototype.startLoding = function () {
        var _this = this;
        var pg = this.lodingPage.getChildByName('pg');
        var array = [0.01, 0.009, 0.009, 0.009, 0.009];
        var speed = 0.02;
        this.schedule(function () {
            pg.getComponent(cc.ProgressBar).progress += array[util_1.default.getRandom(0, array.length - 1)];
            if (pg.getComponent(cc.ProgressBar).progress >= 1) {
                pg.getComponent(cc.ProgressBar).progress = 1;
                _this.unscheduleAllCallbacks();
                cc.director.loadScene('game');
            }
        }, speed);
    };
    startGameLayer.prototype.onChange = function () {
        var border = this.checkBtn.getChildByName('border');
        border.children[0].active = !border.children[0].active;
        this.isPolicy = !this.isPolicy;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
    };
    startGameLayer.prototype.closePage = function () {
        var _this = this;
        var rule = this.page.getChildByName('rule2');
        cc.tween(rule)
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.page.active = false;
        })
            .start();
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
    };
    startGameLayer.prototype.onDestroy = function () {
        this.checkBtn.getChildByName('title').off(cc.Node.EventType.TOUCH_END);
        this.checkBtn.getChildByName('border').off(cc.Node.EventType.TOUCH_END);
    };
    __decorate([
        property({ type: [cc.AudioClip] })
    ], startGameLayer.prototype, "audioResList", void 0);
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "checkBtn", void 0);
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "page", void 0);
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "lodingPage", void 0);
    startGameLayer = __decorate([
        ccclass
    ], startGameLayer);
    return startGameLayer;
}(cc.Component));
exports.default = startGameLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTdGFydEdhbWVMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFDeEMsb0NBQStCO0FBRXpCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBMEdDO1FBeEdHLGtCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUdsQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFbkIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUE2RnRDLENBQUM7SUEzRkcsOEJBQUssR0FBTDtRQUFBLGlCQTBCQztRQXpCRyxJQUFJLENBQUMscUJBQVcsQ0FBQyxlQUFlLEVBQUU7WUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxD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RyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRVMsa0NBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUF2R0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzt3REFDRDtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDUztJQVhWLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EwR2xDO0lBQUQscUJBQUM7Q0ExR0QsQUEwR0MsQ0ExRzJDLEVBQUUsQ0FBQyxTQUFTLEdBMEd2RDtrQkExR29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbC91dGlsJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdGFydEdhbWVMYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQXVkaW9DbGlwXSB9KVxyXG4gICAgYXVkaW9SZXNMaXN0OiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hlY2tCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGFnZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2RpbmdQYWdlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzUG9saWN5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2UpIHtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoJ3RpdGxlJykub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgcnVsZSA9IHRoaXMucGFnZS5nZXRDaGlsZEJ5TmFtZSgncnVsZTInKTtcclxuICAgICAgICAgICAgY2MudHdlZW4ocnVsZSkudG8oMC4yLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qKueUn+aIkOeUqOaIt0lEICovXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLnVzZXJJZCA9PSAnMTAwODYnKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VySWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERhdGFNYW5hZ2VyLnVzZXJJZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmV3VXNlcklkICs9IHV0aWwuZ2V0UmFuZG9tKDAsIDkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLnVzZXJJZCA9IG5ld1VzZXJJZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9kaW5nUGFnZS5nZXRDaGlsZEJ5TmFtZSgncGcnKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gMDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmF1dG9JbnRvR2FtZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhdXRvSW50b0dhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2RpbmdQYWdlLmFjdGl2ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmlzUG9saWN5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hTY2VuZSgpO1xyXG4gICAgICAgIH0sIDMpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoU2NlbmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xpY3kpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzJdO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9kaW5nUGFnZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9kaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFsxXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNoZWNrQnRuKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5jaGVja0J0bi5wb3NpdGlvbi54LCB0aGlzLmNoZWNrQnRuLnBvc2l0aW9uLnkgKyA1LCAxKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5jaGVja0J0bi5wb3NpdGlvbi54LCB0aGlzLmNoZWNrQnRuLnBvc2l0aW9uLnkgLSA1LCAxKSB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoq5byA5ZCv5Yqg6L296aG16Z2iICovXHJcbiAgICBzdGFydExvZGluZygpIHtcclxuICAgICAgICBsZXQgcGcgPSB0aGlzLmxvZGluZ1BhZ2UuZ2V0Q2hpbGRCeU5hbWUoJ3BnJyk7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gWzAuMDEsIDAuMDA5LCAwLjAwOSwgMC4wMDksIDAuMDA5XTtcclxuICAgICAgICBsZXQgc3BlZWQgPSAwLjAyO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBwZy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzICs9IGFycmF5W3V0aWwuZ2V0UmFuZG9tKDAsIGFycmF5Lmxlbmd0aCAtIDEpXTtcclxuICAgICAgICAgICAgaWYgKHBnLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGcuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcyA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgc3BlZWQpO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2UoKSB7XHJcbiAgICAgICAgbGV0IGJvcmRlciA9IHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoJ2JvcmRlcicpO1xyXG4gICAgICAgIGJvcmRlci5jaGlsZHJlblswXS5hY3RpdmUgPSAhYm9yZGVyLmNoaWxkcmVuWzBdLmFjdGl2ZTtcclxuICAgICAgICB0aGlzLmlzUG9saWN5ID0gIXRoaXMuaXNQb2xpY3k7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBhZ2UoKSB7XHJcbiAgICAgICAgbGV0IHJ1bGUgPSB0aGlzLnBhZ2UuZ2V0Q2hpbGRCeU5hbWUoJ3J1bGUyJyk7XHJcbiAgICAgICAgY2MudHdlZW4ocnVsZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMC41IH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoJ3RpdGxlJykub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0J0bi5nZXRDaGlsZEJ5TmFtZSgnYm9yZGVyJykub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICB9XHJcbn1cclxuIl19