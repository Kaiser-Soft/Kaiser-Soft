import Map from "../map-mapbox/mapbox";
const SectionUbicacion = () => {
	return (
		<section className=" flex justify-center min-h-screen" id="ubicacion">
			<div className="bg-ubicacion"></div>
			<div className="flex flex-col md:flex-row gap-32 p-10">
				<div className="card flex flex-col justify-center items-center max-w-2xl">
					<h2 className="card-title titulo_kaiser p-5 text-center h2_font">Operamos</h2>
					<p className="text-lg  text-center mb-6">Actualmente estamos trabajamos remotamente para todo Colombia </p>
					<Map></Map>
				</div>
			</div>
		</section>
	);
};

export default SectionUbicacion;
