"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { MailIcon, SendHorizonalIcon } from "lucide-react";
import { postInquiry } from "@/actions/actions";
import { toast } from "sonner";
import Link from "next/link";

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
    <div
      className="mx-auto max-w-sm flex flex-col items-center gap-2"
      id="email-form"
    >
      <Button variant="secondary" size="lg">
        <Link href="https://cal.com/digics/demo">Book demo now</Link>
      </Button>
    </div>
  );
};

export default HeroFormSection;
