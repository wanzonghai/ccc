
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
require('./assets/script/ItemNode');
require('./assets/script/JSBNative');
require('./assets/script/StartGameLayer');
require('./assets/script/util/define');
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemNode = /** @class */ (function (_super) {
    __extends(ItemNode, _super);
    function ItemNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pokerNum = null;
        _this.pokerType = null;
        return _this;
        // update (dt) {}
    }
    ItemNode.prototype.start = function () {
    };
    /**初始化牌 */
    ItemNode.prototype.init = function (num, itemSize) {
        var _this = this;
        this.pokerNum = num;
        var path = "item/" + num;
        cc.resources.load(path, cc.SpriteFrame, function (err, sp) {
            if (err) {
                console.log("加载失败:", path);
            }
            else {
                _this.node.getComponent(cc.Sprite).spriteFrame = sp;
                _this.scheduleOnce(function () {
                    _this.node.setContentSize(itemSize);
                });
            }
        });
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxJdGVtTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBCQztRQXhCVSxjQUFRLEdBQVUsSUFBSSxDQUFBO1FBQ3RCLGVBQVMsR0FBWSxJQUFJLENBQUE7O1FBc0JoQyxpQkFBaUI7SUFDckIsQ0FBQztJQXJCRyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELFVBQVU7SUFDSCx1QkFBSSxHQUFYLFVBQVksR0FBVSxFQUFFLFFBQWlCO1FBQXpDLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUE7UUFDbkIsSUFBSSxJQUFJLEdBQUcsVUFBUSxHQUFLLENBQUM7UUFDekIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUMsVUFBQyxHQUFHLEVBQUUsRUFBa0I7WUFDM0QsSUFBRyxHQUFHLEVBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDOUI7aUJBQUk7Z0JBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUE7Z0JBQ2xELEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFBO2FBQ0w7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUF2QmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwQjVCO0lBQUQsZUFBQztDQTFCRCxBQTBCQyxDQTFCcUMsRUFBRSxDQUFDLFNBQVMsR0EwQmpEO2tCQTFCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IEl0ZW1UeXBlIH0gZnJvbSBcIi4vdXRpbC9kZWZpbmVcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBwb2tlck51bTpzdHJpbmcgPSBudWxsXHJcbiAgICBwdWJsaWMgcG9rZXJUeXBlOkl0ZW1UeXBlID0gbnVsbFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuWIneWni+WMlueJjCAqL1xyXG4gICAgcHVibGljIGluaXQobnVtOnN0cmluZywgaXRlbVNpemU6IGNjLlNpemUpe1xyXG4gICAgICAgIHRoaXMucG9rZXJOdW0gPSBudW1cclxuICAgICAgICBsZXQgcGF0aCA9IGBpdGVtLyR7bnVtfWA7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgY2MuU3ByaXRlRnJhbWUsKGVyciwgc3A6IGNjLlNwcml0ZUZyYW1lKSA9PntcclxuICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L295aSx6LSlOlwiLCBwYXRoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShpdGVtU2l6ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
exports.JsbFunType = exports.ItemType = void 0;
/**扑克类型 */
var ItemType;
(function (ItemType) {
    ItemType[ItemType["Square"] = 0] = "Square";
    ItemType[ItemType["Plum"] = 1] = "Plum";
    ItemType[ItemType["Heart"] = 2] = "Heart";
    ItemType[ItemType["Spade"] = 3] = "Spade";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var JsbFunType;
(function (JsbFunType) {
    JsbFunType["ShowRewardedVideoAd"] = "hrsmzex";
    JsbFunType["ShowInterstitialAd"] = "skdqpu";
    JsbFunType["ShowOpenAd"] = "frhbrxzv";
    JsbFunType["AdjustDecision"] = "rnkjmjq";
})(JsbFunType = exports.JsbFunType || (exports.JsbFunType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxkZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsVUFBVTtBQUNWLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNoQiwyQ0FBTSxDQUFBO0lBQ04sdUNBQUksQ0FBQTtJQUNKLHlDQUFLLENBQUE7SUFDTCx5Q0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBS25CO0FBRUQsSUFBWSxVQUtYO0FBTEQsV0FBWSxVQUFVO0lBQ2xCLDZDQUErQixDQUFBO0lBQy9CLDJDQUE2QixDQUFBO0lBQzdCLHFDQUF1QixDQUFBO0lBQ3ZCLHdDQUEwQixDQUFBO0FBQzlCLENBQUMsRUFMVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUtyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKuaJkeWFi+exu+WeiyAqL1xyXG5leHBvcnQgZW51bSBJdGVtVHlwZSB7XHJcbiAgICBTcXVhcmUsXHJcbiAgICBQbHVtLFxyXG4gICAgSGVhcnQsXHJcbiAgICBTcGFkZSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSnNiRnVuVHlwZSB7XHJcbiAgICBTaG93UmV3YXJkZWRWaWRlb0FkID0gJ2hyc216ZXgnLFxyXG4gICAgU2hvd0ludGVyc3RpdGlhbEFkID0gJ3NrZHFwdScsXHJcbiAgICBTaG93T3BlbkFkID0gJ2ZyaGJyeHp2JyxcclxuICAgIEFkanVzdERlY2lzaW9uID0gJ3Jua2ptanEnLFxyXG59XHJcbiJdfQ==
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
        /** 当前中奖元素下标 */
        this.curWinItmeIndex = -1;
        /** gameLayer脚本 */
        this.gameLayerScr = null;
        /**初始时间 */
        this.startTime = 30;
        /**当前时间 */
        this._indexTime = 30;
        /** 定时器运行方法 */
        this.timerFunc = null;
        /**当前选择的扑克牌 */
        this.selectPorkerArray = [-1, -1];
        /** 是否开启音效 */
        this.isOpenEffectSound = true;
        /** 是否开启背景音乐 */
        this.isOpenBgSound = true;
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
                if (num == this.startTime) {
                    // 重新设置事件重置定时器
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQUE7UUFHSSxnQkFBZ0I7UUFDaEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsV0FBVztRQUNKLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFN0IsWUFBWTtRQUNMLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFhN0IsZUFBZTtRQUNmLG9CQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFN0Isa0JBQWtCO1FBQ2xCLGlCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLFVBQVU7UUFDVixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFVBQVU7UUFDVixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBaUJ4QixjQUFjO1FBQ2QsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixjQUFjO1FBQ2Qsc0JBQWlCLEdBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QyxhQUFhO1FBQ2Isc0JBQWlCLEdBQVksSUFBSSxDQUFDO1FBRWxDLGVBQWU7UUFDZixrQkFBYSxHQUFZLElBQUksQ0FBQztJQUVsQyxDQUFDO0lBbERHLHNCQUFXLGlDQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFvQixHQUFHO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN0QztRQUNMLENBQUM7OztPQVBBO0lBcUJELHNCQUFXLGtDQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFxQixHQUFHO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDdkIsY0FBYztvQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ2hEO2FBQ0o7UUFDTCxDQUFDOzs7T0FYQTtJQXBDc0Isb0JBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBNkR4RCxrQkFBQztDQTlERCxBQThEQyxJQUFBO0FBRUQsa0JBQWUsV0FBVyxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGF5ZXIgZnJvbSAnLi9HYW1lTGF5ZXInO1xyXG5pbXBvcnQgeyBKc2JGdW5UeXBlIH0gZnJvbSAnLi91dGlsL2RlZmluZSc7XHJcblxyXG5jbGFzcyBEYXRhTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlID0gbmV3IERhdGFNYW5hZ2VyKCk7XHJcblxyXG4gICAgLyoqIOW9k+WJjeaYr+WQpua4uOaIj+i/kOihjOS4rSAqL1xyXG4gICAgY3VyR2FtZUlzUnVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq5b2T5YmN55qE5YiG5pWwICovXHJcbiAgICBwdWJsaWMgX2N1clNjb3JkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKiDlvZPliY3lsYDotaLliIYgKi9cclxuICAgIHB1YmxpYyBjdXJXaW5OdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJTY29yZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VyU2NvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjdXJTY29yZChudW0pIHtcclxuICAgICAgICB0aGlzLl9jdXJTY29yZCA9IG51bTtcclxuICAgICAgICBpZiAodGhpcy5nYW1lTGF5ZXJTY3IpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTGF5ZXJTY3IudXBkYXRlVXNlckNvaW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOW9k+WJjeS4reWlluWFg+e0oOS4i+aghyAqL1xyXG4gICAgY3VyV2luSXRtZUluZGV4OiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICAvKiogZ2FtZUxheWVy6ISa5pysICovXHJcbiAgICBnYW1lTGF5ZXJTY3I6IEdhbWVMYXllciA9IG51bGw7XHJcblxyXG4gICAgLyoq5Yid5aeL5pe26Ze0ICovXHJcbiAgICBzdGFydFRpbWU6IG51bWJlciA9IDMwO1xyXG5cclxuICAgIC8qKuW9k+WJjeaXtumXtCAqL1xyXG4gICAgX2luZGV4VGltZTogbnVtYmVyID0gMzA7XHJcblxyXG4gICAgcHVibGljIGdldCBpbmRleFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4VGltZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGluZGV4VGltZShudW0pIHtcclxuICAgICAgICB0aGlzLl9pbmRleFRpbWUgPSBudW07XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUxheWVyU2NyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxheWVyU2NyLnVwZGF0ZVRpbWVyVWkoKTtcclxuICAgICAgICAgICAgaWYgKG51bSA9PSB0aGlzLnN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgLy8g6YeN5paw6K6+572u5LqL5Lu26YeN572u5a6a5pe25ZmoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVMYXllclNjci51bnNjaGVkdWxlKHRoaXMudGltZXJGdW5jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5a6a5pe25Zmo6L+Q6KGM5pa55rOVICovXHJcbiAgICB0aW1lckZ1bmMgPSBudWxsO1xyXG5cclxuICAgIC8qKuW9k+WJjemAieaLqeeahOaJkeWFi+eJjCAqL1xyXG4gICAgc2VsZWN0UG9ya2VyQXJyYXk6IEFycmF5PG51bWJlcj4gPSBbLTEsIC0xXTtcclxuXHJcbiAgICAvKiog5piv5ZCm5byA5ZCv6Z+z5pWIICovXHJcbiAgICBpc09wZW5FZmZlY3RTb3VuZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqIOaYr+WQpuW8gOWQr+iDjOaZr+mfs+S5kCAqL1xyXG4gICAgaXNPcGVuQmdTb3VuZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhTWFuYWdlci5pbnN0YW5jZTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/JSBNative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84ac7TSWZtLqrKen4Cir7Nk', 'JSBNative');
// script/JSBNative.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("./DataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JSBNative = /** @class */ (function () {
    function JSBNative() {
    }
    JSBNative_1 = JSBNative;
    JSBNative.getInatance = function () {
        if (this._instance == null)
            this._instance = new JSBNative_1();
        return this._instance;
    };
    JSBNative.prototype.ajustStatue = function (_refCount) {
        cc.log('TS Callback:' + _refCount);
        DataManager_1.default.Adjust_status = _refCount;
    };
    var JSBNative_1;
    JSBNative._instance = null;
    /////facebook
    JSBNative.CallBackKey = 'nativeCallback';
    JSBNative._prevErr = '';
    JSBNative._hasInited = false;
    JSBNative.appActiveStatue = false;
    JSBNative = JSBNative_1 = __decorate([
        ccclass
    ], JSBNative);
    return JSBNative;
}());
window['JSBNative'] = JSBNative.getInatance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxKU0JOYXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQW1CQSxDQUFDO2tCQW5CSyxTQUFTO0lBV0cscUJBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFTLEVBQUUsQ0FBQztRQUM3RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNNLCtCQUFXLEdBQWxCLFVBQW1CLFNBQWlCO1FBQ2hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLHFCQUFXLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMxQyxDQUFDOztJQWpCYyxtQkFBUyxHQUFjLElBQUksQ0FBQztJQUMzQyxhQUFhO0lBQ0UscUJBQVcsR0FBVyxnQkFBZ0IsQ0FBQztJQUd2QyxrQkFBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLG9CQUFVLEdBQUcsS0FBSyxDQUFDO0lBRW5CLHlCQUFlLEdBQVksS0FBSyxDQUFDO0lBVDlDLFNBQVM7UUFEZCxPQUFPO09BQ0YsU0FBUyxDQW1CZDtJQUFELGdCQUFDO0NBbkJELEFBbUJDLElBQUE7QUFFRCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuL0RhdGFNYW5hZ2VyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmNsYXNzIEpTQk5hdGl2ZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBKU0JOYXRpdmUgPSBudWxsO1xuICAgIC8vLy8vZmFjZWJvb2tcbiAgICBwcml2YXRlIHN0YXRpYyBDYWxsQmFja0tleTogc3RyaW5nID0gJ25hdGl2ZUNhbGxiYWNrJztcbiAgICBwcml2YXRlIHN0YXRpYyBfY2FsbEJhY2tQcmVmaXg6IHN0cmluZzsgLy/lm57osIPpm4blkIjlrZfnrKbliY3nvIBcblxuICAgIHByaXZhdGUgc3RhdGljIF9wcmV2RXJyID0gJyc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2hhc0luaXRlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXBwQWN0aXZlU3RhdHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluYXRhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkgdGhpcy5faW5zdGFuY2UgPSBuZXcgSlNCTmF0aXZlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG4gICAgcHVibGljIGFqdXN0U3RhdHVlKF9yZWZDb3VudDogc3RyaW5nKSB7XG4gICAgICAgIGNjLmxvZygnVFMgQ2FsbGJhY2s6JyArIF9yZWZDb3VudCk7XG4gICAgICAgIERhdGFNYW5hZ2VyLkFkanVzdF9zdGF0dXMgPSBfcmVmQ291bnQ7XG4gICAgfVxufVxuXG53aW5kb3dbJ0pTQk5hdGl2ZSddID0gSlNCTmF0aXZlLmdldEluYXRhbmNlKCk7XG4iXX0=
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var startGameLayer = /** @class */ (function (_super) {
    __extends(startGameLayer, _super);
    function startGameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkBtn = null;
        _this.page = null;
        _this.audios = [];
        _this.isPolicy = false;
        return _this;
    }
    startGameLayer.prototype.start = function () {
        if (!DataManager_1.default.isOpenBgSound) {
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 0;
        }
    };
    startGameLayer.prototype.onEnable = function () {
        this.autoIntoGame();
    };
    startGameLayer.prototype.autoIntoGame = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.isPolicy = true;
            _this.switchScene();
        }, 5);
    };
    startGameLayer.prototype.playSound = function (index) {
        if (!DataManager_1.default.isOpenEffectSound)
            return;
        this.node.getComponent(cc.AudioSource).clip = this.audios[index];
        this.node.getComponent(cc.AudioSource).play();
    };
    startGameLayer.prototype.onChange = function () {
        this.playSound(0);
        this.isPolicy = !this.isPolicy;
    };
    startGameLayer.prototype.showPage = function () {
        this.playSound(0);
        this.page.active = true;
        this.page.getComponent(cc.Animation).play();
    };
    startGameLayer.prototype.closePage = function () {
        this.playSound(0);
        this.page.active = false;
    };
    startGameLayer.prototype.switchScene = function () {
        var _this = this;
        if (this.isPolicy) {
            cc.director.loadScene('game');
        }
        else {
            this.playSound(1);
            cc.Tween.stopAllByTarget(this.checkBtn);
            this.checkBtn.scale = 1;
            cc.tween(this.checkBtn)
                .by(0.1, { scale: 0.1 })
                .by(0.1, { scale: -0.2 })
                .by(0.1, { scale: 0.1 })
                .call(function () {
                _this.showPage();
            })
                .start();
        }
    };
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "checkBtn", void 0);
    __decorate([
        property(cc.Node)
    ], startGameLayer.prototype, "page", void 0);
    __decorate([
        property({ type: [cc.AudioClip], tooltip: '音效' })
    ], startGameLayer.prototype, "audios", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTdGFydEdhbWVMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFtRUM7UUFqRUcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFlBQU0sR0FBbUIsRUFBRSxDQUFDO1FBRXBCLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBeUR0QyxDQUFDO0lBdkRhLDhCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMscUJBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDNUIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDN0Q7SUFDTCxDQUFDO0lBQ1MsaUNBQVEsR0FBbEI7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNPLHFDQUFZLEdBQXBCO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksQ0FBQyxxQkFBVyxDQUFDLGlCQUFpQjtZQUFFLE9BQU87UUFFM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUFBLGlCQWdCQztRQWZHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNsQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO2lCQUN2QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ3hCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7aUJBQ3ZCLElBQUksQ0FBQztnQkFDRixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQWhFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO2tEQUN0QjtJQVJYLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FtRWxDO0lBQUQscUJBQUM7Q0FuRUQsQUFtRUMsQ0FuRTJDLEVBQUUsQ0FBQyxTQUFTLEdBbUV2RDtrQkFuRW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRHYW1lTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGVja0J0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwYWdlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQXVkaW9DbGlwXSwgdG9vbHRpcDogJ+mfs+aViCcgfSlcclxuICAgIGF1ZGlvczogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGlzUG9saWN5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghRGF0YU1hbmFnZXIuaXNPcGVuQmdTb3VuZCkge1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXV0b0ludG9HYW1lKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGF1dG9JbnRvR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQb2xpY3kgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFNjZW5lKCk7XHJcbiAgICAgICAgfSwgNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVNvdW5kKGluZGV4KSB7XHJcbiAgICAgICAgaWYgKCFEYXRhTWFuYWdlci5pc09wZW5FZmZlY3RTb3VuZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5hdWRpb3NbaW5kZXhdO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnBsYXlTb3VuZCgwKTtcclxuICAgICAgICB0aGlzLmlzUG9saWN5ID0gIXRoaXMuaXNQb2xpY3k7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1BhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5U291bmQoMCk7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYWdlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5U291bmQoMCk7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFNjZW5lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUG9saWN5KSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKDEpO1xyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5jaGVja0J0bik7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tCdG4uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNoZWNrQnRuKVxyXG4gICAgICAgICAgICAgICAgLmJ5KDAuMSwgeyBzY2FsZTogMC4xIH0pXHJcbiAgICAgICAgICAgICAgICAuYnkoMC4xLCB7IHNjYWxlOiAtMC4yIH0pXHJcbiAgICAgICAgICAgICAgICAuYnkoMC4xLCB7IHNjYWxlOiAwLjEgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
    }
    // 获取两个数间的随机值(包括min max)
    util.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFx1dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQU9BLENBQUM7SUFKRyx3QkFBd0I7SUFDakIsd0JBQVMsR0FBaEIsVUFBaUIsR0FBRyxFQUFFLEdBQUc7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUxzQixhQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQU1qRCxXQUFDO0NBUEQsQUFPQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIHV0aWx7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZSA9IG5ldyB1dGlsKCk7XG5cbiAgICAvLyDojrflj5bkuKTkuKrmlbDpl7TnmoTpmo/mnLrlgLwo5YyF5ousbWluIG1heClcbiAgICBwdWJsaWMgZ2V0UmFuZG9tKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHV0aWwuaW5zdGFuY2U7Il19
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
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("./DataManager");
var ItemNode_1 = require("./ItemNode");
var util_1 = require("./util/util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.LLayer = null;
        _this.RLayer = null;
        _this.userCoinNode = null;
        _this.resultNode = null;
        _this.tipNode = null;
        _this.timerNode = null;
        _this.itemPrefab = null;
        _this.audios = [];
        /** 元素宽高 */
        _this.itemSize = cc.size(162, 154);
        /** 元素总量 */
        _this.itemNum = 20;
        /** 元素类别数量 */
        _this.itemTypeNum = 21;
        /** 遮罩长度 */
        _this.maskLength = 0;
        _this.index = 0;
        return _this;
    }
    GameLayer.prototype.start = function () {
        this.maskLength = cc.find('barBg/mask', this.timerNode).width;
        DataManager_1.default.curGameIsRun = false;
        DataManager_1.default.gameLayerScr = this;
        DataManager_1.default.curWinNum = 0;
        this.updateUserCoin();
        this.updateSoundBtnState();
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
    };
    /**
     * 游戏内按钮绑定事件
     */
    GameLayer.prototype.btnEvent = function (event) {
        var name = event.target.name;
        this.playSound(0);
        switch (name) {
            case 'btnStartGame':
                this.playGame();
                break;
            case 'btnReturn':
                cc.director.loadScene('startGame');
                break;
            case 'btNextGame':
            case 'btStartOver':
                this.hideResultNode();
                break;
            case 'btExit':
                cc.director.loadScene('startGame');
                break;
            case 'btnHelp':
                this.tipNode.active = true;
                break;
            case 'btnCloseHelp':
                this.hideTipNode();
            case 'btnBgSound':
                DataManager_1.default.isOpenBgSound = !DataManager_1.default.isOpenBgSound;
                cc.find('Canvas').getComponent(cc.AudioSource).volume = DataManager_1.default.isOpenBgSound ? 1 : 0;
                this.updateSoundBtnState();
                break;
            case 'btnEffectSound':
                DataManager_1.default.isOpenEffectSound = !DataManager_1.default.isOpenEffectSound;
                this.updateSoundBtnState();
                break;
        }
    };
    GameLayer.prototype.playSound = function (index) {
        if (!DataManager_1.default.isOpenEffectSound)
            return;
        this.node.getComponent(cc.AudioSource).clip = this.audios[index];
        this.node.getComponent(cc.AudioSource).play();
    };
    /**
     * 更新音效按钮状态
     */
    GameLayer.prototype.updateSoundBtnState = function () {
        var color1 = cc.color(179, 179, 179, 255);
        var color2 = cc.color(255, 255, 255, 255);
        cc.find('Canvas/gameLayer/topNode/btnBgSound').color = (DataManager_1.default.isOpenBgSound ? color2 : color1).clone();
        cc.find('Canvas/gameLayer/topNode/btnEffectSound').color = (DataManager_1.default.isOpenEffectSound ? color2 : color1).clone();
    };
    /** 开始游戏 */
    GameLayer.prototype.playGame = function () {
        if (DataManager_1.default.curGameIsRun)
            return;
        DataManager_1.default.curGameIsRun = true;
        this.playSound(0);
        this.initItemNode();
        this.startTimer();
    };
    /**
     * 初始化游戏节点
     */
    GameLayer.prototype.initItemNode = function () {
        var _this = this;
        var dataList1 = this.getStartGameData();
        var dataList2 = this.changeGameData(dataList1);
        this.addItemByData(this.LLayer.getChildByName('itemParent'), dataList1);
        this.addItemByData(this.RLayer.getChildByName('itemParent'), dataList2);
        this.RLayer.getChildByName('itemParent').children.forEach(function (node, i) {
            return node.on(cc.Node.EventType.TOUCH_END, function () {
                if (i == DataManager_1.default.curWinItmeIndex) {
                    DataManager_1.default.curScord += 100;
                    _this.playSound(4);
                    cc.tween(node)
                        .to(0.7, { scale: 0.7, opacity: 0 })
                        .call(function () {
                        _this.showResult(true);
                    })
                        .start();
                }
                else {
                    _this.playSound(3);
                    cc.tween(node).to(0.1, { rotation: 10 }).to(0.1, { rotation: -10 }).to(0.1, { rotation: 0 }).start();
                    console.log('选错了');
                }
            });
        });
    };
    /**
     * 根据数据给节点添加元素
     */
    GameLayer.prototype.addItemByData = function (node, data) {
        for (var i = 0; i < data.length; i++) {
            var itemNode = cc.instantiate(this.itemPrefab);
            itemNode.getComponent(ItemNode_1.default).init(data[i].toString(), this.itemSize);
            node.addChild(itemNode);
        }
    };
    /**
     * 获取初始游戏数据
     */
    GameLayer.prototype.getStartGameData = function () {
        var gameData = [];
        for (var i = 0; i < this.itemNum; i++) {
            var itemId = util_1.default.getRandom(1, this.itemTypeNum);
            gameData.push(itemId);
        }
        return gameData;
    };
    /**
     * 根据数据修改一个值并返回
     */
    GameLayer.prototype.changeGameData = function (gameDataList) {
        var _this = this;
        var newDataList = [];
        var changeIndex = util_1.default.getRandom(0, gameDataList.length - 1);
        var curItemId = gameDataList[changeIndex];
        var getId = function () {
            var id = util_1.default.getRandom(1, _this.itemTypeNum);
            if (id == curItemId) {
                id = getId();
            }
            return id;
        };
        var changeId = getId();
        for (var i = 0; i < gameDataList.length; i++) {
            if (i == changeIndex) {
                newDataList.push(changeId);
            }
            else {
                newDataList.push(gameDataList[i]);
            }
        }
        DataManager_1.default.curWinItmeIndex = changeIndex;
        return newDataList;
    };
    /**
     * 重置游戏节点
     */
    GameLayer.prototype.resetGameNode = function () {
        this.LLayer.getChildByName('itemParent').removeAllChildren();
        this.RLayer.getChildByName('itemParent').removeAllChildren();
        DataManager_1.default.curWinItmeIndex = -1;
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
                _this.showResult(false);
            }
        };
        this.schedule(DataManager_1.default.timerFunc, speed);
    };
    /**
     * 更新倒计时
     */
    GameLayer.prototype.updateTimerUi = function () {
        cc.find('barBg/mask', this.timerNode).width = (DataManager_1.default.indexTime / DataManager_1.default.startTime) * this.maskLength;
        this.timerNode.getChildByName('timeText').getComponent(cc.Label).string = '00:' + Math.ceil(DataManager_1.default.indexTime);
    };
    /**
     * 更新余额
     */
    GameLayer.prototype.updateUserCoin = function () {
        var lableNode = this.userCoinNode.getChildByName('coinLable');
        cc.tween(lableNode).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
        lableNode.getComponent(cc.Label).string = '' + DataManager_1.default.curScord;
    };
    /**
     * 展示结果
     */
    GameLayer.prototype.showResult = function (isWin) {
        this.playSound(isWin ? 2 : 1);
        this.unschedule(DataManager_1.default.timerFunc);
        DataManager_1.default.indexTime = DataManager_1.default.startTime;
        this.resetGameNode();
        DataManager_1.default.curWinNum += 100;
        if (isWin) {
            var winNumLable = cc.find('win/winNum', this.resultNode);
            winNumLable.getComponent(cc.Label).string = '' + DataManager_1.default.curWinNum;
        }
        var winNode = this.resultNode.getChildByName('win');
        var loseNode = this.resultNode.getChildByName('lose');
        winNode.active = isWin;
        loseNode.active = !isWin;
        var curAniNode = isWin ? winNode : loseNode;
        this.resultNode.active = true;
        curAniNode.scale = 0.6;
        curAniNode.opacity = 100;
        cc.tween(curAniNode).to(0.3, { scale: 1.1, opacity: 255 }).to(0.3, { scale: 1 }).start();
    };
    /**
     * 关闭结果展示
     */
    GameLayer.prototype.hideResultNode = function () {
        cc.find('barBg/mask', this.timerNode).width = this.maskLength;
        DataManager_1.default.curGameIsRun = false;
        this.resultNode.active = false;
        DataManager_1.default.curWinNum = 0;
    };
    /**
     * 关闭提示展示
     */
    GameLayer.prototype.hideTipNode = function () {
        var _this = this;
        cc.tween(this.tipNode.getChildByName('helpText'))
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.tipNode.active = false;
            _this.tipNode.getChildByName('helpText').scale = 1;
        })
            .start();
    };
    __decorate([
        property({ type: cc.Node, tooltip: '左侧layer' })
    ], GameLayer.prototype, "LLayer", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '右侧layer' })
    ], GameLayer.prototype, "RLayer", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '用户余额节点' })
    ], GameLayer.prototype, "userCoinNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏结果节点' })
    ], GameLayer.prototype, "resultNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏提示节点' })
    ], GameLayer.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '倒计时节点' })
    ], GameLayer.prototype, "timerNode", void 0);
    __decorate([
        property({ type: cc.Prefab, tooltip: '元素预制体' })
    ], GameLayer.prototype, "itemPrefab", void 0);
    __decorate([
        property({ type: [cc.AudioClip], tooltip: '音效' })
    ], GameLayer.prototype, "audios", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHVDQUFrQztBQUVsQyxvQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFzU0M7UUFwU0csWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixZQUFNLEdBQW1CLEVBQUUsQ0FBQztRQUU1QixXQUFXO1FBQ0gsY0FBUSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLFdBQVc7UUFDWCxhQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGFBQWE7UUFDYixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixXQUFXO1FBQ1gsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFaEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFpUTdCLENBQUM7SUEvUEcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM5RCxxQkFBVyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDakMscUJBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLHFCQUFXLENBQUMsU0FBUyxHQUFHLENB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QUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2lEQUNuQjtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7NkNBQ3RCO0lBdkJYLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzUzdCO0lBQUQsZ0JBQUM7Q0F0U0QsQUFzU0MsQ0F0U3NDLEVBQUUsQ0FBQyxTQUFTLEdBc1NsRDtrQkF0U29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmltcG9ydCBJdGVtTm9kZSBmcm9tICcuL0l0ZW1Ob2RlJztcclxuaW1wb3J0IHsgSnNiRnVuVHlwZSB9IGZyb20gJy4vdXRpbC9kZWZpbmUnO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwvdXRpbCc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICflt6bkvqdsYXllcicgfSlcclxuICAgIExMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+WPs+S+p2xheWVyJyB9KVxyXG4gICAgUkxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn55So5oi35L2Z6aKd6IqC54K5JyB9KVxyXG4gICAgdXNlckNvaW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5ri45oiP57uT5p6c6IqC54K5JyB9KVxyXG4gICAgcmVzdWx0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+a4uOaIj+aPkOekuuiKgueCuScgfSlcclxuICAgIHRpcE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6ICflgJLorqHml7boioLngrknIH0pXHJcbiAgICB0aW1lck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlByZWZhYiwgdG9vbHRpcDogJ+WFg+e0oOmihOWItuS9kycgfSlcclxuICAgIGl0ZW1QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkF1ZGlvQ2xpcF0sIHRvb2x0aXA6ICfpn7PmlYgnIH0pXHJcbiAgICBhdWRpb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgLyoqIOWFg+e0oOWuvemrmCAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2l6ZTogY2MuU2l6ZSA9IGNjLnNpemUoMTYyLCAxNTQpO1xyXG5cclxuICAgIC8qKiDlhYPntKDmgLvph48gKi9cclxuICAgIGl0ZW1OdW06IG51bWJlciA9IDIwO1xyXG5cclxuICAgIC8qKiDlhYPntKDnsbvliKvmlbDph48gKi9cclxuICAgIGl0ZW1UeXBlTnVtOiBudW1iZXIgPSAyMTtcclxuXHJcbiAgICAvKiog6YGu572p6ZW/5bqmICovXHJcbiAgICBtYXNrTGVuZ3RoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm1hc2tMZW5ndGggPSBjYy5maW5kKCdiYXJCZy9tYXNrJywgdGhpcy50aW1lck5vZGUpLndpZHRoO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVJc1J1biA9IGZhbHNlO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmdhbWVMYXllclNjciA9IHRoaXM7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyV2luTnVtID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJDb2luKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTb3VuZEJ0blN0YXRlKCk7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5kZXhUaW1lID0gRGF0YU1hbmFnZXIuc3RhcnRUaW1lO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/lhoXmjInpkq7nu5Hlrprkuovku7ZcclxuICAgICAqL1xyXG4gICAgYnRuRXZlbnQoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5U291bmQoMCk7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0blN0YXJ0R2FtZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnRuUmV0dXJuJzpcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc3RhcnRHYW1lJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnROZXh0R2FtZSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0U3RhcnRPdmVyJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdidEV4aXQnOlxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdzdGFydEdhbWUnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdidG5IZWxwJzpcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0bkNsb3NlSGVscCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVUaXBOb2RlKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J0bkJnU291bmQnOlxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaXNPcGVuQmdTb3VuZCA9ICFEYXRhTWFuYWdlci5pc09wZW5CZ1NvdW5kO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSBEYXRhTWFuYWdlci5pc09wZW5CZ1NvdW5kID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNvdW5kQnRuU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdidG5FZmZlY3RTb3VuZCc6XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pc09wZW5FZmZlY3RTb3VuZCA9ICFEYXRhTWFuYWdlci5pc09wZW5FZmZlY3RTb3VuZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU291bmRCdG5TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlTb3VuZChpbmRleCkge1xyXG4gICAgICAgIGlmICghRGF0YU1hbmFnZXIuaXNPcGVuRWZmZWN0U291bmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9zW2luZGV4XTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDpn7PmlYjmjInpkq7nirbmgIFcclxuICAgICAqL1xyXG4gICAgdXBkYXRlU291bmRCdG5TdGF0ZSgpIHtcclxuICAgICAgICBsZXQgY29sb3IxID0gY2MuY29sb3IoMTc5LCAxNzksIDE3OSwgMjU1KTtcclxuICAgICAgICBsZXQgY29sb3IyID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuXHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2dhbWVMYXllci90b3BOb2RlL2J0bkJnU291bmQnKS5jb2xvciA9IChEYXRhTWFuYWdlci5pc09wZW5CZ1NvdW5kID8gY29sb3IyIDogY29sb3IxKS5jbG9uZSgpO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9nYW1lTGF5ZXIvdG9wTm9kZS9idG5FZmZlY3RTb3VuZCcpLmNvbG9yID0gKERhdGFNYW5hZ2VyLmlzT3BlbkVmZmVjdFNvdW5kID8gY29sb3IyIDogY29sb3IxKS5jbG9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlvIDlp4vmuLjmiI8gKi9cclxuICAgIHBsYXlHYW1lKCkge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4pIHJldHVybjtcclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlTb3VuZCgwKTtcclxuICAgICAgICB0aGlzLmluaXRJdGVtTm9kZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5ri45oiP6IqC54K5XHJcbiAgICAgKi9cclxuICAgIGluaXRJdGVtTm9kZSgpIHtcclxuICAgICAgICBsZXQgZGF0YUxpc3QxID0gdGhpcy5nZXRTdGFydEdhbWVEYXRhKCk7XHJcbiAgICAgICAgbGV0IGRhdGFMaXN0MiA9IHRoaXMuY2hhbmdlR2FtZURhdGEoZGF0YUxpc3QxKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRJdGVtQnlEYXRhKHRoaXMuTExheWVyLmdldENoaWxkQnlOYW1lKCdpdGVtUGFyZW50JyksIGRhdGFMaXN0MSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtQnlEYXRhKHRoaXMuUkxheWVyLmdldENoaWxkQnlOYW1lKCdpdGVtUGFyZW50JyksIGRhdGFMaXN0Mik7XHJcblxyXG4gICAgICAgIHRoaXMuUkxheWVyLmdldENoaWxkQnlOYW1lKCdpdGVtUGFyZW50JykuY2hpbGRyZW4uZm9yRWFjaCgobm9kZSwgaSkgPT5cclxuICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IERhdGFNYW5hZ2VyLmN1cldpbkl0bWVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1clNjb3JkICs9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTb3VuZCg0KTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC43LCB7IHNjYWxlOiAwLjcsIG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U291bmQoMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC4xLCB7IHJvdGF0aW9uOiAxMCB9KS50bygwLjEsIHsgcm90YXRpb246IC0xMCB9KS50bygwLjEsIHsgcm90YXRpb246IDAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6YCJ6ZSZ5LqGJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruaVsOaNrue7meiKgueCuea3u+WKoOWFg+e0oFxyXG4gICAgICovXHJcbiAgICBhZGRJdGVtQnlEYXRhKG5vZGUsIGRhdGEpIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgaXRlbU5vZGUuZ2V0Q29tcG9uZW50KEl0ZW1Ob2RlKS5pbml0KGRhdGFbaV0udG9TdHJpbmcoKSwgdGhpcy5pdGVtU2l6ZSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWIneWni+a4uOaIj+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBnZXRTdGFydEdhbWVEYXRhKCkge1xyXG4gICAgICAgIGxldCBnYW1lRGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5pdGVtTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IHV0aWwuZ2V0UmFuZG9tKDEsIHRoaXMuaXRlbVR5cGVOdW0pO1xyXG4gICAgICAgICAgICBnYW1lRGF0YS5wdXNoKGl0ZW1JZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ2FtZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7mlbDmja7kv67mlLnkuIDkuKrlgLzlubbov5Tlm55cclxuICAgICAqL1xyXG4gICAgY2hhbmdlR2FtZURhdGEoZ2FtZURhdGFMaXN0KSB7XHJcbiAgICAgICAgbGV0IG5ld0RhdGFMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGNoYW5nZUluZGV4ID0gdXRpbC5nZXRSYW5kb20oMCwgZ2FtZURhdGFMaXN0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGxldCBjdXJJdGVtSWQgPSBnYW1lRGF0YUxpc3RbY2hhbmdlSW5kZXhdO1xyXG4gICAgICAgIGxldCBnZXRJZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gdXRpbC5nZXRSYW5kb20oMSwgdGhpcy5pdGVtVHlwZU51bSk7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBjdXJJdGVtSWQpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gZ2V0SWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGNoYW5nZUlkID0gZ2V0SWQoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGdhbWVEYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSBjaGFuZ2VJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YUxpc3QucHVzaChjaGFuZ2VJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhTGlzdC5wdXNoKGdhbWVEYXRhTGlzdFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1cldpbkl0bWVJbmRleCA9IGNoYW5nZUluZGV4O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3RGF0YUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43nva7muLjmiI/oioLngrlcclxuICAgICAqL1xyXG4gICAgcmVzZXRHYW1lTm9kZSgpIHtcclxuICAgICAgICB0aGlzLkxMYXllci5nZXRDaGlsZEJ5TmFtZSgnaXRlbVBhcmVudCcpLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5STGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoJ2l0ZW1QYXJlbnQnKS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmN1cldpbkl0bWVJbmRleCA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5YCS6K6h5pe2XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgbGV0IHNwZWVkID0gMC4wMTtcclxuXHJcbiAgICAgICAgRGF0YU1hbmFnZXIudGltZXJGdW5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbmRleFRpbWUgLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbmRleFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShEYXRhTWFuYWdlci50aW1lckZ1bmMsIHNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWAkuiuoeaXtlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVUaW1lclVpKCkge1xyXG4gICAgICAgIGNjLmZpbmQoJ2JhckJnL21hc2snLCB0aGlzLnRpbWVyTm9kZSkud2lkdGggPSAoRGF0YU1hbmFnZXIuaW5kZXhUaW1lIC8gRGF0YU1hbmFnZXIuc3RhcnRUaW1lKSAqIHRoaXMubWFza0xlbmd0aDtcclxuICAgICAgICB0aGlzLnRpbWVyTm9kZS5nZXRDaGlsZEJ5TmFtZSgndGltZVRleHQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICcwMDonICsgTWF0aC5jZWlsKERhdGFNYW5hZ2VyLmluZGV4VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDkvZnpop1cclxuICAgICAqL1xyXG4gICAgdXBkYXRlVXNlckNvaW4oKSB7XHJcbiAgICAgICAgbGV0IGxhYmxlTm9kZSA9IHRoaXMudXNlckNvaW5Ob2RlLmdldENoaWxkQnlOYW1lKCdjb2luTGFibGUnKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4obGFibGVOb2RlKS50bygwLjEsIHsgc2NhbGU6IDEuMSB9KS50bygwLjEsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcclxuICAgICAgICBsYWJsZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnJyArIERhdGFNYW5hZ2VyLmN1clNjb3JkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bGV56S657uT5p6cXHJcbiAgICAgKi9cclxuICAgIHNob3dSZXN1bHQoaXNXaW4pIHtcclxuICAgICAgICB0aGlzLnBsYXlTb3VuZChpc1dpbiA/IDIgOiAxKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUoRGF0YU1hbmFnZXIudGltZXJGdW5jKTtcclxuICAgICAgICBEYXRhTWFuYWdlci5pbmRleFRpbWUgPSBEYXRhTWFuYWdlci5zdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5yZXNldEdhbWVOb2RlKCk7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyV2luTnVtICs9IDEwMDtcclxuICAgICAgICBpZiAoaXNXaW4pIHtcclxuICAgICAgICAgICAgbGV0IHdpbk51bUxhYmxlID0gY2MuZmluZCgnd2luL3dpbk51bScsIHRoaXMucmVzdWx0Tm9kZSk7XHJcblxyXG4gICAgICAgICAgICB3aW5OdW1MYWJsZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICcnICsgRGF0YU1hbmFnZXIuY3VyV2luTnVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdpbk5vZGUgPSB0aGlzLnJlc3VsdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3dpbicpO1xyXG4gICAgICAgIGxldCBsb3NlTm9kZSA9IHRoaXMucmVzdWx0Tm9kZS5nZXRDaGlsZEJ5TmFtZSgnbG9zZScpO1xyXG5cclxuICAgICAgICB3aW5Ob2RlLmFjdGl2ZSA9IGlzV2luO1xyXG4gICAgICAgIGxvc2VOb2RlLmFjdGl2ZSA9ICFpc1dpbjtcclxuICAgICAgICBsZXQgY3VyQW5pTm9kZSA9IGlzV2luID8gd2luTm9kZSA6IGxvc2VOb2RlO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3VsdE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY3VyQW5pTm9kZS5zY2FsZSA9IDAuNjtcclxuICAgICAgICBjdXJBbmlOb2RlLm9wYWNpdHkgPSAxMDA7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGN1ckFuaU5vZGUpLnRvKDAuMywgeyBzY2FsZTogMS4xLCBvcGFjaXR5OiAyNTUgfSkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl63nu5PmnpzlsZXnpLpcclxuICAgICAqL1xyXG4gICAgaGlkZVJlc3VsdE5vZGUoKSB7XHJcbiAgICAgICAgY2MuZmluZCgnYmFyQmcvbWFzaycsIHRoaXMudGltZXJOb2RlKS53aWR0aCA9IHRoaXMubWFza0xlbmd0aDtcclxuICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lSXNSdW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3VsdE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuY3VyV2luTnVtID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXreaPkOekuuWxleekulxyXG4gICAgICovXHJcbiAgICBoaWRlVGlwTm9kZSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hlbHBUZXh0JykpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDAuNSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hlbHBUZXh0Jykuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
