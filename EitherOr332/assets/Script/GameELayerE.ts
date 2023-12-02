// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BlockRoot, {  TCfkId, TCmax } from "./BlockRoot";
const {ccclass, property} = cc._decorator;

@ccclass
export default class GameELayerE extends cc.Component {

   @property(cc.Node)
   Getrootnode:cc.Node =null;

   @property(cc.Node)
   hepLayerROOT:cc.Node =null;

   @property(cc.Node)
   Gamesg:cc.Node =null;

   @property(cc.Label)
   ScoreFs:cc.Label =null;

   @property(cc.Label)
   ScorejiesuanFs:cc.Label =null;

   @property(cc.Node)
   Gamejieshu:cc.Node =null;

   @property(cc.Node)
   Gamelose:cc.Node =null;

   @property(cc.Node)
   Palygamesw:cc.Node =null;

   //方块
   @property({ type: cc.Node, tooltip: "提示方块" })
   blockNode: cc.Node = null;
 
   @property({ type: cc.Node, tooltip: "方块" })
   mainblockNode: cc.Node = null;

   @property({ type: cc.Node, tooltip: "方块" })
   masknodeRoot: cc.Node = null;

   @property(cc.Node)
   LoadinPgressW:cc.Node = null;

   /** 当前是否游戏运行中 */
   GameIsRun: boolean = false;

   private blockary: Array<number> = []; //记录下提示的是哪几个方块

   private dataindex: number = 0;

   private clicknum: number = 0; //当前第几次点击

   private coin: number = 0;

   private indesxde: number = 0;

   @property(BlockRoot) gameBlockROOT:BlockRoot;

   @property(BlockRoot) gameBlockmaxROOT:BlockRoot;

   postionXY={
    Node :0,
    data :null

   }
    Bocks:TCfkId []= [0,1,2,3];
    TCmaxdd:TCmax []= [0,1,2,3];
   xbolcks:Array<number> = []

   
    start () {
        // this.updateCore();
        this.Btnback();
        this.Btnhelp();
        this.playGame();
       
        
    }
    

    Btnback(){
        this.Getrootnode.getChildByName("btnbt_back").on(cc.Node.EventType.TOUCH_END,()=>
        {
         cc.director.loadScene("StartGameE");
        })
    }
    Btnhelp(){
        this.Getrootnode.getChildByName("btnbt_help").on(cc.Node.EventType.TOUCH_END,()=>
        {
            this.hepLayerROOT.active = true;
            let hepLayer = this.hepLayerROOT.getChildByName("tc_help")
            cc.tween(hepLayer)
            .to(0.1,{scale:1})
            .start()
        })
    }
    Btnclose(){

        let closess = this.hepLayerROOT.getChildByName("tc_help");
            cc.tween(closess)       
            .call (() => {
                this.hepLayerROOT.active = false
            })
            .start()
        
    }

    Btnmusic(){
        this.Getrootnode.getChildByName("btnbt_numsic").on(cc.Node.EventType.TOUCH_END,()=>
        {
         
        })
    }


    Gamejisuanx(){
        let gamejiesuan = this.Gamejieshu;
        cc.tween(gamejiesuan)
        .to(0.1, {scale: 1.1})    
        .to(0.1, {scale: 1})   
        .call (() => {
            this.Gamejieshu.active = true
        })
        .start()
        this.ScorejiesuanFs.string = this.coin + "";
    }
    GameLostX(){
        let gamelost = this.Gamelose;
        cc.tween(gamelost)
        .to(0.1, {scale: 1.1})
        .to(0.1, {scale: 1})        
        .call (() => {
            this.Gamelose.active = true
        })
        .start()

    }
    BTnlostx(){
        this.Gamelose.getChildByName("btlost").on(cc.Node.EventType.TOUCH_END,()=>
        {
            
            let btlost = this.Gamelose.getChildByName("btlost")
            cc.tween(btlost)
            .to(0.1,{scale:0.8})
            .call (() => {
                this.Gamelose.active = false;
                cc.director.loadScene("GameE");
            })
            .start()
        })
    }
    BTnjisuanx(){

        this.Gamejieshu.getChildByName("btnanother").on(cc.Node.EventType.TOUCH_END,()=>
        {
            
            let btnanothers = this.Gamejieshu.getChildByName("btnanother")
            cc.tween(btnanothers)
            .to(0.1,{scale:0.8})
            .call (() => {
                this.Gamejieshu.active = false;
                cc.director.loadScene("GameE");
            })
            .start()
        })

        this.Gamejieshu.getChildByName("btnexit").on(cc.Node.EventType.TOUCH_END,()=>
        {
            
            let btnexit = this.Gamejieshu.getChildByName("btnexit")
            cc.tween(btnexit)
            .to(0.1,{scale:0.8})
            .call (() => {
                this.Gamejieshu.active = false;
                cc.director.pause();
                cc.director.end(); 
            })
            .start()
        })

        
    }
    
