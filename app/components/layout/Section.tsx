import React, { useRef, useEffect } from "react";

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
  onVisible?: (id: string) => void;
}

export default function Section({
  id,
  title,
  className = "",
  children,
  onVisible,
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (onVisible) {
              onVisible(id);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [id, onVisible]);

  return (
    <section id={id} ref={sectionRef} className={`py-20 reveal ${className}`}>
      <h2 className="font-heading font-bold text-4xl text-center mt-8 mb-12">
        {title}
      </h2>
      {children}
    </section>
  );
}
