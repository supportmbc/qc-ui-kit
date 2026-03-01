import React from 'react';
import { Image as AntImage, ImageProps } from 'antd';

export type IProps = ImageProps;

const Image: React.FC<IProps> = props => {
  return <AntImage {...props} />;
};

export default Image;
