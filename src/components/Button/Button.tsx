import React, { useMemo } from 'react';
import Spinner from '../Spinner';
import { styled } from '../../theme';
import { ButtonProps, buttonDefaultProps } from './Button.types';
import {
  SampinganUIButtonVariant,
  SampinganUiSizes,
} from '../../types/index.types';
import { useTypographyInk } from '../../utils/helper';
import { spinnerDefaultProps } from '../Spinner/Spinner.types';

const ButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  radius: 'semi-rounded',
  border: 'none',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  transition: 'all 0.3s ease',
  variants: {
    block: {
      true: {
        width: '100%',
      },
    },
    size: {
      small: {
        minWidth: 68,
        height: 30,
      },
      large: {
        minWidth: 84,
        height: 52,
      },
    },
    type: {
      primary: {
        border: 'none !important',
      },
      secondary: {
        background: 'transparent !important',
        border: 'thin solid #000',
        '&:disabled': {
          border: 'thin solid #cccccc',
          color: '#cccccc !important',
        },
      },
      tertiary: {
        background: '#F0F0F0',
        color: '$kerjaan_neutral',
      },
      ghost: {
        background: 'none',
        border: 'none',
        color: '$kerjaan_neutral !important',
        '&:disabled': {
          width: 'fit-content',
          background: 'none',
          color: '#cccccc !important',
        },
      },
    },
  },
  '&:disabled': {
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
  },
  '&:active': {
    opacity: 0.3,
  },
  color: '$kerjaan_white',
  defaultVariants: {
    type: buttonDefaultProps.type,
    size: buttonDefaultProps.size,
    block: false,
  },
});

const SpinnerContainer = styled('span', {
  display: 'inline-block',
  transition: 'inherit',
  opacity: 1,
  variants: {
    loading: {
      true: {
        marginRight: '8px',
      },
      false: {
        marginRight: '0',
        opacity: 0,
      },
    },
  },
  defaultVariants: {
    loading: false,
  },
});

const IconContainer = styled('div', {
  display: 'inherit',
  position: 'relative',
  transition: 'inherit',
  margin: ' 0 2px',
  opacity: 1,
  variants: {
    loading: {
      true: {
        margin: '0',
        opacity: 0,
      },
    },
  },
  defaultVariants: {
    loading: false,
  },
});

function LoadingConditionContainer(props: ButtonProps) {
  const { loading, children, size, color } = props;
  const sizes: SampinganUiSizes = size ?? spinnerDefaultProps.size;
  return (
    <React.Fragment>
      <SpinnerContainer loading={loading}>
        {loading && <Spinner size={sizes} color={color} />}
      </SpinnerContainer>
      {children}
    </React.Fragment>
  );
}

export const Button = (props: ButtonProps) => {
  const {
    id,
    size,
    type,
    children,
    block,
    inlineStyle,
    ink,
    system,
    disabled,
    rightIcon,
    leftIcon,
    loading,
  } = props;

  const systemButtonInk = useMemo(
    () => useTypographyInk(system, ink),
    [system, ink]
  );

  console.log(rightIcon);
  const buttonInk = useMemo(() => {
    const whitelist: SampinganUIButtonVariant[] = ['ghost', 'tertiary'];
    if (type && !whitelist.includes(type)) {
      return systemButtonInk;
    }
    return;
  }, [type, system, ink]);
  return (
    <ButtonContainer
      id={id}
      css={{
        background: buttonInk,
        borderColor: buttonInk,
        color: type === 'secondary' ? buttonInk : '$kerjaan_white',
        ...inlineStyle,
      }}
      disabled={disabled}
      size={size}
      block={block}
      type={type}
    >
      <IconContainer loading={loading}>
        {leftIcon && !loading && React.cloneElement(leftIcon)}
      </IconContainer>
      <LoadingConditionContainer {...props}>
        {children}
      </LoadingConditionContainer>
      <IconContainer>
        {rightIcon && React.cloneElement(rightIcon)}
      </IconContainer>
    </ButtonContainer>
  );
};

Button.defaultProps = buttonDefaultProps;
