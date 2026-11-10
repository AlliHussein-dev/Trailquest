import { Moon, Sun, Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useTheme } from "@/components/providers/theme-provider";
import { SidebarMenuButton } from "./sidebar";

function ModeToggle({ variant = "header" }) {
  const { theme, setTheme } = useTheme();

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {variant === "sidebar" ? (
          <SidebarMenuButton className="h-12 cursor-pointer px-4 text-[#1c7c8c]">
            <ThemeIcon />
            <span className="text-xl capitalize">{theme}</span>
          </SidebarMenuButton>
        ) : (
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
            <Moon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side={variant === "sidebar" ? "right" : "bottom"}
        align="start"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun /> Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon /> Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ModeToggle;
