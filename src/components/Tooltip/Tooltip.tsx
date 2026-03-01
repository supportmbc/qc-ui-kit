import React from 'react';
import { Tooltip as AntTooltip, TooltipProps } from 'antd';

import './Tooltip.scss';

export type IProps = TooltipProps;

const Tooltip: React.FC<IProps> = props => <AntTooltip {...props} />;

export default Tooltip;
