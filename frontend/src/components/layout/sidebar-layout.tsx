import { ReactNode } from "react";

import { Layout, LayoutMain } from "@/components/layout/layout";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "../ui/breadcrumb";

import AppSidebar from "./sidebar";

const SidebarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <Layout>
        <AppSidebar />
        <LayoutMain overflowScroll={false}>
          <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
            <div className="flex items-center gap-2 px-4 overflow-x-clip">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb className="max-w-full">
                <BreadcrumbList className="flex-nowrap whitespace-nowrap max-w-full overflow-x-clip">
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <LayoutMain className="h-[calc(100vh_-_48px)]">{children}</LayoutMain>
        </LayoutMain>
      </Layout>
    </SidebarProvider>
  );
};

export default SidebarLayout;
