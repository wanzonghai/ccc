
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
require('./assets/jumpStr/JumpStr');
require('./assets/script/DataManager');
require('./assets/script/GameLayer');
require('./assets/script/GameWheel');
require('./assets/script/HallManger');
require('./assets/script/ItemNode');
require('./assets/script/StartGameLayer');
require('./assets/script/particle/MultiPSRandomRefresh');
require('./assets/script/playLayer');
require('./assets/script/util/define');
require('./assets/script/util/event/Event');
require('./assets/script/util/event/EventMgr');
require('./assets/script/util/loaderManager');
require('./assets/script/util/util');

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
    EventMgr.prototype.Off = function () {
        this.eventMap = new Map();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxldmVudFxcRXZlbnRNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpQ0FBNEI7QUFHNUI7SUFBQTtRQUNZLGFBQVEsR0FBK0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQTZEN0QsQ0FBQztJQTFERyxzQkFBa0Isb0JBQVE7YUFBMUI7WUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7YUFDbEM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFTSwyQkFBUSxHQUFmLFVBQWdCLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFlBQWlCO1FBQ25FLElBQUksS0FBSyxHQUFHLElBQUksZUFBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSx1QkFBSSxHQUFYLFVBQVksT0FBZ0IsRUFBRSxRQUFrQixFQUFFLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsWUFBaUI7UUFDL0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxlQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLHNCQUFHLEdBQVY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7SUFDN0IsQ0FBQztJQUVNLHVCQUFJLEdBQVgsVUFBWSxJQUFhO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7WUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsRUFBRSxDQUFDLElBQUksT0FBUCxFQUFFLEVBQVMsSUFBSSxFQUFFO2dCQUVqQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtvQkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNwQjthQUNKO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVPLDJCQUFRLEdBQWhCLFVBQWlCLE9BQWdCLEVBQUUsS0FBWTtRQUMzQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFDdkQsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDcEM7U0FDSjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQTtZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0E5REEsQUE4REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SWQgfSBmcm9tIFwiLi4vZGVmaW5lXCI7XHJcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50TWdyIHtcclxuICAgIHByaXZhdGUgZXZlbnRNYXA6IE1hcDxFdmVudElkLCBBcnJheTxFdmVudD4+ID0gbmV3IE1hcCgpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRXZlbnRNZ3I7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRXZlbnRNZ3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyKGV2ZW50SWQ6IEV2ZW50SWQsIGNhbGxiYWNrOiBGdW5jdGlvbiwgc2NvcGU6IGFueSA9IG51bGwpIHtcclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnRJZCwgY2FsbGJhY2ssIGZhbHNlLCBzY29wZSk7XHJcbiAgICAgICAgdGhpcy5zZXRFdmVudChldmVudElkLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE9uY2UoZXZlbnRJZDogRXZlbnRJZCwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBzY29wZTogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBFdmVudChldmVudElkLCBjYWxsYmFjaywgdHJ1ZSwgc2NvcGUpO1xyXG4gICAgICAgIHRoaXMuc2V0RXZlbnQoZXZlbnRJZCwgZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBPZmYoKXtcclxuICAgICAgICB0aGlzLmV2ZW50TWFwID0gbmV3IE1hcCgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEVtaXQoZXZJZDogRXZlbnRJZCwgLi4uYXJncykge1xyXG4gICAgICAgIGlmICghdGhpcy5ldmVudE1hcC5oYXMoZXZJZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZXZ0cyA9IHRoaXMuZXZlbnRNYXAuZ2V0KGV2SWQpO1xyXG4gICAgICAgIGlmIChldnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3RXZ0cyA9IG5ldyBBcnJheTxFdmVudD4oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IGV2dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBldiA9IGV2dHNbaV07XHJcbiAgICAgICAgICAgICAgICBldi5DYWxsKC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZXYuT25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0V2dHMucHVzaChldik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5zZXQoZXZJZCwgbmV3RXZ0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RXZlbnQoZXZlbnRJZDogRXZlbnRJZCwgZXZlbnQ6IEV2ZW50ICkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50TWFwLmhhcyhldmVudElkKSkge1xyXG4gICAgICAgICAgICBsZXQgZXZ0cyA9IHRoaXMuZXZlbnRNYXAuZ2V0KGV2ZW50SWQpO1xyXG4gICAgICAgICAgICBsZXQgZmluZGVyID0gZXZ0cy5maW5kSW5kZXgoKGV2dCkgPT4gZXZ0LkVxdWVsKGV2ZW50KSk7XHJcbiAgICAgICAgICAgIGlmIChmaW5kZXIgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGV2dHMucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFwLnNldChldmVudElkLCBldnRzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV2dHMuc3BsaWNlKGZpbmRlciwgMSk7XHJcbiAgICAgICAgICAgICAgICBldnRzLnB1c2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5zZXQoZXZlbnRJZCwgZXZ0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZXZ0cyA9IG5ldyBBcnJheSgpXHJcbiAgICAgICAgICAgIGV2dHMucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYXAuc2V0KGV2ZW50SWQsIGV2dHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/particle/MultiPSRandomRefresh.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14000242AlJorHT88YDvvfa', 'MultiPSRandomRefresh');
// script/particle/MultiPSRandomRefresh.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 实现功能：多重（也可以只有一个）粒子节点，动态替换图集中精灵贴图，并且随机起始贴图。
 * 使用方式：将组件挂载在粒子节点的直接父节点上
 */
var MultiPSRandomRefresh = /** @class */ (function (_super) {
    __extends(MultiPSRandomRefresh, _super);
    function MultiPSRandomRefresh() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.aniFps = 15;
        /**ParticleSystem节点数量 */
        _this.psNodeNum = 5;
        _this.emissionRate = 10;
        /**粒子系统贴图当前下标集合 */
        _this.psIndexArray = [];
        /**粒子发射器节点集合 */
        _this.psArray = [];
        /**图集序列总帧数 */
        _this.count = 0;
        /**图集序列帧集合 */
        _this.spriteArray = [];
        return _this;
    }
    MultiPSRandomRefresh.prototype.onLoad = function () {
        if (!this.atlas)
            return;
        this.createrParticleSystem();
    };
    /**
     * 初始化当前节点下粒子发射器
    */
    MultiPSRandomRefresh.prototype.createrParticleSystem = function () {
        this.psArray = this.node.getComponentsInChildren(cc.ParticleSystem);
        this.spriteArray = this.atlas.getSpriteFrames();
        this.count = this.spriteArray.length;
        var startIdx = Math.round(Math.random() * this.count);
        this.psIndexArray.push(startIdx);
        while (this.psArray.length < this.psNodeNum) {
            // for (let index = 0; index < this.psNodeNum - 1; index++) {
            var cln = cc.instantiate(this.psArray[0].node);
            cln.parent = this.psArray[0].node.parent;
            var startIdx_1 = Math.round(Math.random() * this.count);
            this.psIndexArray.push(startIdx_1);
            this.psArray.push(cln.getComponent(cc.ParticleSystem));
        }
    };
    /**
     * 设置每秒发射粒子数目
    */
    MultiPSRandomRefresh.prototype.seEmissionRate = function (num) {
        this.emissionRate = num;
        this.psNodeNum = num / 2;
        this.resetParticleSystem();
    };
    /**
     * 重新生成ParticleSystem节点数量
    */
    MultiPSRandomRefresh.prototype.resetParticleSystem = function () {
        if (this.psArray.length > 1) { // 节点下粒子发射器数量大于1时清除多余的
            for (var i = 1; i < this.psArray.length; i++) {
                this.psArray[i].node.removeFromParent();
            }
            this.psArray.length = 1;
            this.psIndexArray.length = 1;
        }
        this.createrParticleSystem();
    };
    /**
     * 开始播放粒子
    */
    MultiPSRandomRefresh.prototype.playParticle = function () {
        this.schedule(this.refreshSprite, 1 / this.aniFps, cc.macro.REPEAT_FOREVER);
    };
    /**
     * 停止播放粒子
    */
    MultiPSRandomRefresh.prototype.stopParticle = function () {
        this.unschedule(this.refreshSprite);
    };
    MultiPSRandomRefresh.prototype.onEnable = function () {
        this.playParticle();
    };
    MultiPSRandomRefresh.prototype.onDisable = function () {
        this.stopParticle();
    };
    /**
     * 替换粒子贴图
    */
    MultiPSRandomRefresh.prototype.refreshSprite = function () {
        for (var index = 0; index < this.psArray.length; index++) {
            var element = this.psArray[index];
            if (this.psIndexArray[index] >= this.count)
                this.psIndexArray[index] = 0;
            element.spriteFrame = this.spriteArray[this.psIndexArray[index]];
            element.emissionRate = this.emissionRate;
            element.autoRemoveOnFinish = false;
            this.psIndexArray[index]++;
        }
    };
    __decorate([
        property({ type: cc.SpriteAtlas, tooltip: "图集资源" })
    ], MultiPSRandomRefresh.prototype, "atlas", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "每秒替换粒子贴图多少次" })
    ], MultiPSRandomRefresh.prototype, "aniFps", void 0);
    __decorate([
        property({ tooltip: "ParticleSystem节点总数量" })
    ], MultiPSRandomRefresh.prototype, "psNodeNum", void 0);
    __decorate([
        property({ tooltip: "单粒子节点每秒发射粒子数目" })
    ], MultiPSRandomRefresh.prototype, "emissionRate", void 0);
    MultiPSRandomRefresh = __decorate([
        ccclass
    ], MultiPSRandomRefresh);
    return MultiPSRandomRefresh;
}(cc.Component));
exports.default = MultiPSRandomRefresh;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwYXJ0aWNsZVxcTXVsdGlQU1JhbmRvbVJlZnJlc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUM7OztHQUdHO0FBRUg7SUFBa0Qsd0NBQVk7SUFBOUQ7UUFBQSxxRUE4R0M7UUExR1csV0FBSyxHQUFtQixJQUFJLENBQUM7UUFFN0IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUM1Qix3QkFBd0I7UUFFaEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUVsQyxrQkFBa0I7UUFDVixrQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUNwQyxlQUFlO1FBQ1AsYUFBTyxHQUF3QixFQUFFLENBQUM7UUFDMUMsYUFBYTtRQUNMLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDbEIsYUFBYTtRQUNMLGlCQUFXLEdBQXFCLEVBQUUsQ0FBQzs7SUF5Ri9DLENBQUM7SUF4RmEscUNBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBRXhCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7TUFFRTtJQUNGLG9EQUFxQixHQUFyQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFFckMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUss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QUNqQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN6QyxPQUFPLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUF6R0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7dURBQ2Y7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLENBQUM7d0RBQzNCO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUM7MkRBQ2Y7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUM7OERBQ0w7SUFaakIsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0E4R3hDO0lBQUQsMkJBQUM7Q0E5R0QsQUE4R0MsQ0E5R2lELEVBQUUsQ0FBQyxTQUFTLEdBOEc3RDtrQkE5R29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLyoqXHJcbiAqIOWunueOsOWKn+iDve+8muWkmumHje+8iOS5n+WPr+S7peWPquacieS4gOS4qu+8ieeykuWtkOiKgueCue+8jOWKqOaAgeabv+aNouWbvumbhuS4reeyvueBtei0tOWbvu+8jOW5tuS4lOmaj+acuui1t+Wni+i0tOWbvuOAglxyXG4gKiDkvb/nlKjmlrnlvI/vvJrlsIbnu4Tku7bmjILovb3lnKjnspLlrZDoioLngrnnmoTnm7TmjqXniLboioLngrnkuIpcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpUFNSYW5kb21SZWZyZXNoIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlQXRsYXMsIHRvb2x0aXA6IFwi5Zu+6ZuG6LWE5rqQXCIgfSlcclxuICAgIHByaXZhdGUgYXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwi5q+P56eS5pu/5o2i57KS5a2Q6LS05Zu+5aSa5bCR5qyhXCIgfSlcclxuICAgIHByaXZhdGUgYW5pRnBzOiBudW1iZXIgPSAxNTtcclxuICAgIC8qKlBhcnRpY2xlU3lzdGVt6IqC54K55pWw6YePICovXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlBhcnRpY2xlU3lzdGVt6IqC54K55oC75pWw6YePXCIgfSlcclxuICAgIHByaXZhdGUgcHNOb2RlTnVtOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwi5Y2V57KS5a2Q6IqC54K55q+P56eS5Y+R5bCE57KS5a2Q5pWw55uuXCIgfSlcclxuICAgIHByaXZhdGUgZW1pc3Npb25SYXRlOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICAvKirnspLlrZDns7vnu5/otLTlm77lvZPliY3kuIvmoIfpm4blkIggKi9cclxuICAgIHByaXZhdGUgcHNJbmRleEFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgLyoq57KS5a2Q5Y+R5bCE5Zmo6IqC54K56ZuG5ZCIICovXHJcbiAgICBwcml2YXRlIHBzQXJyYXk6IGNjLlBhcnRpY2xlU3lzdGVtW10gPSBbXTtcclxuICAgIC8qKuWbvumbhuW6j+WIl+aAu+W4p+aVsCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudCA9IDA7XHJcbiAgICAvKirlm77pm4bluo/liJfluKfpm4blkIggKi9cclxuICAgIHByaXZhdGUgc3ByaXRlQXJyYXk6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmF0bGFzKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlclBhcnRpY2xlU3lzdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblvZPliY3oioLngrnkuIvnspLlrZDlj5HlsITlmahcclxuICAgICovXHJcbiAgICBjcmVhdGVyUGFydGljbGVTeXN0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5wc0FycmF5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICB0aGlzLnNwcml0ZUFycmF5ID0gdGhpcy5hdGxhcy5nZXRTcHJpdGVGcmFtZXMoKTtcclxuICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5zcHJpdGVBcnJheS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGxldCBzdGFydElkeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMuY291bnQpO1xyXG4gICAgICAgIHRoaXMucHNJbmRleEFycmF5LnB1c2goc3RhcnRJZHgpXHJcbiAgICAgICAgd2hpbGUgKHRoaXMucHNBcnJheS5sZW5ndGggPCB0aGlzLnBzTm9kZU51bSkge1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5wc05vZGVOdW0gLSAxOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjbG4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBzQXJyYXlbMF0ubm9kZSk7XHJcbiAgICAgICAgICAgIGNsbi5wYXJlbnQgPSB0aGlzLnBzQXJyYXlbMF0ubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGxldCBzdGFydElkeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMuY291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLnBzSW5kZXhBcnJheS5wdXNoKHN0YXJ0SWR4KTtcclxuICAgICAgICAgICAgdGhpcy5wc0FycmF5LnB1c2goY2xuLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mr4/np5Llj5HlsITnspLlrZDmlbDnm65cclxuICAgICovXHJcbiAgICBwdWJsaWMgc2VFbWlzc2lvblJhdGUobnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVtaXNzaW9uUmF0ZSA9IG51bTtcclxuICAgICAgICB0aGlzLnBzTm9kZU51bSA9IG51bSAvIDI7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRQYXJ0aWNsZVN5c3RlbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN5paw55Sf5oiQUGFydGljbGVTeXN0ZW3oioLngrnmlbDph49cclxuICAgICovXHJcbiAgICBwcml2YXRlIHJlc2V0UGFydGljbGVTeXN0ZW0oKSB7XHJcbiAgICAgICAgaWYodGhpcy5wc0FycmF5Lmxlbmd0aCA+IDEpIHsgLy8g6IqC54K55LiL57KS5a2Q5Y+R5bCE5Zmo5pWw6YeP5aSn5LqOMeaXtua4hemZpOWkmuS9meeahFxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDE7IGkgPCB0aGlzLnBzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHNBcnJheVtpXS5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBzQXJyYXkubGVuZ3RoID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wc0luZGV4QXJyYXkubGVuZ3RoID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlclBhcnRpY2xlU3lzdGVtKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5pKt5pS+57KS5a2QXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHBsYXlQYXJ0aWNsZSgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMucmVmcmVzaFNwcml0ZSwgMSAvIHRoaXMuYW5pRnBzLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmkq3mlL7nspLlrZBcclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RvcFBhcnRpY2xlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnJlZnJlc2hTcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXlQYXJ0aWNsZSgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3BQYXJ0aWNsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu/5o2i57KS5a2Q6LS05Zu+XHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWZyZXNoU3ByaXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnBzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBzQXJyYXlbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wc0luZGV4QXJyYXlbaW5kZXhdID49IHRoaXMuY291bnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBzSW5kZXhBcnJheVtpbmRleF0gPSAwO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVBcnJheVt0aGlzLnBzSW5kZXhBcnJheVtpbmRleF1dO1xyXG4gICAgICAgICAgICBlbGVtZW50LmVtaXNzaW9uUmF0ZSA9IHRoaXMuZW1pc3Npb25SYXRlO1xyXG4gICAgICAgICAgICBlbGVtZW50LmF1dG9SZW1vdmVPbkZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBzSW5kZXhBcnJheVtpbmRleF0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
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
cc._RF.push(module, '228155LraxIVph/1ddSNR8t', 'loaderManager');
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
                    var __filename = 'preview-scripts/assets/script/playLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4dcb5zaxNBCjpdOCCrYs2fV', 'playLayer');
