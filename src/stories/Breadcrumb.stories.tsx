import type { Meta, StoryObj } from '@storybook/react';
import { AppBreadcrumb } from '../components/henaket/AppBreadcrumb';

const meta: Meta<typeof AppBreadcrumb> = {
  title: 'Henaket/Breadcrumb',
  component: AppBreadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppBreadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { title: 'First Page', href: '/' },
      { title: 'Components', href: '/components' },
      { title: 'Breadcrumbs', href: '/components/breadcrumbs' },
      { title: 'Last Item Here' },
    ],
  },
};

export const OnlyOne: Story = {
  args: {
    items: [{ title: 'Only One Item' }],
  },
};

export const AllLinks: Story = {
  args: {
    items: [
      { title: 'Home', href: '/' },
      { title: 'Section', href: '/section' },
      { title: 'Subsection', href: '/section/sub' },
      { title: 'Final', href: '/section/sub/final' },
    ],
  },
};
