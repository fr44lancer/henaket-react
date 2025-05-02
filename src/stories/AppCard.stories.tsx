import type { Meta, StoryObj } from '@storybook/react'
import { AppLink } from '@/src/components/henaket/AppLink'
import { MainShopCard } from '@/src/components/henaket/Cards/MainShopCard'

const meta = {
  title: 'Henaket/Card',
  component: MainShopCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    href: '/',
    children: 'Click Me',
    type: 'default',
    external: false,
    target: '_self'
  },
  argTypes: {
    href: {
      control: 'text'
    },
    children: {
      control: 'text'
    },
    target: {
      control: 'select',
      options: ['_self', '_blank']
    },
    type: {
      control: 'select',
      options: ['default', 'footer', 'light', 'disabled']
    },
    external: {
      control: 'boolean'
    },
    className: {
      control: 'text'
    }
  }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'default',
    children: 'Default Link',
    title: 'Heading',
    description: 'Description text text text text text text text text text text text text text ...',
    linkDescription: 'Link Description'
  }
}

export const Footer: Story = {
  args: {
    type: 'footer',
    children: 'Footer Link'
  }
}

export const Light: Story = {
  args: {
    type: 'light',
    children: 'Light Link'
  }
}

export const Disabled: Story = {
  args: {
    type: 'disabled',
    children: 'Disabled Link',
    href: '#'
  }
}

export const External: Story = {
  args: {
    type: 'default',
    children: 'External Link',
    href: 'https://example.com',
    target: '_blank',
    external: true
  }
}
