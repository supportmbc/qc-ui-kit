import React from 'react';
import { Space as AntSpace, SpaceProps } from 'antd';

export type IProps = SpaceProps;

const Space: React.FC<IProps> = props => {
  return <AntSpace {...props} />;
};

export default Space;
