'use client';

import { type Props } from '@/app/lib/utils/type/Props';
import { useEffect, useRef, useState } from 'react';

export const CountdownText = ({
	durationMs,
}: Props<{ durationMs: number }>) => {
	const initialTime = useRef(Date.now());
	const endTime = useRef(initialTime.current + durationMs);
	const [time, setTime] = useState(initialTime.current);
	const remaining = endTime.current - time;

	useEffect(() => {
		if (time >= endTime.current) {
			setTime(endTime.current);

			return;
		}

		const timeout = setTimeout(() => {
			setTime(Date.now());
		}, 1000);

		return () => {
			clearInterval(timeout);
		};
	}, [time]);

	return (
		<>
			{String(Math.floor(remaining / 1000 / 60)).padStart(2, '0')}:
			{String(Math.floor((remaining / 1000) % 60)).padStart(2, '0')}
		</>
	);
};
