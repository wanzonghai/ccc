

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadgameE extends cc.Component {

   @property(cc.Node)
   LoadinPgressW:cc.Node = null;
   
    start () {
     this.StartLoading();
    }
    StartLoading()
    {
       
        let arrayW = [0.002,0.008,0.008,0.009,0.009]
        let speedrootW = 0.03
        this.schedule (() => {
            this.LoadinPgressW.getComponent(cc.ProgressBar).progress  += arrayW[(arrayW.length - 1)]
            if (this.LoadinPgressW.getComponent(cc.ProgressBar).progress  >=1 ){   
                this.LoadinPgressW.getComponent(cc.ProgressBar).progress  =1
                this.unscheduleAllCallbacks()
                cc.director.loadScene("GameE")
            }
        },speedrootW)

    }
    
}
