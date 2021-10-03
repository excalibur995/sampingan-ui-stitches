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

export type ButtonSizes = Exclude<SampinganUiSizes, 'none'>;

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
   * indicates the feedback of the button
   */
  feedback?: SaminganUiFeedback;
  /**
   * indicates the role of system
   */
  system?: SampinganUISystem;
  /**
   * indicates the color of Button
   */
  ink?: SampinganUIVariant;
  /**
   * Indicate Spinner Color
   */
  loadingInk?: SampinganColorVariant;
}

export const buttonDefaultProps: Required<ButtonProps> = {
  id: 'sampingan--button',
  type: 'primary',
  size: 'medium',
  children: '',
  loading: false,
  disabled: false,
  color: 'sampingan_primary',
  inlineStyle: {},
  block: false,
  feedback: 'neutral',
  system: 'Sampingan',
  ink: 'primary',
  loadingInk: 'sampingan_white',
};
