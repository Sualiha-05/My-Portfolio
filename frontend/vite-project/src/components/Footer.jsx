import React from 'react';

export default function Footer() {
  return (
    <footer className="py-4 border-t mt-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base text-gray-650 dark:text-gray-300 font-medium">
          © {new Date().getFullYear()} Sualiha Salahuddin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
