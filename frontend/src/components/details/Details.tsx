"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner";

function Details({user}:{user: any}) {

  interface locationPayloadType {
    city: string,
    state: string,
    nationality: string, 
  }

  const router = useRouter();

  const [loading, setLoading] = React.useState(false)

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [nationality, setNationality] = useState("");

  const payload = {
    city,
    state,
    nationality,
  }

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("The details payload is", payload);

    console.log("User token before request:", user.token);

    if (!user || !user.token) {
      toast.error("User token is missing. Please log in again.");
      return;
    }

    try {
      setLoading(true);
    
      const response = await fetch("http://localhost:8000/api/details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token,
        },
        body: JSON.stringify({
          city, 
          state,
          nationality
        }),
      });
    
      const data = await response.json();
      
      if(!response.ok) throw new Error(data.message || "Form submission failed") // Parse the response as JSON
    
      console.log(data);
      console.log(user.token);
      setLoading(false);
      toast.success(data?.message);
      router.push("/");
      
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
    
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-[450px] h-[480px]">
      <CardHeader>
        <CardTitle className="text-[26px]">Add your details</CardTitle>
        <CardDescription>Add your city, state and nationality.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={submitHandler}>
          <div className="grid w-full items-center py-4 gap-6">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="city">City/Town Name</Label>
              <Input
                id="city"
                required
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="state">State Name</Label>
              <Input
                id="state"
                required
                placeholder="Enter your state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                required
                placeholder="Enter your nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>

            <Button className="mt-4 py-5" type="submit" disabled={loading}>
              {loading ? "Processing" : "Submit"}
            </Button>

          </div>
        </form>
      </CardContent>
      </Card>
    </div>
  );
}

export default Details;
