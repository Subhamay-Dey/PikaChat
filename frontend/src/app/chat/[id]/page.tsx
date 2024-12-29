import ChatBase from '@/components/chat/ChatBase';
import React from 'react'

async function chat({params}:{params:{id:string}}) {

    const { id } = await params;
    
    console.log("The chat group id is:", params.id);
    
  return (
    <div>
        <h1>Hello, I am Chat</h1>
        <ChatBase/>
    </div>
  )
}

export default chat