import { typographyDefaultProps } from '../components/Typography/Typoghraphy.types';
import { SampinganUITheme } from '../theme/theme.types';
import {
  SampinganUISystem,
  SampinganUIVariant,
  SampinganColorVariant,
  SampinganFontSizeVariant,
} from '../types/index.types';

type CV = SampinganColorVariant;
type Ink = SampinganUIVariant;
type System = SampinganUISystem;

export const useTypographyInk = (system?: System, ink?: Ink): CV => {
  if (!system || !ink) {
    const default_role = system ?? typographyDefaultProps.system;
    const default_ink = ink ?? typographyDefaultProps.ink;
    return `$${default_role}_${default_ink}`.toLowerCase() as SampinganColorVariant;
  }
  return `$${system}_${ink}`.toLowerCase() as SampinganColorVariant;
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
    title: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '40px',
    },
    hero: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: '28px',
    },
    header: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '20px',
    },
    'body-1': {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '20px',
    },
    'body-2': {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '20px',
    },
    'body-3': {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '20px',
    },
    'caption-1': {
      fontSize: '0.75rem',
      fontWeight: 700,
      lineHeight: '16px',
    },
    'caption-2': {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: '16px',
    },
    'caption-3': {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '16px',
    },
  },
  radii: {
    'rounded-none': '0px',
    'semi-rounded': '4px',
    rounded: '10px',
    'rounded-full': '9999px',
  },
};
