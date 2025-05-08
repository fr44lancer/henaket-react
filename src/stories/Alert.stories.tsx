import type { Meta, StoryObj } from '@storybook/react';
import { AppAlert } from '../components/henaket/AppAlert';
import { fn } from '@storybook/test';

const meta = {
  title: 'Henaket/Alert',
  component: AppAlert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    message: 'Alert Title',
    description: 'Detailed description and advice about the alert.',
    type: 'info',
    showIcon: true,
    closable: false,
    banner: false,
    onClose: fn(),
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error'],
    },
    banner: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
    closable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof AppAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Success Tips',
    description:
      'Detailed description and advice about successful copywriting.',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Informational Notes',
    description: 'Additional description and information about copywriting.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Warning',
    description: 'This is a warning notice about copywriting.',
    closable: true,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Error',
    description: 'This is an error message about copywriting.',
  },
};

export const Banners: Story = {
  render: () => (
    <>
      <AppAlert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        className={'mb-2'}
        showIcon
        banner
      />
      <AppAlert
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        className={'mb-2'}
        showIcon
        banner
      />
      <AppAlert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        className={'mb-2'}
        showIcon
        closable
        banner
      />
      <AppAlert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        className={'mb-2'}
        showIcon
        banner
      />
    </>
  ),
};
