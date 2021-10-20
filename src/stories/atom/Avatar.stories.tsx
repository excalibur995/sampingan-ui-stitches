import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar from '../../components/Avatar';
import {
  AvatarProps,
  avatarDefaultProps,
} from '../../components/Avatar/Avatar.types';

export default {
  title: 'Atom/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (props) => <Avatar {...props} />;
export const WithImage = Template.bind({});
export const WithoutImage = Template.bind({});
export const onClick = Template.bind({});

WithImage.args = {
  ...avatarDefaultProps,
  src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
};

WithoutImage.args = {
  ...avatarDefaultProps,
};

onClick.args = {
  ...avatarDefaultProps,
  onClick: () => alert('Image onClick'),
};
