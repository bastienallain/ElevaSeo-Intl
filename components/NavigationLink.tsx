"use client";

import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import type { AppPathnames } from "@/config/config";
import { Link } from "@/navigation";

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-2 py-1 transition-colors",
        isActive ? "text-gray-800 dark:text-white " : "dark:hover:text-gray-200 hover:text-gray-600",
      )}
      href={href}
      {...rest}
    />
  );
}
