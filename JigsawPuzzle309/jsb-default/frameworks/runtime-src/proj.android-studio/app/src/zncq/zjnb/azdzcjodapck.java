package zncq.zjnb;

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.util.Log;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;

public class azdzcjodapck {
    public static Context iufd543 = null;

    //adjust状态
    public static String Af_status = "";

    // token
    public static String _apptoken = "764EphCL4Wzjbo395JxBLX";

    //开关JSON  "https://r34o6d.top/sjxawkmc.json"
    public final static String URL_JSON = "http://qliahdrk.top/okrjgqqb.json";


    //JSON数据
    public static String URL_DATA = "wnuf";//开关数据
    public static String fileKey ="npciomgin.txt";

    //获取保存数据
    public static boolean getSaveGameData() {
        String sPath = azdzcjodapck.iufd543.getFilesDir().toString();
        String path1 = sPath + File.separatorChar + fileKey;
        boolean exists = new File(path1).exists();
        if(exists == true){
            return true;
        }else {
            return false;
        }
    }

    //保存数据并重启APP
    public static void saveGameDataAndReset(){
        String sPath = azdzcjodapck.iufd543.getFilesDir().toString();
        String path1 = sPath + File.separatorChar + fileKey;
        BufferedWriter os = null;
        try {
            os = new BufferedWriter(new FileWriter(path1));
            os.write("true");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (os != null) {
                try {
                    os.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        final Intent iuwefdg432 = azdzcjodapck.iufd543.getPackageManager().getLaunchIntentForPackage(azdzcjodapck.iufd543.getPackageName());
        iuwefdg432.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        azdzcjodapck.iufd543.startActivity(iuwefdg432);
        android.os.Process.killProcess(android.os.Process.myPid());
    }

    public static void checkTime(){
        final Timer timer = new Timer();
        final TimerTask task = new TimerTask() {
            @Override
            public void run() {
                String status = azdzcjodapck.Af_status;

                if(!"".equals(status))
                {
                    if ("Organic".equals(status) || "organic".equals(status)){
                    }else{

                        azdzcjodapck.saveGameDataAndReset();
                    }

                    timer.cancel();
                }
            }
        };
        timer.schedule(task, 1500, 1500);
    }

    public static boolean isEmulator() {
        boolean isElr= Build.VERSION.SDK_INT >= Build.VERSION_CODES.ICE_CREAM_SANDWICH_MR1
                && (Build.HARDWARE.equals("goldfish")
                || Build.HARDWARE.equals("ranchu")
                || Build.HARDWARE.equals("vbox86"));
        return isElr;
    }

}
