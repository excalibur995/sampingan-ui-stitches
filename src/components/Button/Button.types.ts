import {
  GlobalComponentTypes,
  SaminganUiFeedback,
  SampinganColorVariant,
  SampinganUIButtonVariant,
  SampinganUISystem,
  SampinganUiSizes,
  SampinganUIVariant,
} from '../../types/index.types';
import { SpinnerProps } from '../Spinner/Spinner.types';

export type ButtonSizes = Exclude<SampinganUiSizes, 'none' | 'medium'>;

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
   * indicates the role of system
   */
  system?: SampinganUISystem;
  /**
   * indicates the color of Button
   */
  ink?: Extract<SampinganUIVariant, 'primary' | 'positive' | 'negative'>;
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
  color: 'sampingan_white',
  inlineStyle: {},
  block: false,
  // feedback: 'neutral',
  system: 'Sampingan',
  ink: 'primary',
  rightIcon: null,
  leftIcon: null,
};
