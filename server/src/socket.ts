import { Server, Socket } from "socket.io";
import prisma from "./config/db.config.js";

interface CustomSocket extends Socket {
    room?: string;
    userId?: number;
}

interface DirectMessageData {
    senderId: number;
    receiverId: number;
    message: string;
}

export function setupSocket(io: Server) {

    io.use((socket:CustomSocket, next) => {
        const room = socket.handshake.auth.room || socket.handshake.headers.room;
        const userId = socket.handshake.auth.userId;
        if(!room && !userId) {
            return next(new Error("Invalid room"));
        }
        socket.room = room;
        socket.userId = userId;
        next();
    });

    io.on('connection', (socket: CustomSocket) => {

        if (socket.room) {
            socket.join(socket.room);
        } else if (socket.userId) {
            socket.join(`user-${socket.userId}`);
        }

        console.log('The socket connected..', socket.id);

        // Group Message
        socket.on("groupMessage", async (data) => {

            await prisma.chats.create({
                data: data
            })
            socket.to(socket.room).emit("groupMessage", data)
        });

        // Direct Message
        socket.on("directMessage", async (data: DirectMessageData) => {
            try {
                const chatData = await prisma.directMessage.create({
                  data: { 
                      senderId: data.senderId, 
                      receiverId: data.receiverId, 
                      message: data.message   
                  },
                  include: {
                      sender: {
                          select: {
                              name: true,
                              image: true
                          }
                      }
                  }
                });
                io.to(`user-${data.receiverId}`).emit("directMessage", chatData);
                socket.emit("error", "Failed to send message");
            } catch (error) {
                console.error("Error saving direct message:", error);
                socket.emit("error", "Failed to send message");
            }

        });

        socket.on("disconnect", () => {
            console.log("A user disconnected", socket.id);
        });
    });
}