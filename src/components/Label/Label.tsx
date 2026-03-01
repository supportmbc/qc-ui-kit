import React from 'react';

import cls from './Label.module.scss';

export interface IProps {
  title: string;
  required?: boolean;
  children?: React.ReactNode;
}

const Label: React.FC<IProps> = ({ title, required, children }) => (
  <div className={cls.wrapper}>
    <div className={cls.title}>
      {required && <div>*</div>}
      {title}
    </div>
    {!!children && children}
  </div>
);

export default Label;
