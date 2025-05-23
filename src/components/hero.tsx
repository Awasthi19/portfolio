"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 geometric-pattern">
      <div className="max-w-5xl w-full space-y-8 text-center">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-red-500 dark:border-red-600 shadow-xl">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Tank Prasad Awasthi"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-2xl md:text-3xl font-bold text-white">
            Hey there !! Its me{" "}
          </h1>
          <h1 className="text-4xl sm:text-2xl md:text-3xl font-bold text-white">
            Sushil Awasthi{" "}
          </h1>

          <div className="mt-3 text-xl sm:text-2xl text-gray-300">
            Full Stack Developer
          </div>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-300">
            I am a Full Stack developer with a focus on backend systems and
            infrastructure. My interests lie in systems design, DevOps, and
            building reliable, maintainable software.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <a href="#contact">
                Contact Me <MoveRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-red-500 text-white hover:bg-red-900/30"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/Awasthi19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/awasthi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:sushilawasthi2999@gmail.com"
              className="text-white hover:text-red-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
