import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Spinner from '../../components/Spinner';
import { SpinnerProps } from '../../components/Spinner/Spinner.types';

export default {
  title: 'Atom/Spinner',
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (props) => <Spinner {...props} />;
export const Basic: Story<SpinnerProps> = Template.bind({});
export const Undefined_Color = Template.bind({});

Basic.args = {
  size: 'small',
  color: 'B500',
};

Undefined_Color.args = {
  // @ts-ignore
  color: 'lasdasldasdkaskd',
};
