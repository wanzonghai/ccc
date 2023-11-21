"use strict";
cc._RF.push(module, '79f41Y4MNRPKK6EgrncSreh', 'JumpStr');
// script/JumpStr.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.str = "";
        _this.fontSize = 0;
        _this.aniTime = 0;
        // @property({type: cc.Color, tooltip: "描边颜色"})
        // oulineColor: cc.Color = cc.color(255,255,255);
        _this.oulineWidth = 1;
        _this.isOulin = true;
        _this.oulineColor = cc.color(0, 0, 0);
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        var Layout = this.node.addComponent(cc.Layout);
        Layout.type = cc.Layout.Type.HORIZONTAL;
        Layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        for (var i = 0; i < this.str.length; i++) {
            var str = this.str[i];
            var labelNode = new cc.Node();
            var label = labelNode.addComponent(cc.Label);
            if (this.isOulin) {
                var labelOutLine = labelNode.addComponent(cc.LabelOutline);
                labelOutLine.color = this.oulineColor;
                labelOutLine.width = this.oulineWidth;
            }
            label.lineHeight = this.fontSize;
            label.string = str;
            label.fontSize = this.fontSize;
            this.node.addChild(labelNode);
        }
        this.playStrJump();
        this.schedule(function () {
            _this.playStrJump();
        }, this.aniTime * this.str.length / 2 + 0.2);
    };
    NewClass.prototype.playStrJump = function () {
        var _this = this;
        var jumpTime = this.aniTime / 2;
        var strIndex = 0;
        var jumpStr = function (labelNode) {
            cc.tween(labelNode)
                .sequence(cc.tween().to(jumpTime, { y: _this.fontSize / 2 }), cc.tween().to(jumpTime / 4 * 3, { y: -_this.fontSize / 3 }), cc.tween().to(jumpTime / 4, { y: 0 }))
                // .repeatForever()
                .start();
            if (strIndex < _this.node.children.length - 1) { // 未到最后一个字符
                strIndex++;
                _this.scheduleOnce(function () {
                    jumpStr(_this.node.children[strIndex]);
                }, jumpTime / 2);
            }
        };
        jumpStr(this.node.children[strIndex]);
    };
    __decorate([
        property({ tooltip: "需要跳动的字符串" })
    ], NewClass.prototype, "str", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "字符大小" })
    ], NewClass.prototype, "fontSize", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "单个字符跳动时间" })
    ], NewClass.prototype, "aniTime", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "描边宽度" })
    ], NewClass.prototype, "oulineWidth", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();