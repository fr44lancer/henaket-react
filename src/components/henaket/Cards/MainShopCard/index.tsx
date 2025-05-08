import React, { ReactNode } from 'react';
import { LinkProps } from 'next/link';
import { Flex } from 'antd';
import { AppLink } from '../../../henaket/AppLink';
import { RightOutlined } from '@ant-design/icons';
import { MainParagraph } from '../../../henaket/Typography/Paragraphs/MainParagraph';

export type IMainShopCard = {
  children?: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  linkDescription?: string;
  type?: 'default' | 'footer' | 'light' | 'disabled';
} & LinkProps;

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
    <Flex className={'border-t-4 border-t-primary w-[316px] pt-4 ' + className}>
      <Flex align={'start'}>
        <div>
          {title && (
            <AppLink
              href={props.href}
              className={'mb-2 text-2xl font-bold no-underline'}
            >
              {title}
            </AppLink>
          )}
          {description && (
            <MainParagraph className={'my-4'}>{description}</MainParagraph>
          )}

          {linkDescription && (
            <AppLink href={props.href} className={'mb-2'}>
              {linkDescription}
            </AppLink>
          )}
        </div>
        <div>
          <AppLink href={props.href}>
            <RightOutlined className={'text-primary text-lg mt-2'} />
          </AppLink>
        </div>
      </Flex>
    </Flex>
  );
};
