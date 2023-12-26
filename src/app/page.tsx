"use client";
import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
// secciones
import SectionAboutUs from "./components/sections/sectionAboutUs";
import SectionDescription from "./components/sections/sectionDescription";
import SectionServicios from "./components/sections/sectionServicios";
import "./globals.css";

import React from "react";
import SectionUbicacion from "./components/sections/sectionUbicacion";
import SectionContacto from "./components/sections/sectionContacto";

export default function Home() {
	return (
		<>
			<Navbar></Navbar>
			<Hero></Hero>
			<main className="flex min-h-screen flex-col justify-between">
				<SectionAboutUs></SectionAboutUs>
				<SectionDescription></SectionDescription>
				<SectionServicios></SectionServicios>
				<SectionUbicacion></SectionUbicacion>
				<SectionContacto></SectionContacto>
			</main>

			<Footer></Footer>
		</>
	);
}
