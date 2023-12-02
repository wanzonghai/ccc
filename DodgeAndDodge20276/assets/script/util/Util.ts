

class Util{
    //公共方法类
    public static readonly instance = new Util();


    /**生成随机数 */
    getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    /**随机生成数组 */
    getRandArray(min:number,max:number,length:number):Array<number>{
        let NumberArray:Array<number> = []
        for(let i=0;i<length;i++){
            NumberArray.push(this.getRandomInt(min,max))
        }
        return NumberArray
    }

}

export default Util.instance;

