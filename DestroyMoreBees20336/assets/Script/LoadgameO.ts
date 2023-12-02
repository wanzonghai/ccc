

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadgameO extends cc.Component {

   @property(cc.Node)
   LoadinPgressO:cc.Node = null;

   
    start () {
     this.StartLoadingO();
    }
    StartLoadingO()
    {
       
        let arrayO = [0.003,0.008,0.008,0.009,0.009]
        let speedrootO = 0.03
        this.schedule (() => {
            this.LoadinPgressO.getComponent(cc.ProgressBar).progress  += arrayO[(arrayO.length - 1)]
            if (this.LoadinPgressO.getComponent(cc.ProgressBar).progress  >=1 ){   
                this.LoadinPgressO.getComponent(cc.ProgressBar).progress  =1
                cc.director.loadScene("GameO")
            }
        },speedrootO)

    }
    
}
