'use client';

import {
	type ElementType,
	useRef,
	useState,
	useEffect,
	useMemo,
	useReducer,
} from 'react';
import { type Props } from '../../utils/type/Props';
import { Panel } from '../panel/Panel';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import { Ripple } from '../button/Ripple';

export const Picker = ({
	className,
	items,
	pickedIndex: pickedIndex_ = 0,
	onPick,
}: Props.WithClassName<{
	pickedIndex?: number;
	onPick?: (index: number) => void;
	items: string[];
}>) => {
	const { ref: inViewRef, inView } = useInView();
	const [hoveredIndex, setHoveredIndex] = useState(-1);
	const [pickedIndex, setPickedIndex] = useState(pickedIndex_);
	const [pointerWithin, setPointerWithin] = useState(false);
	const [transitioning, setTransitioning] = useState(true);
	const currPanel = useRef<HTMLDivElement | null>(null);
	const currDivs = useRef<HTMLDivElement[]>([]);
	const currPanelRect = useRef<DOMRect | null>(null);
	const currDivRects = useRef<DOMRect[]>([]);
	const [, rerender] = useReducer((v: number) => v + 1, 0);

	useEffect(() => {
		currDivs.current.length = items.length;
	}, [items]);

	useEffect(() => {
		if (!currPanel.current) return;

		currPanelRect.current = currPanel.current.getBoundingClientRect();
		currDivRects.current = currDivs.current.map((div) =>
			div.getBoundingClientRect(),
		);
		rerender();
	}, [items, inView]);

	useEffect(() => {
		onPick?.(pickedIndex);
	}, [pickedIndex, onPick]);

	useEffect(() => {
		setTransitioning(false);
		const timeout = setTimeout(() => {
			setTransitioning(true);
		}, 0);
		return () => {
			clearTimeout(timeout);
		};
	}, [items.length]);

	useEffect(() => {
		setPickedIndex(pickedIndex_);
	}, [pickedIndex_]);

	return (
		<Panel
			ref={currPanel}
			variant='inset'
			className={clsx(
				'group relative flex h-9 w-max items-center gap-0',
				className,
			)}
			onPointerEnter={() => {
				setPointerWithin(true);
			}}
			onPointerLeave={() => {
				setHoveredIndex(-1);
				setPointerWithin(false);
			}}
			onPointerCancel={() => {
				setHoveredIndex(-1);
				setPointerWithin(false);
			}}
		>
			<div
				ref={inViewRef}
				className={clsx(
					'absolute bottom-0 left-[--left] top-0 w-[--width] p-1',
					transitioning && 'transition-all duration-300 ease-out',
				)}
				style={{
					'--left': `${(currDivRects.current[pickedIndex]?.left ?? 0) - (currPanelRect.current?.left ?? 0)}px`,
					'--width': `${currDivRects.current[pickedIndex]?.width ?? 0}px`,
				}}
			>
				<div className='h-full w-full rounded-full bg-[#0181FC]' />
			</div>
			<div
				className={clsx(
					'absolute bottom-0 left-[--left] top-0 w-[--width] p-1',
					transitioning && 'transition-all duration-300 ease-out',
				)}
				style={{
					'--left': `${(currDivRects.current[hoveredIndex >= 0 ? hoveredIndex : pickedIndex]?.left ?? 0) - (currPanelRect.current?.left ?? 0)}px`,
					'--width': `${currDivRects.current[hoveredIndex >= 0 ? hoveredIndex : pickedIndex]?.width ?? 0}px`,
				}}
			>
				<div
					className='h-full w-full rounded-full from-white/30 to-75% opacity-0 mix-blend-difference
						transition-opacity bg-gradient-radial-ellipse-at-center group-hover:opacity-100'
				/>
			</div>
			{useMemo(
				() =>
					items.map((string, i) => (
						<button
							key={i}
							ref={
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
								// @ts-ignore ts bug
								(v: any) => {
									// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
									currDivs.current[i] = v;
								}
							}
							className={clsx(
								`relative -ml-3.5 flex h-full items-center rounded-full px-4 font-display text-md
								font-medium`,
								i === 0 && 'ml-0',
							)}
							onClick={() => {
								setHoveredIndex(-1);
								setPickedIndex(i);
							}}
							onPointerEnter={() => {
								setHoveredIndex(i);
							}}
						>
							{string}
						</button>
					)),
				[items],
			)}
			<Ripple className='absolute z-10 rounded' />
		</Panel>
	);
};
