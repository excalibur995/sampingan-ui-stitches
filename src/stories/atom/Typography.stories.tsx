import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography from '../../components/Typography';
import {
	TypographyProps,
	typographyDefaultProps,
} from '../../components/Typography/Typoghraphy.types';
import { SampinganFontSizeVariant } from '../../types/index.types';
import { uiColorThemeHelper } from '../..//utils/helper';

export default {
	title: 'Atom/Typography',
	component: Typography,
} as Meta;

export const Basic: Story<TypographyProps> = (args) => <Typography {...args} />;

Basic.args = {
	...typographyDefaultProps,
	children: 'The quick brown fox jumps over the lazy dog',
};

export const Variants: Story<TypographyProps> = () => {
	const availableFonts = Object.keys(uiColorThemeHelper.font);
	return (
		<React.Fragment>
			{availableFonts.map((font_variant) => (
				<div style={{ margin: '25px auto' }} key={font_variant}>
					<Typography variant={font_variant as SampinganFontSizeVariant}>
						{font_variant.split('-').join('/')}
					</Typography>
				</div>
			))}
		</React.Fragment>
	);
};
