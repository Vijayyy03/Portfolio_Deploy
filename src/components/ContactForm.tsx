"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/jagdalevijay92@gmail.com",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      if (response.ok) {
        setStatus("Submitted");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Error");
      }
    } catch (error) {
      setStatus("Error");
    }
  };

  return (
    <section id="contact" data-scroll-section>
      <div className="my-24 flex flex-col items-center justify-center">
        <h2 className="mb-10 text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Contact Me
        </h2>
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Honeypot */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground shadow-glow-primary hover:bg-primary/90"
            disabled={status !== "Submit"}
          >
            {status}
          </Button>
        </motion.form>
      </div>
    </section>
  );
} 