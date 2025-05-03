import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/features/Header';

const meta: Meta<typeof Header> = {
  title: 'Henaket/Features/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
}; 