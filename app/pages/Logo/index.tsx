import Image from 'next/image';
import styles from './styles.module.scss';
import { TEST_ID_LOGO_IMAGE } from './constants';

export function Logo(): JSX.Element {
	return (
		<>
			<Image
				alt="Abel & Cole"
				className={styles.desktop}
				data-testid={TEST_ID_LOGO_IMAGE}
				height={40}
				src="/AC-Logo-Charcoal.svg"
				width={170}
			/>
			<Image
				alt="Abel & Cole"
				className={styles.mobile}
				data-testid={TEST_ID_LOGO_IMAGE}
				height={40}
				src="/AC-Stacked-Charcoal.svg"
				width={64}
			/>
		</>
	);
}