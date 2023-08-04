"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, type FormEventHandler } from "react";

const FormCredentials = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    console.log(res?.error);

    if (res && !res?.error) {
      router.push("/home");
    } else {
      if (res?.error === "Wrong email") {
        setError("Wrong email");
      }
      if (res?.error === "Wrong password") {
        setError("Wrong password");
      }
      if (res?.error === "The fields are empty") {
        setError("The fields are empty");
      }
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
      {error && <h2 className="error-signIn">{error}</h2>}
    </form>
  );
};

export default FormCredentials;
