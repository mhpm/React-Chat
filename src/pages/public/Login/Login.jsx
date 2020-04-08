import React, { useContext, useState } from "react"
import { Redirect, Link } from "react-router-dom"
import AuthContext from "context/auth/authContext"
import Input from "components/Input"
import Button from "components/Button"
import logo from "assets/logo.png"

const Login = () => {
  const { logUser, isLogged } = useContext(AuthContext)
  const [user, setUser] = useState("")

  const handlerLogin = async (e) => {
    e.preventDefault()
    if (user.length > 1) {
      await logUser(user)
    }
  }

  if (isLogged) {
    return <Redirect to="/chat" />
  } else {
    return (
      <>
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="row" style={{ marginBottom: 100 }}>
            <div className="col-md text-center">
              <img src={logo} width={120} alt="logo" />
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <form onSubmit={(e) => handlerLogin(e)} style={{ width: 400 }}>
                <div className="form-group">
                  <Input
                    type="text"
                    value={user}
                    placeholder="Type your user..."
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <Button primary>Login</Button>
                </div>
              </form>
            </div>
          </div>
          <Link to="/register" className="pt-3 text-secondary">
            Don't have an account? Register.
          </Link>
        </div>
      </>
    )
  }
}

export default Login
