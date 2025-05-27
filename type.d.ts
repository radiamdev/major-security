// this file is used to define the types for the entire app

import { IconType } from "./components/icons";

export interface HeaderLinkType {
  label: string;
  href: string;
}

export interface SocialMediaLink {
  iconName: keyof IconType;
  href: string;
}
