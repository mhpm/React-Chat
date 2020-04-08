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

const App = () => {
  return (
    <BrowserRouter>
      <AuthState>
        <Header />
        <div className="container" style={{ height: 100 + "vh" }}>
          <Switch>
            <Route
              exact
              path={
                process.env.NODE_ENV === "production" ? "/react-chat/" : "/"
              }
              component={Login}
            ></Route>
            <Route path="/register" component={Register}></Route>
            <ProtectedRoute path="/chat" component={Chat}></ProtectedRoute>
            <ProtectedRoute path="/users" component={Users}></ProtectedRoute>
          </Switch>
        </div>
      </AuthState>
    </BrowserRouter>
  )
}

export default App
