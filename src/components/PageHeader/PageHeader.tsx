import React from 'react';

import Icon from 'components/Icon';
import Breadcrumb, { IProps as IBreadcrumb } from 'components/Breadcrumb';

import cls from './PageHeader.module.scss';

interface IProps {
  title?: string;
  breadcrumb?: IBreadcrumb;
  buttons?: React.ReactNode[] | undefined;
  onBack?: () => void;
}

const PageHeader: React.FC<IProps> = ({ title, breadcrumb, buttons, onBack }) => (
  <div className={cls.wrapper}>
    {!!breadcrumb && (
      <div className={cls.breadcrumb}>
        <Breadcrumb {...breadcrumb} />
      </div>
    )}
    <div className={cls.content}>
      <div className={cls.left}>
        {!!onBack && (
          <div className={cls.back} onClick={onBack}>
            <Icon name="ArrowLeft" size={24} />
          </div>
        )}
        {!!title && <div className={cls.title}>{title}</div>}
      </div>
      {!!buttons && <div className={cls.buttons}>{buttons}</div>}
    </div>
  </div>
);

export default PageHeader;
