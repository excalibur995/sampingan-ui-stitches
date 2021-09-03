import {
	SampinganColorVariant,
	SampinganFontSizeVariant,
	SaminganLineHeight,
	SampinganFontWeight,
	SampinganRadii,
} from '../types/index.types';

export interface SampinganUITheme {
	colors: SampinganUiThemeMapInterfaces<SampinganColorVariant, string>;
	font: SampinganUiThemeMapInterfaces<
		SampinganFontSizeVariant,
		SampinganUiFontInterface
	>;
	radii: SampinganUiThemeMapInterfaces<SampinganRadii, string>;
}

export type SampinganUiThemeMapInterfaces<T extends string, U> = {
	[key in T]: U;
};

export interface SampinganUiFontInterface {
	fontSize: string;
	lineHeight: SaminganLineHeight;
	fontWeight: SampinganFontWeight;
}
