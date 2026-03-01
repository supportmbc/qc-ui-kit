import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Share from 'react-share';

import Tooltip from 'components/Tooltip';

import cls from './ShareTooltip.module.scss';

interface IProps {
  url: string;
  children: React.ReactNode;
}

const ShareTooltip: React.FC<IProps> = ({ url, children }) => {
  const { t } = useTranslation();

  return (
    <Tooltip
      placement="bottom"
      title={
        <div className={cls.list} onClick={e => e.stopPropagation()}>
          <Share.TelegramShareButton className={cls.item} url={url}>
            <Share.TelegramIcon size={24} round /> {t('telegram_share')}
          </Share.TelegramShareButton>

          <Share.EmailShareButton className={cls.item} url={url}>
            <Share.EmailIcon size={24} round /> {t('email_share')}
          </Share.EmailShareButton>
        </div>
      }
      trigger="click"
    >
      {children}
    </Tooltip>
  );
};

export default ShareTooltip;
