import { type ComponentPropsWithoutRef } from 'react';

export const AsButtonOrAnchor = (
	props:
		| ComponentPropsWithoutRef<'button'>
		| (ComponentPropsWithoutRef<'a'> & { href: string }),
) => ('href' in props ? <a {...props} /> : <button {...props} />);
