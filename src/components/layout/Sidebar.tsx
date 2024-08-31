'use client' 
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  { name: "All", href: "/elements" },
  { name: "Buttons", href: "/elements?category=buttons" },
  { name: "Checkboxes", href: "/elements?category=checkboxes" },
  { name: "Toggle switches", href: "/elements?category=toggle-switches" },
  { name: "Cards", href: "/elements?category=cards" },
  { name: "Loaders", href: "/elements?category=loaders" },
  { name: "Inputs", href: "/elements?category=inputs" },
  { name: "Radio buttons", href: "/elements?category=radio-buttons" },
  { name: "Forms", href: "/elements?category=forms" },
  { name: "Patterns", href: "/elements?category=patterns" },
  { name: "Tooltips", href: "/elements?category=tooltips" },
  { name: "My favorites", href: "/elements?category=favorites", icon: "🔖" },
];

function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const NavContent = () => (
    <nav className="space-y-1">
      {sidebarItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "flex items-center px-3 py-2 text-sm font-medium rounded-md",
            pathname === item.href || pathname.startsWith(`${item.href}/`)
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            item.name === "My favorites" && "mt-4"
          )}
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.name}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn("hidden lg:block w-64 bg-background border-r", className)}>
        <div className="p-4">
          <NavContent />
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="p-4">
            <NavContent />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Sidebar;