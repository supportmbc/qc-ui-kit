import React from 'react';

import Spacer from 'components/Spacer';

import BeforeImg from '../../assets/images/defect_before.png';
import AfterImg from '../../assets/images/defect_after.png';

import DefectCard, { DEFECT_STATUS, DEFECT_TYPE } from './DefectCard';

export default {
  title: 'Components/DefectCard',
  component: DefectCard,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <div style={{ width: 1200 }}>
    <DefectCard
      id={1}
      selected={true}
      beforeImageUrl={BeforeImg}
      afterImageUrl={AfterImg}
      description="Sahifa umumiy jihatdan professional va yaxshi ishlab chiqilgan. Biroq, foydalanuvchi 258 ta xizmat ichidan keraklisini tez topishi uchun ko‘proq yo‘naltiruvchi elementlar, rangli aksentlar va sarlavhalar"
      measures="Sahifa umumiy jihatdan professional va yaxshi ishlab chiqilgan. Biroq, foydalanuvchi 258 ta xizmat ichidan keraklisini tez topishi uchun ko‘proq yo‘naltiruvchi elementlar, rangli aksentlar va sarlavhalar"
      contractorName="ООО 'Строй-Групп'"
      subContractorName="ООО 'Строй-Групп-holding'"
      foremanName="Ivanov I.L."
      queueName="Очередь"
      sectionName="Секция"
      targetName="2-Этаж"
      detectedDate="02.09.2025"
      dueDate="26.11.2025"
      resolvedDate="11.09.2025"
      defectType={DEFECT_TYPE.NORMAL}
      status={DEFECT_STATUS.NEW}
      shareUrl="http://localhost:5173/defects/50"
      onClick={() => {}}
      onDownload={() => {}}
      onDuplicate={() => {}}
      onView={() => {}}
    />

    <Spacer size={20} />

    <DefectCard
      id={1}
      selected={true}
      beforeImageUrl={BeforeImg}
      afterImageUrl={AfterImg}
      description="Sahifa umumiy jihatdan professional va yaxshi ishlab chiqilgan. Biroq, foydalanuvchi 258 ta xizmat ichidan keraklisini tez topishi uchun ko‘proq yo‘naltiruvchi elementlar, rangli aksentlar va sarlavhalar"
      measures="Sahifa umumiy jihatdan professional va yaxshi ishlab chiqilgan. Biroq, foydalanuvchi 258 ta xizmat ichidan keraklisini tez topishi uchun ko‘proq yo‘naltiruvchi elementlar, rangli aksentlar va sarlavhalar"
      contractorName="ООО 'Строй-Групп'"
      subContractorName="ООО 'Строй-Групп-holding'"
      foremanName="Ivanov I.L."
      queueName="Очередь"
      sectionName="Секция"
      targetName="2-Этаж"
      detectedDate="02.09.2025"
      dueDate="26.11.2025"
      resolvedDate="11.09.2025"
      defectType={DEFECT_TYPE.NORMAL}
      status={DEFECT_STATUS.READ}
      shareUrl="http://localhost:5173/defects/50"
      onClick={() => {}}
      onDownload={() => {}}
      onDuplicate={() => {}}
      onView={() => {}}
    />

    <Spacer size={20} />

    <DefectCard
      id={1}
      description="Sahifa umumiy jihatdan professional va yaxshi ishlab chiqilgan. Biroq, foydalanuvchi 258 ta xizmat ichidan keraklisini tez topishi uchun ko‘proq yo‘naltiruvchi elementlar, rangli aksentlar va sarlavhalar"
      measures="Ремонт согласно тех. карте 2."
      contractorName="ООО 'Строй-Групп'"
      subContractorName="ООО 'Строй-Групп-holding'"
      foremanName="Ivanov I.L."
      queueName="Очередь"
      sectionName="Секция"
      targetName="2-Этаж"
      detectedDate="02.09.2025"
      dueDate="10.12.2025"
      resolvedDate="11.09.2025"
      defectType={DEFECT_TYPE.RECOMMENDATION}
      status={DEFECT_STATUS.IN_PROGRESS}
      shareUrl="http://localhost:5173/defects/50"
      onClick={() => {}}
      onDownload={() => {}}
      onDuplicate={() => {}}
      onView={() => {}}
    />

    <Spacer size={20} />

    <DefectCard
      id={1}
      beforeImageUrl={BeforeImg}
      afterImageUrl={AfterImg}
      description="Обнаружен дефект 2 в конструкции."
      measures="Ремонт согласно тех. карте 2."
      contractorName="ООО 'Строй-Групп'"
      subContractorName="ООО 'Строй-Групп-holding'"
      foremanName="Ivanov I.L."
      queueName="Очередь"
      sectionName="Секция"
      targetName="2-Этаж"
      detectedDate="02.09.2025"
      dueDate="10.09.2025"
      resolvedDate="11.09.2025"
      defectType={DEFECT_TYPE.RECOMMENDATION}
      status={DEFECT_STATUS.IN_REVIEW}
      shareUrl="http://localhost:5173/defects/50"
      onClick={() => {}}
      onDownload={() => {}}
      onDuplicate={() => {}}
      onView={() => {}}
    />

    <Spacer size={20} />

    <DefectCard
      id={1}
      beforeImageUrl={BeforeImg}
      afterImageUrl={AfterImg}
      description="Обнаружен дефект 2 в конструкции."
      measures="Ремонт согласно тех. карте 2."
      contractorName="ООО 'Строй-Групп'"
      subContractorName="ООО 'Строй-Групп-holding'"
      foremanName="Ivanov I.L."
      queueName="Очередь"
      sectionName="Секция"
      targetName="2-Этаж"
      detectedDate="02.09.2025"
      dueDate="10.09.2025"
      resolvedDate="11.09.2025"
      defectType={DEFECT_TYPE.CRITICAL}
      status={DEFECT_STATUS.NOT_FIXED}
      shareUrl="http://localhost:5173/defects/50"
      onClick={() => {}}
      onDownload={() => {}}
      onDuplicate={() => {}}
      onView={() => {}}
    />

    <Spacer size={20} />

    <DefectCard
      id={1}
      beforeImageUrl={BeforeImg}
      afterImageUrl={AfterImg}
      description="Обнаружен дефект 2 в конструкции."
      measures="Ремонт согласно тех. карте 2."
      contractorName="ООО 'Строй-Групп'"
      subContractorName="ООО 'Строй-Групп-holding'"
      foremanName="Ivanov I.L."
      queueName="Очередь"
      sectionName="Секция"
      targetName="2-Этаж"
      detectedDate="02.09.2025"
      dueDate="10.09.2025"
      resolvedDate="11.09.2025"
      defectType={DEFECT_TYPE.CRITICAL}
      status={DEFECT_STATUS.FIXED}
      shareUrl="http://localhost:5173/defects/50"
      onClick={() => {}}
      onDownload={() => {}}
      onDuplicate={() => {}}
      onView={() => {}}
    />
  </div>
);

ToStorybook.story = {
  name: 'DefectCard',
  args: {
    title: 'DefectCard component'
  }
};
