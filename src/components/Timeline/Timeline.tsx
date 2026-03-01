import React from 'react';
import { Timeline as AntTimeline, TimelineProps } from 'antd';

export type IProps = TimelineProps;

const Timeline: React.FC<IProps> = props => {
  return <AntTimeline {...props} />;
};

export default Timeline;
