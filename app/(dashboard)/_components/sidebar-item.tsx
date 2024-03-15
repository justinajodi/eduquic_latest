"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-zinc-500 dark:text-zinc-200 text-sm font-[500] pl-6 transition-all hover:text-zinc-600 hover:bg-zinc-300/20",
        isActive && "text-rose-700 dark:text-rose-500 bg-rose-200/20 dark:bg-rose-200/10  hover:bg-rose-200/20 dark:hover:bg-rose-200/10 hover:text-rose-700 dark:hover-text-600"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-zinc-500 dark:text-zinc-200 ",
            isActive && "text-rose-700 dark:text-rose-500"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-rose-600 h-full transition-all",
          isActive && "opacity-100 animate-pulse"
        )}
      />
    </button>
  )
}