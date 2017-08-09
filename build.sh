#!/bin/bash

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
  local version=$(_getApkVersion ./config.xml)
  rm -rf platforms/android/build/outputs/apk/*
  cordova build android --release
  pushd platforms/android/build/outputs/apk
  zipalign -f 4 android-armv7-release-unsigned.apk cz.viscokupujes.mnamka-${version}-unsigned.aligned-armv7.apk
  apksigner.bat sign --ks /d/dev/keys/my-release-key.jks --out cz.viscokupujes.mnamka-${version}-xwalk.apk cz.viscokupujes.mnamka-${version}-unsigned.aligned-armv7.apk
  popd
  mv platforms/android/build/outputs/apk/cz.viscokupujes.mnamka-${version}-xwalk.apk apk/
}

function releaseNew {
  cordova plugin remove cordova-plugin-crosswalk-webview
  local version=$(_getApkVersion ./config.xml)
  rm -rf platforms/android/build/outputs/apk/*
  cordova build android --release -- --minSdkVersion=21
  pushd platforms/android/build/outputs/apk
  zipalign -f 4 android-release-unsigned.apk cz.viscokupujes.mnamka-${version}-unsigned.aligned.apk
  apksigner.bat sign --ks /d/dev/keys/my-release-key.jks --out cz.viscokupujes.mnamka-${version}.apk cz.viscokupujes.mnamka-${version}-unsigned.aligned.apk
  popd
  mv platforms/android/build/outputs/apk/cz.viscokupujes.mnamka-${version}.apk apk/
}


function test {
  cordova build android
  adb install -r platforms/android/build/outputs/apk/android-debug.apk
  adb shell monkey -p cz.viscokupujes.mnamka -c android.intent.category.LAUNCHER 1
}

set -e
eval "$@"
