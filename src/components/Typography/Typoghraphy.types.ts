import {
  SampinganFontSizeVariant,
  SampinganTextTransform,
  SampinganUISystem,
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
  system: 'Sampingan',
  ink: 'neutral',
  variant: 'caption-1',
  children: '',
  transform: 'none',
};
