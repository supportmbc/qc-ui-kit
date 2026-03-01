import React from 'react';
import { Dropdown as AntDropdown, DropdownProps } from 'antd';

export type IProps = DropdownProps;

const Dropdown: React.FC<IProps> = props => <AntDropdown {...props} />;

export default Dropdown;
