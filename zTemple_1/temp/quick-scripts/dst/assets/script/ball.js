
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d2f7xScXlG8q5KMF2ZZrit', 'ball');
// script/ball.ts

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
var define_1 = require("./util/define");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ballNode = /** @class */ (function (_super) {
    __extends(ballNode, _super);
    function ballNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.genType = define_1.ItemType.None;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ballNode.prototype.start = function () {
        // cc.director.getCollisionManager().enabled = true
    };
    ballNode.prototype.onCollisionEnter = function (content, self, other) {
        console.log("sssss");
        var node = self.node;
        node.scale = 0.6;
        DataManager_1.default.addScord(30);
        this.node.getComponent(cc.Widget);
    };
    ballNode = __decorate([
        ccclass
    ], ballNode);
    return ballNode;
}(cc.Component));
exports.default = ballNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLDZDQUF3QztBQUV4Qyx3Q0FBeUM7QUFFbkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvQkM7UUFqQlUsYUFBTyxHQUFZLGlCQUFRLENBQUMsSUFBSSxDQUFBOztJQWlCM0MsQ0FBQztJQWZHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLG1EQUFtRDtJQUN2RCxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLE9BQU8sRUFBQyxJQUFJLEVBQUMsS0FBSztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7UUFDaEIscUJBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFsQmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvQjVCO0lBQUQsZUFBQztDQXBCRCxBQW9CQyxDQXBCcUMsRUFBRSxDQUFDLFNBQVMsR0FvQmpEO2tCQXBCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVMYXllciBmcm9tIFwiLi9HYW1lTGF5ZXJcIjtcclxuaW1wb3J0IHsgSXRlbVR5cGUgfSBmcm9tIFwiLi91dGlsL2RlZmluZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBiYWxsTm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICBcclxuICAgIHB1YmxpYyBnZW5UeXBlOkl0ZW1UeXBlID0gSXRlbVR5cGUuTm9uZVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWVcclxuICAgIH1cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIoY29udGVudCxzZWxmLG90aGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3Nzc3NcIik7XHJcbiAgICAgIGxldCBub2RlOmNjLk5vZGUgPSBzZWxmLm5vZGVcclxuICAgICAgbm9kZS5zY2FsZSA9IDAuNlxyXG4gICAgICBEYXRhTWFuYWdlci5hZGRTY29yZCgzMClcclxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=