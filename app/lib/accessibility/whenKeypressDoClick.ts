export const whenKeypressDoClick = {
	onKeyDown(e) {
		if (e.key === 'Enter') e.currentTarget.click();
	},
	onKeyUp(e) {
		if (e.key === ' ') e.currentTarget.click();
	},
} as const satisfies Partial<React.JSX.IntrinsicElements['div']>;
