import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

const montserrat = Montserrat({
	subsets: ['latin'],
	style: ['normal'],
	variable: '--font-montserrat',
	weight: ['400', '500', '600', '700'],
	display: 'swap',
});

const applesAndCarrots = localFont({
	src: './applesAndCarrots.woff2',
	variable: '--font-apples-and-carrots',
});

export { montserrat, applesAndCarrots };
