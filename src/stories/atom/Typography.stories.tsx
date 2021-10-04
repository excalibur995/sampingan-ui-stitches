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

interface VariantProps {
  variant: SampinganFontSizeVariant;
  detail: 'fontSize' | 'fontWeight' | 'lineHeight';
}

const VariantDetail = ({ detail, variant }: VariantProps) => {
  const theme = uiColorThemeHelper.font[variant][detail];
  const text = detail.replace(/[A-Z]/g, (letter) => ` ${letter}`);
  return (
    <div>
      <Typography transform="capitalize" variant="caption-2">
        {text}: <b>{theme}</b>
      </Typography>
    </div>
  );
};

export const Variants: Story<TypographyProps> = () => {
  const availableFonts = Object.keys(uiColorThemeHelper.font);
  return (
    <React.Fragment>
      {availableFonts.map((font_variant) => (
        <div style={{ margin: '5px auto' }} key={font_variant}>
          <Typography variant={font_variant as SampinganFontSizeVariant}>
            {font_variant}
          </Typography>
          <div
            style={{
              borderTop: 'thin solid #bbb',
              padding: '5px 0',
            }}
          >
            <VariantDetail
              variant={font_variant as SampinganFontSizeVariant}
              detail="fontSize"
            />
            <VariantDetail
              variant={font_variant as SampinganFontSizeVariant}
              detail="fontWeight"
            />
            <VariantDetail
              variant={font_variant as SampinganFontSizeVariant}
              detail="lineHeight"
            />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
