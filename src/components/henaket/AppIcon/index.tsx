import React from 'react'
import classNames from 'classnames'

interface AppIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: string
  size?: string // e.g., "16px", "1.5rem", etc.
}

export const AppIcon: React.FC<AppIconProps> = ({ icon, size = '1em' }) => {
  return (
    <span
      className={classNames('app-icon', 'select-none')}
      data-icon-name={icon}
      style={{ fontSize: size }}
    />
  )
}
