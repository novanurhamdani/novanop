"use client";

import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function ContactSection() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;

      // Set a success flag in localStorage before submission
      localStorage.setItem("form_submitted", "true");

      // Submit the form naturally - this will redirect the page
      form.submit();

      // The code below won't execute due to the redirect, but will keep it
      // as a fallback in case the form submission is handled differently
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  useEffect(() => {
    const checkFormSubmission = () => {
      const formSubmitted = localStorage.getItem("form_submitted");
      if (formSubmitted === "true") {
        // Clear the flag
        localStorage.removeItem("form_submitted");
        // Set success status
        setSubmitStatus("success");
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      }
    };

    checkFormSubmission();
  }, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Retro grid background with different color */}
      <div className="absolute inset-0 z-0 contact-grid-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              theme === "dark" ? "neon-text-pink" : "text-primary"
            }`}
          >
            Contact Me
          </h2>
          <div
            className={`w-24 h-1 ${
              theme === "dark" ? "bg-hot-pink" : "bg-primary"
            } mx-auto mb-8`}
          ></div>
          <p className="text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 text-hot-pink">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-hot-pink text-hot-pink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+62 896 8311 6161</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-hot-pink text-hot-pink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground">
                    nova.nurhamdani@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-hot-pink text-hot-pink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">
                    Location
                  </h4>
                  <p className="text-muted-foreground">Bogor, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-hot-pink">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <Link
                  href="https://linkedin.com/in/novanurhamdani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border-2 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-background transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link
                  href="https://github.com/novanurhamdani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border-2 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-background transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </Link>
                <Link
                  href="mailto:nova.nurhamdani@gmail.com"
                  className="w-10 h-10 flex items-center justify-center border-2 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-background transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative border-2 border-hot-pink p-6 neon-border-pink">
            <h3 className="text-xl font-bold mb-6 text-hot-pink">
              Send Me a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              action="https://formsubmit.co/nova.nurhamdani@gmail.com"
              method="POST"
            >
              {/* Hidden fields for FormSubmit configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New message from Novanop website"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value={
                  typeof window !== "undefined" ? window.location.href : ""
                }
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-background border-2 border-hot-pink focus:outline-none focus:ring-2 focus:ring-hot-pink"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-background border-2 border-hot-pink focus:outline-none focus:ring-2 focus:ring-hot-pink"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-background border-2 border-hot-pink focus:outline-none focus:ring-2 focus:ring-hot-pink"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="retro-btn-pink w-full py-3"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-3 border-2 border-lime-green text-lime-green">
                  Your message has been sent successfully!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-3 border-2 border-red text-red">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
