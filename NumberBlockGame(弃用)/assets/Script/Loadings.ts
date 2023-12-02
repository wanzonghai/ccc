const {ccclass, property} = cc._decorator;

@ccclass
export default class Loadings extends cc.Component {

    @property({tooltip: "跳动的字符串"})
    str: String = "";

    @property({type: cc.Float})
    fontSize: number = 0;

    @property({type: cc.Float})
    aniTime: number = 0;

    @property({type: cc.Float})
    oulineWidth: number = 1;

    private  isOulin: boolean = true;

    private oulineColor:cc.Color = cc.color(255,255,255);



    start () {
        let Layoutq = this.node.addComponent(cc.Layout);
        Layoutq.type = cc.Layout.Type.HORIZONTAL;
        Layoutq.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        for(let i: number = 0; i <this.str.length; i++) {
            let stringx = this.str[i];
            let labelNode = new cc.Node();
            let label = labelNode.addComponent(cc.Label);
            if(this.isOulin){
                let labelOutLine = labelNode.addComponent(cc.LabelOutline);
                labelOutLine.color = this.oulineColor
                labelOutLine.width = this.oulineWidth
            }
            label.lineHeight = this.fontSize;
            label.string = stringx;
            label.fontSize = this.fontSize;
            this.node.addChild(labelNode);
        }

        this.playStrJump();
        this.schedule(() => {
            this.playStrJump();
        }, this.aniTime*this.str.length / 2 + 0.2);
    }

    playStrJump() {
        let jumpTimeq = this.aniTime/2;
        let strIndexq = 0;
        let Loading = (labelNode: cc.Node) => {
            cc.tween(labelNode)
                .sequence(
                    cc.tween().to(jumpTimeq, {y: this.fontSize/2}),
                    cc.tween().to(jumpTimeq/4*3, {y: -this.fontSize/3}),
                    cc.tween().to(jumpTimeq/4, {y: 0})
                )
                .start();
                

            if(strIndexq < this.node.children.length-1) { 
                strIndexq++;
                this.scheduleOnce(() => {
                    Loading(this.node.children[strIndexq]);
                }, jumpTimeq/2);
            }
        }

        Loading(this.node.children[strIndexq]);

    }

    
}