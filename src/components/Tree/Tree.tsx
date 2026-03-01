import React from 'react';
import { Tree as AntTree, TreeProps } from 'antd';

export type IProps = TreeProps;

const Tree: React.FC<IProps> = ({ ...props }) => {
  return <AntTree {...props} />;
};

export default Tree;
