package com.cocos.game.tools;//package org.cocos2dx.javascript.tools;
//
//import android.app.Activity;
//import android.content.Intent;
//import android.os.Bundle;
//import android.util.Log;
//
//import com.facebook.AccessToken;
//import com.facebook.CallbackManager;
//import com.facebook.FacebookCallback;
//import com.facebook.FacebookException;
//import com.facebook.FacebookRequestError;
//import com.facebook.GraphRequest;
//import com.facebook.GraphResponse;
//import com.facebook.HttpMethod;
//import com.facebook.login.LoginManager;
//import com.facebook.login.LoginResult;
//
//import org.cocos2dx.javascript.Native;
//import org.json.JSONException;
//import org.json.JSONObject;
//
//import java.net.URLEncoder;
//import java.util.Arrays;
//import java.util.HashMap;
//import java.util.Map;
//
//
//
//public class FaceBookUtils {
//
//    private CallbackManager m_callbackManager =null;
//    private String  m_actTag ="FaceBookUtils";
//    private String  m_facebookLoginCallBack="";
//    private Activity m_activity=null;
//    private static FaceBookUtils g_Instace = null;
//
//    public static FaceBookUtils getInstance() {
//        if (null == g_Instace) {
//            g_Instace = new FaceBookUtils();
//        }
//        return g_Instace;
//    }
//
//    public  void loginFacebook(final String callback){
//        m_facebookLoginCallBack = callback;
//        LoginManager.getInstance().logInWithReadPermissions(m_activity, Arrays.asList("public_profile"));
//    }
//
//    public void onActivityResult(int requestCode, int resultCode, Intent data) {
//
//        m_callbackManager.onActivityResult(requestCode,resultCode,data);
//    }
//
//    public void getUserFacebookBasicInfo(Map<String,String> inmap) {
//        final String id = inmap.get("id");
//        final String token = inmap.get("token");
//        final String app = inmap.get("app");
//
//        // 获取基本文本信息
//        Log.d(m_actTag, "准备获取facebook用户基本信息");
//
//        GraphRequest request = GraphRequest.newMeRequest(AccessToken.getCurrentAccessToken(), new GraphRequest.GraphJSONObjectCallback() {
//            @Override
//            public void onCompleted(JSONObject object, GraphResponse response) {
//                if (response == null) {
//                    Log.d(m_actTag, "无法获取fb用户基本信息");
//                    return;
//                }
//                Log.d(m_actTag, "获取fb用户基本信息完毕，object是" + object);
//                JSONObject responseJsonObject = response.getJSONObject();
//                Log.d(m_actTag,  "而response 的object是" + responseJsonObject);//这两个jsonObject是一样的
//                if (responseJsonObject == null) {
//                    Log.d(m_actTag, "无法获取fb用户基本信息" + response.getError().getErrorType() + "   " + response.getError().getErrorMessage());
//                    return;
//                }
//                Map<String,String> map = new HashMap<String, String>();
//                map.put("result", "11");
//                map.put("info", "fb info success");
//                map.put("id", id);
//                map.put("token", token);
//                map.put("appid", app);
//                map.put("firstName", getFacebookGraphResponseString(responseJsonObject, "first_name"));
//                map.put("lastName", getFacebookGraphResponseString(responseJsonObject, "last_name"));
//                map.put("userName", getFacebookGraphResponseString(responseJsonObject, "name"));
////                map.put("birthday", getFacebookGraphResponseString(responseJsonObject, "birthday"));
//                //map.put("updateTime", getFacebookGraphResponseString(responseJsonObject, "updated_time"));
////                map.put("email", getFacebookGraphResponseString(responseJsonObject, "email"));
////                map.put("gender", getFacebookGraphResponseString(responseJsonObject, "gender"));
//
//                //获取用户头像 (小)
//                //JSONObject object_pic = object.optJSONObject( "picture" ) ;
//                //JSONObject object_data = object_pic.optJSONObject( "data" ) ;
//                //String photo = object_data.optString( "url" )  ;
//                //map.put("head", photo);
//                Native.nativeToLogic(m_facebookLoginCallBack,map);
//            }
//        });
//
//        Bundle parameters = new Bundle();
////        parameters.putString("fields", "id,name,link,email,first_name,last_name,gender,picture,locale,timezone,updated_time,verified");
//        parameters.putString("fields", "id,name,first_name,last_name");
//        request.setParameters(parameters);
//        request.executeAsync();
//    }
//
//    public String getFacebookGraphResponseString(JSONObject graphResponse, String flag) {
//        String value = "";
//        try {
//            value = graphResponse.getString(flag);
//        } catch (JSONException e) {
//            e.printStackTrace();
//        }
//        Log.d(m_actTag, "getFacebookInfo flag="+flag+"   result="+value);
//        return value;
//    }
//
//    public void getFacebookUserPictureAsync(String facebookUserId) {
//        Log.d(m_actTag,  "getFacebookUserPictureAsync");
//        Bundle parameters = new Bundle();
//        parameters.putBoolean("redirect", false);
//        parameters.putString("height", "200");
//        parameters.putString("type", "normal");
//        parameters.putString("width", "200");
//        GraphRequest graphRequest= new GraphRequest(AccessToken.getCurrentAccessToken(), "/" + facebookUserId + "/picture", parameters, HttpMethod.GET, new GraphRequest.Callback() {
//            public void onCompleted(GraphResponse response) {
//                if (response == null) {
//                    Log.d(m_actTag,  "get facebook photo fail");
//                    return;
//                }
//
//                if (response.getError() != null) {
//                    FacebookRequestError facebookRequestError = response.getError();
//                    Log.d(m_actTag,  "get facebook photo fail 2：：" + facebookRequestError.getErrorMessage());
//                    return;
//                }
//
//                JSONObject responseJsonObject = response.getJSONObject();
//                if (responseJsonObject == null) {
//                    Log.d(m_actTag,  "get facebook photo fail 3");
//                    return;
//                }
//                Log.d(m_actTag,  "facebook photo info:" + responseJsonObject.toString());
//                String avatarUrl = "";
//                try {
//                    JSONObject dataJsonObject = responseJsonObject.getJSONObject("data");
//                    avatarUrl = dataJsonObject.getString("url");
//                    //分割出参数部分
////                    String[] sourceStrArray = avatarUrl.split("\\?");
//                    avatarUrl = URLEncoder.encode(avatarUrl, "UTF-8");
//                    Log.d(m_actTag,  "facebook photo avatarUrl:" + avatarUrl);
//                    Map<String,String> map = new HashMap<String, String>();
//                    map.put("result", "12");
//                    map.put("info", "fb head success");
//                    map.put("head", avatarUrl);
//                    map.put("height", dataJsonObject.getString("height"));
//                    map.put("width", dataJsonObject.getString("width"));
//                    map.put("isSilhouette", dataJsonObject.getString("is_silhouette"));
//
//                    Native.nativeToLogic(m_facebookLoginCallBack,map);
//
//                } catch (Exception e) {
//
//                    Log.d(m_actTag,  "get facebook photo fail 4"+e.getStackTrace().toString());
//                }
//            }
//        }
//        );
//        Log.d(m_actTag,  "getFacebookUserPictureAsync version:"+graphRequest.getVersion()+"");
//        graphRequest.executeAsync();
//    }
//
//    public void initSDK( final Activity activity){
//
//        m_activity = activity;
//        m_callbackManager = CallbackManager.Factory.create();
//        Log.d("fb login","initSDK");
//        LoginManager.getInstance().registerCallback(m_callbackManager, new FacebookCallback<LoginResult>() {
//            @Override
//            public void onSuccess(LoginResult loginResult) {
//                Log.e(m_actTag, "facebook login success: " + loginResult.getAccessToken().getToken());
//                Map<String,String> map = new HashMap<String, String>();
//                map.put("result", "1");
//                map.put("info", "fb login success");
//                map.put("id", loginResult.getAccessToken().getUserId());
//                map.put("token", loginResult.getAccessToken().getToken());
//                map.put("app", loginResult.getAccessToken().getApplicationId());
//                Native.nativeToLogic(m_facebookLoginCallBack,map);
//                Log.d("fb login","success!!!!!");
//
//                //紧接着获取用户信息
//                getUserFacebookBasicInfo(map);
////                getFacebookUserPictureAsync(loginResult.getAccessToken().getUserId());
//            }
//
//            @Override
//            public void onCancel() {
//                Log.e(m_actTag, "facebook login cancel");
//                Map<String,String> map = new HashMap<String, String>();
//                map.put("result", "2");
//                map.put("info", "user cancel");
//                Log.d("user","cancel!!!!!");
//                Native.nativeToLogic(m_facebookLoginCallBack,map);
//            }
//
//            @Override
//            public void onError(FacebookException error) {
//                Log.e(m_actTag, "facebook login error:" + error.toString());
//                Map<String,String> map = new HashMap<String, String>();
//                map.put("result", "3");
//                map.put("info", error.toString());
//                Log.d("facebook login","error!!!!!");
//                Native.nativeToLogic(m_facebookLoginCallBack,map);
//            }
//        });
//    }
//}