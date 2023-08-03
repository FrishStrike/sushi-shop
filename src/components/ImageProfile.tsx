"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  className?: string;
}

const ImageProfile: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const session = useSession();
  if (!session?.data) {
    return (
      <button
        className={`sign-in-btn ${className}`}
        onClick={() => router.push("/api/auth/signin")}
      >
        Sign In
      </button>
    );
  }

  return (
    <div className={`img-profile ${className}`}>
      {session?.data?.user?.image ? (
        <img src={session.data.user.image} alt="" />
      ) : (
        <FaUserCircle size={55} />
      )}
    </div>
  );
};

export default ImageProfile;
