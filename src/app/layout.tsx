import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const productSans = localFont({
	src: [
		{
			path: './fonts/ProductSansBold.ttf',
			weight: '900',
		},
		{
			path: './fonts/ProductSansRegular.ttf',
			weight: '200',
		},
	],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Baltimore',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${productSans.className} antialiased flex flex-col`}
			>
				<Header />
				<div className='mt-[60px]'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
