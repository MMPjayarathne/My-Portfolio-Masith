"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { FaPlay } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Bunker",
    subtitle: "Balthazar",
    image:
      "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
    time: "4.05",
  },
  {
    id: 2,
    title: "Words Remain",
    subtitle: "Moderator",
    image:
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
    time: "4.05",
  },
  {
    id: 3,
    title: "Falling Out",
    subtitle: "Otzeki",
    image:
      "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    time: "4.05",
  },
];

export default function Blogs() {
  const [activeBlog, setActiveBlog] = useState(0);

  const handleBlogChange = (index: number) => {
    setActiveBlog(index);
  };

  return (
    <section
      id="blogs"
      className="min-h-screen flex items-center justify-center bg-background py-16"
    >
      <div className="container mx-auto px-4">
 
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 border-b-4 border-secondary pb-2">
          Blogs
        </h1>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-3xl h-96">
            {blogs.map((blog, index) => (
              <Card
                key={blog.id}
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                  index === activeBlog
                    ? "translate-x-0 scale-100 opacity-100 z-10"
                    : index < activeBlog
                    ? "-translate-x-1/2 scale-90 opacity-50 z-0"
                    : "translate-x-1/2 scale-90 opacity-50 z-0"
                } md:block ${index !== activeBlog ? "hidden md:block" : ""} ${
                  index === activeBlog ? "block" : "hidden sm:block"
                }`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </Card>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            {blogs.map((blog, index) => (
              <button
                key={blog.id}
                onClick={() => handleBlogChange(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeBlog ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Go to blog ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-8 w-full max-w-3xl">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-white">
                  <FaPlay size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-primary">
                    {blogs[activeBlog].title}
                  </h2>
                  <div className="flex justify-between text-muted-foreground">
                    <span>{blogs[activeBlog].subtitle}</span>
                    <span>{blogs[activeBlog].time}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-1 w-full bg-muted rounded-full">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: "60%" }}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
