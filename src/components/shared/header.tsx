"use client";

import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import useInvalidPaths from "@/lib/user-invalid-paths";

export default function Header() {
  const invalidPath: boolean = useInvalidPaths();

  if (invalidPath) return <></>;

  return (
    <div
      className={`fixed inset-0 z-50 flex h-20 flex-col items-center border-b border-border bg-background`}
    >
      <div className="flex h-full w-full max-w-[1500px] flex-row items-center justify-between px-4 md:px-6">
        <Link href="/" sr-only="Home Page">
          <Label className="text-2xl font-extrabold">Zorus Blog</Label>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
