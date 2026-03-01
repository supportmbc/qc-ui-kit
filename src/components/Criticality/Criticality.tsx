import React from 'react';
import cx from 'classnames';

import cls from './Criticality.module.scss';

interface IProps {
  onChange: (value: number) => void;
  value: number | null;
}

const Criticality: React.FC<IProps> = ({ onChange, value }) => (
  <div className={cls.wrapper}>
    {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
      <div className={cx(cls.item, num === value && cls.selected)} onClick={() => onChange(num)} key={num}>
        {num}
      </div>
    ))}
  </div>
);

export default Criticality;
