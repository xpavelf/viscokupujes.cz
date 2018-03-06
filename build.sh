#!/bin/bash

XWALK_PLUGIN_NAME=cordova-plugin-crosswalk-webview
APP_ID=cz.viscokupujes.mnamka
OUT_APK_FOLDER=platforms/android/app/build/outputs/apk

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

  rm -rf ${OUT_APK_FOLDER}/*
  if (_isPluginInstalled $XWALK_PLUGIN_NAME) ; then
    version=${ver}-xwalk
    cordova build android --release -- --gradleArg=-PcdvBuildMultipleApks=true --gradleArg=-PcdvBuildArch=arm
    mv ${OUT_APK_FOLDER}/armv7/release/app-armv7-release-unsigned.apk ${OUT_APK_FOLDER}/app-release-unsigned.apk
  else
    version=${ver}4
    cordova build android --release --gradleArg=-PcdvMinSdkVersion=22 -- --versionCode=${version}
    mv ${OUT_APK_FOLDER}/release/app-release-unsigned.apk ${OUT_APK_FOLDER}/app-release-unsigned.apk
  fi

  pushd ${OUT_APK_FOLDER}
  zipalign -f 4 app-release-unsigned.apk "${APP_ID}-${version}-unsigned.aligned.apk"
  apksigner.bat sign --ks /d/dev/keys/my-release-key.jks --out "${APP_ID}-${version}.apk" "${APP_ID}-${version}-unsigned.aligned.apk"
  popd
  mv "${OUT_APK_FOLDER}/${APP_ID}-${version}.apk" apk/

}

function test {
  cordova build android
  if (_isPluginInstalled $XWALK_PLUGIN_NAME) ; then
    adb install -r ${OUT_APK_FOLDER}/debug/app-debug.apk
  else
    adb install -r ${OUT_APK_FOLDER}/debug/app-debug.apk
  fi
  adb shell monkey -p ${APP_ID} -c android.intent.category.LAUNCHER 1
}

set -e
eval "$@"
