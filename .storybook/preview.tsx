import type { Preview } from '@storybook/react'
import { ConfigProvider } from 'antd'
import '@/src/app/globals.css'
import Variables from '@/src/assets/styles/variables'
import React from 'react'
import { notoSans } from '@/src/assets/styles/fonts'
import antdTheme from "@/src/assets/styles/antd.theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    Story => (
      <ConfigProvider theme={antdTheme}>
        <div className="min-w-4xl mx-auto p-4 ">
          <Variables fontFamily={notoSans.style.fontFamily} />
          <Story />
        </div>
      </ConfigProvider>
    )
  ]
}

export default preview
