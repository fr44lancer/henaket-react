import React from 'react'
import { Collapse } from 'antd'
import AppIcon from '@/src/components/ui/Icon'

const { Panel } = Collapse

interface AccordionItem {
  key: string
  title: string
  content: React.ReactNode
}

interface AppAccordionGroupProps {
  items: AccordionItem[]
  defaultActiveKey?: string[]
  accordion?: boolean
}

export const AppAccordionGroup: React.FC<AppAccordionGroupProps> = ({
  items,
  defaultActiveKey = [],
  accordion = false
}) => {
  return (
    <Collapse
      accordion={accordion}
      defaultActiveKey={defaultActiveKey}
      expandIcon={({ isActive }) => (
        <AppIcon icon={isActive ? 'remove' : 'add'} size={20} />
      )}
      className="bg-white border border-gray-200 rounded min-w-viewport-standard"
    >
      {items.map(({ key, title, content }) => (
        <Panel
          key={key}
          header={
            <div className="text-base font-semibold text-text-800">{title}</div>
          }
          className={'app-accordion-panel border-t border-text-300 mb-20'}
        >
          <div className="text-sm text-gray-700">{content}</div>
        </Panel>
      ))}
    </Collapse>
  )
}
