"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { MailIcon, SendHorizonalIcon } from "lucide-react";
import { postInquiry } from "@/actions/actions";
import { toast } from "sonner";

const HeroFormSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  async function handleSubmit(formData: FormData) {
    const email = formData.get("email") as string;

    if (!email) {
      setStatus({ message: "Please provide an email address", isError: true });
      return;
    }

    try {
      const result = await postInquiry(email);

      if (result.success) {
        setEmail("");
        toast.success("Thank you for your interest!");
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    } catch (error) {
      toast.error("Failed to submit your inquiry, please try again later.");
    }
  }

  return (
    <div className="mx-auto max-w-sm" id="email-form">
      <form action={handleSubmit} className="relative">
        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border border-muted pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
          <MailIcon className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

          <input
            placeholder="Your email address"
            className="h-12 w-full bg-transparent pl-12 focus:outline-none"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="md:pr-1.5 lg:pr-0">
            <Button aria-label="submit" size="sm" variant="ghost" type="submit">
              <span className="hidden md:block cursor-pointer">Send demo</span>
              <SendHorizonalIcon
                className="relative mx-auto size-5 md:hidden"
                strokeWidth={2}
              />
            </Button>
          </div>
        </div>
      </form>

      <p className="mt-2 text-sm font-mono text-muted-foreground">
        And we&apos;ll email you our demo link.
      </p>
    </div>
  );
};

export default HeroFormSection;
