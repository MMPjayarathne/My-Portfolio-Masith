"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Image from "next/image";

type Skill = {
  name: string;
  image: string;
};

type Skills = {
  Languages: Skill[];
  "Frameworks & Libraries": Skill[];
  Databases: Skill[];
  "Tools & Services": Skill[];
};

export default function Skills() {
  const [skills, setSkills] = useState<Skills | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/db/skills.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Skills = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    };

    fetchSkills();
  }, []);

  if (!skills) {
    return <div>Loading...</div>;
  }

  return (
    <section id="myskills" className="min-h-screen flex items-center justify-center bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 border-b-4 border-secondary pb-2">
          My Skills
        </h1>

        <Tabs defaultValue="Languages" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-background">
            {Object.keys(skills).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skills).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-8 pt-2 md:pt-0">
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