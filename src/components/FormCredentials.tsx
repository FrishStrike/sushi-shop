"use client";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import type { FormEventHandler } from "react";

const FormCredentials = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(e.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/home");
    }
  };

  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email..."
        autoComplete="off"
      />
      <input type="password" name="password" placeholder="Password..." />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default FormCredentials;
