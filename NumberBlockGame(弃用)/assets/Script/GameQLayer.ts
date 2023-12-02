// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
import shuiguoManger from "./shuiguoManger";
import prormshuiguo from "./prormshuiguo";
// import Gamecradx from "./Gamecradx";
import GamesgRoot, { TCshuiId } from "./GamesgRoot";
const {ccclass, property} = cc._decorator;

@ccclass
export default class GameQLayer extends cc.Component {

   @property(cc.Node)
   Getrootnode:cc.Node =null;

   @property(cc.Node)
   hepLayerROOT:cc.Node =null;

   @property(cc.Node)
   Gamesg:cc.Node =null;

   @property(cc.Node)
   GameLaysg:cc.Node =null;

   @property(cc.Node)
   ScoreFs:cc.Node =null;

   @property(cc.Node)
   Gamejieshu:cc.Node =null;

   @property(cc.Node)
   Gamelose:cc.Node =null;



  @property(GamesgRoot) gamesgROOT:GamesgRoot;

   @property(cc.Node)
   pointROOT:cc.Node =null;

   public scoregd:number = 0;
    
   gameLayerScr: GameQLayer = null;
   /** 当前是否游戏运行中 */
   GameIsRun: boolean = false;

   /*预制体*/
   public iconSG:cc.Prefab = null

       /**当前的分数 */
    public _curScoresg:number = 0;

        /**玩家数组 */
    cpuArray:Array<cc.Node> = []

    list: Array<number> = [];

    cards:TCshuiId []= [1,2,3,4,1,2,3,1,4,2,2,1,3,1,1,2,3,2,1,4,4,1,2,
        4,4,1,2,3,1,1,4,0,4,0,1,2,3,4,3,0,0,1,2,3,4,1,2,
        3,1,4,2,2,1,3,1,1,2,3,2,1,4,4,1,2,4,4,1,2,3,1,
        1,4,0,4,0,1,2,3,4,3,0,0,1,1,4,0,4
        ,0,1,2,3,4,3,0,0,4,3,0,4,3];
    currentOpenshuiguo ={
        node:null,
        data:-1,
    }

    start () {
        this.updateCore();
        this.Btnback();
        this.Btnhelp();
        this.playGame();
        
    }

