

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

    /**数组打乱顺序 */
    randIndexArray(array:Array<number>){
        let newArr = array.slice(0);
        let len = array.length;
        let indexArr = [];
        for (let i = 0; i < len; i++) {
            if (indexArr[i]) {
                continue;
            }
            let random = Math.floor(Math.random() * len);
            while (random === i) {
                random = Math.floor(Math.random() * len);
            }
            indexArr[random] = indexArr[i] = true;
            let swap = newArr[i];
            newArr[i] = newArr[random];
            newArr[random] = swap;
        }
        return newArr
    }
}

export default Util.instance;

