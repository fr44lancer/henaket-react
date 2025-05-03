import type { Meta, StoryObj } from '@storybook/react'
import { AppLink } from '@/src/components/henaket/AppLink'
import { MainShopCard } from '@/src/components/henaket/Cards/MainShopCard'
import { AppCard } from '@/src/components/henaket/AppCard'
import { UserOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons'

const meta = {
  title: 'Henaket/Cards/InfoCard',
  component: AppCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
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
  }
} satisfies Meta<typeof AppCard>

export default meta
type Story = StoryObj<typeof AppCard>

export const Default: Story = {
  args: {
    title: 'Default Card',
    subtitle: 'This is a subtitle',
    description: 'This is a description of the card content.',
  }
}

export const WithLabel: Story = {
  args: {
    label: 'NEW',
    title: 'Card with Label',
    subtitle: 'Featured Product',
    description: 'This card has a label to highlight important information.',
  }
}

export const WithImage: Story = {
  args: {
    variant: 'withImage',
    image: 'https://picsum.photos/300/200',
    title: 'Card with Image',
    subtitle: 'Image Card Example',
    description: 'This card includes an image at the top.',
  }
}

export const WithIcon: Story = {
  args: {
    variant: 'withIcon',
    icon: <UserOutlined />,
    title: 'User Profile',
    subtitle: 'Personal Information',
    description: 'This card has an icon in the footer section.',
  }
}

export const MultipleExamples: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <AppCard
        label="FEATURED"
        title="Premium Service"
        subtitle="Best Value"
        description="Get access to all premium features and benefits."
      />
      <AppCard
        variant="withImage"
        image="https://picsum.photos/300/200"
        title="Product Showcase"
        subtitle="New Arrival"
        description="Check out our latest product collection."
      />
      <AppCard
        variant="withIcon"
        icon={<ShoppingCartOutlined />}
        title="Shopping Cart"
        subtitle="Your Items"
        description="View and manage your shopping cart items."
      />
      <AppCard
        variant="withIcon"
        icon={<StarOutlined />}
        title="Customer Reviews"
        subtitle="Top Rated"
        description="Read what our customers say about us."
      />
    </div>
  ),
}
