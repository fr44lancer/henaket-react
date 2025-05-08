import type { Meta, StoryObj } from '@storybook/react';
import { AppTabs } from '../components/henaket/AppTabs';

const meta = {
  title: 'Henaket/Tabs',
  component: AppTabs,
  args: {
    defaultActiveKey: '1',
    items: [
      {
        key: '1',
        label: 'Tab One',
        children: 'Content of Tab One',
      },
      {
        key: '2',
        label: 'Tab Two',
        children: 'Content of Tab Two',
      },
      {
        key: '3',
        label: 'Tab Three',
        children: 'Content of Tab Three',
      },
    ],
    centered: false,
    type: 'line',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['line', 'card'],
    },
    centered: { control: 'boolean' },
    tabPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AppTabs>;

export default meta;
type Story = StoryObj<typeof AppTabs>;

export const Default: Story = {};

export const CardTabs: Story = {
  args: {
    type: 'card',
  },
};

export const VerticalTabs: Story = {
  args: {
    tabPosition: 'left',
  },
};

export const CenteredTabs: Story = {
  args: {
    centered: true,
  },
};
