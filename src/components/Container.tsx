// Container.tsx
import type { ReactNode } from "react";
import React from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
