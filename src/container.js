import React from "react";
import { clsx } from "clsx";

const Container = ({ children, className }) => {
  return (
    <div className={clsx(className, "max-w-screen-xl mx-auto px-2.5 sm:px-5")}>
      {children}
    </div>
  );
};

export default Container;
