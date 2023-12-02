// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameClass extends cc.Component {//rummy游戏类

    @property("number")
    victory_number: number = 0;

    @property(cc.Prefab)
    poker_prefab: cc.Prefab = null;

    @property(cc.Prefab)
    WIN_prefab: cc.Prefab = null;

    @property(cc.Prefab)
    CLOSE_prefab: cc.Prefab = null;

    //花色 0:红桃 1:黑桃 2:方块 3:梅花
    @property(cc.SpriteFrame)
    poker_hongtao: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    poker_heitao: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    poker_fangkuai: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    poker_meihua: cc.SpriteFrame[] = [];

    @property("[string, number][]")
    surplus_hongtao: [string, number][] = [
        ["红桃1", 1], ["红桃2", 1], ["红桃3", 1], ["红桃4", 1], ["红桃5", 1],
        ["红桃6", 1], ["红桃7", 1], ["红桃8", 1], ["红桃9", 1], ["红桃10", 1],
        ["红桃11", 1], ["红桃12", 1], ["红桃13", 1]
    ];

    @property("[string, number][]")
    surplus_heitao: [string, number][] = [
        ["黑桃1", 1], ["黑桃2", 1], ["黑桃3", 1], ["黑桃4", 1], ["黑桃5", 1],
        ["黑桃6", 1], ["黑桃7", 1], ["黑桃8", 1], ["黑桃9", 1], ["黑桃10", 1],
        ["黑桃11", 1], ["黑桃12", 1], ["黑桃13", 1]
    ];

    @property("[string, number][]")
    surplus_fangkuai: [string, number][] = [
        ["方块1", 1], ["方块2", 1], ["方块3", 1], ["方块4", 1], ["方块5", 1],
        ["方块6", 1], ["方块7", 1], ["方块8", 1], ["方块9", 1], ["方块10", 1],
        ["方块11", 1], ["方块12", 1], ["方块13", 1]
    ];

    @property("[string, number][]")
    surplus_meihua: [string, number][] = [
        ["梅花1", 1], ["梅花2", 1], ["梅花3", 1], ["梅花4", 1], ["梅花5", 1],
        ["梅花6", 1], ["梅花7", 1], ["梅花8", 1], ["梅花9", 1], ["梅花10", 1],
        ["梅花11", 1], ["梅花12", 1], ["梅花13", 1]
    ];

    @property("[number, number][]")
    question_value: [number, number][] = [
        [-1, -1], [-1, -1], [-1, -1]
    ];

    @property("number")
    question_value_position: number[] = [];



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.start_question();
    }

    start_question() {
        for (let i = 0; i < 3; i++) {
            let decor = Math.floor(Math.random() * 4);
            let point = Math.floor(Math.random() * 13);
            let pokerPrefab: cc.Node = cc.instantiate(this.poker_prefab);//挂载预制体
            switch (decor) {
                case 0:
                    while (this.surplus_hongtao[point][1] == 0) {
                        point = Math.floor(Math.random() * 13);
                    }
                    this.surplus_hongtao[point][1]--;
                    pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_hongtao[point], 0);
                    break;
                case 1:
                    while (this.surplus_heitao[point][1] == 0) {
                        point = Math.floor(Math.random() * 13);
                    }
                    this.surplus_heitao[point][1]--;
                    pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_heitao[point], 0);
                    break;
                case 2:
                    while (this.surplus_fangkuai[point][1] == 0) {
                        point = Math.floor(Math.random() * 13);
                    }
                    this.surplus_fangkuai[point][1]--;
                    pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_fangkuai[point], 0);
                    break;
                case 3:
                    while (this.surplus_meihua[point][1] == 0) {
                        point = Math.floor(Math.random() * 13);
                    }
                    this.surplus_meihua[point][1]--;
                    pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_meihua[point], 0);
                    break;
                default:
                    break;
            }

            this.question_value[i] = [decor, point];

            pokerPrefab.parent = cc.find("Canvas/poker/question/seat" + i);//设置父节点
            pokerPrefab.setPosition(cc.v2(0, 0));//设置初始位置
        }

        while (this.question_value_position.length < 3) {
            const num = Math.floor(Math.random() * 5);
            if (this.question_value_position.indexOf(num) === -1) {
                this.question_value_position.push(num);
            }
        }

        this.scheduleOnce(function () {
            this.start_answer();
        }, 2)

    }

    start_answer() {
        console.log(this.question_value_position);

        for (let i = 0; i < 5; i++) {

            let decor = Math.floor(Math.random() * 4);
            let point = Math.floor(Math.random() * 13);

            let pokerPrefab: cc.Node = cc.instantiate(this.poker_prefab);//挂载预制体



            if (i == this.question_value_position[0]) {
                decor = this.question_value[0][0];
                point = this.question_value[0][1];
                switch (decor) {
                    case 0:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_hongtao[point], 1);
                        break;
                    case 1:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_heitao[point], 1);
                        break;
                    case 2:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_fangkuai[point], 1);
                        break;
                    case 3:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_meihua[point], 1);
                        break;
                    default:
                        break;
                }
            } else if (i == this.question_value_position[1]) {
                decor = this.question_value[1][0];
                point = this.question_value[1][1];
                switch (decor) {
                    case 0:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_hongtao[point], 1);
                        break;
                    case 1:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_heitao[point], 1);
                        break;
                    case 2:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_fangkuai[point], 1);
                        break;
                    case 3:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_meihua[point], 1);
                        break;
                    default:
                        break;
                }
            } else if (i == this.question_value_position[2]) {
                decor = this.question_value[2][0];
                point = this.question_value[2][1];
                switch (decor) {
                    case 0:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_hongtao[point], 1);
                        break;
                    case 1:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_heitao[point], 1);
                        break;
                    case 2:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_fangkuai[point], 1);
                        break;
                    case 3:
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_meihua[point], 1);
                        break;
                    default:
                        break;
                }
            } else {
                switch (decor) {
                    case 0:
                        while (this.surplus_hongtao[point][1] == 0) {
                            point = Math.floor(Math.random() * 13);
                        }
                        this.surplus_hongtao[point][1]--;
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_hongtao[point], 1);
                        break;
                    case 1:
                        while (this.surplus_heitao[point][1] == 0) {
                            point = Math.floor(Math.random() * 13);
                        }
                        this.surplus_heitao[point][1]--;
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_heitao[point], 1);
                        break;
                    case 2:
                        while (this.surplus_fangkuai[point][1] == 0) {
                            point = Math.floor(Math.random() * 13);
                        }
                        this.surplus_fangkuai[point][1]--;
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_fangkuai[point], 1);
                        break;
                    case 3:
                        while (this.surplus_meihua[point][1] == 0) {
                            point = Math.floor(Math.random() * 13);
                        }
                        this.surplus_meihua[point][1]--;
                        pokerPrefab.getComponent("poker_Script").init(decor, point, this.poker_meihua[point], 1);
                        break;
                    default:
                        break;
                }
            }

            pokerPrefab.parent = cc.find("Canvas/poker/answer/seat" + i);//设置父节点
            pokerPrefab.setPosition(cc.v2(0, 0));//设置初始位置
        }
    }

    settlement(P: cc.Prefab) {
        let prefab: cc.Node = cc.instantiate(P);//挂载预制体
        prefab.parent = cc.find("Canvas");//设置父节点
        prefab.setPosition(cc.v2(0, 0));//设置初始位置
    }


    // update (dt) {}
}
