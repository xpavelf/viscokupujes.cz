export const SAVE_ALERT = 'SAVE_ALERT'

export function saveAlert(alert) {
  return ({
    type: SAVE_ALERT,
    payload: alert
  })
}
