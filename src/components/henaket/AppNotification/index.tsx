import React from 'react'
import { notification } from 'antd'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  WarningOutlined
} from '@ant-design/icons'
import theme from '../../../assets/styles/theme'

const configMap = {
  success: {
    icon: <CheckCircleOutlined />,
    background: theme.colors.systemSuccessLight,
    iconBg: theme.colors.systemSuccess
  },
  error: {
    icon: <CloseCircleOutlined />,
    background: theme.colors.systemErrorLight,
    iconBg: theme.colors.systemError
  },
  warning: {
    icon: <WarningOutlined />,
    background: theme.colors.systemWarningLight,
    iconBg: theme.colors.systemWarning
  },
  info: {
    icon: <InfoCircleOutlined />,
    background: theme.colors.systemInfoLight,
    iconBg: theme.colors.systemInfo
  }
}
export const showCustomNotification = (
  type: keyof typeof configMap,
  title: string,
  description: string
) => {
  console.log(88)
  const { icon, background, iconBg } = configMap[type]

  notification.open({
    message: null,
    description: (
      <div className="flex w-full overflow-hidden  shadow-sm">
        <div
          className="flex items-center justify-center w-12 text-white"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>
        <div
          className="flex-1 p-4 text-sm"
          style={{ backgroundColor: background }}
        >
          <div className="font-semibold mb-1">{title}</div>
          <div className="text-gray-700">{description}</div>
        </div>
      </div>
    ),
    duration: 0,
    style: {
      padding: 0,
      background: 'transparent',
      boxShadow: 'none'
    }
  })
}
