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
   * indicates like how far card from the ground
   */
  elevation?: SampinganUIElevation;
}

export const cardDefaultProps: CardProps = {
  children: null,
  elevation: 'interactive',
  id: 'sampingan-ui-card',
  inlineStyle: {},
};
