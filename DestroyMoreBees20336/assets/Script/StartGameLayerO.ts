
const {ccclass, property} = cc._decorator;

@ccclass
export default class StartGameLayerO extends cc.Component {


    @property(cc.Node)
    TERMlayerO: cc.Node = null;

    @property(cc.Node)
    TremsofO: cc.Node = null;

    @property(cc.Node)
    HelptbnO: cc.Node = null;
    
    private isPlay:boolean =false;


    start () {
         this.onJSO();  
    }


    direceGameO(){
        if (this.isPlay)
        {
            cc.director.loadScene("LoadGameO");
        }else{
               
                cc.tween(this.TERMlayerO)
                .to(0.1,{position:cc.v3(this.TERMlayerO.position.x+5,this.TERMlayerO.position.y ,0)})
                .delay(0.1)
                .to(0.1,{position:cc.v3(this.TERMlayerO.position.x-5,this.TERMlayerO.position.y ,0)})           
                .call (() => {
                   this.TERMlayerO.pauseAllActions();
                
                })
                .start()
                
        }
           
        
    }

    exitgameO(){
        cc.director.pause();
        cc.director.end();    
    }
    onGXO(){
        let circlesW = this.TERMlayerO.getChildByName("circle");
        circlesW.children[0].active = ! circlesW.children[0].active
        this.isPlay = ! this.isPlay

    }
    onJSO(){
        this.TERMlayerO.getChildByName("Scver").on(cc.Node.EventType.TOUCH_END,()=>
        
        {
           this.TremsofO.active = true;
           let tremsW = this.TremsofO.getChildByName("scriceLayer")
           cc.tween(tremsW)
           .to(0.3,{scale:1})
           .start()
        })
    }
     closeEndO()
     {
       
        this.TremsofO.active = false

     }

     BtnhelpO(){
    
            this.HelptbnO.active = true;
            let hepLayer = this.HelptbnO.getChildByName("tc_help")
            cc.tween(hepLayer)
            .to(0.1,{scale:1})
            .start()
        
    }
    closeHlepO()
    {
        this.HelptbnO.active = false

    }

}
