import {Server} from "socket.io"

export function setupSocket(io:Server) {
    io.on('connection', (socket) => {
        console.log('The socket is connected..', socket.id);

        socket.on("disconnect", () => {
            console.log("Client disconnected", socket.id);
        })
    })
}