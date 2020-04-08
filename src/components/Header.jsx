import React, { useContext } from "react"
import Button from "components/Button"
import AuthContext from "../context/auth/authContext"
import logo from "assets/logo.png"

const Header = () => {
  const { isLogged, logOut, user } = useContext(AuthContext)

  if (isLogged)
    return (
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#!">
          <img src={logo} width={25} alt="" srcset="" className="ml-3" />
        </a>
        <div class="row" style={{ width: 300 }}>
          <div className="col-md-6 text-right align-self-center">
            <span className="text-secondary">{user.first_name}</span>
          </div>
          <div className="col-md">
            <Button
              dark
              onClick={logOut}
              class="my-2 my-sm-0"
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
