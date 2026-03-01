import React from 'react';
import { Drawer as AntDrawer, DrawerProps } from 'antd';

import './Drawer.scss';

export type IProps = DrawerProps;

const Drawer: React.FC<IProps> = props => <AntDrawer {...props} />;

export default Drawer;
