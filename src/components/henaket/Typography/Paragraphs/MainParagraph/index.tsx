import React from 'react'
import { ParagraphProps } from 'antd/lib/typography/Paragraph'
import { Typography } from 'antd'

const { Paragraph } = Typography
export const MainParagraph = ({ children, ...props }: ParagraphProps) => {
  return <Paragraph {...props}>{children}</Paragraph>
}
