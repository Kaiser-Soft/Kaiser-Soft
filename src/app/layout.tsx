import React from "react";
import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
	title: "Kaiser Soft | Desarrollo de Software Innovador",
	description:
		"Kaiser-soft es una empresa innovadora especializada en desarrollo de software, aplicaciones móviles, web e IA. Soluciones tecnológicas personalizadas para impulsar tu negocio.",
	metadataBase: new URL("https://kaiser-soft.com/"),
	alternates: {
		canonical: "https://kaiser-soft.com",
	},
	openGraph: {
		title: "Kaiser Soft | Desarrollo de Software Innovador",
		description:
			"Kaiser-soft es una empresa innovadora especializada en desarrollo de software, aplicaciones móviles, web e IA. Soluciones tecnológicas personalizadas para impulsar tu negocio.",
		url: "https://kaiser-soft.com/",
		siteName: "Kaiser Soft",
		images: [
			{
				url: "/logos_kaiser/OGKaiser.png",
				width: 1200,
				height: 630,
				alt: "Kaiser Soft Logo",
			},
		],
		locale: "es_ES",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Kaiser Soft | Desarrollo de Software Innovador",
		description: "Kaiser-soft es una empresa innovadora especializada en desarrollo de software, aplicaciones móviles, web e IA.",
		images: ["/logos_kaiser/OGKaiser.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "tu-verification-id", // Reemplazar con el ID real
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es' data-theme='light'>
			<head>
				<link rel='icon' href='/logos_kaiser/KaiserLogo.svg' />
				<link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
				<link rel='manifest' href='/favicons/site.webmanifest' />
				<meta name='theme-color' content='#000000' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta
					name='keywords'
					content='desarrollo software, aplicaciones móviles, desarrollo web, inteligencia artificial, Kaiser Soft, soluciones tecnológicas, Colombia'
				/>
				<meta name='author' content='Kaiser Soft' />
				<meta name='copyright' content='Kaiser Soft' />
				<meta name='language' content='Spanish' />
				<meta name='revisit-after' content='7 days' />

				{/* JSON-LD para Organization */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Kaiser Soft",
							url: "https://kaiser-soft.com",
							logo: "https://kaiser-soft.com/logos_kaiser/KaiserLogo.svg",
							description:
								"Kaiser-soft es una empresa innovadora especializada en desarrollo de software, aplicaciones móviles, web e IA.",
							sameAs: ["https://www.instagram.com/kaiser_soft/", "https://github.com/Kaiser-Soft"],
							address: {
								"@type": "PostalAddress",
								addressCountry: "CO",
								addressRegion: "Bogotá",
							},
							contactPoint: {
								"@type": "ContactPoint",
								email: "contacto@kaiser-soft.com",
								contactType: "customer service",
							},
						}),
					}}
				/>
			</head>
			<body className={figtree.className}>{children}</body>
		</html>
	);
}
