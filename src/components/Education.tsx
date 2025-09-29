"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { FaGraduationCap, FaStar, FaClipboard, FaProjectDiagram } from "react-icons/fa";
import myImg from "../../public/images/research.png";

export default function Education() {
  return (
    <section id="eduction" className="min-h-screen flex items-center justify-center bg-background py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative w-full max-w-md md:block hidden">
            <Image
              src={myImg}
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 border-b-4 border-secondary pb-2">
            Education
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            My academic journey has equipped me with a strong foundation in Software Engineering, which I continually apply to real-world scenarios through projects. I&apos;m excited to connect with like-minded individuals and explore opportunities to make a positive impact on the world through technology.
          </p>

          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">Info</h2>
            <ul className="space-y-6">
              <li>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white flex items-center justify-center">
                      <FaGraduationCap size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">Degree</h3>
                  </div>
                </div>
                <ul className="text-muted-foreground mt-2 ml-16">
                  <li>BSc(Hons) Software Engineering</li>
                  <li>University of Kelaniya, Sri Lanka</li>
                </ul>
              </li>


              <li>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white flex items-center justify-center">
                      <FaStar size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">GPA</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2 ml-16">3.89/4</p>
              </li>

              <li>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white flex items-center justify-center">
                      <FaClipboard size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">Class</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2 ml-16">First Class</p>
              </li>

              <li>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white flex items-center justify-center">
                      <FaProjectDiagram size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">Specializations</h3>
                  </div>
                </div>
                <ul className="text-muted-foreground mt-2 ml-16">
                  <li>Data Science</li>
                  <li>Net-Centric Applications</li>
                  <li>Health Informatics</li>
                </ul>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}