
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxJdGVtTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlDQztRQTlCRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBSXRCLFFBQVE7UUFDRCxZQUFNLEdBQVUsQ0FBQyxDQUFBO1FBRXhCLFlBQVk7UUFDTCxlQUFTLEdBQVUsQ0FBQyxDQUFDLENBQUE7O0lBc0JoQyxDQUFDO0lBbkJHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsU0FBUztJQUNGLHVCQUFJLEdBQVgsVUFBWSxHQUFXLEVBQUMsUUFBZTtRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtRQUN6QixJQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUM7WUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBSSxFQUFFLENBQUE7U0FDMUI7YUFBSTtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUE7U0FDL0I7SUFJTCxDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0c7SUFITCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUM1QjtJQUFELGVBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBaUNqRDtrQkFqQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgdXRpbCBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGltZ1NwOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgXHJcblxyXG4gICAgLyoq57G75Z6LICovXHJcbiAgICBwdWJsaWMgaXRlbUlkOm51bWJlciA9IDBcclxuXHJcbiAgICAvKirlvZPliY3oioLngrnkvY3nva4gKi9cclxuICAgIHB1YmxpYyBpdGVtSW5kZXg6bnVtYmVyID0gLTFcclxuICAgXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5Yid5aeL5YyWICovXHJcbiAgICBwdWJsaWMgaW5pdChudW06IG51bWJlcixwb3NJbmRleDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXRlbUlkID0gbnVtO1xyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gcG9zSW5kZXhcclxuICAgICAgICBpZihudW0gPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nU3Auc3RyaW5nID0gICcnXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nU3Auc3RyaW5nID0gbnVtICsgJydcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG59XHJcbiJdfQ==