// script/playLayer.ts

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
var DataManager_1 = require("./DataManager");
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.miniShowNode = null;
        _this.puzzleLayout = null;
        _this.aniSprite = null;
        _this.touchLayer = null;
        _this.MaxSpriteFrameList = [];
        /** 切好的拼图纹理 */
        _this.MinSpriteFrameList = [];
        /** 行数 */
        _this.rowNum = 4;
        /** 列数 */
        _this.colNum = 4;
        /** 当前使用拼图序号 */
        _this.curUsePuzzleIndex = 1;
        /** 当前使用的拼图纹理数组 */
        _this.curUsePuzzleSpriteFrame = [];
        /** 元素间隔 */
        _this.itemInterval = 0;
        /** 当前选取的元素 */
        _this.curSelectItem = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var curStage = DataManager_1.default.stageRanks[DataManager_1.default.curGameStage];
        this.rowNum = this.colNum = curStage;
        this.aniSprite.parent.setPosition(this.puzzleLayout.position.clone());
        this.initPuzzleSpriteFrame();
        this.initPuzzleNode();
        this.bindingPuzzleMoveEvent();
        this.testMesh();
    };
    /**
     * 初始化拼图纹理
    */
    NewClass.prototype.initPuzzleSpriteFrame = function () {
        var _this = this;
        this.MaxSpriteFrameList.forEach(function (maxSpriteFrame) {
            _this.MinSpriteFrameList.push(util_1.default.gridCutSpriteFrame(maxSpriteFrame, _this.rowNum, _this.colNum, _this.itemInterval));
        });
        this.curUsePuzzleSpriteFrame = this.MinSpriteFrameList[this.curUsePuzzleIndex];
    };
    /**
     * 初始化拼图节点
    */
    NewClass.prototype.initPuzzleNode = function () {
        var _this = this;
        var spriteFrameSize = this.getPuzzleSpriteFrameByIndex(0).getRect().size;
        this.puzzleLayout.getComponent(cc.Layout).spacingX = this.itemInterval;
        this.puzzleLayout.getComponent(cc.Layout).spacingY = this.itemInterval;
        this.aniSprite.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        this.aniSprite.setContentSize(util_1.default.copyObj(spriteFrameSize));
        for (var i = 0; i < this.rowNum * this.colNum; i++) {
            var puzzleNode = new cc.Node();
            var puzzleSprite = puzzleNode.addComponent(cc.Sprite);
            puzzleSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            puzzleNode["index"] = i;
            puzzleNode.setContentSize(util_1.default.copyObj(spriteFrameSize));
            this.puzzleLayout.addChild(puzzleNode);
        }
        this.scheduleOnce(function () {
            _this.puzzleLayout.getComponent(cc.Layout).enabled = false;
        });
    };
    /**
     * 绑定拼图拖拽事件
    */
    NewClass.prototype.bindingPuzzleMoveEvent = function () {
        var _this = this;
        var endCall = function (e) {
            if (!_this.touchLayer["existItme"])
                return;
            var palceNode = _this.checkPlaceAllow(_this.aniSprite.convertToWorldSpaceAR(cc.v2(0, 0)).clone());
            _this.touchLayer["existItme"] = false;
            if (palceNode) { // 放置成功
                DataManager_1.default.gameLayerScr.node.getComponent(cc.AudioSource).clip = DataManager_1.default.gameLayerScr.audioResList[9];
                DataManager_1.default.gameLayerScr.node.getComponent(cc.AudioSource).play();
                _this.curSelectItem.active = true;
                _this.curSelectItem["curPuzzleSpriteIndex"] = palceNode["curPuzzleSpriteIndex"];
                _this.curSelectItem.getComponent(cc.Sprite).spriteFrame = _this.getPuzzleSpriteFrameByIndex(palceNode["curPuzzleSpriteIndex"]);
                palceNode["curPuzzleSpriteIndex"] = _this.aniSprite["curPuzzleSpriteIndex"];
                palceNode.getComponent(cc.Sprite).spriteFrame = _this.getPuzzleSpriteFrameByIndex(_this.aniSprite["curPuzzleSpriteIndex"]);
                _this.aniSprite.active = false;
                if (_this.checkIsWin()) {
                    DataManager_1.default.gameLayerScr.showResult(true);
                    console.log("胜利");
                }
            }
            else {
                _this.aniSprite.active = false;
                _this.curSelectItem.active = true;
            }
        };
        this.touchLayer.on(cc.Node.EventType.TOUCH_START, function (e) {
            var puzzleNode = _this.getPuzzleNodeByWorldPos(e.getLocation());
            if (puzzleNode) { // 当前世界坐标上有元素
                DataManager_1.default.gameLayerScr.node.getComponent(cc.AudioSource).clip = DataManager_1.default.gameLayerScr.audioResList[9];
                DataManager_1.default.gameLayerScr.node.getComponent(cc.AudioSource).play();
                cc.Tween.stopAllByTarget(_this.aniSprite);
                _this.aniSprite.scale = 1.1;
                _this.curSelectItem = puzzleNode;
                _this.aniSprite["curPuzzleSpriteIndex"] = puzzleNode["curPuzzleSpriteIndex"];
                _this.touchLayer["existItme"] = true;
                puzzleNode.active = false;
                _this.aniSprite.setPosition(puzzleNode.position.clone());
                _this.aniSprite.active = true;
                _this.aniSprite.getComponent(cc.Sprite).spriteFrame = _this.getPuzzleSpriteFrameByIndex(puzzleNode["curPuzzleSpriteIndex"]);
                cc.tween(_this.aniSprite)
                    .to(0.05, { scale: 1.2 })
                    .to(0.05, { scale: 1 })
                    .to(0.05, { scale: 1.1 })
                    .start();
            }
        });
        this.touchLayer.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            if (_this.touchLayer["existItme"]) {
                var delay = e.getDelta();
                _this.aniSprite.setPosition(delay.add(cc.v2(_this.aniSprite.x, _this.aniSprite.y)));
            }
        });
        this.touchLayer.on(cc.Node.EventType.TOUCH_END, endCall);
        this.touchLayer.on(cc.Node.EventType.TOUCH_CANCEL, endCall);
    };
    /**
     * 生成随机放置拼图
    */
    NewClass.prototype.createRandomPuzzle = function () {
        var _this = this;
        this.curUsePuzzleIndex = util_1.default.getRandom(0, this.MaxSpriteFrameList.length - 1);
        this.initPuzzleSpriteFrame();
        var indexList = [];
        for (var i = 0; i < this.rowNum * this.colNum; i++) {
            indexList.push(i);
        }
        indexList = util_1.default.getRandomListItme(indexList, indexList.length);
        this.puzzleLayout.children.forEach(function (puzzleNode, i) {
            var puzzleSprite = puzzleNode.getComponent(cc.Sprite);
            var spriteIndex = indexList[i];
            puzzleNode["curPuzzleSpriteIndex"] = spriteIndex;
            puzzleSprite.spriteFrame = _this.getPuzzleSpriteFrameByIndex(spriteIndex);
        });
        this.miniShowNode.getComponent(cc.Sprite).spriteFrame = this.MaxSpriteFrameList[this.curUsePuzzleIndex];
    };
    /**
     * 根据index获得当前数组中纹理
    */
    NewClass.prototype.getPuzzleSpriteFrameByIndex = function (index) {
        var col = index % this.colNum;
        var row = Math.floor(index / this.colNum);
        return this.curUsePuzzleSpriteFrame[row][col];
    };
    /**
     * 检测是否放置在item上
    */
    NewClass.prototype.checkPlaceAllow = function (worldPos) {
        var placeNode = null;
        this.puzzleLayout.children.forEach(function (puzzleNode) {
            if (placeNode)
                return;
            placeNode = util_1.default.checkPointExistNode(puzzleNode, worldPos);
        });
        return placeNode;
    };
    /**
     * 获取世界坐标上拼图
    */
    NewClass.prototype.getPuzzleNodeByWorldPos = function (worldPos) {
        var placeNode = null;
        this.puzzleLayout.children.forEach(function (puzzleNode) {
            if (placeNode)
                return;
            placeNode = util_1.default.checkPointExistNode(puzzleNode, worldPos);
        });
        return placeNode;
    };
    /**
     * 检测胜利
    */
    NewClass.prototype.checkIsWin = function () {
        var isWin = true;
        this.puzzleLayout.children.forEach(function (puzzleNode) {
            if (puzzleNode["curPuzzleSpriteIndex"] != puzzleNode["index"]) {
                isWin = false;
            }
        });
        return isWin;
    };
    /**
     * 测试mesh
    */
    NewClass.prototype.testMesh = function () {
        var sp = this.miniShowNode.getComponent(cc.Sprite);
        // @ts-ignore
        sp.spriteFrame.vertices = {
            x: [0, 100, 100],
            y: [0, 0, 100],
            nu: [0, 1, 1],
            nv: [0, 0, 1],
            triangles: [0, 1, 2],
        };
        // @ts-ignore
        sp.setVertsDirty();
    };
    __decorate([
        property({ type: cc.Node, tooltip: "小图展示" })
    ], NewClass.prototype, "miniShowNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "拼图容器" })
    ], NewClass.prototype, "puzzleLayout", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "动画展示精灵" })
    ], NewClass.prototype, "aniSprite", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "触摸事件接收节点" })
    ], NewClass.prototype, "touchLayer", void 0);
    __decorate([
        property({ type: [cc.SpriteFrame], tooltip: "拼图原图纹理" })
    ], NewClass.prototype, "MaxSpriteFrameList", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwbGF5TGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsNkNBQXdDO0FBQ3hDLG9DQUErQjtBQUV6QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThQQztRQTNQRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLHdCQUFrQixHQUFxQixFQUFFLENBQUM7UUFFMUMsY0FBYztRQUNkLHdCQUFrQixHQUF3QyxFQUFFLENBQUM7UUFFN0QsU0FBUztRQUNULFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsU0FBUztRQUNULFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsZUFBZTtRQUNmLHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUU5QixrQkFBa0I7UUFDbEIsNkJBQXVCLEdBQWlDLEVBQUUsQ0FBQztRQUUzRCxXQUFXO1FBQ1gsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsY0FBYztRQUNkLG1CQUFhLEdBQVksSUFBSSxDQUFDOztRQXlOOUIsaUJBQWlCO0lBQ3JCLENBQUM7SUF4Tkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxRQUFRLEdBQUcscUJBQVcsQ0FBQyxVQUFVLENBQUMscUJBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdB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QyxDQUFDO2tEQUNkO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDO2tEQUNkO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDOytDQUNuQjtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztnREFDcEI7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDO3dEQUNaO0lBZnpCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4UDVCO0lBQUQsZUFBQztDQTlQRCxBQThQQyxDQTlQcUMsRUFBRSxDQUFDLFNBQVMsR0E4UGpEO2tCQTlQb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcbmltcG9ydCB1dGlsIGZyb20gXCIuL3V0aWwvdXRpbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLlsI/lm77lsZXnpLpcIn0pXG4gICAgbWluaVNob3dOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLmi7zlm77lrrnlmahcIn0pXG4gICAgcHV6emxlTGF5b3V0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLliqjnlLvlsZXnpLrnsr7ngbVcIn0pXG4gICAgYW5pU3ByaXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLop6bmkbjkuovku7bmjqXmlLboioLngrlcIn0pXG4gICAgdG91Y2hMYXllcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IFtjYy5TcHJpdGVGcmFtZV0sIHRvb2x0aXA6IFwi5ou85Zu+5Y6f5Zu+57q555CGXCJ9KVxuICAgIE1heFNwcml0ZUZyYW1lTGlzdDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgLyoqIOWIh+WlveeahOaLvOWbvue6ueeQhiAqL1xuICAgIE1pblNwcml0ZUZyYW1lTGlzdDogQXJyYXk8QXJyYXk8QXJyYXk8Y2MuU3ByaXRlRnJhbWU+Pj4gPSBbXTtcblxuICAgIC8qKiDooYzmlbAgKi9cbiAgICByb3dOdW06IG51bWJlciA9IDQ7XG5cbiAgICAvKiog5YiX5pWwICovXG4gICAgY29sTnVtOiBudW1iZXIgPSA0O1xuXG4gICAgLyoqIOW9k+WJjeS9v+eUqOaLvOWbvuW6j+WPtyAqL1xuICAgIGN1clVzZVB1enpsZUluZGV4OiBudW1iZXIgPSAxO1xuXG4gICAgLyoqIOW9k+WJjeS9v+eUqOeahOaLvOWbvue6ueeQhuaVsOe7hCAqL1xuICAgIGN1clVzZVB1enpsZVNwcml0ZUZyYW1lOiBBcnJheTxBcnJheTxjYy5TcHJpdGVGcmFtZT4+ID0gW107XG5cbiAgICAvKiog5YWD57Sg6Ze06ZqUICovXG4gICAgaXRlbUludGVydmFsOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIOW9k+WJjemAieWPlueahOWFg+e0oCAqL1xuICAgIGN1clNlbGVjdEl0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IGN1clN0YWdlID0gRGF0YU1hbmFnZXIuc3RhZ2VSYW5rc1tEYXRhTWFuYWdlci5jdXJHYW1lU3RhZ2VdO1xuXG4gICAgICAgIHRoaXMucm93TnVtID0gdGhpcy5jb2xOdW0gPSBjdXJTdGFnZTtcbiAgICAgICAgdGhpcy5hbmlTcHJpdGUucGFyZW50LnNldFBvc2l0aW9uKHRoaXMucHV6emxlTGF5b3V0LnBvc2l0aW9uLmNsb25lKCkpO1xuICAgICAgICB0aGlzLmluaXRQdXp6bGVTcHJpdGVGcmFtZSgpO1xuICAgICAgICB0aGlzLmluaXRQdXp6bGVOb2RlKCk7XG4gICAgICAgIHRoaXMuYmluZGluZ1B1enpsZU1vdmVFdmVudCgpO1xuICAgICAgICB0aGlzLnRlc3RNZXNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5ou85Zu+57q555CGXG4gICAgKi9cbiAgICBpbml0UHV6emxlU3ByaXRlRnJhbWUoKSB7XG4gICAgICAgIHRoaXMuTWF4U3ByaXRlRnJhbWVMaXN0LmZvckVhY2goKG1heFNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLk1pblNwcml0ZUZyYW1lTGlzdC5wdXNoKHV0aWwuZ3JpZEN1dFNwcml0ZUZyYW1lKG1heFNwcml0ZUZyYW1lLCB0aGlzLnJvd051bSwgdGhpcy5jb2xOdW0sIHRoaXMuaXRlbUludGVydmFsKSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jdXJVc2VQdXp6bGVTcHJpdGVGcmFtZSA9IHRoaXMuTWluU3ByaXRlRnJhbWVMaXN0W3RoaXMuY3VyVXNlUHV6emxlSW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaLvOWbvuiKgueCuVxuICAgICovXG4gICAgaW5pdFB1enpsZU5vZGUoKSB7XG4gICAgICAgIGxldCBzcHJpdGVGcmFtZVNpemU6IGNjLlNpemUgPSB0aGlzLmdldFB1enpsZVNwcml0ZUZyYW1lQnlJbmRleCgwKS5nZXRSZWN0KCkuc2l6ZTtcblxuICAgICAgICB0aGlzLnB1enpsZUxheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWCA9IHRoaXMuaXRlbUludGVydmFsO1xuICAgICAgICB0aGlzLnB1enpsZUxheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHRoaXMuaXRlbUludGVydmFsO1xuXG4gICAgICAgIHRoaXMuYW5pU3ByaXRlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgdGhpcy5hbmlTcHJpdGUuc2V0Q29udGVudFNpemUodXRpbC5jb3B5T2JqKHNwcml0ZUZyYW1lU2l6ZSkpO1xuXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMucm93TnVtICogdGhpcy5jb2xOdW07IGkrKykge1xuICAgICAgICAgICAgbGV0IHB1enpsZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgbGV0IHB1enpsZVNwcml0ZSA9IHB1enpsZU5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbiAgICAgICAgICAgIHB1enpsZVNwcml0ZS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgICAgICAgICBwdXp6bGVOb2RlW1wiaW5kZXhcIl0gPSBpO1xuICAgICAgICAgICAgcHV6emxlTm9kZS5zZXRDb250ZW50U2l6ZSh1dGlsLmNvcHlPYmooc3ByaXRlRnJhbWVTaXplKSk7XG4gICAgICAgICAgICB0aGlzLnB1enpsZUxheW91dC5hZGRDaGlsZChwdXp6bGVOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHV6emxlTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnu5Hlrprmi7zlm77mi5bmi73kuovku7ZcbiAgICAqL1xuICAgIGJpbmRpbmdQdXp6bGVNb3ZlRXZlbnQoKSB7XG4gICAgICAgIGxldCBlbmRDYWxsID0gKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnRvdWNoTGF5ZXJbXCJleGlzdEl0bWVcIl0pIHJldHVybjtcbiAgICAgICAgICAgIGxldCBwYWxjZU5vZGUgPSB0aGlzLmNoZWNrUGxhY2VBbGxvdyh0aGlzLmFuaVNwcml0ZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLmNsb25lKCkpO1xuXG4gICAgICAgICAgICB0aGlzLnRvdWNoTGF5ZXJbXCJleGlzdEl0bWVcIl0gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYocGFsY2VOb2RlKSB7IC8vIOaUvue9ruaIkOWKn1xuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmdhbWVMYXllclNjci5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IERhdGFNYW5hZ2VyLmdhbWVMYXllclNjci5hdWRpb1Jlc0xpc3RbOV07XG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuZ2FtZUxheWVyU2NyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTZWxlY3RJdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTZWxlY3RJdGVtW1wiY3VyUHV6emxlU3ByaXRlSW5kZXhcIl0gPSBwYWxjZU5vZGVbXCJjdXJQdXp6bGVTcHJpdGVJbmRleFwiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clNlbGVjdEl0ZW0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFB1enpsZVNwcml0ZUZyYW1lQnlJbmRleChwYWxjZU5vZGVbXCJjdXJQdXp6bGVTcHJpdGVJbmRleFwiXSk7XG4gICAgICAgICAgICAgICAgcGFsY2VOb2RlW1wiY3VyUHV6emxlU3ByaXRlSW5kZXhcIl0gPSB0aGlzLmFuaVNwcml0ZVtcImN1clB1enpsZVNwcml0ZUluZGV4XCJdO1xuICAgICAgICAgICAgICAgIHBhbGNlTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0UHV6emxlU3ByaXRlRnJhbWVCeUluZGV4KHRoaXMuYW5pU3ByaXRlW1wiY3VyUHV6emxlU3ByaXRlSW5kZXhcIl0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbmlTcHJpdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja0lzV2luKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuZ2FtZUxheWVyU2NyLnNob3dSZXN1bHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6IOc5YipXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmlTcHJpdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTZWxlY3RJdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG91Y2hMYXllci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAgICAgICAgIGxldCBwdXp6bGVOb2RlID0gdGhpcy5nZXRQdXp6bGVOb2RlQnlXb3JsZFBvcyhlLmdldExvY2F0aW9uKCkpO1xuXG4gICAgICAgICAgICBpZihwdXp6bGVOb2RlKSB7IC8vIOW9k+WJjeS4lueVjOWdkOagh+S4iuacieWFg+e0oFxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmdhbWVMYXllclNjci5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IERhdGFNYW5hZ2VyLmdhbWVMYXllclNjci5hdWRpb1Jlc0xpc3RbOV07XG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuZ2FtZUxheWVyU2NyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuYW5pU3ByaXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaVNwcml0ZS5zY2FsZSA9IDEuMTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clNlbGVjdEl0ZW0gPSBwdXp6bGVOb2RlO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pU3ByaXRlW1wiY3VyUHV6emxlU3ByaXRlSW5kZXhcIl0gPSBwdXp6bGVOb2RlW1wiY3VyUHV6emxlU3ByaXRlSW5kZXhcIl07XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaExheWVyW1wiZXhpc3RJdG1lXCJdID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHB1enpsZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmlTcHJpdGUuc2V0UG9zaXRpb24ocHV6emxlTm9kZS5wb3NpdGlvbi5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaVNwcml0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pU3ByaXRlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5nZXRQdXp6bGVTcHJpdGVGcmFtZUJ5SW5kZXgocHV6emxlTm9kZVtcImN1clB1enpsZVNwcml0ZUluZGV4XCJdKTtcblxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYW5pU3ByaXRlKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4wNSwge3NjYWxlOiAxLjJ9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4wNSwge3NjYWxlOiAxfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDUsIHtzY2FsZTogMS4xfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudG91Y2hMYXllci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy50b3VjaExheWVyW1wiZXhpc3RJdG1lXCJdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlbGF5ID0gZS5nZXREZWx0YSgpO1xuICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuYW5pU3ByaXRlLnNldFBvc2l0aW9uKGRlbGF5LmFkZChjYy52Mih0aGlzLmFuaVNwcml0ZS54LCB0aGlzLmFuaVNwcml0ZS55KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b3VjaExheWVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZW5kQ2FsbCk7XG4gICAgICAgIHRoaXMudG91Y2hMYXllci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGVuZENhbGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeUn+aIkOmaj+acuuaUvue9ruaLvOWbvlxuICAgICovXG4gICAgY3JlYXRlUmFuZG9tUHV6emxlKCkge1xuICAgICAgICB0aGlzLmN1clVzZVB1enpsZUluZGV4ID0gdXRpbC5nZXRSYW5kb20oMCwgdGhpcy5NYXhTcHJpdGVGcmFtZUxpc3QubGVuZ3RoLTEpO1xuICAgICAgICB0aGlzLmluaXRQdXp6bGVTcHJpdGVGcmFtZSgpO1xuICAgICAgICBsZXQgaW5kZXhMaXN0ID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5yb3dOdW0gKiB0aGlzLmNvbE51bTsgaSsrKSB7XG4gICAgICAgICAgICBpbmRleExpc3QucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4TGlzdCA9IHV0aWwuZ2V0UmFuZG9tTGlzdEl0bWUoaW5kZXhMaXN0LCBpbmRleExpc3QubGVuZ3RoKTtcblxuICAgICAgICB0aGlzLnB1enpsZUxheW91dC5jaGlsZHJlbi5mb3JFYWNoKChwdXp6bGVOb2RlLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHV6emxlU3ByaXRlID0gcHV6emxlTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGxldCBzcHJpdGVJbmRleCA9IGluZGV4TGlzdFtpXTtcblxuICAgICAgICAgICAgcHV6emxlTm9kZVtcImN1clB1enpsZVNwcml0ZUluZGV4XCJdID0gc3ByaXRlSW5kZXg7XG4gICAgICAgICAgICBwdXp6bGVTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFB1enpsZVNwcml0ZUZyYW1lQnlJbmRleChzcHJpdGVJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1pbmlTaG93Tm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuTWF4U3ByaXRlRnJhbWVMaXN0W3RoaXMuY3VyVXNlUHV6emxlSW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNrmluZGV46I635b6X5b2T5YmN5pWw57uE5Lit57q555CGXG4gICAgKi9cbiAgICBnZXRQdXp6bGVTcHJpdGVGcmFtZUJ5SW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgY29sID0gaW5kZXggJSB0aGlzLmNvbE51bTtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLmNvbE51bSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VyVXNlUHV6emxlU3ByaXRlRnJhbWVbcm93XVtjb2xdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOajgOa1i+aYr+WQpuaUvue9ruWcqGl0ZW3kuIpcbiAgICAqL1xuICAgIGNoZWNrUGxhY2VBbGxvdyh3b3JsZFBvczogY2MuVmVjMiB8IGNjLlZlYzMpOiBjYy5Ob2RlIHtcbiAgICAgICAgbGV0IHBsYWNlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5wdXp6bGVMYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCgocHV6emxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYocGxhY2VOb2RlKSByZXR1cm47XG4gICAgICAgICAgICBwbGFjZU5vZGUgPSB1dGlsLmNoZWNrUG9pbnRFeGlzdE5vZGUocHV6emxlTm9kZSwgd29ybGRQb3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGxhY2VOb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS4lueVjOWdkOagh+S4iuaLvOWbvlxuICAgICovXG4gICAgZ2V0UHV6emxlTm9kZUJ5V29ybGRQb3Mod29ybGRQb3M6IGNjLlZlYzIgfCBjYy5WZWMzKSB7XG4gICAgICAgIGxldCBwbGFjZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMucHV6emxlTGF5b3V0LmNoaWxkcmVuLmZvckVhY2goKHB1enpsZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmKHBsYWNlTm9kZSkgcmV0dXJuO1xuICAgICAgICAgICAgcGxhY2VOb2RlID0gdXRpbC5jaGVja1BvaW50RXhpc3ROb2RlKHB1enpsZU5vZGUsIHdvcmxkUG9zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBsYWNlTm9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmo4DmtYvog5zliKlcbiAgICAqL1xuICAgIGNoZWNrSXNXaW4oKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc1dpbiA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5wdXp6bGVMYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCgocHV6emxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYocHV6emxlTm9kZVtcImN1clB1enpsZVNwcml0ZUluZGV4XCJdICE9IHB1enpsZU5vZGVbXCJpbmRleFwiXSkge1xuICAgICAgICAgICAgICAgIGlzV2luID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpc1dpbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmtYvor5VtZXNoXG4gICAgKi9cbiAgICB0ZXN0TWVzaCgpIHtcbiAgICAgICAgbGV0IHNwID0gdGhpcy5taW5pU2hvd05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzcC5zcHJpdGVGcmFtZS52ZXJ0aWNlcyA9IHtcbiAgICAgICAgICAgIHg6IFswLCAxMDAsIDEwMF0sXG4gICAgICAgICAgICB5OiBbMCwgMCwgMTAwXSxcbiAgICAgICAgICAgIG51OiBbMCwgMSwgMV0sXG4gICAgICAgICAgICBudjogWzAsIDAsIDFdLCBcbiAgICAgICAgICAgIHRyaWFuZ2xlczogWzAsIDEsIDJdLFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNwLnNldFZlcnRzRGlydHkoKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/HallManger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aebc05iEkpIa6XeWy1zw3Ot', 'HallManger');
// script/HallManger.ts

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
var DataManager_1 = require("./DataManager");
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioResList = [];
        _this.tipNode = null;
        _this.soundBtn = null;
        _this.userInfo = null;
        _this.contentLayout = null;
        _this.phbNode = null;
        _this.PromoPage = null;
        _this.chartsPage = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.upadtaUserInfo();
        this.updateUserNum();
        this.listeBtnAni();
        this.creatRandUserInfo();
    };
    /**
     * 游戏内按钮绑定事件
    */
    NewClass.prototype.btnEvent = function (event) {
        var name = event.target.name;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        switch (name) {
            case "btnStartGame":
            case "icon1":
            case "icon2":
            case "icon3":
            case "icon4":
            case "icon5":
            case "icon6":
                this.startGame(name);
                cc.director.loadScene("game");
                break;
            case "backBtn":
                cc.director.loadScene("JP_startGame");
                break;
            case "tipBtn":
                this.openTipNode();
                break;
            case "closeTipBtn":
                this.hideTipNode();
                break;
            case "soundBtn":
                this.openOrCloseSound();
                break;
            case "shareBtn":
                this.shareFn();
                break;
            case "closePromoBtn":
                this.closePromo();
                break;
            case "closeChartsBtn":
                this.closeChart();
                break;
        }
    };
    /**
     * 进入游戏
    */
    NewClass.prototype.startGame = function (btnName) {
        switch (btnName) {
            case "icon1":
                DataManager_1.default.curGameStage = 0;
                break;
            case "icon2":
                DataManager_1.default.curGameStage = 1;
                break;
            case "icon3":
                DataManager_1.default.curGameStage = 2;
                break;
            case "icon4":
                DataManager_1.default.curGameStage = 3;
                break;
            case "icon5":
                DataManager_1.default.curGameStage = 4;
                break;
            case "icon6":
                DataManager_1.default.curGameStage = 5;
                break;
            case "btnStartGame":
                DataManager_1.default.curGameStage = util_1.default.getRandom(0, DataManager_1.default.stageRanks.length - 1);
                break;
        }
        cc.director.loadScene("game");
    };
    /**绑定按钮动画 */
    NewClass.prototype.listeBtnAni = function () {
        this.contentLayout.children.forEach(function (e) {
            e.on(cc.Node.EventType.TOUCH_END, function () {
                cc.tween(e)
                    .to(0.2, { scale: 1.1 })
                    .to(0.1, { scale: 1 })
                    .start();
            });
        });
    };
    /**打开提示 */
    NewClass.prototype.openTipNode = function () {
        this.tipNode.getChildByName("rule").scale = 0.8;
        this.tipNode.active = true;
        cc.tween(this.tipNode.getChildByName("rule"))
            .to(0.2, { scale: 1 })
            .start();
    };
    /**
    * 关闭提示展示
   */
    NewClass.prototype.hideTipNode = function () {
        var _this = this;
        cc.tween(this.tipNode.getChildByName("rule"))
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.tipNode.active = false;
            _this.tipNode.getChildByName("rule").scale = 1;
        })
            .start();
    };
    /**关闭兑换奖励框 */
    NewClass.prototype.closePromo = function () {
        this.PromoPage.active = false;
        var rule = this.PromoPage.getChildByName('rule');
        rule.getChildByName('EditBox').getComponent(cc.EditBox).string = '';
    };
    NewClass.prototype.closeChart = function () {
        this.chartsPage.active = false;
    };
    /**打开兑换奖励框 */
    NewClass.prototype.openPromo = function () {
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        this.PromoPage.getChildByName("rule").scale = 1.2;
        this.PromoPage.active = true;
        cc.tween(this.PromoPage.getChildByName("rule"))
            .to(0.2, { scale: 1 })
            .start();
    };
    /**打开兑换奖励框 */
    NewClass.prototype.openCharts = function () {
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        this.chartsPage.getChildByName("rule").scale = 1.2;
        this.chartsPage.active = true;
        cc.tween(this.chartsPage.getChildByName("rule"))
            .to(0.2, { scale: 1 })
            .start();
    };
    /**
  * 开启或关闭音效
 */
    NewClass.prototype.openOrCloseSound = function () {
        if (DataManager_1.default.curSoundIsClose) {
            this.soundBtn.color = cc.color(170, 170, 170, 255);
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.soundBtn.color = cc.color(255, 255, 255, 255);
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        DataManager_1.default.curSoundIsClose = !DataManager_1.default.curSoundIsClose;
    };
    /**更新用户信息 */
    NewClass.prototype.upadtaUserInfo = function () {
        this.userInfo.getChildByName("userID").getComponent(cc.Label).string = "ID:" + DataManager_1.default.userId;
        this.userInfo.getChildByName("scoreLaberl").getComponent(cc.Label).string = "" + DataManager_1.default.curWinNum;
    };
    /**更新用户房间人数 */
    NewClass.prototype.updateUserNum = function () {
        var array = util_1.default.getRandArray(100, 5000, this.contentLayout.children.length);
        this.contentLayout.children.forEach(function (e, index) {
            if (e.getChildByName("num")) {
                e.getChildByName("num").getComponent(cc.Label).string = array[index] + '';
            }
        });
    };
    /**用户排行榜 */
    NewClass.prototype.creatRandUserInfo = function () {
        var newUserId = '';
        for (var j = 1; j <= 5; j++) {
            for (var i = 0; i < DataManager_1.default.userId.length; i++) {
                newUserId += util_1.default.getRandom(1, 9);
            }
            var userId = this.phbNode.children[j].getChildByName('userID');
            userId.getComponent(cc.Label).string = "ID:" + newUserId;
            newUserId = '';
        }
    };
    /**分享事件 */
    NewClass.prototype.shareFn = function () {
    };
    __decorate([
        property({ type: [cc.AudioClip], tooltip: "音效数组" })
    ], NewClass.prototype, "audioResList", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏提示页面" })
    ], NewClass.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "音效按钮节点" })
    ], NewClass.prototype, "soundBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "用户信息" })
    ], NewClass.prototype, "userInfo", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "icon节点" })
    ], NewClass.prototype, "contentLayout", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "排行榜节点" })
    ], NewClass.prototype, "phbNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "兑换奖励框" })
    ], NewClass.prototype, "PromoPage", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "排行榜页面" })
    ], NewClass.prototype, "chartsPage", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxIYWxsTWFuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDZDQUF3QztBQUN4QyxvQ0FBK0I7QUFFekIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4TkM7UUEzTkcsa0JBQVksR0FBbUIsRUFBRSxDQUFDO1FBR2xDLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFHdkIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUd4QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBR3hCLG1CQUFhLEdBQVksSUFBSSxDQUFBO1FBRzdCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFHdkIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQTs7UUFxTTFCLGlCQUFpQjtJQUNyQixDQUFDO0lBbk1HLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRUQ7O01BRUU7SUFDRiwyQkFBUSxHQUFSLFVBQVMsS0FBZTtRQUNwQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxD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QUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQztnREFDbEI7SUF4QlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThONUI7SUFBRCxlQUFDO0NBOU5ELEFBOE5DLENBOU5xQyxFQUFFLENBQUMsU0FBUyxHQThOakQ7a0JBOU5vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHV0aWwgZnJvbSBcIi4vdXRpbC91dGlsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkF1ZGlvQ2xpcF0sdG9vbHRpcDpcIumfs+aViOaVsOe7hFwifSlcbiAgICBhdWRpb1Jlc0xpc3Q6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi5ri45oiP5o+Q56S66aG16Z2iXCJ9KVxuICAgIHRpcE5vZGU6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi6Z+z5pWI5oyJ6ZKu6IqC54K5XCJ9KVxuICAgIHNvdW5kQnRuOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIueUqOaIt+S/oeaBr1wifSlcbiAgICB1c2VySW5mbzogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCJpY29u6IqC54K5XCJ9KVxuICAgIGNvbnRlbnRMYXlvdXQ6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi5o6S6KGM5qac6IqC54K5XCJ9KVxuICAgIHBoYk5vZGU6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi5YWR5o2i5aWW5Yqx5qGGXCJ9KVxuICAgIFByb21vUGFnZTogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLmjpLooYzmppzpobXpnaJcIn0pXG4gICAgY2hhcnRzUGFnZTogY2MuTm9kZSA9IG51bGxcblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnVwYWR0YVVzZXJJbmZvKClcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyTnVtKClcbiAgICAgICAgdGhpcy5saXN0ZUJ0bkFuaSgpXG4gICAgICAgIHRoaXMuY3JlYXRSYW5kVXNlckluZm8oKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+WGheaMiemSrue7keWumuS6i+S7tlxuICAgICovXG4gICAgYnRuRXZlbnQoZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICBzd2l0Y2gobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImJ0blN0YXJ0R2FtZVwiOlxuICAgICAgICAgICAgY2FzZSBcImljb24xXCI6XG4gICAgICAgICAgICBjYXNlIFwiaWNvbjJcIjpcbiAgICAgICAgICAgIGNhc2UgXCJpY29uM1wiOlxuICAgICAgICAgICAgY2FzZSBcImljb240XCI6XG4gICAgICAgICAgICBjYXNlIFwiaWNvbjVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJpY29uNlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFja0J0blwiOlxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkpQX3N0YXJ0R2FtZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0aXBCdG5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5UaXBOb2RlKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVRpcEJ0blwiOlxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRpcE5vZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzb3VuZEJ0blwiOlxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk9yQ2xvc2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNoYXJlQnRuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUZuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VQcm9tb0J0blwiOiBcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlUHJvbW8oKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VDaGFydHNCdG5cIjogXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUNoYXJ0KClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+b5YWl5ri45oiPXG4gICAgKi9cbiAgICBzdGFydEdhbWUoYnRuTmFtZSkge1xuICAgICAgICBzd2l0Y2goYnRuTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImljb24xXCI6XG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuY3VyR2FtZVN0YWdlID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpY29uMlwiOlxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVTdGFnZSA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaWNvbjNcIjpcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lU3RhZ2UgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImljb240XCI6XG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuY3VyR2FtZVN0YWdlID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpY29uNVwiOlxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVTdGFnZSA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaWNvbjZcIjpcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lU3RhZ2UgPSA1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ0blN0YXJ0R2FtZVwiOlxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVTdGFnZSA9IHV0aWwuZ2V0UmFuZG9tKDAsIERhdGFNYW5hZ2VyLnN0YWdlUmFua3MubGVuZ3RoLTEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XG4gICAgfVxuXG4gICAgLyoq57uR5a6a5oyJ6ZKu5Yqo55S7ICovXG4gICAgbGlzdGVCdG5BbmkoKXtcbiAgICAgICAgdGhpcy5jb250ZW50TGF5b3V0LmNoaWxkcmVuLmZvckVhY2goZT0+e1xuICAgICAgICAgICAgZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsKCk9PntcbiAgICAgICAgICAgICAgICBjYy50d2VlbihlKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLHtzY2FsZToxLjF9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLHtzY2FsZToxfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoq5omT5byA5o+Q56S6ICovXG4gICAgb3BlblRpcE5vZGUoKXtcbiAgICAgICAgdGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKS5zY2FsZSA9IDAuODtcbiAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikpXG4gICAgICAgIC50bygwLjIsIHtzY2FsZTogMX0pXG4gICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgICAvKipcbiAgICAgKiDlhbPpl63mj5DnpLrlsZXnpLpcbiAgICAqL1xuICAgICBoaWRlVGlwTm9kZSgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKSlcbiAgICAgICAgICAgIC50bygwLjIsIHtzY2FsZTogMC41fSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKS5zY2FsZSA9IDE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgLyoq5YWz6Zet5YWR5o2i5aWW5Yqx5qGGICovXG4gICAgY2xvc2VQcm9tbygpe1xuICAgICAgICB0aGlzLlByb21vUGFnZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBsZXQgcnVsZSA9IHRoaXMuUHJvbW9QYWdlLmdldENoaWxkQnlOYW1lKCdydWxlJylcbiAgICAgICAgcnVsZS5nZXRDaGlsZEJ5TmFtZSgnRWRpdEJveCcpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmcgPSAnJ1xuICAgIH1cblxuICAgIGNsb3NlQ2hhcnQoKXtcbiAgICAgICAgdGhpcy5jaGFydHNQYWdlLmFjdGl2ZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgIC8qKuaJk+W8gOWFkeaNouWlluWKseahhiAqL1xuICAgICBvcGVuUHJvbW8oKXtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgIHRoaXMuUHJvbW9QYWdlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKS5zY2FsZSA9IDEuMjtcbiAgICAgICAgdGhpcy5Qcm9tb1BhZ2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5Qcm9tb1BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJydWxlXCIpKVxuICAgICAgICAudG8oMC4yLCB7c2NhbGU6IDF9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAgLyoq5omT5byA5YWR5o2i5aWW5Yqx5qGGICovXG4gICAgIG9wZW5DaGFydHMoKXtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgIHRoaXMuY2hhcnRzUGFnZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikuc2NhbGUgPSAxLjI7XG4gICAgICAgIHRoaXMuY2hhcnRzUGFnZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXJ0c1BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJydWxlXCIpKVxuICAgICAgICAudG8oMC4yLCB7c2NhbGU6IDF9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAgICAvKipcbiAgICAgKiDlvIDlkK/miJblhbPpl63pn7PmlYhcbiAgICAqL1xuICAgICAgIG9wZW5PckNsb3NlU291bmQoKSB7XG4gICAgICAgIGlmKERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJ0bi5jb2xvciA9IGNjLmNvbG9yKDE3MCwgMTcwLCAxNzAsIDI1NSk7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAxO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcbiAgICAgICAgfVxuICAgICAgICBEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2UgPSAhRGF0YU1hbmFnZXIuY3VyU291bmRJc0Nsb3NlO1xuICAgIH1cblxuICAgIC8qKuabtOaWsOeUqOaIt+S/oeaBryAqL1xuICAgIHVwYWR0YVVzZXJJbmZvKCl7XG4gICAgICAgIHRoaXMudXNlckluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VySURcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVwiSUQ6XCIgKyAgRGF0YU1hbmFnZXIudXNlcklkXG4gICAgICAgIHRoaXMudXNlckluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJzY29yZUxhYmVybFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XCJcIiArICBEYXRhTWFuYWdlci5jdXJXaW5OdW1cbiAgICB9XG4gICAgLyoq5pu05paw55So5oi35oi/6Ze05Lq65pWwICovXG4gICAgdXBkYXRlVXNlck51bSgpe1xuICAgICAgICBsZXQgYXJyYXkgPSB1dGlsLmdldFJhbmRBcnJheSgxMDAsNTAwMCx0aGlzLmNvbnRlbnRMYXlvdXQuY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICB0aGlzLmNvbnRlbnRMYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCgoZSxpbmRleCkgPT57XG4gICAgICAgICAgICBpZihlLmdldENoaWxkQnlOYW1lKFwibnVtXCIpKSB7XG4gICAgICAgICAgICAgICAgZS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGFycmF5W2luZGV4XSArICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8qKueUqOaIt+aOkuihjOamnCAqL1xuICAgIGNyZWF0UmFuZFVzZXJJbmZvKCl7XG4gICAgICAgIGxldCBuZXdVc2VySWQ6c3RyaW5nID0gJydcbiAgICAgICAgZm9yKGxldCBqPTE7ajw9NTtqKyspe1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxEYXRhTWFuYWdlci51c2VySWQubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgbmV3VXNlcklkICs9IHV0aWwuZ2V0UmFuZG9tKDEsOSlcbiAgICAgICAgICAgfVxuICAgICAgICAgICBsZXQgdXNlcklkID0gdGhpcy5waGJOb2RlLmNoaWxkcmVuW2pdLmdldENoaWxkQnlOYW1lKCd1c2VySUQnKVxuICAgICAgICAgICB1c2VySWQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIklEOlwiICsgbmV3VXNlcklkXG4gICAgICAgICAgIG5ld1VzZXJJZCA9ICcnXG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgLyoq5YiG5Lqr5LqL5Lu2ICovXG4gICAgc2hhcmVGbigpe1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/jumpStr/JumpStr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63cd6J8kBNB2IiMZc+XZM7a', 'JumpStr');
