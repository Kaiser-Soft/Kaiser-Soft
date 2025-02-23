import React from "react";
import "./globals.css";
import { Figtree } from "next/font/google";
import Head from "next/head";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
	title: "Kaiser Soft | Desarrollo de Software",
	description: "Kaiser-soft es una empresa pequeña y dinámica enfocada en las tecnologías emergentes para el desarrollo de software, que brinde soluciones innovadoras a problemas simples que aquejen a nuestros clientes",
	metadataBase: new URL("https://kaiser-soft.com/"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" data-theme="light">
			<body className={figtree.className}>{children}</body>
		</html>
	);
}
