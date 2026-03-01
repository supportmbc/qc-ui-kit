import React from 'react';
import { useTranslation } from 'react-i18next';

import Icon from 'components/Icon';
import Button from 'components/Button';

import cls from './ContractorCard.module.scss';

interface IItem {
  id: number;
  name: string;
  notFixedCount: number;
  director: {
    fullName: string;
    phone: string;
  };
}

interface IProps {
  title: string;
  items: IItem[];
  onAdd?: () => void;
  onViewAll?: () => void;
}

const ContractorCard: React.FC<IProps> = ({ title, items, onAdd, onViewAll }) => {
  const { t } = useTranslation();

  return (
    <div className={cls.wrapper}>
      <div className={cls.head}>
        <div className={cls.title}>{title}</div>
        <div className={cls.actions}>
          <Button onClick={() => onAdd?.()} icon={<Icon name="Plus" size={20} />} variant="text" color="primary">
            {t('action_add')}
          </Button>
          {!!onViewAll && (
            <Button
              onClick={() => onViewAll()}
              icon={<Icon name="ChevronDown" size={20} />}
              iconPosition="end"
              variant="text"
              color="primary"
            >
              {t('action_view_all')}
            </Button>
          )}
        </div>
      </div>
      <div className={cls.items}>
        {items.map(item => (
          <div className={cls.item} key={item.id}>
            <Icon name="Briefcase" color="var(--color-primary-1000)" size={20} />
            <div className={cls.detail}>
              <div className={cls.detailTitle}>{item.name}</div>
              <div className={cls.detailDescription}>
                {t('not_fixed')}: {item.notFixedCount}
              </div>
            </div>
            <div className={cls.detail}>
              <div className={cls.detailTitle}>{item.director.fullName}</div>
              <div className={cls.detailDescription}>
                {t('director')} | {item.director.phone}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractorCard;
