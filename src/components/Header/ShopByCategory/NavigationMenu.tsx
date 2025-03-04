"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavigationMenu className="w-full font-normal">
      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(true)} className="p-2">
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop Menu */}
      <NavigationMenuList className="hidden md:flex justify-between items-center gap-4">
        <MenuItems />
      </NavigationMenuList>

      {/* Mobile Menu Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-4">
          <NavigationMenuList className="flex flex-col gap-2">
            <MenuItems />
          </NavigationMenuList>
        </DialogContent>
      </Dialog>
    </NavigationMenu>
  );
}

const MenuItems = () => (
  <>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Home</NavigationMenuTrigger>
      <NavigationMenuContent className="w-[300px] md:w-[400px] lg:w-[500px]">
        <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr] text-left">
          <ListItem href="/docs" title="Introduction">
            Re-usable components built using Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem href="/docs/installation" title="Installation">
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem href="/docs/primitives/typography" title="Typography">
            Styles for headings, paragraphs, lists, etc.
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
      <NavigationMenuContent className="w-[300px] md:w-[500px] lg:w-[600px]">
        <ul className="grid gap-3 p-4 md:grid-cols-2 text-left">
          {components.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
      <NavigationMenuContent className="w-[300px] md:w-[500px] lg:w-[600px]">
        <ul className="grid gap-3 p-4 md:grid-cols-2 text-left">
          {components.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
      <NavigationMenuContent className="w-[300px] md:w-[500px] lg:w-[600px]">
        <ul className="grid gap-3 p-4 md:grid-cols-2 text-left">
          {components.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/allSellers" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          All Sellers
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/flashSale" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Flash Sale
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </>
);

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-normal leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
