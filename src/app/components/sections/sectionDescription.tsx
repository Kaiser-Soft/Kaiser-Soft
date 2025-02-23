import React from "react";

const SectionDescription = () => {
	return (
		<section className='py-12 md:py-20'>
			<div className='gap-8 md:gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6'>
				<div className='font-light text-gray-300 space-y-6 mb-8 lg:mb-0'>
					<h2 className='text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold titulo_kaiser leading-tight'>
						Soluciones Personalizadas para Cada Empresa
					</h2>
					<p className='text-base md:text-lg'>
						Nos especializamos en proporcionar soluciones a medida, diseñadas para adaptarse a las necesidades específicas de empresas de
						todos los tamaños y sectores. Nuestro equipo está equipado para llevar tu proyecto desde la concepción hasta la realidad,
						impulsando el crecimiento y la innovación en tu empresa.
					</p>
					<p className='text-base md:text-lg'>
						Somos reconocidos por nuestra flexibilidad en el mercado, entendiendo que la transformación digital es un viaje continuo.
						Nuestras soluciones son diseñadas para evolucionar junto a las diferentes etapas de tu negocio, asegurando un desarrollo
						sostenible y efectivo.
					</p>
				</div>
				<div className='grid grid-cols-2 gap-4 md:gap-6'>
					<img
						className='w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
						src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
						alt='Dynamic team collaboration'
						loading='lazy'
					/>
					<img
						className='w-full lg:mt-10 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
						src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
						alt='Innovative workspace environment'
						loading='lazy'
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionDescription;
