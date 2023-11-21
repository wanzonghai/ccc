package com.cocos.game.Until;

import android.app.appsearch.AppSearchSession;
import android.content.Context;
import android.os.Build;
import android.provider.Settings;
import android.util.Log;


import com.cocos.game.AppActivity;

import java.util.Locale;

public class DeviceInfoUtils
{
    private static AppActivity this_tmp;

    private static AppSearchSession SDCardUtils;

    /**     * 获取设备宽度（px）     *      */
    public static int getDeviceWidth(Context context)
    {
        return context.getResources().getDisplayMetrics().widthPixels;
    }
    /**     * 获取设备高度（px）     */
    public static int getDeviceHeight(Context context)
    {
        return context.getResources().getDisplayMetrics().heightPixels;
    }
    /**     * 获取设备的唯一标识， 需要 “android.permission.READ_Phone_STATE”权限     */
    public static String getAndroidId(Context context)
    {
        String android_id = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ANDROID_ID);
        if (android_id == null)
        {
            return "UnKnown";
        } else
        {
            return android_id;
        }
//        TelephonyManager tm = (TelephonyManager) context .getSystemService(Context.TELEPHONY_SERVICE);
//        String deviceId = tm.getDeviceId();
//        if (deviceId == null)
//        {
//            return "UnKnown";
//        } else
//        {
//            return deviceId;
//        }
    }

    /**     * 获取厂商名     * **/
    public static String getDeviceManufacturer()
    {
        return Build.MANUFACTURER;
    }
    /**     * 获取产品名     * **/
    public static String getDeviceProduct()
    {
        return Build.PRODUCT;
    }
    /**     * 获取手机品牌     */
    public static String getDeviceBrand()
    {
        return Build.BRAND;
    }
    /**     * 获取手机型号     */
    public static String getDeviceModel()
    {
        return Build.MODEL;
    }
    /**     * 获取手机主板名     */
    public static String getDeviceBoard()
    {
        return Build.BOARD;
    }
    /**     * 设备名     * **/
    public static String getDeviceDevice()
    {
        return Build.DEVICE;
    }
    /**     *      *      * fingerprit 信息     * **/
    public static String getDeviceFubgerprint()
    {
        return Build.FINGERPRINT;
    }
    /**     * 硬件名     *      * **/
    public static String getDeviceHardware()
    {
        return Build.HARDWARE;
    }
    /**     * 主机     *      * **/
    public static String getDeviceHost()
    {
        return Build.HOST;
    }
    /**     *      * 显示ID     * **/
    public static String getDeviceDisplay()
    {
        return Build.DISPLAY;
    }
    /**     * ID     *      * **/
    public static String getDeviceId()
    {
        return Build.ID;
    }
    /**     * 获取手机用户名     *      * **/
    public static String getDeviceUser()
    {
        return Build.USER;
    }
    /**     * 获取手机 硬件序列号     * **/
    public static String getDeviceSerial()
    {
        return Build.SERIAL;
    }
    /**     * 获取手机Android 系统SDK     *      * @return     */
    public static int getDeviceSDK()
    {
        return Build.VERSION.SDK_INT;
    }
    /**     * 获取手机Android 版本     *      * @return     */
    public static String getDeviceAndroidVersion()
    {
        return Build.VERSION.RELEASE;
    }
    /**     * 获取当前手机系统语言。     */
    public static String getDeviceDefaultLanguage()
    {
        return Locale.getDefault().getLanguage();
    }
    /**     * 获取当前系统上的语言列表(Locale列表)     */
    public static String getDeviceSupportLanguage()
    {
        Log.e("wangjie", "Local:" + Locale.GERMAN);
        Log.e("wangjie", "Local:" + Locale.ENGLISH);
        Log.e("wangjie", "Local:" + Locale.US);
        Log.e("wangjie", "Local:" + Locale.CHINESE);
        Log.e("wangjie", "Local:" + Locale.TAIWAN);
        Log.e("wangjie", "Local:" + Locale.FRANCE);
        Log.e("wangjie", "Local:" + Locale.FRENCH);
        Log.e("wangjie", "Local:" + Locale.GERMANY);
        Log.e("wangjie", "Local:" + Locale.ITALIAN);
        Log.e("wangjie", "Local:" + Locale.JAPAN);
        Log.e("wangjie", "Local:" + Locale.JAPANESE);
        return Locale.getAvailableLocales().toString();
    }

    public  static String  getDeviceAllInfo(Context context)
    {
//        this_tmp.runOnGLThread(new Runnable() {
//            @Override
//            public void run() {
////                char[] str={getIMEI(context),}
//                String value = "window.NativeJSBridgeIns.getDeviceAllInfo(\"" + android.os.Build.DEVICE + "\",\"" + getIMEI(context) + "\",\"" + android.os.Build.SERIAL + "\",\"" +  android.os.Build.VERSION.RELEASE + "\");";
//                System.out.println("deviceAllInfo: " + value);
//                Cocos2dxJavascriptJavaBridge.evalString(value);
//            }
//        });
        return "\n\n1. AndroidId:\n\t\t" + getAndroidId(context) +
                "\n\n2. 设备宽度:\n\t\t" + getDeviceWidth(context) +
                "\n\n3. 设备高度:\n\t\t" + getDeviceHeight(context) +
//                "\n\n4. 是否有内置SD卡:\n\t\t" + SDCardUtils.isSDCardMount()  +
//                "\n\n5. RAM 信息:\n\t\t" + SDCardUtils.getRAMInfo(context)  +
//                "\n\n6. 内部存储信息\n\t\t" + SDCardUtils.getStorageInfo(context, 0)  +
//                "\n\n7. SD卡 信息:\n\t\t" + SDCardUtils.getStorageInfo(context, 1) +
//                "\n\n8. 是否联网:\n\t\t" + Utils.isNetworkConnected(context) +
//                "\n\n9. 网络类型:\n\t\t" + Utils.GetNetworkType(context)+
                "\n\n10. 系统默认语言:\n\t\t" + getDeviceDefaultLanguage()+
                "\n\n11. 硬件序列号(设备名):\n\t\t" + Build.SERIAL+
                "\n\n12. 手机型号:\n\t\t" + Build.MODEL +
                "\n\n13. 生产厂商:\n\t\t" + Build.MANUFACTURER +
                "\n\n14. 手机Fingerprint标识:\n\t\t" + Build.FINGERPRINT +
                "\n\n15. Android 版本:\n\t\t" + Build.VERSION.RELEASE+
                "\n\n16. Android SDK版本:\n\t\t" + Build.VERSION.SDK_INT  +
                "\n\n17. 安全patch 时间:\n\t\t" + Build.VERSION.SECURITY_PATCH  +
//                "\n\n18. 发布时间:\n\t\t" + Utils.Utc2Local(android.os.Build.TIME)  +
                "\n\n19. 版本类型:\n\t\t" + Build.TYPE  +
                "\n\n20. 用户名:\n\t\t" + Build.USER +
                "\n\n21. 产品名:\n\t\t" + Build.PRODUCT +
                "\n\n22. ID:\n\t\t" + Build.ID +
                "\n\n23. 显示ID:\n\t\t" + Build.DISPLAY +
                "\n\n24. 硬件名:\n\t\t" + Build.HARDWARE +
                "\n\n25. 产品名:\n\t\t" + Build.DEVICE  +
                "\n\n26. Bootloader:\n\t\t" + Build.BOOTLOADER +
                "\n\n27. 主板名:\n\t\t" + Build.BOARD +
                "\n\n28. CodeName:\n\t\t" + Build.VERSION.CODENAME +
                "\n\n29. 语言支持:\n\t\t" + getDeviceSupportLanguage();

    }
}