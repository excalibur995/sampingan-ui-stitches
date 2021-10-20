import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox from '../../components/Checkbox';
import {
  CheckboxProps,
  defaultCheckboxProps,
} from '../../components/Checkbox/Checkbox.types';
import { SampinganCheckedState } from '../../types/index.types';
import Typography from '../../components/Typography';

export default {
  title: 'Atom/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (props) => <Checkbox {...props} />;

export const Basic = Template.bind({});
export const withLabel = Template.bind({});

export const onClickNormal: Story<CheckboxProps> = () => {
  const [state, setstate] = useState(false);
  const handleToggle = (toggle: SampinganCheckedState) => {
    if (toggle === 'indeterminate') {
      return setstate(false);
    }
    setstate(toggle);
  };
  return (
    <React.Fragment>
      <Checkbox checked={state} onChecked={handleToggle} />
    </React.Fragment>
  );
};

export const onClickIndeterminate: Story<CheckboxProps> = () => {
  const [state, setstate] = useState(false);
  const handleToggle = (toggle: SampinganCheckedState) => {
    if (toggle === 'indeterminate') {
      return setstate(false);
    }
    setstate(toggle);
  };
  return (
    <React.Fragment>
      <Checkbox
        checked={state}
        indeterminate={state}
        onChecked={handleToggle}
      />
    </React.Fragment>
  );
};

Basic.args = {
  ...defaultCheckboxProps,
};

withLabel.args = {
  ...defaultCheckboxProps,
  defaultChecked: true,
  children: (
    <Typography inlineStyle={{ paddingLeft: 15 }}>
      This is Label for checkBox
    </Typography>
  ),
};
