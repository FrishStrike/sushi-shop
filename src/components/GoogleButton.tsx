"use client";
import { signIn } from "next-auth/react";

const GoogleButton = () => {
  return (
    <button
      className="googleButton"
      onClick={() => signIn("google", { callbackUrl: "/home" })}
    >
      SignIn with Google
    </button>
  );
};

export default GoogleButton;
