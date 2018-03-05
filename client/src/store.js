import { createStore, applyMiddleware } from "redux"
import promise from "redux-promise-middleware"
import thunk from "redux-thunk"
import reducer, { INITIAL_STATE } from "./reducers"
import { loadState, saveState } from "./localStorage"
import throttle from "lodash/throttle"

const middleware = applyMiddleware(promise(), thunk)

const persistedState = loadState()
const state = Object.assign({}, INITIAL_STATE, persistedState)

const store = createStore(reducer, state, middleware)

store.subscribe(throttle(() => {
  const state = store.getState()
  saveState({
    searchHistory: state.searchHistory,
    alert: state.alert
  })
}, 1000, { leading: false }))

export default store
