import socketIOClient from "socket.io-client"

const host =
  process.env.NODE_ENV === "development" ? "http://localhost" : "github"
const socket = socketIOClient(`${host}:4001`)

socket.on("welcome", message => console.log(message))

export default socket
