"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaLinkedin, FaGithub, FaMedium, FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully! 🎉", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset(); // Clear the form fields
      } else {
        toast.error("Failed to send message. Please try again. 😢", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log("An error occurred. Please try again. 😢: ",error)
      toast.error("An error occurred. Please try again. 😢", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section id="contactme" className="min-h-screen flex items-center justify-center bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 border-b-4 border-secondary pb-2">
          Contact Me
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Write your name here.."
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="Let me know your Email.."
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <Textarea
                  placeholder="What would you like to tell us.."
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="mt-8 flex flex-col space-y-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <a
                  href="tel:+94769680852"
                  className="hover:underline" >
                +94 76 968 0852
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:pramudithajayarathna@gmail.com"
                  className="hover:underline" >
                pramudithajayarathna&#64;gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-1 md:gap-6 bg-secondary dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <a
              href="https://www.linkedin.com/in/masith-pramuditha-b4649b220/"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/MMPjayarathne"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 text-white flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://medium.com/@pramudithajayarathna"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-white flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="Medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium size={24} />
            </a>
            <a
              href="https://www.facebook.com/masith.pamuditha"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}