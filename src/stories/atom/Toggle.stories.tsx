import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Toggle from '../../components/Toggle';
import {
  ToggleProps,
  defaultToggleProps,
} from '../../components/Toggle/Toggle.types';

export default {
  title: 'Atom/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = (props) => <Toggle {...props} />;

export const Basic = Template.bind({});

export const onClick: Story<ToggleProps> = (props) => {
  const [state, setstate] = useState(false);
  const handleToggle = (toggle: boolean) => {
    setstate(toggle);
    alert(`toggle is ${toggle}`);
  };

  return (
    <React.Fragment>
      <Toggle checked={state} handleToggleChange={handleToggle} {...props} />
    </React.Fragment>
  );
};

Basic.args = {
  ...defaultToggleProps,
  defaultChecked: true,
};
