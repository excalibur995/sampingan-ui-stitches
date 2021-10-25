import { SampinganUITheme } from '../theme/theme.types';
import { SampinganFontSizeVariant } from '../types/index.types';

type SVGR = React.SVGProps<SVGSVGElement>;

export const svgrDefaultProperties: SVGR = {
  width: 24,
  height: 24,
};

export const getUserInital = (name?: string) => {
  if (name) {
    const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
    const initials = [...name.matchAll(rgx)] || [];
    return (
      (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase();
  }

  return name;
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

export const hexToRGB = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

export const uiThemeHelper: SampinganUITheme = {
  colors: {
    /**
     * Blue Section
     */
    B50: '#E2F4FA',
    B500: '#3DA5D9',
    B900: '#215581',
    /**
     * Yellow Section
     */
    Y50: '#FFF8E1',
    Y500: '#FEC209',
    Y900: '#DC5F00',
    /**
     * Green Section
     */
    G50: '#E2F3F2',
    G500: '#2A9D90',
    G900: '#195347',
    /**
     * Red Section
     */
    R50: '#FFEBEE',
    R500: '#E83730',
    R900: '#BA1816',
    /**
     * Neutral Section
     */
    N50: '#FFFFFF',
    N200: '#ECECEC',
    N400: '#C4C4C4',
    N600: '#9B9B9B',
    N900: '#262626',
  },
  font: {
    title: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '40px',
      fontFamily: 'sans-serif',
    },
    hero: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: '28px',
      fontFamily: 'sans-serif',
    },
    header: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '20px',
      fontFamily: 'sans-serif',
    },
    'body-1': {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '20px',
      fontFamily: 'sans-serif',
    },
    'body-2': {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '20px',
      fontFamily: 'sans-serif',
    },
    'body-3': {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '20px',
      fontFamily: 'sans-serif',
    },
    'caption-1': {
      fontSize: '0.75rem',
      fontWeight: 700,
      lineHeight: '16px',
      fontFamily: 'sans-serif',
    },
    'caption-2': {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: '16px',
      fontFamily: 'sans-serif',
    },
    'caption-3': {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '16px',
      fontFamily: 'sans-serif',
    },
  },
  radii: {
    'rounded-none': '0px',
    'semi-rounded': '6px',
    'rounded-full': '9999px',
    rounded: '12px',
    chips: '36px',
  },
};
