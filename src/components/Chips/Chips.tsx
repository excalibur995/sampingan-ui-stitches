import React, { useMemo } from 'react';
import { styled } from '../../theme';
import { hexToRGB, uiThemeHelper } from '../../utils/helper';
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
        background: '$N50',
        border: 'thin solid #D7DBDD',
        '> span': {
          color: '$N900',
        },
      },
      disabled: {
        background: '$N200',
        border: 'none',
        cursor: 'not-allowed',
        '#closeable-button': {
          cursor: 'inherit',
        },
        '*': {
          color: '$N900',
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
      const isWhite = ink && ink.substring(0, 1) === 'N';
      const hexRgbColor = uiThemeHelper.colors[ink ?? 'N50'];
      const rgbAlphaColor = hexToRGB(hexRgbColor, 0.1);
      return {
        backgroundColor: rgbAlphaColor,
        color: isWhite ? '#000' : '$' + ink,
        borderColor: isWhite ? '#000' : '$' + ink,
      };
    }
    return {};
  }, [states, ink]);

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
