import React, { useState } from 'react';
import { TreeSelect as TreeSelectBase, TreeSelectProps } from 'antd';
import cx from 'classnames';

import Icon from 'components/Icon';

import './TreeSelect.scss';
import cls from './TreeSelect.module.scss';

interface ITreeNode {
  value?: string | number;
  title?: React.ReactNode;
  disabled?: boolean;
  key?: string | number;
  children?: ITreeNode[];
  [prop: string]: any;
}

export interface IProps extends Omit<TreeSelectProps, 'treeData' | 'onFocus' | 'onBlur'> {
  options: ITreeNode[];
  state?: 'default' | 'error';
  message?: string | undefined;
}

const TreeSelect: React.FC<IProps> = ({ options, state = 'default', message, disabled, ...props }) => {
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
      <TreeSelectBase
        className={cls.treeSelect}
        {...props}
        {...{ disabled }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onOpenChange={open => setFocused(open)}
        suffixIcon={<Icon name="ChevronDown" size={14} />}
        treeData={options}
      />
      {!!message && <div className={cls.message}>{message}</div>}
    </div>
  );
};

export default TreeSelect;
