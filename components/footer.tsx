import React from "react";
import {  Facebook, Instagram, Twitter } from "lucide-react";
import { EnvelopeOpenIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button"
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-zinc-500">
       <div className="flex items-center justify-between pb-10">  
       <Button variant={"ghost"}>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" />Email
      </Button>
      <Button variant={"ghost"}>
      <Twitter className="mr-2 h-4 w-4" />Twitter
      </Button>
      <Button variant={"ghost"}>
      <FaFacebook className="mr-2 h-4 w-4" />Facebook
      </Button>
      <Button variant={"ghost"}>
      <InstagramLogoIcon className="mr-2 h-4 w-4" />Instagram
      </Button>
       </div>
      <small className="mb-2 block text-xs">
        &copy; 2024 Eduquic. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
