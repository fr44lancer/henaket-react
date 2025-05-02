import React from 'react';
import { ButtonProps, ConfigProvider } from 'antd';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../../../ui/Icon';
import StyledBaseTextButton from './style';

export interface IBaseTextButtonProps
  extends Omit<ButtonProps, 'icon' | 'fontWeight'> {
  icon?: IconProp;
  iconFontSize?: number;
  iconColor?: string;
  fontWeight?: 400 | 500 | 600 | 700;
}

const BaseTextButton = ({
  children,
  icon,
  iconFontSize,
  iconColor,
  fontWeight = 500,
  ...props
}: IBaseTextButtonProps) => {
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {},
        components: {
          Button: {
            /*Global text buttons token*/
            textHoverBg: 'transparent',
            colorBgTextActive: 'transparent',
            fontWeight: fontWeight,
            opacityLoading: 0.4,

            /* Large size tokens*/
            controlHeightLG: 24,
            borderRadiusLG: 4,
            paddingBlockLG: 4,
            paddingInlineLG: 0,
            contentLineHeightLG: 1.5,
            contentFontSizeLG: 16,

            // /*Default size tokens*/
            controlHeight: 24,
            borderRadius: 4,
            paddingBlock: 4,
            paddingInline: 0,
            contentFontSize: 14,
            contentLineHeight: 1.42857,

            //
            // /*Small size tokens*/
            // controlHeightSM: 30,
            // borderRadiusSM: 4,
            // paddingBlockSM: 4,
            // paddingInlineSM: 16,
            // contentFontSizeSM: 14,
            // contentLineHeightSM: 1.571428,
          },
        },
      }}
    >
      <StyledBaseTextButton
        type={'text'}
        {...props}
        // className={fontWeightClassName + ' ' + props.className}
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
      </StyledBaseTextButton>
    </ConfigProvider>
  );
};

export default BaseTextButton;
