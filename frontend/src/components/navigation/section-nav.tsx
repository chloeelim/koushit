import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SectionNavItemProps {
  label: string;
  id: string;
  href?: string;
}

const SectionNavItem = ({ label, id, href }: SectionNavItemProps) => {
  const pathname = useLocation();

  if (href) {
    return (
      <nav>
        <Link to={href}>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "w-full justify-start",
              href.startsWith(pathname.pathname) && "bg-muted",
            )}
          >
            {label}
          </Button>
        </Link>
      </nav>
    );
  }

  return (
    <nav>
      <Button
        variant="ghost"
        size="sm"
        className="w-full justify-start"
        onClick={() => {
          const component = document.getElementById(id);
          component?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {label}
      </Button>
    </nav>
  );
};

interface SectionNavProps {
  items: SectionNavItemProps[];
  className?: string;
}

const SectionNav = ({ items, className }: SectionNavProps) => {
  return (
    <aside className={cn("lg:sticky lg:top-0 h-fit", className)}>
      <div className="-mx-3 lg:mx-0">
        {items.map((item) => (
          <SectionNavItem key={item.id} {...item} />
        ))}
      </div>
      <Separator className="mt-4 md:hidden" />
    </aside>
  );
};

export default SectionNav;
