const SCANNER_CONFIG = {
  preferFrontCamera : false, // iOS and Android
  showFlipCameraButton : true, // iOS and Android
  showTorchButton : true, // iOS and Android
  torchOn: false, // Android, launch with the torch switched on (if available)
  prompt : "Naskenujte čárový kód výrobku", // Android
  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
  formats : "EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
  disableAnimations : true, // iOS
  disableSuccessBeep: false // iOS
}

export default () => {
  return new Promise((resolve, reject) => {
    if (cordova && cordova.plugins && cordova.plugins.barcodeScanner) {
      window.cordova.plugins.barcodeScanner.scan(
        result => resolve(result.text),
        err => reject("BarcodeScanner failed."),
        SCANNER_CONFIG
      )
    } else {
      reject(new Error("BarcodeScanner plugin is not present."))
    }
  })
}
