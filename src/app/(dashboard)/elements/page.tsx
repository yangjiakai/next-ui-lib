import React from 'react';
import Image from 'next/image';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ElementCard {
  id: string;
  title: string;
  author: string;
  views: number;
  likes: number;
  isPro?: boolean;
}

const elements: ElementCard[] = [
  { id: '1', title: 'Button', author: 'cssbuttons-io', views: 18000, likes: 180 },
  { id: '2', title: 'Social Media Icons', author: 'Praashoo7', views: 46000, likes: 2500, isPro: true },
  { id: '3', title: 'Username Input', author: 'ilyaxu123', views: 49000, likes: 1200 },
  { id: '4', title: 'Toggle Switch', author: 'Nawsome', views: 18000, likes: 855 },
  { id: '5', title: 'Menu Button', author: 'gagan-gv', views: 33000, likes: 890 },
  { id: '6', title: 'Name Input', author: 'Allyhere', views: 15000, likes: 179 },
  // ... 添加更多元素
];

export default function ElementsPage() {
    // 生成一个固定的随机种子
  const randomSeed = React.useMemo(() => Math.floor(Math.random() * 1000), []);
  return (
    
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">UI Elements</h1>
          <div className="flex space-x-4">
            <Input type="text" placeholder="Search tags, users, posts..." className="w-64" />
            <Button>Search</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {elements.map((element) => (
          <div key={element.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1642888621621-ff7d83f3fdcf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                alt={element.title}
                width={500}
                height={500}
              />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{element.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">by {element.author}</p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{element.views.toLocaleString()} views</span>
                  <span>{element.likes.toLocaleString()} likes</span>
                </div>
                {element.isPro && (
                  <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-2">
                    Pro
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
 
  );
}