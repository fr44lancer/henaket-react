import React from 'react';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;

export interface IBaseParagraphProps extends ParagraphProps {
  fontWeight?: 400 | 500 | 600 | 700;
}

const StyledParagraph = styled(Paragraph)<{ $fontWeight: number }>`
  && {
    margin-bottom: 0;
    font-weight: ${({ $fontWeight }) => $fontWeight};
  }
`;

export const BaseParagraph: React.FC<IBaseParagraphProps> = ({
  children,
  fontWeight = 400,
  ...props
}) => (
  <StyledParagraph {...props} $fontWeight={fontWeight}>
    {children}
  </StyledParagraph>
);
