"use strict";
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
        // update(dt) {
        // }
    }
    NewClass.prototype.start = function () {
        this.upadtaUserInfo();
        this.updateUserNum();
        this.listeBtnAni();
        this.creatRandUserInfo();
    };
    NewClass.prototype.onEnable = function () {
        var _this = this;
        DataManager_1.default.adGoogleInterstitialAdHandle();
        this.scheduleOnce(function () {
            _this.schedule(function () {
                if (!DataManager_1.default.IsCheckAdjust_status)
                    return;
                if (DataManager_1.default.Adjust_status !== '' && DataManager_1.default.Adjust_status.toLowerCase() !== 'organic') {
                    // 字符串不为空且不为 "organic" 或 "Organic"，执行你的操作
                    DataManager_1.default.adAnalyseAjustHandle();
                    DataManager_1.default.IsCheckAdjust_status = false;
                    _this.unscheduleAllCallbacks();
                }
            }, 1.5);
        }, 3);
    };
    /**
     * 游戏内按钮绑定事件
     */
    NewClass.prototype.btnEvent = function (event) {
        var name = event.target.name;
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        switch (name) {
            case 'btnStartGame':
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene('game');
                break;
            case 'icon1':
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene('game');
                break;
            case 'backBtn':
                this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
                this.node.getComponent(cc.AudioSource).play();
                cc.director.loadScene('a_startGame');
                break;
            case 'tipBtn':
                this.openTipNode();
                break;
            case 'closeTipBtn':
                this.hideTipNode();
                break;
            case 'soundBtn':
                this.openOrCloseSound();
                break;
            case 'shareBtn':
                this.shareFn();
                break;
            case 'adBtn':
                DataManager_1.default.adGoogleRewardedVideoAdHandle();
                break;
            case 'closePromoBtn':
                this.closePromo();
                break;
            case 'closeChartsBtn':
                this.closeChart();
                break;
        }
    };
    /**绑定按钮动画 */
    NewClass.prototype.listeBtnAni = function () {
        this.contentLayout.children.forEach(function (e) {
            e.on(cc.Node.EventType.TOUCH_END, function () {
                cc.tween(e).to(0.2, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
            });
        });
    };
    /**打开提示 */
    NewClass.prototype.openTipNode = function () {
        this.tipNode.getChildByName('rule').scale = 0.8;
        this.tipNode.active = true;
        cc.tween(this.tipNode.getChildByName('rule')).to(0.2, { scale: 1 }).start();
    };
    /**
     * 关闭提示展示
     */
    NewClass.prototype.hideTipNode = function () {
        var _this = this;
        cc.tween(this.tipNode.getChildByName('rule'))
            .to(0.2, { scale: 0.5 })
            .call(function () {
            _this.tipNode.active = false;
            _this.tipNode.getChildByName('rule').scale = 1;
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
        this.PromoPage.getChildByName('rule').scale = 1.2;
        this.PromoPage.active = true;
        cc.tween(this.PromoPage.getChildByName('rule')).to(0.2, { scale: 1 }).start();
    };
    /**打开兑换奖励框 */
    NewClass.prototype.openCharts = function () {
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
        this.chartsPage.getChildByName('rule').scale = 1.2;
        this.chartsPage.active = true;
        cc.tween(this.chartsPage.getChildByName('rule')).to(0.2, { scale: 1 }).start();
    };
    /**
     * 开启或关闭音效
     */
    NewClass.prototype.openOrCloseSound = function () {
        if (DataManager_1.default.curSoundIsClose) {
            this.soundBtn.children[0].color = cc.color(170, 170, 170, 255);
            this.soundBtn.children[1].active = true;
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.soundBtn.children[0].color = cc.color(255, 255, 255, 255);
            this.soundBtn.children[1].active = false;
            cc.find('Canvas').getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }
        DataManager_1.default.curSoundIsClose = !DataManager_1.default.curSoundIsClose;
    };
    /**更新用户信息 */
    NewClass.prototype.upadtaUserInfo = function () {
        this.userInfo.getChildByName('userID').getComponent(cc.Label).string = 'ID:' + DataManager_1.default.userId;
        this.userInfo.getChildByName('scoreLaberl').getComponent(cc.Label).string = '' + DataManager_1.default.curWinNum;
    };
    /**更新用户房间人数 */
    NewClass.prototype.updateUserNum = function () {
        var array = util_1.default.getRandArray(100, 5000, this.contentLayout.children.length);
        this.contentLayout.children.forEach(function (e, index) {
            var node_num = e.getChildByName('num');
            var label_num = node_num === null || node_num === void 0 ? void 0 : node_num.getComponent(cc.Label);
            if (!label_num)
                return;
            label_num.string = array[index] + '';
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
            userId.getComponent(cc.Label).string = 'ID:' + newUserId;
            newUserId = '';
        }
    };
    /**分享事件 */
    NewClass.prototype.shareFn = function () { };
    __decorate([
        property({ type: [cc.AudioClip], tooltip: '音效数组' })
    ], NewClass.prototype, "audioResList", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '游戏提示页面' })
    ], NewClass.prototype, "tipNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '音效按钮节点' })
    ], NewClass.prototype, "soundBtn", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '用户信息' })
    ], NewClass.prototype, "userInfo", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: 'icon节点' })
    ], NewClass.prototype, "contentLayout", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '排行榜节点' })
    ], NewClass.prototype, "phbNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '兑换奖励框' })
    ], NewClass.prototype, "PromoPage", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '排行榜页面' })
    ], NewClass.prototype, "chartsPage", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();