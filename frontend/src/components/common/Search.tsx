import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

interface LoginComponentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ open, setOpen }) => {
  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    await signIn("google", {
      callbackUrl: "/details",
      redirect: true,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Please first signin to chat!</DialogTitle>
          <DialogDescription>
            Welcome to PikaChat, log in and then you can chat to your beloved people.
          </DialogDescription>
        </DialogHeader>
        <Button className="w-full flex items-center justify-center gap-2" onClick={handleLogin}>
          <Image src="/images/google.png" width={25} height={25} alt="Continue with Google" />
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginComponent;
