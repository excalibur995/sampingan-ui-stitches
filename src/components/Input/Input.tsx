import React, { ChangeEvent, FocusEventHandler, FormEvent } from 'react';
import { styled } from '../../theme';
import { defaultInputProps, InputProps } from './Input.types';
import { uiColorThemeHelper } from '../../utils/helper';

const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
});

const InputLabel = styled('label', {
  ...uiColorThemeHelper.font['body-2'],
  color: '#454F57',
  fontFamily: '$roboto',
});

const SampinganInputContainer = styled('section', {
  display: 'flex',
  fontFamily: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: 'thin solid #D7DBDD',
  borderRadius: '4px',
  background: '$sampingan_white',
  variants: {
    sizes: {
      small: {
        padding: '8px 12px',
      },
      large: {
        padding: '16px',
      },
    },
  },
  defaultVariants: {
    sizes: 'small',
  },
});

const SampinganInput = styled('input', {
  border: 'none',
  fontFamily: '$roboto',
  borderRadius: 'inherit',
  width: 'auto',
  height: 'auto',
  outline: 'none',
  '&:disabled': {
    backgroundColor: '#F6F6F6',
    cursor: 'not-allowed',
  },
  '&::placeholder': {
    color: '#9EABB5',
    opacity: 1,
    ...uiColorThemeHelper.font['body-2'],
  },
});

const CaptionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '2px',
  position: 'relative',
});

const Caption = styled('span', {
  ...uiColorThemeHelper.font['caption-3'],
  fontFamily: '$roboto',
  color: '#A9ADB0',
});

const Counter = styled(Caption, {
  marginLeft: '5px',
  textAlign: 'right',
});

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      placeholder,
      sizes,
      label,
      caption,
      type,
      useLabel,
      min,
      max,
      prefix,
      suffix,
      disabled,
      onChange,
      onSubmit,
      onBlur,
      pattern,
      inlineStyle,
      useCounter,
      counter,
    },
    ref
  ) => {
    const onInputChange = (input: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        const {
          target: { value },
        } = input;

        onChange(value);
      }
    };

    const onSubmitChange = (submit: FormEvent<HTMLInputElement>) => {
      onSubmit && onSubmit(submit);
    };

    const onHandleBlur = (blur: React.FocusEvent<HTMLInputElement>) => {
      onBlur && onBlur(blur);
    };

    return (
      <InputWrapper style={inlineStyle}>
        {useLabel && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <SampinganInputContainer
          css={{
            backgroundColor: disabled ? '#F6F6F6' : '',
          }}
          sizes={sizes}
        >
          {prefix && <React.Fragment>{prefix}</React.Fragment>}
          <SampinganInput
            id={id}
            name={name}
            ref={ref}
            onBlur={onHandleBlur}
            placeholder={placeholder}
            type={type}
            min={min}
            minLength={min}
            maxLength={max}
            max={max}
            onChange={onInputChange}
            onSubmit={onSubmitChange}
            disabled={disabled}
            pattern={pattern}
          />
          {suffix && <React.Fragment>{suffix}</React.Fragment>}
        </SampinganInputContainer>
        <CaptionWrapper>
          <Caption>{caption}</Caption>
          {useCounter && <Counter>{`${counter}/${max}`}</Counter>}
        </CaptionWrapper>
      </InputWrapper>
    );
  }
);

Input.defaultProps = defaultInputProps;
