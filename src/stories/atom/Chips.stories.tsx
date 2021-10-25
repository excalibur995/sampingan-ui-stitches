import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Chips from '../../components/Chips';
import {
  ChipsProps,
  defaultChipsProps,
} from '../../components/Chips/Chips.types';

export default {
  title: 'Atom/Chips',
  component: Chips,
} as Meta;

const Template: Story<ChipsProps> = (props) => <Chips {...props} />;

export const Active: Story<ChipsProps> = Template.bind({});
export const Inactive: Story<ChipsProps> = Template.bind({});
export const Disabled: Story<ChipsProps> = Template.bind({});
export const TextOnly: Story<ChipsProps> = Template.bind({});
export const Removeable: Story<ChipsProps> = Template.bind({});
export const OnClickExample: Story<ChipsProps> = () => {
  const [listContainer, setListContainer] = React.useState<ChipsProps[]>([
    {
      children: 'Chips 1',
      ink: 'B500',

      states: 'active',
      variants: 'removeable',
    },
    {
      children: 'Chips 2',
      ink: 'Y500',

      states: 'active',
      variants: 'removeable',
    },
    {
      children: 'Chips 3',
      ink: 'R500',
      states: 'active',
      variants: 'removeable',
    },
    {
      children: 'Chips 4',
      ink: 'G500',

      states: 'inactive',
      variants: 'text-only',
    },
    {
      children: 'Chips 5',
      ink: 'N600',

      states: 'disabled',
      variants: 'removeable',
    },
    {
      children: 'Chips 6',
      ink: 'N50',

      states: 'active',
      variants: 'text-only',
    },
  ]);

  const onRemoveChips = (idx: number) => {
    const list = [...listContainer];
    const newList = list.filter((_, index) => index !== idx);
    setListContainer(newList);
  };
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {listContainer.map((propt, idx) => (
          <div key={idx} style={{ margin: '5px' }}>
            <Chips {...propt} onCloseClick={() => onRemoveChips(idx)} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

Active.args = {
  ...defaultChipsProps,
  children: 'Active',
};
Inactive.args = {
  ...defaultChipsProps,
  states: 'inactive',
  children: 'Inactive',
};
Disabled.args = {
  ...defaultChipsProps,
  states: 'disabled',
  children: 'Disabled',
};
TextOnly.args = {
  ...defaultChipsProps,
  variants: 'text-only',
  children: 'Text Only',
};

Removeable.args = {
  ...defaultChipsProps,
  children: 'Removeable',
};
