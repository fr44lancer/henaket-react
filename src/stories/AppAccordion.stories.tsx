import type { Meta, StoryObj } from '@storybook/react'
import { AppAccordion } from '@/src/components/henaket/Accordion'

const meta = {
  title: 'Henaket/Accordion',
  component: AppAccordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Example Accordion Title',
    content:
      '<p>This is example <strong>accordion content</strong> with HTML.</p>',
    expanded: false
  },
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    expanded: { control: 'boolean' },
    actionVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined']
    },
    actionButtonIcon: { control: 'text' },
    actionButtonLink: {
      control: 'object',
      description: 'Link button shown to the right of the accordion'
    },
    serviceTypeBadge: {
      control: 'object',
      description: 'Optional label before the accordion header'
    },
    onToggle: {
      action: 'toggled',
      description: 'Callback triggered on expand/collapse'
    }
  }
} satisfies Meta<typeof AppAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithBadgeOnly: Story = {
  args: {
    actionButtonLink: undefined,
    serviceTypeBadge: {
      name: 'Beta',
      background_color: '#EEE',
      text_color: '#333'
    }
  }
}

export const WithoutContent: Story = {
  args: {
    content: ''
  }
}

export const ExpandedByDefault: Story = {
  args: {
    expanded: true
  }
}

export const WithCustomActionIcon: Story = {
  args: {
    actionButtonIcon: 'arrow_forward',
    actionButtonLink: {
      href: '/learn-more',
      display_text: 'Learn More'
    }
  }
}
