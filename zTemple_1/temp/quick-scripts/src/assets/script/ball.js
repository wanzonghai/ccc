"use strict";
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