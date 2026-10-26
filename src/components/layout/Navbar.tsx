import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/cn";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/40 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          Nattawat
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors duration-150",
                    activeId === item.id
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {mobileOpen && (
        <nav className="border-t border-border/60 bg-background md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block py-3 text-sm transition-colors duration-150",
                    activeId === item.id
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
