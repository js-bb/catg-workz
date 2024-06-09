import { useMemo, type ReactNode } from 'react';
import { type Props } from '../../utils/type/Props';
import { ChevronRightIcon } from 'lucide-react';
import { Button } from '../button/Button';

export const Breadcrumb = ({
	segments,
}: Props.WithClassName<{ segments: Record<string, ReactNode> }>) => {
	return (
		<nav className='flex items-center gap-2 text-sm'>
			{useMemo(
				() =>
					Object.entries(segments).map(([url, children], i, arr) => (
						<>
							<Button
								key={i}
								href={url}
								className='!min-h-0 !min-w-0 !gap-0 rounded-sm border-none !bg-fg-1/30 !px-2 !py-1.5
									!shadow-sm'
							>
								{children}
							</Button>
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
