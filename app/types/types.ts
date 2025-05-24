export interface ImagePop {
  render: string;
  width: number;
  height: number;
  type?: string;
}

export interface Summaries {
  title: string;
  description: string;
  render: string;
  date: number;
  video?: boolean;
}

export interface CarouselProps {
  summaries: Summaries[];
  type?: string;
}

export interface Summary {
  description: string;
  link?: string;
}

export interface DescriptionProps {
  summaries: Summary[];
  currentIndex: number;
}

export interface MediaCardProps {
  render: Summaries[];
  type?: string;
}
