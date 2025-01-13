import ChatBase from '@/components/chat/ChatBase';
import { fetchChatGroup } from '@/fetch/groupFetch';
import { fetchChatUsers } from '@/fetch/groupUserFetch';
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

  const users:Array<GroupChatUserType> | [] = await fetchChatUsers(params.id)

  return (
    <div>
      <ChatBase groupId={params.id}/>
    </div>
  )
}

export default chat