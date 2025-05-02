import React from 'react';
import { TextProps } from 'antd/lib/typography/Text';
import { ConfigProvider, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export interface IBaseTextProps extends TextProps {
  fontWeight?: 400 | 500 | 600 | 700;
}

const StyledBaseText = styled(Text)<{ $fontWeight: number }>`
  font-size: inherit;
  line-height: inherit;
  font-weight: ${({ $fontWeight }) => $fontWeight};
`;

export const BaseText = ({
  children,
  fontWeight = 400,
  ...props
}: IBaseTextProps) => {
  return (
      <StyledBaseText {...props} $fontWeight={fontWeight}>{children}</StyledBaseText>
  );
};
