import React from 'react';
import logoLight from '../../../assets/images/logoLight.svg';

const Header: React.FC = () => (
  <header className="bg-blue-900 text-white px-4 py-2 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <img src={logoLight} alt="Republic of Armenia Logo" className="w-8 h-8 bg-white rounded-full object-contain" />
      <span className="font-semibold text-lg">Republic of Armenia</span>
    </div>
    <div className="flex items-center gap-4">
      <input className="rounded px-2 py-1 text-blue-900" placeholder="Search..." />
      <button className="bg-white text-blue-900 px-2 py-1 rounded">English</button>
    </div>
  </header>
);

export default Header; 