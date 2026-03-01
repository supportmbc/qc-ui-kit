import React from 'react';

import Icon from './Icon';
import * as List from './list';

import cls from './Icon.stories.module.scss';

export default {
  title: 'Components/Icon'
};

const types = Object.keys(List);

export const ToStorybook = () => (
  <div className={cls.wrapper}>
    <div className={cls.title}>Icons</div>
    {Object.values(List).map((group, index) => {
      const type = types[index];
      const variants = Object.keys(group);

      return (
        <div className={cls.type} key={index}>
          <div className={cls.typeTitle}>{type}</div>
          <div className={cls.typeList}>
            {Object.values(group).map((icons, index) => {
              const variant = variants[index];

              return (
                <div className={cls.variant} key={index}>
                  <div className={cls.variantTitle}>{variant}</div>
                  <div className={cls.variantList}>
                    {Object.keys(icons).map((icon, index) => (
                      <div className={cls.item} key={index}>
                        <div className={cls.itemIcon}>
                          <Icon name={icon} type={type as 'common'} variant={variant as 'regular'} />
                        </div>
                        <div className={cls.itemTitle}>{icon}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
);

ToStorybook.story = {
  name: 'Icon'
};
