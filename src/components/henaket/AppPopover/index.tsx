import React from 'react'
import { Popover, PopoverProps } from 'antd'

export interface IAppPopover extends PopoverProps {}

export const AppPopover = ({ children, ...props }: IAppPopover) => {
  return <Popover {...props}>{children}</Popover>
}
