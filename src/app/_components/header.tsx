"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button, Avatar } from "@nextui-org/react";
import { Sun, Moon } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className="flex items-center w-full justify-between">
          <div className="text-xl font-bold"><span className="text-blue-400">Note</span>ly</div>

          <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
              <Button variant="light">
                <Link
                  key="home"
                  href="/"
                  className="text-sm font-medium transition-colors"
                >
                  Home
                </Link>
              </Button>
          </nav>
          
          <div className="flex">
            <Button
              isIconOnly
              variant="light"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </header>
  );
}
