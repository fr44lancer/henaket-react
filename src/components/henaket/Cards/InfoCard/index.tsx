import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InfoCardProps {
  label?: string;
  image?: string;
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  description?: string;
  variant?: 'default' | 'withImage' | 'withIcon';
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  label,
  image,
  icon,
  title,
  subtitle,
  description,
  variant = 'default',
  className,
}) => {
  return (
    <div
      className={twMerge(
        'rounded-lg border border-gray-200 bg-white shadow-sm p-4 flex flex-col min-w-[220px] max-w-[260px]',
        className,
      )}
    >
      {label && (
        <div className="mb-2">
          <span className="inline-block bg-gray-100 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
            {label}
          </span>
        </div>
      )}
      {image && variant === 'withImage' && (
        <img
          src={image}
          alt="card"
          className="w-full h-28 object-cover rounded mb-2"
        />
      )}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="font-semibold text-lg mb-1">{title}</div>
          <div className="text-gray-500 text-sm mb-2">{subtitle}</div>
          {description && (
            <div className="text-gray-700 text-xs mb-2">{description}</div>
          )}
        </div>
        {icon && variant === 'withIcon' && (
          <div className="w-full flex justify-center items-center bg-blue-700 rounded-b-lg py-6 mt-2">
            <span className="text-white text-3xl">{icon}</span>
          </div>
        )}
      </div>
    </div>
  );
};
