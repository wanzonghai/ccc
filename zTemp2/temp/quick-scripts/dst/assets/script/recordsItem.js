
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/recordsItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a448MnHPxEzbcjTuFPPutO', 'recordsItem');
// script/recordsItem.ts

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
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var recordItem = /** @class */ (function (_super) {
    __extends(recordItem, _super);
    function recordItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topSp = null;
        _this.topLabel = null;
        _this.userName = null;
        _this.goldNum = null;
        _this.imgSpArr = [];
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.TipuserName = ['Thor', 'FireKing', 'ShadowAssassin', 'WildWolf', 'GalaxyPrincess', 'EyeOfTheStorm', 'Magician', 'MysteriousSword', 'AngelWings', 'FrostHeart', 'DragonSoul', 'Starlight', 'GhostHunter', 'SoulSong', 'Ares', 'SnowflakeDance', 'MarsExplorer', 'DreamTrip', 'Sniper', 'RocketMan'];
        return _this;
        // update (dt) {}
    }
    recordItem.prototype.start = function () {
    };
    /**初始化 */
    recordItem.prototype.init = function (index) {
        if (index <= 3) {
            this.topSp.active = true;
            this.topLabel.active = false;
            this.topSp.getComponent(cc.Sprite).spriteFrame = this.imgSpArr[index - 1];
        }
        else {
            this.topSp.active = false;
            this.topLabel.active = true;
            this.topLabel.getComponent(cc.Label).string = index + '';
        }
        var name = this.TipuserName[util_1.default.getRandom(0, this.TipuserName.length - 1)];
        this.userName.getComponent(cc.Label).string = name;
        this.goldNum.getComponent(cc.Label).string = 99999 - (index * 100) + '';
    };
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "topSp", void 0);
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "topLabel", void 0);
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "userName", void 0);
    __decorate([
        property(cc.Node)
    ], recordItem.prototype, "goldNum", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], recordItem.prototype, "imgSpArr", void 0);
    recordItem = __decorate([
        ccclass
    ], recordItem);
    return recordItem;
}(cc.Component));
exports.default = recordItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyZWNvcmRzSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixvQ0FBK0I7QUFFekIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUEyQ0M7UUF4Q0csV0FBSyxHQUFXLElBQUksQ0FBQztRQUdyQixjQUFRLEdBQVcsSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQW9CLEVBQUUsQ0FBQTtRQUU5Qix3QkFBd0I7UUFFeEIsZUFBZTtRQUVQLGlCQUFXLEdBQUcsQ0FBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsQ0FBQTs7UUFxQnZSLGlCQUFpQjtJQUNyQixDQUFDO0lBcEJHLDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsU0FBUztJQUNULHlCQUFJLEdBQUosVUFBSyxLQUFZO1FBQ2IsSUFBRyxLQUFLLElBQUcsQ0FBQyxFQUFDO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFFLEtBQUssQ0FBQTtZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQzVFO2FBQUk7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQTtTQUMzRDtRQUNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDekUsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dEQUNHO0lBZmIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTJDOUI7SUFBRCxpQkFBQztDQTNDRCxBQTJDQyxDQTNDdUMsRUFBRSxDQUFDLFNBQVMsR0EyQ25EO2tCQTNDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgdXRpbCBmcm9tIFwiLi91dGlsL3V0aWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWNvcmRJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRvcFNwOmNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdG9wTGFiZWw6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1c2VyTmFtZTpjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdvbGROdW06Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpbWdTcEFycjpjYy5TcHJpdGVGcmFtZVtdID0gW11cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBwcml2YXRlIFRpcHVzZXJOYW1lID0gWydUaG9yJywnRmlyZUtpbmcnLCdTaGFkb3dBc3Nhc3NpbicsJ1dpbGRXb2xmJywnR2FsYXh5UHJpbmNlc3MnLCdFeWVPZlRoZVN0b3JtJywnTWFnaWNpYW4nLCdNeXN0ZXJpb3VzU3dvcmQnLCdBbmdlbFdpbmdzJywnRnJvc3RIZWFydCcsJ0RyYWdvblNvdWwnLCdTdGFybGlnaHQnLCdHaG9zdEh1bnRlcicsJ1NvdWxTb25nJywnQXJlcycsJ1Nub3dmbGFrZURhbmNlJywnTWFyc0V4cGxvcmVyJywnRHJlYW1UcmlwJywnU25pcGVyJywnUm9ja2V0TWFuJ11cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICAvKirliJ3lp4vljJYgKi9cbiAgICBpbml0KGluZGV4Om51bWJlcil7XG4gICAgICAgIGlmKGluZGV4IDw9Myl7XG4gICAgICAgICAgICB0aGlzLnRvcFNwLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMudG9wTGFiZWwuYWN0aXZlID1mYWxzZVxuICAgICAgICAgICAgdGhpcy50b3BTcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaW1nU3BBcnJbaW5kZXggLSAxXVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMudG9wU3AuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMudG9wTGFiZWwuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy50b3BMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGluZGV4ICsgJydcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuVGlwdXNlck5hbWVbdXRpbC5nZXRSYW5kb20oMCx0aGlzLlRpcHVzZXJOYW1lLmxlbmd0aCAtMSldXG4gICAgICAgIHRoaXMudXNlck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBuYW1lXG4gICAgICAgIHRoaXMuZ29sZE51bS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IDk5OTk5IC0gKGluZGV4KjEwMCkgKyAnJ1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=