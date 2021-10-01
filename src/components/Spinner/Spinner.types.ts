import {
  GlobalComponentTypes,
  SampinganColorVariant,
  SampinganUiSizes,
} from '../../types/index.types';

export interface SpinnerProps extends GlobalComponentTypes {
  /**
   * Indicate Spinner Size
   */
  size?: SampinganUiSizes;
  /**
   * Indicate Spinner Color
   */
  color?: SampinganColorVariant;
}

export const spinnerDefaultProps: Required<SpinnerProps> = {
  id: 'spinner--id',
  size: 'small',
  color: 'sampingan_white',
  inlineStyle: {},
};
