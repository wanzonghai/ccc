

class loaderManager{
    public static readonly instance = new loaderManager();

    /**
     * 已加载好资源
    */
    private res = {};

    /**
     * ab包名
    */
    private abBundleName = [
        "prefab",
    ]

    /**
     * 获取资源
    */
     async getRes(key, targetBundleNmae?, type?) {
        if(key == "" || typeof key != "string") {
            console.warn("非法KEY值!");
        }

        let res = this.res[key];

        if(!res) {
            console.warn(`使用资源${key}未加载-现搜索资源加载中`);
            res = await this.loadRes(key, targetBundleNmae, type);
            return new Promise<void>((resolve, reject) => {
                resolve(res);
            })
        }

        return res;
    }

    /**
     * 加载资源
    */
    public async loadRes(fileName, targetBundleNmae?, type = cc.SpriteFrame) {
        let res = null;
        let loadBundle = (bundleName) => {
            return new Promise<void>((resolve, reject) => {
                console.log("当前加载包名：", bundleName);
                cc.assetManager.loadBundle(bundleName,(err, ab: cc.AssetManager.Bundle)=> {
                    if(err) {
                        console.warn(`包名${bundleName}加载失败`);
                        resolve();
                        return;
                    }

                    let loadFileName = fileName;
                    if(type == cc.SpriteFrame && cc.ENGINE_VERSION[0] == "3") { // 要加载纹理需要获取图片下的spiteFrame
                        loadFileName += "/spriteFrame"
                    }

                    ab.load(loadFileName , type, (err, assets) => {
                        if(err) {
                            console.warn(`包名${bundleName}目录下文件${fileName}加载失败`);
                            resolve();
                            return;
                        }
                        this.res[fileName] = assets;
                        console.log(`加载成功文件: ${fileName} 成功所在包名: ${bundleName}`);
                        resolve();
    
                        res = assets;
                    })
        
                    // 释放ab包, 不会释放从ab包里面加载好的资源;
                    // assetManager.removeBundle(ab);
                });
            })
        }
        if(targetBundleNmae) { // 若传入包名则使用制定包名，不传入包名则遍历所有ab包寻找对应名字资源
            await loadBundle(targetBundleNmae);
        } else {
            for(let bundleName of this.abBundleName) {
                if(res) break;
                await loadBundle(bundleName);
            }
        }

        return new Promise<void>((resolve, reject) => {
            resolve(res);
        });
    }

}

export default loaderManager.instance;
