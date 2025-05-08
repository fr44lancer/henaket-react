import React from 'react'
import { Progress, ProgressProps } from 'antd'
import theme from '../../../assets/styles/theme'

export interface IAppProgress extends ProgressProps {}

export const AppProgress = ({ ...props }: IAppProgress) => {
  return (
    <div
      className={
        'bg-blue-100 border-blue-300 border-2 rounded-md px-1 h-[23px]'
      }
    >
      <Progress
        {...props}
        strokeWidth={16}
        strokeColor={theme.colors.blue800}
      />
    </div>
  )
}
