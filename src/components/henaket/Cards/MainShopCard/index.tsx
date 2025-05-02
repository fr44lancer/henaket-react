import React, { ReactNode } from 'react'
import { LinkProps } from 'next/link'
import { Flex } from 'antd'
import { AppLink } from '@/src/components/henaket/AppLink'
import { RightOutlined } from '@ant-design/icons'
import { MainParagraph } from '@/src/components/henaket/Typography/Paragraphs/MainParagraph'

export type IMainShopCard = {
  children?: ReactNode
  className?: string
  title?: string
  description?: string
  linkDescription?: string
  type?: 'default' | 'footer' | 'light' | 'disabled'
} & LinkProps

export const MainShopCard = ({
  children,
  className = '',
  title,
  description,
  linkDescription,
  type = 'default',
  ...props
}: IMainShopCard) => {
  return (
    <Flex className={'border-t-4 border-t-primary w-[316px] pt-4'}>
      <Flex align={'start'}>
        <div>
          {title && (
            <AppLink href={'#'} className={'mb-2 text-2xl font-bold'}>
              {title}
            </AppLink>
          )}
          {description && (
            <MainParagraph className={'my-2'}>{description}</MainParagraph>
          )}

          {linkDescription && (
            <AppLink href={'#'} className={'mb-2'}>
              linkDescription
            </AppLink>
          )}
        </div>
        <div>
          <RightOutlined className={'text-primary text-lg mt-2'} />
        </div>
      </Flex>
    </Flex>
  )
}
