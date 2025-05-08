import React from 'react';
import { Button, ButtonProps, ConfigProvider } from 'antd';

export const AppButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Button: {
            /*Global buttons token*/
            fontWeight: 500,
            opacityLoading: 0.4,
            defaultShadow: 'none',
            primaryShadow: 'none',
          },
        },
      }}
    >
      <Button {...props}>{children}</Button>
    </ConfigProvider>
  );
};
