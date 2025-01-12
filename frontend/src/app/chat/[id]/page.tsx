import ChatBase from '@/components/chat/ChatBase';
import { fetchChatGroup } from '@/fetch/groupFetch';
import { notFound } from 'next/navigation';
import React from 'react'

async function chat({params}:{params:{id:string}}) {

  if(params.id.length != 36) {
    return notFound();
  }
  
  const group:ChatGroupType | null = await fetchChatGroup(params.id)

  if(group == null) {
    return notFound();
  }

  return (
    <div>
      <ChatBase groupId={params.id}/>
    </div>
  )
}

export default chat