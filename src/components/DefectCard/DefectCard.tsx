import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'usehooks-ts';
import cx from 'classnames';

import Icon from 'components/Icon';
import Button from 'components/Button';
import DefectStatus from 'components/DefectStatus';
import ShareTooltip from 'components/ShareTooltip';

import cls from './DefectCard.module.scss';

export enum DEFECT_TYPE {
  NORMAL = 'NORMAL',
  CRITICAL = 'CRITICAL',
  RECOMMENDATION = 'RECOMMENDATION'
}

export enum DEFECT_STATUS {
  NEW = 'NEW', // Новое
  READ = 'READ', // Устранено
  IN_PROGRESS = 'IN_PROGRESS', // В процессе
  IN_REVIEW = 'IN_REVIEW', // Проверка
  NOT_FIXED = 'NOT_FIXED', // Не устранено
  FIXED = 'FIXED', // Устранено
  IN_CORRECT = 'IN_CORRECT', // Неправильно
  DELETED = 'DELETED' // Удалено
}

interface IProps {
  id: number;
  selected?: boolean;
  description: string;
  measures: string;
  contractorName: string;
  subContractorName: string;
  foremanName: string;
  queueName: string;
  sectionName: string;
  targetName: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  detectedDate: string;
  dueDate: string;
  resolvedDate: string;
  defectType: DEFECT_TYPE;
  status: DEFECT_STATUS;
  shareUrl?: string;
  onClick?: () => void;
  onInCorrect?: () => void;
  onDownload?: () => void;
  onDuplicate?: () => void;
  onView?: () => void;
  onViewImage?: (url: string) => void;
}

