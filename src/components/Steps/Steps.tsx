import React from 'react';
import { Steps as AntSteps, StepsProps } from 'antd';

export type IProps = StepsProps;

const Steps: React.FC<IProps> = props => {
  return <AntSteps {...props} />;
};

export default Steps;
