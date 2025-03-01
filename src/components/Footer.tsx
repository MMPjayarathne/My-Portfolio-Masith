"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-sm text-muted-foreground">
              Feel free to reach out for collaborations or inquiries. I&apos;m always open to discussing new opportunities!
            </p>
          </div>

          {/* Center Section: Navigation Links
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">Navigation</h2>
            <ul className="text-sm text-muted-foreground flex gap-4 md:flex-col md:gap-8">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div> */}

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-muted-foreground hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-muted-foreground mt-8 pt-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