    playGame(){
        

        this.Palygamesw.on(cc.Node.EventType.TOUCH_END,()=>
        {
            if(this.GameIsRun) return;
            let btnanothers = this.Palygamesw;
            cc.tween(btnanothers)
            .to(0.1,{scale:0.8})
            .call (() => {
                this.showbolck();
                
                this.GameIsRun =true;
                
                
            })
            .start()

        })
        

    }
          //提示方框
  showbolck() {
    this.blockary.length = 0;
    this.masknodeRoot.active = true;
    let count = 15; //多少个方框
    console.log("count",count)
    


    while (this.blockary.length < count) {
      let num = Math.floor(Math.random() * 16) + 1;
      if (this.blockary.indexOf(num) == -1) {
        this.blockary.push(num);
        if (this.blockary.length == count) {
          this.dataindex = 0;
          this.schedule(this.changebbolck,0,count-1,0);
         ;
        }
      }
    }
  }
    //方块函数
    changebbolck() {
      let inde=this.getRandArray(0, 3,15)
      let NumberArray:Array<number> = []
      for (let k=0;k<15;k++){  
     
        const idx = this.Bocks[inde[k]];
        NumberArray.push(idx)
        console.log("id1",idx)
        this.blockNode.children[this.blockary[this.dataindex] - 1].getComponent(cc.Sprite).spriteFrame = this.gameBlockROOT.getBlockSF(idx);   
     
          let maxIndex=NumberArray.sort(() =>0.5 - Math.random());
          console.log("maxIndex",maxIndex)
          const iddd = this.TCmaxdd[maxIndex[k]];
          console.log("id2",iddd)
          this.mainblockNode.children[this.blockary[this.dataindex] - 1].getComponent(cc.Sprite).spriteFrame = this.gameBlockROOT.getBlockmaxSF(iddd);
        }
      
        this.dataindex++;
        this.masknodeRoot.active = false;
        if (this.blockary.length == this.dataindex) {
          this.clicknum = 0;
          this.masknodeRoot.active = false;
          this.LoadingTimer();
          this.suijiSblock();
          this.unschedule(this.changebbolck);
        }
      }
    

      suijiSblock(){
        this.blockNode.resumeAllActions();
 
      
      }
      clickblock(event:cc.Event.EventTouch,data) {

        if (data == this.blockary[this.clicknum]) {
          //答对了
         
          this.clicknum++;
          this.coin = 200 + this.coin;
          this.ScoreFs.string = this.coin + "";
        
          if (this.coin >= 150) {
            this.Gamejisuanx();
          }
            
          //当全部完成之后重新提示
          if (this.clicknum == this.blockary.length) {
            this.blockNode.pauseAllActions();
            this.blockNode.setPosition(-48,400);
            this.restbolck();
          }
       
        }
    }  
   
      //重置方框
      restbolck() {
        let index=this.getRandom(0, 3)
        const id = this.Bocks[index];
        for (let index of this.blockary) {
          this.blockNode.children[index - 1].getComponent(cc.Sprite).spriteFrame = this.gameBlockROOT.getBlockSF(id);
          this.mainblockNode.children[index - 1].getComponent(cc.Sprite).spriteFrame = this.gameBlockROOT.getBlockSF(id);
        }
        
        this.showbolck();
      }
    

   
      LoadingTimer()
      {
          
            let arrayW = [0.007,0.008,0.008,0.009,0.009]
            let speedrootW = 1
            this.schedule (() => {
                this.LoadinPgressW.getComponent(cc.ProgressBar).progress  += arrayW[(arrayW.length - 1)]
                if (this.LoadinPgressW.getComponent(cc.ProgressBar).progress  >=1 ){   
                    this.LoadinPgressW.getComponent(cc.ProgressBar).progress  =1
                    this.unscheduleAllCallbacks()
                   this.GameLostX();
                }
            },speedrootW)
  
         
 
      }


    /** 获取两个数间的随机值(包括min max) */
    public getRandom(min, max) {
        if(min == -1 || max == -1) return;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

     /**随机生成数组 */
     getRandArray(min:number,max:number,length:number):Array<number>{
        let NumberArray:Array<number> = []
        for(let i=0;i<length;i++){
            NumberArray.push(this.getRandom(min,max))
        }
        return NumberArray
    }

  
}
       






