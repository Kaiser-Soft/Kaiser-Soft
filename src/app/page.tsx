"use client";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
// secciones
import SectionAboutUs from "./components/sections/sectionAboutUs";
import SectionDescription from "./components/sections/sectionDescription";
import SectionServicios from "./components/sections/sectionServicios";
import "./globals.css";

import React from "react";
// import SectionUbicacion from "./components/sections/sectionUbicacion";
import SectionContacto from "./components/sections/sectionContacto";
import SectionTechs from "./components/sections/sectionTechs";
import SectionTeam from "./components/sections/sectionTeam";
// import SectionProjects from "./components/sections/SectionProjects";

export default function Home() {
	return (
		<>
			<Navbar></Navbar>
			<Hero></Hero>
			<main>
				<SectionDescription />
				<SectionServicios />
				{/* <SectionProjects></SectionProjects> */}
				<SectionTechs />
				<SectionAboutUs />
				<SectionTeam />
				{/* <SectionUbicacion></SectionUbicacion> */}
				<SectionContacto />
			</main>

			<Footer></Footer>
		</>
	);
}
