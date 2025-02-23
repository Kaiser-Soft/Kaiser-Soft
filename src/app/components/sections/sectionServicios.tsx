import React from "react";
import CardServices from "@/app/components/cards/cardServices";

const SectionServicios = () => {
	return (
		<section id='servicios' className='py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-transparent to-gray-900/20'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='titulo_kaiser font-bold text-3xl md:text-4xl lg:text-5xl mb-6'>Servicios</h2>
					<p className='text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
						En Kaiser Soft, somos líderes en soluciones tecnológicas avanzadas. Nos especializamos en desarrollo ágil de software, diseño
						web intuitivo, y tecnologías emergentes como la movilidad y blockchain. Nuestra misión es proporcionar excelencia y garantizar
						la satisfacción de nuestros clientes.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					<CardServices
						title='Desarrollo de Aplicaciones Móviles'
						description='Desarrollamos aplicaciones móviles robustas y escalables para impulsar tu negocio en el competitivo mundo digital.'
						image='/illustraciones/mobileapp.webp'
						className='transform hover:scale-105 transition-transform duration-300'
					/>
					<CardServices
						title='Desarrollo de Software a Medida'
						description='Creamos soluciones de software personalizadas que mejoran la eficiencia operativa y promueven el crecimiento empresarial.'
						image='/illustraciones/software.webp'
						className='transform hover:scale-105 transition-transform duration-300'
					/>
					<CardServices
						title='Diseño de Páginas Web Profesionales'
						description='Diseñamos sitios web atractivos y funcionales que reflejan la identidad de tu marca y capturan la atención de tus clientes.'
						image='/illustraciones/web.webp'
						className='transform hover:scale-105 transition-transform duration-300'
					/>
					<CardServices
						title='Integración de Inteligencia Artificial'
						description='Implementamos tecnologías de inteligencia artificial para automatizar procesos y optimizar estrategias empresariales.'
						image='https://cdn.pixabay.com/photo/2022/09/27/10/27/brain-7482511_1280.jpg'
						className='md:col-span-2 lg:col-span-2 transform hover:scale-105 transition-transform duration-300'
					/>
					{/* <CardServices
						title='Servicios de Blockchain'
						description='Desarrollamos infraestructuras basadas en blockchain que aumentan la seguridad y eficiencia de tus operaciones comerciales.'
						image='https://cdn.pixabay.com/photo/2018/11/16/17/08/communication-3819836_1280.jpg'
						className='md:col-span-2 lg:col-span-1 transform hover:scale-105 transition-transform duration-300'
					/> */}
				</div>
			</div>
		</section>
	);
};

export default SectionServicios;
