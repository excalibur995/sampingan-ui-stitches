import React, { FormEvent } from 'react';
import {
  GlobalComponentTypes,
  SampinganUIInputTypes,
  SampinganUiSizes,
} from '../../types/index.types';

export interface InputProps extends GlobalComponentTypes {
  /**
   * specify a name for an input element
   */
  name?: string;
  /**
   * specifies a short hint that describes the expected value of an input field
   */
  placeholder?: string;
  /**
   * specifies the sizes of input
   */
  sizes?: Extract<SampinganUiSizes, 'small' | 'large'>;
  /**
   * specifies the labels of input
   */
  label?: string;
  /**
   * indicates that input should use label or not
   */
  useLabel?: boolean;
  /**
   * specifies the bottom caption of input
   */
  caption?: string;
  /**
   * specifies the types of input like
   * 'email',
   * 'password',
   * 'search',
   * 'tel',
   * 'text',
   * 'url';
   */
  type?: SampinganUIInputTypes;
  /**
   * specifies the maximum length of user input
   */
  max?: number;
  /**
   * specifies the minimum length of user input
   */
  min?: number;
  /**
   * indicates that is input disabled or not
   */
  disabled?: boolean;
  /**
   * element before input
   */
  prefix?: React.ReactNode;
  /**
   * element after input
   */
  suffix?: React.ReactNode;
  /**
   * specifies a regular expression that
   * the input element's value is checked against on form submission
   */
  pattern?: string;
  /**
   * indicates that input should use counter or not
   */
  useCounter?: boolean;
  /**
   * specifies the user input length, the maximum input
   * is controlled by the max property
   */
  counter?: number;
  /**
   * The onChange event occurs when the value of an element has been changed.
   */
  onChange?: (input: string) => void;
  /**
   * The onSubmit attribute fires when a form is submitted
   */
  onSubmit?: (submit: FormEvent<HTMLInputElement>) => void;
  /**
   * The onBlur event occurs when the input loses focus
   */
  onBlur?: (blur: React.FocusEvent<HTMLInputElement>) => void;
}

export const defaultInputProps: Required<InputProps> = {
  id: 'sampingan-input',
  name: 'sampingan--input--name',
  inlineStyle: {},
  placeholder: 'Placeholder text here',
  sizes: 'small',
  label: 'Label',
  useLabel: false,
  caption: '',
  type: 'text',
  max: 255,
  min: 0,
  useCounter: false,
  counter: 0,
  prefix: null,
  suffix: null,
  pattern: '',
  disabled: false,
  onChange: () => null,
  onSubmit: () => null,
  onBlur: () => null,
};
