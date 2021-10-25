import React from 'react';
import {
  GlobalComponentTypes,
  SampinganChipsVariants,
  SampinganColorVariant,
  SampinganUIStates,
} from '../../types/index.types';
export interface ChipsProps extends GlobalComponentTypes {
  /**
   * id for chips child or tag
   */
  tagId?: string;
  /**
   * Define Chips should have close button or text-only
   */
  variants?: SampinganChipsVariants;
  /**
   * Define Chips states whether is active, inactive , or disabled
   */
  states?: SampinganUIStates;
  /**
   * Color for the Chips
   */
  ink?: SampinganColorVariant;
  /**
   * Chips content or Tag
   */
  children?: React.ReactNode;
  /**
   * trigger when close button clicked
   */
  onCloseClick?: () => void;
}

export const defaultChipsProps: Required<ChipsProps> = {
  id: 'sampingan--chips',
  tagId: 'chips--tag',
  className: '',
  inlineStyle: {},
  variants: 'removeable',
  states: 'active',
  ink: 'B500',
  children: null,
  onCloseClick: () => {},
};
