import {
  GlobalComponentTypes,
  SampinganFontSizeVariant,
  SampinganTextTransform,
  SampinganUISystem,
  SampinganUIVariant,
} from '../../types/index.types';

export interface TypographyProps extends GlobalComponentTypes {
  /**
   * Typography content
   */
  children?: React.ReactNode;
  /**
   * Components Role, decide component what project user in
   */
  system?: SampinganUISystem;
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
  transform?: SampinganTextTransform;
}

export const typographyDefaultProps: Required<TypographyProps> = {
  id: 'sampingan-typo',
  inlineStyle: {},
  system: 'Sampingan',
  ink: 'neutral',
  variant: 'caption-2',
  children: '',
  transform: 'none',
};
