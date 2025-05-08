import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { twMerge } from 'tailwind-merge';

export interface ShopCardLink {
  text: string;
  href: string;
}

export interface ShopCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  links: ShopCardLink[];
  onArrowClick?: () => void;
  className?: string;
}

export const ShopCard: React.FC<ShopCardProps> = ({
  icon,
  title,
  description,
  links,
  onArrowClick,
  className,
}) => {
  return (
    <div className={twMerge('bg-white rounded-lg border border-gray-200 shadow-sm p-4 min-w-[260px] max-w-[320px] flex flex-col', className)}>
      <div className="border-t-2 border-blue-700 mb-3 w-full" />
      <div className="flex items-center mb-2">
        <span className="text-blue-700 text-2xl mr-2">{icon}</span>
        <span className="font-bold text-blue-700 text-lg flex-1">{title}</span>
        <button
          type="button"
          onClick={onArrowClick}
          className="text-blue-700 hover:text-blue-900 p-0 ml-2 bg-transparent border-none outline-none"
          aria-label="Go"
        >
          <RightOutlined />
        </button>
      </div>
      <div className="text-gray-500 text-sm mb-3 leading-tight">
        {description}
      </div>
      <div className="flex flex-col gap-1">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="text-blue-700 underline text-sm hover:text-blue-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export * from './index'; 