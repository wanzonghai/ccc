
const {ccclass, property} = cc._decorator;
import BlockU0 from "./BlockU0";
import DataQGO from "./DataQGO";
@ccclass
export default class GameELayerO extends cc.Component {
   @property(cc.SpriteFrame)
    HwmgArryO:cc.SpriteFrame[] =[];

   @property(cc.Node)
   GetrootnodeO:cc.Node =null;

   @property(cc.Label)
   MovesFsO:cc.Label =null;

   @property(cc.Label)
   timerFsO:cc.Label =null;

   @property(cc.Node)
   GamejieshuO:cc.Node =null;

   @property(cc.Node)
   GameloseO:cc.Node =null;

   @property(cc.Node)
   PalygamesO:cc.Node =null;

   
   @property(cc.Node)
   blockNodeO: cc.Node = null;
 
   @property(cc.Node)
   MaskNodeO: cc.Node = null;

   @property(cc.Node)
   LoadinPgressO1:cc.Node = null;

   @property(cc.Prefab)
   blockPreabO:cc.Prefab =null;


   GameIsRun: boolean = false;


   private dataindex: number = 160;

    picTexture: any;
    picNodeArr: any ;

    SuiJiHUOWU = [0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1]
 

    start () {
  
     this.playGameO()
        
    };
    
   onLoad(){

        if(DataQGO.isHXhc==true){
            for(let i=0;i<8;i++){  
            // let block=cc.instantiate(this.blockPreabO);
            DataQGO.picNodearrany1 [i].destroy()
         }
        }
        DataQGO.picNodearrany1 = [];
        for(let i=0;i<8;i++){     
                 let block=cc.instantiate(this.blockPreabO);
                 this.blockNodeO.children[i].addChild(block)
                 block.getComponent(BlockU0).init(this.HwmgArryO[this.SuiJiHUOWU[i]]);
                 DataQGO.picNodearrany1 [i]= block; 
                 
        }
        this.ovrerdJC()
  
    }

        
    playGameO(){
        
        this.PalygamesO.on(cc.Node.EventType.TOUCH_END,()=>
        {
            this.PalygamesO.active =false
            if(this.GameIsRun) return;
            let btnanothers = this.PalygamesO;
            cc.tween(btnanothers)
            .to(0.1,{scale:0.8})
            .call (() => {
                this.suijiSblock();
                this.BtnbackO();
                this.schedule(this.LoadingTimer,1);
                this.MaskNodeO.active=false;
                DataQGO.isPlay =true;  
                this.GameIsRun =true;
                
                
            })
            .start()

        })
        

    }


    BtnbackO(){
        this.GetrootnodeO.getChildByName("btnbt_back").on(cc.Node.EventType.TOUCH_END,()=>
        {
         cc.director.loadScene("StartGameO");
        })
    }


    BtnmusicO(){
        this.GetrootnodeO.getChildByName("btnbt_numsic").on(cc.Node.EventType.TOUCH_END,()=>
        {
         
        })
    }
    


    Gamejisuanx(){
        let gamejiesuan = this.GamejieshuO;
        cc.tween(gamejiesuan)
        .to(0.1, {scale: 1.1})    
        .to(0.1, {scale: 1})   
        .call (() => {
            this.GamejieshuO.active = true
        })
        .start()
    
    }
    GameLostX(){
        let gamelost = this.GameloseO;
        cc.tween(gamelost)
        .to(0.1, {scale: 1.1})
        .to(0.1, {scale: 1})        
        .call (() => {
            this.GameloseO.active = true
        })
        .start()

    }
    BTnlostx(){
        this.GameloseO.getChildByName("btlost").on(cc.Node.EventType.TOUCH_END,()=>
        {
            
            let btlost = this.GameloseO.getChildByName("btlost")
            cc.tween(btlost)
            .to(0.1,{scale:0.8})
            .call (() => {
                this.GameloseO.active = false;
                cc.director.loadScene("GameO");
            })
            .start()
        })
    }
    BTnjisuanx(){

        this.GamejieshuO.getChildByName("btnanother").on(cc.Node.EventType.TOUCH_END,()=>
        {
            
            let btnanothers = this.GamejieshuO.getChildByName("btnanother")
            cc.tween(btnanothers)
            .to(0.1,{scale:0.8})
            .call (() => {
                this.GamejieshuO.active = false;
                this.unschedule(this.LoadingTimer)
                cc.director.pause();
                cc.director.end(); 
            })
            .start()
        })

        this.GamejieshuO.getChildByName("btnexit").on(cc.Node.EventType.TOUCH_END,()=>
        {
            
            let btnexit = this.GamejieshuO.getChildByName("btnexit")
            cc.tween(btnexit)
            .to(0.1,{scale:0.8})
            .call (() => {
                this.GamejieshuO.active = false;
                cc.director.loadScene("GameO");
            })
            .start()
        })

        
    }

      suijiSblock(){
        if ( DataQGO.isHC == false){
            DataQGO.icon = 0;
            this.GameLostX();
            this.unschedule(this.LoadingTimer)
            DataQGO.isPlay = false
            DataQGO.isHC =null
        }
         
        
        if (DataQGO.icon >= 20 ){
          
               this.Gamejisuanx()
               this.unschedule(this.LoadingTimer)
               DataQGO.isPlay = false

    
        }
        if(DataQGO.isHC == true){
            DataQGO.icon ++
            this.MovesFsO.string = DataQGO.icon+"";

        }
        
      }

   
      LoadingTimer()
      {
          
            let speedrootW = 1
            this.dataindex--
            this.schedule (() => {
                this.LoadinPgressO1.getComponent(cc.ProgressBar).progress  = this.dataindex /160
                if (this.LoadinPgressO1.getComponent(cc.ProgressBar).progress  >=1 ){   
                    this.LoadinPgressO1.getComponent(cc.ProgressBar).progress  =1
                    this.unscheduleAllCallbacks()
                   this.GameLostX();
                   this.unschedule(this.LoadingTimer)
                }
            },speedrootW)
            if(DataQGO.isHXhc==true){
                  this.SuiJiHUOWU.sort(()=>0.5-Math.random())
                  this.onLoad()
                  DataQGO.isHXhc=false
              
            }
            
      }

    
    ovrerdJC(){
        for(let i=0;i<8;i++){
            if(DataQGO.picNodearrany1 [i].getComponent(cc.Sprite).spriteFrame.name == "2") 
            {
             let k=1;
             console.log("DataQGO.isHXpos",DataQGO.isHXpos)
             DataQGO.isHXpos = k+DataQGO.isHXpos;
            }else{
              console.log("DataQGO.isYXpos",DataQGO.isYXpos)
             DataQGO.isYXpos=DataQGO.isYXpos+1;
            }
     
           }
    }

  
  
}
       






