import type { Meta, StoryObj } from '@storybook/react';
import { AppAccordion } from '../components/henaket/Accordion';

const meta = {
  title: 'Henaket/Accordion',
  component: AppAccordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Example Accordion Title',
    description: (
      <p>
        This is example <strong>accordion description</strong> with HTML.
      </p>
    ),
    expandedDescription: false,
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    expandedDescription: { control: 'boolean' },
    actionVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined'],
    },
    actionButtonIcon: { control: 'text' },
    actionButtonLink: {
      control: 'object',
      description: 'Link button shown to the right of the accordion',
    },
    serviceTypeBadge: {
      control: 'object',
      description: 'Optional label before the accordion header',
    },
    onToggleAccordion: {
      action: 'toggled',
      description: 'Callback triggered on expand/collapse',
    },
  },
} satisfies Meta<typeof AppAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBadgeOnly: Story = {
  args: {
    actionButtonLink: undefined,
    serviceTypeBadge: {
      name: 'Beta',
      background_color: '#EEE',
      text_color: '#333',
    },
  },
};

export const WithoutDescription: Story = {
  args: {
    description: '',
  },
};

export const expandedDescriptionByDefault: Story = {
  args: {
    expandedDescription: true,
  },
};

export const WithCustomActionIcon: Story = {
  args: {
    actionButtonIcon: 'arrow_forward',
    actionButtonLink: {
      href: '/learn-more',
      display_text: 'Learn More',
    },
  },
};
