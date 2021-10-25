import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Input from '../../components/Input';

import {
  InputProps,
  defaultInputProps,
} from '../../components/Input/Input.types';
import Spinner from '../../components/Spinner';

export default {
  title: 'Atom/Input',
  component: Input,
} as Meta;

type InputStory = Story<InputProps>;

const Template: InputStory = (props) => <Input {...props} />;

export const Basic: InputStory = Template.bind({});
export const WithLabel: InputStory = Template.bind({});
export const WithCaption: InputStory = Template.bind({});
export const WithLabelAndCaption: InputStory = Template.bind({});
export const PrefixAndSuffix: InputStory = Template.bind({});
export const MaxMin: InputStory = (props) => {
  const [text, setText] = React.useState('');
  return (
    <Input
      {...props}
      onChange={(input) => setText(input)}
      counter={text.length}
      useCounter
    />
  );
};

const onChange = (input: string) => console.log(input);

Basic.args = {
  ...defaultInputProps,
  onChange,
};

WithLabel.args = {
  ...defaultInputProps,
  useLabel: true,
  onChange,
};
WithCaption.args = {
  ...defaultInputProps,
  onChange,
  caption: 'Placeholder Caption here',
};

WithLabelAndCaption.args = {
  ...defaultInputProps,
  useLabel: true,
  caption: 'Placeholder Caption here',
  onChange,
};
PrefixAndSuffix.args = {
  ...defaultInputProps,
  prefix: <button onClick={() => alert('Touch Suffix')}>Touch me</button>,
  suffix: <Spinner color="B500" />,
  onChange,
};
MaxMin.args = {
  ...defaultInputProps,
  max: 10,
  min: 0,
};
