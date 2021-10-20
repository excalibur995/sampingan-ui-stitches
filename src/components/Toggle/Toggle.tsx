import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled } from '../../theme';
import { defaultToggleProps, ToggleProps } from './Toggle.types';

const ToggleContainer = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 40,
  height: 24,
  backgroundColor: '#C4C4C4',
  radius: 'rounded-full',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:disabled': {
    background: '#F0F0F0 !important',
    cursor: 'not-allowed',
    '> span': {
      background: '#C4C4C4',
    },
  },
});

const ToggleThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 16,
  height: 16,
  backgroundColor: 'white',
  borderRadius: '9999px',
  transition: 'transform 300ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(21px)' },
});

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      id,
      name,
      inlineStyle,
      value,
      defaultChecked,
      disabled,
      backgroundColor,
      handleToggleChange,
      checked,
    },
    ref
  ) => {
    const handleChange = (checked: boolean) => {
      handleToggleChange && handleToggleChange(checked);
    };
    return (
      <ToggleContainer
        id={id}
        ref={ref}
        name={name}
        disabled={disabled}
        defaultChecked={defaultChecked}
        value={value}
        checked={checked}
        onCheckedChange={handleChange}
        css={{
          '&[data-state="checked"]': { backgroundColor: `$${backgroundColor}` },
          ...inlineStyle,
        }}
      >
        <ToggleThumb />
      </ToggleContainer>
    );
  }
);

Toggle.defaultProps = defaultToggleProps;
