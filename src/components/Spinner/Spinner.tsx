import React from 'react';
import { Spin as AntSpin, SpinProps } from 'antd';
import cx from 'classnames';

import cls from './Spinner.module.scss';

interface IProps extends SpinProps {
  full?: boolean;
  children?: React.ReactNode;
}

const Spinner: React.FC<IProps> = ({ full, children, ...props }) => (
  <div className={cx(cls.wrapper, full && cls.wrapperFull)}>
    <AntSpin {...props}>{children}</AntSpin>
  </div>
);

export default Spinner;
