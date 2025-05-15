import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="max-w-[1640px] mx-auto ">{children}</div>;
}

export default Container;
