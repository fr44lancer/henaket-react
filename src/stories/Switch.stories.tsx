import type { Meta, StoryObj } from '@storybook/react';
import { AppSwitch } from '../components/henaket/AppSwith';

const meta = {
  title: 'Henaket/Switch',
  component: AppSwitch,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AppSwitch>;

export default meta;
type Story = StoryObj<typeof AppSwitch>;

export const States: Story = {
  render: () => <AppSwitch />,
};
