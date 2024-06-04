import React from "react";
import CardServices from "@/app/components/cards/cardServices"; // Importa el componente de tarjetas de servicios.

const SectionServicios = () => {
	return (
		<section id="servicios" className="p-6 md:p-12 flex justify-center items-center">
			<div className="w-3/4">
				<div className="text-center mb-6">
					<h2 className="mb-10 titulo_kaiser mt-10 font-bold lg:text-[50px] text-[30px] text-center">Servicios</h2>
					<p className="text-center text-white text-[20px]" style={{ maxWidth: "60ch", margin: "auto" }}>
						En Kaiser Soft, ofrecemos soluciones tecnológicas avanzadas, con un enfoque en el desarrollo ágil, el diseño web intuitivo y las innovaciones en movilidad y blockchain. Estamos comprometidos con la excelencia y la satisfacción del cliente.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-ful">
					<CardServices title="Desarrollo de Aplicaciones Móviles" description="Creamos aplicaciones móviles robustas y escalables que potencian su negocio en el entorno digital actual." image="illustraciones/mobileapp.webp" className="md:col-span-1" />
					<CardServices title="Desarrollo de Software" description="Desarrollamos soluciones de software a medida que impulsan eficiencia y crecimiento." image="illustraciones/software.webp" className="md:col-span-1 rounded-lg border" />
					<CardServices title="Diseño de Páginas Web" description="Diseñamos experiencias web cautivadoras que reflejan su identidad de marca y atraen clientes." image="illustraciones/web.webp" className="md:col-span-1" />
					<CardServices title="Integración de Inteligencia Artificial" description="Implementamos IA para automatizar y optimizar procesos, elevando su estrategia empresarial." image="https://cdn.pixabay.com/photo/2022/09/27/10/27/brain-7482511_1280.jpg" className="md:col-span-2" />
					<CardServices title="Servicios Blockchain" description="Desarrollamos infraestructuras blockchain para aumentar la seguridad y eficiencia operativa." image="https://cdn.pixabay.com/photo/2018/11/16/17/08/communication-3819836_1280.jpg" className="md:col-span-1 " />
				</div>
			</div>
		</section>
	);
};

export default SectionServicios;
