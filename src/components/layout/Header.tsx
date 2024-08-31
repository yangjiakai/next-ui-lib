import React from 'react';
import Link from 'next/link';
import { ModeToggle } from "@/components/switcher/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const elements = [
  { name: "All", count: null, url: "/elements" },
  { name: "Buttons", count: 1734, url: "/elements?category=buttons" },
  { name: "Checkboxes", count: 230, url: "/elements?category=checkboxes" },
  { name: "Toggle switches", count: 327, url: "/elements?category=toggle-switches" },
  { name: "Cards", count: 961, url: "/elements?category=cards" },
  { name: "Loaders", count: 879, url: "/elements?category=loaders" },
  { name: "Inputs", count: 272, url: "/elements?category=inputs" },
  { name: "Radio buttons", count: 127, url: "/elements?category=radio-buttons" },
  { name: "Forms", count: 216, url: "/elements?category=forms" },
  { name: "Patterns", count: 133, url: "/elements?category=patterns" },
  { name: "Tooltips", count: 91, isNew: true, url: "/elements?category=tooltips" },
  { name: "My favorites", count: null, icon: "🔖", url: "/elements?category=favorites" },
];

function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold text-primary">
              UIverse
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Elements</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {elements.map((element) => (
                        <li key={element.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={element.url}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium leading-none">
                                  {element.name}
                                  {element.isNew && (
                                    <span className="ml-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                                      New
                                    </span>
                                  )}
                                </span>
                                {element.count !== null && (
                                  <span className="text-sm text-muted-foreground">
                                    {element.count}
                                  </span>
                                )}
                                {element.icon && (
                                  <span className="text-lg">{element.icon}</span>
                                )}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/challenges" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Challenges
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button variant="default">Create</Button>
            <Button variant="outline">Sign In</Button>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;