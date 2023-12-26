"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./mapbox.css";
const Map = () => {
	const mapContainer = useRef(null); // Marcar el componente como un componente del lado del cliente

	useEffect(() => {
		if (!mapContainer.current) return; // Si el componente no está montado, no hacer nada
		mapboxgl.accessToken = "pk.eyJ1IjoibGVvcmFtaTk5IiwiYSI6ImNsazZhMDYyNDBscTkzaHA1bW8zMmozY2YifQ.kI1mwF0KUF28ggimSNHnQw" ?? "";
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [-74.08175, 4.60971], // Coordenadas de Bogotá
			zoom: 6,
		});

		return () => map.remove(); // Limpia el mapa al desmontar el componente
	}, []);

	return <div ref={mapContainer} className="map-container shadow-xl rounded" />;
};

export default Map;
