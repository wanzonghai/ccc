

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartGameLayerE extends cc.Component {



    @property(cc.Node)
    TERMlayerW: cc.Node = null;

    @property(cc.Node)
    TremsofW: cc.Node = null;
    
    private isPlay:boolean =false;


    start () {
         this.onGouxuanW();
         
    }


    direceGameW(){
        if (this.isPlay)
        {
            cc.director.loadScene("LoadGameE");
        }else{
               
                cc.tween(this.TERMlayerW)
                .to(0.1,{position:cc.v3(this.TERMlayerW.position.x+5,this.TERMlayerW.position.y ,0)})
                .delay(0.1)
                .to(0.1,{position:cc.v3(this.TERMlayerW.position.x-5,this.TERMlayerW.position.y ,0)})           
                .call (() => {
                   this.TERMlayerW.pauseAllActions();
                   this.TERMlayerW.resumeAllActions();
                
                })
                .start()
                
        }
           
        
    }

    exitgameW(){
        cc.director.pause();
        cc.director.end();    
    }
    onChanggxW(){
        let circlesW = this.TERMlayerW.getChildByName("circle");
        circlesW.children[0].active = ! circlesW.children[0].active
        this.isPlay = ! this.isPlay

    }
    onGouxuanW(){
        this.TERMlayerW.getChildByName("Scver").on(cc.Node.EventType.TOUCH_END,()=>
        
        {
           this.TremsofW.active = true;
           let tremsW = this.TremsofW.getChildByName("Scver")
           cc.tween(tremsW)
           .to(0.3,{scale:1})
           .start()
        })
    }
     closeEndW()
     {
       
         let closeW = this.TremsofW.getChildByName("scriceLayer");
            cc.tween(closeW)       
            .call (() => {
                this.TremsofW.active = false
            })
            .start()
        
     }

}
