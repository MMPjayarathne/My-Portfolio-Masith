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

          <div className="flex flex-col items-center justify-center gap-6 bg-secondary dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <a
              href="https://www.linkedin.com/in/masith-pramuditha-b4649b220/"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/MMPjayarathne"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 text-white flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://medium.com/@pramudithajayarathna"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-white flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="Medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium size={24} />
            </a>

            <a
              href="https://www.facebook.com/masith.pamuditha"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}