"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { SectionContainer } from "./section-container";

export default function FrequentAskedQuestions() {
  const faqItems = [
    {
      id: "item-1",
      question: "What is this platform?",
      answer:
        "This is a reservation system that helps you discover and book tables at top restaurants.",
    },
    {
      id: "item-2",
      question: "How do I make a reservation?",
      answer:
        "Search by date, time, party size, and location. Then choose a restaurant and available time slot to book.",
    },
    {
      id: "item-3",
      question: "Why do some reservations require a credit card?",
      answer:
        "Restaurants may ask for a credit card to hold your reservation or charge a deposit, especially for popular time slots or prix-fixe events."
    },
    {
      id: "item-6",
      question: "What areas do you cover?",
      answer:
        "We currently cover Jakarta and Bali in Indonesia, with plans to expand to more regions. Check our coverage map to see if your area is included.",
    },
  ];

  return (
    <SectionContainer noPadding className="py-16 md:py-24 bg-neutral-950/80">
      <div className="mx-auto px-4 md:px-6">
        <div className="mx-auto text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-neutral-800 border-neutral-700 w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-neutral-800"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Can&apos;t find what you&apos;re looking for? Contact our{" "}
            <Link
              href="mailto:lucas@digics.net"
              className="text-primary font-medium hover:underline"
            >
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
