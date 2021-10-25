import {
  GlobalComponentTypes,
  SampinganColorVariant,
} from '../../types/index.types';

export interface ToggleProps extends GlobalComponentTypes {
  /**
   * defines the background color when toggle is active
   */
  backgroundColor?: SampinganColorVariant;
  /**
   * When true, prevents the user from interacting with the switch.
   */
  disabled?: boolean;
  /**
   * The controlled state of the switch. Must be used in conjunction with handleToggleChange.
   */
  checked?: boolean;
  /**
   * The state of the switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: boolean;
  /**
   * Event handler called when the state of the switch changes.
   */
  handleToggleChange?: (checked: boolean) => void;
  /**
   * The value given as data when submitted with a name.
   */
  value?: string | number | readonly string[] | undefined;
  /**
   * The name of the switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
}

export const defaultToggleProps: ToggleProps = {
  id: 'sampingan-toggle',
  inlineStyle: {},
  backgroundColor: 'Y500',
  disabled: false,
  checked: false,
  defaultChecked: false,
  value: undefined,
  handleToggleChange: undefined,
  name: 'Sampingan Toggle',
};
