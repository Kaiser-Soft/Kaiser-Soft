import React from "react";
import "./globals.css";
import { Figtree } from "next/font/google";
import Head from "next/head";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
	title: "Kaiser Soft | Desarrollo de Software",
	description:
		"Kaiser-soft es una empresa pequeña y dinámica enfocada en las tecnologías emergentes para el desarrollo de software, que brinde soluciones innovadoras a problemas simples que aquejen a nuestros clientes",
	metadataBase: new URL("https://kaiser-soft.com/"),
	openGraph: {
		title: "Kaiser Soft | Desarrollo de Software",
		description:
			"Kaiser-soft es una empresa pequeña y dinámica enfocada en las tecnologías emergentes para el desarrollo de software, que brinde soluciones innovadoras a problemas simples que aquejen a nuestros clientes",
		url: "https://kaiser-soft.com/",
		type: "website",
		siteName: "Kaiser Soft",
	},
	// robot follow: true,
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es' data-theme='light'>
			<Head>
				<link rel='icon' href='/logos_kaiser/KaiserLogo.svg' />
				<meta name='theme-color' content='#000000' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content={metadata.description} />
				<meta name='keywords' content='Kaiser Soft, Desarrollo de Software, Innovación, Tecnología, Soluciones Digitales' />
				<meta name='author' content='Kaiser Soft' />
				<meta name='copyright' content='Kaiser Soft' />
				<meta name='language' content='Spanish' />
				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow' />
				<meta name='revisit-after' content='1 days' />
			</Head>
			<body className={figtree.className}>{children}</body>
		</html>
	);
}
