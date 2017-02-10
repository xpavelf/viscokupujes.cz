const SEARCH_HISTORY = "SEARCH_HISTORY"

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(SEARCH_HISTORY)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(SEARCH_HISTORY, serializedState)
  } catch (err) {
    // ignore
  }
}
