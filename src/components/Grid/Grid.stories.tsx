import React from 'react';

import Row from './Row';
import Col from './Col';

import cls from './Grid.stories.module.scss';

export default {
  title: 'Components/Grid',
  component: Row,
  subcomponents: { Col },
  argTypes: {}
};

export const ToStorybook = props => (
  <Row className={cls.wrapper} {...props}>
    <Col span={24} className={cls.item}>
      col
    </Col>
    <Col span={12} className={cls.item}>
      col-12
    </Col>
    <Col span={12} className={cls.item}>
      col-12
    </Col>
    <Col span={8} className={cls.item}>
      col-8
    </Col>
    <Col span={8} className={cls.item}>
      col-8
    </Col>
    <Col span={8} className={cls.item}>
      col-8
    </Col>
    <Col span={6} className={cls.item}>
      col-6
    </Col>
    <Col span={6} className={cls.item}>
      col-6
    </Col>
    <Col span={6} className={cls.item}>
      col-6
    </Col>
    <Col span={6} className={cls.item}>
      col-6
    </Col>
  </Row>
);

ToStorybook.story = {
  name: 'Grid',
  parameters: {
    layout: 'fullscreen'
  }
};
