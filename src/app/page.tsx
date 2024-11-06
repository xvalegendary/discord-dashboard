"use client";
import Link from "next/link";
import Image from "next/image";
import { PanelsTopLeft } from "lucide-react";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import "./canvas.css";
import { useEffect } from "react";
import CanvasBackground from "./CanvasBackground"; 

export default function HomePage() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.transform = "translate(-50%, -50%)"; // Центрирование курсора
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <CanvasBackground />
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <span className="font-bold">atlanta.dev</span>
            <span className="sr-only">atlanta.dev</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w- 8 h-8 bg-background"
              asChild
            >
              <Link href="https:/github.com/atlantatechnology">
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc( 100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Discord Dashboard  <a href="https:/github.com/atlantatechnology" id="brand-s">atlanta.dev</a>
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              A stunning and functional dashboard for Next.js using
              shadcn/ui complete with desktop and mobile responsiveness.
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default"
                      asChild
                      id="button-24"
                      >
                <Link href="/login">
                  Auth
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  id="button-23"
                  href="https:/github.com/xvalegendary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Link>
              </Button>
            </div>
          </section>
          <div className="w-full flex justify-center relative">
            <Image
              src="/white.jpg"
              width={1080}
              height={608}
              alt="demo"
              priority
              className="border rounded-xl shadow-sm dark:hidden"
            />
            <Image
              src="/black.jpg"
              width={1080}
              height={608}
              alt="demo-dark"
              priority
              className="border border-zinc-600 rounded-xl shadow-sm hidden dark:block dark:shadow-gray-500/5"
            />
          </div>
        </div>
      </main>
      <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            (c)
            <span
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >{' '}atlanta.technology{" "}
            </span>
            <span
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
            </span>
            all rights reserved.
          </p>
        </div>
      </footer>
      <div id="custom-cursor" className="custom-cursor"></div>
    </div>
  );
}