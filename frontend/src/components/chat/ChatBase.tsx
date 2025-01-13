"use client"

import { getSocket } from '@/lib/socket.config'
import React, {useEffect, useMemo} from 'react'
import {v4 as uuidV4} from 'uuid'
import { Button } from '../ui/button'

export default function ChatBase({groupId}:{groupId:string}) {

    let socket = useMemo(() => {
        const socket = getSocket();
        socket.auth = {
            room: groupId,
        }
        return socket.connect();
    }, []);

    useEffect(() => {

        socket.on('message', (data:any) => {
            console.log("The socket message is:", data);
        })

        return () => {
            socket.close();
        }
    },[])

    const handleClick = () => {
        socket.emit("message", {name:"Subho", id:uuidV4()});
    }

  return (
    <div>

    </div>
  )
}