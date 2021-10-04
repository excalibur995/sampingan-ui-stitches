import React, { useMemo } from 'react';
import { styled } from '../../theme';
import { SampinganColorVariant } from '../../types/index.types';
import {
  hexToRGB,
  uiColorThemeHelper,
  useTypographyInk,
} from '../../utils/helper';
import { ChipsProps, defaultChipsProps } from './Chips.types';

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  width: 'fit-content',
  radius: 'chips',
  padding: '6px 2px',
  boxSizing: 'border-box',
  cursor: 'default',
  fontFamily: '$roboto',
  fontSize: '12px',
  variants: {
    states: {
      active: {
        border: 'thin solid  #3DA5D9;',
        '#closeable-button': {
          color: 'inherit',
        },
      },
      inactive: {
        background: '#FFFFFF',
        border: 'thin solid #D7DBDD',
        '> span': {
          color: '#454F57',
        },
      },
      disabled: {
        background: 'rgb(229 ,226 ,226)',
        border: 'none',
        cursor: 'not-allowed',
        '#closeable-button': {
          cursor: 'inherit',
        },
        '*': {
          color: '#868987',
        },
      },
    },
  },
  defaultVariants: {
    states: 'active',
  },
});

const ClosableButton = styled('button', {
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  padding: 0,
  fontSize: '12px',
});

const ContentWrapper = styled('div', {
  margin: '0 5px 0',
});

export const Chips = ({
  states,
  variants,
  children,
  onCloseClick,
  ink,
  system,
  id,
  inlineStyle,
  tagId,
}: ChipsProps) => {
  const handleRemoveChips = () => {
    if (states !== 'disabled') {
      onCloseClick && onCloseClick();
    }
  };
  const useInk = useMemo(() => {
    if (states === 'active') {
      const inks = useTypographyInk(system, ink);
      const slicedInk = inks.slice(1) as SampinganColorVariant;
      const isWhite =
        slicedInk === 'sampingan_white' || slicedInk === 'kerjaan_white';
      const hexRgbColor =
        uiColorThemeHelper.colors[slicedInk ?? 'kerjaan_primary'];
      return {
        backgroundColor: hexToRGB(hexRgbColor, 0.1),
        color: isWhite ? '#000' : inks,
        borderColor: isWhite ? '#000' : inks,
      };
    }
    return {};
  }, [states, system, ink]);

  return (
    <Wrapper id={id} style={inlineStyle} css={useInk} states={states}>
      {children && <ContentWrapper id={tagId}>{children}</ContentWrapper>}
      {variants === 'removeable' && (
        <ClosableButton
          id="closeable-button"
          onClick={handleRemoveChips}
          css={{
            margin: children ? '0 6px 0 2px' : '0',
            '&:active': {
              opacity: states !== 'disabled' ? '.5' : 1,
            },
          }}
        >
          <span>&#x2715;</span>
        </ClosableButton>
      )}
    </Wrapper>
  );
};

Chips.defaultProps = defaultChipsProps;
