/* eslint-disable @typescript-eslint/naming-convention */
import localFont from 'next/font/local';

export const SF_Pro = localFont({
	src: [
		{
			path: './sf-pro/SF-Pro.woff2',
			style: 'normal',
		},
		{
			path: './sf-pro/SF-Pro-Italic.woff2',
			style: 'italic',
		},
	],
	fallback: ['SF Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
	variable: '--font-sf-pro',
});

export const SF_Pro_Display = localFont({
	src: [
		{
			path: './sf-pro-display/SF-Pro-Display-Ultralight.woff2',
			weight: '100',
			style: 'normal',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-UltralightItalic.woff2',
			weight: '100',
			style: 'italic',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-Thin.woff2',
			weight: '200',
			style: 'normal',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-ThinItalic.woff2',
			weight: '200',
			style: 'italic',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-LightItalic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-RegularItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-SemiboldItalic.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-Heavy.woff2',
			weight: '900',
			style: 'normal',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-HeavyItalic.woff2',
			weight: '900',
			style: 'italic',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-Black.woff2',
			weight: '950',
			style: 'normal',
		},
		{
			path: './sf-pro-display/SF-Pro-Display-BlackItalic.woff2',
			weight: '950',
			style: 'italic',
		},
	],
	variable: '--font-sf-pro-display',
	fallback: ['SF Pro Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
});

export const SF_Pro_Text = localFont({
	src: [
		{
			path: './sf-pro-text/SF-Pro-Text-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './sf-pro-text/SF-Pro-Text-LightItalic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: './sf-pro-text/SF-Pro-Text-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './sf-pro-text/SF-Pro-Text-RegularItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: './sf-pro-text/SF-Pro-Text-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './sf-pro-text/SF-Pro-Text-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: './sf-pro-text/SF-Pro-Text-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './sf-pro-text/SF-Pro-Text-SemiboldItalic.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: './sf-pro-text/SF-Pro-Text-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './sf-pro-text/SF-Pro-Text-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: './sf-pro-text/SF-Pro-Text-Heavy.woff2',
			weight: '900',
			style: 'normal',
		},
		{
			path: './sf-pro-text/SF-Pro-Text-HeavyItalic.woff2',
			weight: '900',
			style: 'italic',
		},
	],
	variable: '--font-sf-pro-text',
	fallback: ['SF Pro Text', 'ui-sans-serif', 'system-ui', 'sans-serif'],
});

export const SF_Mono = localFont({
	src: [
		{
			path: './sf-mono/SF-Mono-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './sf-mono/SF-Mono-LightItalic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: './sf-mono/SF-Mono-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './sf-mono/SF-Mono-RegularItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: './sf-mono/SF-Mono-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './sf-mono/SF-Mono-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: './sf-mono/SF-Mono-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './sf-mono/SF-Mono-SemiboldItalic.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: './sf-mono/SF-Mono-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './sf-mono/SF-Mono-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: './sf-mono/SF-Mono-Heavy.woff2',
			weight: '900',
			style: 'normal',
		},
		{
			path: './sf-mono/SF-Mono-HeavyItalic.woff2',
			weight: '900',
			style: 'italic',
		},
	],
	variable: '--font-sf-mono',
	fallback: ['SF Mono', 'ui-monospace', 'monospace'],
});
