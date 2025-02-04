"use client";
import React from "react";
import LoginComponent from "../common/Search";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";

function SearchUserCards({ users }: { users: any }) {
  const [showLogin, setShowLogin] = React.useState(false);

  const { data: session } = useSession();

  const handleClick = () => {
    if (!session) {
      setShowLogin(true);
    }
  };

  return (
    <div className="mt-10">
      {users.length > 0 ? (
        <div className="space-y-4">
          {users.map((user: any) => {
            const formattedDate = new Date(user.created_at).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );
            return (
              <div key={user.id} className="bg-white p-4 rounded shadow-md">
                <div>Name: {user.name}</div>
                <div>Email: {user.email}</div>
                <div>City: {user.city}</div>
                <div>State: {user.state}</div>
                <div>Nationality: {user.nationality}</div>
                <div>Started: {formattedDate}</div>
                <Button onClick={handleClick} className="w-full">Chat</Button>
              </div>
            );
          })}
        </div>
      ) : (
        <p></p>
      )}
      <LoginComponent open={showLogin} setOpen={setShowLogin} />
    </div>
  );
}

export default SearchUserCards;
