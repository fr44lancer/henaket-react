import type { Meta, StoryObj } from '@storybook/react'
import { AppTitle } from '@/src/components/henaket/Typography/AppTitle'

const meta = {
  title: 'Henaket/Heading',
  component: AppTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    level: 1,
    fontWeight: 'medium',
    children: 'Heading Title'
  },
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      description: 'Heading level (1–5)'
    },
    fontWeight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Custom font weight class suffix'
    },
    children: {
      control: 'text'
    },
    className: {
      control: 'text',
      description: 'Custom class name'
    }
  }
} satisfies Meta<typeof AppTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Heading1: Story = {
  args: {
    level: 1,
    children: 'Heading 1'
  }
}

export const Heading2: Story = {
  args: {
    level: 2,
    children: 'Heading 2'
  }
}

export const Heading3: Story = {
  args: {
    level: 3,
    children: 'Heading 3'
  }
}

export const SemiboldHeading: Story = {
  args: {
    level: 2,
    fontWeight: 'semibold',
    children: 'Semibold H2'
  }
}

export const CustomClass: Story = {
  args: {
    level: 4,
    fontWeight: 'medium',
    className: 'text-red-600 underline',
    children: 'Custom Styled Title'
  }
}
