import React from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

interface SidebarProps {
  // Add any props if needed
}

function Sidebar({}: SidebarProps) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { href: '/docs', label: 'Documentation' },
    { href: '/examples', label: 'Examples' },
  ];

  const NavContent = () => (
    <nav className="space-y-2">
      {navItems.map((item) => (
        <Button key={item.href} asChild variant="ghost" className="w-full justify-start">
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-background border-r h-screen">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">My UI Lib</h2>
          <NavContent />
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <h2 className="text-2xl font-bold mb-4">My UI Lib</h2>
          <NavContent />
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Sidebar;