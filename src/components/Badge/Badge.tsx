import React from 'react';
import { Badge as AntBadge, BadgeProps } from 'antd';

export type IProps = BadgeProps;

const Badge: React.FC<IProps> = props => {
  return <AntBadge {...props} />;
};

export default Badge;
