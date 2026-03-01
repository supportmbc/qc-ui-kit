import React from 'react';
import { Skeleton as AntSkeleton, SkeletonProps } from 'antd';

export type IProps = SkeletonProps;

const Skeleton: React.FC<IProps> = props => {
  return <AntSkeleton {...props} />;
};

export default Skeleton;
