// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartGameLayer extends cc.Component {

    @property(cc.Node)
    BtnDIRECE: cc.Node = null;

    @property(cc.Node)
    BtnEXIT: cc.Node = null;

    @property(cc.Node)
    TERMlayer: cc.Node = null;

    @property(cc.Node)
    Tremsof: cc.Node = null;
    
    private SiPlay:boolean =false;

  
  

    start () {
         this.onGouxuan();
         
    }


    direceGame(){
        if (this.SiPlay)
        {
            cc.director.loadScene("LoadGameQ");
        }else{
                  
                cc.tween(this.TERMlayer)
                .to(0.1,{position:cc.v3(this.TERMlayer.position.x,this.TERMlayer.position.y + 5,0)})
                .to(0.1,{position:cc.v3(this.TERMlayer.position.x,this.TERMlayer.position.y - 5,0)})
                .call (() => {
                    this.TERMlayer.pauseAllActions();
                })
                .start()
         

           
        }

        
    }

    exitgame(){
        cc.director.pause();
        cc.director.end();    
    }
    onChanggx(){
        let circles = this.TERMlayer.getChildByName("circle");
        circles.children[0].active = ! circles.children[0].active
        this.SiPlay = ! this.SiPlay

    }
    onGouxuan(){
        this.TERMlayer.getChildByName("TermsLayer").on(cc.Node.EventType.TOUCH_END,()=>
        
        {
           this.Tremsof.active = true;
           let tremsLA = this.Tremsof.getChildByName("tremsLayer")
           cc.tween(tremsLA)
           .to(0.3,{scale:1})
           .start()
        })
    }
     closeEnd()
     {
       
         let close = this.Tremsof.getChildByName("tremsLayer");
            cc.tween(close)       
            .call (() => {
                this.Tremsof.active = false
            })
            .start()
        
     }

}
