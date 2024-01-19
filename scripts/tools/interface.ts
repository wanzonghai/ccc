import { Prefab, NodePool, AnimationClip, ParticleAsset, TiledMapAsset, Mesh, AudioClip, Font, JsonAsset, SceneAsset, SpriteAtlas, SpriteFrame, TextAsset, Texture2D, Material, dragonBones } from 'cc';
import { ELoginType } from './enumes';

export interface $Ref<T> {
    value: T;
}
export interface NetConnectOptions {
    host?: string; // 地址
    port?: number; // 端口
    url?: string; // url，与地址+端口二选一
    autoReconnect?: number; // -1 永久重连，0不自动重连，其他正整数为自动重试次数
}
// 网络提示接口
export interface INetworkTips {
    connectTips(isShow: boolean): void;
    reconnectTips(isShow: boolean): void;
    requestTips(isShow: boolean): void;
}
/**登录信息 */
export interface ILoginInfo {
    user?: IPlayerInfo;
    token?: string;
    /**1  谷歌  4 游客登录 5 邮箱登录*/
    type?: ELoginType;
}
export interface ITestLogin {
    device?: IDeviceInfo;
    option?: number;
    phone?: string;
}

export interface IUserDataSavaData {
    idToken?: string;
    lang?: string;
}

export interface IPlayerInfo {
    /**name */
    name?: string;
    /**ID */
    id?: string;
    /**score */
    score?: number;
    /**avater */
    avatar?: string;

    adree?: number;

    isOpenMusic?: boolean;

    loginData?: ILoginData;
    /***.... */
}
/**登录 */
export interface ILoginData {
    device?: IDeviceInfo;
    id_token?: string;
    /**语种 */
    lang?: string;
    /**国家简称 */
    country_alias?: string;
    /**币种 */
    currency_code?: string;

    option?: number;
    phone?: string;
    is_guest?: number;

    /**邮箱验证码*/
    code?: number;
    /**邮箱账号*/
    email?: string;
}
export interface IDeviceInfo {
    /**设备品牌 */
    brand?: string;
    /**设备imei1 */
    imei1?: string;
    /**设备imei2 */
    imei2?: string;
    /**设备序列号 android */
    serial_number?: string;
    /**设备系统 */
    system?: string;
}
export interface IPhoneInfo {
    /**设备品牌 */
    andirodId?: string;
    lang?: string;
    /**设备品牌 */
    brand?: string;
    /**设备系统 */
    system?: string;
}

export interface IInterResources {
    //节点类型
    Node: { [propName: string]: Node[] };
    Prefab: { [PropName: string]: Prefab[] };
    NodePool: { [propName: string]: NodePool };
    //资源动画
    AnimationClip: { [propName: string]: AnimationClip[] };
    ParticleAsset: { [propName: string]: ParticleAsset[] };
    TiledMapAsset: { [propName: string]: TiledMapAsset[] };
    Mesh: { [propName: string]: Mesh[] };
    AudioClip: { [propName: string]: AudioClip[] };
    Font: { [propName: string]: Font[] };
    JsonAsset: { [propName: string]: JsonAsset[] };
    SceneAsset: { [propName: string]: SceneAsset[] };
    SpriteAtlas: { [propName: string]: SpriteAtlas[] };
    SpriteFrame: { [propName: string]: SpriteFrame[] };
    TextAsset: { [propName: string]: TextAsset[] };
    Texture2D: { [propName: string]: Texture2D[] };
    Material: { [propName: string]: Material[] };
    //龙骨
    DragonBonesAsset: { [propName: string]: dragonBones.DragonBonesAsset };
    DragonBonesAtlasAsset: { [propName: string]: dragonBones.DragonBonesAtlasAsset };
}
/**配置 */
export interface IConfigList {
    sys_conf_list?: ISysConfigList[];
}
export interface ISysConfigList {
    id?: number;
    name?: string;
    value?: string; //值
    remark?: string; //描述
    created_at?: number;
}

export interface IXML {
    GetAttributeArray($attrName: string, $i1: $Ref<number>, $i2: $Ref<number>): boolean;
    GetAttributeArray($attrName: string, $i1: $Ref<number>, $i2: $Ref<number>, $i3: $Ref<number>, $i4: $Ref<number>): boolean;
    GetAttributeArray($attrName: string, $f1: $Ref<number>, $f2: $Ref<number>, $f3: $Ref<number>, $f4: $Ref<number>): boolean;
    GetAttributeArray($attrName: string, $f1: $Ref<number>, $f2: $Ref<number>): boolean;
    GetAttributeArray($attrName: string, $s1: $Ref<string>, $s2: $Ref<string>): boolean;
}
