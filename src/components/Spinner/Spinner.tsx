import React from 'react';
import { keyframes } from '@stitches/react';
import { styled } from '../../theme/index';
import { spinnerDefaultProps, SpinnerProps } from './Spinner.types';
import { SampinganColorVariant } from '../../types/index.types';

const rotatingSpin = keyframes({
	'0%': {
		transform: 'rotate(0deg)',
	},
	'100%': {
		transform: 'rotate(360deg)',
	},
});

const SpinnerComponent = styled('div', {
	animation: `${rotatingSpin} 2s linear infinite`,
	borderTop: '2px solid',
	radius: 'rounded-full',
	variants: {
		size: {
			small: {
				size: '10px',
			},
			medium: {
				size: '16px',
			},
			large: {
				size: '24px',
			},
		},
	},

	defaultVariants: {
		size: spinnerDefaultProps.size,
	},
});

const useColorSpinner = (color?: SampinganColorVariant) =>
	color ?? spinnerDefaultProps.color;

export const Spinner = ({ color, size }: SpinnerProps) => (
	<SpinnerComponent
		css={{
			borderTopColor: `$${useColorSpinner(color)}`,
		}}
		size={size}
	/>
);

Spinner.defaultProps = spinnerDefaultProps;
