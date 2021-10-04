import React from 'react';
import {
  GlobalComponentTypes,
  SampinganChipsVariants,
  SampinganUIStates,
  SampinganUISystem,
  SampinganUIVariant,
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
   * Components Role, decide component what project user in
   */
  system?: SampinganUISystem;
  /**
   * Color for the Chips
   */
  ink?: SampinganUIVariant;
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
  inlineStyle: {},
  variants: 'removeable',
  states: 'active',
  system: 'Kerjaan',
  ink: 'primary',
  children: null,
  onCloseClick: () => {},
};
