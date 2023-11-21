
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxIYWxsTWFuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDZDQUF3QztBQUN4QyxvQ0FBK0I7QUFFekIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4TkM7UUEzTkcsa0JBQVksR0FBbUIsRUFBRSxDQUFDO1FBR2xDLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFHdkIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUd4QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBR3hCLG1CQUFhLEdBQVksSUFBSSxDQUFBO1FBRzdCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFHdkIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQTs7UUFxTTFCLGlCQUFpQjtJQUNyQixDQUFDO0lBbk1HLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRUQ7O01BRUU7SUFDRiwyQkFBUSxHQUFSLFVBQVMsS0FBZTtRQUNwQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlDLFFBQU8sSUFBSSxFQUFFO1lBQ1QsS0FBSyxjQUFjLENBQUM7WUFDcEIsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDdEMsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ2xCLE1BQU07WUFDVixLQUFLLGFBQWE7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN4QixNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixNQUFNO1lBQ1YsS0FBSyxlQUFlO2dCQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7Z0JBQ3JCLE1BQU07WUFDTixLQUFLLGdCQUFnQjtnQkFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUNyQixNQUFNO1NBQ1Q7SUFDTCxDQUFDO0lBRUQ7O01BRUU7SUFDRiw0QkFBUyxHQUFULFVBQVUsT0FBTztRQUNiLFFBQU8sT0FBTyxFQUFFO1lBQ1osS0FBSyxPQUFPO2dCQUNSLHFCQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixxQkFBVyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE1BQU07WUFDVixLQUFLLE9BQU87Z0JBQ1IscUJBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLHFCQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixxQkFBVyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE1BQU07WUFDVixLQUFLLE9BQU87Z0JBQ1IscUJBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxjQUFjO2dCQUNmLHFCQUFXLENBQUMsWUFBWSxHQUFHLGNBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLHFCQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUUsTUFBTTtTQUNiO1FBQ0QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQVk7SUFDWiw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNqQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQztnQkFDN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQ04sRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsQ0FBQztxQkFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQztxQkFDakIsS0FBSyxFQUFFLENBQUE7WUFDaEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxVQUFVO0lBQ1YsOEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUNuQixLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFQTs7S0FFQztJQUNELDhCQUFXLEdBQVg7UUFBQSxpQkFRQTtRQVBHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQzthQUNyQixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDNUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYTtJQUNiLDZCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7SUFDdkUsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDbEMsQ0FBQztJQUVBLGFBQWE7SUFDYiw0QkFBUyxHQUFUO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7YUFDbkIsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUEsYUFBYTtJQUNiLDZCQUFVLEdBQVY7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0MsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUNuQixLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRTs7R0FFRDtJQUNDLG1DQUFnQixHQUFoQjtRQUNDLElBQUcscUJBQVcsQ0FBQyxlQUFlLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNyRDtRQUNELHFCQUFXLENBQUMsZUFBZSxHQUFHLENBQUMscUJBQVcsQ0FBQyxlQUFlLENBQUM7SUFDL0QsQ0FBQztJQUVELFlBQVk7SUFDWixpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUUsS0FBSyxHQUFJLHFCQUFXLENBQUMsTUFBTSxDQUFBO1FBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFFLEVBQUUsR0FBSSxxQkFBVyxDQUFDLFNBQVMsQ0FBQTtJQUMxRyxDQUFDO0lBQ0QsY0FBYztJQUNkLGdDQUFhLEdBQWI7UUFDSSxJQUFJLEtBQUssR0FBRyxjQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFDLEtBQUs7WUFDeEMsSUFBRyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7YUFDNUU7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxXQUFXO0lBQ1gsb0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxTQUFTLEdBQVUsRUFBRSxDQUFBO1FBQ3pCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsSUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDakIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLHFCQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztnQkFDeEMsU0FBUyxJQUFJLGNBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ3BDO1lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzlELE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFBO1lBQ3hELFNBQVMsR0FBRyxFQUFFLENBQUE7U0FDaEI7SUFDTCxDQUFDO0lBRUQsVUFBVTtJQUNWLDBCQUFPLEdBQVA7SUFFQSxDQUFDO0lBeE5EO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztrREFDZjtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQzs2Q0FDdEI7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUM7OENBQ3JCO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDOzhDQUNuQjtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQzttREFDaEI7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7NkNBQ3JCO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDOytDQUNuQjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQztnREFDbEI7SUF4QlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThONUI7SUFBRCxlQUFDO0NBOU5ELEFBOE5DLENBOU5xQyxFQUFFLENBQUMsU0FBUyxHQThOakQ7a0JBOU5vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHV0aWwgZnJvbSBcIi4vdXRpbC91dGlsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkF1ZGlvQ2xpcF0sdG9vbHRpcDpcIumfs+aViOaVsOe7hFwifSlcbiAgICBhdWRpb1Jlc0xpc3Q6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi5ri45oiP5o+Q56S66aG16Z2iXCJ9KVxuICAgIHRpcE5vZGU6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi6Z+z5pWI5oyJ6ZKu6IqC54K5XCJ9KVxuICAgIHNvdW5kQnRuOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIueUqOaIt+S/oeaBr1wifSlcbiAgICB1c2VySW5mbzogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCJpY29u6IqC54K5XCJ9KVxuICAgIGNvbnRlbnRMYXlvdXQ6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi5o6S6KGM5qac6IqC54K5XCJ9KVxuICAgIHBoYk5vZGU6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi5YWR5o2i5aWW5Yqx5qGGXCJ9KVxuICAgIFByb21vUGFnZTogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLmjpLooYzmppzpobXpnaJcIn0pXG4gICAgY2hhcnRzUGFnZTogY2MuTm9kZSA9IG51bGxcblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnVwYWR0YVVzZXJJbmZvKClcbiAgICAgICAgdGhpcy51cGRhdGVVc2VyTnVtKClcbiAgICAgICAgdGhpcy5saXN0ZUJ0bkFuaSgpXG4gICAgICAgIHRoaXMuY3JlYXRSYW5kVXNlckluZm8oKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+WGheaMiemSrue7keWumuS6i+S7tlxuICAgICovXG4gICAgYnRuRXZlbnQoZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLmF1ZGlvUmVzTGlzdFswXTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICBzd2l0Y2gobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImJ0blN0YXJ0R2FtZVwiOlxuICAgICAgICAgICAgY2FzZSBcImljb24xXCI6XG4gICAgICAgICAgICBjYXNlIFwiaWNvbjJcIjpcbiAgICAgICAgICAgIGNhc2UgXCJpY29uM1wiOlxuICAgICAgICAgICAgY2FzZSBcImljb240XCI6XG4gICAgICAgICAgICBjYXNlIFwiaWNvbjVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJpY29uNlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFja0J0blwiOlxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkpQX3N0YXJ0R2FtZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0aXBCdG5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5UaXBOb2RlKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVRpcEJ0blwiOlxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRpcE5vZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzb3VuZEJ0blwiOlxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk9yQ2xvc2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNoYXJlQnRuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUZuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VQcm9tb0J0blwiOiBcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlUHJvbW8oKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VDaGFydHNCdG5cIjogXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUNoYXJ0KClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+b5YWl5ri45oiPXG4gICAgKi9cbiAgICBzdGFydEdhbWUoYnRuTmFtZSkge1xuICAgICAgICBzd2l0Y2goYnRuTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImljb24xXCI6XG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuY3VyR2FtZVN0YWdlID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpY29uMlwiOlxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVTdGFnZSA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaWNvbjNcIjpcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lU3RhZ2UgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImljb240XCI6XG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuY3VyR2FtZVN0YWdlID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpY29uNVwiOlxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVTdGFnZSA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaWNvbjZcIjpcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5jdXJHYW1lU3RhZ2UgPSA1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ0blN0YXJ0R2FtZVwiOlxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmN1ckdhbWVTdGFnZSA9IHV0aWwuZ2V0UmFuZG9tKDAsIERhdGFNYW5hZ2VyLnN0YWdlUmFua3MubGVuZ3RoLTEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XG4gICAgfVxuXG4gICAgLyoq57uR5a6a5oyJ6ZKu5Yqo55S7ICovXG4gICAgbGlzdGVCdG5BbmkoKXtcbiAgICAgICAgdGhpcy5jb250ZW50TGF5b3V0LmNoaWxkcmVuLmZvckVhY2goZT0+e1xuICAgICAgICAgICAgZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsKCk9PntcbiAgICAgICAgICAgICAgICBjYy50d2VlbihlKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLHtzY2FsZToxLjF9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLHtzY2FsZToxfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoq5omT5byA5o+Q56S6ICovXG4gICAgb3BlblRpcE5vZGUoKXtcbiAgICAgICAgdGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKS5zY2FsZSA9IDAuODtcbiAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGlwTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikpXG4gICAgICAgIC50bygwLjIsIHtzY2FsZTogMX0pXG4gICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgICAvKipcbiAgICAgKiDlhbPpl63mj5DnpLrlsZXnpLpcbiAgICAqL1xuICAgICBoaWRlVGlwTm9kZSgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKSlcbiAgICAgICAgICAgIC50bygwLjIsIHtzY2FsZTogMC41fSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKS5zY2FsZSA9IDE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgLyoq5YWz6Zet5YWR5o2i5aWW5Yqx5qGGICovXG4gICAgY2xvc2VQcm9tbygpe1xuICAgICAgICB0aGlzLlByb21vUGFnZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBsZXQgcnVsZSA9IHRoaXMuUHJvbW9QYWdlLmdldENoaWxkQnlOYW1lKCdydWxlJylcbiAgICAgICAgcnVsZS5nZXRDaGlsZEJ5TmFtZSgnRWRpdEJveCcpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmcgPSAnJ1xuICAgIH1cblxuICAgIGNsb3NlQ2hhcnQoKXtcbiAgICAgICAgdGhpcy5jaGFydHNQYWdlLmFjdGl2ZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgIC8qKuaJk+W8gOWFkeaNouWlluWKseahhiAqL1xuICAgICBvcGVuUHJvbW8oKXtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgIHRoaXMuUHJvbW9QYWdlLmdldENoaWxkQnlOYW1lKFwicnVsZVwiKS5zY2FsZSA9IDEuMjtcbiAgICAgICAgdGhpcy5Qcm9tb1BhZ2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5Qcm9tb1BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJydWxlXCIpKVxuICAgICAgICAudG8oMC4yLCB7c2NhbGU6IDF9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAgLyoq5omT5byA5YWR5o2i5aWW5Yqx5qGGICovXG4gICAgIG9wZW5DaGFydHMoKXtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuYXVkaW9SZXNMaXN0WzBdO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgIHRoaXMuY2hhcnRzUGFnZS5nZXRDaGlsZEJ5TmFtZShcInJ1bGVcIikuc2NhbGUgPSAxLjI7XG4gICAgICAgIHRoaXMuY2hhcnRzUGFnZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXJ0c1BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJydWxlXCIpKVxuICAgICAgICAudG8oMC4yLCB7c2NhbGU6IDF9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAgICAvKipcbiAgICAgKiDlvIDlkK/miJblhbPpl63pn7PmlYhcbiAgICAqL1xuICAgICAgIG9wZW5PckNsb3NlU291bmQoKSB7XG4gICAgICAgIGlmKERhdGFNYW5hZ2VyLmN1clNvdW5kSXNDbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJ0bi5jb2xvciA9IGNjLmNvbG9yKDE3MCwgMTcwLCAxNzAsIDI1NSk7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQnRuLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAxO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMTtcbiAgICAgICAgfVxuICAgICAgICBEYXRhTWFuYWdlci5jdXJTb3VuZElzQ2xvc2UgPSAhRGF0YU1hbmFnZXIuY3VyU291bmRJc0Nsb3NlO1xuICAgIH1cblxuICAgIC8qKuabtOaWsOeUqOaIt+S/oeaBryAqL1xuICAgIHVwYWR0YVVzZXJJbmZvKCl7XG4gICAgICAgIHRoaXMudXNlckluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VySURcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVwiSUQ6XCIgKyAgRGF0YU1hbmFnZXIudXNlcklkXG4gICAgICAgIHRoaXMudXNlckluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJzY29yZUxhYmVybFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XCJcIiArICBEYXRhTWFuYWdlci5jdXJXaW5OdW1cbiAgICB9XG4gICAgLyoq5pu05paw55So5oi35oi/6Ze05Lq65pWwICovXG4gICAgdXBkYXRlVXNlck51bSgpe1xuICAgICAgICBsZXQgYXJyYXkgPSB1dGlsLmdldFJhbmRBcnJheSgxMDAsNTAwMCx0aGlzLmNvbnRlbnRMYXlvdXQuY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICB0aGlzLmNvbnRlbnRMYXlvdXQuY2hpbGRyZW4uZm9yRWFjaCgoZSxpbmRleCkgPT57XG4gICAgICAgICAgICBpZihlLmdldENoaWxkQnlOYW1lKFwibnVtXCIpKSB7XG4gICAgICAgICAgICAgICAgZS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGFycmF5W2luZGV4XSArICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8qKueUqOaIt+aOkuihjOamnCAqL1xuICAgIGNyZWF0UmFuZFVzZXJJbmZvKCl7XG4gICAgICAgIGxldCBuZXdVc2VySWQ6c3RyaW5nID0gJydcbiAgICAgICAgZm9yKGxldCBqPTE7ajw9NTtqKyspe1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxEYXRhTWFuYWdlci51c2VySWQubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgbmV3VXNlcklkICs9IHV0aWwuZ2V0UmFuZG9tKDEsOSlcbiAgICAgICAgICAgfVxuICAgICAgICAgICBsZXQgdXNlcklkID0gdGhpcy5waGJOb2RlLmNoaWxkcmVuW2pdLmdldENoaWxkQnlOYW1lKCd1c2VySUQnKVxuICAgICAgICAgICB1c2VySWQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIklEOlwiICsgbmV3VXNlcklkXG4gICAgICAgICAgIG5ld1VzZXJJZCA9ICcnXG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgLyoq5YiG5Lqr5LqL5Lu2ICovXG4gICAgc2hhcmVGbigpe1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19