import React from 'react';
import { Popover as AntPopover, PopoverProps } from 'antd';

export type IProps = PopoverProps;

const Popover: React.FC<IProps> = props => {
  return <AntPopover {...props} />;
};

export default Popover;
