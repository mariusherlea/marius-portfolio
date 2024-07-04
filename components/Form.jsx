"use client";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail as MailIcon, MessageSquare } from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      formValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      formValid = false;
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      try {
        const response = await axios.post("/api/sendEmail", formData);
        console.log("Email sent successfully:", response.data);
        // Optionally handle success state or reset form
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error state or display error message
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <Input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className={`border border-gray-300 px-3 py-2 rounded-md focus:outline-none w-full ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        <User size={20} className="absolute right-6" />
      </div>
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <div className="relative flex items-center">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={`border border-gray-300 px-3 py-2 rounded-md focus:outline-none w-full ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        <MailIcon size={20} className="absolute right-6" />
      </div>
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <div className="relative flex items-center">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type Your Message"
          rows={4}
          className={`border border-gray-300 px-3 py-2 rounded-md focus:outline-none w-full ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        <MessageSquare size={20} className="absolute top-4 right-6" />
      </div>
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message}</p>
      )}

      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Let's talk
      </Button>
    </form>
  );
};

export default Form;
