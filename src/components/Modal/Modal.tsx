import React from 'react';
import { Modal as AntModal, ModalProps } from 'antd';

export type IProps = ModalProps;

const Modal: React.FC<IProps> = props => {
  return <AntModal {...props} />;
};

export default Modal;
