import React from 'react';
import { Rate as AntRate, RateProps } from 'antd';

export type IProps = RateProps;

const Rate: React.FC<IProps> = props => {
  return <AntRate {...props} />;
};

export default Rate;
