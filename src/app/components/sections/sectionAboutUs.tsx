"use client";
import Card from "@/app/components/cards/card";
const SectionAboutUs = () => {
	return (
		<section id="sobre-nosotros">
			<div className="bg-about-us "></div>
			<h2 className="mb-10 titulo_kaiser h2_font mt-10 text-center">Sobre Nosotros</h2>
			<div className="columns-3 seccion-cards">
				<Card title="Propósito" description="Impulsamos el crecimiento empresarial a través de la satisfacción del cliente, enfocándonos en innovación y calidad superior. Desarrollamos herramientas tecnológicas a medida, priorizando las necesidades y la satisfacción del cliente. Valoramos la creatividad y el trabajo en equipo para ofrecer soluciones efectivas y constantes." image="illustraciones/remote-workflow.webm"></Card>
				<Card title="Misión" description="Kaiser Soft se compromete a entregar soluciones tecnológicas de punta, adaptadas para resolver retos específicos. Empleamos estándares avanzados para asegurar productos de calidad que permitan a nuestros clientes alcanzar sus objetivos con eficacia." image="illustraciones/vr-glasses.webm"></Card>
				<Card title="Visión" description="Kaiser Soft busca liderar el mercado nacional en desarrollo de software, impulsando la innovación y definiendo la vanguardia tecnológica con soluciones y productos propios de excepcional calidad." image="illustraciones/up-rocket.webm"></Card>
			</div>
		</section>
	);
};

export default SectionAboutUs;
