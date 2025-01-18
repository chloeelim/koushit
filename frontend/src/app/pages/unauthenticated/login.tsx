import { Speech } from "lucide-react";

import { LoginForm } from "@/modules/auth/login-form";

const LoginPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Speech className="size-4" />
          </div>
          {import.meta.env.VITE_APP_NAME}
        </a>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
