import React from 'react';
import Spinner from '../Spinner';
import { styled } from '../../theme';
import { ButtonProps, buttonDefaultProps } from './Button.types';
import { cssImplicator } from './Button.helper';
import { SampinganUiSizes } from '../../types/index.types';
import { useTypographyInk } from '../../utils/helper';

const ButtonContainer = styled('button', {
  radius: 'semi-rounded',
  border: 'none',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  variants: {
    block: {
      true: {
        width: '100%',
      },
    },
    size: {
      small: {
        minWidth: 58,
        height: 30,
      },
      medium: {
        minWidth: 72,
        height: 40,
      },
      large: {
        minWidth: 96,
        height: 56,
      },
    },
    type: {
      primary: {
        // todo!
      },
      secondary: {
        // todo!
      },
      tertiary: {
        // todo!
      },
      ghost: {},
    },
  },
  '&:disabled': {
    '	background-color': '#cccccc',
  },
  '&:active': {
    opacity: 0.3,
  },
  transition: 'all 0.5s ease',
  color: '$kerjaan_white',
  defaultVariants: {
    type: buttonDefaultProps.type,
    size: buttonDefaultProps.size,
    block: false,
  },
});

const SpinnerContainer = styled('span', {
  display: 'inline-block',
  verticalAlign: 'sub',
  transition: 'margin 0.5s ease',
  variants: {
    loading: {
      true: {
        mx: '8px',
      },
    },
  },
  defaultVariants: {
    loading: false,
  },
});

function LoadingConditionContainer(props: ButtonProps) {
  const { loading, children, size, loadingInk } = props;
  const sizes: SampinganUiSizes = loading
    ? size ?? buttonDefaultProps.size
    : 'none';

  return (
    <React.Fragment>
      <SpinnerContainer loading={loading}>
        <Spinner size={sizes} color={loadingInk} />
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
  } = props;

  const cssComposer = React.useMemo(() => cssImplicator(props), [props]);

  const buttonInk = useTypographyInk(system, ink);
  return (
    <ButtonContainer
      id={id}
      css={{
        background: buttonInk,
        ...cssComposer,
        ...inlineStyle,
      }}
      disabled={disabled}
      size={size}
      block={block}
      type={type}
    >
      <LoadingConditionContainer {...props}>
        {children}
      </LoadingConditionContainer>
    </ButtonContainer>
  );
};

Button.defaultProps = buttonDefaultProps;
