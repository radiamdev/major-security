// this component is used to wrap content in a container with a common className in order to maintain consistent styling across the application

import { RefObject } from "react";

interface ContainerProps {
  children: React.ReactNode;
  tag?: "section" | "div" | "header" | "footer";
  className?: string;
  id?: string
  ref?: RefObject<HTMLDivElement | null>
}

export default function Container(props: ContainerProps) {
  const { children, tag = "section", className = "", id, ref } = props;
  const Tag = tag;
  return <Tag ref={ref} id={id} className={` mx-auto w-full h-fit relative max-w-[1440px] px-5 md:px-7 xl:px-20 ${className}`}>
    {children}
  </Tag>;
}
