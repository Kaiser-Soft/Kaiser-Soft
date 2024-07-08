import React from "react";
import CardServices from "@/app/components/cards/cardServices"; // Importa el componente de tarjetas de servicios.

const SectionServicios = () => {
	return (
		<section id="servicios" className="p-6 md:p-12 flex justify-center items-center">
			<div className="w-3/4">
				<div className="text-center mb-6">
					<h2 className="mb-10 titulo_kaiser mt-10 font-bold lg:text-[50px] text-[30px] text-center">Servicios</h2>
					<p className="text-center text-white text-[20px]" style={{ maxWidth: "60ch", margin: "auto" }}>
						En Kaiser Soft, somos líderes en soluciones tecnológicas avanzadas. Nos especializamos en desarrollo ágil de software, diseño web intuitivo, y tecnologías emergentes como la movilidad y blockchain. Nuestra misión es proporcionar excelencia y garantizar la satisfacción de nuestros clientes.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-full">
					<CardServices title="Desarrollo de Aplicaciones Móviles" description="Desarrollamos aplicaciones móviles robustas y escalables para impulsar tu negocio en el competitivo mundo digital." image="illustraciones/mobileapp.webp" className="md:col-span-1" />
					<CardServices title="Desarrollo de Software a Medida" description="Creamos soluciones de software personalizadas que mejoran la eficiencia operativa y promueven el crecimiento empresarial." image="illustraciones/software.webp" className="md:col-span-1 rounded-lg border" />
					<CardServices title="Diseño de Páginas Web Profesionales" description="Diseñamos sitios web atractivos y funcionales que reflejan la identidad de tu marca y capturan la atención de tus clientes." image="illustraciones/web.webp" className="md:col-span-1" />
					<CardServices title="Integración de Inteligencia Artificial" description="Implementamos tecnologías de inteligencia artificial para automatizar procesos y optimizar estrategias empresariales, llevando tu negocio al siguiente nivel." image="https://cdn.pixabay.com/photo/2022/09/27/10/27/brain-7482511_1280.jpg" className="md:col-span-2" />
					<CardServices title="Servicios de Blockchain" description="Desarrollamos infraestructuras basadas en blockchain que aumentan la seguridad y eficiencia de tus operaciones comerciales." image="https://cdn.pixabay.com/photo/2018/11/16/17/08/communication-3819836_1280.jpg" className="md:col-span-1" />
				</div>
			</div>
		</section>

	);
};

export default SectionServicios;
