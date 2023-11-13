import React from "react";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";

const HomeButton = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/Dashboard");
  };

  return (
    <button
      onClick={handleGoHome}
      className="bg-blue-500 text-white px-3 py-2 rounded-lg"
    >
      <HomeIcon />
    </button>
  );
};

export default HomeButton;
