import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Card from '../../components/Card';
import { CardProps, cardDefaultProps } from '../../components/Card/Card.types';

export default {
  title: 'Atom/Card',
  component: Card,
} as Meta;

export const Basic: Story<CardProps> = (props) => <Card {...props} />;

Basic.args = {
  ...cardDefaultProps,
  children: 'Card',
  inlineStyle: {
    width: 128,
    height: 128,
  },
};
