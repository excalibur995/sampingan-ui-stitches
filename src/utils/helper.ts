import { typographyDefaultProps } from '../components/Typography/Typoghraphy.types';
import { SampinganUITheme } from '../theme/theme.types';
import {
  SampinganUISystem,
  SampinganUIVariant,
  SampinganColorVariant,
  SampinganFontSizeVariant,
  SampinganUIIcon,
} from '../types/index.types';

type CV = SampinganColorVariant;
type Ink = SampinganUIVariant;
type System = SampinganUISystem;
type SVGR = React.SVGProps<SVGSVGElement>;

export const svgrDefaultProperties: SVGR = {
  width: 24,
  height: 24,
};

export const useTypographyInk = (system?: System, ink?: Ink): CV => {
  if (!system || !ink) {
    const default_role = system ?? typographyDefaultProps.system;
    const default_ink = ink ?? typographyDefaultProps.ink;
    return `$${default_role}_${default_ink}`.toLowerCase() as CV;
  }
  return `$${system}_${ink}`.toLowerCase() as CV;
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

export const randomId = () => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$%^&*()_+';
  const charactersLength = characters.length;
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const hexToRGB = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

export function isIcon(value: string): value is SampinganUIIcon {
  const listOfIcons: SampinganUIIcon[] = [
    'Warning',
    'Profile',
    'Positive',
    'Informative',
    'Failed',
    'Close',
  ];
  return listOfIcons.includes(value as SampinganUIIcon);
}

export const uiColorThemeHelper: SampinganUITheme = {
  colors: {
    // Kerjaan
    kerjaan_primary: '#0492F7',
    kerjaan_secondary: '#F76904',
    kerjaan_positive: '#2A9D90',
    kerjaan_negative: '#E50013',
    kerjaan_warning: '#F6B700',
    kerjaan_neutral: '#333A3F',
    kerjaan_white: '#fff',
    // Sampingan
    sampingan_primary: '#F9C45F',
    sampingan_secondary: '#5F95F9',
    sampingan_positive: '#2A9D90',
    sampingan_negative: '#E50013',
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
    'rounded-full': '9999px',
    rounded: '10px',
    chips: '36px',
  },
};
