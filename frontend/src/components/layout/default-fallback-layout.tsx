import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

import TopNav from "@/components/navigation/top-nav/top-nav";

const DefaultFallbackLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <TopNav.Layout>
        <TopNav />
        <TopNav.Main>{children}</TopNav.Main>
      </TopNav.Layout>
    </BrowserRouter>
  );
};

export default DefaultFallbackLayout;
