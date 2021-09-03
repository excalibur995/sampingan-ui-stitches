import { typographyDefaultProps } from '../components/Typography/Typoghraphy.types';
import { SampinganUITheme } from '../theme/theme.types';
import {
	SampinganUIRole,
	SampinganUIVariant,
	SampinganColorVariant,
	SampinganFontSizeVariant,
} from '../types/index.types';

export const useTypographyInk = (
	roles?: SampinganUIRole,
	ink?: SampinganUIVariant
): SampinganColorVariant => {
	if (!roles || !ink) {
		const default_role = roles ?? typographyDefaultProps.roles;
		const default_ink = ink ?? typographyDefaultProps.ink;
		return `$${default_role}_${default_ink}`.toLowerCase() as SampinganColorVariant;
	}
	return `$${roles}_${ink}`.toLowerCase() as SampinganColorVariant;
};

export const useVariantTag = (variant: SampinganFontSizeVariant) => {
	const variantTag = variant.substring(0, variant.indexOf('-'));

	switch (variantTag) {
		case 'title':
			return 'h1';
		case 'header':
			return 'h3';
		case 'paragraph':
			return 'p';
		default:
			return 'span';
	}
};

export const uiColorThemeHelper: SampinganUITheme = {
	colors: {
		// Kerjaan
		kerjaan_primary: '#0492F7',
		kerjaan_secondary: '#F76904',
		kerjaan_positive: '#009D00',
		kerjaan_negative: '#E50013',
		kerjaan_warning: '#F6B700',
		kerjaan_neutral: '#333A3F',
		kerjaan_white: '#fff',
		// Sampingan
		sampingan_primary: '#F9C45F',
		sampingan_secondary: '#5F95F9',
		sampingan_positive: '#32B917',
		sampingan_negative: '#F26056',
		sampingan_warning: '#F9EA5F',
		sampingan_neutral: '#262626',
		sampingan_white: '#fff',
	},
	font: {
		'title-t1': {
			fontSize: '2.5rem',
			lineHeight: '32px',
			fontWeight: 700,
		},
		'title-t2': {
			fontSize: '1.75rem',
			lineHeight: '24px',
			fontWeight: 700,
		},
		'header-h1': {
			fontSize: '1.5rem',
			lineHeight: '20px',
			fontWeight: 700,
		},
		'header-h2': {
			fontSize: '1.5rem',
			lineHeight: '16px',
			fontWeight: 700,
		},
		'field-f1-4': {
			fontSize: '1.5rem',
			lineHeight: '16px',
			fontWeight: 400,
		},
		'field-f1-5': {
			fontSize: '1.5rem',
			lineHeight: '16px',
			fontWeight: 500,
		},
		'field-f1-7': {
			fontSize: '1.5rem',
			lineHeight: '16px',
			fontWeight: 700,
		},
		'field-f2-4': {
			fontSize: '1.375rem',
			lineHeight: '14px',
			fontWeight: 400,
		},
		'field-f2-5': {
			fontSize: '1.375rem',
			lineHeight: '14px',
			fontWeight: 500,
		},
		'field-f2-7': {
			fontSize: '1.375rem',
			lineHeight: '14px',
			fontWeight: 700,
		},
		'paragraph-p1-4': {
			fontSize: '1.25rem',
			lineHeight: '16px',
			fontWeight: 400,
		},
		'paragraph-p1-5': {
			fontSize: '1.25rem',
			lineHeight: '16px',
			fontWeight: 500,
		},
		'paragraph-p1-7': {
			fontSize: '1.25rem',
			lineHeight: '16px',
			fontWeight: 700,
		},
		'paragraph-p2-4': {
			fontSize: '1rem',
			lineHeight: '12px',
			fontWeight: 400,
		},
		'paragraph-p2-5': {
			fontSize: '1rem',
			lineHeight: '12px',
			fontWeight: 500,
		},
		'paragraph-p2-7': {
			fontSize: '1rem',
			lineHeight: '12px',
			fontWeight: 700,
		},
		'button-b1': {
			fontSize: '1.5rem',
			lineHeight: '16px',
			fontWeight: 400,
		},
		'button-b2': {
			fontSize: '1.375rem',
			lineHeight: '14px',
			fontWeight: 400,
		},
	},
	radii: {
		'rounded-none': '0px',
		rounded: '10px',
		'rounded-full': '9999px',
	},
};
