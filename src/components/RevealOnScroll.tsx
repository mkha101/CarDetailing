import React, { useRef, useEffect, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const threshold = window.innerWidth < 736 ? 0.1 : 0.7;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current!);
          }
        });
      },
      {
        threshold: threshold, // Use the dynamically determined threshold
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-8 opacity-0"
      } transition-all duration-500 ease-in-out`}
    >
      {children}
    </div>
  );
};
export default RevealOnScroll;