// jumpStr/JumpStr.ts

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
            label.lineHeight = this.fontSize;
            label.string = str;
            label.fontSize = this.fontSize;
            this.node.addChild(labelNode);
        }
        this.playStrJump();
        this.schedule(function () {
            _this.playStrJump();
        }, this.aniTime * this.str.length / 2 + 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcanVtcFN0clxcSnVtcFN0ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1FQztRQWhFRyxTQUFHLEdBQVcsRUFBRSxDQUFDO1FBR2pCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsYUFBTyxHQUFXLENBQUMsQ0FBQzs7UUF5RHBCLGlCQUFpQjtJQUNyQixDQUFDO0lBdERHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0MsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFFbkQsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFN0MsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ25CLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxPQUFPLEdBQUcsVUFBQyxTQUFrQjtZQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztpQkFDZCxRQUFRLENBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUM3QyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUNsRCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FDcEM7Z0JBQ0QsbUJBQW1CO2lCQUNsQixLQUFLLEVBQUUsQ0FBQztZQUdiLElBQUcsUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXO2dCQUNwRCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDLEVBQUUsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQyxDQUFBO1FBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFMUMsQ0FBQztJQTdERDtRQURDLFFBQVEsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQzt5Q0FDZjtJQUdqQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQzs4Q0FDdkI7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUM7NkNBQzVCO0lBVEgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1FNUI7SUFBRCxlQUFDO0NBbkVELEFBbUVDLENBbkVxQyxFQUFFLENBQUMsU0FBUyxHQW1FakQ7a0JBbkVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHt0b29sdGlwOiBcIumcgOimgei3s+WKqOeahOWtl+espuS4slwifSlcbiAgICBzdHI6IFN0cmluZyA9IFwiXCI7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIuWtl+espuWkp+Wwj1wifSlcbiAgICBmb250U2l6ZTogbnVtYmVyID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwi5Y2V5Liq5a2X56ym6Lez5Yqo5pe26Ze0XCJ9KVxuICAgIGFuaVRpbWU6IG51bWJlciA9IDA7XG5cblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IExheW91dCA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuTGF5b3V0KTtcblxuICAgICAgICBMYXlvdXQudHlwZSA9IGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw7XG4gICAgICAgIExheW91dC5yZXNpemVNb2RlID0gY2MuTGF5b3V0LlJlc2l6ZU1vZGUuQ09OVEFJTkVSO1xuXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8dGhpcy5zdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdHIgPSB0aGlzLnN0cltpXTtcbiAgICAgICAgICAgIGxldCBsYWJlbE5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbGFiZWxOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gc3RyO1xuICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGxhYmVsTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYXlTdHJKdW1wKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5U3RySnVtcCgpO1xuICAgICAgICB9LCB0aGlzLmFuaVRpbWUqdGhpcy5zdHIubGVuZ3RoLzIgKyAxKTtcbiAgICB9XG5cbiAgICBwbGF5U3RySnVtcCgpIHtcbiAgICAgICAgbGV0IGp1bXBUaW1lID0gdGhpcy5hbmlUaW1lLzI7XG4gICAgICAgIGxldCBzdHJJbmRleCA9IDA7XG4gICAgICAgIGxldCBqdW1wU3RyID0gKGxhYmVsTm9kZTogY2MuTm9kZSkgPT4ge1xuICAgICAgICAgICAgY2MudHdlZW4obGFiZWxOb2RlKVxuICAgICAgICAgICAgICAgIC5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50byhqdW1wVGltZSwge3k6IHRoaXMuZm9udFNpemUvMn0pLFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKGp1bXBUaW1lLzQqMywge3k6IC10aGlzLmZvbnRTaXplLzN9KSxcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50byhqdW1wVGltZS80LCB7eTogMH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC8vIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYoc3RySW5kZXggPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoLTEpIHsgLy8g5pyq5Yiw5pyA5ZCO5LiA5Liq5a2X56ymXG4gICAgICAgICAgICAgICAgc3RySW5kZXgrKztcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGp1bXBTdHIodGhpcy5ub2RlLmNoaWxkcmVuW3N0ckluZGV4XSk7XG4gICAgICAgICAgICAgICAgfSwganVtcFRpbWUvMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBqdW1wU3RyKHRoaXMubm9kZS5jaGlsZHJlbltzdHJJbmRleF0pO1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GameWheel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18a0cX5k81IMrDI6b1T6Rlf', 'GameWheel');
// script/GameWheel.ts

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
exports.AREA_COUNT_LIST = exports.WHEEL_TYPES = void 0;
var define_1 = require("./util/define");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 转盘上每个节点对应角度集合
*/
var AREA_ANGEL_LIST = [14.35, 45, 22.5];
/**
 * 转盘类型
 * MINI 小转盘
 * MEDIUM 中转盘
 * MAX 大转盘
*/
exports.WHEEL_TYPES = {
    MINI: 0,
    MEDIUM: 1,
    MAX: 2,
};
/**
 * 转盘上节点数量集合
*/
exports.AREA_COUNT_LIST = [25, 8, 16];
var GameWheel = /** @class */ (function (_super) {
    __extends(GameWheel, _super);
    function GameWheel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheelNodes = [];
        _this.lightNode = null;
        _this.accelerated = 0;
        _this.deceleration = 0;
        _this.maxRangeSpeed = 0;
        /**
         * 当前转盘类型
        */
        _this._curWheelType = exports.WHEEL_TYPES.MINI;
        _this._range = 0;
        _this._currentRotationSpeed = 0;
        _this._targetRotation = 0;
        _this._totalPrize = 0;
        _this._resultId = 0;
        _this._lotteryId = 0;
        _this._interval = 0;
        /**
         * WheelState.Stand:静止 WheelState.Acelerara:加速 WheelState.Desacelerar:减速
        */
        _this._currentState = define_1.WheelState.Stand;
        _this._mixRotation = 0;
        // LIFE-CYCLE CALLBACKS:
        _this._wheelConfig = [];
        _this._maxTargetNode = null;
        _this._isPlayEndSound = false;
        /** 结束回调 */
        _this.endCall = null;
        return _this;
    }
    GameWheel.prototype.onLoad = function () {
        this.resetAngle();
        // this.lightNode.active = false;
    };
    GameWheel.prototype.updateWheelConfig = function (wheelConfig) {
        var _this = this;
        // if (this.getRunning()) return;
        this.resetWheel();
        if (this._wheelConfig.length > 0) {
            return;
        }
        this._wheelConfig = [];
        var wheelData;
        wheelConfig.forEach(function (v) {
            wheelData = {};
            if (v.value >= 0) {
                wheelData.type = define_1.WheelType.BetLv;
                wheelData.num = v.value / 100;
            }
            else {
                wheelData.type = define_1.WheelType.Spin;
                wheelData.num = Math.abs(v.value) / 100;
            }
            _this._wheelConfig.push(wheelData);
        });
        this.init();
    };
    GameWheel.prototype.init = function () {
        // this.playZoomInAnimation();
        this.initWheel();
    };
    /**
     * 初始化轮盘数据
     */
    GameWheel.prototype.initWheel = function () {
        var wheelChilds = this.wheelNodes[this._curWheelType].children;
        var maxBetlv = 0;
        if (this.wheelNodes[this._curWheelType]) {
            for (var i = 0; i < exports.AREA_COUNT_LIST[this._curWheelType]; i++) {
                // let child = wheelChilds[i];
                // let label = cc.find("label", child);
                if (this._wheelConfig[i].type == define_1.WheelType.BetLv) {
                    // label.getComponent(cc.Label).string = "x" + this._wheelConfig[i].num;
                    if (this._wheelConfig[i].num > maxBetlv) { //找到倍率最大的目标节点
                        maxBetlv = this._wheelConfig[i].num;
                        this._maxTargetNode = wheelChilds[i];
                    }
                }
                else if (this._wheelConfig[i].type == define_1.WheelType.Spin) {
                    // label.getComponent(cc.Label).string = "Spin " + this._wheelConfig[i].num;
                }
            }
        }
        this.resetAngle();
    };
    /**
     * 初始化转盘属性
     */
    GameWheel.prototype.initProperties = function () {
        // 旋转角度范围
        this._range = 360;
        // 当前旋转速度
        this._currentRotationSpeed = 0;
        // 最小层转盘有一个假的图片这
        this._totalPrize = this.wheelNodes[this._curWheelType].children.length;
        this._resultId = this._totalPrize + 1 - this._resultId;
        // 时间间隔
        this._interval = 0.02;
        this.accelerated = 360 * 6;
        this.deceleration = -360 * 2;
        this.maxRangeSpeed = 360 * 4;
        this._isPlayEndSound = false;
    };
    /**
     * 开始滚动
    */
    GameWheel.prototype.runGame = function (index, endCall) {
        this.endCall = endCall;
        // this.lightNode.active = false;
        // this._curWheelType = 1;
        this._resultId = index;
        this._lotteryId = index;
        console.log("中奖id =" + this._resultId);
        this.initProperties();
        this.run();
    };
    /**
     * 结束滚动重置位置
    */
    GameWheel.prototype.resetWheel = function () {
        this.unschedule(this.updateRotation);
        this._currentRotationSpeed = 0; //当前速度设置为 0rad/s
        this._currentState = define_1.WheelState.Stand;
    };
    /**
     * 展示当前层转盘滚动结果
    */
    GameWheel.prototype.showWheelEnd = function () {
        this.unschedule(this.updateRotation);
        this._currentRotationSpeed = 0; //当前速度设置为 0rad/s
        this._currentState = define_1.WheelState.Stand;
        this.wheelNodes[this._curWheelType].angle = this._lotteryId * AREA_ANGEL_LIST[this._curWheelType];
        // 滚动结束
        // this.lightNode.active = true;
        this.endCall && this.endCall();
        console.log("滚动结束");
    };
    GameWheel.prototype.run = function () {
        if (!this.getRunning()) {
            this._currentState = define_1.WheelState.Acelerara;
            this.schedule(this.updateRotation, this._interval);
        }
        else {
            console.log("转盘已经开始转动...");
        }
    };
    GameWheel.prototype.stop = function () {
        this.resetWheel();
        // this.lightNode.active = true;
        this.endCall && this.endCall();
    };
    /**
     * 获取从最大加速度减速到停止的总角度
     *  */
    GameWheel.prototype.onVirtualCompute = function () {
        var virtualRotationAngle = 0;
        var rotationSpeed = this.maxRangeSpeed;
        while (rotationSpeed > 0) {
            virtualRotationAngle += this._interval * rotationSpeed; // 获取减速度到停止时候的总旋转角度
            rotationSpeed += this._interval * this.deceleration; // 每帧旋转的速度
        }
        return virtualRotationAngle;
    };
    /**
     * 获取开始减速的时机 角度
     * @param targetRotation 从初始位置（加速度或者减速度都是360度整的所以直接从编辑器里的初始位置）旋转到目标模块位置的角度
     * */
    GameWheel.prototype.onGetValue = function (targetRotation) {
        var temp = targetRotation - this.onVirtualCompute();
        if (temp > 0) {
            while (temp >= 360) {
                temp -= this._range;
            }
        }
        else {
            while (temp < 0) {
                temp += this._range;
            }
        }
        return temp;
    };
    /**
     * 转动检测
     */
    GameWheel.prototype.detectionAngle = function () {
        // console.log("角度检测中,寻找合适减速时机...")
        // 目标旋转角度
        var _zeroRotation = this._range - AREA_ANGEL_LIST[this._curWheelType] * (2 + this._curWheelType);
        this._targetRotation = _zeroRotation - (exports.AREA_COUNT_LIST[this._curWheelType] - this._resultId) * AREA_ANGEL_LIST[this._curWheelType];
        this._targetRotation = this._targetRotation;
        var tempRotation = this.onGetValue(this._targetRotation);
        this.wheelNodes[this._curWheelType].angle = -tempRotation;
        this._currentState = define_1.WheelState.Desacelerar;
    };
    /**
     * 每一帧回调
     * @param {*}
     */
    GameWheel.prototype.updateRotation = function () {
        console.log("update curState= " + this._currentState);
        switch (this._currentState) {
            case 0:
                break;
            case 1:
                {
                    // 旋转完成开始停止
                    if (this._currentRotationSpeed >= this.maxRangeSpeed) {
                        this._currentRotationSpeed = this.maxRangeSpeed;
                        this.detectionAngle();
                    }
                    else {
                        // 是加速度的同时也是初始速度
                        this._currentRotationSpeed += this.accelerated * this._interval;
                    }
                }
                break;
            case 2:
                {
                    if (this._currentRotationSpeed <= 0) {
                        this._currentRotationSpeed = 0; //当前速度设置为 0rad/s
                        this._currentState = define_1.WheelState.Stand;
                        this.stop();
                    }
                    else {
                        if (this.maxRangeSpeed / this._currentRotationSpeed >= 1) {
                        }
                        if (this.maxRangeSpeed / this._currentRotationSpeed >= 3) {
                            // this.pointSpine.timeScale = 1;
                        }
                        if (this.maxRangeSpeed / this._currentRotationSpeed >= 5) {
                            // this.pointSpine.timeScale = 0.5;
                        }
                        if (this._currentRotationSpeed <= 50) {
                            var mod = Math.floor(Math.abs(this.wheelNodes[this._curWheelType].angle / 360));
                            this._mixRotation = (mod * 360 + this._targetRotation) - Math.abs(this.wheelNodes[this._curWheelType].angle);
                            this.stop();
                            return;
                        }
                        this._currentRotationSpeed += this.deceleration * this._interval;
                        // console.log("TTTTT this._currentRotationSpeed = " + this._currentRotationSpeed + " rarotion = " + this.wheelNodes[this._curWheelType].angle + " targetAngle =" + this._targetRotation);
                    }
                }
                break;
            default:
                {
                    this.stop();
                }
                break;
        }
        // cc.log("当前旋转速度 : ", this._currentRotationSpeed);
        var tempRotationSpeed = this._currentRotationSpeed * this._interval;
        // cc.log("TTTTT 当前转盘转动速度" + tempRotationSpeed + "°/" + this._interval + "s");
        this.wheelNodes[this._curWheelType].angle -= tempRotationSpeed;
        // this.virtualWheel.angle = this.wheelNodes[this._curWheelType].angle;
    };
    //获取两个数间的随机值
    GameWheel.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    GameWheel.prototype.getRandomIndex = function (l) {
        if (l <= 0)
            return 0;
        return Math.round(Math.random() * l);
    };
    /**
     * 转盘是否正在滚动
     * @returns
     */
    GameWheel.prototype.getRunning = function () {
        return this._currentState > define_1.WheelState.Stand;
    };
    GameWheel.prototype.getTargetNode = function () {
        var target = this.wheelNodes[this._curWheelType].children[0];
        if (target) {
            return target;
        }
    };
    GameWheel.prototype.resetAngle = function () {
        this.wheelNodes[this._curWheelType].angle = 0; // 第一个转盘初始位置不同
    };
    GameWheel.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], GameWheel.prototype, "wheelNodes", void 0);
    __decorate([
        property({ type: cc.Node })
    ], GameWheel.prototype, "lightNode", void 0);
    __decorate([
        property({ displayName: "加速度", tooltip: "加速度值,每秒速度增加几度,°/s²" })
    ], GameWheel.prototype, "accelerated", void 0);
    __decorate([
        property({ displayName: "减速度", tooltip: "加速度值,每秒速度减少几度,°/s²" })
    ], GameWheel.prototype, "deceleration", void 0);
    __decorate([
        property({ displayName: "最大速度", tooltip: "每秒速度减少几度,°/s" })
    ], GameWheel.prototype, "maxRangeSpeed", void 0);
    GameWheel = __decorate([
        ccclass
    ], GameWheel);
    return GameWheel;
}(cc.Component));
exports.default = GameWheel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lV2hlZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLHdDQUEwRTtBQUtwRSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQzs7RUFFRTtBQUNGLElBQU0sZUFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUUxQzs7Ozs7RUFLRTtBQUNXLFFBQUEsV0FBVyxHQUFHO0lBQ3ZCLElBQUksRUFBRSxDQUFDO0lBQ1AsTUFBTSxFQUFFLENBQUM7SUFDVCxHQUFHLEVBQUUsQ0FBQztDQUNULENBQUM7QUFFRjs7RUFFRTtBQUNXLFFBQUEsZUFBZSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUkzQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW1UQztRQWpURyxnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUczQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBR3pCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRzFCOztVQUVFO1FBQ00sbUJBQWEsR0FBRyxtQkFBVyxDQUFDLElBQUksQ0FBQztRQUNqQyxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsMkJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxnQkFBVSxHQUFHLENBQUMsQ0FB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UztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7Z0RBQ0E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxDQUFDO2tEQUN4QztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLENBQUM7bURBQ3ZDO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUM7b0RBQ2pDO0lBZFQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW1UN0I7SUFBRCxnQkFBQztDQW5URCxBQW1UQyxDQW5Uc0MsRUFBRSxDQUFDLFNBQVMsR0FtVGxEO2tCQW5Ub0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFdmVudElkLCBXaGVlbERhdGEsIFdoZWVsU3RhdGUsIFdoZWVsVHlwZSB9IGZyb20gXCIuL3V0aWwvZGVmaW5lXCI7XHJcbmltcG9ydCBFdmVudE1nciBmcm9tIFwiLi91dGlsL2V2ZW50L0V2ZW50TWdyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOi9rOebmOS4iuavj+S4quiKgueCueWvueW6lOinkuW6pumbhuWQiFxyXG4qL1xyXG5jb25zdCBBUkVBX0FOR0VMX0xJU1QgPSBbMTQuMzUsIDQ1LCAyMi41XTtcclxuXHJcbi8qKlxyXG4gKiDovaznm5jnsbvlnotcclxuICogTUlOSSDlsI/ovaznm5hcclxuICogTUVESVVNIOS4rei9rOebmFxyXG4gKiBNQVgg5aSn6L2s55uYXHJcbiovXHJcbmV4cG9ydCBjb25zdCBXSEVFTF9UWVBFUyA9IHtcclxuICAgIE1JTkk6IDAsXHJcbiAgICBNRURJVU06IDEsXHJcbiAgICBNQVg6IDIsXHJcbn07XHJcblxyXG4vKipcclxuICog6L2s55uY5LiK6IqC54K55pWw6YeP6ZuG5ZCIXHJcbiovXHJcbmV4cG9ydCBjb25zdCBBUkVBX0NPVU5UX0xJU1QgPSBbMjUsIDgsIDE2XTtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV2hlZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3aGVlbE5vZGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGV9KVxyXG4gICAgbGlnaHROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLliqDpgJ/luqZcIiwgdG9vbHRpcDogXCLliqDpgJ/luqblgLws5q+P56eS6YCf5bqm5aKe5Yqg5Yeg5bqmLMKwL3PCslwiIH0pXHJcbiAgICBhY2NlbGVyYXRlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLlh4/pgJ/luqZcIiwgdG9vbHRpcDogXCLliqDpgJ/luqblgLws5q+P56eS6YCf5bqm5YeP5bCR5Yeg5bqmLMKwL3PCslwiIH0pXHJcbiAgICBkZWNlbGVyYXRpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5pyA5aSn6YCf5bqmXCIsIHRvb2x0aXA6IFwi5q+P56eS6YCf5bqm5YeP5bCR5Yeg5bqmLMKwL3NcIiB9KVxyXG4gICAgbWF4UmFuZ2VTcGVlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN6L2s55uY57G75Z6LXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBfY3VyV2hlZWxUeXBlID0gV0hFRUxfVFlQRVMuTUlOSTtcclxuICAgIHByaXZhdGUgX3JhbmdlID0gMDtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRSb3RhdGlvblNwZWVkID0gMDtcclxuICAgIHByaXZhdGUgX3RhcmdldFJvdGF0aW9uID0gMDtcclxuICAgIHByaXZhdGUgX3RvdGFsUHJpemUgPSAwO1xyXG4gICAgcHJpdmF0ZSBfcmVzdWx0SWQgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbG90dGVyeUlkID0gMDtcclxuICAgIHByaXZhdGUgX2ludGVydmFsID0gMDtcclxuICAgICAvKipcclxuICAgICAgKiBXaGVlbFN0YXRlLlN0YW5kOumdmeatoiBXaGVlbFN0YXRlLkFjZWxlcmFyYTrliqDpgJ8gV2hlZWxTdGF0ZS5EZXNhY2VsZXJhcjrlh4/pgJ8gXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2N1cnJlbnRTdGF0ZTogV2hlZWxTdGF0ZSA9IFdoZWVsU3RhdGUuU3RhbmQ7XHJcbiAgICBwcml2YXRlIF9taXhSb3RhdGlvbiA9IDA7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHByaXZhdGUgX3doZWVsQ29uZmlnOiBXaGVlbERhdGFbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfbWF4VGFyZ2V0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9pc1BsYXlFbmRTb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiDnu5PmnZ/lm57osIMgKi9cclxuICAgIGVuZENhbGwgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QW5nbGUoKTtcclxuICAgICAgICAvLyB0aGlzLmxpZ2h0Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlV2hlZWxDb25maWcod2hlZWxDb25maWc6IGFueSkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmdldFJ1bm5pbmcoKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVzZXRXaGVlbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLl93aGVlbENvbmZpZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd2hlZWxDb25maWcgPSBbXTtcclxuICAgICAgICBsZXQgd2hlZWxEYXRhOiBXaGVlbERhdGE7XHJcbiAgICAgICAgd2hlZWxDb25maWcuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgd2hlZWxEYXRhID0ge30gYXMgV2hlZWxEYXRhO1xyXG4gICAgICAgICAgICBpZiAodi52YWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB3aGVlbERhdGEudHlwZSA9IFdoZWVsVHlwZS5CZXRMdjtcclxuICAgICAgICAgICAgICAgIHdoZWVsRGF0YS5udW0gPSB2LnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2hlZWxEYXRhLnR5cGUgPSBXaGVlbFR5cGUuU3BpbjtcclxuICAgICAgICAgICAgICAgIHdoZWVsRGF0YS5udW0gPSBNYXRoLmFicyh2LnZhbHVlKSAvIDEwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl93aGVlbENvbmZpZy5wdXNoKHdoZWVsRGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5Wm9vbUluQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5pbml0V2hlZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlui9ruebmOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRXaGVlbCgpIHtcclxuICAgICAgICBsZXQgd2hlZWxDaGlsZHMgPSB0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5jaGlsZHJlbjtcclxuICAgICAgICBsZXQgbWF4QmV0bHYgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXSkgeyBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBUkVBX0NPVU5UX0xJU1RbdGhpcy5fY3VyV2hlZWxUeXBlXTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY2hpbGQgPSB3aGVlbENoaWxkc1tpXTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBsYWJlbCA9IGNjLmZpbmQoXCJsYWJlbFwiLCBjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fd2hlZWxDb25maWdbaV0udHlwZSA9PSBXaGVlbFR5cGUuQmV0THYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwieFwiICsgdGhpcy5fd2hlZWxDb25maWdbaV0ubnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl93aGVlbENvbmZpZ1tpXS5udW0gPiBtYXhCZXRsdikgeyAgICAgICAvL+aJvuWIsOWAjeeOh+acgOWkp+eahOebruagh+iKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhCZXRsdiA9IHRoaXMuX3doZWVsQ29uZmlnW2ldLm51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF4VGFyZ2V0Tm9kZSA9IHdoZWVsQ2hpbGRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fd2hlZWxDb25maWdbaV0udHlwZSA9PSBXaGVlbFR5cGUuU3Bpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJTcGluIFwiICsgdGhpcy5fd2hlZWxDb25maWdbaV0ubnVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXRBbmdsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW6L2s55uY5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdFByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgLy8g5peL6L2s6KeS5bqm6IyD5Zu0XHJcbiAgICAgICAgdGhpcy5fcmFuZ2UgPSAzNjA7XHJcbiAgICAgICAgLy8g5b2T5YmN5peL6L2s6YCf5bqmXHJcbiAgICAgICAgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgPSAwO1xyXG4gICAgICAgIC8vIOacgOWwj+Wxgui9rOebmOacieS4gOS4quWBh+eahOWbvueJh+i/mVxyXG4gICAgICAgIHRoaXMuX3RvdGFsUHJpemUgPSB0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fcmVzdWx0SWQgPSB0aGlzLl90b3RhbFByaXplICsgMSAtIHRoaXMuX3Jlc3VsdElkO1xyXG4gICAgICAgIC8vIOaXtumXtOmXtOmalFxyXG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gMC4wMjtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGVkID0gMzYwICogNjtcclxuICAgICAgICB0aGlzLmRlY2VsZXJhdGlvbiA9IC0zNjAgKiAyO1xyXG4gICAgICAgIHRoaXMubWF4UmFuZ2VTcGVlZCA9IDM2MCAqIDQ7XHJcbiAgICAgICAgdGhpcy5faXNQbGF5RW5kU291bmQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+a7muWKqFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBydW5HYW1lKGluZGV4OiBhbnksIGVuZENhbGwpIHtcclxuICAgICAgICB0aGlzLmVuZENhbGwgPSBlbmRDYWxsO1xyXG4gICAgICAgIC8vIHRoaXMubGlnaHROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuX2N1cldoZWVsVHlwZSA9IDE7XHJcbiAgICAgICAgdGhpcy5fcmVzdWx0SWQgPSBpbmRleDtcclxuICAgICAgICB0aGlzLl9sb3R0ZXJ5SWQgPSBpbmRleDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuS4reWllmlkID1cIiArIHRoaXMuX3Jlc3VsdElkKTtcclxuICAgICAgICB0aGlzLmluaXRQcm9wZXJ0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7k+adn+a7muWKqOmHjee9ruS9jee9rlxyXG4gICAgKi9cclxuICAgIHB1YmxpYyByZXNldFdoZWVsKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50Um90YXRpb25TcGVlZCA9IDA7IC8v5b2T5YmN6YCf5bqm6K6+572u5Li6IDByYWQvc1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFdoZWVsU3RhdGUuU3RhbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsZXnpLrlvZPliY3lsYLovaznm5jmu5rliqjnu5PmnpxcclxuICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1doZWVsRW5kKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50Um90YXRpb25TcGVlZCA9IDA7IC8v5b2T5YmN6YCf5bqm6K6+572u5Li6IDByYWQvc1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFdoZWVsU3RhdGUuU3RhbmQ7XHJcbiAgICAgICAgdGhpcy53aGVlbE5vZGVzW3RoaXMuX2N1cldoZWVsVHlwZV0uYW5nbGUgPSB0aGlzLl9sb3R0ZXJ5SWQgKiBBUkVBX0FOR0VMX0xJU1RbdGhpcy5fY3VyV2hlZWxUeXBlXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDmu5rliqjnu5PmnZ9cclxuICAgICAgICAvLyB0aGlzLmxpZ2h0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5kQ2FsbCAmJiB0aGlzLmVuZENhbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIua7muWKqOe7k+adn1wiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBydW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdldFJ1bm5pbmcoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50U3RhdGUgPSBXaGVlbFN0YXRlLkFjZWxlcmFyYTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVJvdGF0aW9uLCB0aGlzLl9pbnRlcnZhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLovaznm5jlt7Lnu4/lvIDlp4vovazliqguLi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0V2hlZWwoKTtcclxuICAgICAgICAvLyB0aGlzLmxpZ2h0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5kQ2FsbCAmJiB0aGlzLmVuZENhbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS7juacgOWkp+WKoOmAn+W6puWHj+mAn+WIsOWBnOatoueahOaAu+inkuW6plxyXG4gICAgICogICovIFxyXG4gICAgcHJpdmF0ZSBvblZpcnR1YWxDb21wdXRlKCkge1xyXG4gICAgICAgIHZhciB2aXJ0dWFsUm90YXRpb25BbmdsZSA9IDA7XHJcbiAgICAgICAgdmFyIHJvdGF0aW9uU3BlZWQgPSB0aGlzLm1heFJhbmdlU3BlZWQ7XHJcbiAgICAgICAgd2hpbGUgKHJvdGF0aW9uU3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHZpcnR1YWxSb3RhdGlvbkFuZ2xlICs9IHRoaXMuX2ludGVydmFsICogcm90YXRpb25TcGVlZDsgLy8g6I635Y+W5YeP6YCf5bqm5Yiw5YGc5q2i5pe25YCZ55qE5oC75peL6L2s6KeS5bqmXHJcbiAgICAgICAgICAgIHJvdGF0aW9uU3BlZWQgKz0gdGhpcy5faW50ZXJ2YWwgKiB0aGlzLmRlY2VsZXJhdGlvbjsgLy8g5q+P5bin5peL6L2s55qE6YCf5bqmXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2aXJ0dWFsUm90YXRpb25BbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW8gOWni+WHj+mAn+eahOaXtuacuiDop5LluqZcclxuICAgICAqIEBwYXJhbSB0YXJnZXRSb3RhdGlvbiDku47liJ3lp4vkvY3nva7vvIjliqDpgJ/luqbmiJbogIXlh4/pgJ/luqbpg73mmK8zNjDluqbmlbTnmoTmiYDku6Xnm7TmjqXku47nvJbovpHlmajph4znmoTliJ3lp4vkvY3nva7vvInml4vovazliLDnm67moIfmqKHlnZfkvY3nva7nmoTop5LluqZcclxuICAgICAqICovIFxyXG4gICAgcHJpdmF0ZSBvbkdldFZhbHVlKHRhcmdldFJvdGF0aW9uKSB7XHJcbiAgICAgICAgdmFyIHRlbXAgPSB0YXJnZXRSb3RhdGlvbiAtIHRoaXMub25WaXJ0dWFsQ29tcHV0ZSgpO1xyXG4gICAgICAgIGlmICh0ZW1wID4gMCkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGVtcCA+PSAzNjApIHtcclxuICAgICAgICAgICAgICAgIHRlbXAgLT0gdGhpcy5fcmFuZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aGlsZSAodGVtcCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRlbXAgKz0gdGhpcy5fcmFuZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovazliqjmo4DmtYtcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25BbmdsZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuinkuW6puajgOa1i+S4rSzlr7vmib7lkIjpgILlh4/pgJ/ml7bmnLouLi5cIilcclxuICAgICAgICAvLyDnm67moIfml4vovazop5LluqZcclxuICAgICAgICBsZXQgX3plcm9Sb3RhdGlvbiA9IHRoaXMuX3JhbmdlIC0gQVJFQV9BTkdFTF9MSVNUW3RoaXMuX2N1cldoZWVsVHlwZV0gKiAoMiArIHRoaXMuX2N1cldoZWVsVHlwZSk7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0Um90YXRpb24gPSBfemVyb1JvdGF0aW9uIC0gKEFSRUFfQ09VTlRfTElTVFt0aGlzLl9jdXJXaGVlbFR5cGVdIC0gdGhpcy5fcmVzdWx0SWQpICogQVJFQV9BTkdFTF9MSVNUW3RoaXMuX2N1cldoZWVsVHlwZV07XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0Um90YXRpb24gPSB0aGlzLl90YXJnZXRSb3RhdGlvbjtcclxuICAgICAgICB2YXIgdGVtcFJvdGF0aW9uID0gdGhpcy5vbkdldFZhbHVlKHRoaXMuX3RhcmdldFJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5hbmdsZSA9IC10ZW1wUm90YXRpb247XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gV2hlZWxTdGF0ZS5EZXNhY2VsZXJhcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOavj+S4gOW4p+Wbnuiwg1xyXG4gICAgICogQHBhcmFtIHsqfSAgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUm90YXRpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGUgY3VyU3RhdGU9IFwiICsgdGhpcy5fY3VycmVudFN0YXRlKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2N1cnJlbnRTdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaXi+i9rOWujOaIkOW8gOWni+WBnOatolxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50Um90YXRpb25TcGVlZCA+PSB0aGlzLm1heFJhbmdlU3BlZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgPSB0aGlzLm1heFJhbmdlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0aW9uQW5nbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmmK/liqDpgJ/luqbnmoTlkIzml7bkuZ/mmK/liJ3lp4vpgJ/luqZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgKz0gdGhpcy5hY2NlbGVyYXRlZCAqIHRoaXMuX2ludGVydmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRSb3RhdGlvblNwZWVkIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgPSAwOyAvL+W9k+WJjemAn+W6puiuvue9ruS4uiAwcmFkL3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gV2hlZWxTdGF0ZS5TdGFuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4UmFuZ2VTcGVlZCAvIHRoaXMuX2N1cnJlbnRSb3RhdGlvblNwZWVkID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXhSYW5nZVNwZWVkIC8gdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wb2ludFNwaW5lLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4UmFuZ2VTcGVlZCAvIHRoaXMuX2N1cnJlbnRSb3RhdGlvblNwZWVkID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucG9pbnRTcGluZS50aW1lU2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRSb3RhdGlvblNwZWVkIDw9IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5hbmdsZSAvIDM2MCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWl4Um90YXRpb24gPSAobW9kICogMzYwICsgdGhpcy5fdGFyZ2V0Um90YXRpb24pIC0gTWF0aC5hYnModGhpcy53aGVlbE5vZGVzW3RoaXMuX2N1cldoZWVsVHlwZV0uYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgKz0gdGhpcy5kZWNlbGVyYXRpb24gKiB0aGlzLl9pbnRlcnZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUVFRUVCB0aGlzLl9jdXJyZW50Um90YXRpb25TcGVlZCA9IFwiICsgdGhpcy5fY3VycmVudFJvdGF0aW9uU3BlZWQgKyBcIiByYXJvdGlvbiA9IFwiICsgdGhpcy53aGVlbE5vZGVzW3RoaXMuX2N1cldoZWVsVHlwZV0uYW5nbGUgKyBcIiB0YXJnZXRBbmdsZSA9XCIgKyB0aGlzLl90YXJnZXRSb3RhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MubG9nKFwi5b2T5YmN5peL6L2s6YCf5bqmIDogXCIsIHRoaXMuX2N1cnJlbnRSb3RhdGlvblNwZWVkKTtcclxuICAgICAgICB2YXIgdGVtcFJvdGF0aW9uU3BlZWQgPSB0aGlzLl9jdXJyZW50Um90YXRpb25TcGVlZCAqIHRoaXMuX2ludGVydmFsO1xyXG4gICAgICAgIC8vIGNjLmxvZyhcIlRUVFRUIOW9k+WJjei9rOebmOi9rOWKqOmAn+W6plwiICsgdGVtcFJvdGF0aW9uU3BlZWQgKyBcIsKwL1wiICsgdGhpcy5faW50ZXJ2YWwgKyBcInNcIik7XHJcbiAgICAgICAgdGhpcy53aGVlbE5vZGVzW3RoaXMuX2N1cldoZWVsVHlwZV0uYW5nbGUgLT0gdGVtcFJvdGF0aW9uU3BlZWQ7XHJcbiAgICAgICAgLy8gdGhpcy52aXJ0dWFsV2hlZWwuYW5nbGUgPSB0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5hbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluS4pOS4quaVsOmXtOeahOmaj+acuuWAvFxyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb20obWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbUluZGV4KGwpIHtcclxuICAgICAgICBpZiAobCA8PSAwKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovaznm5jmmK/lkKbmraPlnKjmu5rliqhcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UnVubmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFN0YXRlID4gV2hlZWxTdGF0ZS5TdGFuZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGFyZ2V0Tm9kZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy53aGVlbE5vZGVzW3RoaXMuX2N1cldoZWVsVHlwZV0uY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXRBbmdsZSgpIHtcclxuICAgICAgICB0aGlzLndoZWVsTm9kZXNbdGhpcy5fY3VyV2hlZWxUeXBlXS5hbmdsZSA9IDA7IC8vIOesrOS4gOS4qui9rOebmOWIneWni+S9jee9ruS4jeWQjFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
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
var DataManager_1 = require("./DataManager");
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var startGameLayer = /** @class */ (function (_super) {
    __extends(startGameLayer, _super);
    function startGameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioResList = [];
        _this.checkBtn = null;
        _this.page = null;
        _this.lodingPage = null;
        _this.isPolicy = false;
        _this.titleTween = null;
        return _this;
    }
    startGameLayer.prototype.start = function () {
        var _this = this;
        if (!DataManager_1.default.curSoundIsClose) {
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        this.checkBtn.getChildByName("title").on(cc.Node.EventType.TOUCH_END, function () {
            _this.page.active = true;
            _this.page.getComponent(cc.Animation).play();
            _this.node.getComponent(cc.AudioSource).clip = _this.audioResList[0];
            _this.node.getComponent(cc.AudioSource).play();
        });
        /**生成用户ID */
        if (DataManager_1.default.userId == "10086") {
            var newUserId = '';
            for (var i = 0; i < DataManager_1.default.userId.length; i++) {
                newUserId += util_1.default.getRandom(0, 9);
            }
            DataManager_1.default.userId = newUserId;
        }
        this.lodingPage.getChildByName('pg').getComponent(cc.ProgressBar).progress = 0;
    };
    startGameLayer.prototype.switchScene = function () {
        if (this.isPolicy) {
            this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
            this.node.getComponent(cc.AudioSource).play();
            this.lodingPage.active = true;
            this.startLoding();
        }
        else {
            this.node.stopAllActions();
            this.titleTween && this.titleTween.stop();
            var title_1 = this.checkBtn.getChildByName("title");
            title_1.getComponent(cc.LabelOutline).color = cc.color(0, 0, 0, 255);
            this.titleTween = util_1.default.tweenUpdate(0.3, function (ratio) {
                var colroNum = 255 - ratio * 255 * 2;
                title_1.getComponent(cc.LabelOutline).color = cc.color(colroNum, colroNum, colroNum, 255);
            });
            // cc.tween(this.checkBtn)
            //     .to(0.1,{position:cc.v3(this.checkBtn.position.x,this.checkBtn.position.y + 5,1)})
            //     .to(0.1,{position:cc.v3(this.checkBtn.position.x,this.checkBtn.position.y - 5,1)})
            //     .start()
        }
    };
    /**开启加载页面 */
    startGameLayer.prototype.startLoding = function () {
        var _this = this;
        var pg = this.lodingPage.getChildByName("pg");
        var speed = 0.02;
        this.schedule(function () {
            pg.getComponent(cc.ProgressBar).progress += speed;
            if (pg.getComponent(cc.ProgressBar).progress >= 1) {
                pg.getComponent(cc.ProgressBar).progress = 1;
                _this.unscheduleAllCallbacks();
                cc.director.loadScene("hall");
            }
        }, speed);
    };
    startGameLayer.prototype.onChange = function () {
        var border = this.checkBtn.getChildByName("border");
        border.children[0].active = !border.children[0].active;
        this.isPolicy = !this.isPolicy;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
    };
    startGameLayer.prototype.closePage = function () {
        this.page.active = false;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
    };
    startGameLayer.prototype.onDestroy = function () {
        this.checkBtn.getChildByName("title").off(cc.Node.EventType.TOUCH_END);
        this.checkBtn.getChildByName("border").off(cc.Node.EventType.TOUCH_END);
    };
    __decorate([
        property({ type: [cc.AudioClip] })
    ], startGameLayer.prototype, "audioResList", void 0);
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "checkBtn", void 0);
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "page", void 0);
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "lodingPage", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTdGFydEdhbWVMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFDeEMsb0NBQStCO0FBRXpCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBd0dDO1FBckdHLGtCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUdsQyxjQUFRLEdBQVcsSUFBSSxDQUFBO1FBR3ZCLFVBQUksR0FBVyxJQUFJLENBQUE7UUFHbkIsZ0JBQVUsR0FBVyxJQUFJLENBQUE7UUFFakIsY0FBUSxHQUFXLEtBQUssQ0FBQTtRQUVoQyxnQkFBVSxHQUFhLElBQUksQ0FBQzs7SUF3RmhDLENBQUM7SUF0RkcsOEJBQUssR0FBTDtRQUFBLGlCQTBCQztRQXpCRyxJQUFHLENBQUMscUJBQVcsQ0FBQyxlQUFlLEVBQUU7WUFDN0IsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQztZQUNqRSxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDdkIsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVDLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUE7UUFDRixZQUFZO1FBQ1osSUFBRyxxQkFBVyxDQUFDLE1BQU0sSUFBSSxPQUFPLEVBQUM7WUFDOUIsSUFBSSxTQUFTLEdBQVUsRUFBRSxDQUFBO1lBQ3pCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxxQkFBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBQ3ZDLFNBQVMsSUFBSSxjQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTthQUNwQztZQUNELHFCQUFXLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQTtTQUNoQztRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtJQUVsRixDQUFDO0lBQ0Qsb0NBQVcsR0FBWDtRQUNJLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUNyQjthQUFJO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFMUMsSUFBSSxPQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsT0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQUs7Z0JBQzFDLElBQUksUUFBUSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFFckMsT0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDekYsQ0FBQyxDQUFDLENBQUM7WUFDSCwwQkFBMEI7WUFDMUIseUZBQXlGO1lBQ3pGLHlGQUF5RjtZQUN6RixlQUFlO1NBQ2xCO0lBRUwsQ0FBQztJQUNELFlBQVk7SUFDWixvQ0FBVyxHQUFYO1FBQUEsaUJBV0M7UUFWRyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUE7WUFDakQsSUFBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDO2dCQUM3QyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQTtnQkFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakM7UUFDTCxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDWixDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFUyxrQ0FBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFM0UsQ0FBQztJQWpHRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDO3dEQUNDO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDQztJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNPO0lBWlIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXdHbEM7SUFBRCxxQkFBQztDQXhHRCxBQXdHQyxDQXhHMkMsRUFBRSxDQUFDLFNBQVMsR0F3R3ZEO2tCQXhHb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgdXRpbCBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRHYW1lTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogW2NjLkF1ZGlvQ2xpcF19KVxyXG4gICAgYXVkaW9SZXNMaXN0OiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hlY2tCdG46Y2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBhZ2U6Y2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZGluZ1BhZ2U6Y2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBwcml2YXRlIGlzUG9saWN5OmJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIHRpdGxlVHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBpZighRGF0YU1hbmFnZXIuY3VyU291bmRJc0Nsb3NlKSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0J0bi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8qKueUn+aIkOeUqOaIt0lEICovXHJcbiAgICAgICAgaWYoRGF0YU1hbmFnZXIudXNlcklkID09IFwiMTAwODZcIil7XHJcbiAgICAgICAgICAgbGV0IG5ld1VzZXJJZDpzdHJpbmcgPSAnJ1xyXG4gICAgICAgICAgIGZvcihsZXQgaT0wO2k8RGF0YU1hbmFnZXIudXNlcklkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbmV3VXNlcklkICs9IHV0aWwuZ2V0UmFuZG9tKDAsOSlcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgRGF0YU1hbmFnZXIudXNlcklkID0gbmV3VXNlcklkXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZGluZ1BhZ2UuZ2V0Q2hpbGRCeU5hbWUoJ3BnJykuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcyA9IDBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHN3aXRjaFNjZW5lKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNQb2xpY3kpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2RpbmdQYWdlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zdGFydExvZGluZygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlVHdlZW4gJiYgdGhpcy50aXRsZVR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgdGl0bGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSkuY29sb3IgPSBjYy5jb2xvcigwLDAsMCwyNTUpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlVHdlZW4gPSB1dGlsLnR3ZWVuVXBkYXRlKDAuMywgKHJhdGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29scm9OdW0gPSAyNTUgLSByYXRpbyAqIDI1NSAqIDI7XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSkuY29sb3IgPSBjYy5jb2xvcihjb2xyb051bSxjb2xyb051bSxjb2xyb051bSwyNTUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5jaGVja0J0bilcclxuICAgICAgICAgICAgLy8gICAgIC50bygwLjEse3Bvc2l0aW9uOmNjLnYzKHRoaXMuY2hlY2tCdG4ucG9zaXRpb24ueCx0aGlzLmNoZWNrQnRuLnBvc2l0aW9uLnkgKyA1LDEpfSlcclxuICAgICAgICAgICAgLy8gICAgIC50bygwLjEse3Bvc2l0aW9uOmNjLnYzKHRoaXMuY2hlY2tCdG4ucG9zaXRpb24ueCx0aGlzLmNoZWNrQnRuLnBvc2l0aW9uLnkgLSA1LDEpfSlcclxuICAgICAgICAgICAgLy8gICAgIC5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAvKirlvIDlkK/liqDovb3pobXpnaIgKi9cclxuICAgIHN0YXJ0TG9kaW5nKCl7XHJcbiAgICAgICAgbGV0IHBnID0gdGhpcy5sb2RpbmdQYWdlLmdldENoaWxkQnlOYW1lKFwicGdcIilcclxuICAgICAgICBsZXQgc3BlZWQgPSAwLjAyXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xyXG4gICAgICAgICAgICBwZy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzICs9IHNwZWVkXHJcbiAgICAgICAgICAgIGlmKHBnLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgPj0gMSl7XHJcbiAgICAgICAgICAgICAgICBwZy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxzcGVlZClcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlKCl7XHJcbiAgICAgICAgbGV0IGJvcmRlciA9IHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJib3JkZXJcIilcclxuICAgICAgICAgICAgYm9yZGVyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9ICFib3JkZXIuY2hpbGRyZW5bMF0uYWN0aXZlIFxyXG4gICAgICAgICAgICB0aGlzLmlzUG9saWN5ID0gIXRoaXMuaXNQb2xpY3lcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQYWdlKCl7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKVxyXG4gICAgICAgIHRoaXMuY2hlY2tCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJib3JkZXJcIikub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORClcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIFxyXG59XHJcbiJdfQ==
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
exports.WheelType = exports.WheelState = exports.EventId = exports.ItemType = void 0;
/**扑克类型 */
var ItemType;
(function (ItemType) {
    ItemType[ItemType["Square"] = 0] = "Square";
    ItemType[ItemType["Plum"] = 1] = "Plum";
    ItemType[ItemType["Heart"] = 2] = "Heart";
    ItemType[ItemType["Spade"] = 3] = "Spade";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var EventId;
(function (EventId) {
    EventId[EventId["creatPorker"] = 0] = "creatPorker";
    EventId[EventId["RaningWheel"] = 1] = "RaningWheel";
    EventId[EventId["UpdataScord"] = 2] = "UpdataScord";
    EventId[EventId["RemberNum"] = 3] = "RemberNum";
    EventId[EventId["Result"] = 4] = "Result";
})(EventId = exports.EventId || (exports.EventId = {}));
var WheelState;
(function (WheelState) {
    WheelState[WheelState["Stand"] = 0] = "Stand";
    WheelState[WheelState["Acelerara"] = 1] = "Acelerara";
    WheelState[WheelState["Desacelerar"] = 2] = "Desacelerar";
})(WheelState = exports.WheelState || (exports.WheelState = {}));
var WheelType;
(function (WheelType) {
    WheelType[WheelType["BetLv"] = 1] = "BetLv";
    WheelType[WheelType["Spin"] = 2] = "Spin";
})(WheelType = exports.WheelType || (exports.WheelType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxkZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsVUFBVTtBQUNWLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNoQiwyQ0FBTSxDQUFBO0lBQ04sdUNBQUksQ0FBQTtJQUNKLHlDQUFLLENBQUE7SUFDTCx5Q0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBS25CO0FBU0QsSUFBWSxPQU1YO0FBTkQsV0FBWSxPQUFPO0lBQ2YsbURBQWUsQ0FBQTtJQUNmLG1EQUFXLENBQUE7SUFDWCxtREFBVyxDQUFBO0lBQ1gsK0NBQVMsQ0FBQTtJQUNULHlDQUFNLENBQUE7QUFDVixDQUFDLEVBTlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBTWxCO0FBRUQsSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ2xCLDZDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0lBQ2IseURBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFPRCxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDakIsMkNBQVMsQ0FBQTtJQUNULHlDQUFRLENBQUE7QUFDWixDQUFDLEVBSFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFHcEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoq5omR5YWL57G75Z6LICovXHJcbmV4cG9ydCBlbnVtIEl0ZW1UeXBle1xyXG4gICAgU3F1YXJlLFxyXG4gICAgUGx1bSxcclxuICAgIEhlYXJ0LFxyXG4gICAgU3BhZGVcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIEV2ZW50SWQge1xyXG4gICAgY3JlYXRQb3JrZXIgPSAwLFxyXG4gICAgUmFuaW5nV2hlZWwsXHJcbiAgICBVcGRhdGFTY29yZCxcclxuICAgIFJlbWJlck51bSxcclxuICAgIFJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBXaGVlbFN0YXRlIHtcclxuICAgIFN0YW5kID0gMCxcclxuICAgIEFjZWxlcmFyYSA9IDEsXHJcbiAgICBEZXNhY2VsZXJhciA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2hlZWxEYXRhIHtcclxuICAgIHR5cGU6IFdoZWVsVHlwZSxcclxuICAgIG51bTogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFdoZWVsVHlwZSB7XHJcbiAgICBCZXRMdiA9IDEsXHJcbiAgICBTcGluID0gMixcclxufSJdfQ==
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
var playLayer_1 = require("./playLayer");
var define_1 = require("./util/define");
var EventMgr_1 = require("./util/event/EventMgr");
var loaderManager_1 = require("./util/loaderManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemResList = [];
        _this.userCoinNode = null;
        _this.tipNode = null;
        _this.resultNode = null;
        _this.timerNode = null;
        _this.soundBtn = null;
        _this.musicBtn = null;
        _this.playBtn = null;
        _this.playScr = null;
        _this.userScoreLabel = null;
        _this.timeLabel = null;
        _this.audioResList = [];
        _this.iconPf = null;
        _this.index = 0;
        return _this;
    }
    /**加载卡片 */
    GameLayer.prototype.loadCard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, loaderManager_1.default.getRes("item", "prefab", cc.Prefab)];
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
        this.playScr.node.scale = cc.winSize.height / 1080;
        this.updateUserCoin();
        this.updateTimerUi();
        this.loadCard();
        // this.listerEvent()
    };
    //绑定事件
    GameLayer.prototype.listerEvent = function () {
        EventMgr_1.default.Instance.Register(define_1.EventId.Result, this.showResult, this);
    };
    /**
     * 清除事件
     */
    GameLayer.prototype.cleatEvent = function () {
        EventMgr_1.default.Instance.Off();
    };
    /**
     * 游戏内按钮绑定事件
    */
    GameLayer.prototype.btnEvent = function (event) {
        var name = event.target.name;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        switch (name) {
            case "btnStartGame":
                this.playGame();
                break;
            case "btnReturn":
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene("hall");
                break;
            case "btNextGame":
            case "btStartOver":
                this.hideResultNode();
                break;
            case "btExit":
                this.hideResultNode();
                this.cleatEvent();
                cc.director.loadScene("hall");
                break;
            case "tipBtn":
                this.openTipNode();
                break;
            case "closeTipBtn":
                this.hideTipNode();
                break;
            case "btnSound":
                this.openOrCloseSound();
                break;
            case "musicBtn":
                this.openOrCloseBG();
                break;
        }
    };
    /** 开始游戏 */
    GameLayer.prototype.playGame = function () {
        if (DataManager_1.default.curGameIsRun)
            return;
        DataManager_1.default.curGameIsRun = true;
        cc.director.getCollisionManager().enabled = true;
        // 计时器
        this.startTimer();
        //隐藏游戏按钮
        // this.playBtn.active = false
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
        //游戏逻辑
        this.playScr.createRandomPuzzle();
    };
    /**
     * 开启或关闭音效
    */
    GameLayer.prototype.openOrCloseSound = function () {
        if (DataManager_1.default.curSoundBGIsClose) {
            this.soundBtn.color = cc.color(170, 170, 170, 255);
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.soundBtn.color = cc.color(255, 255, 255, 255);
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        DataManager_1.default.curSoundBGIsClose = !DataManager_1.default.curSoundBGIsClose;
    };
    GameLayer.prototype.openOrCloseBG = function () {
        if (DataManager_1.default.curSoundIsClose) {
            this.musicBtn.color = cc.color(170, 170, 170, 255);
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.musicBtn.color = cc.color(255, 255, 255, 255);
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 1;
        }
        DataManager_1.default.curSoundIsClose = !DataManager_1.default.curSoundIsClose;
    };
    /**
     * 开始倒计时
    */
    GameLayer.prototype.startTimer = function () {
        var _this = this;
        var speed = 0.01;
        DataManager_1.default.timerFunc = function () {
            DataManager_1.default.indexTime -= speed;
            if (DataManager_1.default.indexTime <= 0) {
                _this.ResultFn();
            }
            _this.updateTimerUi();
            _this.timeLabel.getComponent(cc.Label).string = "00:00:" + Math.floor(DataManager_1.default.indexTime);
        };
        this.schedule(DataManager_1.default.timerFunc, speed);
    };
    /**
     * 更新倒计时
    */
    GameLayer.prototype.updateTimerUi = function () {
        // cc.find("barBg/bar", this.timerNode).getComponent(cc.Sprite).fillRange = DataManager.indexTime / DataManager.startTime;
        this.timeLabel.getComponent(cc.Label).string = "00:00:" + Math.ceil(DataManager_1.default.indexTime);
    };
    GameLayer.prototype.updataCoin = function () {
        this.updateUserCoin();
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
        this.node.getComponent(cc.AudioSource).play();
    };
    /**
     * 更新余额
    */
    GameLayer.prototype.updateUserCoin = function () {
        cc.tween(this.userScoreLabel)
            .to(0.1, { scale: 1.1 })
            .to(0.1, { scale: 1 })
            .start();
        this.userScoreLabel.getComponent(cc.Label).string = "" + DataManager_1.default.curScord;
    };
    /**判断结果 */
    GameLayer.prototype.ResultFn = function () {
        if (DataManager_1.default._curScord >= 1000) {
            this.showResult(true);
        }
        else {
            this.showResult(false);
        }
    };
    /**打开提示 */
    GameLayer.prototype.openTipNode = function () {
        this.tipNode.getChildByName("rule").scale = 0.8;
        this.tipNode.active = true;
        cc.tween(this.tipNode.getChildByName("rule"))
            .to(0.2, { scale: 1 })
            .start();
    };
    /**
  * 关闭提示展示
 */
    GameLayer.prototype.hideTipNode = function () {
        var _this = this;
        cc.tween(this.tipNode.getChildByName("rule"))
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.tipNode.active = false;
            _this.tipNode.getChildByName("rule").scale = 1;
        })
            .start();
    };
    /**
     * 展示结果
    */
    GameLayer.prototype.showResult = function (isWin) {
        this.unschedule(DataManager_1.default.timerFunc);
        this.unscheduleAllCallbacks();
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
        if (isWin) {
            var winNumLable = cc.find("win/winNum", this.resultNode);
            DataManager_1.default.curWinNum += 100;
            winNumLable.getComponent(cc.Label).string = "" + DataManager_1.default.curWinNum;
        }
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[isWin ? 4 : 5];
        this.node.getComponent(cc.AudioSource).play();
        var winNode = this.resultNode.getChildByName("win");
        var loseNode = this.resultNode.getChildByName("lose");
        winNode.active = isWin;
        loseNode.active = !isWin;
        var curAniNode = isWin ? winNode : loseNode;
        this.resultNode.active = true;
        curAniNode.scale = 0.6;
        curAniNode.opacity = 100;
        cc.tween(curAniNode)
            .to(0.3, { scale: 1.1, opacity: 255 })
            .to(0.3, { scale: 1 })
            .start();
    };
    /**
     * 关闭结果展示
    */
    GameLayer.prototype.hideResultNode = function () {
        DataManager_1.default.curGameIsRun = false;
        this.resultNode.active = false;
        cc.director.getCollisionManager().enabled = false;
        DataManager_1.default._curScord = 0;
        DataManager_1.default._indexTime = DataManager_1.default.startTime;
        this.updateTimerUi();
        this.updateUserCoin();
    };
    __decorate([
        property({ type: [cc.SpriteFrame], tooltip: "元素纹理" })
    ], GameLayer.prototype, "itemResList", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "用户余额节点" })
    ], GameLayer.prototype, "userCoinNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏提示页面" })
    ], GameLayer.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "游戏结果节点" })
    ], GameLayer.prototype, "resultNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "倒计时节点" })
    ], GameLayer.prototype, "timerNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "音效按钮节点" })
    ], GameLayer.prototype, "soundBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "音效按钮节点" })
    ], GameLayer.prototype, "musicBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "开始游戏节点" })
    ], GameLayer.prototype, "playBtn", void 0);
    __decorate([
        property({ type: playLayer_1.default, tooltip: "游戏逻辑控制脚本" })
    ], GameLayer.prototype, "playScr", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "玩家分数展示节点" })
    ], GameLayer.prototype, "userScoreLabel", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "剩余时间展示节点" })
    ], GameLayer.prototype, "timeLabel", void 0);
    __decorate([
        property({ type: [cc.AudioClip] })
    ], GameLayer.prototype, "audioResList", void 0);
    GameLayer = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBR3hDLHlDQUFvQztBQUNwQyx3Q0FBd0M7QUFDeEMsa0RBQTZDO0FBQzdDLHNEQUFpRDtBQUkzQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXFSQztRQWxSRyxpQkFBVyxHQUFxQixFQUFFLENBQUM7UUFHbkMsa0JBQVksR0FBWSxJQUFJLENBQUE7UUFHNUIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUd2QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUcxQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFHeEIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUd4QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBR3ZCLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFHekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFtQixFQUFFLENBQUM7UUFFM0IsWUFBTSxHQUFhLElBQUksQ0FBQTtRQUV2QixXQUFLLEdBQVUsQ0FBQyxDQUFBOztJQTZPM0IsQ0FBQztJQTFPSSxVQUFVO0lBQ0osNEJBQVEsR0FBZDs7Ozs7O3dCQUNHLEtBQUEsSUFBSSxDQUFBO3dCQUFXLHFCQUFNLHVCQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBcEUsR0FBSyxNQUFNLEdBQUksU0FBcUQsQ0FBQTt3QkFDcEUsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFD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RUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUM7OENBQ3RCO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLG1CQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDOzhDQUN4QjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztxREFDaEI7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUM7Z0RBQ3JCO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUM7bURBQ0M7SUFwQ2pCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FxUjdCO0lBQUQsZ0JBQUM7Q0FyUkQsQUFxUkMsQ0FyUnNDLEVBQUUsQ0FBQyxTQUFTLEdBcVJsRDtrQkFyUm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVXaGVlbCBmcm9tIFwiLi9HYW1lV2hlZWxcIjtcclxuaW1wb3J0IEl0ZW1Ob2RlIGZyb20gXCIuL0l0ZW1Ob2RlXCI7XHJcbmltcG9ydCBwbGF5TGF5ZXIgZnJvbSBcIi4vcGxheUxheWVyXCI7XHJcbmltcG9ydCB7IEV2ZW50SWQgfSBmcm9tIFwiLi91dGlsL2RlZmluZVwiO1xyXG5pbXBvcnQgRXZlbnRNZ3IgZnJvbSBcIi4vdXRpbC9ldmVudC9FdmVudE1nclwiO1xyXG5pbXBvcnQgbG9hZGVyTWFuYWdlciBmcm9tIFwiLi91dGlsL2xvYWRlck1hbmFnZXJcIjtcclxuaW1wb3J0IHV0aWwgZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogW2NjLlNwcml0ZUZyYW1lXSwgdG9vbHRpcDogXCLlhYPntKDnurnnkIZcIn0pXHJcbiAgICBpdGVtUmVzTGlzdDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLnlKjmiLfkvZnpop3oioLngrlcIn0pXHJcbiAgICB1c2VyQ29pbk5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIua4uOaIj+aPkOekuumhtemdolwifSlcclxuICAgIHRpcE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIua4uOaIj+e7k+aenOiKgueCuVwifSlcclxuICAgIHJlc3VsdE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIuWAkuiuoeaXtuiKgueCuVwifSlcclxuICAgIHRpbWVyTm9kZTogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi6Z+z5pWI5oyJ6ZKu6IqC54K5XCJ9KVxyXG4gICAgc291bmRCdG46IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIumfs+aViOaMiemSruiKgueCuVwifSlcclxuICAgIG11c2ljQnRuOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLlvIDlp4vmuLjmiI/oioLngrlcIn0pXHJcbiAgICBwbGF5QnRuOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogcGxheUxheWVyLCB0b29sdGlwOiBcIua4uOaIj+mAu+i+keaOp+WItuiEmuacrFwifSlcclxuICAgIHBsYXlTY3I6IHBsYXlMYXllciA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi546p5a625YiG5pWw5bGV56S66IqC54K5XCJ9KVxyXG4gICAgdXNlclNjb3JlTGFiZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLliankvZnml7bpl7TlsZXnpLroioLngrlcIn0pXHJcbiAgICB0aW1lTGFiZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogW2NjLkF1ZGlvQ2xpcF19KVxyXG4gICAgYXVkaW9SZXNMaXN0OiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBpY29uUGY6Y2MuUHJlZmFiID0gbnVsbFxyXG5cclxuICAgIHB1YmxpYyBpbmRleDpudW1iZXIgPSAwXHJcblxyXG5cclxuICAgICAvKirliqDovb3ljaHniYcgKi9cclxuICAgICBhc3luYyBsb2FkQ2FyZCgpe1xyXG4gICAgICAgIHRoaXMuaWNvblBmID0gIGF3YWl0IGxvYWRlck1hbmFnZXIuZ2V0UmVzKFwiaXRlbVwiLFwicHJlZmFiXCIsY2MuUHJlZmFiKVxyXG4gICAgICAgIGlmKHRoaXMuaWNvblBmKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLpooTliLbkvZPliqDovb3miJDlip/vvIFcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7IFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmdhbWVMYXllclNjciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wbGF5U2NyLm5vZGUuc2NhbGUgPSBjYy53aW5TaXplLmhlaWdodCAvIDEwODA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpXHJcbiAgICAgICAgdGhpcy5sb2FkQ2FyZCgpXHJcbiAgICAgICAgLy8gdGhpcy5saXN0ZXJFdmVudCgpXHJcbiAgICB9XHJcbiAgICAvL+e7keWumuS6i+S7tlxyXG4gICAgbGlzdGVyRXZlbnQoKXtcclxuICAgICAgICBFdmVudE1nci5JbnN0YW5jZS5SZWdpc3RlcihFdmVudElkLlJlc3VsdCx0aGlzLnNob3dSZXN1bHQsdGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBjbGVhdEV2ZW50KCl7XHJcbiAgICAgICAgRXZlbnRNZ3IuSW5zdGFuY2UuT2ZmKClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5YaF5oyJ6ZKu57uR5a6a5LqL5Lu2XHJcbiAgICAqL1xyXG4gICAgYnRuRXZlbnQoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbMF07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIHN3aXRjaChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidG5TdGFydEdhbWVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUdhbWUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuUmV0dXJuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWF0RXZlbnQoKVxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaGFsbFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnROZXh0R2FtZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYnRTdGFydE92ZXJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRFeGl0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWF0RXZlbnQoKVxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaGFsbFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGlwQnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5UaXBOb2RlKClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VUaXBCdG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRpcE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk9yQ2xvc2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtdXNpY0J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuT3JDbG9zZUJHKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOW8gOWni+a4uOaIjyAqL1xyXG4gICAgcGxheUdhbWUoKXtcclxuICAgICAgICBpZihEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4pIHJldHVyblxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1biA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIOiuoeaXtuWZqFxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgIC8v6ZqQ6JeP5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5QnRuLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgICAvL+a4uOaIj+mAu+i+kVxyXG4gICAgICAgIHRoaXMucGxheVNjci5jcmVhdGVSYW5kb21QdXp6bGUoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiBcclxuICAgIC8qKlxyXG4gICAgICog5byA5ZCv5oiW5YWz6Zet6Z+z5pWIXHJcbiAgICAqL1xyXG4gICAgb3Blbk9yQ2xvc2VTb3VuZCgpIHtcclxuICAgICAgICBpZihEYXRhTWFuYWdlci5jdXJTb3VuZEJHSXNDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNvbG9yID0gY2MuY29sb3IoMTcwLCAxNzAsIDE3MCwgMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyU291bmRCR0lzQ2xvc2UgPSAhRGF0YU1hbmFnZXIuY3VyU291bmRCR0lzQ2xvc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk9yQ2xvc2VCRygpIHtcclxuICAgICAgICBpZihEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0J0bi5jb2xvciA9IGNjLmNvbG9yKDE3MCwgMTcwLCAxNzAsIDI1NSk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNCdG4uY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSA9ICFEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+WAkuiuoeaXtlxyXG4gICAgKi9cclxuICAgIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgbGV0IHNwZWVkID0gMC4wMTtcclxuICAgICAgICBEYXRhTWFuYWdlci50aW1lckZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluZGV4VGltZSAtPSBzcGVlZDtcclxuICAgICAgICAgICAgaWYoRGF0YU1hbmFnZXIuaW5kZXhUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVzdWx0Rm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyVWkoKVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMDA6MDA6XCIrTWF0aC5mbG9vcihEYXRhTWFuYWdlci5pbmRleFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKERhdGFNYW5hZ2VyLnRpbWVyRnVuYywgc3BlZWQpO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWAkuiuoeaXtlxyXG4gICAgKi9cclxuICAgIHVwZGF0ZVRpbWVyVWkoKSB7XHJcbiAgICAgICAgLy8gY2MuZmluZChcImJhckJnL2JhclwiLCB0aGlzLnRpbWVyTm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gRGF0YU1hbmFnZXIuaW5kZXhUaW1lIC8gRGF0YU1hbmFnZXIuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMudGltZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIwMDowMDpcIitNYXRoLmNlaWwoRGF0YU1hbmFnZXIuaW5kZXhUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGFDb2luKCl7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOS9meminVxyXG4gICAgKi9cclxuICAgIHVwZGF0ZVVzZXJDb2luKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudXNlclNjb3JlTGFiZWwpXHJcbiAgICAgICAgICAgIC50bygwLjEsIHtzY2FsZTogMS4xfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwge3NjYWxlOiAxfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy51c2VyU2NvcmVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBEYXRhTWFuYWdlci5jdXJTY29yZDtcclxuICAgIH1cclxuXHJcbiAgICAvKirliKTmlq3nu5PmnpwgKi9cclxuICAgIFJlc3VsdEZuKCl7XHJcbiAgICAgICAgaWYoRGF0YU1hbmFnZXIuX2N1clNjb3JkID49IDEwMDApe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQodHJ1ZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgLyoq5omT5byA5o+Q56S6ICovXHJcbiAgICAgb3BlblRpcE5vZGUoKXtcclxuICAgICAgICB0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJydWxlXCIpLnNjYWxlID0gMC44O1xyXG4gICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikpXHJcbiAgICAgICAgLnRvKDAuMiwge3NjYWxlOiAxfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAgICAvKipcclxuICAgICAqIOWFs+mXreaPkOekuuWxleekulxyXG4gICAgKi9cclxuICAgICAgIGhpZGVUaXBOb2RlKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHtzY2FsZTogMC41fSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bGV56S657uT5p6cXHJcbiAgICAqL1xyXG4gICAgc2hvd1Jlc3VsdChpc1dpbikge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZShEYXRhTWFuYWdlci50aW1lckZ1bmMpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcblxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluZGV4VGltZSA9IERhdGFNYW5hZ2VyLnN0YXJ0VGltZTtcclxuICAgICAgICBpZihpc1dpbikge1xyXG4gICAgICAgICAgICBsZXQgd2luTnVtTGFibGUgPSBjYy5maW5kKFwid2luL3dpbk51bVwiLCB0aGlzLnJlc3VsdE5vZGUpO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5jdXJXaW5OdW0gKz0gMTAwO1xyXG4gICAgICAgICAgICB3aW5OdW1MYWJsZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBEYXRhTWFuYWdlci5jdXJXaW5OdW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb1Jlc0xpc3RbaXNXaW4gPyA0IDogNV07XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG5cclxuICAgICAgICBsZXQgd2luTm9kZSA9IHRoaXMucmVzdWx0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIndpblwiKTtcclxuICAgICAgICBsZXQgbG9zZU5vZGUgPSB0aGlzLnJlc3VsdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsb3NlXCIpO1xyXG5cclxuICAgICAgICB3aW5Ob2RlLmFjdGl2ZSA9IGlzV2luO1xyXG4gICAgICAgIGxvc2VOb2RlLmFjdGl2ZSA9ICFpc1dpbjtcclxuICAgICAgICBsZXQgY3VyQW5pTm9kZSA9IGlzV2luID8gd2luTm9kZSA6IGxvc2VOb2RlO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3VsdE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY3VyQW5pTm9kZS5zY2FsZSA9IDAuNjtcclxuICAgICAgICBjdXJBbmlOb2RlLm9wYWNpdHkgPSAxMDA7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGN1ckFuaU5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjMsIHtzY2FsZTogMS4xLCBvcGFjaXR5OiAyNTV9KVxyXG4gICAgICAgICAgICAudG8oMC4zLCB7c2NhbGU6IDF9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXree7k+aenOWxleekulxyXG4gICAgKi9cclxuICAgIGhpZGVSZXN1bHROb2RlKCkge1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLl9jdXJTY29yZCA9IDA7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuX2luZGV4VGltZSA9IERhdGFNYW5hZ2VyLnN0YXJ0VGltZVxyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXJVaSgpXHJcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyQ29pbigpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxldmVudFxcRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtJQU9JLGVBQVksT0FBZ0IsRUFBRSxPQUFpQixFQUFFLElBQVksRUFBRSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFlBQWlCO1FBQzVFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELHNCQUFXLHVCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFTSxxQkFBSyxHQUFaLFVBQWEsS0FBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNwSSxDQUFDO0lBQ0wsWUFBQztBQUFELENBMUJBLEFBMEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudElkIH0gZnJvbSBcIi4uL2RlZmluZVwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCB7XHJcbiAgICBwdWJsaWMgRXZlbnRJZDogRXZlbnRJZDtcclxuICAgIHB1YmxpYyBDYWxsYmFjazogRnVuY3Rpb247XHJcbiAgICBwdWJsaWMgU2NvcGU6IGFueTtcclxuICAgIHB1YmxpYyBPbmNlOiBib29sZWFuO1xyXG4gICAgcHVibGljIFJlYWxDYWxsQmFrYzogRnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXZlbnRJZDogRXZlbnRJZCwgY2FsbGJhazogRnVuY3Rpb24sIG9uY2U6Ym9vbGVhbiwgc2NvcGU6IGFueSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLkV2ZW50SWQgPSBldmVudElkO1xyXG4gICAgICAgIHRoaXMuQ2FsbGJhY2sgPSBjYWxsYmFrO1xyXG4gICAgICAgIHRoaXMuU2NvcGUgPSBzY29wZTtcclxuICAgICAgICBpZiAoc2NvcGUgIT0gbnVsbCB8fCBzY29wZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5SZWFsQ2FsbEJha2MgPSBjYWxsYmFrLmJpbmQoc2NvcGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuUmVhbENhbGxCYWtjID0gdGhpcy5DYWxsYmFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5PbmNlID0gb25jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IENhbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuUmVhbENhbGxCYWtjO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBFcXVlbChvdGhlcjogRXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5FdmVudElkID09IG90aGVyLkV2ZW50SWQgJiYgdGhpcy5DYWxsYmFjayA9PSBvdGhlci5DYWxsYmFjayAmJiB0aGlzLk9uY2UgPT0gb3RoZXIuT25jZSAmJiB0aGlzLlNjb3BlID09IG90aGVyLlNjb3BlO1xyXG4gICAgfVxyXG59Il19
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
        /** 当前是否播放音效 */
        this.curSoundIsClose = true;
        /** 当前是否播放音效 */
        this.curSoundBGIsClose = true;
        /** 当前是否游戏运行中 */
        this.curGameIsRun = false;
        /**用户ID */
        this.userId = "10086";
        /**当前的分数 */
        this._curScord = 0;
        /** 当前局赢分 */
        this.curWinNum = 0;
        /** gameLayer脚本 */
        this.gameLayerScr = null;
        /**初始时间 */
        this.startTime = 60;
        /**当前时间 */
        this._indexTime = 60;
        /** 定时器运行方法 */
        this.timerFunc = null;
        /** 当前游戏难度阶段 */
        this.curGameStage = 0;
        /** 阶段对应行列 */
        this.stageRanks = [
            5,
            6,
            7,
            8,
            9,
            10,
        ];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQUE7UUFHSSxlQUFlO1FBQ2Ysb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFFL0IsZUFBZTtRQUNmLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUVuQyxnQkFBZ0I7UUFDaEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsVUFBVTtRQUNWLFdBQU0sR0FBVSxPQUFPLENBQUE7UUFFdkIsV0FBVztRQUNKLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFFNUIsWUFBWTtRQUNMLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFhN0Isa0JBQWtCO1FBQ2xCLGlCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLFVBQVU7UUFDVixjQUFTLEdBQVUsRUFBRSxDQUFDO1FBRXRCLFVBQVU7UUFDVixlQUFVLEdBQVUsRUFBRSxDQUFDO1FBZ0J2QixjQUFjO1FBQ2QsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixlQUFlO1FBQ2YsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsYUFBYTtRQUNiLGVBQVUsR0FBa0I7WUFDeEIsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxFQUFFO1NBQ0wsQ0FBQTtJQUVMLENBQUM7SUFsREcsc0JBQVcsaUNBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQW9CLEdBQUc7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ25DO1FBQ0osQ0FBQzs7O09BUEE7SUFrQkQsc0JBQVcsa0NBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQXFCLEdBQUc7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNsQyxJQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsY0FBYztvQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNoRDthQUNEO1FBQ0osQ0FBQzs7O09BVkE7SUExQ3NCLG9CQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQXNFeEQsa0JBQUM7Q0F2RUQsQUF1RUMsSUFBQTtBQUVELGtCQUFlLFdBQVcsQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxheWVyIGZyb20gXCIuL0dhbWVMYXllclwiO1xyXG5cclxuY2xhc3MgRGF0YU1hbmFnZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZSA9IG5ldyBEYXRhTWFuYWdlcigpO1xyXG5cclxuICAgIC8qKiDlvZPliY3mmK/lkKbmkq3mlL7pn7PmlYggKi9cclxuICAgIGN1clNvdW5kSXNDbG9zZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgIC8qKiDlvZPliY3mmK/lkKbmkq3mlL7pn7PmlYggKi9cclxuICAgICBjdXJTb3VuZEJHSXNDbG9zZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIOW9k+WJjeaYr+WQpua4uOaIj+i/kOihjOS4rSAqL1xyXG4gICAgY3VyR2FtZUlzUnVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq55So5oi3SUQgKi9cclxuICAgIHVzZXJJZDpzdHJpbmcgPSBcIjEwMDg2XCJcclxuXHJcbiAgICAvKirlvZPliY3nmoTliIbmlbAgKi9cclxuICAgIHB1YmxpYyBfY3VyU2NvcmQ6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKiog5b2T5YmN5bGA6LWi5YiGICovXHJcbiAgICBwdWJsaWMgY3VyV2luTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY3VyU2NvcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clNjb3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY3VyU2NvcmQobnVtKSB7XHJcbiAgICAgICB0aGlzLl9jdXJTY29yZCA9IG51bTtcclxuICAgICAgIGlmKHRoaXMuZ2FtZUxheWVyU2NyKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudXBkYXRlVXNlckNvaW4oKTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogZ2FtZUxheWVy6ISa5pysICovXHJcbiAgICBnYW1lTGF5ZXJTY3I6IEdhbWVMYXllciA9IG51bGw7XHJcblxyXG4gICAgLyoq5Yid5aeL5pe26Ze0ICovXHJcbiAgICBzdGFydFRpbWU6bnVtYmVyID0gNjA7ICAgICAgICAgIFxyXG5cclxuICAgIC8qKuW9k+WJjeaXtumXtCAqL1xyXG4gICAgX2luZGV4VGltZTpudW1iZXIgPSA2MDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGluZGV4VGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXhUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaW5kZXhUaW1lKG51bSkge1xyXG4gICAgICAgdGhpcy5faW5kZXhUaW1lID0gbnVtO1xyXG4gICAgICAgaWYodGhpcy5nYW1lTGF5ZXJTY3IpIHtcclxuICAgICAgICB0aGlzLmdhbWVMYXllclNjci51cGRhdGVUaW1lclVpKCk7XHJcbiAgICAgICAgaWYobnVtID09IHRoaXMuc3RhcnRUaW1lKSB7IC8vIOmHjeaWsOiuvue9ruS6i+S7tumHjee9ruWumuaXtuWZqFxyXG4gICAgICAgICAgICB0aGlzLmdhbWVMYXllclNjci51bnNjaGVkdWxlKHRoaXMudGltZXJGdW5jKTtcclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWumuaXtuWZqOi/kOihjOaWueazlSAqL1xyXG4gICAgdGltZXJGdW5jID0gbnVsbDtcclxuXHJcbiAgICAvKiog5b2T5YmN5ri45oiP6Zq+5bqm6Zi25q61ICovXHJcbiAgICBjdXJHYW1lU3RhZ2U6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqIOmYtuauteWvueW6lOihjOWIlyAqL1xyXG4gICAgc3RhZ2VSYW5rczogQXJyYXk8bnVtYmVyPiA9IFtcclxuICAgICAgICA1LFxyXG4gICAgICAgIDYsXHJcbiAgICAgICAgNyxcclxuICAgICAgICA4LFxyXG4gICAgICAgIDksXHJcbiAgICAgICAgMTAsXHJcbiAgICBdXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhTWFuYWdlci5pbnN0YW5jZTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ee53zg89FOcYf4i7SNaR6G', 'util');
