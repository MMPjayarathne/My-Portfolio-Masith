"use client"; // Required for client-side interactivity

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import myImg from "../../public/images/research.png";

export default function AboutMe() {
  return (
    <section id="aboutme" className="min-h-screen flex items-center justify-center bg-background py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
       
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative w-full max-w-md">
            <Image
              src= {myImg} // Update the path to your image
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-lg "
              priority // Ensures the image is loaded first
            />
          </div>
        </div>

        {/* About Me Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 border-b-4 border-secondary pb-2">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            My academic journey has equipped me with a strong foundation in Software Engineering principles, which I continually apply to real-world scenarios through internships and personal projects. I&lsquom excited to connect with like-minded individuals and explore opportunities to make a positive impact on the world through technology. Thank you for visiting my portfolio!
          </p>

          {/* Personal Info Card */}
          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Some Personal Info
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="text-primary">1</span>
                </div>
                <div>
                  <strong className="text-primary">Full Name</strong>
                  <p className="text-muted-foreground">Masith Pramuditha Jayarathna</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center">
                  <span className="text-primary">2</span>
                </div>
                <div>
                  <strong className="text-primary">Degree</strong>
                  <p className="text-muted-foreground">BSc(hons) Software Engineering, University of Kelaniya</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
                  <span className="text-primary">3</span>
                </div>
                <div>
                  <strong className="text-primary">City</strong>
                  <p className="text-muted-foreground">Kirama, Hambantota District</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="text-primary">4</span>
                </div>
                <div>
                  <strong className="text-primary">Marital Status</strong>
                  <p className="text-muted-foreground">Unmarried</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}