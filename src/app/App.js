import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AuthState from "context/auth/authState"
import ProtectedRoute from "components/ProtectedRoute"
import Chat from "pages/private/Chat/Chat"
import Users from "pages/private/Users/Users"
import Login from "pages/public/Login/Login"
import Register from "pages/public/Register/Register"
import Header from "components/Header"
import "./App.css"

const path = process.env.NODE_ENV === "production" ? "/react-chat/" : "/"

const App = () => {
  return (
    <BrowserRouter>
      <AuthState>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path={path} component={Login}></Route>
            <Route path={`${path}register`} component={Register}></Route>
            <ProtectedRoute
              path={`${path}chat`}
              component={Chat}
            ></ProtectedRoute>
            <ProtectedRoute
              path={`${path}users`}
              component={Users}
            ></ProtectedRoute>
          </Switch>
        </div>
      </AuthState>
    </BrowserRouter>
  )
}

export default App
