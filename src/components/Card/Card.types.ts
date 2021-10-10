import React from 'react';
import {
  GlobalComponentTypes,
  SampinganUIElevation,
} from '../../types/index.types';

export interface CardProps extends GlobalComponentTypes {
  children: React.ReactNode;
  elevation: SampinganUIElevation;
}

export const cardDefaultProps: CardProps = {
  children: null,
  elevation: 'interactive',
  id: 'sampingan-ui-card',
  inlineStyle: {},
};
