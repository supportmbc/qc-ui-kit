import React from 'react';
import { Switch as AntSwitch, SwitchProps } from 'antd';

export type IProps = SwitchProps;

const Switch: React.FC<IProps> = props => {
  return <AntSwitch {...props} />;
};

export default Switch;
