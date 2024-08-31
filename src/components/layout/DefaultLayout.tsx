
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col flex-1 overflow-hidden border-t border-b border-gray-200 dark:border-gray-700">
        <div className="h-px bg-gray-200 dark:bg-gray-700" />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-4">
            {children}
          </main>
        </div>
        <div className="h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
