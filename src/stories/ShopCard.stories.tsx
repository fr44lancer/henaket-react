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

export const ServicesSection: Story = {
  render: () => (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-1">Services</h2>
        <p className="text-gray-700 text-base max-w-2xl">
          A maximum 3 line statement to summarise the activity or policy goal of the ministry.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ShopCard
          icon={<MessageOutlined />}
          title="A four service group name, maximum 2 lines of text recommended so titles have room."
          description="Supportive text for explaining the window card. Maximum 2 lines of text recommended so that the card stays compact."
          links={[
            { text: 'Top service name goes here (1 line)', href: '#' },
            { text: 'Top service name goes here (1 line)', href: '#' },
          ]}
        />
        <ShopCard
          icon={<ShopOutlined />}
          title="A very very longer service group name, maximum 2 lines of text recommended so titles have room."
          description="Supportive text for explaining the window card. Maximum 2 lines of text recommended so that the card stays compact."
          links={[
            { text: 'Top service name goes here (1 line)', href: '#' },
            { text: 'Top service name goes here (1 line)', href: '#' },
          ]}
        />
        <ShopCard
          icon={<InfoCircleOutlined />}
          title="Top service name goes here (1 line)"
          description="Supportive text for explaining the window card. Maximum 2 lines of text recommended so that the card stays compact."
          links={[
            { text: 'Top service name goes here (1 line)', href: '#' },
            { text: 'Top service name goes here (1 line)', href: '#' },
          ]}
        />
      </div>
    </div>
  ),
}; 