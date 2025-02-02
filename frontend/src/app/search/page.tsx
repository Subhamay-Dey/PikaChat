"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

function page() {

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [nationality, setNationality] = useState('');
    const [loading, setLoading] = useState(false);

    const payload = {
        city,
        state,
        nationality,
    }


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form>
        <div className="gap-10">
            <Label htmlFor="city">City/Town Name</Label>
            <Card className="w-[450px] h-[50px]">
            <Input
                id="search"
                name="firstName"
                type="text"
                placeholder="Search users"
                className="h-full"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            </Card>
            <Label htmlFor="city">State Name</Label>
            <Card className="w-[450px] h-[50px]">
            <Input
                id="search"
                name="firstName"
                type="text"
                placeholder="Search users"
                className="h-full"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            </Card>
            <Label htmlFor="city">Nationality Name</Label>
            <Card className="w-[450px] h-[50px]">
            <Input
                id="search"
                name="firstName"
                type="text"
                placeholder="Search users"
                className="h-full"
                required
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
            />
            </Card>

            <Button className="mt-4 py-5" type="submit" disabled={loading}>
                {loading ? "Processing" : "Submit"}
            </Button>
        </div>
      </form>
    </div>
  );
}

export default page;
