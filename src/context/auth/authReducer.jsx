import { SET_LOADING, LOG_USER, LOG_OUT } from "../types"

export default (state, action) => {
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
        loading: false,
      }
    case LOG_OUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
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
