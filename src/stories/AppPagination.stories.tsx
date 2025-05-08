import type { Meta, StoryObj } from '@storybook/react';
import { AppPagination } from '../components/henaket/AppPagination';

const meta: Meta<typeof AppPagination> = {
  title: 'Henaket/Pagination',
  component: AppPagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    current: {
      control: 'number',
      description: 'Current page number',
    },
    total: {
      control: 'number',
      description: 'Total number of items',
    },
    pageSize: {
      control: 'number',
      description: 'Items per page',
    },
    showSizeChanger: {
      control: 'boolean',
      description: 'Show page size changer',
    },
    showQuickJumper: {
      control: 'boolean',
      description: 'Show quick page jumper',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable pagination',
    },
    simple: {
      control: 'boolean',
      description: 'Use simple pagination',
    },
    onChange: { action: 'page changed' },
  },
};

export default meta;
type Story = StoryObj<typeof AppPagination>;

export const Default: Story = {
  args: {
    current: 1,
    total: 50,
    pageSize: 10,
    showSizeChanger: true,
    showQuickJumper: true,
  },
};

export const Simple: Story = {
  args: {
    current: 1,
    total: 50,
    simple: true,
  },
};

export const Disabled: Story = {
  args: {
    current: 1,
    total: 50,
    disabled: true,
  },
};

export const LargeDataset: Story = {
  args: {
    current: 1,
    total: 5000,
    showSizeChanger: true,
    showQuickJumper: true,
  },
};
