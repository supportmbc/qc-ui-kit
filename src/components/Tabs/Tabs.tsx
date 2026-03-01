import React from 'react';
import { Tabs as AntTabs, TabsProps } from 'antd';

import './Tabs.scss';

export type IProps = TabsProps;

const Tabs: React.FC<IProps> = props => <AntTabs {...props} />;

export default Tabs;
