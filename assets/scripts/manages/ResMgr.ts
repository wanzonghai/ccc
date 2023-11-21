import { Asset, JsonAsset, NodePool, Prefab, instantiate, log, resources, sys, native, assetManager, loader } from 'cc';
import { Singleton } from '../bases/Singleton';
import { IInterResources } from '../tools/interface';

export default class ResMgr extends Singleton<ResMgr> {
    public allJsonAsset: JsonAsset[] = [];
    private static _instance: ResMgr = null;
    //类中对资源接口的声明，必须声明接口中的全部属性或者方法
    public _allResources: IInterResources = {
        Node: {},
        Prefab: {},
        NodePool: {},
        AnimationClip: {},
        ParticleAsset: {},
        TiledMapAsset: {},
        Mesh: {},
        AudioClip: {},
        Font: {},
        JsonAsset: {},
        SceneAsset: {},
        SpriteAtlas: {},
        SpriteFrame: {},
        TextAsset: {},
        Texture2D: {},
        Material: {},
        DragonBonesAsset: {},
        DragonBonesAtlasAsset: {},
    };
    constructor() {
        super();
    }

    public init(): void {
        this._allResources = {
            Node: {},
            Prefab: {},
            NodePool: {},
            AnimationClip: {},
            ParticleAsset: {},
            TiledMapAsset: {},
            Mesh: {},
            AudioClip: {},
            Font: {},
            JsonAsset: {},
            SceneAsset: {},
            SpriteAtlas: {},
            SpriteFrame: {},
            TextAsset: {},
            Texture2D: {},
            Material: {},
            DragonBonesAsset: {},
            DragonBonesAtlasAsset: {},
        };
        this.allJsonAsset = [];
    }
    /**
     * 通过路径获取节点资源名称
     * @param {string} path 要获取的节点资源的路径
     * @returns {string} 返回节点名称的字符串
     */
    public getResourcesName(path: string): string {
        let index = path.lastIndexOf('/');
        if (index === -1) {
            return path;
        } else {
            return path.slice(index + 1);
        }
    }
    public getResourcesTypeName(name: string): string {
        let index = name.lastIndexOf('_');
        if (index === -1) {
            return name;
        } else {
            return name.slice(index + 1);
        }
    }
    /**初始化节点池 */
    public initNodePool(path: string, typeRes?: any) {
        return new Promise<void>((resolve, reject) => {
            resources.loadDir(path, Prefab, (err, assets) => {
                if (err) return reject(err);
                assets.forEach((element) => {
                    if ((typeRes && this.hasNode(element.name)) || this.hasNode(element.name)) return;
                    element.addRef();
                    if (typeRes) {
                        this.putRes(element.name, element as Prefab, Prefab);
                    } else {
                        this.putNodePool(element.name, instantiate(element as Prefab));
                    }
                });
                resolve();
            });
        });
    }

    /**
     * 判断是否已经有了这个节点资源
     * @param {string} resName 判断是否已经存在节点资源的名字
     * @param {string} path 可选配置，节点资源的路径
     * @returns {boolean} 有返回true，没有返回false
     */
    public hasNode<T>(resName: string, path?: string): boolean {
        let name: string;
        if (path) {
            name = this.getResourcesName(path);
        } else {
            name = resName;
        }
        if (this._allResources.Node[name]) {
            return true;
        }
        if (this._allResources.NodePool[name]) {
            return true;
        }
        if (this._allResources.Prefab[name]) {
            return true;
        }
        if (this._allResources.SpriteFrame[name]) {
            return true;
        }
        return false;
    }
    /**
     * 获取节点，如果handle的Map中有就直接获取到，没有的话就实例化出来
     * @param {string} resName 要获取的节点名称
     * @param {string} path 可选参数，资源路径
     * @returns {cc.Node} 返回节点或者undefined
     */
    public getRes<T>(path: string, typeRes?: any): T {
        let resName = this.getResourcesName(path);
        //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用
        let resPool = null;
        if (typeRes) {
            resPool = this.getResPool(resName, typeRes);
            return resPool[resName];
        } else {
            resPool = this.getNodePool(resName);
            if (resPool.size() > 0) {
                return resPool.get();
            }
        }
    }
    //获取类型的字典容器
    private getResPool<T>(name: string, typeRes: any): T[] {
        let typeName = this.getResourcesTypeName(typeRes.name);

        let resPool: T[] = this._allResources[typeName];
        if (!resPool) {
            resPool = this._allResources[typeName] = [];
        }
        return resPool;
    }

