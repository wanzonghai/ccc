
// import GamesgRoot from "./GamesgRoot";
// const {ccclass, property} = cc._decorator;

// @ccclass
// export default class Gamecradx extends cc.Component {


//   @property(GamesgRoot) gamesgROOT:GamesgRoot;

//   @property(cc.Node)
//   pointROOT:cc.Node =null;
//    /*初始化预制体*/
//    cards = [1,2,3,4,5,2,3,6,4,5,2,1,3,1,1,2,3,2,1,4,5,1,2] ;

//     start () {
//          this.carrdAllCards();
//          this.createAllcard();
//          this.moveAllCards();
//     }

//     moveAllCards()
//     {
//         this.node.children.forEach((node,index)=>
//         {
//             const posx =this.pointROOT.children[index].position.x;
//             const posy =this.pointROOT.children[index].position.y;
//             cc.tween(node)
//             .to(0.3,{position:cc.v3(posx,posy,0)})
//             .start();
            
//         }
//         )
//     }
//     carrdAllCards(){
//       this.cards.sort(() => 0.5 - Math.random());
//       this.cards.sort(() => 0.5 - Math.random());
//       this.cards.sort(() => 0.5 - Math.random());
//     }
//     createAllcard(){
//         console.log("paizhi",this.cards)
//         this.cards.forEach(cardid =>{
//             this.createtoONCard(cardid);
//         });

//     }
//     createtoONCard(id){
//         const node = new cc.Node("icon")
//         this.node.addChild(node);
//         const sprite = node.addComponent(cc.Sprite);
//         sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        
//         const sf = this.gamesgROOT.getCardSF(id);
//         sprite.spriteFrame = sf;

//     }
//     update(dalteTime: number){
        
//     }

// }





