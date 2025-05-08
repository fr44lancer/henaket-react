import React from 'react'
import {Alert, AlertProps} from 'antd'
import styled from "styled-components";

interface AppAlertProps extends AlertProps {}


const StyledAppAlert = styled(Alert)`
  border-top-width: 0 !important;
  border-right-width: 0 !important;
  border-bottom-width: 0 !important;
  border-left-width: 8px !important;
`

export const AppAlert: React.FC<AppAlertProps> = ({ ...props }) => {
  return <StyledAppAlert {...props} />
}
