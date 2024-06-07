import { useMemo, type ReactNode } from 'react';
import { type Props } from '../../utils/type/Props';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

export const Breadcrumb = ({
	segments,
}: Props.WithClassName<{ segments: Record<string, ReactNode> }>) => {
	return (
		<nav className='flex items-center gap-2 text-sm'>
			{useMemo(
				() =>
					Object.entries(segments).map(([url, children], i, arr) => (
						<>
							<Link
								key={i}
								href={url}
								className='inline-block rounded-sm bg-fg-1/10 px-2 py-1'
							>
								{children}
							</Link>
							{i !== arr.length - 1 && (
								<ChevronRightIcon size='1em' />
							)}
						</>
					)),
				[segments],
			)}
		</nav>
	);
};
