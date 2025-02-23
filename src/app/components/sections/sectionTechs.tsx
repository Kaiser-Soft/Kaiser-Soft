"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // Importar estilos de paginación
import React from "react";

// Extraer los SVGs a componentes separados o un objeto de constantes
const TECH_ICONS = {
	nextjs: <img src='https://img.icons8.com/fluency-systems-filled/50/FFFFFF/nextjs.png' alt='Nextjs Logo' />,
	react: <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt='React Logo' />,
	tailwindcss: <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' alt='Tailwdin Logo' />,
	postgresql: (
		<img
			src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png'
			alt='Postgres Logo'
		/>
	),

	springboot: (
		<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1026px-Spring_Boot.svg.png' alt='Spring Boot Logo' />
	),

	fastapi: <img src='https://upload.wikimedia.org/wikipedia/commons/1/1a/FastAPI_logo.svg' alt='Fast Api Logo' />,

	mongodb: (
		<img
			src='https://storage-us-gcs.bfldr.com/8fwpg88htgg8pw6bmqx7v6vr/v/1069931062/original/MongoDB_White.png?Expires=1740420896&KeyName=gcs-bfldr-prod&Signature=8pD4enPxaBDCtmQazz7K7K42-nU='
			alt='Mongodb Logo'
		/>
	),
	javascript: <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='Javascript Logo' />,
	typescript: <img src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' alt='TypeScript Logo' />,
	java: <img src='https://upload.wikimedia.org/wikipedia/de/e/e1/Java-Logo.svg' alt='Java Logo' />,
	python: <img src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' alt='Python Logo' />,
	docker: <img src='https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png' alt='Docker Logo' />,
	nginx: <img src='https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg' alt='Nginx Logo' />,
	linux: <img src='https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg' alt='Linux Logo' />,
	aws: <img src='https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' alt='AWS Logo' />,
	azure: <img src='https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' alt='Azure Logo' />,
	gcp: <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' alt='GCP Logo' />,
	mysql: <img src='https://upload.wikimedia.org/wikipedia/mg/thumb/6/62/MySQL.svg/1920px-MySQL.svg.png' alt='MySQL Logo' />,
};

const SectionTechs = () => {
	// Configuración del Swiper
	const swiperConfig = {
		spaceBetween: 50,
		slidesPerView: 5,
		modules: [Autoplay, Pagination, Navigation],
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			480: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1280: {
				slidesPerView: 5,
				spaceBetween: 50,
			},
		},
		// pagination: { clickable: true },
	};

	return (
		<section id='tech-stack' className='container mx-auto py-10'>
			<h2 className='text-center text-[30px] lg:text-[50px] font-bold titulo_kaiser mb-10'>Nuestro Stack Tecnológico</h2>

			<div className='w-full lg:pl-[200px]'>
				<Swiper {...swiperConfig}>
					{Object.entries(TECH_ICONS).map(([name, icon]) => (
						<SwiperSlide key={name}>
							<div className='h-[100px] w-[100px] flex items-center justify-center'>
								<div className='w-full h-full relative flex items-center justify-center'>
									{React.cloneElement(icon as React.ReactElement, {
										className: "max-w-full max-h-full object-contain",
									})}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default SectionTechs;
