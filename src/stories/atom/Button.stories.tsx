import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '../../components/Button';
import {
  buttonDefaultProps,
  ButtonProps,
} from '../../components/Button/Button.types';

export default {
  title: 'Atom/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (props) => (
  <React.Fragment>
    <h1>Still on Progres...</h1>
    <Button {...props} />
  </React.Fragment>
);
export const Basic: Story<ButtonProps> = Template.bind({});

Basic.args = {
  ...buttonDefaultProps,
  children: 'Button',
};
