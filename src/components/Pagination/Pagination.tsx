import React from 'react';
import { Pagination as AntPagination, PaginationProps } from 'antd';

import './Pagination.scss';

export type IProps = PaginationProps;

const Pagination: React.FC<IProps> = ({ ...props }) => <AntPagination {...props} />;

export default Pagination;
