import { ButtonProps } from "@/type";
import Icon from "../icons";

export default function Button(props: ButtonProps) {
  const { label, icon, iconVariant = "blue", className = "", type = "button", onClick } = props;
  return (
    <button type={type} className={`bg-primary text-foreground py-4 md:py-5 px-8 md:px-10 rounded-[16px] !font-semibold hover:brightness-90 hover:cursor-pointer transition-colors ${className}`} onClick={onClick}>
      {
        icon &&
        <span>
          <Icon name={icon} variant={iconVariant} />
        </span>
      }
      <span className="text-xl">{label}</span>
    </button>
  );
}