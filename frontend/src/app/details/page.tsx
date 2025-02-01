"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UserLocation from "@/location/userLocation";
import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Details() {

  const [city, setCityState] = useState("");
  const [state, setStateState] = useState("");
  const [nationality, setNationalityState] = useState("");

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-[450px] h-[480px]">
      <CardHeader>
        <CardTitle className="text-[26px]">Add your details</CardTitle>
        <CardDescription>Add your city, state and nationality.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center py-4 gap-6">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="city">City/Town Name</Label>
              <Input
                id="city"
                required
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCityState(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="state">State Name</Label>
              <Input
                id="state"
                required
                placeholder="Enter your state"
                value={state}
                onChange={(e) => setStateState(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                required
                placeholder="Enter your nationality"
                value={nationality}
                onChange={(e) => setNationalityState(e.target.value)}
              />
            </div>

            <Button className="mt-4 py-5" onClick={() => UserLocation({ city, state, nationality })}>
              Create Profile
            </Button>

          </div>
        </form>
      </CardContent>
      </Card>
    </div>
  );
}

export default Details;
