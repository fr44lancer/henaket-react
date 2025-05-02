import React, { useState } from 'react';
import theme from '@/src/assets/styles/theme';
import { AppButton } from '@/src/components/henaket/AppButton';
import { AppIcon } from '@/src/components/henaket/AppIcon';
import { twMerge } from 'tailwind-merge';

export type FeedbackType =
  | 'useful-yesno'
  | 'useful-thumbs'
  | 'useful-emoji'
  | 'rate-emoji'
  | 'rate-text';

interface AppFeedbackProps {
  type: FeedbackType;
  onFeedback: (value: string) => void;
  onReportProblem?: () => void;
  showReportButton?: boolean;
  thankYou?: boolean;
  thankYouMessage?: string;
  className?: string;
}

const emojiList = [
  { value: 'very-bad', label: '😡', title: 'Very Bad' },
  { value: 'bad', label: '😕', title: 'Bad' },
  { value: 'sufficient', label: '😐', title: 'Sufficient' },
  { value: 'good', label: '🙂', title: 'Good' },
  { value: 'excellent', label: '😃', title: 'Excellent' },
];

const textList = [
  { value: 'very-bad', label: 'Very Bad' },
  { value: 'bad', label: 'Bad' },
  { value: 'sufficient', label: 'Sufficient' },
  { value: 'good', label: 'Good' },
  { value: 'excellent', label: 'Excellent' },
];

export const AppFeedback: React.FC<AppFeedbackProps> = ({
  type,
  onFeedback,
  onReportProblem,
  showReportButton = true,
  thankYou = false,
  thankYouMessage = 'Thank you for your feedback',
  className,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  if (thankYou) {
    return (
      <div className={twMerge('bg-gray-100 border border-gray-300 rounded p-4 text-center', className)}>
        <span className="font-medium text-gray-700">{thankYouMessage}</span>
      </div>
    );
  }

  return (
    <div className={twMerge('bg-gray-50 border border-gray-300 rounded p-4 flex flex-col gap-2', className)}>
      {/* Prompt */}
      {type.startsWith('useful') && (
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-800 font-medium">Is this page useful?</span>
          {type === 'useful-yesno' && (
            <>
              <AppButton
                size="small"
                variant={selected === 'yes' ? 'solid' : 'outlined'}
                color={selected === 'yes' ? 'primary' : 'default'}
                onClick={() => { setSelected('yes'); onFeedback('yes'); }}
              >
                Yes
              </AppButton>
              <AppButton
                size="small"
                variant={selected === 'no' ? 'solid' : 'outlined'}
                color={selected === 'no' ? 'primary' : 'default'}
                onClick={() => { setSelected('no'); onFeedback('no'); }}
              >
                No
              </AppButton>
            </>
          )}
          {type === 'useful-thumbs' && (
            <>
              <AppButton
                size="small"
                variant={selected === 'up' ? 'solid' : 'outlined'}
                color={selected === 'up' ? 'primary' : 'default'}
                onClick={() => { setSelected('up'); onFeedback('up'); }}
                icon={<AppIcon icon="thumb_up" />}
              />
              <AppButton
                size="small"
                variant={selected === 'down' ? 'solid' : 'outlined'}
                color={selected === 'down' ? 'primary' : 'default'}
                onClick={() => { setSelected('down'); onFeedback('down'); }}
                icon={<AppIcon icon="thumb_down" />}
              />
            </>
          )}
          {type === 'useful-emoji' && (
            <>
              <AppButton
                size="small"
                variant={selected === 'up' ? 'solid' : 'outlined'}
                color={selected === 'up' ? 'primary' : 'default'}
                onClick={() => { setSelected('up'); onFeedback('up'); }}
                className="text-xl"
              >👍</AppButton>
              <AppButton
                size="small"
                variant={selected === 'down' ? 'solid' : 'outlined'}
                color={selected === 'down' ? 'primary' : 'default'}
                onClick={() => { setSelected('down'); onFeedback('down'); }}
                className="text-xl"
              >👎</AppButton>
            </>
          )}
        </div>
      )}
      {/* Service rating */}
      {type.startsWith('rate') && (
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-800 font-medium">How would you rate the service?</span>
          {type === 'rate-emoji' && (
            <>
              {emojiList.map(e => (
                <AppButton
                  key={e.value}
                  size="small"
                  variant={selected === e.value ? 'solid' : 'outlined'}
                  color={selected === e.value ? 'primary' : 'default'}
                  onClick={() => { setSelected(e.value); onFeedback(e.value); }}
                  className="text-xl"
                  aria-label={e.title}
                >{e.label}</AppButton>
              ))}
            </>
          )}
          {type === 'rate-text' && (
            <>
              {textList.map(e => (
                <AppButton
                  key={e.value}
                  size="small"
                  variant={selected === e.value ? 'solid' : 'outlined'}
                  color={selected === e.value ? 'primary' : 'default'}
                  onClick={() => { setSelected(e.value); onFeedback(e.value); }}
                >{e.label}</AppButton>
              ))}
            </>
          )}
        </div>
      )}
      {/* Report problem button */}
      {showReportButton && (
        <div className="flex justify-end">
          <AppButton
            size="small"
            variant="outlined"
            color="default"
            onClick={onReportProblem}
            className="border-gray-400 text-gray-700"
          >
            Report a problem with this page
          </AppButton>
        </div>
      )}
    </div>
  );
};

// Feedback form
export interface AppFeedbackFormProps {
  onSend: (data: { email: string; message: string }) => void;
  onCancel: () => void;
  loading?: boolean;
  error?: string;
  description?: string;
}

export const AppFeedbackForm: React.FC<AppFeedbackFormProps> = ({
  onSend,
  onCancel,
  loading,
  error,
  description = 'Help us improve!',
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form
      className="bg-gray-50 border border-gray-300 rounded p-4 flex flex-col gap-3"
      onSubmit={e => {
        e.preventDefault();
        onSend({ email, message });
      }}
    >
      <div className="font-medium text-gray-800 mb-1">Help us improve!</div>
      <div className="text-sm text-gray-600 mb-2">{description}</div>
      <label className="text-xs text-gray-700">Email</label>
      <input
        type="email"
        className="border border-gray-400 rounded px-2 py-1 mb-2"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Your email (optional)"
      />
      <label className="text-xs text-gray-700">What went wrong?</label>
      <textarea
        className="border border-gray-400 rounded px-2 py-1 mb-2 min-h-[80px]"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Describe the issue..."
      />
      {error && <div className="text-red-600 text-xs mb-2">{error}</div>}
      <div className="flex gap-2 mt-2">
        <AppButton type="button" variant="outlined" color="default" onClick={onCancel}>
          Cancel
        </AppButton>
        <AppButton type="submit" variant="solid" color="primary" loading={loading}>
          Send
        </AppButton>
      </div>
    </form>
  );
};

// Thank you message
export const AppFeedbackThankYou: React.FC<{ message?: string }> = ({ message = 'Thank you for your feedback!' }) => (
  <div className="bg-gray-100 border border-gray-300 rounded p-4 text-center">
    <span className="font-medium text-gray-700">{message}</span>
  </div>
); 