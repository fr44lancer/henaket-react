import type { Meta, StoryObj } from '@storybook/react';
import { AppModal } from '../components/henaket/AppModal';
import { AppButton } from '../components/henaket/AppButton';
import React from 'react';

const meta = {
  title: 'Henaket/Modal',
  component: AppModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    open: true,
    title: 'Մոդալ պատուհան',
    children: (
      <p>
        Ծրագրին կարող են մասնակցել աշխարհի ցանկացած վայրից այն ստարտափները,
        որոնց հիմնադիրների կամ համահիմնադիրների առնվազն կեսը սփյուռքահայեր են:
        Ծրագրի կարևոր նախապայմաններից է Հայաստանում ստարտափ գրանցելը,
        գործունեություն ծավալելը և առնվազն մեկ տարի Հայաստանում բնակվելը և
        նախքան ծրագրին դիմելը կազմավորված թիմ ունենալը:
      </p>
    ),
    cancelButton: (
      <AppButton variant="outlined" color="primary">
        Երկրորդային
      </AppButton>
    ),

    okButton: (
      <AppButton variant="solid" color="primary">
        Հիմնական
      </AppButton>
    ),
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is visible',
    },
    title: {
      control: 'text',
    },
    children: {
      control: false,
      description: 'Modal content',
    },
    okButton: {
      control: false,
    },
    cancelButton: {
      control: false,
    },
    onOk: { action: 'confirmed' },
    onCancel: { action: 'cancelled' },
  },
} satisfies Meta<typeof AppModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div>
        <h4 className="mb-2">Are you sure you want to proceed?</h4>
        <p className="text-sm text-gray-600">This action cannot be undone.</p>
      </div>
    ),
  },
};

export const WithoutButtons: Story = {
  args: {
    okButton: null,
    cancelButton: null,
  },
};

export const CustomFooter: Story = {
  args: {
    okButton: (
      <AppButton variant="solid" color="green">
        Yes
      </AppButton>
    ),
    cancelButton: (
      <AppButton variant="text" color="danger">
        No
      </AppButton>
    ),
  },
};
