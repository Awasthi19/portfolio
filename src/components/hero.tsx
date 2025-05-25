"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 geometric-pattern mt-[75px]">
      <div className="max-w-5xl w-full space-y-8 text-left">
        <div className="flex items-center justify-between flex-col-reverse sm:flex-row">
          <div>
            <h1 className="text-4xl sm:text-2xl md:text-3xl font-bold text-white">
              Hey there !! Its me{" "}
            </h1>
            <h1 className="text-4xl sm:text-2xl md:text-3xl font-bold text-white ">
              <span className="text-red-500">Sushil Awasthi</span>{" "}
              <span className="text-lg align-bottom text-red-400">
                (Tank Prasad Awasthi)
              </span>
            </h1>

            <div className="mt-3 text-xl sm:text-2xl text-green-500">
              Software Engineer <span className="text-gray-400">|</span> Full
              Stack Web & SaaS Development
            </div>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-300">
              I am a Full Stack developer with a focus on backend systems and
              infrastructure. My interests lie in systems design, DevOps, and
              building reliable, maintainable software.
            </p>

            <div className="mt-8 flex flex-wrap justify-left gap-4">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white"
              >
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

            <div className="mt-[70px] flex justify-left space-x-6">
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
                href="https://www.linkedin.com/in/sushil-awasthi-0351352ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sushilawasthi2999@gmail.com&su=Regarding&body=Hi%20Sushil,%0D%0A%0D%0AI%20just%20checked%20your%20portfolio%20and%20wanted%20to%20reach%20out..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative mb-[100px] overflow-hidden shadow-xl">
            <Image
              src="/portfoliophoto.png"
              alt="Tank Prasad Awasthi"
              width={256}
              height={512}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
