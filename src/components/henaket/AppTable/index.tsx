import React from 'react';
import { Table as AntTable, TableProps } from 'antd';
import { twMerge } from 'tailwind-merge';

export interface AppTableProps<T> extends TableProps<T> {
  className?: string;
  variant?: 'default' | 'compact';
}

export const AppTable = <T extends object>({
  className,
  variant = 'default',
  ...props
}: AppTableProps<T>) => {
  const baseClasses = 'rounded-lg overflow-hidden';
  const variantClasses = {
    default: 'bg-white',
    compact: 'bg-gray-50',
  };

  const mergedClassName = twMerge(
    baseClasses,
    variantClasses[variant],
    className
  );

  return (
    <AntTable
      className={mergedClassName}
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total) => `Total ${total} items`,
        ...props.pagination,
      }}
      {...props}
    />
  );
}; 