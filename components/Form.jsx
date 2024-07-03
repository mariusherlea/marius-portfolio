"use client";

import { Button } from "@/components/ui//button"; // Ensure this path is correct
import { Input } from "@/components/ui/input"; // Ensure this path is correct
import { Textarea } from "@/components/ui/textarea";
// Ensure this path is correct
import {
  User,
  Mail as MailIcon, // Ensure correct naming
  MessageSquare,
} from "lucide-react"; // Ensure lucide-react is correctly installed

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/** Name Field */}
      <div className="relative flex items-center">
        <Input type="text" id="name" placeholder="Name" />
        <User size={20} className="absolute right-6" />
      </div>

      {/** Email Field */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon size={20} className="absolute right-6" />
      </div>

      {/** Message Field */}
      <div className="relative flex items-center">
        <Textarea placeholder="Type Your Message" />
        <MessageSquare size={20} className="absolute top-4 right-6" />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Let`s talk
      </Button>
    </form>
  );
};

export default Form;
