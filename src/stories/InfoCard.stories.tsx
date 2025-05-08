import type { Meta, StoryObj } from '@storybook/react';
import { InfoCard } from '../components/henaket/Cards/InfoCard';
import {
  ShoppingCartOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';

const meta = {
  title: 'Henaket/Cards/InfoCard',
  component: InfoCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'withImage', 'withIcon'],
    },
    label: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    subtitle: 'This is a subtitle',
    description: 'This is a description of the card content.',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'NEW',
    title: 'Card with Label',
    subtitle: 'Featured Product',
    description: 'This card has a label to highlight important information.',
  },
};

export const WithImage: Story = {
  args: {
    variant: 'withImage',
    image: 'https://picsum.photos/300/200',
    title: 'Card with Image',
    subtitle: 'Image Card Example',
    description: 'This card includes an image at the top.',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'withIcon',
    icon: <UserOutlined />,
    title: 'User Profile',
    subtitle: 'Personal Information',
    description: 'This card has an icon in the footer section.',
  },
};

export const MultipleExamples: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <InfoCard
        label="FEATURED"
        title="Premium Service"
        subtitle="Best Value"
        description="Get access to all premium features and benefits."
      />
      <InfoCard
        variant="withImage"
        image="https://picsum.photos/300/200"
        title="Product Showcase"
        subtitle="New Arrival"
        description="Check out our latest product collection."
      />
      <InfoCard
        variant="withIcon"
        icon={<ShoppingCartOutlined />}
        title="Shopping Cart"
        subtitle="Your Items"
        description="View and manage your shopping cart items."
      />
      <InfoCard
        variant="withIcon"
        icon={<StarOutlined />}
        title="Customer Reviews"
        subtitle="Top Rated"
        description="Read what our customers say about us."
      />
    </div>
  ),
};
