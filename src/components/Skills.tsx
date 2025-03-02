"use client"; 

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Skills() {
      const skills = {
        Languages: [
          { name: "Java", image: "/stacks/languages/java.png" },
          { name: "Python", image: "/stacks/languages/python.png" },
          { name: "JavaScript", image: "/stacks/languages/javascript.png" },
          { name: "C", image: "/stacks/languages/letter-c.png" },
          { name: "PHP", image: "/stacks/languages/php.png" },
          { name: "HTML", image: "/stacks/languages/html-5.png" },
          { name: "SQL", image: "/stacks/languages/sql.png" },
        ],
        "Frameworks & Libraries": [
          { name: "Spring Boot", image: "/stacks/frameworks/springboot.png" },
          { name: "React", image: "/stacks/frameworks/react.png" },
          { name: "Next.js", image: "/stacks/frameworks/next-js.png" },
          { name: "Node.js", image: "/stacks/frameworks/node-js.png" },
          { name: ".Net", image: "/stacks/frameworks/net.png" },
          { name: "Scikit-learn", image: "/stacks/frameworks/scikit-learn.png" },
        ],
        Databases: [
          { name: "MySQL", image: "/stacks/databases/mysql.png" },
          { name: "PostgreSQL", image: "/stacks/databases/postgresql.png" },
          { name: "MongoDB", image: "/stacks/databases/mongodb.png" },
          { name: "Snowflake", image: "/stacks/databases/snowflake.png" },
          { name: "DynamoDB", image: "/stacks/databases/dynamodb.png" },
          { name: "SAP HANA", image: "/stacks/databases/sap.png" },
          { name: "Firestore", image: "/stacks/databases/firestore.png" },
        ],
        "Tools & Services": [
          { name: "GitHub", image: "/stacks/tools/github.png" },
          { name: "Docker", image: "/stacks/tools/docker.png" },
          { name: "AWS", image: "/stacks/tools/aws.png" },
          { name: "Datadog", image: "/stacks/tools/datadog.svg" },
          { name: "Bitbucket", image: "/stacks/tools/bitbucket.png" },
          { name: "Figma", image: "/stacks/tools/figma.png" },
          { name: "Jenkins", image: "/stacks/tools/jenkins.png" },
          { name: "Jira", image: "/stacks/tools/jira.png" },
          { name: "Kafka", image: "/stacks/tools/kafka.png" },
          { name: "Power BI", image: "/stacks/tools/power-bi.png" },
        ],
      };

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