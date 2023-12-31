import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ModalProvider from '@/providers/modal-provider';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ToastProvider from '@/providers/toast-provider';

const font = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Nusa Store',
	description: 'Nusa Store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ToastProvider />
				<ModalProvider />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
