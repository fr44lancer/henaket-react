import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/features/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Henaket/Features/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => <Footer />,
}; 