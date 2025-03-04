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

interface Article {
  title: string;
  description: string;
  image: string;
  pubDate: string;
  link: string;
}

export default function Blog() {
  const [blogs, setBlogs] = React.useState<Article[]>([])

  React.useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/medium");
        if (!response.ok) {
          throw new Error("Failed to fetch blog articles");
        }
        const data: Article[] = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <section id="blogs" className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Latest Blog Articles</h2>

        <Carousel opts={{ align: "start" }} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {blogs.map((post) => (
              <CarouselItem key={post.title} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="shadow-lg rounded-lg pt-0">
                    <div className="relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-full rounded-t-lg object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-col items-center p-4">
                      <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {new Date(post.pubDate).toLocaleDateString()}
                      </p>
                      <Button variant="outline" onClick={() => window.open(post.link, '_blank')}>
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
