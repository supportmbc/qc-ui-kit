import React from 'react';

import Spacer from 'components/Spacer';

import DefectStatus from './DefectStatus';
import { DEFECT_STATUS } from 'components/DefectCard/DefectCard';

export default {
  title: 'Components/DefectStatus',
  component: DefectStatus,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <DefectStatus status={DEFECT_STATUS.NEW} />
    <Spacer size={24} />
    <DefectStatus status={DEFECT_STATUS.READ} />
    <Spacer size={24} />
    <DefectStatus status={DEFECT_STATUS.IN_PROGRESS} />
    <Spacer size={24} />
    <DefectStatus status={DEFECT_STATUS.IN_REVIEW} />
    <Spacer size={24} />
    <DefectStatus status={DEFECT_STATUS.NOT_FIXED} />
    <Spacer size={24} />
    <DefectStatus status={DEFECT_STATUS.FIXED} />
    <Spacer size={24} />
    <DefectStatus status={DEFECT_STATUS.IN_CORRECT} />
    <Spacer size={24} />
    <DefectStatus status={DEFECT_STATUS.DELETED} />
  </>
);

ToStorybook.story = {
  name: 'DefectStatus',
  args: {
    title: 'DefectStatus component'
  }
};
