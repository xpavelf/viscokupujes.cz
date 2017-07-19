export const SHOW_MESSAGE = "SHOW_MESSAGE"

export function showMessage(msg) {
  return ({
    type: SHOW_MESSAGE,
    payload: {
      ...msg,
      utc: Date.now()
    }
  })
}
