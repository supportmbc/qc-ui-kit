import React from 'react';
import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import cx from 'classnames';

import cls from './Textarea.module.scss';

export interface IProps extends TextAreaProps {
  id: string;
  value: string;
  state?: 'default' | 'success' | 'error';
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onBlur?: any;
  message?: string | undefined;
}

const Textarea: React.FC<IProps> = ({
  id,
  value,
  state = 'default',
  placeholder,
  disabled,
  onChange,
  onBlur,
  message,
  ...props
}) => (
  <div className={cx(cls.wrapper, state && cls[`wrapper--state-${state}`])}>
    <Input.TextArea
      className={cls.textarea}
      {...props}
      {...{ id, value, placeholder, disabled }}
      onChange={e => onChange && onChange(e.target.value)}
      onBlur={e => onBlur && onBlur(e)}
    />
    {!!message && <div className={cls.message}>{message}</div>}
  </div>
);

export default Textarea;
