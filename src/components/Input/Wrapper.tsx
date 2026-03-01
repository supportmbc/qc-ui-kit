import React, { ReactNode } from 'react';
import cx from 'classnames';

import { WrapperProps } from './Types';

import cls from './Input.module.scss';

interface IProps extends WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<IProps> = ({
  size,
  state,
  disabled,
  isFocused,
  hidden,
  prefix,
  suffix,
  iconPrefix,
  onIconPrefix,
  iconSuffix,
  onIconSuffix,
  message,
  children
}) => (
  <label
    className={cx(
      cls.wrapper,
      size && cls[`wrapper--size-${size}`],
      state && cls[`wrapper--state-${state}`],
      isFocused && cls['wrapper--focused'],
      disabled && cls['wrapper--disabled'],
      hidden && cls['wrapper--hidden']
    )}
  >
    {!!iconPrefix && (
      <div className={cx(cls.icon, cls.iconPrefix)} onClick={() => onIconPrefix && onIconPrefix()}>
        {iconPrefix}
      </div>
    )}
    {!!prefix && <div className={cls.prefix}>{prefix}</div>}
    {children}
    {!!suffix && <div className={cls.suffix}>{suffix}</div>}
    {!!iconSuffix && (
      <div className={cx(cls.icon, cls.iconSuffix)} onClick={() => onIconSuffix && onIconSuffix()}>
        {iconSuffix}
      </div>
    )}
    {!!message && <div className={cls.message}>{message}</div>}
  </label>
);

export default Wrapper;
