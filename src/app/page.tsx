"use client";
import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Card from "./components/cards/card";
import CardServices from "./components/cards/cardServices";
import Footer from "./components/footer/footer";
import "./globals.css";
import Map from "./components/map-mapbox/mapbox";
import React from "react";

export default function Home() {
	return (
		<>
			<Navbar></Navbar>
			<Hero></Hero>
			<main className="flex min-h-screen flex-col items-center justify-between">
				<section id="sobre-nosotros">
					<h2 className="mb-10 titulo_kaiser h2_font mt-10">Sobre Nosotros</h2>
				</section>
				<section className="columns-3 seccion-cards mb-10">
					<Card title="Propósito" description="Impulsamos el crecimiento empresarial a través de la satisfacción del cliente, enfocándonos en innovación y calidad superior. Desarrollamos herramientas tecnológicas a medida, priorizando las necesidades y la satisfacción del cliente. Valoramos la creatividad y el trabajo en equipo para ofrecer soluciones efectivas y constantes." image="illustraciones/remote-workflow.gif"></Card>
					<Card title="Misión" description="Kaiser Soft se compromete a entregar soluciones tecnológicas de punta, adaptadas para resolver retos específicos. Empleamos estándares avanzados para asegurar productos de calidad que permitan a nuestros clientes alcanzar sus objetivos con eficacia." image="illustraciones/vr-glasses.gif"></Card>
					<Card title="Visión" description="Kaiser Soft busca liderar el mercado nacional en desarrollo de software, impulsando la innovación y definiendo la vanguardia tecnológica con soluciones y productos propios de excepcional calidad." image="illustraciones/up-rocket.gif"></Card>
				</section>
				<section>
					<div className="card lg:card-side">
						<figure>
							<img src="illustraciones/support-service.gif" alt="Descripción" />
						</figure>
						<div className="card-body">
							<h2 className="card-title titulo_kaiser h2_font">Descripción</h2>
							<p
								style={{
									maxWidth: "75ch",
								}}>
								Kaiser-soft es una empresa dinámica en tecnologías emergentes de software. Nos especializamos en soluciones innovadoras para problemas cotidianos, priorizando la calidad y la eficiencia. <br />
								Nuestro equipo se dedica a entender y atender las necesidades únicas de cada cliente con soluciones a medida. En Kaiser-soft, valoramos la excelencia técnica y la creatividad. Estamos comprometidos con la satisfacción del cliente y la construcción de relaciones duraderas basadas en la confianza y el éxito. <br />
								¡Elige ser tu aliado tecnológico y supera desafíos con nuestras soluciones de software avanzadas!
							</p>
						</div>
					</div>
				</section>
				<section id="servicios">
					<h2 className="titulo_kaiser h2_font text-center mb-10">Servicios</h2>
					<div className="columns-3 seccion-cards">
						<CardServices title="Desarrollo de Software" description="Desarrollamos software a medida para resolver problemas específicos de nuestros clientes." image="illustraciones/software.jpg"></CardServices>
						<CardServices title="Diseño de Páginas Web" description="Diseñamos páginas web para que su empresa tenga presencia en internet." image="illustraciones/web.jpg"></CardServices>
						<CardServices title="Desarrollo de Aplicaciones Móviles" description="Desarrollamos aplicaciones móviles para que su empresa tenga presencia en dispositivos móviles." image="illustraciones/mobileapp.jpg"></CardServices>
						{/* <CardServices title="Desarrollo de Videojuegos" description="Desarrollamos videojuegos para que su empresa tenga presencia en el mundo de los videojuegos." image="illustraciones/game-development.gif"></CardServices> */}
					</div>
				</section>
			</main>
			<section className="Contactanos flex justify-center mt-10 mb-10" id="ubicacion">
				{/* Dos columnas para una imagen a la izquierda y el texto a la derecha */}
				<div className="flex flex-col md:flex-row gap-32 p-10">
					<div className="card flex flex-col justify-center items-center max-w-2xl">
						<h2 className="card-title titulo_kaiser p-5 text-center h2_font">Operamos</h2>
						<Map></Map>
					</div>
				</div>
			</section>
			<section id="contacto">
				{/* <h2 className="titulo_kaiser h2_font text-center mb-10">Contacto</h2> */}
				<div className="container mx-auto px-4 py-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
						<div className="flex flex-col space-y-4">
							<h2 className="text-3xl font-bold text-center md:text-left titulo_kaiser h2_font">Ponte en Contacto</h2>
							<p className="text-lg text-gray-600">Estamos aquí para ayudarte. Contáctanos por correo o WhatsApp.</p>
							<div className="space-y-3">
								<a href="mailto:contacto@kaiser-soft.com" className="btn btn-primary flex items-center justify-center md:justify-start gap-3 px-5 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
									<img src="https://img.icons8.com/3d-fluency/94/mail.png" alt="mail" className="w-8 h-8" />
									Correo Electrónico
								</a>
								<a href="https://wa.me/573026472702" className="btn btn-accent flex items-center justify-center md:justify-start gap-3 px-5 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
									<img src="https://img.icons8.com/3d-fluency/94/whatsapp.png" alt="whatsapp" className="w-8 h-8" />
									WhatsApp
								</a>
								{/* instagram */}
								<a href="https://www.instagram.com/kaiser_soft/" className="btn btn-secondary flex items-center justify-center md:justify-start gap-3 px-5 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
									<img src="https://img.icons8.com/3d-fluency/94/instagram-new.png" alt="instagram" className="w-8 h-8" />
									Instagram
								</a>
							</div>
						</div>
						<div>
							<img src="illustraciones/Contact us-bro.png" alt="Contact Illustration" className="w-full h-auto" />
						</div>
					</div>
				</div>
			</section>
			<Footer></Footer>
		</>
	);
}
