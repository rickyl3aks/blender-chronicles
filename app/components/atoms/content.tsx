export const Content = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <p className={className}>{children}</p>;
};
