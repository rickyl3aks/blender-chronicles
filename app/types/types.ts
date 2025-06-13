export interface Category {
  label: string;
  value: string;
}

export interface ResourcesData {
  id: number;
  title: string;
  url: string;
  tags: string[];
  description: string;
  img: string;
  alt: string;
}

export interface Items {
  title: string;
  description: string;
  label: string;
  href: string;
  img?: string;
}

export interface Resource {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  alt: string;
}

export interface GalleryItem {
  id: string | number;
  src: string;
  alt: string;
  category: string;
  featured: boolean;
}
export interface LightboxProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

export interface ProjectItem {
  id: string | number;
  title: string;
  src: string;
  description: string;
  render: string;
  date: number;
}

export interface ProjectProps {
  items: ProjectItem[];
}

// button types

export type Variant = "primary" | "accent";

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

interface BaseButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: Variant;
  className?: string;
}

interface ButtonAsButtonProps extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  as?: "button";
  href?: never;
}

interface ButtonAsAnchorProps extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  as?: "a";
  href: string;
}
