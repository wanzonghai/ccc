
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
        _this.titleTween = null;
        return _this;
    }
    startGameLayer.prototype.start = function () {
        var _this = this;
        if (!DataManager_1.default.curSoundIsClose) {
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        this.checkBtn.getChildByName("title").on(cc.Node.EventType.TOUCH_END, function () {
            _this.page.active = true;
            _this.page.getComponent(cc.Animation).play();
            _this.node.getComponent(cc.AudioSource).clip = _this.audioResList[0];
            _this.node.getComponent(cc.AudioSource).play();
        });
        /**生成用户ID */
        if (DataManager_1.default.userId == "10086") {
            var newUserId = '';
            for (var i = 0; i < DataManager_1.default.userId.length; i++) {
                newUserId += util_1.default.getRandom(0, 9);
            }
            DataManager_1.default.userId = newUserId;
        }
        this.lodingPage.getChildByName('pg').getComponent(cc.ProgressBar).progress = 0;
    };
    startGameLayer.prototype.switchScene = function () {
        if (this.isPolicy) {
            this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
            this.node.getComponent(cc.AudioSource).play();
            this.lodingPage.active = true;
            this.startLoding();
        }
        else {
            this.node.stopAllActions();
            this.titleTween && this.titleTween.stop();
            var title_1 = this.checkBtn.getChildByName("title");
            title_1.getComponent(cc.LabelOutline).color = cc.color(0, 0, 0, 255);
            this.titleTween = util_1.default.tweenUpdate(0.3, function (ratio) {
                var colroNum = 255 - ratio * 255 * 2;
                title_1.getComponent(cc.LabelOutline).color = cc.color(colroNum, colroNum, colroNum, 255);
            });
            // cc.tween(this.checkBtn)
            //     .to(0.1,{position:cc.v3(this.checkBtn.position.x,this.checkBtn.position.y + 5,1)})
            //     .to(0.1,{position:cc.v3(this.checkBtn.position.x,this.checkBtn.position.y - 5,1)})
            //     .start()
        }
    };
    /**开启加载页面 */
    startGameLayer.prototype.startLoding = function () {
        var _this = this;
        var pg = this.lodingPage.getChildByName("pg");
        var speed = 0.02;
        this.schedule(function () {
            pg.getComponent(cc.ProgressBar).progress += speed;
            if (pg.getComponent(cc.ProgressBar).progress >= 1) {
                pg.getComponent(cc.ProgressBar).progress = 1;
                _this.unscheduleAllCallbacks();
                cc.director.loadScene("hall");
            }
        }, speed);
    };
    startGameLayer.prototype.onChange = function () {
        var border = this.checkBtn.getChildByName("border");
        border.children[0].active = !border.children[0].active;
        this.isPolicy = !this.isPolicy;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
    };
    startGameLayer.prototype.closePage = function () {
        this.page.active = false;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
    };
    startGameLayer.prototype.onDestroy = function () {
        this.checkBtn.getChildByName("title").off(cc.Node.EventType.TOUCH_END);
        this.checkBtn.getChildByName("border").off(cc.Node.EventType.TOUCH_END);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTdGFydEdhbWVMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFDeEMsb0NBQStCO0FBRXpCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBd0dDO1FBckdHLGtCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUdsQyxjQUFRLEdBQVcsSUFBSSxDQUFBO1FBR3ZCLFVBQUksR0FBVyxJQUFJLENBQUE7UUFHbkIsZ0JBQVUsR0FBVyxJQUFJLENBQUE7UUFFakIsY0FBUSxHQUFXLEtBQUssQ0FBQTtRQUVoQyxnQkFBVSxHQUFhLElBQUksQ0FBQzs7SUF3RmhDLENBQUM7SUF0RkcsOEJBQUssR0FBTDtRQUFBLGlCQTBCQztRQXpCRyxJQUFHLENBQUMscUJBQVcsQ0FBQyxlQUFlLEVBQUU7WUFDN0IsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFX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ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgdXRpbCBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRHYW1lTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogW2NjLkF1ZGlvQ2xpcF19KVxyXG4gICAgYXVkaW9SZXNMaXN0OiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hlY2tCdG46Y2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBhZ2U6Y2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZGluZ1BhZ2U6Y2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBwcml2YXRlIGlzUG9saWN5OmJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIHRpdGxlVHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBpZighRGF0YU1hbmFnZXIuY3VyU291bmRJc0Nsb3NlKSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0J0bi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8qKueUn+aIkOeUqOaIt0lEICovXHJcbiAgICAgICAgaWYoRGF0YU1hbmFnZXIudXNlcklkID09IFwiMTAwODZcIil7XHJcbiAgICAgICAgICAgbGV0IG5ld1VzZXJJZDpzdHJpbmcgPSAnJ1xyXG4gICAgICAgICAgIGZvcihsZXQgaT0wO2k8RGF0YU1hbmFnZXIudXNlcklkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbmV3VXNlcklkICs9IHV0aWwuZ2V0UmFuZG9tKDAsOSlcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgRGF0YU1hbmFnZXIudXNlcklkID0gbmV3VXNlcklkXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZGluZ1BhZ2UuZ2V0Q2hpbGRCeU5hbWUoJ3BnJykuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcyA9IDBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHN3aXRjaFNjZW5lKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNQb2xpY3kpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2RpbmdQYWdlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zdGFydExvZGluZygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlVHdlZW4gJiYgdGhpcy50aXRsZVR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgdGl0bGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSkuY29sb3IgPSBjYy5jb2xvcigwLDAsMCwyNTUpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlVHdlZW4gPSB1dGlsLnR3ZWVuVXBkYXRlKDAuMywgKHJhdGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29scm9OdW0gPSAyNTUgLSByYXRpbyAqIDI1NSAqIDI7XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSkuY29sb3IgPSBjYy5jb2xvcihjb2xyb051bSxjb2xyb051bSxjb2xyb051bSwyNTUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jaGVja0J0bilcclxuICAgICAgICAgICAgLy8gICAgIC50bygwLjEse3Bvc2l0aW9uOmNjLnYzKHRoaXMuY2hlY2tCdG4ucG9zaXRpb24ueCx0aGlzLmNoZWNrQnRuLnBvc2l0aW9uLnkgKyA1LDEpfSlcclxuICAgICAgICAgICAgLy8gICAgIC50bygwLjEse3Bvc2l0aW9uOmNjLnYzKHRoaXMuY2hlY2tCdG4ucG9zaXRpb24ueCx0aGlzLmNoZWNrQnRuLnBvc2l0aW9uLnkgLSA1LDEpfSlcclxuICAgICAgICAgICAgLy8gICAgIC5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAvKirlvIDlkK/liqDovb3pobXpnaIgKi9cclxuICAgIHN0YXJ0TG9kaW5nKCl7XHJcbiAgICAgICAgbGV0IHBnID0gdGhpcy5sb2RpbmdQYWdlLmdldENoaWxkQnlOYW1lKFwicGdcIilcclxuICAgICAgICBsZXQgc3BlZWQgPSAwLjAyXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xyXG4gICAgICAgICAgICBwZy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzICs9IHNwZWVkXHJcbiAgICAgICAgICAgIGlmKHBnLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgPj0gMSl7XHJcbiAgICAgICAgICAgICAgICBwZy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxzcGVlZClcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlKCl7XHJcbiAgICAgICAgbGV0IGJvcmRlciA9IHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJib3JkZXJcIilcclxuICAgICAgICAgICAgYm9yZGVyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9ICFib3JkZXIuY2hpbGRyZW5bMF0uYWN0aXZlIFxyXG4gICAgICAgICAgICB0aGlzLmlzUG9saWN5ID0gIXRoaXMuaXNQb2xpY3lcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQYWdlKCl7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKVxyXG4gICAgICAgIHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJib3JkZXJcIikub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORClcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIFxyXG59XHJcbiJdfQ==