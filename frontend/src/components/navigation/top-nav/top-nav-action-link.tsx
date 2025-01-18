import { Link } from "react-router-dom";
import { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";

export interface TopNavActionLinkProps {
  label: string;
  path: string;
  buttonVariant?: VariantProps<typeof buttonVariants>["variant"];
}

const TopNavActionLink = ({
  label,
  path,
  buttonVariant = "ghost",
}: TopNavActionLinkProps) => {
  return (
    <Button
      asChild
      className="h-8 px-3 py-1 text-sm transition-colors"
      variant={buttonVariant}
    >
      <Link to={path}>{label}</Link>
    </Button>
  );
};

export default TopNavActionLink;
