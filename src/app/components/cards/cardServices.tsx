import React from "react";
import "./card.css"; // Asegúrate que los estilos estén bien definidos en este archivo CSS.

interface CardServicesProps {
	title: string;
	description: string;
	image: string;
	className?: string;
}

const CardServices = ({ title, description, image, className }: CardServicesProps) => {
	return (
		<div className={`card ${className} image-full`}>
			<figure>
				<img src={image} alt={title}></img>
			</figure>
			<div className="card-body p-8">
				<h2 className="card-title titulo_kaiser text-[20px] md:text-[30px] font-semibold">{title}</h2>
				<p className="text-md text-white text-[14px] md:text-[20px]">{description}</p>
			</div>
		</div>
	);
};

export default CardServices;
