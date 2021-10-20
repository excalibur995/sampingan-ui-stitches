import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { css, styled } from '../../theme';
import { CheckboxProps, defaultCheckboxProps } from './Checkbox.types';
import { SampinganCheckedState } from '../../types/index.types';
import Icon from '../Icon';

const CheckboxContainer = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: '$kerjaan_white',
  width: 25,
  height: 25,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 'interactive',
  transition: 'background-color 0.2s ease-in',
  cursor: 'pointer',
  variants: {
    disabledChecked: {
      true: {
        backgroundColor: '#C4C4C4 !important',
        cursor: 'not-allowed',
      },
    },
  },
  '&:disabled': {
    backgroundColor: '#F0F0F0',
    cursor: 'not-allowed',
  },
  defaultVariants: {
    disabledChecked: false,
  },
});
const Center = styled('div', { display: 'flex', alignItems: 'center' });

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      id,
      name,
      defaultChecked,
      disabled,
      indeterminate,
      onChecked,
      checked,
      ink,
      children,
      value,
    },
    ref
  ) => {
    const onHandleChange = (checked: SampinganCheckedState) => {
      onChecked && onChecked(checked);
    };

    const background =
      defaultChecked || checked || indeterminate ? `$${ink}` : '$kerjaan_white';
    return (
      <Center>
        <CheckboxContainer
          id={id}
          ref={ref}
          checked={checked}
          onCheckedChange={onHandleChange}
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          disabled={disabled}
          disabledChecked={(checked || defaultChecked) && disabled}
          css={{
            backgroundColor: background,
            borderColor: background,
          }}
        >
          {(checked || defaultChecked) && !indeterminate && (
            <Icon icon="Check" width={14} height={10} />
          )}
          {indeterminate && (
            <Icon icon="Indeterminate" width={14} height={10} />
          )}
        </CheckboxContainer>
        {children}
      </Center>
    );
  }
);

Checkbox.defaultProps = defaultCheckboxProps;
