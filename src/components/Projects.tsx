"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  owner: {
    avatar_url: string;
  };
  language: string | null;
  created_at: string;
  updated_at: string;
  readme_image?: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/github?username=MMPjayarathne");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data: GitHubRepo[] = await response.json();
        setProjects(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="myprojects" className="min-h-screen flex items-center justify-center bg-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 border-b-4 border-secondary pb-2">
            My Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
                <div className="w-48 h-48 relative mb-4 bg-gray-200 animate-pulse rounded-lg"></div>
                <div className="w-3/4 h-6 bg-gray-200 animate-pulse mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-200 animate-pulse"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="myprojects" className="min-h-screen flex items-center justify-center bg-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 border-b-4 border-secondary pb-2">
            My Projects
          </h1>
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="myprojects" className="min-h-screen flex items-center justify-center bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 border-b-4 border-secondary pb-2">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="w-48 h-48 relative mb-4">
                <Image
                  src={
                    project.readme_image ||
                    `https://dummyimage.com/300x300/cccccc/000000&text=${encodeURIComponent(project.name)}`
                  }
                  alt={project.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{project.name}</h3>
              <p className="text-muted-foreground text-center">
                {project.description || "No description available"}
              </p>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}