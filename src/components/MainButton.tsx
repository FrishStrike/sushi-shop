"use client";

import { useRouter } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const MainButton: React.FC<Props> = ({ href, children, className }) => {
  const router = useRouter();
  return (
    <button className={className} onClick={() => router.push(href)}>
      {children}
    </button>
  );
};

export default MainButton;
