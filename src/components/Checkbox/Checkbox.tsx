import React from 'react';
import { Checkbox as AntCheckbox, CheckboxProps } from 'antd';

import './Checkbox.scss';

export type IProps = CheckboxProps;

const Checkbox: React.FC<IProps> = props => <AntCheckbox {...props} />;

export default Checkbox;
