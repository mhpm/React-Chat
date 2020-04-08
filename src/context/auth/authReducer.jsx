import { SET_LOADING, LOG_USER, LOG_OUT } from "../types"

export default (state, action) => {
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        user: action.user,
        isLogged: true,
        loading: false,
      }
    case LOG_OUT:
      return {
        ...state,
        user: {},
        isLogged: false,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
