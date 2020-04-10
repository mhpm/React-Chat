import React, { useReducer } from "react"
import axios from "axios"
import AuthContext from "./authContext"
import AuthReducer from "./authReducer"
import { SET_LOADING, LOG_USER, LOG_OUT } from "../types"

const AuthState = (props) => {
  const initialState = {
    token: null,
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  // login user
  const logUser = (name) => {
    let number = Math.floor(Math.random() * 10) + 1
    setLoading()
    axios.get(`https://reqres.in/api/users/${number}`).then((res) => {
      let user = { ...res.data.data }
      user.first_name = name.charAt(0).toUpperCase() + name.slice(1)
      dispatch({ type: LOG_USER, user: user })
    })
  }

  const logOut = () => dispatch({ type: LOG_OUT })

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        logUser,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
