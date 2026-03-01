import React from 'react';
import cx from 'classnames';

import Icon from 'components/Icon';

import ProgressBar from './components/ProgressBar';

import cls from './DefectProcess.module.scss';

export interface IOption {
  number: number;
  title: string;
}

export interface IProps {
  step: number;
  options: string[];
  isFailed?: boolean;
}

const DefectProcess: React.FC<IProps> = ({ options, step, isFailed }) => (
  <div className={cx(cls.wrapper, isFailed && cls['wrapper--failed'])}>
    {options.map((option, index) => (
      <button
        className={cx(
          cls.option,
          (index + 1 < step || step === options.length) && cls['option--done'],
          index + 1 === step && step !== options.length && cls['option--current']
        )}
        role="button"
        key={index}
      >
        <div className={cls.optionIcon}>
          {isFailed && index === options.length - 1 ? (
            <Icon name="WarningError" color="#fff" size={20} />
          ) : index + 1 < step || step === options.length ? (
            <Icon name="CheckCircle" variant="bulk" color="#fff" size={20} />
          ) : index + 1 === step ? (
            <Icon name="Loading" variant="bulk" color="#fff" size={20} />
          ) : (
            <div className={cls.optionNumber}>{index + 1}</div>
          )}
        </div>

        {index >= 1 && (
          <div className={cls.optionBar}>
            <ProgressBar
              width="90px"
              color={
                isFailed && index === options.length - 1
                  ? 'red'
                  : index + 1 <= step
                    ? 'green'
                    : index === step
                      ? 'orange'
                      : 'gray'
              }
              animate={true}
            />
          </div>
        )}
        <div className={cls.optionTitle}>{option}</div>
      </button>
    ))}
  </div>
);

export default DefectProcess;
