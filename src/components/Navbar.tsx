"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode based on class on the <html> element
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Toggle dark mode on and off
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const newMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-bold text-primary font-cursive">
            Masith
          </span>
        </div>

        <div className="hidden md:flex space-x-6">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("intro")}
            className="text-lg hover:bg-accent"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("eduction")}
            className="text-lg hover:bg-accent"
          >
            Education
          </Button>

          <div className="relative">
            <Button
              variant="ghost"
              onClick={() => setIsExperienceOpen(!isExperienceOpen)}
              className="text-lg hover:bg-accent flex items-center"
            >
              Experience <ChevronDown size={18} />
            </Button>
            {isExperienceOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-md">
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("industry")}
                  className="w-full text-left"
                >
                  Industry
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("volunteer")}
                  className="w-full text-left"
                >
                  Volunteer
                </Button>
              </div>
            )}
          </div>
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
          <Button
            variant="ghost"
            onClick={toggleDarkMode}
            className="p-2 rounded-full focus:outline-none"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </Button>
        </div>

        {/* Dark Mode Toggle Button and Hamburger Menu Button for Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            onClick={toggleDarkMode}
            className="p-2 rounded-full focus:outline-none"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </Button>

          {/* Hamburger Menu */}
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

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-16 left-0 right-0 transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col space-y-2 p-4">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("intro")}
            className="w-full text-left"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("eduction")}
            className="w-full text-left"
          >
            Education
          </Button>
          <div className="relative">
            <Button
              variant="ghost"
              onClick={() => setIsExperienceOpen(!isExperienceOpen)}
              className="w-full text-left flex items-center"
            >
              Experience <ChevronDown size={18} />
            </Button>
            {isExperienceOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-900 shadow-lg rounded-md">
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("industry")}
                  className="w-full text-left"
                >
                  Industry
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("volunteer")}
                  className="w-full text-left"
                >
                  Volunteer
                </Button>
              </div>
            )}
          </div>
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
