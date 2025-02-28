"use client"; // Required for client-side interactivity

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Skills() {
  const skills = {
    Languages: [
      { name: "Java", image: "../../public/stacks/languages/java.png" },
      { name: "Python", image: "../../public/stacks/languages/python.png" },
      { name: "JavaScript", image: "../../public/stacks/languages/javascript.png" },
      { name: "TypeScript", image: "../../public/stacks/languages/typescript.png" },
    ],
    "Frameworks & Libraries": [
      { name: "React", image: "../../public/stacks/frameworks/react.png" },
      { name: "Next.js", image: "../../public/stacks/frameworks/nextjs.png" },
      { name: "Spring Boot", image: "../../public/stacks/frameworks/springboot.png" },
      { name: "Node.js", image: "../../public/stacks/frameworks/nodejs.png" },
    ],
    Databases: [
      { name: "MySQL", image: "../../public/stacks/databases/mysql.png" },
      { name: "PostgreSQL", image: "../../public/stacks/databases/postgresql.png" },
      { name: "MongoDB", image: "../../public/stacks/databases/mongodb.png" },
      { name: "Redis", image: "../../public/stacks/databases/redis.png" },
    ],
    "Tools & Services": [
      { name: "Git", image: "../../public/stacks/tools/git.png" },
      { name: "Docker", image: "../../public/stacks/tools/docker.png" },
      { name: "AWS", image: "../../public/stacks/tools/aws.png" },
      { name: "VS Code", image: "../../public/stacks/tools/vscode.png" },
    ],
  };

  return (
    <section id="myskills" className="min-h-screen flex items-center justify-center bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 border-b-4 border-secondary pb-2">
          My Skills
        </h1>

        {/* Tabs Navigation */}
        <Tabs defaultValue="Languages" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-background">
            {Object.keys(skills).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          {Object.entries(skills).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((skill) => (
                  <Card key={skill.name} className="p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 relative">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-primary">{skill.name}</h3>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}