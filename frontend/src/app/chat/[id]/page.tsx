import ChatBase from '@/components/chats/ChatBase';
import React from 'react'

async function chat({params}:{params:{id:string}}) {

    const { id } = await params;  // Ensure params are awaited

    console.log("The chat group id is:", params.id);
    
  return (
    <div>
        <h1>Hello, I am Chat</h1>
        <ChatBase/>
    </div>
  )
}

export default chat