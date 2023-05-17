import localFont from '@next/font/local';
import { Poppins } from '@next/font/google';

export const fontspring = localFont({
	src: './fontspring-medium.woff2',
});

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '500'],
});