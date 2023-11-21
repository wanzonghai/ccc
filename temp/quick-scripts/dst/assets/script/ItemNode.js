
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ItemNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1dde00z82lJAqrLsgVLephC', 'ItemNode');
// script/ItemNode.ts

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
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemNode = /** @class */ (function (_super) {
    __extends(ItemNode, _super);
    function ItemNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fishSp = null;
        _this.fishType = [];
        //鱼的类型
        _this.itemId = null;
        _this.movingTime = 0;
        return _this;
        // update (dt) {}
    }
    ItemNode.prototype.start = function () {
    };
    /**初始化 */
    ItemNode.prototype.init = function (num, fishZone, startNode) {
        this.itemId = num;
        this.fishSp.spriteFrame = this.fishType[num];
        // this.moving(fishZone,startNode)
    };
    ItemNode.prototype.moving = function (fishZone, startNode) {
        var _this = this;
        var time = util_1.default.getRandom(1, 3);
        var pos = this.generateRandomPoint(fishZone);
        var dir = 1;
        if (pos.x > this.node.x) {
            dir = -1;
        }
        else {
            dir = 1;
        }
        this.node.scaleX = dir;
        cc.tween(this.node)
            .to(time, { position: pos })
            .call(function () {
            _this.movingTime += 1;
            if (_this.movingTime < 3) {
                _this.moving(fishZone, startNode);
            }
            else {
                _this.GoingDestoy(startNode);
            }
        })
            .start();
    };
    ItemNode.prototype.GoingDestoy = function (ovingNode) {
        var _this = this;
        cc.tween(this.node)
            .to(1, { position: ovingNode.position })
            .call(function () {
            _this.node.destroy();
        })
            .start();
    };
    ItemNode.prototype.generateRandomPoint = function (node) {
        var halfWidth = node.width / 2;
        var halfHeight = node.height / 2;
        var x = util_1.default.getRandom(node.position.x - halfWidth, node.position.x + halfWidth + 1);
        var y = util_1.default.getRandom(node.position.y - halfHeight, node.position.y + halfHeight + 1);
        return cc.v3(x, y, 0);
    };
    __decorate([
        property(cc.Sprite)
    ], ItemNode.prototype, "fishSp", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ItemNode.prototype, "fishType", void 0);
    ItemNode = __decorate([
        ccclass
    ], ItemNode);
    return ItemNode;
}(cc.Component));
exports.default = ItemNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxJdGVtTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRixvQ0FBK0I7QUFFekIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrRUM7UUEvREcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQW9CLEVBQUUsQ0FBQTtRQUU5QixNQUFNO1FBQ0MsWUFBTSxHQUFVLElBQUksQ0FBQTtRQUVuQixnQkFBVSxHQUFVLENBQUMsQ0FBQTs7UUFzRDdCLGlCQUFpQjtJQUNyQixDQUFDO0lBcERHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsU0FBUztJQUNGLHVCQUFJLEdBQVgsVUFBWSxHQUFXLEVBQUMsUUFBZ0IsRUFBQyxTQUFpQjtRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVDLGtDQUFrQztJQUN0QyxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFPLFFBQWdCLEVBQUMsU0FBaUI7UUFBekMsaUJBcUJDO1FBcEJHLElBQUksSUFBSSxHQUFHLGNBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM1QyxJQUFJLEdBQUcsR0FBVSxDQUFDLENBQUE7UUFDbEIsSUFBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDO1lBQ25CLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQTtTQUNYO2FBQUk7WUFDRCxHQUFHLEdBQUcsQ0FBQyxDQUFBO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7UUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsQ0FBQzthQUN2QixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsVUFBVSxJQUFHLENBQUMsQ0FBQTtZQUNuQixJQUFHLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFDO2dCQUNuQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsQ0FBQTthQUNsQztpQkFBSTtnQkFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2FBQzlCO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUNELDhCQUFXLEdBQVgsVUFBWSxTQUFpQjtRQUE3QixpQkFPQztRQU5HLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQixFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUMsQ0FBQzthQUNuQyxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3ZCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBQ1osQ0FBQztJQUVNLHNDQUFtQixHQUExQixVQUEyQixJQUFZO1FBQ25DLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFBO1FBQzVCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFBO1FBQzlCLElBQUksQ0FBQyxHQUFHLGNBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNuRixJQUFJLENBQUMsR0FBRyxjQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDckYsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQTFERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzhDQUNHO0lBTmIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtFNUI7SUFBRCxlQUFDO0NBbEVELEFBa0VDLENBbEVxQyxFQUFFLENBQUMsU0FBUyxHQWtFakQ7a0JBbEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50SWQsIEl0ZW1UeXBlIH0gZnJvbSBcIi4vdXRpbC9kZWZpbmVcIjtcclxuaW1wb3J0IEV2ZW50TWdyIGZyb20gXCIuL3V0aWwvZXZlbnQvRXZlbnRNZ3JcIjtcclxuaW1wb3J0IHV0aWwgZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1Ob2RlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZmlzaFNwOmNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBmaXNoVHlwZTpjYy5TcHJpdGVGcmFtZVtdID0gW11cclxuXHJcbiAgICAvL+mxvOeahOexu+Wei1xyXG4gICAgcHVibGljIGl0ZW1JZDpudW1iZXIgPSBudWxsXHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZpbmdUaW1lOm51bWJlciA9IDBcclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5Yid5aeL5YyWICovXHJcbiAgICBwdWJsaWMgaW5pdChudW06IG51bWJlcixmaXNoWm9uZTpjYy5Ob2RlLHN0YXJ0Tm9kZTpjYy5Ob2RlKXtcclxuICAgICAgICB0aGlzLml0ZW1JZCA9IG51bTtcclxuICAgICAgICB0aGlzLmZpc2hTcC5zcHJpdGVGcmFtZSA9IHRoaXMuZmlzaFR5cGVbbnVtXVxyXG4gICAgICAgIC8vIHRoaXMubW92aW5nKGZpc2hab25lLHN0YXJ0Tm9kZSlcclxuICAgIH1cclxuICAgIG1vdmluZyhmaXNoWm9uZTpjYy5Ob2RlLHN0YXJ0Tm9kZTpjYy5Ob2RlKXtcclxuICAgICAgICBsZXQgdGltZSA9IHV0aWwuZ2V0UmFuZG9tKDEsMylcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZW5lcmF0ZVJhbmRvbVBvaW50KGZpc2hab25lKVxyXG4gICAgICAgIGxldCBkaXI6bnVtYmVyID0gMVxyXG4gICAgICAgIGlmKHBvcy54ID4gdGhpcy5ub2RlLngpe1xyXG4gICAgICAgICAgICBkaXIgPSAtMVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkaXIgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSBkaXJcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aW1lLHtwb3NpdGlvbjpwb3N9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdUaW1lICs9MVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5tb3ZpbmdUaW1lIDwgMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcoZmlzaFpvbmUsc3RhcnROb2RlKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Hb2luZ0Rlc3RveShzdGFydE5vZGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBHb2luZ0Rlc3RveShvdmluZ05vZGU6Y2MuTm9kZSl7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgIC50bygxLHtwb3NpdGlvbjpvdmluZ05vZGUucG9zaXRpb259KVxyXG4gICAgICAgIC5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdlbmVyYXRlUmFuZG9tUG9pbnQobm9kZTpjYy5Ob2RlKXtcclxuICAgICAgICBsZXQgaGFsZldpZHRoID0gbm9kZS53aWR0aC8yIFxyXG4gICAgICAgIGxldCBoYWxmSGVpZ2h0ID0gbm9kZS5oZWlnaHQvMlxyXG4gICAgICAgIGxldCB4ID0gdXRpbC5nZXRSYW5kb20obm9kZS5wb3NpdGlvbi54IC0gaGFsZldpZHRoLG5vZGUucG9zaXRpb24ueCArIGhhbGZXaWR0aCArIDEpXHJcbiAgICAgICAgbGV0IHkgPSB1dGlsLmdldFJhbmRvbShub2RlLnBvc2l0aW9uLnkgLSBoYWxmSGVpZ2h0LG5vZGUucG9zaXRpb24ueSArIGhhbGZIZWlnaHQgKyAxKVxyXG4gICAgICAgIHJldHVybiBjYy52Myh4LHksMClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19