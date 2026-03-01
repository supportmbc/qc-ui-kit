import React from 'react';
import { Flex as AntFlex, FlexProps } from 'antd';

export type IProps = FlexProps;

const Flex: React.FC<IProps> = props => {
  return <AntFlex {...props} />;
};

export default Flex;
