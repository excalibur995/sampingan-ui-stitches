import {
	SampinganColorVariant,
	SampinganUiSizes,
} from '../../types/index.types';

export interface SpinnerProps {
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
	size: 'small',
	color: 'sampingan_white',
};
