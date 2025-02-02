import Details from '@/components/details/Details'
import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

async function page() {

    const session:CustomSession|null = await getServerSession(authOptions);
  
  return (
    <div>
      <Details user={session?.user?.token!}/>
    </div>
  )
}

export default page