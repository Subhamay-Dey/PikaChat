
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options'
import DashNavbar from '@/components/dashboard/DashNavbar';
import CreateChat from '@/components/groupChat/CreateChat';
import { fetchChatGroups } from '@/groupfetch/groupFetch';

async function Dashboard() {

  const session:CustomSession|null = await getServerSession(authOptions);

  const groups:Array<ChatGroupType> | [] = await fetchChatGroups(session?.user?.token!)

  console.log("The fetched groups are:", groups);

  return (
    <div>
      {/* <p>{JSON.stringify(session)}</p> */}
      <DashNavbar
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
      <div className='container'>
        <div className='flex justify-end mt-20'>
          <CreateChat user={session?.user!}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard