import React from 'react'
import { Switch, SwitchProps } from 'antd'

export const AppSwitch = (props: SwitchProps) => {
  return <Switch {...props} className={`app-switch ${props.className ?? ''}`} />
}
