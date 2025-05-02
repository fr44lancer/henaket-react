import type { Meta, StoryObj } from '@storybook/react'
import { AppLabel } from '@/src/components/henaket/AppLabel'
import { CheckCircleFilled } from '@ant-design/icons'
import theme from '@/src/assets/styles/theme'

const meta = {
  title: 'Henaket/Label',
  component: AppLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'DEFAULT LABEL'
  },
  argTypes: {
    color: {
      control: 'color',
      description: 'Color of the Tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    icon: {
      control: false, // Use JSX in stories
      description: 'Set the icon of the tag',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' }
      }
    },
    closeIcon: {
      control: false, // Use JSX or null/false in stories
      description: 'Custom close icon (null or false to hide)',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'false' }
      }
    },
    bordered: {
      control: 'boolean',
      description: 'Whether has border style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    onClose: {
      action: 'closed',
      description: 'Callback executed when tag is closed',
      table: {
        type: {
          summary: '(e: React.MouseEvent<HTMLElement, MouseEvent>) => void'
        }
      }
    }
  }
} satisfies Meta<typeof AppLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIcon: Story = {
  args: {
    children: 'With Icon',
    color: '#06435e',
    icon: <CheckCircleFilled />
  }
}

export const Closable: Story = {
  args: {
    children: 'Closable Label',
    color: theme.colors.gray800,
    closeIcon: <CheckCircleFilled />,
    onClose: () => console.log('Closed!')
  }
}

export const Borderless: Story = {
  args: {
    children: 'No Border',
    color: '#7e0101',
    bordered: false
  }
}

export const CustomCloseIcon: Story = {
  args: {
    children: 'Custom Close',
    color: '#736207',
    closeIcon: <span style={{ fontWeight: 'bold' }}>×</span>
  }
}

export const ClosableNoIcon: Story = {
  args: {
    children: 'No Close Button',
    color: '#D9F7BE',
    closeIcon: false
  }
}
