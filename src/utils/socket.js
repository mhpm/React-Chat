import socketIOClient from "socket.io-client"

const host = "https://chateam-server.herokuapp.com/"

const socket = socketIOClient(`${host}`)

socket.on("welcome", (message) => console.log(message))

export default socket
