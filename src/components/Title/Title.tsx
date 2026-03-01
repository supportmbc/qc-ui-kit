import React from 'react';

import cls from './Title.module.scss';
import cx from 'classnames';

interface IProps {
  className?: string;
  text: string;
}

const Title: React.FC<IProps> = ({ className, text }) => <div className={cx(cls.wrapper, className)}>{text}</div>;

export default Title;
