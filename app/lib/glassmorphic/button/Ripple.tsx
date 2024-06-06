'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useResizeObserver from 'use-resize-observer';
import { clamp } from '../../utils/math/clamp';
import { tw } from '../../utils/tailwind/tw';
import { type Props } from '../../utils/type/Props';
import clsx from 'clsx';
import { raise } from '../../utils/functional/raise';

const RIPPLE_GRADIENT_ID = 'ripple-gradient';

export const Ripple = ({
	className,
	strategy = 'parent',
	sizeMin = 560,
	sizeMax = Infinity,
	opacityIn = 0.2,
	opacityOut = 0,
	durationMin = 0,
	durationMax = 3000,
}: Props.WithClassName<{
	strategy?: 'parent' | 'self' | 'window';
	sizeMin?: number;
	sizeMax?: number;
	opacityIn?: number;
	opacityOut?: number;
	durationMin?: number;
	durationMax?: number;
}>) => {
	const currSvg = useRef<SVGSVGElement | null>(null);
	const {
		ref: currRo,
		width: svgWidth,
		height: svgHeight,
	} = useResizeObserver();
	const onPointerDown = useCallback(
		(e: PointerEvent) => {
			if (!currSvg.current || !svgWidth || !svgHeight) return;

			const { clientX, clientY } = e;
			const { x: svgX, y: svgY } =
				currSvg.current.getBoundingClientRect();
			const rippleX = clientX - svgX;
			const rippleY = clientY - svgY;

			const size = clamp(
				Math.hypot(svgWidth / 2, svgHeight / 2),
				sizeMin,
				sizeMax,
			);
			const duration = clamp(size * 8, durationMin, durationMax);

			const ripple = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'circle',
			);
			ripple.setAttribute('cx', String(rippleX));
			ripple.setAttribute('cy', String(rippleY));
			ripple.setAttribute('fill', `url(#${RIPPLE_GRADIENT_ID})`);

			const animation = ripple.animate(
				[
					{
						r: Math.min(size / 2, 20),
						opacity: opacityIn,
					},
					{
						r: size,
						opacity: opacityOut,
					},
				],
				{
					duration,
					easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
					fill: 'forwards',
				},
			);

			animation.onfinish = () => {
				ripple.remove();
			};

			currSvg.current.appendChild(ripple);
		},
		[
			durationMax,
			durationMin,
			opacityIn,
			opacityOut,
			sizeMax,
			sizeMin,
			svgHeight,
			svgWidth,
		],
	);

	useEffect(() => {
		if (!currSvg.current) return;

		const target =
			strategy === 'parent'
				? currSvg.current.parentElement!
				: strategy === 'self'
					? currSvg.current
					: strategy === 'window'
						? window
						: raise();

		target.addEventListener(
			'pointerdown',
			onPointerDown as EventListenerOrEventListenerObject,
		);

		return () => {
			target.removeEventListener(
				'pointerdown',
				onPointerDown as EventListenerOrEventListenerObject,
			);
		};
	}, [onPointerDown, strategy]);

	return (
		<svg
			ref={(v) => {
				currSvg.current = v;
				currRo(v);
			}}
			className={clsx(
				'pointer-events-none h-full w-full mix-blend-difference',
				className,
			)}
		>
			<defs>
				<radialGradient id={RIPPLE_GRADIENT_ID}>
					<stop
						offset='0%'
						stopColor='#fff0'
					/>
					<stop
						offset='40%'
						stopColor='#ffff'
					/>
					<stop
						offset='80%'
						stopColor='#fffa'
					/>
					<stop
						offset='100%'
						stopColor='#fff0'
					/>
				</radialGradient>
			</defs>
		</svg>
	);
};
