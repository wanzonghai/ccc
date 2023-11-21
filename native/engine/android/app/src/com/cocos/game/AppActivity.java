/****************************************************************************
Copyright (c) 2015-2016 Chukong Technologies Inc.
Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
package com.cocos.game;

import android.content.Context;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.content.Intent;
import android.content.res.Configuration;
import android.util.Log;

import com.cocos.game.googleApi.GoogleSign;
import com.cocos.lib.CocosJavascriptJavaBridge;
import com.cocos.service.SDKWrapper;
import com.cocos.lib.CocosActivity;

import androidx.annotation.NonNull;

public class AppActivity extends CocosActivity {
    private static final String TAG = "AppActivity";
    public static AppActivity app = null;
    private GoogleSign mGoogleSign;

    /**返回 Url Scheme*/
    public static String facebook_url1="https://www.facebook.com/sharer.php?t=";
    public static String facebook_url2="fb://faceweb/f?href=%2Fmessages?src=fb4a?t=";
    public static String whatsapp_url1="https://wa.me/?text=";
    public static String whatsapp_url2="whatsapp://send/?text=";
    public static String telegram_url1="tg://msg_url?url=";
    public static String telegram_url2="https://telegram.me/";
    public static String[] packgeNames={"com.whatsapp","org.telegram.messenger.web","com.facebook.katana"};
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // DO OTHER INITIALIZATION BELOW
        app = this ;
        SDKWrapper.shared().init(this);
        mGoogleSign = new GoogleSign();
        mGoogleSign.init(this);

    }

    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.shared().onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.shared().onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            return;
        }
        SDKWrapper.shared().onDestroy();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        //返回 谷歌传输的 三个数据
        mGoogleSign.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.shared().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.shared().onNewIntent(intent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();

        SDKWrapper.shared().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.shared().onStop();
    }

    @Override
    public void onBackPressed() {
        SDKWrapper.shared().onBackPressed();
        super.onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.shared().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.shared().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.shared().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.shared().onStart();
        super.onStart();
    }

    @Override
    public void onLowMemory() {
        SDKWrapper.shared().onLowMemory();
        super.onLowMemory();
    }

    /** 静默登录--谷歌*/
    public static void  silentSignIn(){
        Log.d(TAG,"'silentSignIn'");
        app.mGoogleSign.silentSignIn();
    }
    /** 意图登录--谷歌*/
    public static void  logIn(){

        Log.d(TAG,"'logIn'");
        app.mGoogleSign.logIn();
    }

    /** 退出登录--谷歌*/
    public static void  logOutGoogle(){
        Log.d(TAG,"'logOut'");
        app.mGoogleSign.logOut();
    }

    /** 后台模式*/
    private void ActiveStatue(int _refCount){
       app.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                //                String a=_refCount==0?"后台":"前台";
                //                Log.d(TAG,a);
                String value = "window.NativeJSBridgeIns.activeStatue(\"" + _refCount  + "\");";
                CocosJavascriptJavaBridge.evalString(value);
            }
        });
    }

    /**系统分享*/
    public static void showShareView(){
            Log.d(TAG,"'showShareView'");

            Intent sendIntent = new Intent();
            sendIntent.setAction(Intent.ACTION_SEND);
            sendIntent.setType("text/plain");
            sendIntent.putExtra(Intent.EXTRA_TEXT, "This is my text to send.");
            String appLink = "https://play.google.com/store/apps/details?id=cfzzejdpia.istmlomqz.msjmejkfb"; // 替换成你的应用包名
            sendIntent.putExtra(Intent.EXTRA_TEXT, "我推荐你使用这个应用：" + appLink);
            app.startActivity(Intent.createChooser(sendIntent, "分享应用："));
//            if(app.isHaveAppByPackName(packName)){
////                sendIntent.setPackage(packName);
////                app.startActivity(sendIntent);
//                Uri uri=Uri.parse("app://test");
//                Intent intent=new Intent(Intent.ACTION_VIEW,uri);
//                app.startActivity(intent);
//            }else {
//                app.startActivity(Intent.createChooser(sendIntent, title));
//            }
//            url2="%E6%88%91%E5%90%91%E4%BD%A0%E6%8E%A8%E8%8D%90%E8%BF%99%E4%B8%AA%E6%B8%B8%E6%88%8F%EF%BC%8C%E6%88%91%E5%9C%A8%E8%BF%99%E9%87%8C%E8%B5%9A%E4%BA%86%7B%7D%EF%BC%8C%E6%9D%A5%E5%92%8C%E6%88%91%E7%8E%A9%E5%90%A7%E4%B8%8B%E8%BD%BD%E9%93%BE%E6%8E%A5%EF%BC%9A%20%7Burl%7D.%20%E6%B3%A8%E5%86%8C%E5%90%8E%EF%BC%8C%E9%82%80%E8%AF%B7%E5%87%BD%E5%8F%AF%E4%BB%A5%E5%A1%AB%E5%86%99%E6%88%91%E7%9A%84%E9%82%80%E8%AF%B7%E7%A0%81%EF%BC%9A%20%7B12456%7D";
//            url1+=url2;
//        String schemeUrl=app.shareTextOfUrlScheme(packName);
//        String url=schemeUrl+textTitle;
//        Log.d(TAG, "showShareView: "+url);
//        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
//        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
//        String intentUri = intent.toUri(Intent.URI_INTENT_SCHEME);
//        Log.e(TAG, "action是:" + intentUri);
//        app.startActivity(intent);
////            Log.e(TAG, "是否有他:" + app.isHaveAppByPackName(packName));
//        if(app.isHaveAppByPackName(app,packName)||schemeUrl==facebook_url2||schemeUrl==whatsapp_url2||schemeUrl==telegram_url1) {
////                Log.e(TAG, "是否有他:ok" + intentUri);
//
//        }
        app.shareSuccess();
    }
    /**获取对应sheme url by 包名*/
    private String shareTextOfUrlScheme(@NonNull String packName){
        String url="";
        if(packName.equals(packgeNames[0]))
        {
            if(app.isHaveAppByPackName(app,packName)){
                url=whatsapp_url2;
            }else {
                url=whatsapp_url1;
            }
        }else if(packName.equals(packgeNames[1])) {
            url=telegram_url1;
        }else if(packName.equals(packgeNames[2])){
            if(app.isHaveAppByPackName(app,packName)){
                url=facebook_url2;
            }else {
                url=facebook_url1;
            }
        }
        Log.d("Url Scheme", url);
        return url;
    }
    /**
     * 判断手机是否安装某个应用
     *

     * @return true：安装，false：未安装
     */
    private boolean isHaveAppByPackName(Context context, String packageName){
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
    //返回js层
    private void shareSuccess() {
        app.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                String value = "window.NativeJSBridgeIns.shareSuccess();";
                System.out.println("shareSuccess: " + value);
                CocosJavascriptJavaBridge.evalString(value);
            }
        });
    }

    /**退出应用*/
    public static void exitApp(){
        System.out.println("exitApp:退出应用 " );
        app.finish();
    }
}
