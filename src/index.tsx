import React, { useState } from 'react';

interface Content {
  id: string;
  title: string;
  type: 'movie' | 'series';
  year: number;
  icon: string;
  prime: boolean;
}

const PrimeVideo: React.FC = () => {
  const [content] = useState<Content[]>([
    { id: '1', title: 'The Boys', type: 'series', year: 2019, icon: '🦸', prime: true },
    { id: '2', title: 'Fallout', type: 'series', year: 2024, icon: '☢️', prime: true },
    { id: '3', title: 'Reacher', type: 'series', year: 2022, icon: '💪', prime: true },
    { id: '4', title: 'The Terminal List', type: 'series', year: 2022, icon: '🎯', prime: true },
    { id: '5', title: 'Citadel', type: 'series', year: 2023, icon: '🕵️', prime: true },
  ]);

  return (
    <div className="h-full bg-[#0f171e] text-white overflow-auto">
      {/* Header */}
      <div className="h-14 bg-[#1a242f] flex items-center px-6 gap-8">
        <div className="text-2xl font-bold text-[#00a8e1]">prime video</div>
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:text-[#00a8e1]">Home</a>
          <a href="#" className="hover:text-[#00a8e1]">Movies</a>
          <a href="#" className="hover:text-[#00a8e1]">TV Shows</a>
          <a href="#" className="hover:text-[#00a8e1]">Live TV</a>
        </nav>
      </div>

      {/* Hero */}
      <div className="h-80 bg-gradient-to-r from-[#1a242f] via-[#0f171e] to-[#1a242f] flex items-center px-12">
        <div>
          <div className="text-sm text-[#00a8e1] mb-2">✓ Included with Prime</div>
          <h1 className="text-5xl font-bold mb-4">The Boys</h1>
          <p className="text-gray-300 max-w-xl mb-4">A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.</p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-white text-black rounded font-semibold hover:bg-gray-200">
              ▶ Play
            </button>
            <button className="px-6 py-2 bg-gray-700 rounded hover:bg-gray-600">
              + Watchlist
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Top Picks For You</h2>
        <div className="grid grid-cols-5 gap-4">
          {content.map(item => (
            <div key={item.id} className="cursor-pointer group">
              <div className="aspect-[16/9] bg-gray-800 rounded flex items-center justify-center text-4xl mb-2 group-hover:ring-2 ring-white transition-all">
                {item.icon}
              </div>
              <div className="text-sm font-medium">{item.title}</div>
              <div className="text-xs text-gray-400">
                {item.prime && <span className="text-[#00a8e1]">Prime • </span>}
                {item.type} • {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimeVideo;
