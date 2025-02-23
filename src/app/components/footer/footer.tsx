"use strict";

import React from "react";
import Image from "next/image";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className='footer footer-center p-10 text-white'>
			<aside>
				<Image src='/logos_kaiser/KaiserLogo.svg' alt='Logo Kaiser Soft' width={400} height={400} className='logo_brand'></Image>
				<p className='font-bold'>
					Kaiser Soft
					<br />
				</p>
				<p>Copyright © {year} - Todos los derechos reservados</p>
			</aside>
			{/*  */}
		</footer>
	);
};
export default Footer;
