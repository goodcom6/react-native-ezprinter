package com.goodcom.react.EzPrinter;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Environment;
import android.util.Base64;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;
import com.goodcom.gcprinter.GcPrinterHelper;

public class EzPrinterModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    public EzPrinterModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "EzPrinter";
    }

    @ReactMethod
    public void printText(boolean isAutoFeed) {
        GcPrinterHelper.getInstance().printText(reactContext, isAutoFeed);
    }

    @ReactMethod
    public void drawText(String strLeft, int fontLeft, String strMid, int fontMid, String strRight, int fontRight) {
        GcPrinterHelper.getInstance().drawText(strLeft, fontLeft, strMid, fontMid, strRight, fontRight);
    }

    @ReactMethod
    public void drawLeftRight(String strLeft, int fontLeft, String strRight, int fontRight) {
        GcPrinterHelper.getInstance().drawLeftRight(strLeft, fontLeft, strRight, fontRight);
    }

    @ReactMethod
    public void drawCustom(String string, int fontSize, int align) {
        GcPrinterHelper.getInstance().drawCustom(string, fontSize, align);
    }

    @ReactMethod
    public void drawNewLine() {
        GcPrinterHelper.getInstance().drawNewLine();
    }

    @ReactMethod
    public void drawOneLine(int fontSize) {
        GcPrinterHelper.getInstance().drawOneLine(fontSize);
    }

    @ReactMethod
    public void drawOneLineDefault() {
        GcPrinterHelper.getInstance().drawOneLine();
    }

    @ReactMethod
    public void drawBarcode(String string, int align, int type) {
        GcPrinterHelper.getInstance().drawBarcode(string, align, type);
    }

    @ReactMethod
    public void drawBarcodeWithHeight(String string, int align, int type, int height) {
        GcPrinterHelper.getInstance().drawBarcode(string, align, type, height);
    }
    @ReactMethod
    public void drawQrCode(String string, int align) {
        GcPrinterHelper.getInstance().drawBarcode(string, align, GcPrinterHelper.getInstance().barcodeQrCode);
    }
    @ReactMethod
    public void drawQrCodeWithHeight(String string, int align, int height) {
        GcPrinterHelper.getInstance().drawBarcode(string, align, GcPrinterHelper.getInstance().barcodeQrCode, height);
    }
    @ReactMethod
    public void isDeviceSupport(Promise promise) {
        if (GcPrinterHelper.getInstance().isDeviceSupport()) {
            promise.resolve("true");
        } else {
            promise.resolve("false");
        }
    }
    @ReactMethod
    public void printBitmap(Bitmap bitmap, int align, Boolean isAutoFeed) {
        GcPrinterHelper.getInstance().printBitmap(reactContext, bitmap, align, isAutoFeed);
    }

    @ReactMethod
    public void printImageByBase64(String base64, int align, Boolean isAutoFeed){
        byte[] decodedBytes = Base64.decode(base64.split(",")[1], Base64.DEFAULT);
        Bitmap bitmap = BitmapFactory.decodeByteArray(decodedBytes, 0, decodedBytes.length);
        GcPrinterHelper.getInstance().printBitmap(reactContext, bitmap, align, isAutoFeed);
    }

    @ReactMethod
    public void printImageByArray(ReadableArray byteArray, int align, Boolean isAutoFeed){
        byte[] bytes = new byte[byteArray.size()];
        for (int i = 0; i < byteArray.size(); i++) {
            bytes[i] = (byte) byteArray.getInt(i);
        }
        Bitmap bitmap = BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
        GcPrinterHelper.getInstance().printBitmap(reactContext, bitmap, align, isAutoFeed);
    }

    @ReactMethod
    public void printJson(String json) {
        GcPrinterHelper.getInstance().printJson(reactContext, json);
    }
    @ReactMethod
    public void openCashBox(){
        GcPrinterHelper.getInstance().openCashBox(reactContext);
    }
    @ReactMethod
    public void showLcdBitmapByBase64(String base64){
        byte[] decodedBytes = Base64.decode(base64.split(",")[1], Base64.DEFAULT);
        Bitmap bitmap = BitmapFactory.decodeByteArray(decodedBytes, 0, decodedBytes.length);
        GcPrinterHelper.getInstance().showLcdBitmap(reactContext,bitmap);
    }
    @ReactMethod
    public void showLcdBitmapByArray(ReadableArray byteArray){
        byte[] bytes = new byte[byteArray.size()];
        for (int i = 0; i < byteArray.size(); i++) {
            bytes[i] = (byte) byteArray.getInt(i);
        }
        Bitmap bitmap = BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
        GcPrinterHelper.getInstance().showLcdBitmap(reactContext,bitmap);
    }

}
