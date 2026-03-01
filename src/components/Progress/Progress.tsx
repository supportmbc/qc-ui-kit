import React from 'react';
import { Progress as AntProgress, ProgressProps } from 'antd';

export type IProps = ProgressProps;

const Progress: React.FC<IProps> = props => {
  return <AntProgress {...props} />;
};

export default Progress;
