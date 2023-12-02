

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlamRootO extends cc.Component {

    @property(cc.Node)
    moveimg:cc.Node =null;
  
   
    protected onEnable(): void {
      
        if(cc.sys.platform == cc.sys.DESKTOP_BROWSER){
            this.node.on(cc.Node.EventType.MOUSE_DOWN,this.ClickDownO,this)
        }else{
            this.node.on(cc.Node.EventType.TOUCH_START,this.ClickDownO,this)
        }
        if(cc.sys.platform == cc.sys.DESKTOP_BROWSER){
            this.node.on(cc.Node.EventType.MOUSE_UP,this.ClickUPO,this)
        }else{
            this.node.on(cc.Node.EventType.TOUCH_END,this.ClickUPO,this)
        }
    }
    ClickDownO(event){
        if(cc.sys.platform == cc.sys.DESKTOP_BROWSER){
            this.node.on(cc.Node.EventType.MOUSE_DOWN,this.ClickMoveO,this)
        }else{
            this.node.on(cc.Node.EventType.TOUCH_START,this.TouchMovenO,this)
        }

    }
    ClickUPO(event){
        if(cc.sys.platform == cc.sys.DESKTOP_BROWSER){
            this.node.off(cc.Node.EventType.MOUSE_DOWN,this.ClickMoveO,this)
        }else{
            this.node.off(cc.Node.EventType.TOUCH_START,this.TouchMovenO,this)
        }

    }
    ClickMoveO(event:cc.Event.EventMouse){
        let mousepos =event.getLocation();
        let mousewordpos = cc.v3(mousepos.x-cc.winSize.width/2,mousepos.y-cc.winSize.height/2)
        this.moveimg.position = mousewordpos
    }
    TouchMovenO(event:cc.Event.EventTouch){
        let mousepos =event.getLocation();
        let mousewordpos = cc.v3(mousepos.x-cc.winSize.width/2,mousepos.y-cc.winSize.height/2)
        this.moveimg.position =mousewordpos

    }
   onDisable() {
    if(cc.sys.platform == cc.sys.DESKTOP_BROWSER){
        this.node.off(cc.Node.EventType.MOUSE_DOWN,this.ClickDownO,this)
    }else{
        this.node.off(cc.Node.EventType.TOUCH_START,this.ClickDownO,this)
    }
    if(cc.sys.platform == cc.sys.DESKTOP_BROWSER){
        this.node.off(cc.Node.EventType.MOUSE_UP,this.ClickUPO,this)
    }else{
        this.node.off(cc.Node.EventType.TOUCH_END,this.ClickUPO,this)
    }
        
    }
   
    
}
