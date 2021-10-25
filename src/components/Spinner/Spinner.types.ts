import {
  GlobalComponentTypes,
  SampinganColorVariant,
  SampinganUiSizes,
} from '../../types/index.types';

export interface SpinnerProps extends GlobalComponentTypes {
  /**
   * Indicate Spinner Size
   */
  size?: Exclude<SampinganUiSizes, 'xsmall' | 'xlarge'>;
  /**
   * Indicate Spinner Color
   */
  color?: SampinganColorVariant;
}

export const spinnerDefaultProps: Required<SpinnerProps> = {
  id: 'spinner--id',
  size: 'small',
  color: 'N50',
  inlineStyle: {},
  className: '',
};
