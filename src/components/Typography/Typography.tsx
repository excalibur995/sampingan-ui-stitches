import React from 'react';
import { styled } from '../../theme/index';
import { uiThemeHelper } from '../../utils/helper';
import { typographyDefaultProps, TypographyProps } from './Typoghraphy.types';
import { useVariantTag } from '../../utils/helper';

const TypographyContent = styled('span', {
  variants: {
    //@ts-ignore
    variant: {
      ...uiThemeHelper.font,
    },
  },
  defaultVariants: {
    variant: typographyDefaultProps.variant,
  },
});

export const Typography = ({
  ink,
  variant,
  transform,
  children,
  id,
  inlineStyle,
}: TypographyProps) => {
  const typoTag = useVariantTag(variant ?? typographyDefaultProps.variant);

  return (
    <TypographyContent
      id={id}
      as={typoTag}
      variant={variant}
      css={{
        textTransform: transform,
        color: `$${ink}`,
        fontFamily: '$mono',
        ...inlineStyle,
      }}
    >
      {children}
    </TypographyContent>
  );
};

Typography.defaultProps = {
  ...typographyDefaultProps,
};
