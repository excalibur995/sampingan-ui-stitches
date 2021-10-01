import React from 'react';
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'white' },
  },
};

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];
