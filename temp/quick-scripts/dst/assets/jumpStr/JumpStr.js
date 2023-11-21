
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