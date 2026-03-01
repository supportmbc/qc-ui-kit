import React from 'react';
import { Col as AntCol, ColProps } from 'antd';

type IProps = ColProps;

const Col: React.FC<IProps> = props => <AntCol {...props} />;

export default Col;
