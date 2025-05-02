import type { Meta, StoryObj } from '@storybook/react'
import { AppButton } from '@/src/components/henaket/AppButton'
import RefreshIcon from '@mui/icons-material/Refresh'

const meta = {
  title: 'Henaket/Button',
  component: AppButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    children: 'Click Me'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'text']
    },
    color: {
      control: 'select',
      options: ['primary', 'default', 'green', 'danger', 'neutral']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end']
    }
  }
} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof meta>

export const SolidPrimary: Story = {
  args: { variant: 'solid', color: 'primary' }
}

export const SolidWithIconStart: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    icon: <RefreshIcon className="w-4 h-4" />,
    children: 'Start Icon'
  }
}

export const SolidWithIconEnd: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    icon: <RefreshIcon className="w-4 h-4" />,
    iconPosition: 'end',
    children: 'End Icon'
  }
}

export const SolidDisabled: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    disabled: true
  }
}

export const SolidLoading: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    loading: true
  }
}

export const OutlinedPrimary: Story = {
  args: { variant: 'outlined', color: 'primary' }
}

export const OutlinedWithIcon: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    icon: <RefreshIcon className="w-4 h-4" />
  }
}

export const OutlinedLoading: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    loading: true
  }
}

export const SolidGreen: Story = {
  args: { variant: 'solid', color: 'green' }
}

export const GreenWithEndIcon: Story = {
  args: {
    variant: 'solid',
    color: 'green',
    icon: <RefreshIcon className="w-4 h-4" />,
    iconPosition: 'end'
  }
}

export const GreenDisabled: Story = {
  args: {
    variant: 'solid',
    color: 'green',
    disabled: true,
    icon: <RefreshIcon className="w-4 h-4" />,
    iconPosition: 'end'
  }
}
