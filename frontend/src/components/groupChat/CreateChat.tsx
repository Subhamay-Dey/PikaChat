"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { createChatSchema, createChatSchemaType } from "@/validations/groupChatValidation";
import { Input } from "../ui/input";

function CreateChat() {

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState()

  const { register, handleSubmit, formState: { errors } } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema)
  });

  const onSubmitt = (payload:createChatSchemaType) => {
    console.log("The chat payload is", payload);
  }

  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button>Create Group</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create your new Chat Group</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmitt)}>
            <div className="mt-4">
                <Input placeholder="Enter Chat Group title" {...register("title")}/>
                <span className="text-red-500">{errors?.title?.message}</span>
            </div>
            <div className="mt-4">
                <Input placeholder="Enter Chat Group passcode" {...register("passcode")}/>
                <span className="text-red-500">{errors?.passcode?.message}</span>
            </div>
            <div className="mt-4">
                <Button className="w-full" disabled={loading}>{loading ? "Processing..." : "Submit"}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
  );
}

export default CreateChat;
