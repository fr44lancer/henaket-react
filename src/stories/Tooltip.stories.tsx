import type { Meta, StoryObj } from '@storybook/react'
import { AppTooltip } from '@/src/components/henaket/AppTooltip'
import { AppButton } from '@/src/components/henaket/AppButton'

const meta = {
  title: 'Henaket/Tooltip',
  component: AppTooltip,

  tags: ['autodocs'],
  args: {
    title: 'Tooltip Content',
    placement: 'top',
    trigger: 'hover',
    arrow: true
  },
  argTypes: {
    title: { control: 'text' },
    placement: {
      control: 'select',
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
        'leftTop',
        'leftBottom',
        'rightTop',
        'rightBottom'
      ]
    },
    trigger: {
      control: 'select',
      options: ['hover', 'focus', 'click', 'contextMenu']
    },
    arrow: {
      control: 'boolean'
    }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof AppTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <AppTooltip
      {...args}
      defaultOpen={true}
      title={'Սա հուշում է պատկերակի վրա'}
    >
      <AppButton type={'primary'}>Hover Me</AppButton>
    </AppTooltip>
  )
}
