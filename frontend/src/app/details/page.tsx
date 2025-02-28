import Details from '@/components/details/Details'
import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

async function page() {

    const session:CustomSession|null = await getServerSession(authOptions);

    console.log("Session Object:", session);
    console.log("Session Token:", session?.user?.token);

    if (!session?.user?.token) {
      console.error("No token found in session");
    }
  
  return (
    <div>
      <Details user={{ token: session?.user?.token }}/>
    </div>
  )
}

export default page