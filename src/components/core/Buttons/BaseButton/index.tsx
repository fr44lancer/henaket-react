import React from 'react';
import { ButtonProps, ConfigProvider } from 'antd';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import StyledBaseButton from './style';
import Icon from '../../../ui/Icon';

export interface IBaseButtonProps extends Omit<ButtonProps, 'icon'> {
  icon?: IconProp;
  iconFontSize?: number;
  iconColor?: string;
  fontWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
}

const BaseButton = ({
  children,
  icon,
  iconFontSize,
  iconColor,
  fontWeight,
  ...props
}: IBaseButtonProps) => {
  const fontWeightClassName = `font-noto-sans-${fontWeight}`;

  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Button: {
            /*Global buttons token*/
            fontWeight: 500,
            opacityLoading: 0.4,
            defaultShadow: 'none',
            primaryShadow: 'none',

            /* Large size tokens*/
            controlHeightLG: 52,
            borderRadiusLG: 4,
            paddingBlockLG: 12,
            paddingInlineLG: 24,
            contentLineHeightLG: 1.75,
            contentFontSizeLG: 16,

            /*Default size tokens*/
            controlHeight: 40,
            borderRadius: 4,
            paddingBlock: 8,
            paddingInline: 16,
            contentFontSize: 16,
            contentLineHeight: 1.5,

            /*Small size tokens*/
            controlHeightSM: 30,
            borderRadiusSM: 4,
            paddingBlockSM: 4,
            paddingInlineSM: 16,
            contentFontSizeSM: 14,
            contentLineHeightSM: 1.571428,
          },
        },
      }}
    >
      <StyledBaseButton
        {...props}
        className={fontWeightClassName + ' ' + props.className}
        icon={
          icon && (
            <Icon
              icon={icon}
              fontSize={iconFontSize}
              iconColor={iconColor}
              size={'sm'} //TODO: check if needed
            />
          )
        }
      >
        {children}
      </StyledBaseButton>
    </ConfigProvider>
  );
};

export default BaseButton;
