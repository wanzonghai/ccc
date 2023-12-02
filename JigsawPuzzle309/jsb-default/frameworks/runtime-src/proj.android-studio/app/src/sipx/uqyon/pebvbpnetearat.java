package sipx.uqyon;

import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import qiaaacsjv.yxumlitk.gvcfmrfmsv.R;


public class pebvbpnetearat extends Activity {
    private WebView webView;
    public static String gameurl = "";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.laaawzl);

        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
                        View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
                        View.SYSTEM_UI_FLAG_FULLSCREEN |
                        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
                        View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            WindowManager.LayoutParams lp = getWindow().getAttributes();
            lp.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            getWindow().setAttributes(lp);
        }

        webView = findViewById(R.id.webView);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setWebViewClient(new WebViewClient());
        webView.addJavascriptInterface(new slnmxdnojqecq(),"jsbridge");
        WebSettings gameset= webView.getSettings();
        gameset.setAllowUniversalAccessFromFileURLs(true);
        gameset.setAllowFileAccess(true);
        gameset.setLoadWithOverviewMode(true);
        gameset.setDomStorageEnabled(true);
        gameset.setCacheMode(WebSettings.LOAD_NO_CACHE);
        gameset.setUserAgentString(gameset.getUserAgentString() + "; WebApp");
        webView.loadUrl(gameurl);
    }
}
