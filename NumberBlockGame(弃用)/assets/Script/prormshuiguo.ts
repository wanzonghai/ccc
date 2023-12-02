

const {ccclass, property} = cc._decorator;

@ccclass
export default class prormshuiguo extends cc.Component {

    @property(cc.Sprite)
    imgSp:cc.Sprite = null;

    @property([cc.SpriteFrame])
    arrImgSp:cc.SpriteFrame[] = [];

    @property(cc.Node)
    border:cc.Node = null;

    public itemId:number = 0

    public itemIndex:number = -1


    public canClick:boolean = false
   
    start () {

    }
    
    public init(num: number,posIndex:number){
        this.itemId = num;
        this.itemIndex = posIndex
        this.imgSp.spriteFrame =  this.arrImgSp[num]
    }

    changBorder(isShow:boolean){
        this.canClick = isShow
        if(isShow){
            this.border.active = true
        }else{
            this.border.active = false
        }
    }
    
}
