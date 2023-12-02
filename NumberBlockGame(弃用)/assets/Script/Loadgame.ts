

const {ccclass, property} = cc._decorator;

@ccclass
export default class Loadgame extends cc.Component {

   @property(cc.Node)
   LoadinPgress:cc.Node = null;
   
    start () {
     this.StartLoading();
    }
    StartLoading()
    {
       
        let arrayx = [0.001,0.008,0.008,0.009,0.009]
        let speedroot = 0.02
        this.schedule (() => {
            this.LoadinPgress.getComponent(cc.ProgressBar).progress  += arrayx[(arrayx.length - 1)]
            if (this.LoadinPgress.getComponent(cc.ProgressBar).progress  >=1 ){   
                this.LoadinPgress.getComponent(cc.ProgressBar).progress  =1
                this.unscheduleAllCallbacks()
                cc.director.loadScene("GameQ")
            }
        },speedroot)

    }
    
}
