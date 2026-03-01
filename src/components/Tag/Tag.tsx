import React from 'react';
import { Tag as AntTag, TagProps } from 'antd';

export type IProps = TagProps;

const Tag: React.FC<IProps> = props => {
  return <AntTag {...props} />;
};

export default Tag;
