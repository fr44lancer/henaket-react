import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AppFeedback, AppFeedbackForm, AppFeedbackThankYou } from '@/src/components/henaket/AppFeedback';

const meta: Meta<typeof AppFeedback> = {
  title: 'Henaket/Feedback',
  component: AppFeedback,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppFeedback>;

export const UsefulYesNo: Story = {
  render: () => {
    const [thankYou, setThankYou] = useState(false);
    return thankYou ? (
      <AppFeedback thankYou />
    ) : (
      <AppFeedback type="useful-yesno" onFeedback={() => setThankYou(true)} />
    );
  },
};

export const UsefulThumbs: Story = {
  render: () => {
    const [thankYou, setThankYou] = useState(false);
    return thankYou ? (
      <AppFeedback thankYou />
    ) : (
      <AppFeedback type="useful-thumbs" onFeedback={() => setThankYou(true)} />
    );
  },
};

export const UsefulEmoji: Story = {
  render: () => {
    const [thankYou, setThankYou] = useState(false);
    return thankYou ? (
      <AppFeedback thankYou />
    ) : (
      <AppFeedback type="useful-emoji" onFeedback={() => setThankYou(true)} />
    );
  },
};

export const RateEmoji: Story = {
  render: () => {
    const [thankYou, setThankYou] = useState(false);
    return thankYou ? (
      <AppFeedback thankYou />
    ) : (
      <AppFeedback type="rate-emoji" onFeedback={() => setThankYou(true)} />
    );
  },
};

export const RateText: Story = {
  render: () => {
    const [thankYou, setThankYou] = useState(false);
    return thankYou ? (
      <AppFeedback thankYou />
    ) : (
      <AppFeedback type="rate-text" onFeedback={() => setThankYou(true)} />
    );
  },
};

export const WithReportButton: Story = {
  render: () => <AppFeedback type="useful-yesno" onFeedback={() => {}} onReportProblem={() => alert('Report!')} />,
};

export const FeedbackForm: Story = {
  render: () => {
    const [sent, setSent] = useState(false);
    return sent ? (
      <AppFeedbackThankYou />
    ) : (
      <AppFeedbackForm onSend={() => setSent(true)} onCancel={() => setSent(true)} />
    );
  },
};

export const ThankYou: Story = {
  render: () => <AppFeedbackThankYou message="Thank you for your feedback!" />,
}; 