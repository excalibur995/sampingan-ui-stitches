import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RadioGroup from '../../components/RadioGroup';
import {
  RadioGroupProps,
  radiogroupDefaultProps,
} from '../../components/RadioGroup/RadioGroup.types';
import useToggle from '../../hooks/useToggle';

export default {
  title: 'Atom/Radio Group',
  component: RadioGroup,
} as Meta;

const Template: Story<RadioGroupProps> = (props) => <RadioGroup {...props} />;

export const Basic = Template.bind({});
export const onChange = () => {
  const [value, setValue] = React.useState<string>('s1');
  const [toggle, handlers] = useToggle(true);

  const handleChange = (item: string) => setValue(item);

  return (
    <React.Fragment>
      <button onClick={() => handlers.toggle()}>
        Set disabled {toggle ? 'off' : 'on'}
      </button>
      <RadioGroup
        value={value}
        defaultValue="d1"
        item={[
          {
            id: 'r1',
            label: 'Default',
            value: 'd1',
          },
          {
            id: 'r2',
            label: 'Sample',
            value: 's1',
            disabled: toggle,
          },
        ]}
        onValueChange={handleChange}
      />
      <label> The Current Value is {value}</label>
    </React.Fragment>
  );
};

Basic.args = {
  ...radiogroupDefaultProps,
  item: [
    {
      id: 'r1',
      label: 'Default',
      value: 'd1',
    },
    {
      id: 'r2',
      label: 'Sample',
      value: 's1',
    },
  ],
  value: 's1',
};
