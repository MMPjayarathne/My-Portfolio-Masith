"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import myImage from "../../public/images/myimg-removebg.png";
import { motion } from "framer-motion"; // Import Framer Motion

export default function Intro() {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-8 relative">

        {/* Animated Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left pt-8 md:pt-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6">
            Welcome!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            I am <strong> Masith Pramuditha Jayarathna </strong>. A Software Engineer driven by a deep passion for technology and innovation.
            With boundless enthusiasm, I embrace challenges and approach each endeavor with wonder and determination.
            Collaboration is my forte, and I thrive in team environments, valuing diverse perspectives.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Button
              className="gap-2 px-6 py-3 text-lg font-semibold"
              onClick={() => {
                // Add download functionality here
                console.log("Download CV clicked");
              }}
            >
              <Download className="w-5 h-5" />
              <span>Download My CV</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md h-auto">
            <Image
              src={myImage}
              alt="My picture"
              width={400}
              height={400}
              className="rounded-lg relative z-10"
              priority // Ensures the image is loaded first
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
