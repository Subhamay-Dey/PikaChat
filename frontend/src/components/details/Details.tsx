"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios, { AxiosError } from "axios";
import { LOCATION_URL } from "@/lib/apiEndPoints";
import { toast } from "sonner";

function Details({user}:{user: any}) {

  interface locationPayloadType {
    city: string,
    state: string,
    nationality: string,
  }

  const router = useRouter();

  const [loading, setLoading] = React.useState(false)

  const submitHandler = async (payload:locationPayloadType) => {
    console.log("The details payload is", payload);

    try {
      setLoading(true);
      const {data} = await axios.post(LOCATION_URL, payload, {
        headers: {
          Authorization: user.token
        }
      });
      console.log(data);
      console.log(user.token);
      if(data?.message){
        setLoading(false)
        toast.success(data?.message)
        router.push("/");
      }
    } catch (error) {
      setLoading(false)
        if (error instanceof AxiosError) {
            toast.error(error.message)
        } else {
            toast.error("Something went wrong, please try again!")
        }
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
        <form onSubmit={() => submitHandler}>
          <div className="grid w-full items-center py-4 gap-6">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="city">City/Town Name</Label>
              <Input
                id="city"
                required
                placeholder="Enter your city"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="state">State Name</Label>
              <Input
                id="state"
                required
                placeholder="Enter your state"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                required
                placeholder="Enter your nationality"
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
