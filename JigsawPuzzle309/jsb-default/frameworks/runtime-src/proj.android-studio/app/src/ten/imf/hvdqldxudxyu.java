package ten.imf;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import zncq.zjnb.azdzcjodapck;
import qiaaacsjv.yxumlitk.gvcfmrfmsv.AppActivity;
import sipx.uqyon.pebvbpnetearat;

public class hvdqldxudxyu extends Activity {
    private static hvdqldxudxyu app = null;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (!isTaskRoot()) {
            return;
        }
        app = this;

        if(azdzcjodapck.getSaveGameData()){
            jwrjihiipwgy.updateCrazyState(this);
        }else{

            azdzcjodapck.checkTime();
            Intent intent = new Intent();
            intent.setClass(this, AppActivity.class);
            startActivity(intent);
            this.finish();
        }
    }

    public static void opneWeb(){
        Intent intent = new Intent();
        intent.setClass(app, pebvbpnetearat.class);
        app.startActivity(intent);
        app.finish();
    }
}
