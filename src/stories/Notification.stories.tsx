import type { Meta, StoryObj } from '@storybook/react';
import { AppButton } from '../components/henaket/AppButton';
import { notification, Space } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { showCustomNotification } from '../components/henaket/AppNotification';

const meta = {
  title: 'Henaket/Notification',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <AppButton
      type={'primary'}
      onClick={() =>
        showCustomNotification(
          'success',
          'Հաջողություն',
          'Ձեր դիմումը ուղարկվել է',
        )
      }
    >
      Հաջողություն
    </AppButton>
  ),
};

export const DefaultTypes: Story = {
  render: () => (
    <Space direction="vertical">
      <AppButton
        type={'primary'}
        onClick={() =>
          showCustomNotification(
            'success',
            'Հաջողություն',
            'Ձեր դիմումը ուղարկվել է',
          )
        }
      >
        Հաջողություն
      </AppButton>
      <AppButton
        type={'primary'}
        onClick={() =>
          showCustomNotification('warning', 'Զգուշացում', 'Կարող է լինել խնդիր')
        }
      >
        Զգուշացում
      </AppButton>
      <AppButton
        type={'primary'}
        onClick={() =>
          showCustomNotification('error', 'Սխալ', 'Ոչ մի բան չաշխատեց')
        }
      >
        Սխալ
      </AppButton>
      <AppButton
        type={'primary'}
        onClick={() =>
          showCustomNotification(
            'info',
            'Տեղեկություն',
            'Ձեր գրանցումը հաջողվեց',
          )
        }
      >
        Տեղեկություն
      </AppButton>
    </Space>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <AppButton
      onClick={() =>
        notification.open({
          message: 'Custom Icon',
          description: 'This notification uses a smile icon.',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        })
      }
    >
      Notification with Custom Icon
    </AppButton>
  ),
};
