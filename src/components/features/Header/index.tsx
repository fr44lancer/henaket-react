import React from 'react';
import { Image } from 'antd';

const Header: React.FC = () => (
  <header className="bg-blue-900 text-white px-4 py-2 flex items-center justify-between min-w-[950px]">
    <div className="flex items-center gap-2">
      <Image
        src={'../../../../logoLight.svg'}
        alt="Republic of Armenia Logo"
        preview={false}
      />
      <span className="font-semibold text-lg">Republic of Armenia</span>
    </div>
    <div className="flex items-center gap-4">
      <input
        className="rounded px-2 py-1 text-blue-900"
        placeholder="Search..."
      />
      <button className="bg-white text-blue-900 px-2 py-1 rounded">
        English
      </button>
    </div>
  </header>
);

export default Header;
