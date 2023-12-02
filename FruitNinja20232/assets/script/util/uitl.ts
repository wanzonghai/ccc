class uitl {
    public static readonly instance = new uitl();
    //公共方法

     /**生成随机整数数 */
     getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default uitl.instance;