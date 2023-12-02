class util{
    public static readonly instance = new util();

    // 获取两个数间的随机值(包括min max)
    public getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
export default util.instance;