import React from 'react';
import { Breadcrumb as AntBreadcrumb, BreadcrumbProps } from 'antd';

export type IProps = BreadcrumbProps;

const Breadcrumb: React.FC<IProps> = props => {
  return <AntBreadcrumb {...props} />;
};

export default Breadcrumb;
