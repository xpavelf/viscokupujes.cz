#!/bin/bash

function _getXWalkVersion {
  grep -Po '(?<="xwalk_app_version": ")[^"]*' $1
}

function frontend {
  pushd client
  npm i
  npm run build
  popd
}

function apk {
  mkdir apk
  local version=$(_getXWalkVersion ./www/manifest.json)
  pushd apk
  crosswalk-pkg --release --targets="armeabi-v7a" ../www
  zipalign -f 4 cz.viscokupujes.mnamka-${version}-release-unsigned.armeabi-v7a.apk cz.viscokupujes.mnamka-${version}-release-unsigned.aligned.armeabi-v7a.apk
  apksigner.bat sign --ks ../../keys/my-release-key.jks --out cz.viscokupujes.mnamka-${version}.armeabi-v7a.apk cz.viscokupujes.mnamka-${version}-release-unsigned.aligned.armeabi-v7a.apk
  popd
}

function phone {
  local version=$(_getXWalkVersion ./www/manifest.json)
  pushd apk
  adb uninstall cz.viscokupujes.mnamka
  adb install -r cz.viscokupujes.mnamka-${version}.armeabi-v7a.apk
  adb shell monkey -p cz.viscokupujes.mnamka -c android.intent.category.LAUNCHER 1
  popd
}

eval "$@"
