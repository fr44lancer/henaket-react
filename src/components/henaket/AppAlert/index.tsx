import React from 'react'
import { AlertProps } from 'antd'
import StyledAppAlert from '@/src/components/henaket/AppAlert/style'

interface AppAlertProps extends AlertProps {}

export const AppAlert: React.FC<AppAlertProps> = ({ ...props }) => {
  return <StyledAppAlert {...props} />
}
