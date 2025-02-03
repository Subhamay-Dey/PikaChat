"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { toast } from "sonner";

function Search() {

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [nationality, setNationality] = useState('');
    const [loading, setLoading] = useState(false);

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

            if(!response.ok) throw new Error(data.message || "Form submission failed")
            console.log(data);
            setLoading(false);
            toast.success(data?.message);

        } catch (error) {
            console.log(error);
            toast.error(String(error));
        } finally {
          setLoading(false);
        }
    }

  return (
    <div className="w-full h-screen flex justify-center items-center">
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
    </div>
  );
}

export default Search;
