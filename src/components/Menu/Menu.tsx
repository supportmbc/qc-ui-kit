import React from 'react';
import { Menu as AntMenu, MenuProps } from 'antd';

import './Menu.scss';

export interface IMenuItem {
  key: string;
  title?: string;
  label?: string;
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
  children?: IMenuItem[];
  onClick?: () => void;
}

export type IProps = MenuProps;

const Menu: React.FC<IProps> = props => <AntMenu {...props} />;

export default Menu;
