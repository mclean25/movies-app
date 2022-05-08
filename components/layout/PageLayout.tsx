import { useRouter } from "next/router";
import React from "react";

const PageLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="w-full px-6 pt-5">
      <h1
        onClick={() => router.push("/")}
        className="cursor-pointer text-2xl font-bold underline"
      >
        Alex&apos;s Movie Site
      </h1>
      <div className="mt-12">{children}</div>
    </div>
  );
};

export default PageLayout;
