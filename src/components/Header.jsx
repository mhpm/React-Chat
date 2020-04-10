import React, { useContext } from "react"
import Button from "components/Button"
import AuthContext from "../context/auth/authContext"
import logo from "assets/logo.png"

const Header = () => {
  const { isAuthenticated, logOut, user } = useContext(AuthContext)

  if (isAuthenticated)
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#!">
          <img src={logo} width={25} alt="logo" className="ml-3" />
        </a>
        <div className="row">
          <div className="col-md col-sm-3 text-right align-self-center d-none d-sm-block">
            <span className="text-secondary">{user.first_name}</span>
          </div>
          <div className="col-md col-sm">
            <Button
              dark
              onClick={logOut}
              className="my-2 my-sm-0"
              style={{ height: 40, width: 120 }}
            >
              Sing out
            </Button>
          </div>
        </div>
      </nav>
    )
  else return null
}

export default Header
