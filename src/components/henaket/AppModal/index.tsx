import React from 'react'
import { Modal, ModalProps, Space } from 'antd'

export interface IModal extends ModalProps {
  children?: React.ReactNode
  okButton?: React.ReactNode | null
  cancelButton?: React.ReactNode | null
}
const modalStyles = {
  content: {
    padding: '40px 16px 16px 16px'
  },
  footer: {
    marginTop: '16px'
  }
}

export const AppModal = ({
  children,
  okButton,
  cancelButton,
  ...props
}: IModal) => {
  return (
    <Modal
      styles={modalStyles}
      keyboard={true}
      centered={true}
      footer={
        <div className={'w-full flex justify-start mt-8'}>
          <Space size={'middle'}>
            {okButton}
            {cancelButton}
          </Space>
        </div>
      }
      {...props}
    >
      {children}
    </Modal>
  )
}
