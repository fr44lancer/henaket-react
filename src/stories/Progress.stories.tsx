import type { Meta, StoryObj } from '@storybook/react'
import { AppProgress } from '@/src/components/henaket/AppProgress'
import { Space } from 'antd'

const meta = {
  title: 'Henaket/Progress',
  component: AppProgress,
  tags: ['autodocs'],
  args: {
    percent: 70,
    status: 'active'
  },
  argTypes: {
    percent: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    status: {
      control: 'select',
      options: ['normal', 'active', 'success', 'exception']
    },
    showInfo: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof AppProgress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Examples: Story = {
  render: () => (
    <Space direction="vertical" size="large" className="w-full">
      {[0, 20, 40, 60, 80].map(value => (
        <AppProgress key={value} percent={value} />
      ))}
    </Space>
  )
}

export const Steps: Story = {
  render: () => (
    <Space direction="vertical" size="large" className="w-full">
      {[0, 20, 40, 60, 80].map(value => (
        <AppProgress
          key={value}
          percent={value}
          steps={10}
          size={[36, 16]}
          format={(percent, successPercent) => `Քայլ 4 /  10`}
          percentPosition={{ align: 'start', type: 'outer' }}
        />
      ))}
    </Space>
  )
}

export const Success: Story = {
  args: {
    percent: 100,
    status: 'success'
  }
}

export const Error: Story = {
  args: {
    percent: 45,
    status: 'exception'
  }
}
