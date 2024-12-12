export interface ImagePop {
  render: string;
  width: number;
  height: number;
}

export interface Summaries {
  title: string;
  description: string;
  render: string;
  date: number;
}

export interface CarouselProps {
  summaries: Summaries[];
}
