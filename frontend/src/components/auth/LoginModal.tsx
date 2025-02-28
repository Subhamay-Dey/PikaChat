import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { signIn } from "next-auth/react";

const LoginModal = () => {

  const handleLocationSubmit = async (e:any) => {
    e.preventDefault();

    await signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Getting Started</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to PikaChat</DialogTitle>
          <DialogDescription>
            PikaChat makes it effortless to create secure chat links and start conversations in seconds.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Button className="w-full flex items-center justify-center gap-2" onClick={handleLocationSubmit}>
            <Image
              src="/images/google.png"
              width={25}
              height={25}
              alt="Continue with Google"
            />
            Continue with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;