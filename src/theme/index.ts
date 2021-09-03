import { createStitches } from '@stitches/react';
import { SampinganRadii } from '../types/index.types';
import { uiColorThemeHelper } from '../utils/helper';

export const { styled, css, keyframes } = createStitches({
	theme: {
		fonts: {
			mono: 'Söhne Mono, menlo, monospace',
		},
		colors: {
			...uiColorThemeHelper.colors,
		},
		radii: {
			rounded: '9999px',
		},
	},
	utils: {
		size: (value: string) => ({
			width: value,
			height: value,
		}),
		radius: (value: SampinganRadii) => ({
			borderRadius: uiColorThemeHelper.radii[value],
		}),
	},
});
