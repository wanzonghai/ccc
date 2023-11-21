
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/JumpStr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxKdW1wU3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUZDO1FBOUVHLFNBQUcsR0FBVyxFQUFFLENBQUM7UUFHakIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLCtDQUErQztRQUMvQyxpREFBaUQ7UUFHakQsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFZixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDOztRQTZEL0MsaUJBQWlCO0lBQ3JCLENBQUM7SUExREcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQUEsaUJBeUJDO1FBeEJHLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUVuRCxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7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QUUsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUM7NkNBQzVCO0lBTXBCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDO2lEQUNwQjtJQWZQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRjVCO0lBQUQsZUFBQztDQWpGRCxBQWlGQyxDQWpGcUMsRUFBRSxDQUFDLFNBQVMsR0FpRmpEO2tCQWpGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dG9vbHRpcDogXCLpnIDopoHot7PliqjnmoTlrZfnrKbkuLJcIn0pXG4gICAgc3RyOiBTdHJpbmcgPSBcIlwiO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCLlrZfnrKblpKflsI9cIn0pXG4gICAgZm9udFNpemU6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIuWNleS4quWtl+espui3s+WKqOaXtumXtFwifSlcbiAgICBhbmlUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gQHByb3BlcnR5KHt0eXBlOiBjYy5Db2xvciwgdG9vbHRpcDogXCLmj4/ovrnpopzoibJcIn0pXG4gICAgLy8gb3VsaW5lQ29sb3I6IGNjLkNvbG9yID0gY2MuY29sb3IoMjU1LDI1NSwyNTUpO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCLmj4/ovrnlrr3luqZcIn0pXG4gICAgb3VsaW5lV2lkdGg6IG51bWJlciA9IDE7XG5cbiAgICBwcml2YXRlICBpc091bGluOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgb3VsaW5lQ29sb3I6Y2MuQ29sb3IgPSBjYy5jb2xvcigwLDAsMCk7XG5cblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IExheW91dCA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuTGF5b3V0KTtcblxuICAgICAgICBMYXlvdXQudHlwZSA9IGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw7XG4gICAgICAgIExheW91dC5yZXNpemVNb2RlID0gY2MuTGF5b3V0LlJlc2l6ZU1vZGUuQ09OVEFJTkVSO1xuXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8dGhpcy5zdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdHIgPSB0aGlzLnN0cltpXTtcbiAgICAgICAgICAgIGxldCBsYWJlbE5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbGFiZWxOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZih0aGlzLmlzT3VsaW4pe1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbE91dExpbmUgPSBsYWJlbE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XG4gICAgICAgICAgICAgICAgbGFiZWxPdXRMaW5lLmNvbG9yID0gdGhpcy5vdWxpbmVDb2xvclxuICAgICAgICAgICAgICAgIGxhYmVsT3V0TGluZS53aWR0aCA9IHRoaXMub3VsaW5lV2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gc3RyO1xuICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGxhYmVsTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYXlTdHJKdW1wKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5U3RySnVtcCgpO1xuICAgICAgICB9LCB0aGlzLmFuaVRpbWUqdGhpcy5zdHIubGVuZ3RoIC8gMiArIDAuMik7XG4gICAgfVxuXG4gICAgcGxheVN0ckp1bXAoKSB7XG4gICAgICAgIGxldCBqdW1wVGltZSA9IHRoaXMuYW5pVGltZS8yO1xuICAgICAgICBsZXQgc3RySW5kZXggPSAwO1xuICAgICAgICBsZXQganVtcFN0ciA9IChsYWJlbE5vZGU6IGNjLk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGxhYmVsTm9kZSlcbiAgICAgICAgICAgICAgICAuc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oanVtcFRpbWUsIHt5OiB0aGlzLmZvbnRTaXplLzJ9KSxcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50byhqdW1wVGltZS80KjMsIHt5OiAtdGhpcy5mb250U2l6ZS8zfSksXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oanVtcFRpbWUvNCwge3k6IDB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAvLyAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKHN0ckluZGV4IDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aC0xKSB7IC8vIOacquWIsOacgOWQjuS4gOS4quWtl+esplxuICAgICAgICAgICAgICAgIHN0ckluZGV4Kys7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBqdW1wU3RyKHRoaXMubm9kZS5jaGlsZHJlbltzdHJJbmRleF0pO1xuICAgICAgICAgICAgICAgIH0sIGp1bXBUaW1lLzIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAganVtcFN0cih0aGlzLm5vZGUuY2hpbGRyZW5bc3RySW5kZXhdKTtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=