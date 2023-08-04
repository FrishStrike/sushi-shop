"use client";

import { requestSendMail } from "@/services/mail.service";
import { setUser } from "@/services/users.service";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const FormRegistration = () => {
  const [error, setError] = useState("");
  const [active, setActive] = useState(false);
  const [userCode, setUserCode] = useState("");

  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nickname = formData.get("nickname");
    const email = formData.get("email");
    const password = formData.get("password");
    const code = formData.get("code");

    const user = {
      nickname: nickname as string,
      email: email?.toString().toLowerCase() as string,
      password: password as string,
    };

    if (active) {
      if (code !== userCode) {
        setError("Code is wrong");
        return;
      }
      const res = await setUser(user);

      if (!res.data.length) {
        setError("This user already exists");
        return;
      }

      router.push("/api/auth/signin");
    }

    if (nickname?.toString() && email?.toString() && password?.toString()) {
      if (nickname.length < 4 || email.length < 10 || password.length < 8) {
        setError("Repeat with other fields");
        return;
      }

      const code: any = await requestSendMail(user);

      if (code === "Email send error") {
        setError("Email error");
        return;
      }

      if (code.data === "Error send mail") {
        setError("This mail is not exist");
        return;
      }

      setUserCode(code.data.code);

      setActive(true);
    } else {
      setError("The fields are empty!");
    }
  };

  return (
    <form className="signin-form" onSubmit={onSubmit}>
      <input
        className={active ? "invisible" : ""}
        type="text"
        name="nickname"
        placeholder="Your nickname..."
      />
      <input
        className={active ? "invisible" : ""}
        type="email"
        name="email"
        placeholder="Your email..."
      />
      <input
        className={active ? "invisible" : ""}
        type="password"
        name="password"
        placeholder="Your password..."
      />
      <input
        className={active ? "" : "invisible"}
        type="text"
        name="code"
        placeholder="code sent on your email"
      />
      <div className="error">
        <h2>{error}</h2>
      </div>

      <button>Register</button>
    </form>
  );
};

export default FormRegistration;
