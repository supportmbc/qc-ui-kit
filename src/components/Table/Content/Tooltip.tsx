import React from 'react';

import TooltipBase from 'components/Tooltip';

import cls from './Content.module.scss';

interface IProps {
  title: string;
  tooltipTitle: string;
}

const Tooltip: React.FC<IProps> = ({ title, tooltipTitle }) => (
  <div className={cls.tooltip}>
    {title}
    <TooltipBase title={tooltipTitle}>
      <div className={cls.tooltipIcon}>i</div>
    </TooltipBase>
  </div>
);

export default Tooltip;
