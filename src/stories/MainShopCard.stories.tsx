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
    title: 'Default Card',
    description: 'This is a description of the card content.',
  },
};

export const WithLabel: Story = {
  args: {
    title: 'Card with Label',
    description: 'This card has a label to highlight important information.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    description: 'This card includes an image at the top.',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'User Profile',
    description: 'This card has an icon in the footer section.',
  },
};

export const MultipleExamples: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MainShopCard
        href={'#'}
        title="Premium Service"
        description="Get access to all premium features and benefits."
      />
      <MainShopCard
        href={'#'}
        title="Product Showcase"
        description="Check out our latest product collection."
      />
      <MainShopCard
        href={'#'}
        title="Shopping Cart"
        description="View and manage your shopping cart items."
      />
      <MainShopCard
        href={'#'}
        title="Customer Reviews"
        description="Read what our customers say about us."
      />
    </div>
  ),
};
