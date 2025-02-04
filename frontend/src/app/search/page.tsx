"use client"

import SearchUserCards from "@/components/search/SearchUserCards";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

function Search() {

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [nationality, setNationality] = useState('');
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const payload = {
        city,
        state,
        nationality,
    }

    const submitHandler = async(e: React.FormEvent) => {
        e.preventDefault();

        console.log("The search payload is", payload);

        try {
            setLoading(true);

            const queryParams = new URLSearchParams({
                ...(city && { city }),
                ...(state && { state }),
                nationality,
            }).toString();

            const response = await fetch(`http://localhost:8000/api/search?${queryParams}`, {
                method: "GET",
            });

            const data = await response.json();

            if(!response.ok) throw new Error(data.message || "Form submission failed");
            
            console.log(data);
            toast.success(data?.message);

            setUsers(data?.data || []);

        } catch (error) {
            console.log(error);
            toast.error(String(error));
        } finally {
          setLoading(false);
        }
    }

  return (
    <div className="w-full h-screen flex flex-col pt-20 justify-start items-center">
      <div className="text-[50px] font-bold mb-6">Connect to people by thier location</div>
      <div className="bg-black p-2 rounded-lg text-white ">
        <Link href={"/dashboard"} className="">Dashboard</Link>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col gap-6">
        <div>
          <Label htmlFor="city">City/Town Name</Label>
          <Card className="w-[450px] h-[50px]">
            <Input
              id="city"
              type="text"
              placeholder="Enter city"
              className="h-full"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Card>
        </div>

        <div>
          <Label htmlFor="state">State Name</Label>
          <Card className="w-[450px] h-[50px]">
            <Input
              id="state"
              type="text"
              placeholder="Enter state"
              className="h-full"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Card>
        </div>

        <div>
          <Label htmlFor="nationality">Nationality Name</Label>
          <Card className="w-[450px] h-[50px]">
            <Input
              id="nationality"
              type="text"
              placeholder="Enter nationality"
              className="h-full"
              required
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </Card>
        </div>

        <Button className="mt-4 py-5" type="submit" disabled={loading}>
          {loading ? "Processing..." : "Submit"}
        </Button>
      </form>
      <SearchUserCards users={users}/>
    </div>
  );
}

export default Search;
