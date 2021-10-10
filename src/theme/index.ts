import { createStitches } from '@stitches/react';
import { SampinganRadii } from '../types/index.types';
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
