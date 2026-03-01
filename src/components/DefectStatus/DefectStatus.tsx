import React from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';

import Icon from 'components/Icon';
import { DEFECT_STATUS } from 'components/DefectCard/DefectCard';

import cls from './DefectStatus.module.scss';

interface IProps {
  status: DEFECT_STATUS;
}

const DefectStatus: React.FC<IProps> = ({ status }) => {
  const { t } = useTranslation();

  const icons = {
    [DEFECT_STATUS.NEW]: 'NotificationRectangle',
    [DEFECT_STATUS.READ]: 'IdIcon',
    [DEFECT_STATUS.IN_PROGRESS]: 'Reload',
    [DEFECT_STATUS.NOT_FIXED]: 'Warning',
    [DEFECT_STATUS.FIXED]: 'CheckCircle',
    [DEFECT_STATUS.IN_REVIEW]: 'Search',
    [DEFECT_STATUS.IN_CORRECT]: 'CloseCircle',
    [DEFECT_STATUS.DELETED]: 'Archive'
  };

  return (
    <div className={cx(cls.wrapper, cls[`wrapper--variant-${status}`])}>
      <Icon name={icons[status]} size={20} /> {t(`enum_defect_status_${status}`)}
    </div>
  );
};

export default DefectStatus;
