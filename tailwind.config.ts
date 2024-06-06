import type { Config } from 'tailwindcss';
import type plugin from 'tailwindcss/plugin';
import tailwindPluginHeadlessUi from '@headlessui/tailwindcss';
import { tailwindPluginGridAutoFit } from './tools/tailwind/plugins/tailwindPluginGridAutoFit';
import { tailwindPluginRadialGradient } from './tools/tailwind/plugins/tailwindPluginRadialGradient';
import { tailwindPluginSpacingDyn } from './tools/tailwind/plugins/tailwindPluginSpacingDyn';
import { tailwindPluginViewportUnit } from './tools/tailwind/plugins/tailwindPluginViewportUnit';
import { tailwindPluginTextStroke } from './tools/tailwind/plugins/tailwindPluginTextStroke';
import { tailwindPluginOutset } from './tools/tailwind/plugins/tailwindPluginOutset';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				'bg-1': 'hsl(var(--bg-1) / <alpha-value>)',
				'bg-2': 'hsl(var(--bg-2) / <alpha-value>)',
				'bg-3': 'hsl(var(--bg-3) / <alpha-value>)',
				'fg-1': 'hsl(var(--fg-1) / <alpha-value>)',
				'fg-2': 'hsl(var(--fg-2) / <alpha-value>)',
				'fg-3': 'hsl(var(--fg-3) / <alpha-value>)',
				'accent-1': 'hsl(var(--accent-1) / <alpha-value>)',
				'accent-2': 'hsl(var(--accent-2) / <alpha-value>)',
				'accent-3': 'hsl(var(--accent-3) / <alpha-value>)',
				overlay: 'hsl(var(--overlay) / <alpha-value>)',
			},
			borderRadius: {
				'4xl': 'calc(var(--radius) + var(--padding) * 4)',
				'3xl': 'calc(var(--radius) + var(--padding) * 2)',
				'2xl': 'calc(var(--radius) + var(--padding))',
				xl: 'calc(var(--radius) + var(--padding) / 2)',
				lg: 'calc(var(--radius) + var(--padding) / 4)',
				DEFAULT: 'var(--radius)',
				md: 'calc(max(4px, var(--radius) - var(--padding) / 4))',
				sm: 'calc(max(4px, var(--radius) - var(--padding) / 2))',
				xs: 'calc(max(4px, var(--radius) - var(--padding)))',
			},
			fontFamily: {
				display: 'var(--font-display)',
				sans: 'var(--font-sans)',
				mono: 'var(--font-mono)',
			},
			fontSize: {
				sm: ['8px', '10px'],
				base: ['10px', '12px'],
				md: ['12px', '16px'],
				lg: ['16px', '20px'],
				xl: ['18px', '24px'],
				'2xl': ['20px', '28px'],
			},
			transitionTimingFunction: {
				'in-sine': 'cubic-bezier(0.12, 0, 0.39, 0)',
				'out-sine': 'cubic-bezier(0.61, 1, 0.88, 1)',
				'in-out-sine': 'cubic-bezier(0.37, 0, 0.63, 1)',

				'in-quad': 'cubic-bezier(0.11, 0, 0.5, 0)',
				'out-quad': 'cubic-bezier(0.5, 1, 0.89, 1)',
				'in-out-quad': 'cubic-bezier(0.45, 0, 0.55, 1)',

				'in-cubic': 'cubic-bezier(0.32, 0, 0.67, 0)',
				'out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
				'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',

				'in-quart': 'cubic-bezier(0.5, 0, 0.75, 0)',
				'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
				'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',

				'in-quint': 'cubic-bezier(0.64, 0, 0.78, 0)',
				'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
				'in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)',

				'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
				'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',

				'in-circ': 'cubic-bezier(0.55, 0, 1, 0.45)',
				'out-circ': 'cubic-bezier(0, 0.55, 0.45, 1)',
				'in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)',

				'in-back': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
				'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
				'in-out-back': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',

				in: 'cubic-bezier(0.64, 0, 0.78, 0)',
				out: 'cubic-bezier(0.22, 1, 0.36, 1)',
				'in-out': 'cubic-bezier(0.83, 0, 0.17, 1)',
			},
			animation: {
				'bounce-elastic': 'bounce-elastic 1s ease-out forwards',

				'swipe-in-left':
					'swipe-in-left 0.2s theme(transitionTimingFunction.out) backwards',
				'swipe-in-right':
					'swipe-in-right 0.2s theme(transitionTimingFunction.out) backwards',
				'swipe-in-top':
					'swipe-in-top 0.2 theme(transitionTimingFunction.out) backwards',
				'swipe-in-bottom':
					'swipe-in-bottom 0.2s theme(transitionTimingFunction.out) backwards',
				'swipe-out-left':
					'swipe-out-left 0.2s theme(transitionTimingFunction.out) forwards',
				'swipe-out-right':
					'swipe-out-right 0.2s theme(transitionTimingFunction.out) forwards',
				'swipe-out-top':
					'swipe-out-top 0.2s theme(transitionTimingFunction.out) forwards',
				'swipe-out-bottom':
					'swipe-out-bottom 0.2s theme(transitionTimingFunction.out) forwards',

				'slide-in-left':
					'slide-in-left 0.5s theme(transitionTimingFunction.out) backwards',
				'slide-in-right':
					'slide-in-right 0.5s theme(transitionTimingFunction.out) backwards',
				'slide-in-top':
					'slide-in-top 0.5s theme(transitionTimingFunction.out) backwards',
				'slide-in-bottom':
					'slide-in-bottom 0.5s theme(transitionTimingFunction.out) backwards',
				'slide-out-left':
					'slide-out-left 0.5s theme(transitionTimingFunction.out) forwards',
				'slide-out-right':
					'slide-out-right 0.5s theme(transitionTimingFunction.out) forwards',
				'slide-out-top':
					'slide-out-top 0.5s theme(transitionTimingFunction.out) forwards',
				'slide-out-bottom':
					'slide-out-bottom 0.5s theme(transitionTimingFunction.out) forwards',

				'accordion-open':
					'accordion-open 0.5s theme(transitionTimingFunction.out) forwards',
				'accordion-close':
					'accordion-close 0.5s theme(transitionTimingFunction.out) forwards',
			},
			keyframes: {
				'bounce-elastic': {
					'0%': {
						transform: 'translateY(0%)',
					},
					'16%': {
						transform: 'translateY(-32.27%)',
					},
					'28%': {
						transform: 'translateY(13.12%)',
					},
					'44%': {
						transform: 'translateY(-4.63%)',
					},
					'59%': {
						transform: 'translateY(1.64%)',
					},
					'73%': {
						transform: 'translateY(-0.58%)',
					},
					'88%': {
						transform: 'translateY(0.2%)',
					},
					'100%': {
						transform: 'translateY(0%)',
					},
				},

				'swipe-in-left': {
					'0%': {
						transform: 'translateX(-2px) scale(0.95)',
						opacity: '0',
						display: 'none',
					},
					'100%': {
						transform: 'translateX(0%)',
					},
				},
				'swipe-in-right': {
					'0%': {
						transform: 'translateX(2px) scale(0.95)',
						opacity: '0',
						display: 'none',
					},
					'100%': {
						transform: 'translateX(0%)',
					},
				},
				'swipe-in-top': {
					'0%': {
						transform: 'translateY(-2px) scale(0.95)',
						opacity: '0',
						display: 'none',
					},
					'100%': {
						transform: 'translateY(0%)',
					},
				},
				'swipe-in-bottom': {
					'0%': {
						transform: 'translateY(2px) scale(0.95)',
						opacity: '0',
						display: 'none',
					},
					'100%': {
						transform: 'translateY(0%)',
					},
				},
				'swipe-out-left': {
					'0%': {
						transform: 'translateX(0%)',
					},
					'100%': {
						transform: 'translateX(-2px) scale(0.95)',
						opacity: '0',
						display: 'none',
					},
				},
				'swipe-out-right': {
					'0%': {
						transform: 'translateX(0%)',
					},
					'100%': {
						transform: 'translateX(2px) scale(0.95)',
						opacity: '0',
						display: 'none',
					},
				},
				'swipe-out-top': {
					'0%': {
						transform: 'translateY(0%)',
					},
					'100%': {
						transform: 'translateY(-2px) scale(0.95)',
						opacity: '0',
						display: 'none',
					},
				},
				'swipe-out-bottom': {
					'0%': {
						transform: 'translateY(0%)',
					},
					'100%': {
						transform: 'translateY(2px) scale(0.95)',
						opacity: '0',
						display: 'none',
					},
				},

				'slide-in-left': {
					'0%': {
						transform: 'translateX(-100%)',
						display: 'none',
					},
					'100%': {
						transform: 'translateX(0%)',
					},
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						display: 'none',
					},
					'100%': {
						transform: 'translateX(0%)',
					},
				},
				'slide-in-top': {
					'0%': {
						transform: 'translateY(-100%)',
						display: 'none',
					},
					'100%': {
						transform: 'translateY(0%)',
					},
				},
				'slide-in-bottom': {
					'0%': {
						transform: 'translateY(100%)',
						display: 'none',
					},
					'100%': {
						transform: 'translateY(0%)',
					},
				},
				'slide-out-left': {
					'0%': {
						transform: 'translateX(0%)',
					},
					'100%': {
						transform: 'translateX(-100%)',
						display: 'none',
					},
				},
				'slide-out-right': {
					'0%': {
						transform: 'translateX(0%)',
					},
					'100%': {
						transform: 'translateX(100%)',
						display: 'none',
					},
				},
				'slide-out-top': {
					'0%': {
						transform: 'translateY(0%)',
					},
					'100%': {
						transform: 'translateY(-100%)',
						display: 'none',
					},
				},
				'slide-out-bottom': {
					'0%': {
						transform: 'translateY(0%)',
					},
					'100%': {
						transform: 'translateY(100%)',
						display: 'none',
					},
				},

				'accordion-open': {
					'0%': {
						height: '0',
					},
					'100%': {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-close': {
					'0%': {
						height: 'var(--radix-accordion-content-height)',
					},
					'100%': {
						height: '0',
					},
				},
			},
		},
	},
	plugins: [
		tailwindPluginHeadlessUi({}) as ReturnType<typeof plugin>,
		tailwindPluginGridAutoFit,
		tailwindPluginRadialGradient,
		tailwindPluginSpacingDyn,
		tailwindPluginViewportUnit,
		tailwindPluginTextStroke,
		tailwindPluginOutset,
	],
};
export default config;
