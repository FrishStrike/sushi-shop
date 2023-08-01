"use client";

import { setUser } from "@/services/users.service";
import { signIn } from "next-auth/react";
import { FormEventHandler } from "react";

const FormRegistration = () => {
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nickname = formData.get("nickname");
    const email = formData.get("email");
    const password = formData.get("password");

    if (nickname?.toString() && email?.toString() && password?.toString()) {
      const user = {
        nickname: nickname as string,
        email: email as string,
        password: password as string,
        // _id: Date.now().toString() as string,
      };
      const newUser = await setUser(user);
      signIn("credentials");
    }
  };

  return (
    <form className="signin-form" onSubmit={onSubmit}>
      <input type="text" name="nickname" placeholder="Your nickname..." />
      <input type="email" name="email" placeholder="Your email..." />
      <input type="password" name="password" placeholder="Your password..." />

      <button>Register</button>
    </form>
  );
};

export default FormRegistration;
