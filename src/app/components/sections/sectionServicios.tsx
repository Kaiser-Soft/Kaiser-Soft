import CardServices from "../cards/cardServices";

const SectionServicios = () => {
	return (
		<section id="servicios" className="md:p-24 p-10">
			<div className="text-center mb-10">
				<h2 className="titulo_kaiser h2_font text-center ">Servicios</h2>
				<p
					className="text-center"
					style={{
						maxWidth: "75ch",
						margin: "auto",
					}}>
					En Kaiser Soft, brindamos soluciones tecnológicas personalizadas, especializándonos en desarrollo de software a medida, diseño de páginas web intuitivas y desarrollo de aplicaciones móviles innovadoras. Nuestro enfoque se centra en la creatividad, la eficiencia y la experiencia del usuario, comprometiéndonos a impulsar el éxito de nuestros clientes con tecnología de vanguardia.
				</p>
			</div>
			<div className="columns-3 seccion-cards">
				<CardServices title="Desarrollo de Software" description="Desarrollamos software a medida para resolver problemas específicos de nuestros clientes." image="illustraciones/software.webp"></CardServices>
				<CardServices title="Diseño de Páginas Web" description="Diseñamos páginas web para que su empresa tenga presencia en internet." image="illustraciones/web.webp"></CardServices>
				<CardServices title="Desarrollo de Aplicaciones Móviles" description="Desarrollamos aplicaciones móviles para que su empresa tenga presencia en dispositivos móviles." image="illustraciones/mobileapp.webp"></CardServices>
			</div>
		</section>
	);
};
export default SectionServicios;
