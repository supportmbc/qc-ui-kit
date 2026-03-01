import React from 'react';
import { useTranslation } from 'react-i18next';

import cls from './Uploader.module.scss';

interface IProps {
  resolution?: string;
  extension?: string;
  size?: string;
}

const Details: React.FC<IProps> = ({ resolution, extension, size }) => {
  const { t } = useTranslation();

  return (
    <div className={cls.detailList}>
      {resolution && (
        <div className={cls.detailItem}>
          {t('uploader_resolution')}: {resolution}
        </div>
      )}
      {extension && (
        <div className={cls.detailItem}>
          {t('uploader_format')}: {extension}
        </div>
      )}
      {size && (
        <div className={cls.detailItem}>
          {t('uploader_size')}: {size}
        </div>
      )}
    </div>
  );
};

export default Details;
