import React from 'react';
import { Collapse as AntCollapse, CollapseProps } from 'antd';

export type IProps = CollapseProps;

const Collapse: React.FC<IProps> = props => {
  return <AntCollapse {...props} />;
};

export default Collapse;
