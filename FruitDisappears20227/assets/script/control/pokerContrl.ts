
import { _decorator, Component, Node, resources, Sprite, SpriteFrame, Vec3, UITransform, Size } from 'cc';
import { PokerType } from '../util/define';
const { ccclass, property } = _decorator;

 
@ccclass('pokerContrl')
export class pokerContrl extends Component {

    @property(Sprite)
    pokerSp:Sprite = null

    // @property(Node)
    // border:Node = null

    public pokerNum:string = null
    public pokerType:PokerType = null

    start () {
        
    }
    /**初始化牌 */
    public init(num:string, itemSize: Size){
        this.pokerNum = num
        let path = `img/item/${num}/spriteFrame`;
        resources.load(path,SpriteFrame,(err,sp) =>{
            if(err){
                console.log("加载失败:", path);
            }else{
                this.pokerSp.spriteFrame = sp
                this.scheduleOnce(() => {
                    this.pokerSp.getComponent(UITransform).setContentSize(itemSize)
                })
            }
        })
    }

    // /**点击扑克 */
    // showBorder(isShow:boolean){
    //     this.border.active = isShow
    // }

   
}

