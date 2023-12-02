const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingsE extends cc.Component {

    @property({tooltip: "跳动的字符串"})
    strW: String = "";

    @property({type: cc.Float})
    fontSizeW: number = 0;

    @property({type: cc.Float})
    aniTimeW: number = 0;

    @property({type: cc.Float})
    oulineWidthW: number = 1;

    private  isOulinW: boolean = true;

    private oulineColorW:cc.Color = cc.color(255,255,255);



    start () {
        let Layoutq = this.node.addComponent(cc.Layout);
        Layoutq.type = cc.Layout.Type.HORIZONTAL;
        Layoutq.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        for(let i: number = 0; i <this.strW.length; i++) {
            let stringx = this.strW[i];
            let labelNode = new cc.Node();
            let label = labelNode.addComponent(cc.Label);
            if(this.isOulinW){
                let labelOutLine = labelNode.addComponent(cc.LabelOutline);
                labelOutLine.color = this.oulineColorW
                labelOutLine.width = this.oulineWidthW
            }
            label.lineHeight = this.fontSizeW;
            label.string = stringx;
            label.fontSize = this.fontSizeW;
            this.node.addChild(labelNode);
        }

        this.playStrJump();
        this.schedule(() => {
            this.playStrJump();
        }, this.aniTimeW*this.strW.length / 2 + 0.1);
    }

    playStrJump() {
        let jumpTimeq = this.aniTimeW/2;
        let strIndexq = 0;
        let Loading = (labelNode: cc.Node) => {
            cc.tween(labelNode)
                .sequence(
                    cc.tween().to(jumpTimeq, {y: this.fontSizeW/2}),
                    cc.tween().to(jumpTimeq/4*3, {y: -this.fontSizeW/3}),
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
    protected d
    
}