"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../common/UserAvatar";

function ProfileMenu({name, image}:{name:string, image?:string}) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar name={name} image={image}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="cursor-pointer">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default ProfileMenu;
