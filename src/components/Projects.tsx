"use client"; 

import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Project Name 1",
    description: "This is the project description and you should enter a proper description here.",
    image: "/assets/stacks/languages/python.png",
  },
  {
    title: "Project Name 2",
    description: "This is the project description and you should enter a proper description here.",
    image: "/assets/icons/house.png",
  },
  {
    title: "Project Name 3",
    description: "This is the project description and you should enter a proper description here.",
    image: "/assets/icons/house.png",
  },
  {
    title: "Project Name 4",
    description: "This is the project description and you should enter a proper description here.",
    image: "/assets/icons/house.png",
  },
  {
    title: "Project Name 5",
    description: "This is the project description and you should enter a proper description here.",
    image: "/assets/icons/house.png",
  },
];

export default function Projects() {
  return (
    <section id="myprojects" className="min-h-screen flex items-center justify-center bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 border-b-4 border-secondary pb-2">
          My Projects
        </h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-center">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}