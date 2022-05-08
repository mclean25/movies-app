import React from "react";

const PageLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full px-12 pt-10">
      <h1 className="text-2xl font-bold underline">Alex&apos;s Movie Site</h1>
      <div className="mt-12">{children}</div>
    </div>
  );
};

export default PageLayout;
