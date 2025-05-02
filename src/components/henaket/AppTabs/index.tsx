import React from 'react'
import { Tabs, TabsProps } from 'antd'

export interface IAppTabs extends TabsProps {}

export const AppTabs = (props: IAppTabs) => {
  return <Tabs {...props} />
}
