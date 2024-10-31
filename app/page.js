import { Wrench, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center">
        <Wrench className="w-16 h-16 mx-auto text-blue-500 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Site Under Maintenance
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Hello! I'm currently giving my website a little makeover.
        </p>
        <p className="text-gray-600 mb-6">
          I'm working on some exciting updates to showcase my latest projects
          and skills. The site will be back up and running by{" "}
          <b>November 24th, 2024</b>. In the meantime, feel free to check out my
          work or get in touch through the links below.
        </p>
        <p className="text-gray-600 mb-6">
          Thank you for your patience and understanding. I can't wait to show
          you what I've been working on!
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <Link
            href="https://github.com/novanurhamdani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            <Github className="w-8 h-8" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/nova-nurhamdani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            <Linkedin className="w-8 h-8" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:nova.nurhamdani@gmail.com"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            <Mail className="w-8 h-8" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Novanop. All rights reserved.
        </div>
      </div>
    </div>
  );
}
