import React from 'react'
import { Tag, TagProps } from 'antd'

interface AppLabelProps extends TagProps {}

export const AppLabel = ({ children, ...props }: AppLabelProps) => {
  return <Tag {...props}>{children}</Tag>
}
