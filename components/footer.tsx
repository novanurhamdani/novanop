"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2 relative overflow-hidden">
      <div className={`pt-4 text-center text-xs`}>
        <p> &copy; {currentYear} Nova Nurhamdani. All rights reserved.</p>
        <p className="mt-1">
          <span className="inline-block px-2 py-1 bg-background">
            Built with Next.js and Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  );
}
