import React from 'react';
import { useTranslation } from 'react-i18next';

import Icon from 'components/Icon';

import cls from './ProjectCard.module.scss';

interface IProps {
  src: string;
  name: string;
  manager: {
    fullName: string;
    phone: string;
  };
  onClick?: () => void;
}

const ProjectCard: React.FC<IProps> = ({ src, name, manager, onClick }) => {
  const { t } = useTranslation();

  return (
    <div className={cls.wrapper} onClick={() => onClick && onClick()}>
      <img className={cls.image} src={src} height={170} alt={name} />
      <div className={cls.info}>
        <div className={cls.name}>{name}</div>
        <div className={cls.manager}>
          <Icon name="UserCircle" color="var(--color-primary-1000)" size={20} />
          <div>
            <div className={cls.fullName}>{manager.fullName}</div>
            <div className={cls.phone}>
              {t('project_manager')} | {manager.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
