import { ComponentProps } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface LinkProps extends ComponentProps<typeof RouterLink> {
  opensInNewTab?: boolean;
  external?: boolean;
  containerClassName?: string;
}

const Link = (props: LinkProps): JSX.Element => {
  const { opensInNewTab, external, containerClassName, ...anchorProps } = props;

  const elementProps: ComponentProps<typeof RouterLink> = {
    ...anchorProps,
    className: cn("underline hover:opacity-70", anchorProps.className),
    ...(opensInNewTab && { rel: "noopener noreferrer", target: "_blank" }),
  };

  const element = (
    <RouterLink
      {...elementProps}
      className={cn(elementProps.className, containerClassName)}
    />
  );

  if (!external) return element;

  return (
    <div className={cn("flex items-center", containerClassName)}>
      {element}
      <ArrowUpRight className="w-4 h-4" />
    </div>
  );
};

export default Link;
