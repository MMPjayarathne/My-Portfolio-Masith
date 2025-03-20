"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDarkMode } from "@/context/DarkModeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const experienceRef = useRef<HTMLDivElement>(null);


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

  const handleClickOutside = (event: MouseEvent) => {
    if (experienceRef.current && !experienceRef.current.contains(event.target as Node)) {
      setIsExperienceOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isExperienceOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 pl-[2rem] pr-[2rem] z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-3xl font-bold text-primary font-[Moon_Dance]">
          <button 
            onClick={() => scrollToSection("intro")} 
            className="focus:outline-none bg-transparent p-0" 
          >
            Masith
          </button>
        </span>
      </div>



        <div className="hidden md:flex space-x-6">
          <Button variant="ghost" onClick={() => scrollToSection("intro")} className="text-lg hover:bg-accent">
            Home
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("eduction")} className="text-lg hover:bg-accent">
            Education
          </Button>

          <div className="relative" ref={experienceRef}>
            <Button
              variant="ghost"
              onClick={() => setIsExperienceOpen(!isExperienceOpen)}
              className="text-lg hover:bg-accent flex items-center"
            >
              Experience <ChevronDown size={18} />
            </Button>
            {isExperienceOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-md">
                <Button variant="ghost" onClick={() => scrollToSection("industry")} className="w-full text-left">
                  Industry
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection("volunteer")} className="w-full text-left">
                  Volunteer
                </Button>
              </div>
            )}
          </div>

          <Button variant="ghost" onClick={() => scrollToSection("myskills")} className="text-lg hover:bg-accent">
            My Skills
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("myprojects")} className="text-lg hover:bg-accent">
            My Projects
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("contactme")} className="text-lg hover:bg-accent">
            Contact Me
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("blogs")} className="text-lg hover:bg-accent">
            Blogs
          </Button>
          <Button variant="ghost" onClick={toggleDarkMode} className="p-2 rounded-full focus:outline-none">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </Button>
        </div>

 
        <div className="md:hidden flex items-center space-x-4">
    
          <Button variant="ghost" onClick={toggleDarkMode} className="p-2 rounded-full focus:outline-none">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-primary z-60">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-16 left-0 right-0 transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col space-y-2 p-4">
          <Button variant="ghost" onClick={() => scrollToSection("intro")} className="w-full text-left">
            Home
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("eduction")} className="w-full text-left">
            Education
          </Button>
          <div className="relative" ref={experienceRef}>
            <Button
              variant="ghost"
              onClick={() => setIsExperienceOpen(!isExperienceOpen)}
              className="w-full text-left flex items-center"
            >
              Experience <ChevronDown size={18} />
            </Button>
            {isExperienceOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-900 shadow-lg rounded-md">
                <Button variant="ghost" onClick={() => scrollToSection("industry")} className="w-full text-left">
                  Industry
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection("volunteer")} className="w-full text-left">
                  Volunteer
                </Button>
              </div>
            )}
          </div>
          <Button variant="ghost" onClick={() => scrollToSection("myskills")} className="w-full text-left">
            My Skills
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("myprojects")} className="w-full text-left">
            My Projects
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("contactme")} className="w-full text-left">
            Contact Me
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("blogs")} className="w-full text-left">
            Blogs
          </Button>
        </div>
      </div>
    </nav>
  );
}
