import React from 'react';

export type SampinganColorVariant =
  | 'B50'
  | 'B500'
  | 'B900'
  | 'Y50'
  | 'Y500'
  | 'Y900'
  | 'G50'
  | 'G500'
  | 'G900'
  | 'R50'
  | 'R500'
  | 'R900'
  | 'N50'
  | 'N200'
  | 'N400'
  | 'N600'
  | 'N900';

export type SampinganUIVariant =
  | 'primary'
  | 'secondary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'neutral'
  | 'white';

export type SampinganUIButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost';

export type SampinganFontSizeVariant =
  | 'title'
  | 'hero'
  | 'header'
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'caption-1'
  | 'caption-2'
  | 'caption-3';

export type SampinganTextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'initial'
  | 'inherit';

export type SampinganUIInputTypes =
  | 'email'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

export type SampinganChipsVariants = 'text-only' | 'removeable';
export type SampinganUiSizes =
  | 'none'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge';

export type SaminganFontSizes =
  | '0.75rem' // 12px
  | '0.875rem' // 14px
  | '1rem' // 16px
  | '1.25rem' // 16px
  | '1.5rem' // 24px
  | '2rem'; // 32px
export type SaminganLineHeight =
  | '16px'
  | '20px'
  | '22px'
  | '24px'
  | '28px'
  | '40px';
export type SampinganFontWeight = 400 | 500 | 700;
export type SampinganCheckedState = boolean | 'indeterminate';
export type SampinganRadii =
  | 'rounded-none'
  | 'semi-rounded'
  | 'rounded'
  | 'rounded-full'
  | 'chips';
export type SaminganUiFeedback =
  | 'neutral'
  | 'high-priority'
  | 'positive'
  | 'negative'
  | 'warning';
export type SampinganUIStates = 'active' | 'inactive' | 'disabled';
export type SampinganImageFit =
  | 'fill'
  | 'contain'
  | 'cover'
  | 'none'
  | 'scale-down'
  | 'contain'
  | 'inherit';
export type SampinganUIElevation = 'thin' | 'interactive' | 'hover' | 'float';
export type SampinganUIIcon =
  | 'Warning'
  | 'Positive'
  | 'Informative'
  | 'Failed'
  | 'Profile'
  | 'Close'
  | 'Check'
  | 'Indeterminate';
export type SampinganImageStatus = 'idle' | 'loading' | 'loaded' | 'error';
export type SampinganUIBaseClick<T> = React.MouseEventHandler<T>;
export interface GlobalComponentTypes {
  /**
   * Indicate component identifier
   */
  id?: string;
  /**
   * Indicate component inline style extra
   */
  inlineStyle?: React.CSSProperties;
  /**
   * Indicate component class
   */
  className?: string;
}
