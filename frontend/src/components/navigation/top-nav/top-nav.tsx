import { ReactNode } from "react";
import { Link } from "react-router-dom";

import TopNavActionLink, {
  TopNavActionLinkProps,
} from "@/components/navigation/top-nav/top-nav-action-link";
import TopNavItem, {
  TopNavItemProps,
} from "@/components/navigation/top-nav/top-nav-item";
import { cn } from "@/lib/utils";

interface TopNavProps {
  topNavItems?: TopNavItemProps[];
  topNavActionLinks?: TopNavActionLinkProps[];
  children?: ReactNode;
}

const TopNav = ({ topNavItems, topNavActionLinks, children }: TopNavProps) => {
  return (
    <div
      className={`flex items-center justify-between sticky top-0 z-50 w-full h-top-nav px-8 py-3 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}
    >
      <div className="flex items-center">
        <Link to="/" className="mr-8">
          <span className="font-bold tracking-wide">
            {import.meta.env.VITE_APP_NAME}
          </span>
        </Link>
        <nav className="flex items-center gap-x-6">
          {topNavItems?.map((navItem) => (
            <TopNavItem key={navItem.label} {...navItem} />
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-x-2">
        {topNavActionLinks?.map((actionLink) => (
          <TopNavActionLink key={actionLink.label} {...actionLink} />
        ))}
        {children}
      </div>
    </div>
  );
};

TopNav.Layout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col h-screen">{children}</div>;
};

TopNav.Main = (props: { className?: string; children: ReactNode }) => {
  return (
    <main
      className={cn(
        `flex-1 w-full h-top-nav-main overflow-scroll`,
        props.className,
      )}
    >
      {props.children}
    </main>
  );
};

export default TopNav;
