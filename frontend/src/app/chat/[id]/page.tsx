import ChatNavbar from '@/components/chats/ChatBase';
import React from 'react'

function chats({params}:{params:{id:string}}) {

    console.log("The chat group id is:", params.id);
    
  return (
    <div>
        <h1>Hello, I am Chat</h1>
        <ChatNavbar/>
    </div>
  )
}

export default chats