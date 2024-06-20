import type { AnchorHTMLAttributes, ReactNode } from 'react';
import type { LinkProps as NextLinkProps } from 'next/link';
import type { linkSize, linkVariant } from './constants';

interface InternalLinkProps extends NextLinkProps {
	isExternalLink?: never;
	variant?: keyof typeof linkVariant;
	size?: keyof typeof linkSize;
	className?: string | undefined;
	children: ReactNode;
}

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string | undefined;
	variant?: keyof typeof linkVariant;
	size?: keyof typeof linkSize;
	isExternalLink: true;
	children: ReactNode;
}

export type LinkProps = InternalLinkProps | ExternalLinkProps;
