"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../ui/button'
import Image from 'next/image'
  

function LoginModal() {
  return (
    <div>
    <Dialog>
        <DialogTrigger asChild>
            <Button>Getting Start</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle className='text-2xl'>Welcome to PikaChat</DialogTitle>
            <DialogDescription>
                PikaChat makes it effortless to create secure chat links and start conversations in seconds.
            </DialogDescription>
            </DialogHeader>
            <Button variant={"outline"}>
                <Image
                    src={"/images.google.png"}
                    className='mr-4'
                    width={25}
                    height={25}
                    alt='google_logo'
                >
                    Continue with Google
                </Image>
            </Button>
        </DialogContent>
    </Dialog>

    </div>
  )
}

export default LoginModal