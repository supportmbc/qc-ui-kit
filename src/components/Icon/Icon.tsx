import React from 'react';
import cx from 'classnames';
import get from 'lodash/get';

import * as List from './list';

import cls from './Icon.module.scss';

export type Type = 'flag' | 'common' | 'social';

export type Variant = 'regular' | 'bulk';

interface IProps {
  className?: string;
  name: string;
  onClick?: () => void;
  type?: Type;
  variant?: Variant;
  color?: string;
  size?: number;
}

const Icon: React.FC<IProps> = ({ name, type = 'common', variant = 'regular', size, className, color, onClick }) => {
  const Component = get(List, `[${type}][${variant}][${name}]`) as React.ComponentType | undefined;

  if (!Component) {
    console.warn('Icon component not found');

    return null;
  }

  return (
    <div
      className={cx(cls.wrapper, className)}
      style={{ ...(size ? { '--size': `${size}px` } : {}), color } as React.CSSProperties}
      {...{ onClick }}
    >
      <Component />
    </div>
  );
};

export default Icon;
