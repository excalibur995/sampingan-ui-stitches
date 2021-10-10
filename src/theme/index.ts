import { createStitches } from '@stitches/react';
import { SampinganRadii, SampinganUIElevation } from '../types/index.types';
import { uiColorThemeHelper } from '../utils/helper';
export const { styled, css, keyframes, globalCss, getCssText } = createStitches(
  {
    theme: {
      fonts: {
        mono: 'Söhne Mono, menlo, monospace',
        roboto: 'Roboto, sans-serif',
      },
      colors: {
        ...uiColorThemeHelper.colors,
      },
      radii: {
        rounded: '9999px',
      },
    },
    utils: {
      elevation: (value: SampinganUIElevation) => {
        const boxShadow = (() => {
          switch (value) {
            case 'interactive':
              return '0px 0px 1px 1px rgba(230,230,230,0.77)';
            case 'hover':
              return '0px 0px 5px 2px rgba(230,230,230,0.77)';
            case 'float':
              return '0px 0px 13px 6px rgba(230,230,230,0.77)';
            default:
              return 'none';
          }
        })();
        return {
          boxShadow,
        };
      },
      mx: (value: string) => ({
        marginRight: value,
        marginLeft: value,
      }),
      size: (value: string) => ({
        width: value,
        height: value,
      }),
      radius: (value: SampinganRadii) => ({
        borderRadius: uiColorThemeHelper.radii[value],
      }),
    },
  }
);

export const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'Roboto',
    fontWeight: 500,
    src: 'url("/static/fonts/Roboto/Roboto-Medium")',
  },
});
