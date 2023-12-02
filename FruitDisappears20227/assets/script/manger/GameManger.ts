
import { _decorator, Component, instantiate, Label, Layout, log, Node, Prefab, resources, Sprite, SpriteFrame, tween, v3, Vec3, Size, size, ProgressBar, director, view, UITransform, find } from 'cc';
import GameData from '../data/GameData';
import { GameStatus } from '../util/define';
import { pokerContrl } from '../control/pokerContrl';
const { ccclass, property } = _decorator;

@ccclass('GameManger')
export class GameManger extends Component {
    
    // [2]
    @property(Node)
    timerBar:Node = null

    @property(Node)
    helpNode:Node = null

    @property(Node)
    goldNum:Node = null

    @property(Node)
    gameLayout:Node = null

    @property(Node)
    effect:Node = null

    @property([SpriteFrame])
    win:SpriteFrame[] = []

    /** 元素宽高 */
    private itemSize: Size = size(155, 155);

    /** 元素总量 */
    pokerNum: number = 36;

    /** 元素类别数量 */
    itemTypeNum: number = 4;

    // serializableDummy = 0;

    public Porker:Prefab = null

    public index:number = 0

    onLoad(): void {
        resources.load("prefab/poker",Prefab,(err,PF) =>{
            if(err){
                console.log("加载预制体失败");
            }
            this.Porker = PF
        })

        // this.scheduleOnce(() => {
            let winHeight = view.getVisibleSize().height;
            let gamelayerHeight = this.gameLayout.getComponent(UITransform).height;
            let playBtn = this.node.getChildByName("buttom");
            let timerNode = find("timer", this.node);
            let topLacuna = winHeight/2 - gamelayerHeight/2 - timerNode.getComponent(UITransform).height;
            let bottomLacuna = winHeight/2 - gamelayerHeight/2 - playBtn.getComponent(UITransform).height;
    
            playBtn.position = v3(playBtn.position.x, - bottomLacuna / 2 - gamelayerHeight/2 - playBtn.getComponent(UITransform).height/2);
            timerNode.position = v3(timerNode.position.x, topLacuna/2 + gamelayerHeight/2 + timerNode.getComponent(UITransform).height/2);
        // },0.1);
    }

    start () {
        this.renewScoce()
        this.renewTimer()
    }

    /**
     * 返回开始界面
    */
    returnStartGame() {
        this.initGame()
        director.loadScene("startGame");
    }


    /**刷新游戏得分 */
    renewScoce(){
        tween(this.goldNum)
            .call(()=>{
                this.goldNum.getComponent(Label).string = GameData.winScord + ""
            })
            .to(0.1,{scale:new Vec3(1.1, 1.1, 1)})
            .to(0.1,{scale:new Vec3(1, 1, 1)})
            .start()
        
    }

    /**开始定时器 */
    playTimer(){
        this.schedule(()=>{
            GameData.indexTime -= 1
            this.renewTimer()
            if(GameData.indexTime <=0){
                //游戏结束
                this.showRes(false)
            }
        },1)
    }

    /**重置定时器 */
    clearTimer(){
        this.unscheduleAllCallbacks()
        GameData.indexTime = GameData.startTime
        this.renewTimer()
    }

    /**更新timer */
    renewTimer(){
        this.timerBar.getChildByName("Bar").getComponent(Sprite).fillRange = GameData.indexTime / GameData.startTime;
        // this.timerBar.getComponent(ProgressBar).progress = GameData.indexTime / GameData.startTime;
    }

    /** 开始游戏 */
    playGame(){
        if(GameData.gameState !=GameStatus.Over) return
        GameData.gameState = GameStatus.Playing
        /**加载预制体 */
        if(this.Porker){
            for(let i = 0;i<this.pokerNum/2;i++){
                this.creatPoker()
            }
        }else{
            resources.load("prefab/poker",Prefab,(err,PF) =>{
                if(err){
                    console.log("加载预制体失败");
                }
                this.Porker = PF
            })
            for(let i = 0;i<this.pokerNum;i++){
                this.creatPoker()
            }
        }
        //打乱牌的顺序
        for(let i = 0; i < this.pokerNum; i++){
            this.randomPoker()
        }
        this.index = this.pokerNum/2;
        this.listetPockerClick()
        this.playTimer()
    }

