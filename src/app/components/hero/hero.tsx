"use client";
import { Tilt } from "react-tilt";
import "./hero.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { text } from "stream/consumers";
import "animate.css";
import { PowerGlitch } from "powerglitch";

const optionsText = {
	reverse: true, // reverse the tilt direction
	max: 20, // max tilt rotation (degrees)
	perspective: 3000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1.2, // 2 = 200%, 1.5 = 150%, etc..
	speed: 1000, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Hero = () => {
	useEffect(() => {
		PowerGlitch.glitch(".hero-text", { playMode: "hover" });
	}, []);
	const [textHero, setTextHero] = useState("Desarrollamos las ideas del futuro");
	const [descripcion, setDescripcion] = useState("");
	const titulo_hero = useRef<HTMLHeadingElement | null>(null);

	const onMouseOverText1 = () => {
		if (titulo_hero.current) {
			// Eliminar y volver a agregar las clases para reiniciar la animación
			titulo_hero.current.classList.remove("animate__animated", "animate__slideInRight");
			// Usar setTimeout para asegurar que la clase se elimina antes de volver a agregarla
			setTimeout(() => {
				titulo_hero.current?.classList.add("animate__animated", "animate__slideInLeft");
			});
		}
		setTextHero("Kaiser Soft");
		// setDescripcion("Somos una empresa pequeña y dinámica, enfocada en las tecnologías emergentes para el desarrollo de software, que brinde soluciones innovadoras a problemas simples que aquejen a nuestros clientes.");
	};

	const onMouseOverText2 = () => {
		if (titulo_hero.current) {
			titulo_hero.current.classList.remove("animate__animated", "animate__slideInLeft");
			setTimeout(() => {
				titulo_hero.current?.classList.add("animate__animated", "animate__slideInRight");
			}, 1);
		}
		setTextHero("Desarrollo de Software");
		// setDescripcion("Desarrollamos software a medida para resolver problemas específicos de nuestros clientes.");
	};
	const onMouseLeaveButtonTextHero = () => {
		if (titulo_hero.current) {
			titulo_hero.current.classList.remove("animate__animated", "animate__fadeIn");
			setTimeout(() => {
				titulo_hero.current?.classList.add("animate__animated", "animate__slideInRight");
			}, 1000);
		}
		setTextHero("Desarrollamos las ideas del futuro");
	};

	return (
		<section>
			<div className="side-shadows">
				{/* <Tilt options={optionsImage}> */}
				<div className="hero min-h-screen">
					<div className="bg-inicio"></div>
					<div className="hero-overlay "></div>
					<div className="hero-content text-center text-neutral-content flex-col">
						<Tilt options={optionsText}>
							<div ref={titulo_hero}>
								<h1 className="mb-5 text-4xl md:text-9xl hero-text texto-kaiser ">{textHero}</h1>
							</div>
						</Tilt>
						<div className="max-w-xl">
							{/* <p className="mb-5 animate__animated animate__fadeIn">{descripcion}</p> */}
							<div className="">
								<a className="btn btn-primary mr-3" href="#sobre-nosotros" onMouseOver={onMouseOverText1}>
									Acerca de Nosotros
								</a>
								<a className="btn btn-secondary" href="#contacto" onMouseOver={onMouseOverText2}>
									Contáctanos
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* </Tilt> */}
			</div>
		</section>

		// <section className="bg-white" id="hover-3d" onMouseMove={hover3d}>
		//     <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
		//         <div className="mr-auto place-self-center lg:col-span-7">
		//             <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
		//                 <div className="texto-kaiser">Kaiser Soft</div>
		//             </h1>
		//             <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
		//                 ¿Quieres una vida más fácil?
		//                 <br />
		//                 En los productos de Kaiser soft tienes las ventajas
		//             </p>
		//             <div className="hr-container">
		//                 <hr className="gradient-line" />
		//             </div>
		//             <br />
		//             <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
		//                 Somos una empresa pequeña y dinámica, enfocada en las tecnologías emergentes para el desarrollo de software, que brinde soluciones innovadoras a problemas simples que aquejen a
		//                 nuestros clientes.
		//             </p>
		//         </div>
		//         <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
		//             <Image src="illustraciones/starting_bussines.svg" alt="mockup" width={500} height={500} />
		//         </div>
		//     </div>
		// </section>
	);
};
export default Hero;
