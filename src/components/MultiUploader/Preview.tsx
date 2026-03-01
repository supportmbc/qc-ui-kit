import React from 'react';
import cx from 'classnames';

import Icon from 'components/Icon';

import Details from './Details';
import { IFile } from './types';

import cls from './MultiUploader.module.scss';

interface IProps {
  type: 'image' | 'video' | 'file';
  file: IFile;
  onView: (file: IFile) => void;
  onRemove: () => void;
}

const Preview: React.FC<IProps> = ({ file, type, onView, onRemove }) => {
  const { name, extension, size, url } = file;

  return (
    <div className={cls.preview}>
      <div className={cls.content}>
        <div className={cls.previewName}>{name}</div>
        <Details {...{ extension, size }} />
      </div>
      <div className={cls.previewInner}>
        <div className={cls.previewImage}>
          {type === 'image' ? (
            <img src={url} alt="Image preview" />
          ) : (
            <div className={cx(cls['file-type'], cls[`file-type--${type}`])} />
          )}
        </div>
        <div className={cls.previewButtonList}>
          {type === 'image' ? (
            <div className={cls.previewButtonItem} onClick={() => onView(file)}>
              <Icon name="EyeOn" size={20} />
            </div>
          ) : null}
          <a className={cls.previewButtonItem} href={url}>
            <Icon name="Download" size={20} />
          </a>
          <div className={cls.previewButtonItem} onClick={() => onRemove()}>
            <Icon name="Delete" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
