"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("mgvwelrk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="container mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center mb-4 rounded-lg shadow-lg bg-primary dark:bg-tertiary p-2"
      >
        <label htmlFor="email">Name</label>
        <input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="email">Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
