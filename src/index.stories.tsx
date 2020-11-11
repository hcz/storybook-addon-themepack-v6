import React from 'react';
import {themepack} from './themepack';

export default {
	title: 'Components/Button',
	parameters: {
		themepack
	}
}

const Template = (args: any) => <div {...args} />;

export const zh = () => (
	<div style={{
		display: 'inline-block',
		fontFamily: 'Arial, Helvetica, sans-serif',
		borderRadius: 'var(--col-gap-2x)',
		border: 'var(--col-gap-third) solid var(--color-bg-stripe)',
		background: 'repeating-linear-gradient(-45deg, var(--color-bg-tone) 0 2px, var(--color-bg-default) 0 7px)',
		color: 'var(--color-typo-normal)',
		textShadow: '-1px 1px 5px var(--color-bg-soft), 1px 1px 1px var(--color-bg-normal)',
		padding: 'var(--gap)'
	}}>
		見賢思齊焉。見不賢而禸自省也。
	</div>
);

export const en = () => (
	<p style={{
		display: 'block',
		fontFamily: 'Arial, Helvetica, sans-serif',
		color: 'var(--color-typo-brand)',
		background: 'var(--color-bg-brand)',
		textShadow: '-1px 1px 5px var(--color-bg-brand), 1px 1px 1px var(--color-bg-normal)',
		padding: 'var(--gap)'
	}}>
		When you meet someone better than yourself, turn your thoughts to becoming his equal.<br />
		When you meet someone not as good as you are, look within and examine your own self.
	</p>
)
