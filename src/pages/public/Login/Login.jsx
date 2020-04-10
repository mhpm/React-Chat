import React, { useContext, useState } from "react"
import { Redirect, Link } from "react-router-dom"
import AuthContext from "context/auth/authContext"
import Input from "components/Input"
import Button from "components/Button"
import logo from "assets/logo.png"

const Login = () => {
  const { logUser, isAuthenticated } = useContext(AuthContext)
  const [user, setUser] = useState("")

  const handlerLogin = async (e) => {
    e.preventDefault()
    if (user.length > 1) {
      await logUser(user)
    }
  }

  if (isAuthenticated) {
    return <Redirect to="/chat" />
  } else {
    return (
      <>
        <div
          className="d-flex flex-column justify-content-center"
          style={{ height: 90 + "vh" }}
        >
          <div className="row" style={{ marginBottom: 70 }}>
            <div className="col-md text-center">
              <img src={logo} width={120} alt="logo" />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-sm-12">
              <form onSubmit={(e) => handlerLogin(e)}>
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
          <div className="row">
            <div className="col-md text-center mt-4">
              <Link to="/register" className="text-secondary">
                Don't have an account? Register.
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Login