    Btnback(){
        this.Getrootnode.getChildByName("btnbt_back").on(cc.Node.EventType.TOUCH_END,()=>
        {
         cc.director.loadScene("StartGameQ");
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
    Btnvoice(){
        this.Getrootnode.getChildByName("btnbt_voice").on(cc.Node.EventType.TOUCH_END,()=>
        {
         
        })
    }
    public get curScord() {
        return this._curScoresg;
    }

    public set curScord(num) {
       this._curScoresg = num;
        this.updateCore();
       
    }
    updateCore(){
        let scoreroot = this.ScoreFs.getChildByName("gold");
        cc.tween(scoreroot)
        .to(0.1, {scale: 1.1})
        .to(0.1, {scale: 1})
        .start();
        scoreroot.getComponent(cc.Label).string = "" + this._curScoresg;
        console.log("this.curScord",this.curScord)
        if (this._curScoresg >= 1000){
        this.Gamejisuanx();
        }
        
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
                cc.director.loadScene("GameQ");
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
                cc.director.loadScene("GameQ");
            })
            .start()
        })
        this.Gamejieshu.getChildByName("btnscore").on(cc.Node.EventType.TOUCH_END,()=>
        {
            
            let btnscore = this.Gamejieshu.getChildByName("btnscore")
            cc.tween(btnscore)
            .to(0.1,{scale:0.8})
            .call (() => {
                this.Gamejieshu.active = false;
                cc.director.loadScene("StartGameQ");
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
        cc.director.getCollisionManager().enabled = true;

        this.carrdAllCards();
        this.createAllcard();
        this.addShuiGuoEvent();
        

    }
   
    carrdAllCards(){
      this.cards.sort(() => 0.5 - Math.random());
      this.cards.sort(() => 0.5 - Math.random());
      this.cards.sort(() => 0.5 - Math.random());
    }
    createAllcard(){
        console.log("paizhi",this.cards)
        for (let index=0;index<100;index++){ 
            this.cards.forEach((cardid ,index)=>{
            this.shuguoRoot(cardid,index);
        });}
       

    }
    addShuiGuoEvent()
    {
        this.pointROOT.children.forEach((node,index) =>
        {
            
            let labeNode = this.pointROOT.children[index]
            labeNode.on(cc.Node.EventType.TOUCH_END,()=>{
                const id =this.cards[index];
                console.log("this.pointROOT.children[id]",this.pointROOT.children[id])
               //点击水果
               console.log("this.labeNode",labeNode)
            if(!this.currentOpenshuiguo.node)
            {
                const id =this.cards[index];
                cc.tween(labeNode)
                .to(0.1,{scale:1.1})
                .to(0.1,{scale:1})
                .call(() => {
                   const sprite = this.pointROOT.children[index].getComponent(cc.Sprite)
                   sprite.spriteFrame = this.gamesgROOT.getCardSF(id);    
                   
                })
                .to(0.5,{scale:1.1})
                .start();
                this.currentOpenshuiguo.node = node;
                this.currentOpenshuiguo.data = id;
                console.log("当前点击节点", this.currentOpenshuiguo)
 
            }else{
                const id =this.cards[index];
                if(this.currentOpenshuiguo.data === id || this.currentOpenshuiguo.node ==node ){
                 console.log("对比成功")
                 cc.tween(labeNode)
                .to(0.1,{scale:1.1})
                .call(() => {
                   const sprite = this.pointROOT.children[index].getComponent(cc.Sprite)
                   sprite.spriteFrame = this.gamesgROOT.getCardSF(id);    
                   
                })
                .call(() => {
                    this.currentOpenshuiguo.node.active =false;
                    this.currentOpenshuiguo.node =null;
                    node.active =false;
                   
                })
                .start();
                this.updateCore();
                this._curScoresg += 50;
                }else{
                    this.GameLostX();
                }


            }
        
            })
            
        }


        )
    }

   shuguoRoot(id,index){
        const sf = this.gamesgROOT.getCardSF(id);
        this.pointROOT.children[index].getComponent(cc.Sprite).spriteFrame = sf;
        
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
        /**
     * 深拷贝
    */
        copyObj = (obj = {}) => {            //变量先置空
            let newobj = null;  
    
            //判断是否需要继续进行递归
            if (typeof (obj) == 'object' && obj !== null) {
                newobj = obj instanceof Array ? [] : {};                //进行下一层递归克隆
                for (var i in obj) {
                    newobj[i] = this.copyObj(obj[i])
                }                //如果不是对象直接赋值
            } else{
                newobj = obj
            };            
            return newobj;    
        }
    
        /**
         * 随机获取数组中指定数量元素
         * @param list 提供数据的数组
         * @param itemNum 获取元素数量(当需要元素不重复时此值大于数组长度会打乱返回整个数组)
         * @param isRepetition 返回元素是否允许重复
        */
        public getRandomListItme(list: Array<any>, itemNum: number, isRepetition: boolean = false) {
            let copyList = this.copyObj(list);
            let randomList = [];
    
            list.splice
    
            if(isRepetition) {
                for(let i: number = 0; i < itemNum; i++) {
                    randomList.push(copyList[this.getRandom(0, copyList.length-1)])
                }
            } else {
                let getItem = () => {
                    if(copyList.length == 0) {
                        return;
                    }
                    let item = copyList.splice(this.getRandom(0, copyList.length-1), 1)[0];
    
                    randomList.push(item);
                    if(--itemNum > 0) {
                        getItem();
                    }
                }
    
                getItem();
            }
    
            return randomList;
        }
}

