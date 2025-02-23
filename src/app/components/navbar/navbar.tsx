"use client";
import React, { useState, useEffect } from "react";
import "@/app/components/navbar/navbar.css";

// Definir los enlaces en un JSON para mejor mantenibilidad
const navLinks = [
	{
		label: "Sobre Nosotros",
		href: "#sobre-nosotros",
	},
	{
		label: "Servicios",
		href: "#servicios",
	},
	{
		label: "Contacto",
		href: "#contacto",
	},
];

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className={`navbar sticky top-0 z-[2] transition-all duration-300 ${isScrolled ? "backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
			<div className='navbar-start'>
				<div className='dropdown'>
					<button onClick={() => setIsMenuOpen(!isMenuOpen)} className='btn btn-ghost lg:hidden hover:bg-primary/10'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='#fff'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</button>

					<ul
						className={`menu menu-sm fixed left-0 right-0 top-[64px] min-h-screen z-[1] p-6
							text-white shadow-lg backdrop-blur-md bg-[black] lg:hidden
							transition-all duration-300
							${isMenuOpen ? "block" : "hidden"}`}>
						{navLinks.map((link, index) => (
							<li key={index}>
								<a
									href={link.href}
									className='text-lg hover:text-primary transition-colors py-4 border-b border-neutral-700'
									onClick={() => setIsMenuOpen(false)}>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
				<a href='#' className='btn btn-ghost text-xl flex items-center gap-2 text-white hover:bg-transparent'>
					<img src='logos_kaiser/KaiserLogo.svg' alt='Logo Kaiser Soft' className='logo_brand w-8 h-8' />
					<span className='font-bold'>Kaiser Soft</span>
				</a>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 text-white gap-2'>
					{navLinks.map((link, index) => (
						<li key={index}>
							<a href={link.href} className='hover:text-primary transition-colors font-medium'>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className='navbar-end'>
				<a href='#contacto' className='btn btn-primary btn-sm hidden lg:flex'>
					Contáctanos
				</a>
			</div>
		</div>
	);
};

export default Navbar;
