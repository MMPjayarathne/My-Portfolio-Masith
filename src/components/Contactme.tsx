"use client"; 

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaLinkedin, FaGithub, FaMedium, FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section id="contactme" className="min-h-screen flex items-center justify-center bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 border-b-4 border-secondary pb-2">
          Contact Me
        </h1>


        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                <Input type="text" placeholder="Write your name here.." />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <Input type="email" placeholder="Let me know your Email.." />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <Textarea placeholder="What would you like to tell us.." />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>

            <div className="mt-8 flex flex-col space-y-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <span>+94 76 968 0852</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <span>pramudithajayarathna&#64;gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 bg-secondary p-6 rounded-lg shadow-lg">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-linkedin hover:bg-linkedin hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-github hover:bg-github hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-medium hover:bg-medium hover:text-white transition-colors"
              aria-label="Medium"
            >
              <FaMedium size={24} />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-facebook hover:bg-facebook hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-instagram hover:bg-instagram hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}