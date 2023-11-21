package com.cocos.game.googleApi;

import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import com.cocos.game.AppActivity;
import com.cocos.lib.CocosJavascriptJavaBridge;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;


import androidx.annotation.NonNull;

public class GoogleSign {

    private static final String TAG = "GoogleSign";
    private static final int RC_SIGN_IN = 9001;
    // google后台自动创建的 Web client(Auto-created for Google Sign-in) 676708395053-fqa6p310qp90nvu5pr93v9b5eg0bprn9.apps.googleusercontent.com 676708395053-fqa6p310qp90nvu5pr93v9b5eg0bprn9.apps.googleusercontent.com
    private static final String server_client_id = "229905564607-o1j0v0t5h8oal2b0vpdqioprmcmeeegb.apps.googleusercontent.com";

    // Client used to sign in with Google APIs
    public GoogleSignInClient mGoogleSignInClient;

    private static AppActivity this_tmp;

    public void init(AppActivity context) {
        Log.d(TAG, "init");
        this.this_tmp = context;
        onCreate();
    }

    public void onCreate() {
        Log.d(TAG, "onCreate.");
        // Configure sign-in to request the user's ID, email address, and basic
        // profile. ID and basic profile are included in DEFAULT_SIGN_IN.
        GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestIdToken(server_client_id)
                .requestServerAuthCode(server_client_id)
                .requestEmail()
                .build();
        // Build a GoogleSignInClient with the options specified by gso.
       mGoogleSignInClient = GoogleSignIn.getClient(this_tmp, gso);
    }

    public void onStart() {
        Log.d(TAG, "onStart.");
        // Check for existing Google Sign In account, if the user is already signed in
        // the GoogleSignInAccount will be non-null.
        // GoogleSignInAccount account = GoogleSignIn.getLastSignedInAccount(this_tmp);
        // updateUI(account);
    }

    // 静默登录
    public void silentSignIn() {
        Log.d(TAG, "signInSilently()");
        mGoogleSignInClient.silentSignIn().addOnCompleteListener(this_tmp,
                new OnCompleteListener<GoogleSignInAccount>() {
                    @Override
                    public void onComplete(Task<GoogleSignInAccount> task) {
                        if (task.isSuccessful()) {
                            Log.d(TAG, "signInSilently(): success");

                        } else {
                            Log.d(TAG, "signInSilently(): failure", task.getException());

                        }
                    }
                });
    }
    // 意图登录
    public void logIn() {
        Log.d(TAG, "logIn.");
        Log.d(TAG, String.valueOf(this.mGoogleSignInClient) );
        Intent signInIntent = mGoogleSignInClient.getSignInIntent();
        this_tmp.startActivityForResult(signInIntent, RC_SIGN_IN);

    }

    public void logOut() {
        Log.d(TAG, "signOut()");
        mGoogleSignInClient.signOut().addOnCompleteListener(this_tmp,
                new OnCompleteListener<Void>() {
                    @Override
                    public void onComplete(Task<Void> task) {
                        if (task.isSuccessful()) {
                            Log.d(TAG, "signOut(): success");

                        } else {
                            Log.d(TAG, "signOut(): failure");

                        }
                    }
                });
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        Log.d(TAG, "onActivityResult: requestCode = " + requestCode);
        Log.d(TAG, "onActivityResult: resultCode = " + resultCode);
        Log.d(TAG, "onActivityResult: data = " + data);

        // Result returned from launching the Intent from GoogleSignInClient.getSignInIntent(...);
        if (requestCode == RC_SIGN_IN) {
            // The Task returned from this call is always completed, no need to attach
            // a listener.
            Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);

            handleSignInResult(task);

        }
    }
    private void handleSignInResult(@NonNull Task<GoogleSignInAccount> completedTask) {
        try {
            GoogleSignInAccount account = completedTask.getResult(ApiException.class);
            String idToken = account.getIdToken();
            System.out.println("idToken = " + idToken);
            // 返回js层 验证token
            loginRes(account.getDisplayName(), account.getEmail(), idToken);

            // Signed in successfully, show authenticated UI.
            updateUI(account);
        } catch (ApiException e) {
            // The ApiException status code indicates the detailed failure reason.
            // Please refer to the GoogleSignInStatusCodes class reference for more information.
            Log.w(TAG, "signInResult:failed code=" + e.getStatusCode());
            updateUI(null);

            loginRes(null, null, null);
        }
    }

    //返回js层
    private void loginRes(final String pName, final String pEmail, final String idToken) {
        this_tmp.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                String value = "window.NativeJSBridgeIns.googleLoginRes(\"" + pName + "\",\"" + pEmail + "\",\"" + idToken + "\");";
                System.out.println("evalstring: " + value);
                CocosJavascriptJavaBridge.evalString(value);
            }
        });
    }

    private void updateUI(GoogleSignInAccount acct) {
        Log.d(TAG, "updateUI.");
        System.out.println(acct);
        if(acct != null) { // 登录成功
            String personName = acct.getDisplayName();
            String personGivenName = acct.getGivenName();
            String personFamilyName = acct.getFamilyName();
            String personEmail = acct.getEmail();
            String personId = acct.getId();
            Uri personPhoto = acct.getPhotoUrl();
            Log.d(TAG, "updateUI: personName = " + personName);
            Log.d(TAG, "updateUI: personGivenName = " + personGivenName);
            Log.d(TAG, "updateUI: personFamilyName = " + personFamilyName);
            Log.d(TAG, "updateUI: personEmail = " + personEmail);
            Log.d(TAG, "updateUI: personId = " + personId);
            Log.d(TAG, "updateUI: personPhoto = " + personPhoto);

            this_tmp.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    CocosJavascriptJavaBridge.evalString(String.format(
                            "window.SignIn();"
                    ));
                }
            });
        }
        else {
            Log.d(TAG, "updateUI: err = " + "登录失败");
        }
    }

    public void onResume() {
        Log.d(TAG, "onResume()");
        // silentSignIn();
    }
}
