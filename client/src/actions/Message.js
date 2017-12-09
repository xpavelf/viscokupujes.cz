export const SHOW_MESSAGE = "SHOW_MESSAGE"

export const ERROR_MESSAGE = {
  title: "Došlo k chybě",
  text: "Zkontrolujte zda není Vaše zařízení offline."
}

export function showMessage(msg) {
  return ({
    type: SHOW_MESSAGE,
    payload: {
      ...msg,
      utc: Date.now()
    }
  })
}
