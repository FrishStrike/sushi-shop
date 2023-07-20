"use client";
import { signIn, useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  className?: string;
}

const ImageProfile: React.FC<Props> = ({ className }) => {
  const session = useSession();
  if (!session?.data) {
    return (
      <button className={`sign-in-btn ${className}`} onClick={() => signIn()}>
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
