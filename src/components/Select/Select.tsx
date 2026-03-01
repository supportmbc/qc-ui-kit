import React, { useState } from 'react';
import { Select as SelectBase, SelectProps } from 'antd';
import cx from 'classnames';

import Icon from 'components/Icon';

import './Select.scss';
import cls from './Select.module.scss';

export interface IProps extends Omit<SelectProps, 'onFocus' | 'onBlur'> {
  state?: 'default' | 'success' | 'error';
  message?: string | undefined;
}

const Select: React.FC<IProps> = ({ options, state = 'default', message, disabled, ...props }) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div
      className={cx(
        cls.wrapper,
        state && cls[`wrapper--state-${state}`],
        isFocused && cls['wrapper--focused'],
        disabled && cls['wrapper--disabled']
      )}
    >
      <SelectBase
        className={cls.select}
        {...props}
        {...{ disabled }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onOpenChange={open => setFocused(open)}
        suffixIcon={<Icon name="ChevronDown" size={14} />}
        allowClear={{
          clearIcon: <Icon name="CloseCircle" size={14} />
        }}
      >
        {options?.map((option, index) => {
          if (option.children) {
            return (
              <SelectBase.OptGroup label={option.title} key={index}>
                {option.children.map(option => (
                  <SelectBase.Option value={option.value} key={option.value}>
                    {option.title}
                  </SelectBase.Option>
                ))}
              </SelectBase.OptGroup>
            );
          }

          return (
            <SelectBase.Option value={option.value} disabled={!!option.disabled} key={index}>
              {option.title}
            </SelectBase.Option>
          );
        })}
      </SelectBase>
      {!!message && <div className={cls.message}>{message}</div>}
    </div>
  );
};

export default Select;
