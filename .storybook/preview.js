import React from 'react';
import { themes } from '@storybook/theming';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	// layout: 'centered',
	controls: { expanded: true },
	options: {
		storySort: (a, b) => {
			// We want the Welcome story at the top
			if (b[1].kind === 'Welcome') {
				return 1;
			}

			// Sort the other stories by ID
			// https://github.com/storybookjs/storybook/issues/548#issuecomment-530305279
			return a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, { numeric: true });
		},
	},
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
