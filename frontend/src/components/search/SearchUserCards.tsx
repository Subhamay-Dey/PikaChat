import { CustomUser } from '@/app/api/auth/[...nextauth]/options'
import { PinContainer } from "@/components/ui/3d-pin";
import React from 'react'

function SearchUserCards({users}:{users:any}) {
  return (
          <div className="mt-10">
          {users.length > 0 ? (
            <div className="space-y-4">
              {users.map((user: any) => {
                const formattedDate = new Date(user.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
    
                return (
                  <div key={user.id} className="h-[25rem] w-full flex items-center justify-center">
                    <PinContainer
                      title={`Chat`}
                      href={`mailto:${user.email}`}
                    >
                      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                          {user.name}
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                          <span className="text-slate-500">
                            Email: {user.email}
                          </span>
                        </div>
                        <div className="text-base !m-0 !p-0 font-normal">
                          <span className="text-slate-500">
                            City: {user.city}, {user.state}
                          </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                      </div>
                    </PinContainer>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No users found</p>
          )}
        </div>
  )
}

export default SearchUserCards