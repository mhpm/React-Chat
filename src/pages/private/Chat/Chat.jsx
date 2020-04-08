import React, { useState, useEffect, useContext } from "react"
import AuthContext from "context/auth/authContext"
import { Redirect } from "react-router-dom"
import { animateScroll } from "react-scroll"
import socket from "utils/socket"
import styled from "styled-components"
import Message from "./components/Message"
import Input from "components/Input"
import Button from "components/Button"

const Display = styled.div`
  width: 100%;
  height: 800px;
  padding: 30px;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`

const Chat = () => {
  const { user, isLogged } = useContext(AuthContext)
  const [message, setMessage] = useState("")
  const [list, setList] = useState([])

  useEffect(() => {
    socket.on("message", (message) => {
      setList((oldArray) => [...oldArray, { ...message }])
      scrollToBottom()
    })
  }, [])

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "display",
    })
  }

  const sendMessage = (e) => {
    e.preventDefault()
    if (message.length > 0) {
      socket.emit("chatMessage", user, message)
      setMessage("")
    }
  }

  if (!isLogged) {
    return (
      <Redirect
        to={process.env.NODE_ENV === "production" ? "/react-chat/" : "/"}
      />
    )
  } else {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center w-100">
        <div className="row" style={{ width: 100 + "%" }}>
          <div className="col-md">
            <div className="row">
              <div className="col-md">
                <Display id="display">
                  <Message list={list} />
                </Display>
              </div>
            </div>
            <form onSubmit={sendMessage} className="pt-4">
              <div className="row">
                <div className="col-md-10 col-sm-10">
                  <div className="form-group">
                    <Input
                      type="text"
                      value={message}
                      placeholder="Type message..."
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col">
                  <Button primary>
                    <i className="fas fa-paper-plane fa-sm"></i>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat
