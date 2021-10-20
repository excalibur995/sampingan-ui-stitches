import React from 'react';
import {
  Root as RadioContainer,
  Item,
  Indicator,
} from '@radix-ui/react-radio-group';
import { styled } from '../../theme';
import { radiogroupDefaultProps, RadioGroupProps } from './RadioGroup.types';
import { uiThemeHelper } from '../../utils/helper';

const RadioGroupRadio = styled(Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: '100%',
  border: `1px solid #9B9B9B`,
  '&:disabled': {
    backgroundColor: '#ECECEC',
    borderColor: '#C4C4C4',
    cursor: 'not-allowed',
    '[id^=radio-indicator]': {
      '&::after': {
        backgroundColor: '#C4C4C4 !important',
        cursor: 'not-allowed',
      },
    },
  },
});

const RadioGroupIndicator = styled(Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 19,
    height: 19,
    borderRadius: '50%',
  },
});

const Label = styled('label', {
  ...uiThemeHelper.font['caption-2'],
  paddingLeft: 15,
});

const Flex = styled('div', {
  display: 'flex',
  margin: '10px 0',
  alignItems: 'center',
});

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      id,
      orientation,
      defaultValue,
      dir,
      loop,
      name,
      required,
      value,
      item,
      color,
      inlineStyle,
      onValueChange,
    },
    ref
  ) => {
    return (
      <RadioContainer
        id={id}
        name={name}
        ref={ref}
        dir={dir}
        loop={loop}
        defaultValue={defaultValue}
        orientation={orientation}
        onValueChange={onValueChange}
        required={required}
        value={value}
        css={{
          ...inlineStyle,
        }}
      >
        {item &&
          item.length > 0 &&
          item.map((radioItem) => (
            <Flex key={radioItem.id}>
              <RadioGroupRadio
                id={radioItem.id}
                value={radioItem.value}
                disabled={radioItem.disabled}
                required={radioItem.required}
                css={{
                  borderColor:
                    `$${color}` ?? `$${radiogroupDefaultProps.color}`,
                }}
              >
                <RadioGroupIndicator
                  id={`radio-indicator-${radioItem.id}`}
                  css={{
                    '&::after': {
                      backgroundColor: radioItem.color
                        ? `$${radioItem.color}`
                        : `$${color}` ?? `$${radiogroupDefaultProps.color}`,
                    },
                  }}
                />
              </RadioGroupRadio>
              <Label htmlFor={radioItem.id}>{radioItem.label}</Label>
            </Flex>
          ))}
      </RadioContainer>
    );
  }
);

RadioGroup.defaultProps = radiogroupDefaultProps;
