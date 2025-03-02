"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "How to Build a React App",
    description: "A beginner's guide to building a simple React application.",
    link: "#",
    imageUrl: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures",
    description: "A deep dive into closures and how they work in JavaScript.",
    link: "#",
    imageUrl: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: "Introduction to CSS Grid",
    description: "Learn the basics of CSS Grid layout and create complex designs.",
    link: "#",
    imageUrl: "/images/blog3.jpg",
  },
  {
    id: 4,
    title: "Mastering Node.js and Express",
    description: "Build scalable server-side applications with Node.js and Express.",
    link: "#",
    imageUrl: "/images/blog4.jpg",
  },
  {
    id: 5,
    title: "React vs Vue: A Detailed Comparison",
    description: "A comparison between React and Vue for front-end development.",
    link: "#",
    imageUrl: "/images/blog5.jpg",
  },
  {
    id: 6,
    title: "The Ultimate Guide to TypeScript",
    description: "Get started with TypeScript and understand its core features.",
    link: "#",
    imageUrl: "/images/blog6.jpg",
  },
];

export default function Blog() {
  return (
    <section id="blogs" className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Latest Blog Articles</h2>

        {/* Blog Carousel */}
        <Carousel opts={{ align: "start" }} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {blogPosts.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="shadow-lg rounded-lg">
                    <div className="relative">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-auto rounded-t-lg object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-col items-center p-4">
                      <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{post.description}</p>
                      <Button variant="outline" onClick={() => window.location.href = post.link}>
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="absolute top-1/2 left-0 z-10 p-2 bg-white dark:bg-gray-800 text-black dark:text-white shadow-md rounded-full"
          >
            Prev
          </CarouselPrevious>
          <CarouselNext
            className="absolute top-1/2 right-0 z-10 p-2 bg-white dark:bg-gray-800 text-black dark:text-white shadow-md rounded-full"
          >
            Next
          </CarouselNext>

        </Carousel>
      </div>
    </section>
  );
}