// script/util/util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = /** @class */ (function () {
    function util() {
        var _this = this;
        /**
         * 深拷贝
        */
        this.copyObj = function (obj) {
            if (obj === void 0) { obj = {}; }
            var newobj = null;
            //判断是否需要继续进行递归
            if (typeof (obj) == 'object' && obj !== null) {
                newobj = obj instanceof Array ? [] : {}; //进行下一层递归克隆
                for (var i in obj) {
                    newobj[i] = _this.copyObj(obj[i]);
                } //如果不是对象直接赋值
            }
            else {
                newobj = obj;
            }
            ;
            return newobj;
        };
    }
    /** 获取两个数间的随机值(包括min max) */
    util.prototype.getRandom = function (min, max) {
        if (min == -1 || max == -1)
            return;
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    /**随机生成数组 */
    util.prototype.getRandArray = function (min, max, length) {
        var NumberArray = [];
        for (var i = 0; i < length; i++) {
            NumberArray.push(this.getRandom(min, max));
        }
        return NumberArray;
    };
    /**
     * 随机获取数组中指定数量元素
     * @param list 提供数据的数组
     * @param itemNum 获取元素数量(当需要元素不重复时此值大于数组长度会打乱返回整个数组)
     * @param isRepetition 返回元素是否允许重复
    */
    util.prototype.getRandomListItme = function (list, itemNum, isRepetition) {
        var _this = this;
        if (isRepetition === void 0) { isRepetition = false; }
        var copyList = this.copyObj(list);
        var randomList = [];
        list.splice;
        if (isRepetition) {
            for (var i = 0; i < itemNum; i++) {
                randomList.push(copyList[this.getRandom(0, copyList.length - 1)]);
            }
        }
        else {
            var getItem_1 = function () {
                if (copyList.length == 0) {
                    return;
                }
                var item = copyList.splice(_this.getRandom(0, copyList.length - 1), 1)[0];
                randomList.push(item);
                if (--itemNum > 0) {
                    getItem_1();
                }
            };
            getItem_1();
        }
        return randomList;
    };
    /**
     * 缓动更新事件
     * @param time 缓动运动时间
     * @param updateFunc 每帧调用的事件会传入百分比
    */
    util.prototype.tweenUpdate = function (time, updateFunc) {
        var startObj = { num: 0 };
        var endObj = { num: 100 };
        var tween = cc.tween(startObj)
            .to(time, endObj, { progress: function (start, end, current, ratio) {
                updateFunc(ratio);
                return 1;
            } })
            .start();
        return tween;
    };
    /**
     * 网格裁切纹理
     * @param sf 需要裁切的纹理
     * @param rowNum 网格行数
     * @param colNum 网格列数
     * @param space 格子获取纹理的间隙
    */
    util.prototype.gridCutSpriteFrame = function (sf, rowNum, colNum, space) {
        if (space === void 0) { space = 0; }
        var sp = sf.getTexture();
        var picWidth = sp.width / colNum;
        var picHeight = sp.height / rowNum;
        var sfList = [];
        for (var i = 0; i < rowNum; i++) {
            sfList.push([]);
            for (var j = 0; j < colNum; j++) {
                var cutPic = new cc.SpriteFrame(sp);
                cutPic.setRect(new cc.Rect(j * picWidth + j * space, i * picHeight + i * space, picWidth - space, picHeight - space));
                sfList[i].push(cutPic);
            }
        }
        return sfList;
    };
    /* 判断一个点是否在目标节点内
     * @param node 目标节点
     * @param point 目标点位置(世界坐标)
    */
    util.prototype.checkPointExistNode = function (node, point) {
        var width = node.width;
        var height = node.height;
        var nodePos = node.convertToWorldSpaceAR(cc.v2(0, 0)).clone();
        var topPos = cc.v3(nodePos.x, nodePos.y + height / 2);
        var bottomPos = cc.v3(nodePos.x, nodePos.y - height / 2);
        var leftPos = cc.v3(nodePos.x - width / 2, nodePos.y);
        var rightPos = cc.v3(nodePos.x + width / 2, nodePos.y);
        if (point.x >= leftPos.x && point.x <= rightPos.x && point.y >= bottomPos.y && point.y <= topPos.y) {
            return node;
        }
        return null;
    };
    util.instance = new util();
    return util;
}());
exports.default = util.instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFx1dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUFBLGlCQTJJQztRQXpIRzs7VUFFRTtRQUNGLFlBQU8sR0FBRyxVQUFDLEdBQVE7WUFBUixvQkFBQSxFQUFBLFFBQVE7WUFDZixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbEIsY0FBYztZQUNkLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUMxQyxNQUFNLEdBQUcsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBZ0IsV0FBVztnQkFDbkUsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7b0JBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ25DLENBQWdCLFlBQVk7YUFDaEM7aUJBQUs7Z0JBQ0YsTUFBTSxHQUFHLEdBQUcsQ0FBQTthQUNmO1lBQUEsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQTtJQXlHTCxDQUFDO0lBeElHLDRCQUE0QjtJQUNyQix3QkFBUyxHQUFoQixVQUFpQixHQUFHLEVBQUUsR0FBRztRQUNyQixJQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUEsWUFBWTtJQUNaLDJCQUFZLEdBQVosVUFBYSxHQUFVLEVBQUMsR0FBVSxFQUFDLE1B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QUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyRCxJQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRTtZQUMvRixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQXhJc0IsYUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUEwSWpELFdBQUM7Q0EzSUQsQUEySUMsSUFBQTtBQUNELGtCQUFlLElBQUksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyB1dGlse1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2UgPSBuZXcgdXRpbCgpO1xuXG4gICAgLyoqIOiOt+WPluS4pOS4quaVsOmXtOeahOmaj+acuuWAvCjljIXmi6xtaW4gbWF4KSAqL1xuICAgIHB1YmxpYyBnZXRSYW5kb20obWluLCBtYXgpIHtcbiAgICAgICAgaWYobWluID09IC0xIHx8IG1heCA9PSAtMSkgcmV0dXJuO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9XG5cbiAgICAgLyoq6ZqP5py655Sf5oiQ5pWw57uEICovXG4gICAgIGdldFJhbmRBcnJheShtaW46bnVtYmVyLG1heDpudW1iZXIsbGVuZ3RoOm51bWJlcik6QXJyYXk8bnVtYmVyPntcbiAgICAgICAgbGV0IE51bWJlckFycmF5OkFycmF5PG51bWJlcj4gPSBbXVxuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbmd0aDtpKyspe1xuICAgICAgICAgICAgTnVtYmVyQXJyYXkucHVzaCh0aGlzLmdldFJhbmRvbShtaW4sbWF4KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyQXJyYXlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7Hmi7fotJ1cbiAgICAqL1xuICAgIGNvcHlPYmogPSAob2JqID0ge30pID0+IHsgICAgICAgICAgICAvL+WPmOmHj+WFiOe9ruepulxuICAgICAgICBsZXQgbmV3b2JqID0gbnVsbDsgIFxuXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6ZyA6KaB57un57ut6L+b6KGM6YCS5b2SXG4gICAgICAgIGlmICh0eXBlb2YgKG9iaikgPT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdvYmogPSBvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge307ICAgICAgICAgICAgICAgIC8v6L+b6KGM5LiL5LiA5bGC6YCS5b2S5YWL6ZqGXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICAgICAgICAgIG5ld29ialtpXSA9IHRoaXMuY29weU9iaihvYmpbaV0pXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgIC8v5aaC5p6c5LiN5piv5a+56LGh55u05o6l6LWL5YC8XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIG5ld29iaiA9IG9ialxuICAgICAgICB9OyAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3b2JqOyAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpmo/mnLrojrflj5bmlbDnu4TkuK3mjIflrprmlbDph4/lhYPntKBcbiAgICAgKiBAcGFyYW0gbGlzdCDmj5DkvpvmlbDmja7nmoTmlbDnu4RcbiAgICAgKiBAcGFyYW0gaXRlbU51bSDojrflj5blhYPntKDmlbDph48o5b2T6ZyA6KaB5YWD57Sg5LiN6YeN5aSN5pe25q2k5YC85aSn5LqO5pWw57uE6ZW/5bqm5Lya5omT5Lmx6L+U5Zue5pW05Liq5pWw57uEKVxuICAgICAqIEBwYXJhbSBpc1JlcGV0aXRpb24g6L+U5Zue5YWD57Sg5piv5ZCm5YWB6K646YeN5aSNXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0UmFuZG9tTGlzdEl0bWUobGlzdDogQXJyYXk8YW55PiwgaXRlbU51bTogbnVtYmVyLCBpc1JlcGV0aXRpb246IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgY29weUxpc3QgPSB0aGlzLmNvcHlPYmoobGlzdCk7XG4gICAgICAgIGxldCByYW5kb21MaXN0ID0gW107XG5cbiAgICAgICAgbGlzdC5zcGxpY2VcblxuICAgICAgICBpZihpc1JlcGV0aXRpb24pIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1OdW07IGkrKykge1xuICAgICAgICAgICAgICAgIHJhbmRvbUxpc3QucHVzaChjb3B5TGlzdFt0aGlzLmdldFJhbmRvbSgwLCBjb3B5TGlzdC5sZW5ndGgtMSldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGdldEl0ZW0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY29weUxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNvcHlMaXN0LnNwbGljZSh0aGlzLmdldFJhbmRvbSgwLCBjb3B5TGlzdC5sZW5ndGgtMSksIDEpWzBdO1xuXG4gICAgICAgICAgICAgICAgcmFuZG9tTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmKC0taXRlbU51bSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0SXRlbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0SXRlbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJhbmRvbUxpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57yT5Yqo5pu05paw5LqL5Lu2XG4gICAgICogQHBhcmFtIHRpbWUg57yT5Yqo6L+Q5Yqo5pe26Ze0XG4gICAgICogQHBhcmFtIHVwZGF0ZUZ1bmMg5q+P5bin6LCD55So55qE5LqL5Lu25Lya5Lyg5YWl55m+5YiG5q+UXG4gICAgKi9cbiAgICB0d2VlblVwZGF0ZSh0aW1lOiBudW1iZXIsIHVwZGF0ZUZ1bmM6IEZ1bmN0aW9uKTogY2MuVHdlZW4ge1xuICAgICAgICBsZXQgc3RhcnRPYmogPSB7bnVtOiAwfTtcbiAgICAgICAgbGV0IGVuZE9iaiA9IHtudW06IDEwMH07XG5cbiAgICAgICAgbGV0IHR3ZWVuID0gY2MudHdlZW4oc3RhcnRPYmopXG4gICAgICAgICAgICAudG8odGltZSwgZW5kT2JqLCB7cHJvZ3Jlc3M6IChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgY3VycmVudDogbnVtYmVyLCByYXRpbzogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jKHJhdGlvKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICByZXR1cm4gdHdlZW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog572R5qC86KOB5YiH57q555CGXG4gICAgICogQHBhcmFtIHNmIOmcgOimgeijgeWIh+eahOe6ueeQhlxuICAgICAqIEBwYXJhbSByb3dOdW0g572R5qC86KGM5pWwXG4gICAgICogQHBhcmFtIGNvbE51bSDnvZHmoLzliJfmlbBcbiAgICAgKiBAcGFyYW0gc3BhY2Ug5qC85a2Q6I635Y+W57q555CG55qE6Ze06ZqZXG4gICAgKi9cbiAgICBncmlkQ3V0U3ByaXRlRnJhbWUoc2Y6IGNjLlNwcml0ZUZyYW1lLCByb3dOdW06IG51bWJlciwgY29sTnVtOiBudW1iZXIsIHNwYWNlOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgc3AgPSBzZi5nZXRUZXh0dXJlKCk7XG4gICAgICAgIGxldCBwaWNXaWR0aCA9IHNwLndpZHRoL2NvbE51bTtcbiAgICAgICAgbGV0IHBpY0hlaWdodCA9IHNwLmhlaWdodC9yb3dOdW07XG4gICAgICAgIGxldCBzZkxpc3Q6IEFycmF5PEFycmF5PGNjLlNwcml0ZUZyYW1lPj4gPSBbXTtcblxuICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCByb3dOdW07IGkrKykge1xuICAgICAgICAgICAgc2ZMaXN0LnB1c2goW10pO1xuICAgICAgICAgICAgZm9yKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgY29sTnVtOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3V0UGljID0gbmV3IGNjLlNwcml0ZUZyYW1lKHNwKTtcblxuICAgICAgICAgICAgICAgIGN1dFBpYy5zZXRSZWN0KG5ldyBjYy5SZWN0KGogKiBwaWNXaWR0aCArIGoqc3BhY2UsIGkqcGljSGVpZ2h0ICsgaSpzcGFjZSwgcGljV2lkdGgtc3BhY2UsIHBpY0hlaWdodC1zcGFjZSkpO1xuICAgICAgICAgICAgICAgIHNmTGlzdFtpXS5wdXNoKGN1dFBpYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2ZMaXN0O1xuICAgIH1cblxuICAgIFxuICAgIC8qIOWIpOaWreS4gOS4queCueaYr+WQpuWcqOebruagh+iKgueCueWGhVxuICAgICAqIEBwYXJhbSBub2RlIOebruagh+iKgueCuVxuICAgICAqIEBwYXJhbSBwb2ludCDnm67moIfngrnkvY3nva4o5LiW55WM5Z2Q5qCHKVxuICAgICovXG4gICAgY2hlY2tQb2ludEV4aXN0Tm9kZShub2RlOiBjYy5Ob2RlLCBwb2ludDogY2MuVmVjMiB8IGNjLlZlYzMpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gbm9kZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IG5vZGUuaGVpZ2h0O1xuICAgICAgICBsZXQgbm9kZVBvcyA9IG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKS5jbG9uZSgpO1xuICAgICAgICBsZXQgdG9wUG9zID0gY2MudjMobm9kZVBvcy54LCBub2RlUG9zLnkgKyBoZWlnaHQvMik7XG4gICAgICAgIGxldCBib3R0b21Qb3MgPSBjYy52Myhub2RlUG9zLngsIG5vZGVQb3MueSAtIGhlaWdodC8yKTtcbiAgICAgICAgbGV0IGxlZnRQb3MgPSBjYy52Myhub2RlUG9zLnggLSB3aWR0aC8yLCBub2RlUG9zLnkpO1xuICAgICAgICBsZXQgcmlnaHRQb3MgPSBjYy52Myhub2RlUG9zLnggKyB3aWR0aC8yLCBub2RlUG9zLnkpO1xuXG4gICAgICAgIGlmKHBvaW50LnggPj0gbGVmdFBvcy54ICYmIHBvaW50LnggPD0gcmlnaHRQb3MueCAmJiBwb2ludC55ID49IGJvdHRvbVBvcy55ICYmIHBvaW50LnkgPD0gdG9wUG9zLnkpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCB1dGlsLmluc3RhbmNlOyJdfQ==
//------QC-SOURCE-SPLIT------
