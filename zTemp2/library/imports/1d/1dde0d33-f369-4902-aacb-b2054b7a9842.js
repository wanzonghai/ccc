"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemNode = /** @class */ (function (_super) {
    __extends(ItemNode, _super);
    function ItemNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imgSp = null;
        /**类型 */
        _this.itemId = 0;
        /**当前节点位置 */
        _this.itemIndex = -1;
        return _this;
    }
    ItemNode.prototype.start = function () {
    };
    /**初始化 */
    ItemNode.prototype.init = function (num, posIndex) {
        this.itemId = num;
        this.itemIndex = posIndex;
        if (num == 0) {
            this.imgSp.string = '';
        }
        else {
            this.imgSp.string = num + '';
        }
    };
    __decorate([
        property(cc.Label)
    ], ItemNode.prototype, "imgSp", void 0);
    ItemNode = __decorate([
        ccclass
    ], ItemNode);
    return ItemNode;
}(cc.Component));
exports.default = ItemNode;

cc._RF.pop();