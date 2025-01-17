import ChatBase from '@/components/chat/ChatBase';
import { fetchChatGroup, fetchChats } from '@/fetch/groupFetch';
import { fetchChatUsers } from '@/fetch/groupFetch';
import { notFound, useParams } from 'next/navigation';
import React from 'react'

async function chat() {

  const { id } = useParams() as { id: string }

  if(id?.length != 36) {
    return notFound();
  }
  
  const group:ChatGroupType | null = await fetchChatGroup(id)

  if(group == null) {
    return notFound();
  }

  const users:Array<GroupChatUserType> | [] = await fetchChatUsers(id)

  const chats: Array<MessageType> | [] = await fetchChats(id)

  return (
    <div>
      <ChatBase group={group} users={users} oldMessages={chats}/>
    </div>
  )
}

export default chat