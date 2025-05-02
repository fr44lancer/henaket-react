'use client'

import React from 'react'
import { Button, ButtonProps } from 'antd'

export const AppButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}
