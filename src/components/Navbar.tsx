"use client"; 

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; 
import { cn } from "@/lib/utils"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-bold text-primary font-cursive">
            Masith
          </span>
        </div>

        <div className="hidden md:flex space-x-6">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("main")}
            className="text-lg hover:bg-accent"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("aboutme")}
            className="text-lg hover:bg-accent"
          >
            About Me
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("myskills")}
            className="text-lg hover:bg-accent"
          >
            My Skills
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("myprojects")}
            className="text-lg hover:bg-accent"
          >
            My Projects
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contactme")}
            className="text-lg hover:bg-accent"
          >
            Contact Me
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("blogs")}
            className="text-lg hover:bg-accent"
          >
            Blogs
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-primary z-60" 
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col space-y-2 p-4">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("main")}
            className="w-full text-left"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("aboutme")}
            className="w-full text-left"
          >
            About Me
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("myskills")}
            className="w-full text-left"
          >
            My Skills
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("myprojects")}
            className="w-full text-left"
          >
            My Projects
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contactme")}
            className="w-full text-left"
          >
            Contact Me
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("blogs")}
            className="w-full text-left"
          >
            Blogs
          </Button>
        </div>
      </div>
    </nav>
  );
}
