import type { Meta, StoryObj } from '@storybook/react';
import { MainShopCard } from '../components/henaket/Cards/MainShopCard';

const meta = {
  title: 'Henaket/Cards/MainShopCard',
  component: MainShopCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    href: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof MainShopCard>;

export default meta;
type Story = StoryObj<typeof MainShopCard>;

export const Default: Story = {
  args: {
    href: '#',
    title: 'Default Card',
    description: 'This is a description of the card content.',
  },
};

export const WithLinkDescription: Story = {
  args: {
    href: '#',
    title: 'User Profile',
    description: 'This card has an icon in the footer section.',
    linkDescription: 'View Profile',
  },
};
