
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options'
import DashNavbar from '@/components/dashboard/DashNavbar';
import CreateChat from '@/components/groupChat/CreateChat';

async function Dashboard() {

  const session:CustomSession|null = await getServerSession(authOptions);

  return (
    <div>
      {/* <p>{JSON.stringify(session)}</p> */}
      <DashNavbar
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
      <div className='flex justify-end mt-20'>
        <CreateChat user={session?.user!}/>
      </div>
    </div>
  )
}

export default Dashboard