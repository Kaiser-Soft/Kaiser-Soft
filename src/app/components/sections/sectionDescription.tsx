import React from "react";

const SectionDescription = () => {
	return (
		<section className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4">
			<div className="lg:flex-shrink-0">
				<img src="illustraciones/support-service.gif" alt="Equipo de Kaiser-soft trabajando" className="rounded-lg shadow-lg" />
			</div>
			<div className="mt-4 lg:mt-0 lg:ml-8 flex flex-col justify-center">
				<h2 className="text-3xl text-center lg:text-left font-semibold mb-2">Descripción</h2>
				<p className="text-lg text-gray-600">Kaiser-soft es una empresa dinámica en tecnologías emergentes de software. Nos especializamos en soluciones innovadoras para problemas cotidianos, priorizando la calidad y la eficiencia.</p>
				<p className="text-lg text-gray-600 mt-4">Nuestro equipo se dedica a entender y atender las necesidades únicas de cada cliente con soluciones a medida. En Kaiser-soft, valoramos la excelencia técnica y la creatividad.</p>
				<p className="text-lg text-gray-600 mt-4">Estamos comprometidos con la satisfacción del cliente y la construcción de relaciones duraderas basadas en la confianza y el éxito.</p>
				<p className="text-lg font-semibold text-center lg:text-left mt-4">¡Elige ser tu aliado tecnológico y supera desafíos con nuestras soluciones de software avanzadas!</p>
			</div>
		</section>
	);
};

export default SectionDescription;
