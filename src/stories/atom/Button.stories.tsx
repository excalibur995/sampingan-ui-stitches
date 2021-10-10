import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '../../components/Button';
import {
  buttonDefaultProps,
  ButtonProps,
} from '../../components/Button/Button.types';
import Icon from '../../components/Icon';

export default {
  title: 'Atom/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;
export const Primary: Story<ButtonProps> = Template.bind({});
export const Secondary: Story<ButtonProps> = Template.bind({});
export const Tertiary: Story<ButtonProps> = Template.bind({});
export const Ghost: Story<ButtonProps> = Template.bind({});
export const Large: Story<ButtonProps> = Template.bind({});
export const LeftIcon: Story<ButtonProps> = Template.bind({});
export const RightIcon: Story<ButtonProps> = Template.bind({});
export const IconOnly: Story<ButtonProps> = Template.bind({});

Template.args = {
  ...buttonDefaultProps,
};
Primary.args = {
  ...buttonDefaultProps,
  children: 'Primary',
};
Secondary.args = {
  ...buttonDefaultProps,
  type: 'secondary',
  children: 'Secondary',
};
Tertiary.args = {
  ...buttonDefaultProps,
  type: 'tertiary',
  children: 'Tertiary',
};
Ghost.args = {
  ...buttonDefaultProps,
  type: 'ghost',
  children: 'Ghost',
};
Large.args = {
  ...buttonDefaultProps,
  size: 'large',
  children: 'Large',
};

LeftIcon.args = {
  ...buttonDefaultProps,
  leftIcon: <Icon icon="Positive" />,
  children: 'Left Icon',
};

RightIcon.args = {
  ...buttonDefaultProps,
  rightIcon: <Icon icon="Informative" />,
  children: 'Right Icon',
};

IconOnly.args = {
  ...buttonDefaultProps,
  leftIcon: <Icon icon="Failed" />,
};
