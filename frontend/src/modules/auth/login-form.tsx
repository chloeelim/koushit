import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { useSetUserStore } from "@/app/providers/user-store";
import { logInAuthLoginPost } from "@/client";
import ErrorAlert from "@/components/fields/error-alert";
import PasswordField from "@/components/form/fields/password-field";
import TextField from "@/components/form/fields/text-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const loginFormInputSchema = z
  .object({
    usernameOrEmail: z.string().min(1, "Enter your username or email"),
    password: z.string().min(1, "Enter your password"),
  })
  .required();

type LoginFormInput = z.infer<typeof loginFormInputSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const setUser = useSetUserStore();

  const form = useForm<LoginFormInput>({
    resolver: zodResolver(loginFormInputSchema),
    defaultValues: { usernameOrEmail: "", password: "" },
  });

  const loginMutation = useMutation({
    mutationFn: (data: LoginFormInput) =>
      logInAuthLoginPost({ body: { ...data, username: data.usernameOrEmail } }),
    onSuccess: (data) => {
      setUser(data.data?.user);
      queryClient.refetchQueries({ queryKey: ["auth", "session"] });
      navigate("/");
    },
    onError: () => {
      form.setError("root", { message: "Invalid login credentials" });
    },
  });

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    await loginMutation.mutate(data);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login with your email and password</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6 mb-4">
                {form.formState.errors.root?.message && (
                  <ErrorAlert message={form.formState.errors.root.message} />
                )}
                <div className="space-y-4">
                  <TextField label="Username or email" name="usernameOrEmail" />
                  <PasswordField label="Password" name="password" />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
