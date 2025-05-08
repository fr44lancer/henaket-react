import React from 'react';
import { Pagination, PaginationProps } from 'antd';

interface AppAlertProps extends PaginationProps {}

export const AppPagination: React.FC<AppAlertProps> = ({ ...props }) => {
  return <Pagination {...props} />;
};
