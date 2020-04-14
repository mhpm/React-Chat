import React from "react"
import { Route, Switch } from "react-router-dom"
import AuthState from "context/auth/authState"
import ProtectedRoute from "components/ProtectedRoute"
import Chat from "pages/private/Chat/Chat"
import Users from "pages/private/Users/Users"
import Login from "pages/public/Login/Login"
import Register from "pages/public/Register/Register"
import Header from "components/Header"
import "./App.css"

const App = () => {
  return (
    <AuthState>
      <Header />
      <div className="container">
        <Switch>
          <Route
            exact
            path={process.env.NODE_ENV === "production" ? "/react-chat/" : "/"}
            component={Login}
          ></Route>
          <Route path="/register" component={Register}></Route>
          <ProtectedRoute path="/chat" component={Chat}></ProtectedRoute>
          <ProtectedRoute path="/users" component={Users}></ProtectedRoute>
        </Switch>
      </div>
    </AuthState>
  )
}

export default App
