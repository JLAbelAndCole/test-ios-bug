import NextLink from 'next/link';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import type { LinkProps } from './types';

export function Link({ isExternalLink, children, href, className, variant, size, ...props }: LinkProps): JSX.Element {
	const classes = clsx(
		className,
		styles.link,
		{
			[styles.primaryTangerine]: variant === 'primaryTangerine',
			[styles.primaryWhite]: variant === 'primaryWhite',
			[styles.secondary]: variant === 'secondary',
			[styles.anchorTangerine]: variant === 'anchorTangerine',
		},
		{
			[styles.small]: size === 'small',
			[styles.medium]: size === 'medium',
			[styles.large]: size === 'large',
			[styles.extraWidth]: size === 'extraWidth',
		},
	);
	if (isExternalLink) {
		return (
			<a className={classes} href={href} {...props}>
				{children}
			</a>
		);
	}

	return (
		<NextLink className={classes} href={href} {...props}>
			{children}
		</NextLink>
	);
}
