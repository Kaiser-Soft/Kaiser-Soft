import React from "react";
import "./card.css";

interface CardServicesProps {
	title: string;
	description: string;
	image: string;
	className?: string;
}

const CardServices = ({ title, description, image, className }: CardServicesProps) => {
	return (
		<div className={`card ${className} image-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
			<figure className='relative'>
				<img src={image} alt={title} className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' />
				<div className='absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-300' />
			</figure>
			<div className='card-body p-8 relative z-10 flex flex-col gap-4'>
				<h2 className='card-title titulo_kaiser text-[20px] md:text-[30px] font-semibold text-white hover:text-primary transition-colors duration-200'>
					{title}
				</h2>
				<p className='text-md text-white/90 text-[14px] md:text-[20px] leading-relaxed'>{description}</p>
			</div>
		</div>
	);
};

export default CardServices;
