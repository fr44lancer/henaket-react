import React from 'react'
import { Tooltip } from 'antd'
import { TooltipPropsWithTitle } from 'antd/es/tooltip'

export interface IAppTooltip extends TooltipPropsWithTitle {}

export const AppTooltip = ({ ...props }: IAppTooltip) => {
  return <Tooltip {...props} />
}
