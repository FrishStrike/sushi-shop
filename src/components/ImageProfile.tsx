"use client";
import { useSession } from "next-auth/react";
import { FaRegUserCircle } from "react-icons/fa";

interface Props {
  className?: string;
}

const ImageProfile: React.FC<Props> = ({ className }) => {
  const session = useSession();
  if (!session?.data) {
    return;
  }

  return (
    <div className={`img-profile ${className}`}>
      {session?.data?.user?.image ? (
        <img src={session.data.user.image} alt="" />
      ) : (
        <FaRegUserCircle size={55} />
      )}
    </div>
  );
};

export default ImageProfile;
