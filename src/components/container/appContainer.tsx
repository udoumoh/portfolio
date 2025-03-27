import React from "react";

interface ContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  id?: string;
}

const AppContainer = ({ children, className, id }: ContainerProps) => {
  return (
    <div id={id} className={"max-w-[2160px] mx-auto w-full  " + className}>
      {children}
    </div>
  );
};
export default AppContainer;
