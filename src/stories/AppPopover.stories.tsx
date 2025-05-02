import type { Meta, StoryObj } from '@storybook/react'
import { AppPopover } from '@/src/components/henaket/AppPopover'
import { AppButton } from '@/src/components/henaket/AppButton'
import { MainParagraph } from '@/src/components/henaket/Typography/Paragraphs/MainParagraph'
import { AppLink } from '@/src/components/henaket/AppLink'

const meta = {
  title: 'Henaket/Popover',
  component: AppPopover,
  args: {
    title: 'Popover Title',
    content: 'This is the content of the popover.',
    trigger: 'click',
    placement: 'top'
  },
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus', 'contextMenu']
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'left',
        'right',
        'bottom',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
        'leftTop',
        'leftBottom',
        'rightTop',
        'rightBottom'
      ]
    }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof AppPopover>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: args => (
    <AppPopover {...args} defaultOpen={true}>
      <AppButton>Click Me</AppButton>
    </AppPopover>
  )
}

export const WithJSXContent: Story = {
  args: {
    trigger: 'click',
    defaultOpen: true,
    title: '',
    content: (
      <div className={'w-[320px] max-w-3.5'}>
        <MainParagraph className={'max-w-3.5'}>
          Հայոց գրերի ստեղծման վերաբերյալ առկա են..
          <br /> Հայոց գրերի ստեղծման վերաբերյալ առկա են..
          <br /> Հայոց գրերի ստեղծման վերաբերյալ առկա են..
        </MainParagraph>
        <AppLink href={''} className={'mb-8'}>
          Հղումը այստեղ
        </AppLink>
        <AppButton variant={'outlined'} className={'w-full mt-4'}>
          Կոճակ
        </AppButton>
      </div>
    )
  },
  render: args => (
    <AppPopover {...args} className={'max-w-[320px]'}>
      <AppButton type={'primary'}>Click Me</AppButton>
    </AppPopover>
  )
}
