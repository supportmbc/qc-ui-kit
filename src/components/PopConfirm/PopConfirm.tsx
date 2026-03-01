import React from 'react';
import { Popconfirm as AntPopconfirm, PopconfirmProps } from 'antd';

export type IProps = PopconfirmProps;

const PopConfirm: React.FC<IProps> = props => {
  return <AntPopconfirm {...props} />;
};

export default PopConfirm;
