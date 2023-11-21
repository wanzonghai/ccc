package com.cocos.game.tools;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.util.Log;


import com.cocos.game.AppActivity;

import java.util.ArrayList;

public class ShareUtil
{
    private static AppActivity this_tmp;
    /**返回 Url Scheme*/
    public static String facebook_url1="https://www.facebook.com/sharer.php?u=";
    public static String facebook_url2="";
    public static String whatsapp_url1="https://wa.me/?text=";
    public static String whatsapp_url2="whatsapp://send/?text=";
    public static String telegram_url1="tg://msg_url?url=";
    public static String telegram_url2="https://telegram.me/";
    public static String[] packgeNames={"com.whatsapp","org.telegram.messenger.web","com.facebook.katana"};

    public static void shareText(Context context, String text, String title)
    {
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("text/plain");
        intent.putExtra(Intent.EXTRA_TEXT, text);
        context.startActivity(Intent.createChooser(intent, title));
    }

    public static void shareImage(Context context, Uri uri, String title)
    {

        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("image/png");
        intent.putExtra(Intent.EXTRA_STREAM, uri);
        context.startActivity(Intent.createChooser(intent, title));
    }

    public static void sendEmail(Context context, String title,String EMAIL_ADDRESS)
    {
        Intent intent = new Intent(Intent.ACTION_SENDTO, Uri.parse("mailto:" + EMAIL_ADDRESS));
        context.startActivity(Intent.createChooser(intent, title));
    }

    public static void sendMoreImage(Context context, ArrayList<Uri> imageUris, String title)
    {
        Intent mulIntent = new Intent(Intent.ACTION_SEND_MULTIPLE);
        mulIntent.putParcelableArrayListExtra(Intent.EXTRA_STREAM, imageUris);
        mulIntent.setType("image/jpeg");
        context.startActivity(Intent.createChooser(mulIntent, "多图文件分享"));
    }
    /**返回 Url Scheme*/
    public String shareTextOfUrlScheme(String packName){
        String url="";
        if(packName.equals(packgeNames[0]))
        {
            if(this.isHaveAppByPackName(this_tmp,packgeNames[0])){
                url=whatsapp_url1;
            }else {
                url=whatsapp_url2;
            }
        }else if(packName.equals(packgeNames[1])) {
            url=telegram_url1;
        }else if(packName.equals(packgeNames[2])){
            url=facebook_url1+""+"&t=";
        }
        Log.d("Url Scheme", url);
        return url;
    }
    /**
     * 判断手机是否安装某个应用
     *
     * @param appPackageName 应用包名
     * @return true：安装，false：未安装
     */
    private boolean isHaveAppByPackName(Context context,String packageName){
        if (packageName == null || "".equals(packageName))
            return false;
        PackageManager packageManager = context.getPackageManager();
        try {
            packageManager.getPackageInfo(packageName, PackageManager.GET_ACTIVITIES);
            return true;
        } catch (PackageManager.NameNotFoundException e) {
            return false;
        }
    }
}
