import React from 'react';
import { Button as AntButton, ButtonProps } from 'antd';

import './Button.scss';

export type IProps = ButtonProps;

const Button: React.FC<IProps> = props => <AntButton {...props} />;

export default Button;
