import React from "react";

const SectionDescription = () => {
	return (
		<section className="">
			<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
				<div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold titulo_kaiser">Soluciones Personalizadas para Cada Empresa</h2>
					<p className="mb-4 text-white">Nos especializamos en proporcionar soluciones a medida, diseñadas para adaptarse a las necesidades específicas de empresas de todos los tamaños y sectores. Nuestro equipo está equipado para llevar tu proyecto desde la concepción hasta la realidad, impulsando el crecimiento y la innovación en tu empresa.</p>
					<p className="text-white">Somos reconocidos por nuestra flexibilidad en el mercado, entendiendo que la transformación digital es un viaje continuo. Nuestras soluciones son diseñadas para evolucionar junto a las diferentes etapas de tu negocio, asegurando un desarrollo sostenible y efectivo.</p>
				</div>
				<div className="grid grid-cols-2 gap-4 mt-8">
					<img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="Dynamic team collaboration" />
					<img className="w-full lg:mt-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="Innovative workspace environment" />
				</div>
			</div>
		</section>
	);
};

export default SectionDescription;
