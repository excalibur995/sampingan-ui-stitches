import React from 'react';
import {
  GlobalComponentTypes,
  SampinganUIElevation,
} from '../../types/index.types';

export interface CardProps extends GlobalComponentTypes {
  /**
   * Card content
   */
  children?: React.ReactNode;
  /**
   * Indicates like how far card from the ground
   */
  elevation?: SampinganUIElevation;
  /**
   * Event handler called when the Card Click.
   */
  onClick?: () => void;
}

export const cardDefaultProps: CardProps = {
  children: null,
  elevation: 'interactive',
  id: 'sampingan-ui-card',
  inlineStyle: {},
  className: '',
  onClick: undefined,
};
