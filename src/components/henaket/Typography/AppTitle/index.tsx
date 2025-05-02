import React from 'react'
import { Typography } from 'antd'
import { TitleProps } from 'antd/lib/typography/Title'

const { Title } = Typography

interface IAppTitle extends TitleProps {
  className?: string
  fontWeight?: 'medium' | 'semibold' | 'bold'
}

export const AppTitle = ({
  level,
  children,
  className,
  fontWeight = 'medium',
  ...props
}: IAppTitle) => {
  return (
    <Title
      className={`app-title font${
        fontWeight ? '-' + fontWeight : ''
      } ${className || ''} h${level}`}
      level={level}
      {...props}
    >
      {children}
    </Title>
  )
}
