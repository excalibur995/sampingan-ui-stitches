import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Icon from '../../components/Icon';
import {
  IconProperties,
  iconDefaultProperties,
} from '../../components/Icon/Icon.types';
import { SampinganUIIcon } from '../../types/index.types';

export default {
  title: 'Atom/Icon',
  component: Icon,
} as Meta;

export const Basic: Story<IconProperties> = ({ icon, ...props }) => {
  const listOfIcons: SampinganUIIcon[] = [
    'Warning',
    'Profile',
    'Positive',
    'Informative',
    'Failed',
    'Close',
    'Indeterminate',
    'Check',
  ];
  return (
    <React.Fragment>
      {listOfIcons.map((icon) => (
        <Icon key={icon} icon={icon} {...props} />
      ))}
    </React.Fragment>
  );
};

export const OnClick: Story<IconProperties> = (props) => <Icon {...props} />;

Basic.args = {
  ...iconDefaultProperties,
};

OnClick.args = {
  ...iconDefaultProperties,
  onClick: () => alert('onClick Icon'),
};
