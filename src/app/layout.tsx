import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const productSans = localFont({
	src: [
		{
			path: "./fonts/ProductSansBold.ttf",
			weight: "900",
		},
		{
			path: "./fonts/ProductSansRegular.ttf",
			weight: "200",
		},
	],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Black Economic Improvement Corporation (BEIC)",
		default: "Black Economic Improvement Corporation (BEIC)",
	},
	description:
		"Empowering individuals and communities through education, economic development, and community-building initiatives.",
	metadataBase: new URL("https://baltimore2024.vercel.app"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${productSans.className} grid antialiased`}>
				<Header />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
