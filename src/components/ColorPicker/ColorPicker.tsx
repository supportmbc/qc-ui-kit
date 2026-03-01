import React from 'react';
import { ColorPicker as AntColorPicker, ColorPickerProps } from 'antd';
import cx from 'classnames';

import cls from './ColorPicker.module.scss';

export interface IProps extends ColorPickerProps {
  state?: 'default' | 'error';
  size?: 'small' | 'middle' | 'large';
  message?: string | undefined;
}

const ColorPicker: React.FC<IProps> = ({ state = 'default', size = 'middle', message, ...props }) => (
  <div className={cx(cls.wrapper, size && cls[`wrapper--size-${size}`], state && cls[`wrapper--state-${state}`])}>
    <AntColorPicker {...props} />
    {!!message && <div className={cls.message}>{message}</div>}
  </div>
);

export default ColorPicker;
