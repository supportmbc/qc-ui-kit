import React from 'react';
import DatePickerBase, { DatePickerProps } from 'antd/lib/date-picker';
import cx from 'classnames';

import './DatePicker.scss';
import cls from './DatePicker.module.scss';

export interface IProps extends DatePickerProps {
  state?: 'default' | 'error';
  message?: string | undefined;
}

const DatePicker: React.FC<IProps> = ({ state = 'default', message, ...props }) => (
  <div className={cx(cls.wrapper, state && cls[`wrapper--state-${state}`])}>
    <DatePickerBase className={cls.datePicker} {...props} />
    {!!message && <div className={cls.message}>{message}</div>}
  </div>
);

export default DatePicker;
