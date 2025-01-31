import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import Image from 'next/image';
import { signIn } from "next-auth/react";

const LoginModal = () => {
  
  const [city, setCityStat] = useState('');
  const [state, setStateState] = useState('');
  const [nationality, setNationalityState] = useState('');

  const handleLocationSubmit = async (e:any) => {
    e.preventDefault();

    await signIn("google", {
      callbackUrl: "/",
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
            Please provide your location details to continue.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="city">City/Town Name *</Label>
            <Input
              id="city"
              required
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCityState(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State Name</Label>
            <Input
              id="state"
              placeholder="Enter your state"
              value={state}
              onChange={(e) => setStateState(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nationality">Nationality *</Label>
            <Input
              id="nationality"
              required
              placeholder="Enter your nationality"
              value={nationality}
              onChange={(e) => setNationalityState(e.target.value)}
            />
          </div>

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