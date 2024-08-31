
import React from 'react';

interface FooterProps {
  // Add any props if needed
}

function Footer({}: FooterProps) {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} My UI Lib. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
