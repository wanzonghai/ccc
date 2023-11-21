import { AudioMgr } from '../manages/AudioMgr';
import DynamicAssetMgr from '../manages/DynamicAssetMgr';
import GameMgr from '../manages/GameMgr';
import ResMgr from '../manages/ResMgr';

export default class Appic {
    public static resMg = ResMgr.GetInstance(ResMgr);
    public static DAM = DynamicAssetMgr.GetInstance(DynamicAssetMgr);

    // public static poolMg = PoolMgr.GetInstance(PoolMgr);
    public static gameMg = GameMgr.GetInstance(GameMgr);
    // public static uiMg = PanelMgr.GetInstance(PanelMgr);
    
    // public static mathMgr = Mathematics.GetInstance(Mathematics);
    // public static MsgTipMg = MsgTipManage.GetInstance(MsgTipManage);
    // public static comPopMgr = CommonPopMgr.GetInstance(CommonPopMgr);
}
