
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/DataManager');
require('./assets/script/GameLayer');
require('./assets/script/StartGameLayer');
require('./assets/script/ball');
require('./assets/script/util/Util');
require('./assets/script/util/define');
require('./assets/script/util/event/Event');
require('./assets/script/util/event/EventMgr');
require('./assets/script/util/loaderManager');

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
//------QC-SOURCE-SPLIT------

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var startGameLayer = /** @class */ (function (_super) {
    __extends(startGameLayer, _super);
    function startGameLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    startGameLayer.prototype.switchScene = function () {
        cc.director.loadScene("game");
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTdGFydEdhbWVMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDs7SUFLQSxDQUFDO0lBSEcsb0NBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFKZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQUtsQztJQUFELHFCQUFDO0NBTEQsQUFLQyxDQUwyQyxFQUFFLENBQUMsU0FBUyxHQUt2RDtrQkFMb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRHYW1lTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN3aXRjaFNjZW5lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/event/Event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fa26nTHQ9H/63+pumdJtCd', 'Event');
// script/util/event/Event.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = /** @class */ (function () {
    function Event(eventId, callbak, once, scope) {
        if (scope === void 0) { scope = null; }
        this.EventId = eventId;
        this.Callback = callbak;
        this.Scope = scope;
        if (scope != null || scope != undefined) {
            this.RealCallBakc = callbak.bind(scope);
        }
        else {
            this.RealCallBakc = this.Callback;
        }
        this.Once = once;
    }
    Object.defineProperty(Event.prototype, "Call", {
        get: function () {
            return this.RealCallBakc;
        },
        enumerable: false,
        configurable: true
    });
    Event.prototype.Equel = function (other) {
        return this.EventId == other.EventId && this.Callback == other.Callback && this.Once == other.Once && this.Scope == other.Scope;
    };
    return Event;
}());
exports.default = Event;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxldmVudFxcRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQU9JLGVBQVksT0FBZ0IsRUFBRSxPQUFpQixFQUFFLElBQVksRUFBRSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFlBQWlCO1FBQzVFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELHNCQUFXLHVCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFTSxxQkFBSyxHQUFaLFVBQWEsS0FBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNwSSxDQUFDO0lBQ0wsWUFBQztBQUFELENBMUJBLEFBMEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudElkIH0gZnJvbSBcIi4uL2RlZmluZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50IHtcclxuICAgIHB1YmxpYyBFdmVudElkOiBFdmVudElkO1xyXG4gICAgcHVibGljIENhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIHB1YmxpYyBTY29wZTogYW55O1xyXG4gICAgcHVibGljIE9uY2U6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgUmVhbENhbGxCYWtjOiBGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihldmVudElkOiBFdmVudElkLCBjYWxsYmFrOiBGdW5jdGlvbiwgb25jZTpib29sZWFuLCBzY29wZTogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuRXZlbnRJZCA9IGV2ZW50SWQ7XHJcbiAgICAgICAgdGhpcy5DYWxsYmFjayA9IGNhbGxiYWs7XHJcbiAgICAgICAgdGhpcy5TY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIGlmIChzY29wZSAhPSBudWxsIHx8IHNjb3BlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLlJlYWxDYWxsQmFrYyA9IGNhbGxiYWsuYmluZChzY29wZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5SZWFsQ2FsbEJha2MgPSB0aGlzLkNhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLk9uY2UgPSBvbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgQ2FsbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5SZWFsQ2FsbEJha2M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEVxdWVsKG90aGVyOiBFdmVudCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkV2ZW50SWQgPT0gb3RoZXIuRXZlbnRJZCAmJiB0aGlzLkNhbGxiYWNrID09IG90aGVyLkNhbGxiYWNrICYmIHRoaXMuT25jZSA9PSBvdGhlci5PbmNlICYmIHRoaXMuU2NvcGUgPT0gb3RoZXIuU2NvcGU7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f70fF7V/9I3LW6rm6Y+Vv9', 'DataManager');
// script/DataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager = /** @class */ (function () {
    function DataManager() {
        /** 当前是否游戏运行中 */
        this.curGameIsRun = false;
        /**当前的分数 */
        this._curScord = 0;
        /** 当前局赢分 */
        this.curWinNum = 0;
        /** gameLayer脚本 */
        this.gameLayerScr = null;
        /**初始时间 */
        this.startTime = 30;
        /**当前时间 */
        this._indexTime = 30;
        /**当前游戏是否Layout布局 */
        this._isLayout = true;
        /** 定时器运行方法 */
        this.timerFunc = null;
        /**交换位置系欸但 */
        this.changeNodeIndex = -1;
        this.index = 0;
        /**位置index */
        this.gameIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        /**位置结果 */
        this.gamePos = [0, 0, 0, 0, 0];
    }
    Object.defineProperty(DataManager.prototype, "curScord", {
        get: function () {
            return this._curScord;
        },
        set: function (num) {
            this._curScord = num;
            if (this.gameLayerScr) {
                this.gameLayerScr.updateUserCoin();
            }
        },
        enumerable: false,
        configurable: true
    });
    DataManager.prototype.addScord = function (num) {
        this._curScord += num;
        if (this.gameLayerScr) {
            this.gameLayerScr.updateUserCoin();
            cc.audioEngine.playEffect(this.gameLayerScr[1], false);
        }
    };
    Object.defineProperty(DataManager.prototype, "indexTime", {
        get: function () {
            return this._indexTime;
        },
        set: function (num) {
            this._indexTime = num;
            if (this.gameLayerScr) {
                this.gameLayerScr.updateTimerUi();
                if (num == this.startTime) { // 重新设置事件重置定时器
                    this.gameLayerScr.unschedule(this.timerFunc);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "isLayout", {
        get: function () {
            return this._isLayout;
        },
        set: function (Layout) {
            this._isLayout = Layout;
            this.gameLayerScr.updataLayout();
        },
        enumerable: false,
        configurable: true
    });
    DataManager.prototype.changIndex = function (num) {
        this.index += num;
        if (this.index == 0) {
            this.gameLayerScr.showResult(true);
        }
        this.addScord(100);
        cc.audioEngine.playEffect(this.gameLayerScr.clipArray[2], false);
    };
    DataManager.instance = new DataManager();
    return DataManager;
}());
exports.default = DataManager.instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7UUFHSSxnQkFBZ0I7UUFDaEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsV0FBVztRQUNKLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFFNUIsWUFBWTtRQUNMLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFxQjdCLGtCQUFrQjtRQUNsQixpQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixVQUFVO1FBQ1YsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUV0QixVQUFVO1FBQ1YsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQWdCdkIsb0JBQW9CO1FBQ3BCLGNBQVMsR0FBVyxJQUFJLENBQUM7UUFvQnpCLGNBQWM7UUFDZCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGFBQWE7UUFDYixvQkFBZSxHQUFVLENBQUMsQ0FBQyxDQUFBO1FBRTNCLFVBQUssR0FBVSxDQUFDLENBQUE7UUFFaEIsYUFBYTtRQUNiLGNBQVMsR0FBaUIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRXJELFVBQVU7UUFDVixZQUFPLEdBQWlCLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBRXZDLENBQUM7SUE3RUcsc0JBQVcsaUNBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQVVELFVBQW9CLEdBQUc7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ25DO1FBQ0osQ0FBQzs7O09BZkE7SUFFTSw4QkFBUSxHQUFmLFVBQWdCLEdBQUc7UUFDZixJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQTtRQUNyQixJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3hEO0lBQ0wsQ0FBQztJQWtCRCxzQkFBVyxrQ0FBUzthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBcUIsR0FBRztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2xDLElBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxjQUFjO29CQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ2hEO2FBQ0Q7UUFDSixDQUFDOzs7T0FWQTtJQWVELHNCQUFXLGlDQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7YUFFRCxVQUFvQixNQUFjO1lBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDcEMsQ0FBQzs7O09BTEE7SUFPTSxnQ0FBVSxHQUFqQixVQUFrQixHQUFHO1FBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFBO1FBQ2pCLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUM7WUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNyQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQXhFc0Isb0JBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBd0Z4RCxrQkFBQztDQXpGRCxBQXlGQyxJQUFBO0FBRUQsa0JBQWUsV0FBVyxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGF5ZXIgZnJvbSBcIi4vR2FtZUxheWVyXCI7XHJcblxyXG5jbGFzcyBEYXRhTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlID0gbmV3IERhdGFNYW5hZ2VyKCk7XHJcblxyXG4gICAgLyoqIOW9k+WJjeaYr+WQpua4uOaIj+i/kOihjOS4rSAqL1xyXG4gICAgY3VyR2FtZUlzUnVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq5b2T5YmN55qE5YiG5pWwICovXHJcbiAgICBwdWJsaWMgX2N1clNjb3JkOm51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqIOW9k+WJjeWxgOi1ouWIhiAqL1xyXG4gICAgcHVibGljIGN1cldpbk51bTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGN1clNjb3JkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJTY29yZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkU2NvcmQobnVtKXtcclxuICAgICAgICB0aGlzLl9jdXJTY29yZCArPSBudW1cclxuICAgICAgICBpZih0aGlzLmdhbWVMYXllclNjcikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVMYXllclNjci51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2FtZUxheWVyU2NyWzFdLGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGN1clNjb3JkKG51bSkge1xyXG4gICAgICAgdGhpcy5fY3VyU2NvcmQgPSBudW07XHJcbiAgICAgICBpZih0aGlzLmdhbWVMYXllclNjcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZUxheWVyU2NyLnVwZGF0ZVVzZXJDb2luKCk7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIGdhbWVMYXllcuiEmuacrCAqL1xyXG4gICAgZ2FtZUxheWVyU2NyOiBHYW1lTGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKuWIneWni+aXtumXtCAqL1xyXG4gICAgc3RhcnRUaW1lOm51bWJlciA9IDMwOyAgICAgICAgICBcclxuXHJcbiAgICAvKirlvZPliY3ml7bpl7QgKi9cclxuICAgIF9pbmRleFRpbWU6bnVtYmVyID0gMzA7XHJcblxyXG4gICAgcHVibGljIGdldCBpbmRleFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4VGltZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGluZGV4VGltZShudW0pIHtcclxuICAgICAgIHRoaXMuX2luZGV4VGltZSA9IG51bTtcclxuICAgICAgIGlmKHRoaXMuZ2FtZUxheWVyU2NyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudXBkYXRlVGltZXJVaSgpO1xyXG4gICAgICAgIGlmKG51bSA9PSB0aGlzLnN0YXJ0VGltZSkgeyAvLyDph43mlrDorr7nva7kuovku7bph43nva7lrprml7blmahcclxuICAgICAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudW5zY2hlZHVsZSh0aGlzLnRpbWVyRnVuYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuW9k+WJjea4uOaIj+aYr+WQpkxheW91dOW4g+WxgCAqL1xyXG4gICAgX2lzTGF5b3V0OmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNMYXlvdXQoKTpib29sZWFue1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xheW91dFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaXNMYXlvdXQoTGF5b3V0OmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuX2lzTGF5b3V0ID0gTGF5b3V0XHJcbiAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudXBkYXRhTGF5b3V0KClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdJbmRleChudW0pe1xyXG4gICAgICAgIHRoaXMuaW5kZXggKz0gbnVtXHJcbiAgICAgICAgaWYodGhpcy5pbmRleCA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3Iuc2hvd1Jlc3VsdCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZFNjb3JkKDEwMClcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2FtZUxheWVyU2NyLmNsaXBBcnJheVsyXSxmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICAvKiog5a6a5pe25Zmo6L+Q6KGM5pa55rOVICovXHJcbiAgICB0aW1lckZ1bmMgPSBudWxsO1xyXG5cclxuICAgIC8qKuS6pOaNouS9jee9ruezu+asuOS9hiAqL1xyXG4gICAgY2hhbmdlTm9kZUluZGV4Om51bWJlciA9IC0xXHJcblxyXG4gICAgaW5kZXg6bnVtYmVyID0gMFxyXG5cclxuICAgIC8qKuS9jee9rmluZGV4ICovXHJcbiAgICBnYW1lSW5kZXg6QXJyYXk8bnVtYmVyPiA9IFswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExXVxyXG4gICAgXHJcbiAgICAvKirkvY3nva7nu5PmnpwgKi9cclxuICAgIGdhbWVQb3M6QXJyYXk8bnVtYmVyPiA9IFswLDAsMCwwLDBdXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhTWFuYWdlci5pbnN0YW5jZTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GameLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fa5exMMXFKupMg6i92JxBn', 'GameLayer');
// script/GameLayer.ts

"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("./DataManager");
var Util_1 = require("./util/Util");
var define_1 = require("./util/define");
var loaderManager_1 = require("./util/loaderManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemParentNode = null;
        _this.userCoinNode = null;
        _this.itemNode = null;
        _this.resultNode = null;
        _this.tipNode = null;
        _this.timerNode = null;
        _this.itemSpriteFrameList = [];
        _this.itemParent = null;
        _this.ballNode = null;
        _this.clipArray = [];
        /** 行数 */
        _this.rowNum = 4;
        /** 列数 */
        _this.colNum = 8;
        /** 元素大小 */
        _this.itemSize = cc.size(0, 0);
        /** 元素缩放 */
        _this.itemScale = 0.96;
        /** 元素间距X */
        _this.itemIntervalX = 0;
        /** 元素间距Y */
        _this.itemIntervalY = 0;
        // /** 元素宽高 */
        // private itemSize: cc.Size = cc.size(360, 150);
        /** 元素总量 */
        _this.itemNum = 12;
        /** 元素类别数量 */
        _this.itemTypeNum = 6;
        _this.index = 0;
        _this.iconPf = null;
        return _this;
    }
    GameLayer_1 = GameLayer;
    /**加载卡片 */
    GameLayer.prototype.loadCard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, loaderManager_1.default.getRes("gen", "prefab", cc.Prefab)];
                    case 1:
                        _a.iconPf = _b.sent();
                        if (this.iconPf) {
                            console.log("预制体加载成功！");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GameLayer.prototype.start = function () {
        DataManager_1.default.gameLayerScr = this;
        DataManager_1.default.curWinNum = 0;
        this.updateUserCoin();
        this.updateTimerUi();
        //画格子
        for (var i = 0; i < this.itemSpriteFrameList.length; i++) {
            this.itemSpriteFrameList[i].getRect().width > this.itemSize.width && (this.itemSize.width = this.itemSpriteFrameList[i].getRect().width);
            this.itemSpriteFrameList[i].getRect().height > this.itemSize.height && (this.itemSize.height = this.itemSpriteFrameList[i].getRect().height);
        }
        this.itemParent["startPos"] = cc.v3(this.itemParent.position.x, this.itemParent.position.y);
        this.creatorItemNode();
    };
    /**
     * 创建item节点
    */
    GameLayer.prototype.creatorItemNode = function () {
        for (var i = 0; i < this.rowNum * this.colNum; i++) {
            var itemNode = new cc.Node();
            itemNode.addComponent(cc.Sprite);
            var row = Math.floor(i / this.colNum);
            var col = i % this.colNum;
            var itemWidth = this.itemSize.width * this.itemScale;
            var itemHeight = this.itemSize.height * this.itemScale;
            itemNode.scale = this.itemScale;
            itemNode["curIndex"] = i;
            this.itemParent.addChild(itemNode);
            itemNode.position = cc.v3(itemWidth / 2 + col * itemWidth + col * this.itemIntervalX, itemHeight / 2 + (this.rowNum - row - 1) * itemHeight + (this.rowNum - row - 1) * this.itemIntervalY);
            itemNode["startPos"] = cc.v3(itemWidth / 2 + col * itemWidth + col * this.itemIntervalX, itemHeight / 2 + (this.rowNum - row - 1) * itemHeight + (this.rowNum - row - 1) * this.itemIntervalY);
        }
        this.initGameData();
    };
    /**
    * 初始化节点数据
   */
    GameLayer.prototype.initGameData = function () {
        var curId = 1;
        for (var i = 0; i < this.rowNum * this.colNum; i++) {
            var itemNode = this.itemParent.children[i];
            itemNode["itemId"] = curId;
            itemNode.getComponent(cc.Sprite).spriteFrame = this.itemSpriteFrameList[curId - 1];
            curId = curId == 1 ? 2 : 1;
        }
    };
    /**
     * 游戏内按钮绑定事件
    */
    GameLayer.prototype.btnEvent = function (event) {
        var name = event.target.name;
        switch (name) {
            case "btnStartGame":
                this.playGame();
                break;
            case "btnReturn":
                cc.director.loadScene("startGame");
                DataManager_1.default.curGameIsRun = false;
                this.hideResultNode();
                break;
            case "btNextGame":
            case "btStartOver":
                this.hideResultNode();
                break;
            case "btExit":
                cc.director.loadScene("startGame");
                DataManager_1.default.curGameIsRun = false;
                this.hideResultNode();
                break;
            case "btnHelp":
                this.tipNode.active = true;
                break;
            case "btnCloseHelp":
                this.hideTipNode();
                break;
        }
        cc.audioEngine.playEffect(this.clipArray[0], false);
    };
    /** 开始游戏 */
    GameLayer.prototype.playGame = function () {
        if (DataManager_1.default.curGameIsRun)
            return;
        DataManager_1.default.curGameIsRun = true;
        cc.audioEngine.playEffect(this.clipArray[0], false);
        this.startTimer();
        //创建游戏节点
        // this.creatGameNode()
        console.log("this.itemNode", this.itemNode);
        this.listBall();
        //随机创建障碍物
        this.randObs();
    };
    /**随机创建障碍物 */
    GameLayer.prototype.randObs = function () {
        var _this = this;
        DataManager_1.default.gamePos[0] = Util_1.default.getRandomInt(1, 30);
        DataManager_1.default.gamePos[1] = Util_1.default.getRandomInt(1, 30);
        DataManager_1.default.gamePos[2] = Util_1.default.getRandomInt(1, 30);
        DataManager_1.default.gamePos[3] = Util_1.default.getRandomInt(1, 30);
        DataManager_1.default.gamePos[4] = Util_1.default.getRandomInt(1, 30);
        DataManager_1.default.gamePos.forEach(function (e) {
            _this.itemParentNode.children[e].active = true;
        });
    };
    /**绑定球事件 */
    GameLayer.prototype.listBall = function () {
        var _this = this;
        this.ballNode.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.ballNode["startPos"] = cc.v2(event.getLocation().x, event.getLocation().y);
        });
        this.ballNode.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            var statPos = _this.ballNode["startPos"];
            var endPos = cc.v2(event.getLocation().x, event.getLocation().y);
            var direction = _this.isDirection(statPos, endPos);
            cc.audioEngine.playEffect(_this.clipArray[1], false);
            if (direction) {
                _this.movingBone(_this.ballNode, direction);
            }
        });
    };
    /**滑块移动方向 */
    GameLayer.prototype.movingBone = function (taget, direction) {
        var _this = this;
        var moveindx;
        // console.log("DataManager.index",DataManager.index);
        switch (direction) {
            case define_1.DirectionType.Top:
                console.log("上");
                if (DataManager_1.default.index >= this.colNum) {
                    moveindx = DataManager_1.default.index - this.colNum;
                }
                break;
            case define_1.DirectionType.Bottom:
                console.log("下");
                if (DataManager_1.default.index <= this.rowNum * this.colNum) {
                    moveindx = DataManager_1.default.index + this.colNum;
                }
                break;
            case define_1.DirectionType.Left:
                console.log("左");
                if ((DataManager_1.default.index) % this.colNum >= 0) {
                    moveindx = DataManager_1.default.index - 1;
                    if (moveindx < 0) {
                        moveindx = 0;
                    }
                }
                break;
            case define_1.DirectionType.Right:
                console.log("右");
                if ((DataManager_1.default.index) % this.colNum < this.colNum - 1) {
                    moveindx = DataManager_1.default.index + 1;
                }
                break;
        }
        if (moveindx != undefined && moveindx != DataManager_1.default.gamePos[0] && moveindx != DataManager_1.default.gamePos[1] && moveindx != DataManager_1.default.gamePos[2] && moveindx != DataManager_1.default.gamePos[3] && moveindx != DataManager_1.default.gamePos[4]) {
            cc.tween(taget)
                .to(0.3, { position: this.itemParentNode.children[moveindx].position })
                .call(function () {
                DataManager_1.default.index = moveindx;
                // console.log("DataManager.index",DataManager.index);
                if (DataManager_1.default.index == 31) {
                    _this.showResult(true);
                }
            })
                .start();
        }
        // cc.tween(taget)
    };
    GameLayer.prototype.isDirection = function (startPos, endPos) {
        var direction = define_1.DirectionType.Left;
        var offsetX = Math.abs(endPos.x - startPos.x);
        var offsetY = Math.abs(endPos.y - startPos.y);
        if (offsetX >= offsetY) {
            direction = endPos.x > startPos.x ? define_1.DirectionType.Right : define_1.DirectionType.Left;
        }
        else {
            direction = endPos.y > startPos.y ? define_1.DirectionType.Top : define_1.DirectionType.Bottom;
        }
        return direction;
    };
    /**停止篮筐 */
    GameLayer.prototype.clearTween = function () {
        this.node.stopAllActions();
    };
    /**
     * 开始倒计时
    */
    GameLayer.prototype.startTimer = function () {
        var _this = this;
        DataManager_1.default.timerFunc = function () {
            DataManager_1.default.indexTime--;
            if (DataManager_1.default.indexTime <= 0) {
                cc.audioEngine.playEffect(_this.clipArray[1], false);
                _this.showResult(false);
            }
        };
        this.schedule(DataManager_1.default.timerFunc, 1);
    };
    /**
     * 更新倒计时
    */
    GameLayer.prototype.updateTimerUi = function () {
        this.timerNode.getChildByName("timeText").getComponent(cc.Label).string = "TIME:" + DataManager_1.default.indexTime;
        this.timerNode.getComponent(cc.ProgressBar).progress = DataManager_1.default.indexTime / DataManager_1.default.startTime;
    };
    /**更新Layout布局 */
    GameLayer.prototype.updataLayout = function () {
        if (DataManager_1.default.isLayout) {
            this.itemParentNode.getComponent(cc.Layout).type = cc.Layout.Type.GRID;
        }
        else {
            this.itemParentNode.getComponent(cc.Layout).type = cc.Layout.Type.NONE;
        }
    };
    /**
     * 更新余额
    */
    GameLayer.prototype.updateUserCoin = function () {
        var lableNode = this.userCoinNode.getChildByName("coinLable");
        cc.tween(lableNode)
            .to(0.1, { scale: 1.1 })
            .to(0.1, { scale: 1 })
            .start();
        lableNode.getComponent(cc.Label).string = "SCORE:" + DataManager_1.default.curScord;
    };
    /**结果判断 */
    GameLayer.prototype.showRes = function () {
        if (DataManager_1.default._curScord >= 210) {
            this.showResult(true);
        }
        else {
            // this.showResult(true)
            this.showResult(false);
        }
    };
    /**
     * 展示结果
    */
    GameLayer.prototype.showResult = function (isWin) {
        this.unschedule(DataManager_1.default.timerFunc);
        cc.director.getPhysicsManager().enabled = false;
        cc.director.getCollisionManager().enabled = false;
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
        if (isWin) {
            var winNumLable = cc.find("win/winNum", this.resultNode);
            winNumLable.getComponent(cc.Label).string = "" + DataManager_1.default.curWinNum;
            cc.audioEngine.playEffect(this.clipArray[3], false);
        }
        else {
            cc.audioEngine.playEffect(this.clipArray[4], false);
        }
        var winNode = this.resultNode.getChildByName("win");
        var loseNode = this.resultNode.getChildByName("lose");
        winNode.active = isWin;
        loseNode.active = !isWin;
        this.resultNode.active = true;
    };
    /**
     * 关闭结果展示
    */
    GameLayer.prototype.hideResultNode = function () {
        DataManager_1.default.gamePos = [0, 0, 0, 0, 0];
        DataManager_1.default.index = 0;
        this.resultNode.active = false;
        DataManager_1.default.curGameIsRun = false;
        DataManager_1.default.curWinNum = 0;
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
        this.timerNode.getComponent(cc.ProgressBar).progress = 1;
        cc.director.getPhysicsManager().enabled = false;
        cc.director.getCollisionManager().enabled = false;
        this.clearTween();
        // DataManager.selectPorkerArray[0] = -1
    };
    /**
     * 关闭提示展示
    */
    GameLayer.prototype.hideTipNode = function () {
        this.tipNode.active = false;
    };
    var GameLayer_1;
    GameLayer.instance = new GameLayer_1();
    __decorate([
        property({ type: cc.Node, tooltip: "放置元素的layout" })
    ], GameLayer.prototype, "itemParentNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "用户余额节点" })
    ], GameLayer.prototype, "userCoinNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏节点" })
    ], GameLayer.prototype, "itemNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏结果节点" })
    ], GameLayer.prototype, "resultNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏提示节点" })
    ], GameLayer.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "倒计时节点" })
    ], GameLayer.prototype, "timerNode", void 0);
    __decorate([
        property({ type: [cc.SpriteFrame], tooltip: "元素纹理" })
    ], GameLayer.prototype, "itemSpriteFrameList", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "元素父节点" })
    ], GameLayer.prototype, "itemParent", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "ballNode", void 0);
    __decorate([
        property([cc.AudioClip])
    ], GameLayer.prototype, "clipArray", void 0);
    GameLayer = GameLayer_1 = __decorate([
        ccclass
    ], GameLayer);
    return GameLayer;
}(cc.Component));
exports.default = GameLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLG9DQUErQjtBQUMvQix3Q0FBdUQ7QUFDdkQsc0RBQWlEO0FBRzNDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBZ1hDO1FBM1dHLG9CQUFjLEdBQVksSUFBSSxDQUFBO1FBRzlCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBRzVCLGNBQVEsR0FBVyxJQUFJLENBQUE7UUFHdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFHMUIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUd2QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLHlCQUFtQixHQUFxQixFQUFFLENBQUM7UUFHM0MsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFXLElBQUksQ0FBQTtRQUd2QixlQUFTLEdBQWtCLEVBQUUsQ0FBQTtRQUU3QixTQUFTO1FBQ1QsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUVYLFNBQVM7UUFDVCxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVgsV0FBVztRQUNYLGNBQVEsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsQyxXQUFXO1FBQ1gsZUFBUyxHQUFXLElBQUksQ0FBQztRQUV6QixZQUFZO1FBQ1osbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFFMUIsWUFBWTtRQUNaLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLGNBQWM7UUFDZCxpREFBaUQ7UUFFakQsV0FBVztRQUNYLGFBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsYUFBYTtRQUNi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QUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxRQUFRLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUwsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FFbE07UUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVBOztLQUVDO0lBQ0QsZ0NBQVksR0FBWjtRQUNHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUMz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O1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZ1g3QjtJQUFELGdCQUFDO0NBaFhELEFBZ1hDLENBaFhzQyxFQUFFLENBQUMsU0FBUyxHQWdYbEQ7a0JBaFhvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBVdGlsIGZyb20gXCIuL3V0aWwvVXRpbFwiO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb25UeXBlLCBFdmVudElkIH0gZnJvbSBcIi4vdXRpbC9kZWZpbmVcIjtcclxuaW1wb3J0IGxvYWRlck1hbmFnZXIgZnJvbSBcIi4vdXRpbC9sb2FkZXJNYW5hZ2VyXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UgPSBuZXcgR2FtZUxheWVyKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIuaUvue9ruWFg+e0oOeahGxheW91dFwifSlcclxuICAgIGl0ZW1QYXJlbnROb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLnlKjmiLfkvZnpop3oioLngrlcIn0pXHJcbiAgICB1c2VyQ29pbk5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLk5vZGUsdG9vbHRpcDpcIua4uOaIj+iKgueCuVwifSlcclxuICAgIGl0ZW1Ob2RlOmNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIua4uOaIj+e7k+aenOiKgueCuVwifSlcclxuICAgIHJlc3VsdE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIua4uOaIj+aPkOekuuiKgueCuVwifSlcclxuICAgIHRpcE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLlgJLorqHml7boioLngrlcIn0pXHJcbiAgICB0aW1lck5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLCB0b29sdGlwOiBcIuWFg+e0oOe6ueeQhlwifSlcclxuICAgIGl0ZW1TcHJpdGVGcmFtZUxpc3Q6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIuWFg+e0oOeItuiKgueCuVwifSlcclxuICAgIGl0ZW1QYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFsbE5vZGU6Y2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLkF1ZGlvQ2xpcF0pXHJcbiAgICBjbGlwQXJyYXk6Y2MuQXVkaW9DbGlwW10gPSBbXVxyXG5cclxuICAgIC8qKiDooYzmlbAgKi9cclxuICAgIHJvd051bSA9IDQ7XHJcblxyXG4gICAgLyoqIOWIl+aVsCAqL1xyXG4gICAgY29sTnVtID0gODtcclxuXHJcbiAgICAvKiog5YWD57Sg5aSn5bCPICovXHJcbiAgICBpdGVtU2l6ZTogY2MuU2l6ZSA9IGNjLnNpemUoMCwgMCk7XHJcblxyXG4gICAgLyoqIOWFg+e0oOe8qeaUviAqL1xyXG4gICAgaXRlbVNjYWxlOiBudW1iZXIgPSAwLjk2O1xyXG5cclxuICAgIC8qKiDlhYPntKDpl7Tot51YICovXHJcbiAgICBpdGVtSW50ZXJ2YWxYOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKiDlhYPntKDpl7Tot51ZICovXHJcbiAgICBpdGVtSW50ZXJ2YWxZOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIC8qKiDlhYPntKDlrr3pq5ggKi9cclxuICAgIC8vIHByaXZhdGUgaXRlbVNpemU6IGNjLlNpemUgPSBjYy5zaXplKDM2MCwgMTUwKTtcclxuXHJcbiAgICAvKiog5YWD57Sg5oC76YePICovXHJcbiAgICBpdGVtTnVtOiBudW1iZXIgPSAxMjtcclxuXHJcbiAgICAvKiog5YWD57Sg57G75Yir5pWw6YePICovXHJcbiAgICBpdGVtVHlwZU51bTogbnVtYmVyID0gNjtcclxuXHJcbiAgICBwdWJsaWMgaW5kZXg6bnVtYmVyID0gMFxyXG5cclxuICAgIHB1YmxpYyBpY29uUGY6Y2MuUHJlZmFiID0gbnVsbFxyXG5cclxuICAgICAvKirliqDovb3ljaHniYcgKi9cclxuICAgIGFzeW5jIGxvYWRDYXJkKCl7XHJcbiAgICAgICAgdGhpcy5pY29uUGYgPSAgYXdhaXQgbG9hZGVyTWFuYWdlci5nZXRSZXMoXCJnZW5cIixcInByZWZhYlwiLGNjLlByZWZhYilcclxuICAgICAgICBpZih0aGlzLmljb25QZil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6aKE5Yi25L2T5Yqg6L295oiQ5Yqf77yBXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkgeyBcclxuICAgICAgICBEYXRhTWFuYWdlci5nYW1lTGF5ZXJTY3IgPSB0aGlzO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1cldpbk51bSA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpXHJcblxyXG4gICAgICAgIC8v55S75qC85a2QXHJcbiAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5pdGVtU3ByaXRlRnJhbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVNwcml0ZUZyYW1lTGlzdFtpXS5nZXRSZWN0KCkud2lkdGggPiB0aGlzLml0ZW1TaXplLndpZHRoICYmICh0aGlzLml0ZW1TaXplLndpZHRoID0gdGhpcy5pdGVtU3ByaXRlRnJhbWVMaXN0W2ldLmdldFJlY3QoKS53aWR0aClcclxuICAgICAgICAgICAgdGhpcy5pdGVtU3ByaXRlRnJhbWVMaXN0W2ldLmdldFJlY3QoKS5oZWlnaHQgPiB0aGlzLml0ZW1TaXplLmhlaWdodCAmJiAodGhpcy5pdGVtU2l6ZS5oZWlnaHQgPSB0aGlzLml0ZW1TcHJpdGVGcmFtZUxpc3RbaV0uZ2V0UmVjdCgpLmhlaWdodClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVtUGFyZW50W1wic3RhcnRQb3NcIl0gPSBjYy52Myh0aGlzLml0ZW1QYXJlbnQucG9zaXRpb24ueCwgdGhpcy5pdGVtUGFyZW50LnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRvckl0ZW1Ob2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7ppdGVt6IqC54K5XHJcbiAgICAqL1xyXG4gICAgY3JlYXRvckl0ZW1Ob2RlKCkge1xyXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMucm93TnVtICogdGhpcy5jb2xOdW07IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBpdGVtTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoaSAvIHRoaXMuY29sTnVtKTtcclxuICAgICAgICAgICAgbGV0IGNvbCA9IGkgJSB0aGlzLmNvbE51bTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1XaWR0aCA9IHRoaXMuaXRlbVNpemUud2lkdGggKiB0aGlzLml0ZW1TY2FsZTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1IZWlnaHQgPSB0aGlzLml0ZW1TaXplLmhlaWdodCAqIHRoaXMuaXRlbVNjYWxlO1xyXG5cclxuICAgICAgICAgICAgaXRlbU5vZGUuc2NhbGUgPSB0aGlzLml0ZW1TY2FsZVxyXG4gICAgICAgICAgICBpdGVtTm9kZVtcImN1ckluZGV4XCJdID0gaTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtUGFyZW50LmFkZENoaWxkKGl0ZW1Ob2RlKTtcclxuICAgICAgICAgICAgaXRlbU5vZGUucG9zaXRpb24gPSBjYy52MyhpdGVtV2lkdGggLyAyICsgY29sICogaXRlbVdpZHRoICsgY29sICogdGhpcy5pdGVtSW50ZXJ2YWxYLCBpdGVtSGVpZ2h0IC8gMiArICh0aGlzLnJvd051bSAtIHJvdyAtIDEpICogaXRlbUhlaWdodCArICh0aGlzLnJvd051bSAtIHJvdyAtIDEpICogdGhpcy5pdGVtSW50ZXJ2YWxZKTtcclxuICAgICAgICAgICAgaXRlbU5vZGVbXCJzdGFydFBvc1wiXSA9IGNjLnYzKGl0ZW1XaWR0aCAvIDIgKyBjb2wgKiBpdGVtV2lkdGggKyBjb2wgKiB0aGlzLml0ZW1JbnRlcnZhbFgsIGl0ZW1IZWlnaHQgLyAyICsgKHRoaXMucm93TnVtIC0gcm93IC0gMSkgKiBpdGVtSGVpZ2h0ICsgKHRoaXMucm93TnVtIC0gcm93IC0gMSkgKiB0aGlzLml0ZW1JbnRlcnZhbFkpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluaXRHYW1lRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgICAvKipcclxuICAgICAqIOWIneWni+WMluiKgueCueaVsOaNrlxyXG4gICAgKi9cclxuICAgICBpbml0R2FtZURhdGEoKSB7XHJcbiAgICAgICAgbGV0IGN1cklkID0gMTtcclxuICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnJvd051bSAqIHRoaXMuY29sTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlID0gdGhpcy5pdGVtUGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpdGVtTm9kZVtcIml0ZW1JZFwiXSA9IGN1cklkO1xyXG4gICAgICAgICAgICBpdGVtTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaXRlbVNwcml0ZUZyYW1lTGlzdFtjdXJJZCAtIDFdO1xyXG4gICAgICAgICAgICBjdXJJZCA9IGN1cklkID09IDEgPyAyIDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/lhoXmjInpkq7nu5Hlrprkuovku7ZcclxuICAgICovXHJcbiAgICBidG5FdmVudChldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIHN3aXRjaChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5TdGFydEdhbWVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUdhbWUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuUmV0dXJuXCI6XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzdGFydEdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE5vZGUoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidE5leHRHYW1lXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJidFN0YXJ0T3ZlclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlUmVzdWx0Tm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidEV4aXRcIjpcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0YXJ0R2FtZVwiKTtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlUmVzdWx0Tm9kZSgpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0bkhlbHBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5DbG9zZUhlbHBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRpcE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xpcEFycmF5WzBdLGZhbHNlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiog5byA5aeL5ri45oiPICovXHJcbiAgICBwbGF5R2FtZSgpe1xyXG4gICAgICAgIGlmKERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1bikgcmV0dXJuXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyR2FtZUlzUnVuID0gdHJ1ZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xpcEFycmF5WzBdLGZhbHNlKVxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgIC8v5Yib5bu65ri45oiP6IqC54K5XHJcbiAgICAgICAgLy8gdGhpcy5jcmVhdEdhbWVOb2RlKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuaXRlbU5vZGVcIix0aGlzLml0ZW1Ob2RlKTtcclxuICAgICAgICB0aGlzLmxpc3RCYWxsKClcclxuICAgICAgICAvL+maj+acuuWIm+W7uumanOeijeeJqVxyXG4gICAgICAgIHRoaXMucmFuZE9icygpIFxyXG4gICAgfVxyXG4gICAgLyoq6ZqP5py65Yib5bu66Zqc56KN54mpICovXHJcbiAgICByYW5kT2JzKCl7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuZ2FtZVBvc1swXSAgPSBVdGlsLmdldFJhbmRvbUludCgxLDMwKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmdhbWVQb3NbMV0gID0gVXRpbC5nZXRSYW5kb21JbnQoMSwzMClcclxuICAgICAgICBEYXRhTWFuYWdlci5nYW1lUG9zWzJdICA9IFV0aWwuZ2V0UmFuZG9tSW50KDEsMzApXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuZ2FtZVBvc1szXSAgPSBVdGlsLmdldFJhbmRvbUludCgxLDMwKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmdhbWVQb3NbNF0gID0gVXRpbC5nZXRSYW5kb21JbnQoMSwzMClcclxuICAgICAgICBEYXRhTWFuYWdlci5nYW1lUG9zLmZvckVhY2goZT0+e1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1QYXJlbnROb2RlLmNoaWxkcmVuW2VdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLyoq57uR5a6a55CD5LqL5Lu2ICovXHJcbiAgICBsaXN0QmFsbCgpe1xyXG4gICAgICAgIHRoaXMuYmFsbE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxOb2RlW1wic3RhcnRQb3NcIl0gPSBjYy52MihldmVudC5nZXRMb2NhdGlvbigpLngsIGV2ZW50LmdldExvY2F0aW9uKCkueSlcclxuICAgICAgICAgfSlcclxuICAgICAgICAgdGhpcy5iYWxsTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBsZXQgc3RhdFBvcyA9ICB0aGlzLmJhbGxOb2RlW1wic3RhcnRQb3NcIl1cclxuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKGV2ZW50LmdldExvY2F0aW9uKCkueCxldmVudC5nZXRMb2NhdGlvbigpLnkpXHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLmlzRGlyZWN0aW9uKHN0YXRQb3MsZW5kUG9zKVxyXG4gICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaXBBcnJheVsxXSxmYWxzZSlcclxuICAgICAgICAgICAgaWYoZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nQm9uZSggdGhpcy5iYWxsTm9kZSxkaXJlY3Rpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKua7keWdl+enu+WKqOaWueWQkSAqL1xyXG4gICAgbW92aW5nQm9uZSh0YWdldDpjYy5Ob2RlLGRpcmVjdGlvbjpEaXJlY3Rpb25UeXBlKXtcclxuICAgICAgICBsZXQgbW92ZWluZHg6bnVtYmVyXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJEYXRhTWFuYWdlci5pbmRleFwiLERhdGFNYW5hZ2VyLmluZGV4KTtcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb25UeXBlLlRvcDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiKXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYoRGF0YU1hbmFnZXIuaW5kZXggPj0gdGhpcy5jb2xOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVpbmR4ID0gRGF0YU1hbmFnZXIuaW5kZXggLSB0aGlzLmNvbE51bVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb25UeXBlLkJvdHRvbTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiLXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYoRGF0YU1hbmFnZXIuaW5kZXggPD0gdGhpcy5yb3dOdW0gKiB0aGlzLmNvbE51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWluZHggPSBEYXRhTWFuYWdlci5pbmRleCArIHRoaXMuY29sTnVtXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvblR5cGUuTGVmdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bemXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYoKERhdGFNYW5hZ2VyLmluZGV4KSAlIHRoaXMuY29sTnVtID49IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVpbmR4ID0gRGF0YU1hbmFnZXIuaW5kZXggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobW92ZWluZHggPCAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWluZHggPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb25UeXBlLlJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlj7NcIik7XHJcbiAgICAgICAgICAgICAgICBpZigoRGF0YU1hbmFnZXIuaW5kZXgpICUgdGhpcy5jb2xOdW0gPCB0aGlzLmNvbE51bSAtIDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVpbmR4ID0gRGF0YU1hbmFnZXIuaW5kZXggKyAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihtb3ZlaW5keCE9dW5kZWZpbmVkICYmIG1vdmVpbmR4IT1EYXRhTWFuYWdlci5nYW1lUG9zWzBdICYmIG1vdmVpbmR4IT1EYXRhTWFuYWdlci5nYW1lUG9zWzFdICYmIG1vdmVpbmR4IT1EYXRhTWFuYWdlci5nYW1lUG9zWzJdICYmIG1vdmVpbmR4IT1EYXRhTWFuYWdlci5nYW1lUG9zWzNdICYmIG1vdmVpbmR4IT1EYXRhTWFuYWdlci5nYW1lUG9zWzRdKXtcclxuICAgICAgICAgICAgY2MudHdlZW4odGFnZXQpXHJcbiAgICAgICAgICAgIC50bygwLjMse3Bvc2l0aW9uOnRoaXMuaXRlbVBhcmVudE5vZGUuY2hpbGRyZW5bbW92ZWluZHhdLnBvc2l0aW9ufSlcclxuICAgICAgICAgICAgLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluZGV4PSBtb3ZlaW5keFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEYXRhTWFuYWdlci5pbmRleFwiLERhdGFNYW5hZ2VyLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmKCBEYXRhTWFuYWdlci5pbmRleCA9PSAzMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRhZ2V0KVxyXG4gICAgfVxyXG5cclxuICAgIGlzRGlyZWN0aW9uKHN0YXJ0UG9zOiBjYy5WZWMyLCBlbmRQb3M6IGNjLlZlYzIpOiBEaXJlY3Rpb25UeXBle1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb246IERpcmVjdGlvblR5cGUgPSBEaXJlY3Rpb25UeXBlLkxlZnQ7XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSBNYXRoLmFicyhlbmRQb3MueCAtIHN0YXJ0UG9zLngpO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gTWF0aC5hYnMoZW5kUG9zLnkgLSBzdGFydFBvcy55KTtcclxuICAgICAgICBpZihvZmZzZXRYID49IG9mZnNldFkpIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gZW5kUG9zLnggPiBzdGFydFBvcy54ID8gRGlyZWN0aW9uVHlwZS5SaWdodCA6IERpcmVjdGlvblR5cGUuTGVmdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBlbmRQb3MueSA+IHN0YXJ0UG9zLnkgPyBEaXJlY3Rpb25UeXBlLlRvcCA6IERpcmVjdGlvblR5cGUuQm90dG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgLyoq5YGc5q2i56+u562QICovXHJcbiAgICBjbGVhclR3ZWVuKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5YCS6K6h5pe2XHJcbiAgICAqL1xyXG4gICAgc3RhcnRUaW1lcigpIHtcclxuICAgICAgICBEYXRhTWFuYWdlci50aW1lckZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluZGV4VGltZS0tO1xyXG4gICAgICAgICAgICBpZihEYXRhTWFuYWdlci5pbmRleFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaXBBcnJheVsxXSxmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdChmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKERhdGFNYW5hZ2VyLnRpbWVyRnVuYywgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWAkuiuoeaXtlxyXG4gICAgKi9cclxuICAgIHVwZGF0ZVRpbWVyVWkoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lVGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiVElNRTpcIiArIERhdGFNYW5hZ2VyLmluZGV4VGltZTtcclxuICAgICAgICB0aGlzLnRpbWVyTm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gRGF0YU1hbmFnZXIuaW5kZXhUaW1lIC8gRGF0YU1hbmFnZXIuc3RhcnRUaW1lXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pu05pawTGF5b3V05biD5bGAICovXHJcbiAgICB1cGRhdGFMYXlvdXQoKXtcclxuICAgICAgICBpZihEYXRhTWFuYWdlci5pc0xheW91dCl7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVBhcmVudE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkudHlwZSA9IGNjLkxheW91dC5UeXBlLkdSSURcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5pdGVtUGFyZW50Tm9kZS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS50eXBlID0gY2MuTGF5b3V0LlR5cGUuTk9ORVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOS9meminVxyXG4gICAgKi9cclxuICAgIHVwZGF0ZVVzZXJDb2luKCkge1xyXG4gICAgICAgIGxldCBsYWJsZU5vZGUgPSB0aGlzLnVzZXJDb2luTm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvaW5MYWJsZVwiKTtcclxuICAgICAgICBjYy50d2VlbihsYWJsZU5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjEsIHtzY2FsZTogMS4xfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwge3NjYWxlOiAxfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgbGFibGVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJTQ09SRTpcIiArIERhdGFNYW5hZ2VyLmN1clNjb3JkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKue7k+aenOWIpOaWrSAqL1xyXG4gICAgc2hvd1Jlcygpe1xyXG4gICAgICAgIGlmKERhdGFNYW5hZ2VyLl9jdXJTY29yZCA+PTIxMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCh0cnVlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNob3dSZXN1bHQodHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWxleekuue7k+aenFxyXG4gICAgKi9cclxuICAgIHNob3dSZXN1bHQoaXNXaW46Ym9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZShEYXRhTWFuYWdlci50aW1lckZ1bmMpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICBEYXRhTWFuYWdlci5pbmRleFRpbWUgPSBEYXRhTWFuYWdlci5zdGFydFRpbWU7XHJcbiAgICAgICAgaWYoaXNXaW4pIHtcclxuICAgICAgICAgICAgbGV0IHdpbk51bUxhYmxlID0gY2MuZmluZChcIndpbi93aW5OdW1cIiwgdGhpcy5yZXN1bHROb2RlKTtcclxuICAgICAgICAgICAgd2luTnVtTGFibGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgRGF0YU1hbmFnZXIuY3VyV2luTnVtO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xpcEFycmF5WzNdLGZhbHNlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xpcEFycmF5WzRdLGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd2luTm9kZSA9IHRoaXMucmVzdWx0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIndpblwiKTtcclxuICAgICAgICBsZXQgbG9zZU5vZGUgPSB0aGlzLnJlc3VsdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsb3NlXCIpO1xyXG5cclxuICAgICAgICB3aW5Ob2RlLmFjdGl2ZSA9IGlzV2luO1xyXG4gICAgICAgIGxvc2VOb2RlLmFjdGl2ZSA9ICFpc1dpbjtcclxuXHJcbiAgICAgICAgdGhpcy5yZXN1bHROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet57uT5p6c5bGV56S6XHJcbiAgICAqL1xyXG4gICAgaGlkZVJlc3VsdE5vZGUoKSB7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuZ2FtZVBvcyA9IFswLDAsMCwwLDBdXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5kZXggPSAwXHJcbiAgICAgICAgdGhpcy5yZXN1bHROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1biA9IGZhbHNlO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1cldpbk51bSA9IDA7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5kZXhUaW1lID0gRGF0YU1hbmFnZXIuc3RhcnRUaW1lXHJcbiAgICAgICAgdGhpcy50aW1lck5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcyA9IDFcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNsZWFyVHdlZW4oKVxyXG4gICAgICAgIC8vIERhdGFNYW5hZ2VyLnNlbGVjdFBvcmtlckFycmF5WzBdID0gLTFcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXreaPkOekuuWxleekulxyXG4gICAgKi9cclxuICAgIGhpZGVUaXBOb2RlKCkge1xyXG4gICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/loaderManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae579n3fD5Nt7pE6BDFOp6m', 'loaderManager');
// script/util/loaderManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var loaderManager = /** @class */ (function () {
    function loaderManager() {
        /**
         * 已加载好资源
        */
        this.res = {};
        /**
         * ab包名
        */
        this.abBundleName = [
            "prefab",
        ];
    }
    /**
     * 获取资源
    */
    loaderManager.prototype.getRes = function (key, targetBundleNmae, type) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (key == "" || typeof key != "string") {
                            console.warn("非法KEY值!");
                        }
                        res = this.res[key];
                        if (!!res) return [3 /*break*/, 2];
                        console.warn("\u4F7F\u7528\u8D44\u6E90" + key + "\u672A\u52A0\u8F7D-\u73B0\u641C\u7D22\u8D44\u6E90\u52A0\u8F7D\u4E2D");
                        return [4 /*yield*/, this.loadRes(key, targetBundleNmae, type)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(res);
                            })];
                    case 2: return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 加载资源
    */
    loaderManager.prototype.loadRes = function (fileName, targetBundleNmae, type) {
        if (type === void 0) { type = cc.SpriteFrame; }
        return __awaiter(this, void 0, void 0, function () {
            var res, loadBundle, _i, _a, bundleName;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        res = null;
                        loadBundle = function (bundleName) {
                            return new Promise(function (resolve, reject) {
                                console.log("当前加载包名：", bundleName);
                                cc.assetManager.loadBundle(bundleName, function (err, ab) {
                                    if (err) {
                                        console.warn("\u5305\u540D" + bundleName + "\u52A0\u8F7D\u5931\u8D25");
                                        resolve();
                                        return;
                                    }
                                    var loadFileName = fileName;
                                    if (type == cc.SpriteFrame && cc.ENGINE_VERSION[0] == "3") { // 要加载纹理需要获取图片下的spiteFrame
                                        loadFileName += "/spriteFrame";
                                    }
                                    ab.load(loadFileName, type, function (err, assets) {
                                        if (err) {
                                            console.warn("\u5305\u540D" + bundleName + "\u76EE\u5F55\u4E0B\u6587\u4EF6" + fileName + "\u52A0\u8F7D\u5931\u8D25");
                                            resolve();
                                            return;
                                        }
                                        _this.res[fileName] = assets;
                                        console.log("\u52A0\u8F7D\u6210\u529F\u6587\u4EF6: " + fileName + " \u6210\u529F\u6240\u5728\u5305\u540D: " + bundleName);
                                        resolve();
                                        res = assets;
                                    });
                                    // 释放ab包, 不会释放从ab包里面加载好的资源;
                                    // assetManager.removeBundle(ab);
                                });
                            });
                        };
                        if (!targetBundleNmae) return [3 /*break*/, 2];
                        return [4 /*yield*/, loadBundle(targetBundleNmae)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        _i = 0, _a = this.abBundleName;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        bundleName = _a[_i];
                        if (res)
                            return [3 /*break*/, 6];
                        return [4 /*yield*/, loadBundle(bundleName)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, new Promise(function (resolve, reject) {
                            resolve(res);
                        })];
                }
            });
        });
    };
    loaderManager.instance = new loaderManager();
    return loaderManager;
}());
exports.default = loaderManager.instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxsb2FkZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUdJOztVQUVFO1FBQ00sUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUVqQjs7VUFFRTtRQUNNLGlCQUFZLEdBQUc7WUFDbkIsUUFBUTtTQUNYLENBQUE7SUEyRUwsQ0FBQztJQXpFRzs7TUFFRTtJQUNLLDhCQUFNLEdBQVosVUFBYSxHQUFHLEVBQUUsZ0JBQWlCLEVBQUUsSUFBSzs7Ozs7O3dCQUN2QyxJQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksT0FBTyxHQUFHLElBQUksUUFBUSxFQUFFOzRCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lCQUMzQjt3QkFFRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs2QkFFckIsQ0FBQyxHQUFHLEVBQUosd0JBQUk7d0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBTyxHQUFHLHdFQUFjLENBQUMsQ0FBQzt3QkFDakMscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEVBQUE7O3dCQUFyRCxHQUFHLEdBQUcsU0FBK0MsQ0FBQzt3QkFDdEQsc0JBQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTtnQ0FDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNqQixDQUFDLENBQUMsRUFBQTs0QkFHTixzQkFBTyxHQUFHLEVBQUM7Ozs7S0FDZDtJQUVEOztNQUVFO0lBQ1csK0JBQU8sR0FBcEIsVUFBcUIsUUFBUSxFQUFFLGdCQUFpQixFQUFFLElBQXFCO1FBQXJCLHFCQUFBLEVBQUEsT0FBTyxFQUFFLENBQUMsV0FBVzs7Ozs7Ozt3QkFDL0QsR0FBRyxHQUFHLElBQUksQ0FBQzt3QkFDWCxVQUFVLEdBQUcsVUFBQyxVQUFVOzRCQUN4QixPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0NBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dDQUNuQyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUMsVUFBQyxHQUFHLEVBQUUsRUFBMEI7b0NBQ2xFLElBQUcsR0FBRyxFQUFFO3dDQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQUssVUFBVSw2QkFBTSxDQUFDLENBQUM7d0NBQ3BDLE9BQU8sRUFBRSxDQUFDO3dDQUNWLE9BQU87cUNBQ1Y7b0NBRUQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDO29DQUM1QixJQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsMEJBQTBCO3dDQUNsRixZQUFZLElBQUksY0FBYyxDQUFBO3FDQUNqQztvQ0FFRCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTt3Q0FDckMsSUFBRyxHQUFHLEVBQUU7NENBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBSyxVQUFVLHNDQUFRLFFBQVEsNkJBQU0sQ0FBQyxDQUFDOzRDQUNwRCxPQUFPLEVBQUUsQ0FBQzs0Q0FDVixPQUFPO3lDQUNWO3dDQUNELEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO3dDQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUFXLFFBQVEsK0NBQVksVUFBWSxDQUFDLENBQUM7d0NBQ3pELE9BQU8sRUFBRSxDQUFDO3dDQUVWLEdBQUcsR0FBRyxNQUFNLENBQUM7b0NBQ2pCLENBQUMsQ0FBQyxDQUFBO29DQUVGLDJCQUEyQjtvQ0FDM0IsaUNBQWlDO2dDQUNyQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQTt3QkFDTixDQUFDLENBQUE7NkJBQ0UsZ0JBQWdCLEVBQWhCLHdCQUFnQjt3QkFDZixxQkFBTSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUM7Ozs4QkFFSSxFQUFqQixLQUFBLElBQUksQ0FBQyxZQUFZOzs7NkJBQWpCLENBQUEsY0FBaUIsQ0FBQTt3QkFBL0IsVUFBVTt3QkFDZCxJQUFHLEdBQUc7NEJBQUUsd0JBQU07d0JBQ2QscUJBQU0sVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBNUIsU0FBNEIsQ0FBQzs7O3dCQUZYLElBQWlCLENBQUE7OzRCQU0zQyxzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNOzRCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pCLENBQUMsQ0FBQyxFQUFDOzs7O0tBQ047SUFyRnNCLHNCQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQXVGMUQsb0JBQUM7Q0F4RkQsQUF3RkMsSUFBQTtBQUVELGtCQUFlLGFBQWEsQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNsYXNzIGxvYWRlck1hbmFnZXJ7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlID0gbmV3IGxvYWRlck1hbmFnZXIoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW3suWKoOi9veWlvei1hOa6kFxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgcmVzID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhYuWMheWQjVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgYWJCdW5kbGVOYW1lID0gW1xyXG4gICAgICAgIFwicHJlZmFiXCIsXHJcbiAgICBdXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5botYTmupBcclxuICAgICovXHJcbiAgICAgYXN5bmMgZ2V0UmVzKGtleSwgdGFyZ2V0QnVuZGxlTm1hZT8sIHR5cGU/KSB7XHJcbiAgICAgICAgaWYoa2V5ID09IFwiXCIgfHwgdHlwZW9mIGtleSAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIumdnuazlUtFWeWAvCFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5yZXNba2V5XTtcclxuXHJcbiAgICAgICAgaWYoIXJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYOS9v+eUqOi1hOa6kCR7a2V5feacquWKoOi9vS3njrDmkJzntKLotYTmupDliqDovb3kuK1gKTtcclxuICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5sb2FkUmVzKGtleSwgdGFyZ2V0QnVuZGxlTm1hZSwgdHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGxvYWRSZXMoZmlsZU5hbWUsIHRhcmdldEJ1bmRsZU5tYWU/LCB0eXBlID0gY2MuU3ByaXRlRnJhbWUpIHtcclxuICAgICAgICBsZXQgcmVzID0gbnVsbDtcclxuICAgICAgICBsZXQgbG9hZEJ1bmRsZSA9IChidW5kbGVOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeWKoOi9veWMheWQje+8mlwiLCBidW5kbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKGJ1bmRsZU5hbWUsKGVyciwgYWI6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYOWMheWQjSR7YnVuZGxlTmFtZX3liqDovb3lpLHotKVgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9hZEZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PSBjYy5TcHJpdGVGcmFtZSAmJiBjYy5FTkdJTkVfVkVSU0lPTlswXSA9PSBcIjNcIikgeyAvLyDopoHliqDovb3nurnnkIbpnIDopoHojrflj5blm77niYfkuIvnmoRzcGl0ZUZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRGaWxlTmFtZSArPSBcIi9zcHJpdGVGcmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhYi5sb2FkKGxvYWRGaWxlTmFtZSAsIHR5cGUsIChlcnIsIGFzc2V0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg5YyF5ZCNJHtidW5kbGVOYW1lfeebruW9leS4i+aWh+S7tiR7ZmlsZU5hbWV95Yqg6L295aSx6LSlYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNbZmlsZU5hbWVdID0gYXNzZXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5Yqg6L295oiQ5Yqf5paH5Lu2OiAke2ZpbGVOYW1lfSDmiJDlip/miYDlnKjljIXlkI06ICR7YnVuZGxlTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IGFzc2V0cztcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmHiuaUvmFi5YyFLCDkuI3kvJrph4rmlL7ku45hYuWMhemHjOmdouWKoOi9veWlveeahOi1hOa6kDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhc3NldE1hbmFnZXIucmVtb3ZlQnVuZGxlKGFiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0YXJnZXRCdW5kbGVObWFlKSB7IC8vIOiLpeS8oOWFpeWMheWQjeWImeS9v+eUqOWItuWumuWMheWQje+8jOS4jeS8oOWFpeWMheWQjeWImemBjeWOhuaJgOaciWFi5YyF5a+75om+5a+55bqU5ZCN5a2X6LWE5rqQXHJcbiAgICAgICAgICAgIGF3YWl0IGxvYWRCdW5kbGUodGFyZ2V0QnVuZGxlTm1hZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBidW5kbGVOYW1lIG9mIHRoaXMuYWJCdW5kbGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbG9hZEJ1bmRsZShidW5kbGVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZGVyTWFuYWdlci5pbnN0YW5jZTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/Util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8815f8mvNtPN4cIq4m4x9Lv', 'Util');
// script/util/Util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    /**生成随机数 */
    Util.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    /**随机生成数组 */
    Util.prototype.getRandArray = function (min, max, length) {
        var NumberArray = [];
        for (var i = 0; i < length; i++) {
            NumberArray.push(this.getRandomInt(min, max));
        }
        return NumberArray;
    };
    //公共方法类
    Util.instance = new Util();
    return Util;
}());
exports.default = Util.instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQW9CQSxDQUFDO0lBZkcsV0FBVztJQUNYLDJCQUFZLEdBQVosVUFBYSxHQUFXLEVBQUUsR0FBVztRQUNqQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMzRCxDQUFDO0lBRUgsWUFBWTtJQUNaLDJCQUFZLEdBQVosVUFBYSxHQUFVLEVBQUMsR0FBVSxFQUFDLE1BQWE7UUFDNUMsSUFBSSxXQUFXLEdBQWlCLEVBQUUsQ0FBQTtRQUNsQyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ3JCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtTQUMvQztRQUNELE9BQU8sV0FBVyxDQUFBO0lBQ3RCLENBQUM7SUFsQkQsT0FBTztJQUNnQixhQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQWtCakQsV0FBQztDQXBCRCxBQW9CQyxJQUFBO0FBRUQsa0JBQWUsSUFBSSxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBVdGlse1xuICAgIC8v5YWs5YWx5pa55rOV57G7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZSA9IG5ldyBVdGlsKCk7XG5cblxuICAgIC8qKueUn+aIkOmaj+acuuaVsCAqL1xuICAgIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICAgIH1cblxuICAgIC8qKumaj+acuueUn+aIkOaVsOe7hCAqL1xuICAgIGdldFJhbmRBcnJheShtaW46bnVtYmVyLG1heDpudW1iZXIsbGVuZ3RoOm51bWJlcik6QXJyYXk8bnVtYmVyPntcbiAgICAgICAgbGV0IE51bWJlckFycmF5OkFycmF5PG51bWJlcj4gPSBbXVxuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspe1xuICAgICAgICAgICAgTnVtYmVyQXJyYXkucHVzaCh0aGlzLmdldFJhbmRvbUludChtaW4sbWF4KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyQXJyYXlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWwuaW5zdGFuY2U7XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/define.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52a92AfudxJM512zSmlG6LW', 'define');
// script/util/define.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionType = exports.EventId = exports.ItemType = void 0;
/**宝石类型 */
var ItemType;
(function (ItemType) {
    ItemType[ItemType["None"] = 0] = "None";
    ItemType[ItemType["Bulle"] = 1] = "Bulle";
    ItemType[ItemType["Yellow"] = 2] = "Yellow";
    ItemType[ItemType["Perpour"] = 3] = "Perpour";
    ItemType[ItemType["Pinck"] = 4] = "Pinck";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var EventId;
(function (EventId) {
    EventId[EventId["Invalid"] = 0] = "Invalid";
    EventId[EventId["desty"] = 1] = "desty";
})(EventId = exports.EventId || (exports.EventId = {}));
/** 方向类型 */
var DirectionType;
(function (DirectionType) {
    DirectionType[DirectionType["Top"] = 1] = "Top";
    DirectionType[DirectionType["Bottom"] = 2] = "Bottom";
    DirectionType[DirectionType["Left"] = 3] = "Left";
    DirectionType[DirectionType["Right"] = 4] = "Right";
})(DirectionType = exports.DirectionType || (exports.DirectionType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxkZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVTtBQUNWLElBQVksUUFNWDtBQU5ELFdBQVksUUFBUTtJQUNoQix1Q0FBSSxDQUFBO0lBQ0oseUNBQUssQ0FBQTtJQUNMLDJDQUFNLENBQUE7SUFDTiw2Q0FBTyxDQUFBO0lBQ1AseUNBQUssQ0FBQTtBQUNULENBQUMsRUFOVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQU1uQjtBQUVELElBQVksT0FHWDtBQUhELFdBQVksT0FBTztJQUNmLDJDQUFPLENBQUE7SUFDUCx1Q0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUhXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUdsQjtBQUVELFdBQVc7QUFDWCxJQUFZLGFBS1g7QUFMRCxXQUFZLGFBQWE7SUFDckIsK0NBQU8sQ0FBQTtJQUNQLHFEQUFVLENBQUE7SUFDVixpREFBUSxDQUFBO0lBQ1IsbURBQVMsQ0FBQTtBQUNiLENBQUMsRUFMVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUt4QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKirlrp3nn7PnsbvlnosgKi9cclxuZXhwb3J0IGVudW0gSXRlbVR5cGV7XHJcbiAgICBOb25lLFxyXG4gICAgQnVsbGUsXHJcbiAgICBZZWxsb3csXHJcbiAgICBQZXJwb3VyLFxyXG4gICAgUGluY2tcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXZlbnRJZHtcclxuICAgIEludmFsaWQsXHJcbiAgICBkZXN0eVxyXG59XHJcblxyXG4vKiog5pa55ZCR57G75Z6LICovXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvblR5cGUge1xyXG4gICAgVG9wID0gMSxcclxuICAgIEJvdHRvbSA9IDIsXHJcbiAgICBMZWZ0ID0gMyxcclxuICAgIFJpZ2h0ID0gNCxcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/event/EventMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0344zMoipJG7vJVPYxiAp2', 'EventMgr');
// script/util/event/EventMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = require("./Event");
var EventMgr = /** @class */ (function () {
    function EventMgr() {
        this.eventMap = new Map();
    }
    Object.defineProperty(EventMgr, "Instance", {
        get: function () {
            if (this.instance == null) {
                this.instance = new EventMgr();
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    EventMgr.prototype.Register = function (eventId, callback, scope) {
        if (scope === void 0) { scope = null; }
        var event = new Event_1.default(eventId, callback, false, scope);
        this.setEvent(eventId, event);
    };
    EventMgr.prototype.Once = function (eventId, callback, scope) {
        if (scope === void 0) { scope = null; }
        var event = new Event_1.default(eventId, callback, true, scope);
        this.setEvent(eventId, event);
    };
    EventMgr.prototype.Emit = function (evId) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.eventMap.has(evId)) {
            return;
        }
        var evts = this.eventMap.get(evId);
        if (evts.length) {
            var newEvts = new Array();
            for (var i = 0; i < evts.length; i++) {
                var ev = evts[i];
                ev.Call.apply(ev, args);
                if (!ev.Once) {
                    newEvts.push(ev);
                }
            }
            this.eventMap.set(evId, newEvts);
        }
    };
    EventMgr.prototype.setEvent = function (eventId, event) {
        if (this.eventMap.has(eventId)) {
            var evts = this.eventMap.get(eventId);
            var finder = evts.findIndex(function (evt) { return evt.Equel(event); });
            if (finder == -1) {
                evts.push(event);
                this.eventMap.set(eventId, evts);
            }
            else {
                evts.splice(finder, 1);
                evts.push(event);
                this.eventMap.set(eventId, evts);
            }
        }
        else {
            var evts = new Array();
            evts.push(event);
            this.eventMap.set(eventId, evts);
        }
    };
    return EventMgr;
}());
exports.default = EventMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxldmVudFxcRXZlbnRNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpQ0FBNEI7QUFHNUI7SUFBQTtRQUNZLGFBQVEsR0FBK0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQXlEN0QsQ0FBQztJQXRERyxzQkFBa0Isb0JBQVE7YUFBMUI7WUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7YUFDbEM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFTSwyQkFBUSxHQUFmLFVBQWdCLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFlBQWlCO1FBQ25FLElBQUksS0FBSyxHQUFHLElBQUksZUFBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSx1QkFBSSxHQUFYLFVBQVksT0FBZ0IsRUFBRSxRQUFrQixFQUFFLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsWUFBaUI7UUFDL0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxlQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLHVCQUFJLEdBQVgsVUFBWSxJQUFhO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7WUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsRUFBRSxDQUFDLElBQUksT0FBUCxFQUFFLEVBQVMsSUFBSSxFQUFFO2dCQUVqQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtvQkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNwQjthQUNKO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVPLDJCQUFRLEdBQWhCLFVBQWlCLE9BQWdCLEVBQUUsS0FBWTtRQUMzQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFDdkQsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDcEM7U0FDSjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQTtZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0ExREEsQUEwREMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SWQgfSBmcm9tIFwiLi4vZGVmaW5lXCI7XHJcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50TWdyIHtcclxuICAgIHByaXZhdGUgZXZlbnRNYXA6IE1hcDxFdmVudElkLCBBcnJheTxFdmVudD4+ID0gbmV3IE1hcCgpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRXZlbnRNZ3I7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRXZlbnRNZ3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyKGV2ZW50SWQ6IEV2ZW50SWQsIGNhbGxiYWNrOiBGdW5jdGlvbiwgc2NvcGU6IGFueSA9IG51bGwpIHtcclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnRJZCwgY2FsbGJhY2ssIGZhbHNlLCBzY29wZSk7XHJcbiAgICAgICAgdGhpcy5zZXRFdmVudChldmVudElkLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE9uY2UoZXZlbnRJZDogRXZlbnRJZCwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBzY29wZTogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBFdmVudChldmVudElkLCBjYWxsYmFjaywgdHJ1ZSwgc2NvcGUpO1xyXG4gICAgICAgIHRoaXMuc2V0RXZlbnQoZXZlbnRJZCwgZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBFbWl0KGV2SWQ6IEV2ZW50SWQsIC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRNYXAuaGFzKGV2SWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGV2dHMgPSB0aGlzLmV2ZW50TWFwLmdldChldklkKTtcclxuICAgICAgICBpZiAoZXZ0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0V2dHMgPSBuZXcgQXJyYXk8RXZlbnQ+KCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPCBldnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXYgPSBldnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgZXYuQ2FsbCguLi5hcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWV2Lk9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFdnRzLnB1c2goZXYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYXAuc2V0KGV2SWQsIG5ld0V2dHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEV2ZW50KGV2ZW50SWQ6IEV2ZW50SWQsIGV2ZW50OiBFdmVudCApIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudE1hcC5oYXMoZXZlbnRJZCkpIHtcclxuICAgICAgICAgICAgbGV0IGV2dHMgPSB0aGlzLmV2ZW50TWFwLmdldChldmVudElkKTtcclxuICAgICAgICAgICAgbGV0IGZpbmRlciA9IGV2dHMuZmluZEluZGV4KChldnQpID0+IGV2dC5FcXVlbChldmVudCkpO1xyXG4gICAgICAgICAgICBpZiAoZmluZGVyID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBldnRzLnB1c2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5zZXQoZXZlbnRJZCwgZXZ0cyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBldnRzLnNwbGljZShmaW5kZXIsIDEpO1xyXG4gICAgICAgICAgICAgICAgZXZ0cy5wdXNoKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRNYXAuc2V0KGV2ZW50SWQsIGV2dHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGV2dHMgPSBuZXcgQXJyYXkoKVxyXG4gICAgICAgICAgICBldnRzLnB1c2goZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFwLnNldChldmVudElkLCBldnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------
