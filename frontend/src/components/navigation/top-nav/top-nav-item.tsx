import { Link, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";

export interface TopNavItemProps {
  label: string;
  path: string;
  isShown?: boolean;
}

const TopNavItem = ({ label, path, isShown = true }: TopNavItemProps) => {
  const { pathname } = useLocation();

  if (!isShown) return <></>;
  return (
    <Link
      className={cn(
        "text-sm font-medium transition-colors hover:text-foreground/80",
        pathname === path || (path !== "/" && pathname.startsWith(path))
          ? "text-foreground"
          : "text-foreground/60",
      )}
      to={path}
    >
      {label}
    </Link>
  );
};

export default TopNavItem;
