import React from 'react';

export interface WrapperProps {
  state?: 'default' | 'error';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  readOnly?: boolean;
  isFocused?: boolean;
  hidden?: boolean;
  prefix?: string;
  suffix?: string;
  iconPrefix?: React.ReactNode;
  onIconPrefix?: () => void;
  iconSuffix?: React.ReactNode;
  onIconSuffix?: () => void;
  message?: string | undefined;
}

export interface TextInputProps extends WrapperProps {
  id: string;
  value: string;
  type?: 'text' | 'number' | 'password' | 'email';
  placeholder?: string;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  onBlur?: (e: any) => void;
  overwrite?: boolean;
}

export interface NumberInputProps extends Omit<TextInputProps, 'type'> {
  valuePrefix?: string;
  valueSuffix?: string;
  min?: number;
  max?: number;
}

export interface MaskInputProps extends Omit<TextInputProps, 'type'> {
  mask: any;
  maskType?: MASK_TYPE;
  unmask?: boolean;
  lazy?: boolean;
  placeholderChar?: string;
  prepare?: (value: string) => string;
  [key: string]: any;
}

export type TMask = {
  mask: string;
};

export enum MASK_TYPE {
  TEXT = 'TEXT',
  ONLY_TEXT = 'ONLY_TEXT',
  NUMBER = 'NUMBER',
  EMAIL = 'EMAIL'
}
