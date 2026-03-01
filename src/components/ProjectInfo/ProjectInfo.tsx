import React from 'react';
import { useTranslation } from 'react-i18next';

import Icon from 'components/Icon';

import cls from './ProjectInfo.module.scss';

interface IUser {
  id: number;
  fullName: string;
  phone: string;
  position: string;
}

interface IProps {
  src: string;
  name: string;
  address: string;
  customer: string;
  area: number;
  floorCount: number;
  users: IUser[];
}

const ProjectInfo: React.FC<IProps> = ({ src, name, address, customer, area, floorCount, users }) => {
  const { t } = useTranslation();

  return (
    <div className={cls.wrapper}>
      <div className={cls.image}>
        <img src={src} alt={name} />
      </div>
      <div className={cls.info}>
        <div className={cls.name}>{name}</div>
        <div className={cls.address}>{address}</div>
        <div className={cls.details}>
          <div className={cls.detail}>
            <div className={cls.detailLabel}>{t('project_consumer')}</div>
            <div className={cls.detailValue}>{customer}</div>
          </div>
          <div className={cls.detail}>
            <div className={cls.detailLabel}>{t('project_area')}</div>
            <div className={cls.detailValue}>{area} м²</div>
          </div>
          <div className={cls.detail}>
            <div className={cls.detailLabel}>{t('project_floor_count')}</div>
            <div className={cls.detailValue}>
              {floorCount} {t('floors')}
            </div>
          </div>
        </div>
        <div className={cls.users}>
          {users.map(user => (
            <div className={cls.user} key={user.id}>
              <div className={cls.userDetail}>
                <div className={cls.userDetailIcon}>
                  <Icon name="User" color="var(--color-primary-1000)" size={20} />
                </div>
                <div>
                  <div className={cls.userDetailValue}>{user.fullName}</div>
                  <div className={cls.userDetailLabel}>{user.position}</div>
                </div>
              </div>
              <div className={cls.userDetail}>
                <div className={cls.userDetailIcon}>
                  <Icon name="CallUser" color="var(--color-primary-1000)" size={20} />
                </div>
                <div>
                  <div className={cls.userDetailValue}>{user.phone}</div>
                  <div className={cls.userDetailLabel}>{t('project_phone')}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
