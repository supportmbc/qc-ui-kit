import React from 'react';
import { Alert as AntAlert, AlertProps } from 'antd';

export type IProps = AlertProps;

const Alert: React.FC<IProps> = props => {
  return <AntAlert {...props} />;
};

export default Alert;
