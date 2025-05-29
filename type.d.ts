// this file is used to define the types for the entire app

import { IconType } from './components/icons'

export interface HeaderLinkType {
    label: string
    href: string
}

export interface SocialMediaLink {
    iconName: keyof IconType
    href: string
}
export interface ButtonProps {
  label: string;
  icon?: keyof IconType;
  iconVariant?: IconVariant;
  className?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

export interface InfosProps {
  label : string;
  href: string;
  iconName: keyof IconType;
}

