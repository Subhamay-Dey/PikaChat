import ChatBase from '@/components/chat/ChatBase';
import { fetchChatGroup } from '@/fetch/groupFetch';
import React from 'react'

async function chat({params}:{params:{id:string}}) {

  return (
    <div>
        <h1>Hello, I am Chat</h1>
        <ChatBase groupId={params.id}/>
    </div>
  )
}

export default chat