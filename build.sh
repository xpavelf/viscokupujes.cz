#!/bin/bash

XWALK_PLUGIN_NAME=cordova-plugin-crosswalk-webview
APP_ID=cz.viscokupujes.mnamka

function _isPluginInstalled {
  cordova plugin ls | grep "$1"
}

function _getApkVersion {
  grep -Po '(?<=android-versionCode=")[^"]*' $1
}

function frontend {
  pushd client
  npm i
  npm run build
  popd
}

function releaseOld {
  cordova plugin add cordova-plugin-crosswalk-webview
  _release
}

function releaseNew {
  cordova plugin remove cordova-plugin-crosswalk-webview
  _release
}

function _release {
  local ver=$(_getApkVersion ./config.xml)
  local version=${ver}

  rm -rf platforms/android/build/outputs/apk/*
  if (_isPluginInstalled $XWALK_PLUGIN_NAME) ; then
    cordova build android --release
    version=${ver}-xwalk
    mv platforms/android/build/outputs/apk/android-armv7-release-unsigned.apk platforms/android/build/outputs/apk/android-release-unsigned.apk
  else
    version=${ver}4
    cordova build android --release -- --minSdkVersion=21 --versionCode=${version}
  fi

  pushd platforms/android/build/outputs/apk
  zipalign -f 4 android-release-unsigned.apk "${APP_ID}-${version}-unsigned.aligned.apk"
  apksigner.bat sign --ks /d/dev/keys/my-release-key.jks --out "${APP_ID}-${version}.apk" "${APP_ID}-${version}-unsigned.aligned.apk"
  popd
  mv "platforms/android/build/outputs/apk/${APP_ID}-${version}.apk" apk/

}

function test {
  cordova build android
  if (_isPluginInstalled $XWALK_PLUGIN_NAME) ; then
    adb install -r platforms/android/build/outputs/apk/android-armv7-debug.apk
  else
    adb install -r platforms/android/build/outputs/apk/android-debug.apk
  fi
  adb shell monkey -p ${APP_ID} -c android.intent.category.LAUNCHER 1
}

set -e
eval "$@"
