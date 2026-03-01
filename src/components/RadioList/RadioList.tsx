import React from 'react';

import Radio from 'components/Radio';

import cls from './RadioList.module.scss';

export type TValue = string | number | boolean;

export interface IOption {
  title: string;
  value: TValue;
  description?: React.ReactNode;
  tags?: React.ReactNode;
}

export interface IProps {
  value: TValue;
  options: IOption[];
  onChange: (value: TValue) => void;
}

const RadioList: React.FC<IProps> = ({ value, options, onChange }) => (
  <div className={cls.wrapper}>
    {options.map((option, index) => (
      <div className={cls.option} onClick={() => onChange(option.value)} key={index}>
        <div className={cls.optionInput}>
          <Radio checked={option.value === value} />
        </div>
        <div className={cls.optionContent}>
          <div className={cls.optionTitle}>{option.title}</div>
          {option.value === value && !!option.description && (
            <div className={cls.optionDescription}>{option.description}</div>
          )}
        </div>
        {!!option.tags && <div className={cls.optionTags}>{option.tags}</div>}
      </div>
    ))}
  </div>
);

export default RadioList;
