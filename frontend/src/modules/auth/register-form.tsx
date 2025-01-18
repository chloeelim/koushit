import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { useSetUserStore } from "@/app/providers/user-store";
import { signUpAuthSignupPost } from "@/client";
import ErrorAlert from "@/components/form/fields/error-alert";
import PasswordField from "@/components/form/fields/password-field";
import TextField from "@/components/form/fields/text-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const registerFormInputSchema = z
  .object({
    username: z.string().min(1, "Enter your username"),
    email: z.string().min(1, "Enter your email").email("Enter a valid email"),
    password: z
      .string()
      .min(1, "Enter your password")
      .min(6, "Password must be minimum 6 characters"),
  })
  .required();

type RegisterFormInput = z.infer<typeof registerFormInputSchema>;

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const setUser = useSetUserStore();

  const form = useForm<RegisterFormInput>({
    resolver: zodResolver(registerFormInputSchema),
    defaultValues: { username: "", email: "", password: "" },
  });

  const registerMutation = useMutation({
    mutationFn: (data: RegisterFormInput) =>
      signUpAuthSignupPost({ body: data }),
    onSuccess: (data) => {
      setUser(data.data?.user);
      queryClient.refetchQueries({ queryKey: ["auth", "session"] });
      navigate("/");
    },
    onError: (error) => {
      form.setError("root", { message: error.message });
    },
  });

  const onSubmit: SubmitHandler<RegisterFormInput> = async (data) => {
    await registerMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Register your account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Sign up to access {import.meta.env.VITE_APP_NAME}
          </p>
        </div>
        <div className="grid gap-6">
          {form.formState.errors.root?.message && (
            <ErrorAlert message={form.formState.errors.root.message} />
          )}
          <div className="grid gap-2 mb-4">
            <TextField
              label="Username"
              name="username"
              placeholder="username"
            />
            <TextField
              label="Email"
              name="email"
              placeholder="youremail@example.com"
            />
            <PasswordField label="Password" name="password" />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </form>
    </Form>
  );
}
