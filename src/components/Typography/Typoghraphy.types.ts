import {
  GlobalComponentTypes,
  SampinganColorVariant,
  SampinganFontSizeVariant,
  SampinganTextTransform,
} from '../../types/index.types';

export interface TypographyProps extends GlobalComponentTypes {
  /**
   * Typography content
   */
  children?: React.ReactNode;
  /**
   * Text Color for the text
   */
  ink?: SampinganColorVariant;
  /**
   * Define text sizes, line height, font weight
   */
  variant?: SampinganFontSizeVariant;
  /**
   * Define the text transformation
   */
  transform?: SampinganTextTransform;
}

export const typographyDefaultProps: Required<TypographyProps> = {
  id: 'sampingan-typo',
  className: '',
  inlineStyle: {},
  ink: 'N900',
  variant: 'caption-2',
  children: '',
  transform: 'none',
};
