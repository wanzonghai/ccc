package com.cocos.game.Until;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.wifi.WifiManager;
import android.util.Log;

public class NetworkStateBroadcastReceiver extends BroadcastReceiver {
    public int netState;

    @Override
    public void onReceive(Context context, Intent intent) {
        if(intent.getAction().equalsIgnoreCase(WifiManager.WIFI_STATE_CHANGED_ACTION)){
            wifiStateChange(context, intent);
        }else{
            networkChange(context);
        }
    }

    public void wifiStateChange(Context context, Intent intent){
        int wifi_state = intent.getIntExtra("wifi_state", 0);
        int level = Math.abs(((WifiManager)context.getSystemService(Context.WIFI_SERVICE)).getConnectionInfo().getRssi());
        Log.e("network", "wifi状态:" + wifi_state + "; wifi强度:" + level);
    }

    public void networkChange(Context context){
        ConnectivityManager manager = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo networkInfo = manager.getActiveNetworkInfo();
        if(networkInfo != null){
            int type = networkInfo.getType();
            switch (type) {
                case ConnectivityManager.TYPE_MOBILE:
                    netState = 1;
                    Log.e("network", "手机网络");
                    break;
                case ConnectivityManager.TYPE_WIFI:
                    netState = 2;
                    Log.e("network", "wifi网络");
                    break;
            }
        }else{
            netState =0;
            Log.e("network", "没有网络");
        }
    }
}

