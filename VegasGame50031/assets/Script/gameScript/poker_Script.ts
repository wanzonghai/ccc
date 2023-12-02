// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class poker_Script_Class extends cc.Component {//扑克类

    @property("number")//扑克位置 -1 : 发牌员  0 : question  1 : answer
    pokerPosition: number = 0;

    @property("number")//是否选中 -1 : 不可选中 0 : 未选中 1 : 选中
    whetherSelected: number = 0;

    @property("number")//花色 0:红桃 1:黑桃 2:方块 3:梅花
    decor: number = 0;

    @property("number")//点数
    point: number = 0;

    @property(cc.SpriteFrame)//正面
    positive: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)//背面
    back: cc.SpriteFrame = null;



    onLoad() {

    }

    start() {
        this.node.on("touchend", this.onTouchend, this);
    }

    init(decor: number, point: number, positive: cc.SpriteFrame, pokerPosition: number) {
        this.decor = decor;
        this.point = point;
        this.positive = positive;
        this.node.getComponent(cc.Sprite).spriteFrame = this.positive;
        this.pokerPosition = pokerPosition;
        if (this.pokerPosition == 0) {
            this.scheduleOnce(function () {
                this.paly_animation();
            }, 1);
        }
    }

    paly_animation() {
        this.node.getComponent(cc.Animation).play("flip1_Clip");
        this.scheduleOnce(function () {
            this.node.getComponent(cc.Animation).play("flip2_Clip");
        }, 0.1);
    }

    onTouchend() {
        let Camera = cc.find("Canvas/Main Camera");

        if (this.pokerPosition == 1 && this.whetherSelected != 1 && Camera.getComponent("date_Script").balance > 0) {
            this.whetherSelected = 1;
            this.node.color = cc.color(150, 150, 150, 255);
            let value = [this.decor, this.point];
            let question_value0 = [Camera.getComponent("game_Script").question_value[0][0], Camera.getComponent("game_Script").question_value[0][1]];
            let question_value1 = [Camera.getComponent("game_Script").question_value[1][0], Camera.getComponent("game_Script").question_value[1][1]];
            let question_value2 = [Camera.getComponent("game_Script").question_value[2][0], Camera.getComponent("game_Script").question_value[2][1]];
            if (
                (value[0] == question_value0[0] && value[1] == question_value0[1]) ||
                (value[0] == question_value1[0] && value[1] == question_value1[1]) ||
                (value[0] == question_value2[0] && value[1] == question_value2[1])
            ) {
                Camera.getComponent("game_Script").victory_number += 1;
                if (Camera.getComponent("game_Script").victory_number == 3) {

                    console.log(typeof (Camera.getComponent("date_Script").balance));
                    Camera.getComponent("date_Script").balance += 1;
                    Camera.getComponent("date_Script").renew_balance();

                    Camera.getComponent("game_Script").settlement(Camera.getComponent("game_Script").WIN_prefab);
                    Camera.getComponent("game_Script").victory_number = 0;
                }
            } else {
                Camera.getComponent("date_Script").balance -= 1;
                Camera.getComponent("date_Script").renew_balance();
                Camera.getComponent("game_Script").settlement(Camera.getComponent("game_Script").CLOSE_prefab);
            }
        }

    }





    // update (dt) {}

}
