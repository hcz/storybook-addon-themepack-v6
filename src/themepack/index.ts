import {pack, ThemePack} from 'storybook-addon-themepack';
import {ThemePackOptions, ThemePackPart} from './types';

import colorMyDefault from './variables/color/colorMyDefault';
import colorMyBrand from './variables/color/colorMyBrand';
import colorMyInverse from './variables/color/colorMyInverse';
import colorMySuccess from './variables/color/colorMySuccess';

import colorProjectBrand from './variables/color/colorProjectBrand';
import colorProjectDefault from './variables/color/colorProjectDefault';
import colorProjectInverse from './variables/color/colorProjectInverse';
import colorProjectSuccess from './variables/color/colorProjectSuccess';

import gapMedium from './variables/gap/gapMedium';
import gapSmall from './variables/gap/gapSmall';

import defaultMyTheme from './variables/theme/defaultMyTheme';
import defaultProjectTheme from './variables/theme/defaultProjectTheme';

export const packOptions: ThemePack<ThemePackOptions> = {
	brand: ['Brand', pack({'My': defaultMyTheme, 'Project': defaultProjectTheme})],
	color: [
		'Color',
		pack(
			{colorMyDefault, colorMyBrand, colorMyInverse, colorMySuccess},
			({brand}: ThemePackPart) => brand ? brand === 'My' : false
		),
		pack(
			{colorProjectBrand, colorProjectDefault, colorProjectInverse, colorProjectSuccess},
			({brand}: ThemePackPart) => brand ? brand === 'Project' : false
		),
	],
	gap: ['Gap', pack({gapSmall, gapMedium})]
};

export const themepack = {
	pack: packOptions,
	preloadedState: {
		brand: 'My'
	},
	icon: 'mirror',
	usePreview: true,
	labelForClear: 'Remove',
	sortFunction: (a: string, b: string) => {
		if (a === 'brand') {
			return 1;
		}
		return a === b ? 0 : a > b ? 1 : -1;
	},
	styles: {
		preview: `
			border-color: var(--color-bg-border);
			color: var(--color-typo-brand);
			background-color: var(--color-bg-default);
		`,
		iframe: `
			background-color: var(--color-bg-default);
		`
	}
}
