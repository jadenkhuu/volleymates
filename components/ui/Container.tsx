export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-6xl mx-auto px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
