import type { Meta, StoryObj } from '@storybook/react';
import { ShopCard, ShopCardProps } from '../components/henaket/ShopCard';
import { MessageOutlined, ShopOutlined, InfoCircleOutlined } from '@ant-design/icons';

const meta: Meta<typeof ShopCard> = {
  title: 'Henaket/Cards/ShopCard',
  component: ShopCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false },
    onArrowClick: { action: 'arrow clicked' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ShopCard>;

const sampleLinks = [
  { text: 'This is a text area where you can write whatever you want.', href: '#' },
  { text: 'This is a text area where you can write whatever you want.', href: '#' },
  { text: 'This is a text area where you can write whatever you want.', href: '#' },
  { text: 'This is a text area where you can write whatever you want.', href: '#' },
];

export const Default: Story = {
  args: {
    icon: <MessageOutlined />,
    title: 'Header',
    description: 'Supportive text for explaining the window card. Maximum 2 rows',
    links: sampleLinks,
  },
};

export const WithShopIcon: Story = {
  args: {
    icon: <ShopOutlined />,
    title: 'Shop Card',
    description: 'Description for shop card. Maximum 2 rows.',
    links: sampleLinks,
  },
};

export const WithInfoIcon: Story = {
  args: {
    icon: <InfoCircleOutlined />,
    title: 'Info Card',
    description: 'Some info about this card. Maximum 2 rows.',
    links: sampleLinks,
  },
};

export const CustomLinks: Story = {
  args: {
    icon: <MessageOutlined />,
    title: 'Custom Links',
    description: 'Different links for this card.',
    links: [
      { text: 'First custom link', href: '#' },
      { text: 'Second custom link', href: '#' },
    ],
  },
}; 