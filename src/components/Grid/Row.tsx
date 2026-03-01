import React from 'react';
import { Row as AntRow, RowProps } from 'antd';

type IProps = RowProps;

const Row: React.FC<IProps> = props => <AntRow {...props} />;

export default Row;
