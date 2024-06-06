/* eslint-disable @typescript-eslint/no-namespace */
import {
	type CSSProperties,
	type ComponentClass,
	type ElementType,
	type ReactNode,
} from 'react';

type ChildrenProp = {
	children?: ReactNode;
};

type AsProp<P> = {
	as?: (
		props: P,
	) => ReturnType<Exclude<ElementType, string | ComponentClass>>;
};

type ClassNameProp = {
	className?: string;
};

type StyleProp = {
	style?: CSSProperties;
};

export type Props<T> = T;
export namespace Props {
	export type WithChildren<T> = Props<T> & ChildrenProp;
	export namespace WithChildren {
		export type WithClassName<T> = WithChildren<T> & ClassNameProp;
		export namespace WithClassName {
			export type WithAs<T> = WithClassName<T> & AsProp<T>;
		}
		export type WithAs<T> = WithChildren<T> & AsProp<T>;
		export namespace WithAs {
			export type WithClassName<T> = WithAs<T> & ClassNameProp;
		}
		export type WithStyle<T> = WithChildren<T> & StyleProp;
		export namespace WithStyle {
			export type WithClassName<T> = WithStyle<T> & ClassNameProp;
		}
	}

	export type WithClassName<T> = Props<T> & ClassNameProp;
	export namespace WithClassName {
		export type WithChildren<T> = WithClassName<T> & ChildrenProp;
		export namespace WithChildren {
			export type WithAs<T> = WithChildren<T> & AsProp<T>;
		}
		export type WithAs<T> = WithClassName<T> & AsProp<T>;
		export namespace WithAs {
			export type WithChildren<T> = WithAs<T> & ChildrenProp;
		}
		export type WithStyle<T> = WithClassName<T> & StyleProp;
		export namespace WithStyle {
			export type WithChildren<T> = WithStyle<T> & ChildrenProp;
		}
	}

	export type WithAs<T> = Props<T> & AsProp<T>;
	export namespace WithAs {
		export type WithChildren<T> = WithAs<T> & ChildrenProp;
		export namespace WithChildren {
			export type WithClassName<T> = WithChildren<T> & ClassNameProp;
		}
		export type WithClassName<T> = WithAs<T> & ClassNameProp;
		export namespace WithClassName {
			export type WithChildren<T> = WithClassName<T> & ChildrenProp;
		}
		export type WithStyle<T> = WithAs<T> & StyleProp;
		export namespace WithStyle {
			export type WithChildren<T> = WithStyle<T> & ChildrenProp;
		}
	}

	export type WithStyle<T> = Props<T> & StyleProp;
	export namespace WithStyle {
		export type WithChildren<T> = WithStyle<T> & ChildrenProp;
		export namespace WithChildren {
			export type WithClassName<T> = WithChildren<T> & ClassNameProp;
		}
		export type WithAs<T> = WithStyle<T> & AsProp<T>;
		export namespace WithAs {
			export type WithChildren<T> = WithAs<T> & ChildrenProp;
		}
		export type WithClassName<T> = WithStyle<T> & ClassNameProp;
		export namespace WithClassName {
			export type WithChildren<T> = WithClassName<T> & ChildrenProp;
		}
	}
}
