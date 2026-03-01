import React from 'react';
import { Divider as AntDivider, DividerProps } from 'antd';

export type IProps = DividerProps;

const Divider: React.FC<IProps> = props => {
  return <AntDivider {...props} />;
};

export default Divider;