    private getNodePool(name: string) {
        let resPool: NodePool = this._allResources.NodePool[name];
        if (!resPool) {
            resPool = this._allResources.NodePool[name] = new NodePool();
        }
        return resPool;
    }
    /**存资源节点 预设等 到字典容器中
     *
     *
     * @template T
     * @param {string} name
     * @param {T} targetRes
     * @param {number} type  1: //   cc.Prefab:2: //   cc.NodePool:3: //   cc.AnimationClip:4: //   cc.ParticleAsset:5: //   cc.TiledMapAsset:6: //   cc.Mesh:7: //   cc.AudioClip:8: //   cc.Font:9: //   cc.JsonAsset:10: //   cc.SceneAsset:11: //   cc.SpriteAtlas:12: //   cc.SpriteFrame:13: //   cc.TextAsset:14: //   cc.Texture2D:15: //   cc.Material:16: //   dragonBones.DragonBonesAsset :17: //   dragonBones.DragonBonesAtlasAsset :18: //cc.Node:
     * @memberof manage_res
     */
    public putRes<T>(name: string, targetRes: any, type?: any) {
        //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用
        let resPool = this.getResPool(name, type);
        let _targetRes = resPool[name];
        if (_targetRes) {
            return;
        }
        resPool[name] = targetRes;
    }
    public putNodePool<T>(name: string, targetRes: T) {
        //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用
        let resPool = null;
        resPool = this.getNodePool(name);
        if (resPool[name]) {
            return;
        }
        resPool.put(targetRes);
    }

    /**获取当前缓冲池的可用对象资源数量
     *
     * @param targetName
     * @returns
     */
    public getResPoolSize<T>(path: string, typeRes: any): number {
        let resName: string = this.getResourcesName(path);
        //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用
        let resPool: Asset[] = this.getResPool(resName, typeRes);
        return resPool.length;
    }
    public getNodePoolSize<T>(name: string): number {
        //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用
        let resPool: NodePool = this.getNodePool(name);
        return resPool.size();
    }
    /**销毁对象池中缓存的所有资源
     *
     * @param name
     * @param typeRes
     */
    public clearResPool(path: string, typeRes: any) {
        let resName: string = this.getResourcesName(path);
        //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用
        let resPool = this.getResPool(resName, typeRes);
        resPool.length = 0;
    }
    public clearNodePool(name: string) {
        //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用
        let resPool = this.getNodePool(name);
        resPool.clear();
    }

    public getResPoolElement<T extends Asset>(resPool: T[], targetName: string) {
        let targetRes: T = null;
        try {
            resPool.forEach((element) => {
                if (element.name == targetName) {
                    targetRes = element;
                    throw Error();
                }
            });
        } catch (error) {
            return targetRes;
        }
    }

    /**json文件
     *
     */
    public loadJsonFile(name) {
        return new Promise<void>((resolve, reject) => {
            resources.loadDir(name, JsonAsset, (err, objects: JsonAsset[]) => {
                if (err) {
                    // Appic.MsgTipMg.show('' + err);
                    reject();
                    return;
                }
                objects.forEach((element) => {
                    if (!this.allJsonAsset.includes(element)) {
                        element.addRef();
                        this.allJsonAsset.push(element);
                    }
                });
                resolve();
            });
        });
    }
    /**写入数据 */
    public writeDataRes() {
        assetManager.loadBundle(native.fileUtils.getWritablePath() + '/pathToBundle/bundleName', (err, bundle) => {
            // ...
        });
        //writeToFile()写入数据到文件，存储格式为xml，不是Json格式
        if (sys.isNative) {
            log('Path:' + native.fileUtils.getWritablePath());
            log(native.fileUtils.writeToFile({ new: 'value' } + native.fileUtils.getWritablePath() + 'data.json'));

            log('fullPathForFilename:' + native.fileUtils.fullPathForFilename('resources/data.json'));
        }
        //writeStringToFile()写入数据到文件，存储格式为xml，不是Json格式
        log('writeStringToFile:' + native.fileUtils.writeStringToFile('{"a":"b","c":"d"}', native.fileUtils.getWritablePath() + 'kk.json'));
        log('getValueMapFromFile:' + JSON.stringify(native.fileUtils.getValueMapFromFile(native.fileUtils.getWritablePath() + 'kk.json')));

        var arry = JSON.stringify(native.fileUtils.getStringFromFile(native.fileUtils.getWritablePath() + 'kk.json'));
        log('arry:' + arry);

        loader.load(native.fileUtils.getWritablePath() + 'kk.json', function (err, res) {
            if (err) {
                log(err);
            } else {
                let list = res;
                log('list:' + list.a);
            }
        });
    }
    /**读取数据 */
    public readDataRes() {
        log('writeStringToFile:' + native.fileUtils.writeStringToFile('{"a":"b","c":"d"}', native.fileUtils.getWritablePath() + 'kk.json'));
        log('getValueMapFromFile:' + JSON.stringify(native.fileUtils.getValueMapFromFile(native.fileUtils.getWritablePath() + 'kk.json')));

        var arry = JSON.stringify(native.fileUtils.getStringFromFile(native.fileUtils.getWritablePath() + 'kk.json'));
        log('arry:' + arry);
        return new Promise<any>((resolve, reject) => {
            resources.load(native.fileUtils.getWritablePath() + 'kk.json', (err, res: any) => {
                if (err) {
                    log(err);
                } else {
                    let list = res;
                    resolve(res);
                    log('list:' + list.a);
                }
            });
        });
    }
}
