// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({tooltip: "需要跳动的字符串"})
    str: String = "";

    @property({type: cc.Float, tooltip: "字符大小"})
    fontSize: number = 0;

    @property({type: cc.Float, tooltip: "单个字符跳动时间"})
    aniTime: number = 0;

    // @property({type: cc.Color, tooltip: "描边颜色"})
    // oulineColor: cc.Color = cc.color(255,255,255);

    @property({type: cc.Float, tooltip: "描边宽度"})
    oulineWidth: number = 1;

    private  isOulin: boolean = true;

    private oulineColor:cc.Color = cc.color(244,165,187);



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let Layout = this.node.addComponent(cc.Layout);

        Layout.type = cc.Layout.Type.HORIZONTAL;
        Layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;

        for(let i: number = 0; i <this.str.length; i++) {
            let str = this.str[i];
            let labelNode = new cc.Node();
            let label = labelNode.addComponent(cc.Label);
            if(this.isOulin){
                let labelOutLine = labelNode.addComponent(cc.LabelOutline);
                labelOutLine.color = this.oulineColor
                labelOutLine.width = this.oulineWidth
            }
            label.lineHeight = this.fontSize;
            label.string = str;
            label.fontSize = this.fontSize;
            this.node.addChild(labelNode);
        }

        this.playStrJump();
        this.schedule(() => {
            this.playStrJump();
        }, this.aniTime*this.str.length / 2 + 0.2);
    }

    playStrJump() {
        let jumpTime = this.aniTime/2;
        let strIndex = 0;
        let jumpStr = (labelNode: cc.Node) => {
            cc.tween(labelNode)
                .sequence(
                    cc.tween().to(jumpTime, {y: this.fontSize/2}),
                    cc.tween().to(jumpTime/4*3, {y: -this.fontSize/3}),
                    cc.tween().to(jumpTime/4, {y: 0})
                )
                // .repeatForever()
                .start();
                

            if(strIndex < this.node.children.length-1) { // 未到最后一个字符
                strIndex++;
                this.scheduleOnce(() => {
                    jumpStr(this.node.children[strIndex]);
                }, jumpTime/2);
            }
        }

        jumpStr(this.node.children[strIndex]);

    }

    // update (dt) {}
}
