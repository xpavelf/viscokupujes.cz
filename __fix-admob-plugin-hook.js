const ADMOB_PLUGIN_NAME = 'cordova-plugin-admob-free'
const SRC_PATH = '/platforms/android/src/name/ratson/cordova/admob'
const TARGET_PATH = '/platforms/android/app/src/main/java/name/ratson/cordova/admob'
const exec = require('child_process').exec

// Workaround due admob-free plugin compatibility problem with cordova android 7
// https://forum.ionicframework.com/t/admobfree-error/116011/6
// https://github.com/ratson/cordova-plugin-admob-free/issues/143

const getDirName = () => {
  const p = new Promise((resolve, reject) => {
    exec('uname -s', (err, stdout, stderr) => {
      if (err) reject(err)

      if (stdout.indexOf('MINGW') !== -1) {
        exec('cygpath -u -a .', (err, stdout, stderr) => {
          if (err) reject(err)
          resolve(stdout.slice(0, stdout.length - 2))
        })
      } else {
        resolve(__dirname)
      }
    })
  })

  return p
}



module.exports = (ctx) => {
  if (ctx.opts.cordova.plugins.indexOf(ADMOB_PLUGIN_NAME) !== -1) {
    let p = new Promise((resolve, reject) => {
      getDirName().then(dirname => {
        exec(`mv ${dirname}${SRC_PATH}/* ${dirname}${TARGET_PATH}/ 2>/dev/null; true`, (err, stdout, stderr) => {
          console.log('__fix-admob-plugin-hook: DONE')
          resolve()
        })
      }).catch(err => reject(err))
    })

    return p
  }
}