const DefectCard: React.FC<IProps> = ({
  id,
  selected,
  description,
  measures,
  contractorName,
  subContractorName,
  foremanName,
  queueName,
  sectionName,
  targetName,
  beforeImageUrl,
  afterImageUrl,
  detectedDate,
  dueDate,
  resolvedDate,
  defectType,
  status,
  shareUrl,
  onClick,
  onInCorrect,
  onDownload,
  onDuplicate,
  onView,
  onViewImage
}) => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery('(min-width: 992px)');

  const parseDate = (str: string) => {
    if (!str) return null;
    const [day, month, year] = str.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    return isNaN(date.getTime()) ? null : date;
  };

  const isPassed = (dateStr: string) => {
    const due = parseDate(dateStr);
    if (!due) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return due < today;
  };

  const isUnread = isPassed(dueDate) && status === DEFECT_STATUS.NEW;

  const isExpired =
    isPassed(dueDate) && ![DEFECT_STATUS.FIXED, DEFECT_STATUS.IN_CORRECT, DEFECT_STATUS.DELETED].includes(status);

  return (
    <div
      className={cx(cls.wrapper, cls[`wrapper--type-${defectType}`], selected && cls['wrapper--selected'])}
      onClick={() => {
        if (isDesktop && onClick) {
          onClick();
        }
      }}
    >
      {!isDesktop && (
        <div className={cls.head}>
          <div className={cls.id}>
            {status === DEFECT_STATUS.READ && <Icon name="IdIcon" color="var(--color-primary-1000)" size={20} />}{' '}
            {`${t('id')}: ${id}`}
          </div>
          <DefectStatus status={status} />
        </div>
      )}
      <div className={cls.images}>
        <div className={cls.image}>
          {beforeImageUrl ? (
            <>
              <img
                onClick={e => {
                  e.stopPropagation();
                  onViewImage?.(beforeImageUrl!);
                }}
                src={beforeImageUrl}
                alt="Before img"
              />
              <div className={cls.overlay}>{t('before')}</div>
            </>
          ) : (
            <div className={cls.no}>
              <Icon name="Logo" size={50} />
              <div className={cls.text}>{t('no_image')}</div>
            </div>
          )}
        </div>
        <div className={cls.image}>
          {afterImageUrl ? (
            <>
              <img
                onClick={e => {
                  e.stopPropagation();
                  onViewImage?.(afterImageUrl!);
                }}
                src={afterImageUrl}
                alt="After img"
              />
              <div className={cls.overlay}>{t('after')}</div>
            </>
          ) : (
            <div className={cls.no}>
              <Icon name="Logo" size={50} />
              <div className={cls.text}>{t('no_image')}</div>
            </div>
          )}
        </div>
      </div>
      <div className={cls.info}>
        <div className={cls.left}>
          {isDesktop && (
            <div className={cls.id}>
              {status === DEFECT_STATUS.READ && <Icon name="IdIcon" color="var(--color-primary-1000)" size={20} />}{' '}
              {`${t('id')}: ${id}`}
            </div>
          )}
          <div className={cls.details}>
            <div className={cls.detail}>
              <div className={cls.detailLabel}>{t('description')}:</div>
              <div className={cls.detailValue}>{description}</div>
            </div>
            <div className={cls.detail}>
              <div className={cls.detailLabel}>{t('measures')}:</div>
              <div className={cls.detailValue}>{measures}</div>
            </div>
            <div className={cls.detail}>
              <div className={cls.detailLabel}>{t('contractor')}</div>
              <div className={cls.detailValue}>{contractorName}</div>
            </div>
            <div className={cls.detail}>
              <div className={cls.detailLabel}>{t('sub_contractor')}</div>
              <div className={cls.detailValue}>{subContractorName}</div>
            </div>
            <div className={cls.detail}>
              <div className={cls.detailLabel}>{t('foreman')}</div>
              <div className={cls.detailValue}>{foremanName}</div>
            </div>
          </div>
          <div className={cls.dates}>
            <div className={cls.date}>
              <div className={cls.dateLabel}>
                <Icon name="EyeOn" size={16} />
                {t('detected_date')}
              </div>
              <div className={cls.dateValue}>{detectedDate}</div>
            </div>
            <div className={cls.date}>
              <div className={cls.dateLabel}>
                <Icon name="Date" size={16} />
                {t('due_date')}
              </div>
              <div className={cls.dateValue}>{dueDate}</div>
            </div>
            <div className={cls.date}>
              <div className={cls.dateLabel}>
                <Icon name="CheckMark" size={16} />
                {t('resolved_date')}
              </div>
              <div className={cls.dateValue}>{resolvedDate}</div>
            </div>
          </div>
        </div>
        <div className={cls.right}>
          {isDesktop && <DefectStatus status={status} />}

          <div className={cls.items}>
            <div className={cls.item}>
              <Icon name="Invoice" size={20} /> {t(`enum_defect_type_${defectType}`)}
            </div>
            {!!queueName && (
              <div className={cls.item}>
                <Icon name="Queue" size={20} /> {queueName}
              </div>
            )}
            {!!sectionName && (
              <div className={cls.item}>
                <Icon name="Notepad" size={20} /> {sectionName}
              </div>
            )}
            {!!targetName && (
              <div className={cls.item}>
                <Icon name="Layers" size={20} /> {targetName}
              </div>
            )}
            {isUnread && (
              <div className={cx(cls.item, cls.itemRed)}>
                <Icon name="NotReadEye" size={20} /> {t('not_read_defect')}
              </div>
            )}
            {isExpired && (
              <div className={cx(cls.item, cls.itemRed)}>
                <Icon name="Expired" size={20} /> {t('expired_defect')}
              </div>
            )}
          </div>

          <div className={cls.btns}>
            {!!onInCorrect && (
              <Button
                onClick={e => {
                  e.stopPropagation();
                  onInCorrect();
                }}
                icon={<Icon name="CloseCircle" size={20} />}
                variant="filled"
                color="primary"
                block
              />
            )}

            {!!onDownload && (
              <Button
                onClick={e => {
                  e.stopPropagation();
                  onDownload();
                }}
                icon={<Icon name="Download" size={20} />}
                variant="filled"
                color="primary"
                block
              />
            )}

            {!!shareUrl && (
              <ShareTooltip url={shareUrl}>
                <Button
                  onClick={e => e.stopPropagation()}
                  icon={<Icon name="Share" size={20} />}
                  variant="filled"
                  color="primary"
                  block
                />
              </ShareTooltip>
            )}

            {!isDesktop && !!onClick && (
              <Button
                onClick={e => {
                  e.stopPropagation();
                  onClick();
                }}
                icon={<Icon name="Location" size={20} />}
                variant="filled"
                color="primary"
                block
              />
            )}

            {!!onDuplicate && (
              <Button
                onClick={e => {
                  e.stopPropagation();
                  onDuplicate();
                }}
                icon={<Icon name="Copy" size={20} />}
                variant="filled"
                color="primary"
                block
              />
            )}

            {!!onView && (
              <Button
                onClick={e => {
                  e.stopPropagation();
                  onView();
                }}
                icon={<Icon name="EyeOn" size={20} />}
                variant="filled"
                color="primary"
                block
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefectCard;
