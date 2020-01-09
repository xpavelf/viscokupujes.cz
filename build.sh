#!/bin/bash
set +x

APP_ID=cz.viscokupujes.mnamka
OUT_APK_FOLDER=cordova/platforms/android/app/build/outputs/apk

function frontend {
  echo "Building frontend (mode: ${ENV_APP_MODE})"
  pushd client
  npm i
  npm run build
  popd
}


function test {
  cordova build android
  adb install -r ${OUT_APK_FOLDER}/debug/app-debug.apk
  adb shell monkey -p ${APP_ID} -c android.intent.category.LAUNCHER 1
}

set -e
eval "$@"
