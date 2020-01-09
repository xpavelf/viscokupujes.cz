#!/bin/bash
set +x

APP_ID=cz.viscokupujes.mnamka
OUT_APK_FOLDER=platforms/android/app/build/outputs/apk

function _getApkVersion {
  grep -Po '(?<=android-versionCode=")[^"]*' $1
}

function release {
  local ver=$(_getApkVersion ./config.xml)
  local version=${ver}

  echo "Building apk (version: ${version})"

  cordova build android --release
  mv ${OUT_APK_FOLDER}/release/app-release-unsigned.apk ${OUT_APK_FOLDER}/app-release-unsigned.apk
  pushd ${OUT_APK_FOLDER}
  zipalign -f 4 app-release-unsigned.apk "${APP_ID}-${version}-unsigned.aligned.apk"
  apksigner sign --ks /keys/my-release-key.jks --out "${APP_ID}-${version}.apk" "${APP_ID}-${version}-unsigned.aligned.apk"

  echo "Finished: ${OUT_APK_FOLDER}/${APP_ID}-${version}.apk"
}

set -e
eval "$@"