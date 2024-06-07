import Link from 'next/link';
import { type ComponentPropsWithoutRef } from 'react';

export const AsButtonOrAnchor = (
	props:
		| ComponentPropsWithoutRef<'button'>
		| (ComponentPropsWithoutRef<'a'> & { href: string }),
) =>
	'href' in props ? (
		<Link {...(props as ComponentPropsWithoutRef<typeof Link>)} />
	) : (
		<button {...props} />
	);
