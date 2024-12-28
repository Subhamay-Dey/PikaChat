import {Server} from "socket.io"

export function setupSocket(io:Server) {
    io.on('connection', (socket) => {
        console.log('The socket is connected..', socket.id);

        socket.on("message", (data) => {
            console.log("Server side message", data);
            socket.broadcast.emit("messsage", data);
        })

        socket.on("disconnect", () => {
            console.log("Client disconnected", socket.id);
        })
    })
}