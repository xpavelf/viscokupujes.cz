const ADMOB_PLUGIN_NAME = 'cordova-plugin-admob-free'
const SRC_PATH = __dirname + '/platforms/android/src/name/ratson/cordova/admob'
const TARGET_PATH = __dirname + '/platforms/android/app/src/main/java/name/ratson/cordova/admob'
const exec = require('child_process').exec

// Workaround due admob-free plugin compatibility problem with cordova android 7
// https://forum.ionicframework.com/t/admobfree-error/116011/6
// https://github.com/ratson/cordova-plugin-admob-free/issues/143

module.exports = (ctx) => {
  if (ctx.opts.cordova.plugins.indexOf(ADMOB_PLUGIN_NAME) !== -1) {
    let p = new Promise((resolve, reject) => {
      exec(`mv ${SRC_PATH}/* ${TARGET_PATH}/ 2>/dev/null; true`, (err, stdout, stderr) => {
        console.log('__fix-admob-plugin-hook: DONE')
        resolve()
      })
    })
    return p
  }
}
