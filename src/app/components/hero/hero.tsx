"use client";
import "./hero.css";
import "animate.css";
import { Tilt } from "react-tilt";

const Hero = () => {
	return (
		<div className='hero min-h-screen px-4'>
			<div className='hero-content flex-col lg:flex-row-reverse justify-center items-center gap-8'>
				<div className='flex-1 justify-center items-center max-w-[600px] w-full'>
					<Tilt className='Tilt' options={{ max: 25, scale: 1.05 }}>
						<img src='./illustraciones/code.png' className='w-full h-auto' alt='Logo Kaiser Soft' />
					</Tilt>
				</div>
				<div className='flex-1 text-center lg:text-left'>
					<h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white'>
						Liderando la Innovación y Calidad en <span className='titulo_kaiser block mt-2'>Desarrollo de Software</span>
					</h1>
					<p className='py-6 text-white text-lg md:text-2xl'>
						En Kaiser Soft, nos dedicamos a impulsar tu empresa hacia nuevas oportunidades.
					</p>
					{/* <button className='btn btn-primary w-full sm:w-auto'>Descubre Más</button> */}
				</div>
			</div>
		</div>
	);
};
export default Hero;
