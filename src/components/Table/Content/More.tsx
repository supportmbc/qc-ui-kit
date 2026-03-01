import React from 'react';
import cx from 'classnames';

import Icon from 'components/Icon';
import Dropdown from 'components/Dropdown';

import cls from '../Table.module.scss';

interface Item {
  title: string;
  icon?: React.ReactNode;
  permission?: string;
  variant: 'primary' | 'blue' | 'danger' | string;
  onClick?: () => void;
}

interface IProps {
  items: Item[];
}

const More: React.FC<IProps> = ({ items = [] }) => (
  <Dropdown
    menu={{
      items: items.map(item => ({
        key: item.title,
        label: (
          <div
            className={cx(cls.menuItem, item.variant && cls[`menuItem--variant-${item.variant}`])}
            onClick={() => item.onClick && item.onClick()}
          >
            {!!item.icon && <div className={cls.menuItemIcon}>{item.icon}</div>}
            <div className={cls.menuItemTitle}>{item.title}</div>
          </div>
        )
      }))
    }}
    overlayClassName={cls.overlay}
    placement="bottomRight"
    trigger={['click']}
  >
    {items.length ? (
      <div className={cx(cls.content, cls['content--more'])}>
        <Icon name="MoreVertical" size={28} />
      </div>
    ) : (
      ''
    )}
  </Dropdown>
);

export default More;
