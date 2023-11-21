
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
        _this.imgSp = null;
        _this.imgSpArr = [];
        //球类
        _this.itemId = 0;
        _this.movingTime = 0;
        _this.itemIndex = -1;
        return _this;
        // update (dt) {}
    }
    ItemNode.prototype.start = function () {
    };
    /**初始化 */
    ItemNode.prototype.init = function (num, i) {
        this.itemId = num;
        this.itemIndex = i;
        this.imgSp.spriteFrame = this.imgSpArr[num];
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
    ], ItemNode.prototype, "imgSp", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ItemNode.prototype, "imgSpArr", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxJdGVtTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRixvQ0FBK0I7QUFFekIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxRUM7UUFsRUcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQW9CLEVBQUUsQ0FBQTtRQUU5QixJQUFJO1FBQ0csWUFBTSxHQUFVLENBQUMsQ0FBQTtRQUVoQixnQkFBVSxHQUFVLENBQUMsQ0FBQTtRQUV0QixlQUFTLEdBQVUsQ0FBQyxDQUFDLENBQUE7O1FBdUQ1QixpQkFBaUI7SUFDckIsQ0FBQztJQXJERyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELFNBQVM7SUFDRix1QkFBSSxHQUFYLFVBQVksR0FBVyxFQUFDLENBQVE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQyxrQ0FBa0M7SUFDdEMsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxRQUFnQixFQUFDLFNBQWlCO1FBQXpDLGlCQXFCQztRQXBCRyxJQUFJLElBQUksR0FBRyxjQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtRQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDNUMsSUFBSSxHQUFHLEdBQVUsQ0FBQyxDQUFBO1FBQ2xCLElBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQztZQUNuQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDWDthQUFJO1lBQ0QsR0FBRyxHQUFHLENBQUMsQ0FBQTtTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO1FBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLENBQUM7YUFDdkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLFVBQVUsSUFBRyxDQUFDLENBQUE7WUFDbkIsSUFBRyxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBQztnQkFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUMsU0FBUyxDQUFDLENBQUE7YUFDbEM7aUJBQUk7Z0JBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUM5QjtRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFDRCw4QkFBVyxHQUFYLFVBQVksU0FBaUI7UUFBN0IsaUJBT0M7UUFORyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsUUFBUSxFQUFDLENBQUM7YUFDbkMsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN2QixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQTtJQUNaLENBQUM7SUFFTSxzQ0FBbUIsR0FBMUIsVUFBMkIsSUFBWTtRQUNuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQTtRQUM1QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsR0FBRyxjQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDbkYsSUFBSSxDQUFDLEdBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3JGLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUE3REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs4Q0FDRztJQU5iLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxRTVCO0lBQUQsZUFBQztDQXJFRCxBQXFFQyxDQXJFcUMsRUFBRSxDQUFDLFNBQVMsR0FxRWpEO2tCQXJFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFdmVudElkLCBJdGVtVHlwZSB9IGZyb20gXCIuL3V0aWwvZGVmaW5lXCI7XHJcbmltcG9ydCBFdmVudE1nciBmcm9tIFwiLi91dGlsL2V2ZW50L0V2ZW50TWdyXCI7XHJcbmltcG9ydCB1dGlsIGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtTm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGltZ1NwOmNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBpbWdTcEFycjpjYy5TcHJpdGVGcmFtZVtdID0gW11cclxuXHJcbiAgICAvL+eQg+exu1xyXG4gICAgcHVibGljIGl0ZW1JZDpudW1iZXIgPSAwXHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZpbmdUaW1lOm51bWJlciA9IDBcclxuXHJcbiAgICBwdWJsaWMgaXRlbUluZGV4Om51bWJlciA9IC0xXHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuWIneWni+WMliAqL1xyXG4gICAgcHVibGljIGluaXQobnVtOiBudW1iZXIsaTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXRlbUlkID0gbnVtO1xyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gaVxyXG4gICAgICAgIHRoaXMuaW1nU3Auc3ByaXRlRnJhbWUgPSB0aGlzLmltZ1NwQXJyW251bV1cclxuICAgICAgICAvLyB0aGlzLm1vdmluZyhmaXNoWm9uZSxzdGFydE5vZGUpXHJcbiAgICB9XHJcbiAgICBtb3ZpbmcoZmlzaFpvbmU6Y2MuTm9kZSxzdGFydE5vZGU6Y2MuTm9kZSl7XHJcbiAgICAgICAgbGV0IHRpbWUgPSB1dGlsLmdldFJhbmRvbSgxLDMpXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Qb2ludChmaXNoWm9uZSlcclxuICAgICAgICBsZXQgZGlyOm51bWJlciA9IDFcclxuICAgICAgICBpZihwb3MueCA+IHRoaXMubm9kZS54KXtcclxuICAgICAgICAgICAgZGlyID0gLTFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlyID0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gZGlyXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8odGltZSx7cG9zaXRpb246cG9zfSlcclxuICAgICAgICAgICAgLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVGltZSArPTFcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubW92aW5nVGltZSA8IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nKGZpc2hab25lLHN0YXJ0Tm9kZSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR29pbmdEZXN0b3koc3RhcnROb2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgR29pbmdEZXN0b3kob3ZpbmdOb2RlOmNjLk5vZGUpe1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAudG8oMSx7cG9zaXRpb246b3ZpbmdOb2RlLnBvc2l0aW9ufSlcclxuICAgICAgICAuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbVBvaW50KG5vZGU6Y2MuTm9kZSl7XHJcbiAgICAgICAgbGV0IGhhbGZXaWR0aCA9IG5vZGUud2lkdGgvMiBcclxuICAgICAgICBsZXQgaGFsZkhlaWdodCA9IG5vZGUuaGVpZ2h0LzJcclxuICAgICAgICBsZXQgeCA9IHV0aWwuZ2V0UmFuZG9tKG5vZGUucG9zaXRpb24ueCAtIGhhbGZXaWR0aCxub2RlLnBvc2l0aW9uLnggKyBoYWxmV2lkdGggKyAxKVxyXG4gICAgICAgIGxldCB5ID0gdXRpbC5nZXRSYW5kb20obm9kZS5wb3NpdGlvbi55IC0gaGFsZkhlaWdodCxub2RlLnBvc2l0aW9uLnkgKyBoYWxmSGVpZ2h0ICsgMSlcclxuICAgICAgICByZXR1cm4gY2MudjMoeCx5LDApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==