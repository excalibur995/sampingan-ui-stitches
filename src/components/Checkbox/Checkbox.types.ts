import React from 'react';
import {
  GlobalComponentTypes,
  SampinganCheckedState,
  SampinganColorVariant,
} from '../../types/index.types';

export interface CheckboxProps extends GlobalComponentTypes {
  /**
   * The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.
   */
  checked?: boolean;
  /**
   * When true, prevents the user from interacting with the checkbox.
   */
  disabled?: boolean;
  /**
   * The indeterminate checked state of checkbox
   */
  indeterminate?: boolean;
  /**
   * The name of the checkbox. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
  /**
   * The value given as data when submitted with a name.
   */
  value?: string;
  /**
   * When true, indicates that the user must check the checkbox before the owning form can be submitted.
   */
  required?: boolean;
  /**
   * The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.
   */
  defaultChecked?: boolean;
  /**
   * Checkbox active background
   */
  ink?: SampinganColorVariant;
  /**
   * The controlled checked state of the checkbox. Must be used in conjunction with onChecked.
   */
  onChecked?: (checked: SampinganCheckedState) => void;
  /**
   * Checkbox child, for example using it for label
   */
  children?: React.ReactNode;
}
export const defaultCheckboxProps: CheckboxProps = {
  id: 'sampingan-checkbox',
  inlineStyle: {},
  indeterminate: false,
  disabled: false,
  checked: false,
  value: 'on',
  name: 'checbox',
  required: false,
  defaultChecked: false,
  ink: 'kerjaan_primary',
  onChecked: () => null,
  children: undefined,
};
