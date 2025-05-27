import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Mail from "./Mail";
import Phone from "./Phone";
import Play from "./Play";
import Twitter from "./Twitter";

export const icon = {
  facebook: <Facebook />,
  instagram: <Instagram />,
  mail: <Mail />,
  phone: <Phone />,
  play: <Play />,
  twitter: <Twitter />
};

export type IconType = typeof icon;
export type IconVariant = "blue" | "white"

interface IconProps {
  className?: string;
  variant?: IconVariant;
  name: keyof IconType;
}



export default function Icon(props: IconProps) {
  const { variant = "blue", name, className = "" } = props;

  return (
    <span
      className={`icon ${variant ? variant : ''} ${className}`}
    >
      {icon[name]}
    </span>
  );
}

