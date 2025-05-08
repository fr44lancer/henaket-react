import React from 'react';
import {
  Breadcrumb as AntBreadcrumb,
  BreadcrumbProps as AntBreadcrumbProps,
} from 'antd';
import theme from '../../../assets/styles/theme';
import { AppLink } from '../../henaket//AppLink';
import { twMerge } from 'tailwind-merge';

export interface AppBreadcrumbItem {
  title: string;
  href?: string;
}

export interface AppBreadcrumbProps extends Omit<AntBreadcrumbProps, 'items'> {
  items: AppBreadcrumbItem[];
  className?: string;
}

export const AppBreadcrumb: React.FC<AppBreadcrumbProps> = ({
  items,
  className,
  ...props
}) => {
  return (
    <AntBreadcrumb
      separator={<span className="mx-2 text-gray-400">&gt;</span>}
      className={twMerge('text-base', className)}
      {...props}
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        if (item.href && !isLast) {
          return (
            <AntBreadcrumb.Item key={item.title}>
              <AppLink
                href={item.href}
                className="text-gray-800 hover:text-blue-800 underline underline-offset-2 decoration-[1.5px]"
              >
                {item.title}
              </AppLink>
            </AntBreadcrumb.Item>
          );
        }
        return (
          <AntBreadcrumb.Item key={item.title}>
            <span
              className={twMerge(
                isLast
                  ? 'text-blue-700 underline underline-offset-4 decoration-2 font-medium'
                  : 'text-gray-800',
                'cursor-default',
              )}
              style={isLast ? { color: theme.colors.linkMain } : {}}
            >
              {item.title}
            </span>
          </AntBreadcrumb.Item>
        );
      })}
    </AntBreadcrumb>
  );
};
