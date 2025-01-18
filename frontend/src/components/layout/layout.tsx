import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-screen h-screen">{children}</div>;
};

const LayoutMain = ({
  className,
  overflowScroll = true,
  children,
}: {
  className?: string;
  overflowScroll?: boolean;
  children: ReactNode;
}) => {
  return (
    <main
      className={cn(
        "flex-1 h-full w-full min-w-0",
        overflowScroll && "overflow-scroll",
        className,
      )}
    >
      {children}
    </main>
  );
};

export { Layout, LayoutMain };
