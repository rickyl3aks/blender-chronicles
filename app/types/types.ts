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
