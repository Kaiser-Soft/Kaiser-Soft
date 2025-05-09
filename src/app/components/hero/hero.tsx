"use client";
import "./hero.css";
import "animate.css";
import { Tilt } from "react-tilt";
import Image from "next/image";

const Hero = () => {
	return (
		<div className='hero min-h-screen px-4'>
			<div className='hero-content flex-col lg:flex-row-reverse justify-center items-center gap-8'>
				<div className='flex-1 justify-center items-center max-w-[600px] w-full'>
					<Tilt className='Tilt' options={{ max: 25, scale: 1.05 }}>
						<Image
							src='/illustraciones/code.png'
							alt='Desarrollo de software Kaiser Soft'
							width={600}
							height={400}
							priority
							className='w-full h-auto'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px'
						/>
					</Tilt>
				</div>
				<div className='flex-1 text-center lg:text-left'>
					<h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white'>
						Liderando la Innovación y Calidad en <span className='titulo_kaiser block mt-2'>Desarrollo de Software</span>
					</h1>
					<p className='py-6 text-white text-lg md:text-2xl'>
						En Kaiser Soft, nos dedicamos a impulsar tu empresa hacia nuevas oportunidades.
					</p>
				</div>
			</div>
		</div>
	);
};
export default Hero;
