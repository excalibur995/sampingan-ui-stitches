import {
	SampinganFontSizeVariant,
	SampinganUIRole,
	SampinganUIVariant,
} from '../../types/index.types';

export interface TypographyProps {
	/**
	 * Typography content
	 */
	children?: React.ReactNode;
	/**
	 * Components Role, decide component what project user in
	 */
	roles?: SampinganUIRole;
	/**
	 * Text Color for the text
	 */
	ink?: SampinganUIVariant;
	/**
	 * Define text sizes, line height, font weight
	 */
	variant?: SampinganFontSizeVariant;
	/**
	 * Define the text transformation
	 */
	transform?:
		| 'none'
		| 'capitalize'
		| 'uppercase'
		| 'lowercase'
		| 'initial'
		| 'inherit';
}

export const typographyDefaultProps: Required<TypographyProps> = {
	roles: 'Sampingan',
	ink: 'neutral',
	variant: 'title-t1',
	children: '',
	transform: 'none',
};
