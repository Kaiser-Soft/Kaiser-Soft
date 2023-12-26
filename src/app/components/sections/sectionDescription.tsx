const SectionDescription = () => {
	return (
		<section className="h-screen flex justify-center items-center">
			<div className="bg-description"></div>
			<div className="card lg:card-side">
				<figure>
					<img src="illustraciones/support-service.gif" alt="Descripción" />
				</figure>
				<div className="card-body">
					<h2 className="card-title titulo_kaiser h2_font">Descripción</h2>
					<p
						style={{
							maxWidth: "75ch",
						}}>
						Kaiser-soft es una empresa dinámica en tecnologías emergentes de software. Nos especializamos en soluciones innovadoras para problemas cotidianos, priorizando la calidad y la eficiencia. <br />
						Nuestro equipo se dedica a entender y atender las necesidades únicas de cada cliente con soluciones a medida. En Kaiser-soft, valoramos la excelencia técnica y la creatividad. Estamos comprometidos con la satisfacción del cliente y la construcción de relaciones duraderas basadas en la confianza y el éxito. <br />
						¡Elige ser tu aliado tecnológico y supera desafíos con nuestras soluciones de software avanzadas!
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionDescription;
