import {
  GlobalComponentTypes,
  SaminganUiFeedback,
  SampinganColorVariant,
  SampinganUIButtonVariant,
  SampinganUiSizes,
} from '../../types/index.types';
import { SpinnerProps } from '../Spinner/Spinner.types';

export type ButtonSizes = Exclude<
  SampinganUiSizes,
  'none' | 'medium' | 'xlarge' | 'xsmall'
>;

export interface ButtonProps extends SpinnerProps, GlobalComponentTypes {
  /**
   * Define the button variant based on it's role
   */
  type?: SampinganUIButtonVariant;
  /**
   * Define the button sizes
   */
  size?: ButtonSizes;
  /**
   * Button content
   */
  children?: React.ReactNode;
  /**
   * indicates button loading
   */
  loading?: boolean;
  /**
   * indicates is button disabled or not,
   */
  disabled?: boolean;
  /**
   * block property will make the button fit to its parent width.
   */
  block?: boolean;
  /**
   * indicates the variants of Button
   */
  ink?: SampinganColorVariant;
  /**
   * Button right icon
   */
  rightIcon?: JSX.Element | null;
  /**
   * Button left icon
   */
  leftIcon?: JSX.Element | null;
  /**
   * indicates the feedback of the button
   */
  // feedback?: SaminganUiFeedback;
}

export const buttonDefaultProps: ButtonProps = {
  id: 'sampingan--button',
  type: 'primary',
  size: 'small',
  children: '',
  loading: false,
  disabled: false,
  color: 'N50',
  inlineStyle: {},
  block: false,
  // feedback: 'neutral',
  ink: 'B500',
  rightIcon: null,
  leftIcon: null,
};
