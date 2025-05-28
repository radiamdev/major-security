// this component is used to wrap content in a container with a common className in order to maintain consistent styling across the application

interface ContainerProps {
  children: React.ReactNode;
  tag?: "section" | "div" | "header" | "footer";
  className?: string;
  id?: string
}

export default function Container(props: ContainerProps) {
  const { children, tag = "section", className = "", id } = props;
  const Tag = tag;
  return <Tag id={id} className={` mx-auto w-full h-fit relative max-w-[1440px] px-5 md:px-7 xl:px-20 ${className}`}>
    {children}
  </Tag>;
}
