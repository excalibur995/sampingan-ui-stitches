import {
  GlobalComponentTypes,
  SampinganColorVariant,
} from '../../types/index.types';

export interface RadioGroupProps extends GlobalComponentTypes {
  /**
   * The value of the radio item that should be checked when initially rendered.
   * Use when you do not need to control the state of the radio items.
   */
  defaultValue?: string;
  /**
   * The controlled value of the radio item to check.
   * Should be used in conjunction with `onValueChange`.
   */
  value?: string;
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;
  /**
   * The name of the group. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
  /**
   * When true, indicates that the user must check a
   * radio item before the owning form can be submitted.
   */
  required?: boolean;
  /**
   * The orientation of the component.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The reading direction of the radio group. If omitted,
   * assumes LTR (left-to-right) reading mode.
   */
  dir?: 'ltr' | 'rtl';
  /**
   * When true, keyboard navigation will loop from last item to first, and vice versa.
   */
  loop?: boolean;
  /**
   * An item in the group that can be checked.
   * An input will also render when used within a form to ensure events propagate correctly.
   */
  item?: RadioGroupItems[];
  /**
   * The color of indicator
   */
  color?: SampinganColorVariant;
}

export interface RadioGroupItems {
  /**
   * Identifier for each Radio
   */
  id: string;
  /**
   * The value given as data when submitted with a name.
   */
  value: string;
  /**
   * The Label given as data when submitted with a name.
   */
  label: string;
  /**
   * When true, prevents the user from interacting with the radio item.
   */
  disabled?: boolean;
  /**
   * When true, indicates that the user must check
   * the radio item before the owning form can be submitted.
   */
  required?: boolean;
  /**
   * The color of indicator
   */
  color?: SampinganColorVariant;
}

export const radiogroupDefaultProps: RadioGroupProps = {
  defaultValue: '',
  dir: 'ltr',
  id: 'sampingan-radio-group',
  inlineStyle: {},
  item: [],
  loop: true,
  name: '',
  onValueChange: undefined,
  orientation: undefined,
  required: false,
  value: '',
  color: 'kerjaan_primary',
};
