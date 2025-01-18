import { ReactNode } from "react";

import TopNav from "@/components/navigation/top-nav/top-nav";
import { TopNavActionLinkProps } from "@/components/navigation/top-nav/top-nav-action-link";
import { TopNavItemProps } from "@/components/navigation/top-nav/top-nav-item";

const unauthenticatedTopNavItems: TopNavItemProps[] = [];

const unauthenticatedTopActionLinks: TopNavActionLinkProps[] = [
  { label: "Login", path: "/login", buttonVariant: "outline" },
  { label: "Register", path: "/register" },
];

const UnauthenticatedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <TopNav.Layout>
      <TopNav
        topNavItems={unauthenticatedTopNavItems}
        topNavActionLinks={unauthenticatedTopActionLinks}
      />
      <TopNav.Main>{children}</TopNav.Main>
    </TopNav.Layout>
  );
};

export default UnauthenticatedLayout;
