import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';

const font = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Store',
	description: 'Store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
