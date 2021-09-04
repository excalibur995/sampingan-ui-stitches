import React from 'react';
import { styled } from '../../theme/index';
import { uiColorThemeHelper } from '../../utils/helper';
import { typographyDefaultProps, TypographyProps } from './Typoghraphy.types';
import { useVariantTag, useTypographyInk } from '../../utils/helper';

const TypographyContent = styled('span', {
	variants: {
		//@ts-ignore
		variant: {
			...uiColorThemeHelper.font,
		},
	},
	defaultVariants: {
		variant: typographyDefaultProps.variant,
	},
});

export const Typography = ({
	roles,
	ink,
	variant,
	transform,
	children,
}: TypographyProps) => {
	const typoTag = useVariantTag(variant ?? typographyDefaultProps.variant);
	const typographyInk = useTypographyInk(roles, ink);

	return (
		<TypographyContent
			as={typoTag}
			variant={variant}
			css={{
				textTransform: transform,
				color: typographyInk,
				fontFamily: '$mono',
			}}
		>
			{children}
		</TypographyContent>
	);
};

Typography.defaultProps = typographyDefaultProps;
