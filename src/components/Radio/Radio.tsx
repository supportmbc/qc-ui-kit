import React from 'react';
import { Radio as AntRadio, RadioProps } from 'antd';

import './Radio.scss';

export type IProps = RadioProps;

const Radio: React.FC<IProps> = props => {
  return <AntRadio {...props} />;
};

export const RadioGroup = AntRadio.Group;
export const RadioButton = AntRadio.Button;

export default Radio;