    /**打乱顺序 */
    randomPoker(){
        let rand = this.getRandomInt(0,this.pokerNum/2)
        let index = rand + 2
        if(index >= this.pokerNum){
            index = 0
        }
        this.gameLayout.insertChild(this.gameLayout.children[rand],index)
    }

    /**生成随机数 */
    getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    /**生成扑克牌 */
    creatPoker(){
        let pokerNum = this.getRandomInt(1,this.itemTypeNum).toString();
        let porker1Node = instantiate(this.Porker)
        let porker2Node = instantiate(this.Porker)

        porker1Node.getComponent(pokerContrl).init(pokerNum, this.itemSize)
        porker1Node.parent = this.gameLayout

        porker2Node.getComponent(pokerContrl).init(pokerNum, this.itemSize)
        porker2Node.parent = this.gameLayout
        this.gameLayout.getComponent(Layout).updateLayout()
    }

    /**监听扑克点击 */
    listetPockerClick(){
        this.gameLayout.children.forEach((e,index) =>{
            e.on(Node.EventType.TOUCH_END,()=>{
                // e.getComponent(pokerContrl).showBorder(true)
                if(GameData.selectPorkerArray[0] == -1){
                    GameData.selectPorkerArray[0] = index
                }else{
                    if(GameData.selectPorkerArray[0] == index){
                        return
                    }
                    GameData.selectPorkerArray[1] = index
                    this.result()
                }
            })
        })
    }

    /**结果判断 */
    result(){
        let index1 = GameData.selectPorkerArray[0]
        let index2 = GameData.selectPorkerArray[1]
        let porker1:string = this.gameLayout.children[index1].getComponent(pokerContrl).pokerNum
        let porker1Type:number =  this.gameLayout.children[index1].getComponent(pokerContrl).pokerType
        let porker2:string = this.gameLayout.children[index2].getComponent(pokerContrl).pokerNum
        let porker2Type:number =  this.gameLayout.children[index2].getComponent(pokerContrl).pokerType
        if(porker1 == porker2 && porker1Type == porker2Type){
            GameData.winScord += 40
            this.renewScoce()
            this.gameLayout.children[index1].active = false
            this.gameLayout.children[index2].active = false
            this.index -=2
        }else{
            GameData.indexTime -= 5 
            if(GameData.indexTime <= 0){
                this.showRes(false)
            }
            this.renewTimer()
        }
        GameData.selectPorkerArray = [-1,-1]
        // this.gameLayout.children[index1].getComponent(pokerContrl).showBorder(false)
        // this.gameLayout.children[index2].getComponent(pokerContrl).showBorder(false)
        if(this.index <=0){
            this.showRes(true)
         }
        
    }

    /**展示游戏结果 */
    showRes(isWin:boolean){
        if(isWin){
            this.effect.getComponent(Sprite).spriteFrame = this.win[0]
        }else{
            this.effect.getComponent(Sprite).spriteFrame = this.win[1]
        }
        this.effect.active = true
        tween(this.effect)
            .to(0.3,{scale:new Vec3(1.1, 1.1, 1)})
            .to(0.2,{scale:new Vec3(1, 1, 1)})
            .call(()=>{
                this.effect.active = false
                this.initGame()
            })
            .start()

    }

    /**重置游戏 */
    initGame(){
        this.gameLayout.removeAllChildren()
        GameData.gameState = GameStatus.Over
        // GameData.winScord = 0
        this.clearTimer()
        this.renewScoce()
    }

    /**
     * 展示帮助页面
    */
    showHelp() {
        this.helpNode.active = true;
    }

    /**
     * 隐藏帮助页面
    */
    hideHelp() {
        this.helpNode.active = false;
    }

}
