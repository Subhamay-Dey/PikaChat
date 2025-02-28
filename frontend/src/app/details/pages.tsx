import React, { useState } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

function Details() {

    const [city, setCityState] = useState('');
    const [state, setStateState] = useState('');
    const [nationality, setNationalityState] = useState('');

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

        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Details