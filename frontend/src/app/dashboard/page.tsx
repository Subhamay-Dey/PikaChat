import DashNavbar from '@/components/dashboard/dashNavbar'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options'

async function Dashboard() {

  const session:CustomSession|null = await getServerSession(authOptions);

  return (
    <div>
      <DashNavbar
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
    </div>
  )
}

export default Dashboard