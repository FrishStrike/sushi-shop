"use client";

import { useRouter } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

const MainButton: React.FC<Props> = ({ href, children }) => {
  const router = useRouter();
  return <button onClick={() => router.push(href)}>{children}</button>;
};

export default MainButton;
